const test = require('tape');
require('tape-approximately')(test);

const {hoursHand} = require('..');

const delta = 1e-10;
const secondSliver = 2 * Math.PI / (3600 * 12);

test('00:00:00 points up', function(t) {
  t.plan(1);

  let result = hoursHand(0, 0, 0);

  t.approximately(result, Math.PI / 2, delta);
});

test('01:01:01 points at upper right', function(t) {
  t.plan(1);

  let result = hoursHand(1, 1, 1);

  t.approximately(result, Math.PI / 2 - (3661 * secondSliver), delta);
});

test('03:00:00 points right', function(t) {
  t.plan(1);

  let result = hoursHand(3, 0, 0);

  t.approximately(result, 2 * Math.PI, delta);
});

test('03:01:01 points at bottom right', function(t) {
  t.plan(1);

  let result = hoursHand(3, 1, 1);

  t.approximately(result, 2 * Math.PI - (61 * secondSliver), delta);
});

test('06:00:00 points down', function(t) {
  t.plan(1);

  let result = hoursHand(6, 0, 0);

  t.approximately(result, 3 / 2 * Math.PI, delta);
});

test('07:01:10 points down', function(t) {
  t.plan(1);

  let result = hoursHand(7, 1, 10);

  t.approximately(result, 3 / 2 * Math.PI - (3670 * secondSliver), delta);
});

test('09:00:00 points left', function(t) {
  t.plan(1);

  let result = hoursHand(9, 0, 0);

  t.approximately(result, Math.PI, delta);
});

test('10:10:10 points left', function(t) {
  t.plan(1);

  let result = hoursHand(10, 10, 10);

  t.approximately(result, Math.PI - (4210 * secondSliver), delta);
});

test('seconds defaults to 0', function(t) {
  t.plan(1);

  let result = hoursHand(3, 0);

  t.approximately(result, 2 * Math.PI, delta);
});

test('minutes defaults to 0', function(t) {
  t.plan(1);

  let result = hoursHand(3);

  t.approximately(result, 2 * Math.PI, delta);
});

test('24 hour time works', function(t) {
  t.plan(1);

  let result = hoursHand(15);

  t.approximately(result, 2 * Math.PI, delta);
});
