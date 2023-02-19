const assertEqual = require('./assertEqual'); 

const countLetters = function(sentence) {
  const newObj = {};
  
  for (let letter of sentence) {
    if (letter !== ' ')
    if (newObj[letter]) {
      newObj[letter] += 1;
    }
    else {
      newObj[letter] = 1;
    }
  } return newObj;
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));
