const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {

  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;

// assertArraysEqual(takeUntil(data1, (item) => item < 0), [1, 2, 4, 7, 2]);
// assertArraysEqual(takeUntil(data2, item => item === ","), ['I\'ve', 'been', 'to', 'Hollywood' ]);