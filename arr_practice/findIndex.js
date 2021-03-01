const cars = require ("./data.js");

let result = null;

result = cars.findIndex(item => item.renk == "kirmizi" );
console.table(result);