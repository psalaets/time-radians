const test = require('tape');
require('tape-approximately')(test);

const {secondsHand} = require('..');

const delta = 1e-10;
const sixtieth = 2 * Math.PI / 60;

test('0 seconds points up', function(t) {
  t.plan(1);

  let result = secondsHand(0);

  t.approximately(result, Math.PI / 2, delta);
});

test('2 seconds points at upper right', function(t) {
  t.plan(1);

  let result = secondsHand(2);

  t.approximately(result, (Math.PI / 2) - (sixtieth * 2), delta);
});

test('15 seconds points right', function(t) {
  t.plan(1);

  let result = secondsHand(15);

  t.approximately(result, 2 * Math.PI, delta);
});

test('19 seconds points at lower right', function(t) {
  t.plan(1);

  let result = secondsHand(19);

  t.approximately(result, (2 * Math.PI) - (sixtieth * 4), delta);
});

test('30 seconds points down', function(t) {
  t.plan(1);

  let result = secondsHand(30);

  t.approximately(result, 3 / 2 * Math.PI, delta);
});

test('33 seconds points at lower left', function(t) {
  t.plan(1);

  let result = secondsHand(33);

  t.approximately(result, (3 / 2 * Math.PI) - (sixtieth * 3), delta);
});

test('45 seconds points left', function(t) {
  t.plan(1);

  let result = secondsHand(45);

  t.approximately(result, Math.PI, delta);
});

test('50 seconds points at upper left', function(t) {
  t.plan(1);

  let result = secondsHand(50);

  t.approximately(result, Math.PI - (sixtieth * 5), delta);
});
