const cars = require ("./data.js");

const getMapFromArray = data =>{
    return data.reduce((toplam, item) => {
        toplam[item.id] = { 
            marka:item.marka, 
            model: item.model, 
            modelyili:item.modelyili };
        return toplam;
    }, {});
};

console.log(getMapFromArray(cars));