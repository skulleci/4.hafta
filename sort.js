const cars = require ("./data.js");

let result = null;

result = cars.map(item => item.modelyili);

result2 = result.sort((a,b) => (b-a));

console.table(result2);