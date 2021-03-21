
class Nokta {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }  
}

class Ucgen {
    constructor(nokta1,nokta2,nokta3) {
        this.nokta1 = nokta1;
        this.nokta2 = nokta2;
        this.nokta3 = nokta3;
    }
    cevre = cevreHesap();
}


const cevreHesap = () => {
    const kenar1 = Math.sqrt((Math.pow((x2-x1),2)+(Math.pow((y2-y1),2))));
    const kenar2 = Math.sqrt((Math.pow((x3-x1),2)+(Math.pow((y3-y1),2))));
    const kenar3 = Math.sqrt((Math.pow((x3-x2),2)+(Math.pow((y3-y2),2))));
    const cevre = kenar1+kenar2+kenar3;
    return cevre;
};

const nokta1 = new Nokta(1 , 1);
const nokta2 = new Nokta(5 , 1);
const nokta3 = new Nokta(5 , 4);
const x1 = nokta1.x;
const y1 = nokta1.y;
const x2 = nokta2.x;
const y2 = nokta2.y;
const x3 = nokta3.x;
const y3 = nokta3.y;

console.log(nokta1.constructor.length);
console.log(nokta2);
console.log(nokta3);


const ucgen = new Ucgen(nokta1, nokta2, nokta3);

console.log("Üçgenin Çevresi = "  + ucgen.cevre);
