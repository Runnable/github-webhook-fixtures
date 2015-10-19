# github-webhook-fixtures
A set of testing fixtures for the GitHub Webhooks API v3

## Overview
This library provides a set of fixtures that can be used for testing your GitHub
webhooks API enabled applications. The provided fixtures give example headers
and body objects provided by the webhooks API.

## Usage
```js
var webhooks = require('github-webhook-fixtures');
var pushHeaders = webhooks.push.headers;
var pushBody = webhooks.push.body;
```

## Supported Webhooks
Fixtures for the following Webhooks are provided:

* `commit_comment`
* `create`
* `delete`
* `deployment`
* `deployment_status`
* `fork`
* `gollum`
* `issue_comment`
* `issues`
* `member`
* `membership`
* `page_build`
* `public`
* `pull_request`
* `pull_request_review_comment`
* `push`
* `release`
* `repository`
* `status`
* `team_add`
* `watch`

For more information about GitHub webhooks please see the
[the official GitHub Webhooks API Documentation](https://developer.github.com/v3/activity/events/types/).

## License
MIT
