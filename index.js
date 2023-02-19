const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countletters = require('./letterPositions');
const letterPositions = require('./letterPositions');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');


module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countletters: countletters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  head:   head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  tail:   tail,
  takeUntil: takeUntil,
  without: without,
};