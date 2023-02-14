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

assertArraysEqual(middle([1, 2, 3]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,]), [3]);
assertArraysEqual(middle([1,2]), [1,2]);
assertArraysEqual(middle([1]), []);