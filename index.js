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
  const { payload }  = github.context;
  // console.log(`The event payload: ${JSON.stringify(payload, undefined, 2)}`);

  // check if to skip commit
  const skip = payload.commits.find((ci) => (ci.message.indexOf('[skip action]') >= 0));
  if (skip) {
    console.log(`skipping due to issue comment: ${skip.message}`);
    return;
  }

  // check if any commit is from a configured user
  const validCommit = payload.commits.find((ci) => (user === ci.author.username));
  if (!validCommit) {
    console.log(`no commit found by configured user. skipping.`);
    return;
  }

  const owner = payload.repository.owner.name;
  const repo = payload.repository.name;
  let ref = payload.ref;
  if (ref.startsWith('refs/')) {
    ref = ref.substring(5);
  }

  const opts = {
    owner,
    repo,
    message: 'chore(ci): trigger ci [skip action]',
    tree: payload.head_commit.tree_id,
    parents: [payload.head_commit.id],
  };

  // create a the commit
  // console.log('create commit with', opts);
  const res = await client.git.createCommit(opts);
  // console.log('result', res);
  console.log('created commit', res.data.sha);

  // update reference (push)
  const updateOpts = {
    owner,
    repo,
    ref,
    sha: res.data.sha,
    force: false,
  };
  // console.log('pushing', updateOpts);
  const res2 = await client.git.updateRef(updateOpts);
  // console.log('result', res2);
  console.log('pushed ref:', res2.data.object.url);
}

run().catch((error) => {
  console.error(error);
  core.setFailed(error.message);
});

