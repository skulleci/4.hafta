const cars = require ("./data.js");

let result = null;

result = cars.filter(item => item.vites == "otomatik").map(item => {
    return {
        id: item.id,
        marka: item.marka,
        model: item.model,
        renk: item.renk,
        yasi: 2021 - item.modelyili,
    }
});

console.table(result);