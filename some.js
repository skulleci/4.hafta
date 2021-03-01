const cars = require ("./data.js");

let result = null;

result = cars.some(item => item.renk == "mavi");

console.log(result);