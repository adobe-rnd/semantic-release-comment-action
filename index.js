/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  const user = core.getInput('user');
  if (!user) {
    throw Error('configuration is missing input for: user');
  }
  console.log(`Impersonating for '${user}'`);

  // Get client and context
  const client = new github.GitHub(
    core.getInput('repo-token', {required: true})
  );
  const { payload, ref }  = github.context;
  // console.log(`The event payload: ${JSON.stringify(payload, undefined, 2)}`);

  const owner = payload.repository.owner.name;
  const repo = payload.repository.name;
  const head = owner + ':' + ref.replace('refs/heads/', '');

  console.log('Getting pulls for', owner, repo, head);

  const pulls = await client.pulls.list({
    owner,
    repo,
    head,
    state: 'open'
  });

  const [ pull ] = pulls.data;

  if (pull) {
    console.log(`This belongs to PR #${pull.number}. Getting comments.`);

    const comments = await client.issues.listComments({
      owner,
      repo,
      issue_number: pull.number
    });

    const [ existing ] = comments.data.filter(comment => (comment.user.login === user && comment.body.match(/^This PR will trigger \*\*(no|a major|a minor|a patch) release\*\* when merged.$/)));

    if (existing) {
      console.log('Updating existing comment', existing.id);
      client.issues.updateComment({
        owner,
        repo,
        issue_number: pull.number,
        comment_id: existing.id,
        body: 'This PR will trigger **a minor** release when merged.'
      })
    } else {
      console.log('Creating a new comment');
      client.issues.createComment({
        owner,
        repo,
        issue_number: pull.number,
        body: 'This PR will trigger **no release** when merged.'
      });
    }
  }

  // check if to skip commit
  const skip = payload.commits.find((ci) => (ci.message.indexOf('[skip action]') >= 0));
  if (skip) {
    console.log(`skipping due to issue comment: ${skip.message}`);
    return;
  }

  throw new Error('failing, so that you can restart more easily.');
}

run().catch((error) => {
  console.error(error);
  core.setFailed(error.message);
});

