# Semantic release status action

This action checks the semantic release type of a pull request.

## Inputs

### `repo-token`

**Required** A github token to issue the dummy commit.

## Example usage

```
on:
  push:
    branches-ignore:
      - 'master'

jobs:
  ci_trigger:
    runs-on: ubuntu-latest
    name: Comment Semantic Release Status
    steps:
      - name: Comment
        id: comment
        uses: trieloff/semantic-release-comment-action@use-comment-marker
        with:
          repo-token: ${{secrets.GITHUB_TOKEN}}

```

# Development

## build and deploy

```sh-session
$ npm run build
$ git commit -am"...."
$ npm release
```


