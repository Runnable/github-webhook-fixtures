'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;
var Code = require('code');
var expect = Code.expect;

var githubWebhookFixtures = require('../index');

describe('index', function() {
  it('should expose the `commit_comment` event type', function (done) {
    var webhookName = 'commit_comment';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `create` event type', function (done) {
    var webhookName = 'create';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `delete` event type', function (done) {
    var webhookName = 'delete';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `deployment` event type', function (done) {
    var webhookName = 'deployment';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `deployment_status` event type', function (done) {
    var webhookName = 'deployment_status';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `fork` event type', function (done) {
    var webhookName = 'fork';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `gollum` event type', function (done) {
    var webhookName = 'gollum';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `issue_comment` event type', function (done) {
    var webhookName = 'issue_comment';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `issues` event type', function (done) {
    var webhookName = 'issues';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `member` event type', function (done) {
    var webhookName = 'member';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `membership` event type', function (done) {
    var webhookName = 'membership';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `page_build` event type', function (done) {
    var webhookName = 'page_build';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `public` event type', function (done) {
    var webhookName = 'public';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `pull_request` event type', function (done) {
    var webhookName = 'pull_request';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `pull_request_review_comment` event type', function (done) {
    var webhookName = 'pull_request_review_comment';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `push` event type', function (done) {
    var webhookName = 'push';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `release` event type', function (done) {
    var webhookName = 'release';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `repository` event type', function (done) {
    var webhookName = 'repository';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `status` event type', function (done) {
    var webhookName = 'status';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `team_add` event type', function (done) {
    var webhookName = 'team_add';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });

  it('should expose the `watch` event type', function (done) {
    var webhookName = 'watch';
    expect(githubWebhookFixtures[webhookName]).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers).to.be.an.object();
    expect(githubWebhookFixtures[webhookName].headers['X-Github-Event'])
      .to.equal(webhookName);
    expect(githubWebhookFixtures[webhookName].body).to.be.an.object();
    done();
  });
});
