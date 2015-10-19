'use strict';

/**
 * Github Webhooks API v3 Fixtures Module.
 * @module github-webhook-fixtures
 */
module.exports = {
  commit_comment: require('./lib/commit_comment'),
  create: require('./lib/create'),
  'delete': require('./lib/delete'),
  deployment: require('./lib/deployment'),
  deployment_status: require('./lib/deployment_status'),
  fork: require('./lib/fork'),
  gollum: require('./lib/gollum'),
  issue_comment: require('./lib/issue_comment'),
  issues: require('./lib/issues'),
  member: require('./lib/member'),
  membership: require('./lib/membership'),
  page_build: require('./lib/page_build'),
  'public': require('./lib/public'),
  pull_request: require('./lib/pull_request'),
  pull_request_review_comment: require('./lib/pull_request_review_comment'),
  push: require('./lib/push'),
  release: require('./lib/release'),
  repository: require('./lib/repository'),
  status: require('./lib/status'),
  team_add: require('./lib/team_add'),
  watch: require('./lib/watch')
};
