const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
      
  }
};

const tail = function(array) {
  
  return array.slice(1);

};
const numbers = [5, 6, 7];
const result = tail(numbers);
assertEqual(result[0], 6);
assertEqual(tail([5,6,7]).length, 2);
assertEqual(numbers.length, 3);

const strings = ["Hello", "Lighthouse", "Labs"];
const final = tail(strings);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(final[0],"Lighthouse");
assertEqual(strings.length, 2);