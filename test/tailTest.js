const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5,6,7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
