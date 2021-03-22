
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

        const kenar1 = Math.sqrt((Math.pow((nokta2.x - nokta1.x), 2) + 
            (Math.pow((nokta2.y - nokta1.y), 2))));
        const kenar2 = Math.sqrt((Math.pow((nokta3.x - nokta1.x), 2) + 
            (Math.pow((nokta3.y - nokta1.y), 2))));
        const kenar3 = Math.sqrt((Math.pow((nokta3.x - nokta2.x), 2) + 
            (Math.pow((nokta3.y - nokta2.y), 2))));
        const kenar4 = Math.sqrt((Math.pow((nokta4.x - nokta1.x), 2) + 
            (Math.pow((nokta4.y - nokta1.y), 2))));

        const cevresi = kenar1 + kenar2 + kenar3 + kenar4;

        return cevresi;
    };
}


const nokta1 = new Nokta(1 , 1);
const nokta2 = new Nokta(5 , 1);
const nokta3 = new Nokta(5 , 4);
const nokta4 = new Nokta(1 , 5);

const cevreHesaplama = new Cevree(nokta1, nokta2, nokta3, nokta4);

console.log("Girilen Noktaların Çevresi = "  + cevreHesaplama.cevre());
