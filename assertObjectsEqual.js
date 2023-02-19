const eqArrays = require('./eqArrays');

const eqObjects = function(Object1, Object2) {
  
  let obj1Keys = Object.keys(Object1);
  let obj2Keys = Object.keys(Object2);

  if (obj1Keys.length === obj2Keys.length) {
    for (let key of obj1Keys) {
      if (Array.isArray(Object1[key]) && Array.isArray(Object2[key])) {
        if (!eqArrays(Object1[key], Object2[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};


const assertObjectsEqual = function(actual, expected) {

    const inspect = require('util').inspect;

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    }
    else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

module.exports = assertObjectsEqual;

// console.log(assertObjectsEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)); 