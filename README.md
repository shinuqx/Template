
# Readme
## Technology stack

react@17.0.1 + react-dom@17.0.1 + react-query@3.13.10 + webpack@4.44.2 + react-scripts@4.0.3



## Project Introduction

```
git clone --depth 1 https://github.com/shinuqx/Template.git 

cd Template 

npm install 

npm start 
```
Open another node service to run the webpack watch service. Its not needed since npm start will take care of .tsx files transpiling to js.
```
npm run watch
```
#### Notice

```
If you want to publish your app, use the following line of commands
```
npm run vercel-build 

```
For React-Query, I am fetching the data from the github user repos.
This is the basic structure of the data returned by the repo server.

```
  {
    "id": 359534542,
    "node_id": "MDEwOlJlcG9zaXRvcnkzNTk1MzQ1NDI=",
    "name": "Template",
    "full_name": "shinuqx/Template",
    "private": false,
    "owner": {
      "login": "XXXXXX",
      "id": 000000,
      "node_id": "MDQ6VXNlcjgyODMzMzA1",
      "avatar_url": "https://avatars.githubusercontent.com/u/82833305?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/shinuqx",
      "html_url": "https://github.com/shinuqx",
      "followers_url": "https://api.github.com/users/shinuqx/followers",
      "following_url": "https://api.github.com/users/shinuqx/following{/other_user}",
      "gists_url": "https://api.github.com/users/shinuqx/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/shinuqx/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/shinuqx/subscriptions",
      "organizations_url": "https://api.github.com/users/shinuqx/orgs",
      "repos_url": "https://api.github.com/users/shinuqx/repos",
      "events_url": "https://api.github.com/users/shinuqx/events{/privacy}",
      "received_events_url": "https://api.github.com/users/shinuqx/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/shinuqx/Template",
    "description": "React + TypeScript+WebPack+React-Query",
    "fork": false,
    "url": "https://api.github.com/repos/shinuqx/Template",
    "forks_url": "https://api.github.com/repos/shinuqx/Template/forks",
    "keys_url": "https://api.github.com/repos/shinuqx/Template/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/shinuqx/Template/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/shinuqx/Template/teams",
    "hooks_url": "https://api.github.com/repos/shinuqx/Template/hooks",
    "issue_events_url": "https://api.github.com/repos/shinuqx/Template/issues/events{/number}",
    "events_url": "https://api.github.com/repos/shinuqx/Template/events",
    "assignees_url": "https://api.github.com/repos/shinuqx/Template/assignees{/user}",
    "branches_url": "https://api.github.com/repos/shinuqx/Template/branches{/branch}",
    "tags_url": "https://api.github.com/repos/shinuqx/Template/tags",
    "blobs_url": "https://api.github.com/repos/shinuqx/Template/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/shinuqx/Template/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/shinuqx/Template/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/shinuqx/Template/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/shinuqx/Template/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/shinuqx/Template/languages",
    "stargazers_url": "https://api.github.com/repos/shinuqx/Template/stargazers",
    "contributors_url": "https://api.github.com/repos/shinuqx/Template/contributors",
    "subscribers_url": "https://api.github.com/repos/shinuqx/Template/subscribers",
    "subscription_url": "https://api.github.com/repos/shinuqx/Template/subscription",
    "commits_url": "https://api.github.com/repos/shinuqx/Template/commits{/sha}",
    "created_at": "2021-04-19T16:57:13Z",
    "updated_at": "2021-04-19T17:28:19Z",
    "pushed_at": "2021-04-19T17:28:17Z",
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main"
  }

```
The API response is processed by react-Query and return data as JSON data for the Functional Component.
```
## Description 

>  Development Environment: Windows 10  Chrome 90.0.4430.72 (64)bit


>  If you have any questions, please mention them directly in the Issues. I will try to answer, or you find that the problem has a very good fix, welcome PR

## Features list
- [√] The project is loaded by npm
- [√] All the components are built using TypeScript
- [√] No Javascript file manually created
- [√] Sample React-Query Demo, fetches the github Repo
- [√] Sample Functional Component
- [√] Sample Class Component

## Screenshots

### Landing Page

<img src="https://github.com/shinuqx/Template/blob/main/app-screenshot.png" width="973" height="557"/>

## License

[MIT](https://github.com/shinuqx/Template/blob/master/LICENSE)
