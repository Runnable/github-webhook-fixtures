'use strict';

/**
 * Utility for building a specific webhook event type fixture.
 * @param {string} eventName Name of the event.
 * @param {object} body JSON object represent an expected body for the hook.
 * @return {object} A full fixture with the payload, headers, and body expected
 *   from the webhook.
 */
module.exports = function buildWebhookFixture(eventName, body) {
  return {
    headers: {
      'Host': 'localhost:4567',
      'X-Github-Delivery': '72d3162e-cc78-11e3-81ab-4c9367dc0958',
      'User-Agent': 'GitHub-Hookshot/044aadd',
      'Content-Type': 'application/json',
      'Content-Length': JSON.toString(body).length,
      'X-Github-Event': eventName
    },
    body: body
  };
};
