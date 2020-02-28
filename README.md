# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `users`

**Required** The names of the person to impersonate

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
        uses: tripodsan/touch-action@v1.5.2
        with:
          repo-token: ${{ secrets.MY_GITHUB_TOKEN }}
          users: [ 'tripod-alt' ]
```

# Development

## build and deploy

```sh-session
$ npm run build
$ git commit -am"...."
$ npm release
$ git push --follow-tags
```


