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

console.log(letterPositions("lighthouse in the house"));