
class Nokta {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }  
}

class Cevree {
    constructor(nokta) {
        for (let i = 0; i < nokta.length; i++) {
            constructor.this.nokta[i] = nokta;
            return nokta;
        }
    }
    cevre = () => {

        for (let i = 0; i <= noktalar.length; i++) {

            let cevresi = Math.sqrt((Math.pow((noktalar[i+1].x - noktalar[i].x), 2) + 
                (Math.pow((noktalar[i+1].y - noktalar[i].y), 2)))) + 
                 Math.sqrt((Math.pow((noktalar[i+2].x - noktalar[i].x), 2) + 
                (Math.pow((noktalar[i+2].y - noktalar[i].y), 2)))) + 
                 Math.sqrt((Math.pow((noktalar[i+2].x - noktalar[i+1].x), 2) + 
                (Math.pow((noktalar[i+2].y - noktalar[i+1].y), 2)))) +
                 Math.sqrt((Math.pow((noktalar[i+3].x - noktalar[i].x), 2) + 
                (Math.pow((noktalar[i+3].y - noktalar[i].y), 2))));

                return cevresi;
        }     
    };
}

let noktalar = [
    new Nokta(1 , 1), 
    new Nokta(5 , 1), 
    new Nokta(5 , 4), 
    new Nokta(1 , 5)
    
];
console.log(noktalar);


for (let i = 0; i < noktalar.length; i++) {

    let cevreHesaplama = new Cevree(noktalar[i]);

    console.log("Girilen Noktaların Çevresi = "  + cevreHesaplama.cevre());

    break;
}



