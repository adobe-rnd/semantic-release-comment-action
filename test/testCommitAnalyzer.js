import assert from 'assert';
import { analyzeCommits } from '@semantic-release/commit-analyzer';

const commits = [
  {
    sha: "f77689ef16c4335f2acacc775b7927c512f54504",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OmY3NzY4OWVmMTZjNDMzNWYyYWNhY2M3NzViNzkyN2M1MTJmNTQ1MDQ=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T15:55:35Z"
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2020-03-03T15:55:35Z"
      },
      message: "Create README.md",
      tree: {
        sha: "b80b669288e5b79da38f5f1e481fccdcb1bd67ad",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/b80b669288e5b79da38f5f1e481fccdcb1bd67ad"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/f77689ef16c4335f2acacc775b7927c512f54504",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeXn33CRBK7hj4Ov3rIwAAdHIIAE0omZL7BsloaHfx4lLaAHjO\nFndMjJdIMbh1peWJtOeyhq8HGDoj8NVRgzRVj9w7wJdnNEl8Asc5ZjCJOH+NGFfF\nD2Gzsriw1lgsA4Lqwz4SG8llph3WBkoeb+Ws3gIvTvjd6eJOOzkSo1ofsrZNiYoC\n9orZTkCnIzquyWdfDMlHc0YqxZct4r92lRaFITfl55jqtls3a7dPZlM/MPEiIzNI\nLcIkNcQD+p+vTvJOmFybvg1hkNa/nsVyOGz38vYbHEEu26WJmY1cUMySlVRO8M3D\n/X1A14BV6RTXe/G/P/rfRGvZnSPIMvwxw5TlqN24bKEMSLrowhGgWGp4/mp9yew=\n=G3VJ\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree b80b669288e5b79da38f5f1e481fccdcb1bd67ad\nparent 03b17a3321bf2578da2072c2af6b4b3a76011522\nauthor Lars Trieloff <lars@trieloff.net> 1583250935 +0100\ncommitter GitHub <noreply@github.com> 1583250935 +0100\n\nCreate README.md"
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/f77689ef16c4335f2acacc775b7927c512f54504",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/f77689ef16c4335f2acacc775b7927c512f54504",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/f77689ef16c4335f2acacc775b7927c512f54504/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars3.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "03b17a3321bf2578da2072c2af6b4b3a76011522",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/03b17a3321bf2578da2072c2af6b4b3a76011522",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/03b17a3321bf2578da2072c2af6b4b3a76011522"
      }
    ]
  },
  {
    sha: "6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OjZmMmY4YWU4NGU1ZTVkNDQyNGVjMGU1NDZiNWM2OGEzNmM3N2RlMjM=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T15:58:20Z"
      },
      committer: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T15:58:20Z"
      },
      message: "chore(ci): trigger ci [skip action]",
      tree: {
        sha: "b80b669288e5b79da38f5f1e481fccdcb1bd67ad",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/b80b669288e5b79da38f5f1e481fccdcb1bd67ad"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "f77689ef16c4335f2acacc775b7927c512f54504",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/f77689ef16c4335f2acacc775b7927c512f54504",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/f77689ef16c4335f2acacc775b7927c512f54504"
      }
    ]
  },
  {
    sha: "3b184b8204fb9d95f82f9954cf76bfbcab382a1c",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OjNiMTg0YjgyMDRmYjlkOTVmODJmOTk1NGNmNzZiZmJjYWIzODJhMWM=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:10:11Z"
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2020-03-03T16:10:11Z"
      },
      message: "break a line",
      tree: {
        sha: "4fe1f7f7cd7c9a6c0258add26816e734672e7e6f",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/4fe1f7f7cd7c9a6c0258add26816e734672e7e6f"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/3b184b8204fb9d95f82f9954cf76bfbcab382a1c",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeXoFjCRBK7hj4Ov3rIwAAdHIIAD/3e13u/upnYuowvalsqkxx\nBMi+rCttanF+VfIHq56wA9R6py1mNxHUKfah4k8+s8z9EJZOhTCI7n1flOYR85oB\nmYmMY0QDqby05hYHROY+hNR2Fd5MwDDj8E3bUudKFL7TjfzL2d1h6lf5x0RVqu/I\njd1gkm9gEuZJkv+d1pDtzL6SzUJkIpk207w+Grctfho4Fkvccb0S2Kf9jw6164SG\n1mRKuBqtPA3g+kXT00lmUzObK+2/TlFCNOOhRE8FtmTbc18Zf5r1aPcq64zXnbR/\n5PgPLzQQAba7ICHsVfnysGX8kyhizkEU/f5gQtg7cT1K3AxEDVJ0aP7ces1O2WM=\n=HnDe\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 4fe1f7f7cd7c9a6c0258add26816e734672e7e6f\nparent 6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23\nauthor Lars Trieloff <lars@trieloff.net> 1583251811 +0100\ncommitter GitHub <noreply@github.com> 1583251811 +0100\n\nbreak a line"
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/3b184b8204fb9d95f82f9954cf76bfbcab382a1c",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/3b184b8204fb9d95f82f9954cf76bfbcab382a1c",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/3b184b8204fb9d95f82f9954cf76bfbcab382a1c/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars3.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/6f2f8ae84e5e5d4424ec0e546b5c68a36c77de23"
      }
    ]
  },
  {
    sha: "81bebd56ad34bb27961f9d5aa3a3a07e61db84c4",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OjgxYmViZDU2YWQzNGJiMjc5NjFmOWQ1YWEzYTNhMDdlNjFkYjg0YzQ=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:10:28Z"
      },
      committer: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:10:28Z"
      },
      message: "chore(ci): trigger ci [skip action]",
      tree: {
        sha: "4fe1f7f7cd7c9a6c0258add26816e734672e7e6f",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/4fe1f7f7cd7c9a6c0258add26816e734672e7e6f"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/81bebd56ad34bb27961f9d5aa3a3a07e61db84c4",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/81bebd56ad34bb27961f9d5aa3a3a07e61db84c4",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/81bebd56ad34bb27961f9d5aa3a3a07e61db84c4",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/81bebd56ad34bb27961f9d5aa3a3a07e61db84c4/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "3b184b8204fb9d95f82f9954cf76bfbcab382a1c",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/3b184b8204fb9d95f82f9954cf76bfbcab382a1c",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/3b184b8204fb9d95f82f9954cf76bfbcab382a1c"
      }
    ]
  },
  {
    sha: "f949728549d63228c4ef29703b0d5acf4f6eed4c",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OmY5NDk3Mjg1NDlkNjMyMjhjNGVmMjk3MDNiMGQ1YWNmNGY2ZWVkNGM=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:11:41Z"
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2020-03-03T16:11:41Z"
      },
      message: "Update README.md",
      tree: {
        sha: "26a032d8a9affc0cb141230a51ba04b095f7f94e",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/26a032d8a9affc0cb141230a51ba04b095f7f94e"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/f949728549d63228c4ef29703b0d5acf4f6eed4c",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeXoG+CRBK7hj4Ov3rIwAAdHIIABy/U++JPJh1jNa7j/BnYJCq\nsioUH16bR6Wwobl4uojaWwwLTH9dCVsLJLRw1SN3iKmcBZRVT2i1lctTdtb6RJ9Y\n/FF+8oh+5tVufdzudjOenctSEnVSb69fUW/U3suRBoTQOGuIYQjpvQZLIAw0lk2v\nUawLJRUjZvooVNtQsgcDaTMLEEb4CKibhE/EQ15rKa2/FWY5h2N4jUm9s6Mijg8L\n2HQLJ0n68QGPKF8Ik1vZYW+Z9cAhsT9gxPxGs805sBrmMLJaDTSswnVDU/dj6ehI\ntB/isA/yJzLH7l6lmWEG4IFKmJdDEzEPXvtGxAbWHDcGAD626SBGqRgYQdeOoEU=\n=uOd/\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 26a032d8a9affc0cb141230a51ba04b095f7f94e\nparent 81bebd56ad34bb27961f9d5aa3a3a07e61db84c4\nauthor Lars Trieloff <lars@trieloff.net> 1583251901 +0100\ncommitter GitHub <noreply@github.com> 1583251901 +0100\n\nUpdate README.md"
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/f949728549d63228c4ef29703b0d5acf4f6eed4c",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/f949728549d63228c4ef29703b0d5acf4f6eed4c",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/f949728549d63228c4ef29703b0d5acf4f6eed4c/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars3.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "81bebd56ad34bb27961f9d5aa3a3a07e61db84c4",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/81bebd56ad34bb27961f9d5aa3a3a07e61db84c4",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/81bebd56ad34bb27961f9d5aa3a3a07e61db84c4"
      }
    ]
  },
  {
    sha: "87028bc51c62e8d3f718d7ff1b21462a930162d0",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2Ojg3MDI4YmM1MWM2MmU4ZDNmNzE4ZDdmZjFiMjE0NjJhOTMwMTYyZDA=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:11:57Z"
      },
      committer: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:11:57Z"
      },
      message: "chore(ci): trigger ci [skip action]",
      tree: {
        sha: "26a032d8a9affc0cb141230a51ba04b095f7f94e",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/26a032d8a9affc0cb141230a51ba04b095f7f94e"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/87028bc51c62e8d3f718d7ff1b21462a930162d0",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/87028bc51c62e8d3f718d7ff1b21462a930162d0",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/87028bc51c62e8d3f718d7ff1b21462a930162d0",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/87028bc51c62e8d3f718d7ff1b21462a930162d0/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "f949728549d63228c4ef29703b0d5acf4f6eed4c",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/f949728549d63228c4ef29703b0d5acf4f6eed4c",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/f949728549d63228c4ef29703b0d5acf4f6eed4c"
      }
    ]
  },
  {
    sha: "f8f34793be96fc9a41a6009eac194e2f176fe68b",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OmY4ZjM0NzkzYmU5NmZjOWE0MWE2MDA5ZWFjMTk0ZTJmMTc2ZmU2OGI=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:13:06Z"
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2020-03-03T16:13:06Z"
      },
      message: "don't use a tag",
      tree: {
        sha: "9a223ddd67e3e8978a21dee917669436d65850a2",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/9a223ddd67e3e8978a21dee917669436d65850a2"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/f8f34793be96fc9a41a6009eac194e2f176fe68b",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeXoISCRBK7hj4Ov3rIwAAdHIIAKoOIJjJCYPkPRUjc/U3LBGA\nQilAn+CviHvQ/2KBwyMCDwjbTYoHvrQCUIxrfB6Hw2k4fCreHOo2X3AiWOPCblRa\nwr8EAnA25Bo8u+ZKbB/Ub/mVZz7XBQiqiLm2mvJ5cruxi5u89ue2JpugfzIusK9l\n4d5tiEer8r5dmyDXNVBQzWAtdgCGYQl5SH1VOxwFQ9ZmlxQwJ+NdGKXP3QFtBg3E\nz78+plurpLvIIm3DzjjQj/gZ7BY3+xtYze54r34ohIqvgg2JwxLAUft2Do3C6ZWC\nJv4X/cWfqGH2gEifZH+woAaKi8qy+HQqDIbk3LRIW4FUF8kGQ639R+NC1inCV0k=\n=A7qj\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 9a223ddd67e3e8978a21dee917669436d65850a2\nparent 87028bc51c62e8d3f718d7ff1b21462a930162d0\nauthor Lars Trieloff <lars@trieloff.net> 1583251986 +0100\ncommitter GitHub <noreply@github.com> 1583251986 +0100\n\ndon't use a tag"
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/f8f34793be96fc9a41a6009eac194e2f176fe68b",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/f8f34793be96fc9a41a6009eac194e2f176fe68b",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/f8f34793be96fc9a41a6009eac194e2f176fe68b/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars3.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "87028bc51c62e8d3f718d7ff1b21462a930162d0",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/87028bc51c62e8d3f718d7ff1b21462a930162d0",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/87028bc51c62e8d3f718d7ff1b21462a930162d0"
      }
    ]
  },
  {
    sha: "44eec7620be9c42b1f7d9d7ae35850b0acf24606",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OjQ0ZWVjNzYyMGJlOWM0MmIxZjdkOWQ3YWUzNTg1MGIwYWNmMjQ2MDY=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:13:58Z"
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2020-03-03T16:13:58Z"
      },
      message: "use master ref",
      tree: {
        sha: "d18cac169989b14f9c81eb93fb898dac1a39041b",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/d18cac169989b14f9c81eb93fb898dac1a39041b"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/44eec7620be9c42b1f7d9d7ae35850b0acf24606",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeXoJGCRBK7hj4Ov3rIwAAdHIIAIsV/ezCKhH6kHIVyuctXncd\ngy9UDF+XGWCRpLIDtytzGKQYmdL9Y0Z7Cbx8UZWv6iL/b+CkfUBiMnGmmVAMOIOP\nHjILiXeYd2hO9iucn98mmWW+qFPUxFlgsLxTc+xT21mmvKwdNRRc9P/LeYT6HkL0\naR5hlMS/x80N4resQhIICN8NIz0rBNFz2LrdAfaXnG0tGwdK55zr+7ClWIF+9X9w\n6abEFhTyzXHkGGb+EaHc2Yc3GPXL6+qn/3uvbq/iaPXzXjaC02RTn5/TX682dE8q\nYGrlbBBAoQflOAkaJo4oZRZA/Jv8sgqyJFZu2fwAeLHWH+q1+qF60EgvueFaeq0=\n=oOGR\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree d18cac169989b14f9c81eb93fb898dac1a39041b\nparent f8f34793be96fc9a41a6009eac194e2f176fe68b\nauthor Lars Trieloff <lars@trieloff.net> 1583252038 +0100\ncommitter GitHub <noreply@github.com> 1583252038 +0100\n\nuse master ref"
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/44eec7620be9c42b1f7d9d7ae35850b0acf24606",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/44eec7620be9c42b1f7d9d7ae35850b0acf24606",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/44eec7620be9c42b1f7d9d7ae35850b0acf24606/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars3.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "f8f34793be96fc9a41a6009eac194e2f176fe68b",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/f8f34793be96fc9a41a6009eac194e2f176fe68b",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/f8f34793be96fc9a41a6009eac194e2f176fe68b"
      }
    ]
  },
  {
    sha: "31f8f9652b3fdd1dac83b1add05c2646a70594b8",
    node_id:
      "MDY6Q29tbWl0MTU3NDUzNjc2OjMxZjhmOTY1MmIzZmRkMWRhYzgzYjFhZGQwNWMyNjQ2YTcwNTk0Yjg=",
    commit: {
      author: {
        name: "Lars Trieloff",
        email: "lars@trieloff.net",
        date: "2020-03-03T16:20:22Z"
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2020-03-03T16:20:22Z"
      },
      message: "feat(index): just some updates\n\nBREAKING CHANGE: foo",
      tree: {
        sha: "d18cac169989b14f9c81eb93fb898dac1a39041b",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/git/trees/d18cac169989b14f9c81eb93fb898dac1a39041b"
      },
      url:
        "https://api.github.com/repos/trieloff/helix-demo/git/commits/31f8f9652b3fdd1dac83b1add05c2646a70594b8",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeXoPGCRBK7hj4Ov3rIwAAdHIIAAnLxVn0H2bydH5HDV6fPW5t\nZHPDKA1njj+SetrlvvJnjqhezmAx39ne8C6e+TvrepzPmY+uJWhtVW5/c8Tuy0ER\n1yQQcHDjHz+yhYuRp7SDExowvK8Y1szgAfwZnrWPWGsQebSK8Dy+C0mWf7ff77eF\ngGw+o5bR8K9lgOvWf/Y0rC+Zb01jSpgTFDS2PYgo5dyuzz2eg0U5LUNrfzmzzc4f\nRj7Y87uWd0a1lfqq9MkqMg26S3h4gGjjPTTAAoHbdsOzGXZa8KjvSgO/EPhoMROV\nTvyE5W4YoNulztWdvYa0CROPMBzU9FnqT4I0KLlHUazW7To7Rqluy0/zsVJENU8=\n=HHYT\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree d18cac169989b14f9c81eb93fb898dac1a39041b\nparent 44eec7620be9c42b1f7d9d7ae35850b0acf24606\nparent 4a45518a75df0a0821fc93cb2e12c3f7b4b54ab5\nauthor Lars Trieloff <lars@trieloff.net> 1583252422 +0100\ncommitter GitHub <noreply@github.com> 1583252422 +0100\n\nMerge branch 'master' into trieloff-patch-1"
      }
    },
    url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/31f8f9652b3fdd1dac83b1add05c2646a70594b8",
    html_url:
      "https://github.com/trieloff/helix-demo/commit/31f8f9652b3fdd1dac83b1add05c2646a70594b8",
    comments_url:
      "https://api.github.com/repos/trieloff/helix-demo/commits/31f8f9652b3fdd1dac83b1add05c2646a70594b8/comments",
    author: {
      login: "trieloff",
      id: 39613,
      node_id: "MDQ6VXNlcjM5NjEz",
      avatar_url: "https://avatars3.githubusercontent.com/u/39613?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trieloff",
      html_url: "https://github.com/trieloff",
      followers_url: "https://api.github.com/users/trieloff/followers",
      following_url:
        "https://api.github.com/users/trieloff/following{/other_user}",
      gists_url: "https://api.github.com/users/trieloff/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/trieloff/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trieloff/subscriptions",
      organizations_url: "https://api.github.com/users/trieloff/orgs",
      repos_url: "https://api.github.com/users/trieloff/repos",
      events_url: "https://api.github.com/users/trieloff/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/trieloff/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars3.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "44eec7620be9c42b1f7d9d7ae35850b0acf24606",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/44eec7620be9c42b1f7d9d7ae35850b0acf24606",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/44eec7620be9c42b1f7d9d7ae35850b0acf24606"
      },
      {
        sha: "4a45518a75df0a0821fc93cb2e12c3f7b4b54ab5",
        url:
          "https://api.github.com/repos/trieloff/helix-demo/commits/4a45518a75df0a0821fc93cb2e12c3f7b4b54ab5",
        html_url:
          "https://github.com/trieloff/helix-demo/commit/4a45518a75df0a0821fc93cb2e12c3f7b4b54ab5"
      }
    ]
  }
];

describe("Testing Commit Analyzer", () => {
  it("Analyzes commits", async () => {
    const pluginConfig = {
      //preset: 'angular',
      releaseRules: [{breaking: true, release: 'major'},
      {revert: true, release: 'patch'},
      // Angular
      {type: 'feat', release: 'minor'},
      {type: 'fix', release: 'patch'},
      {type: 'perf', release: 'patch'},]
    };
    const context = {
      commits: commits.map(commit => commit.commit),
      logger: console
    };
    const result = await analyzeCommits(pluginConfig, context);
    assert.equal(result, 'major');

  });
});
