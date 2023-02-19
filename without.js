const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
  
  //console.log(eqArrays([1,2,3], [1,2,3]));
  //assertArraysEqual([1, 2, 3], [1, 2, 3]);
    
 // make an array with 2 parameter 
 const without = function(source, itemToRemove) {
//we have to look throught source array to find elements not fount in ItemToRemove.
let itemToStay = [];
for (let num of source) {
  let shouldStay = true;
  for (let num2 of itemToRemove) {
    if (num === num2) {
      shouldStay = false;
    }
  }
  if (shouldStay === true) {
     itemToStay.push(num);
  }
}
return itemToStay;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
/* return new array with elements from source 
    not in itemToRemove.*/
