
const assertArraysEqual = require('./assertArraysEqual');
  
 
const middle = function(array) {
  let length = array.length;
  let middle = Math.floor(length / 2);
  let middleNumbers = [];

  if (length === 1 || length === 2) {
    return middleNumbers;
  }
  if (length % 2 === 0) {
    // if even
    middleNumbers.push(array[middle - 1], array[middle]);
  }
  else {
    //if odd
    middleNumbers.push(array[middle]);
  }
  return middleNumbers;
};

module.exports = middle;