# Trigger CI Action

This action creates a dummy, empty commit when a commit is pushed by
another user. this can be used to trigger a CI workflow with a different user.

## Inputs

### `user`

**Required** The username of the person to impersonate

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
    name: Impersonated CI Trigger
    steps:
      - name: Trigger
        id: trigger
        uses: tripodsan/touch-action@v1.5.7
        with:
          repo-token: ${{ secrets.MY_GITHUB_TOKEN }}
          user: tripod-alt
```

# Development

## build and deploy

```sh-session
$ npm run build
$ git commit -am"...."
$ npm release
```


