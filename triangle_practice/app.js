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
    alan = alanHesap();
}

const nokta1 = new Nokta(2 , 20);
const nokta2 = new Nokta(5 , 6);
const nokta3 = new Nokta(8 , 8);
const x1 = nokta1.x;
const y1 = nokta1.y;
const x2 = nokta2.x;
const y2 = nokta2.y;
const x3 = nokta3.x;
const y3 = nokta3.y;

function alanHesap() {
    const alan = (1/2)*((x1*y2+x2*y3+x3*y1) - (y1*x2+y2*x3+y3*x1));
    return alan;
};

function cevreHesap() {
    const kenar1 = Math.sqrt((Math.pow(2,(x2-x1))+(Math.pow(2,(y2-y1)))));
    const kenar2 = Math.sqrt((Math.pow(2,(x3-x1))+(Math.pow(2,(y3-y1)))));
    const kenar3 = Math.sqrt((Math.pow(2,(x3-x2))+(Math.pow(2,(y3-y2)))));
    const cevre = kenar1+kenar2+kenar3;
    return cevre;
};

const ucgen = new Ucgen(nokta1, nokta2, nokta3);

console.log(ucgen.cevre);
console.log(ucgen.alan);