// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// assertEqual(tail([5,6,7]).length, 2);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});