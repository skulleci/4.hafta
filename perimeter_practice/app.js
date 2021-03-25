
class Nokta {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }  
}

class Cevree {
    constructor(...noktalar) {
        for (let i = 0; i < noktalar.length; i++) {

            this.noktalar = noktalar[i];
            console.log(noktalar[i]);
        }
    }
    
    cevre = () => {

        let cevresi = 0;
 
            for (let i = 0; i < noktalar.length; i++) {

            cevresi += Math.sqrt((Math.pow((noktalar[i+1].x - noktalar[i].x), 2) +
                 (Math.pow((noktalar[i+1].y - noktalar[i].y), 2))));
        }
        return cevresi;
    };
}

let noktalar = [
    new Nokta(1 , 1), 
    new Nokta(5 , 1), 
    new Nokta(5 , 4), 
    new Nokta(1 , 5)
];

let cevreHesaplama = new Cevree(noktalar);

console.log("Girilen Noktaların Çevresi = "  + cevreHesaplama.cevre());




