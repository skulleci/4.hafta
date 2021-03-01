const cars = require ("./data.js");

let result = null;

result = cars.filter(item => item.vites == "otomatik");

console.table(result);

