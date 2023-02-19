const eqArrays = require('./eqArrays');
const assertEqual = require("./assertEqual");


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

module.exports = eqObjects;

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); 

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject));

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject));
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject));
// console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));