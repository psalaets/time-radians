const test = require('tape');
require('tape-approximately')(test);

const {minutesHand} = require('..');

const delta = 1e-10;
const thirtySixHundredth = 2 * Math.PI / 3600;

test('00:00 points up', function(t) {
  t.plan(1);

  let result = minutesHand(0, 0);

  t.approximately(result, Math.PI / 2, delta);
});

test('05:15 points at upper right', function(t) {
  t.plan(1);

  let result = minutesHand(5, 15);

  t.approximately(result, (Math.PI / 2) - (300 + 15) * thirtySixHundredth, delta);
});

test('15:00 points right', function(t) {
  t.plan(1);

  let result = minutesHand(15, 0);

  t.approximately(result, 2 * Math.PI, delta);
});

test('20:01 points at lower right', function(t) {
  t.plan(1);

  let result = minutesHand(20, 1);

  t.approximately(result, 2 * Math.PI - (300 + 1) * thirtySixHundredth, delta);
});

test('30:00 points down', function(t) {
  t.plan(1);

  let result = minutesHand(30, 0);

  t.approximately(result, 3 / 2 * Math.PI, delta);
});

test('31:30 points at lower left', function(t) {
  t.plan(1);

  let result = minutesHand(31, 30);

  t.approximately(result, 3 / 2 * Math.PI - (90 * thirtySixHundredth), delta);
});

test('45:00 points left', function(t) {
  t.plan(1);

  let result = minutesHand(45, 0);

  t.approximately(result, Math.PI, delta);
});

test('59:01 points at upper left', function(t) {
  t.plan(1);

  let result = minutesHand(59, 10);

  t.approximately(result, Math.PI / 2 + 50 * thirtySixHundredth, delta);
});

test('seconds defaults to 0', function(t) {
  t.plan(1);

  let result = minutesHand(15);

  t.approximately(result, 2 * Math.PI, delta);
});
