const cars = require ("./data.js");

let result = null;

result = cars.find(item => item.marka == "Seat");
console.table(result);