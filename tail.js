const assertEqual = require('./assertEqual');

const tail = function(array) {
  
  return array.slice(1);

};
const numbers = [5, 6, 7];
const result = tail(numbers);
assertEqual(result[0], 6);
assertEqual(numbers.length, 3);


const strings = ["Hello", "Lighthouse", "Labs"];
const final = tail(strings);
assertEqual(final[0],"Lighthouse");
assertEqual(strings.length, 2);


module.exports = tail;