# Semantic release status action

This action checks the semantic release type of a pull request.

## Inputs

### `GITHUB_TOKEN`

**Required** A github token to create the PR comment.

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
        uses: adobe-rnd/github-semantic-release-comment-action@main
        with:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

# Development

## build and deploy

```sh-session
$ npm run build
$ git commit -am"...."
$ npm release
```


