const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//console.log(eqArrays([1,2,3], [1,2,3]));
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);