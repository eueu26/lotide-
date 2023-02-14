const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    
    return false;
  }
  else {
      
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
      }
    return true;
    }
  };
  
  const assertArraysEqual = function(array1, array2) {
  
     if (eqArrays(array1, array2)) {
      console.log("The arrays are the same");
     }
     else {
      console.log("The arrays are different");
     }
  
  }; 
  
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
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
/* return new array with elements from source 
    not in itemToRemove.
