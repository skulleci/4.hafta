const cars = require ("./data.js");

let result = null;

result = cars.map(item => {
    return {
        id: item.id,
        marka: item.marka,
        model:item.model,
        modelyili:item.modelyili,
        vites:item.vites,
    }    
}).filter(item => item.vites == "otomatik").map(item => {
    return{
        id: item.id,
        marka: item.marka,
        model:item.model,
        modelyili:item.modelyili,
        vites:item.vites,
        yakit:"benzin",
    }
});

console.table(result);