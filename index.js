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
  console.log(`The event payload: ${JSON.stringify(payload, undefined, 2)}`);

  const owner = payload.repository.owner.name;
  const repo = payload.repository.name;

  console.log('Getting pulls for', owner, repo, ref);

  const pulls = client.pulls.list({
    owner,
    repo
  });

  console.log(`All PRs in the repo ${JSON.stringify(pulls, undefined, 2)}`);

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

