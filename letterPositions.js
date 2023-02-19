const eqArrays = require('./eqArrays');
  
const assertArraysEqual = require('./assertArraysEqual');



const letterPositions = function(sentence) {
  const results = {};
  let position = 0;

  for (const i of sentence) {
    if (i === ' ') {
    }
    
    else if (results[i] === undefined) {
       results[i] = [position];
      
    }

    else {
      results[i].push(position);
    }
    position++;
    }
    return results;
  // for (const key in results) {
};

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));