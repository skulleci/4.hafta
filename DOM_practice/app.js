const div1 = document.createElement("div");
    div1.className = "container";
    div1.setAttribute("id","cont_1");
    document.body.appendChild(div1);
    div1.style.marginLeft = "5%";
    div1.style.float = "left";
    div1.style.marginTop = "20px";


const form = document.createElement("form");
    document.querySelector("#cont_1").appendChild(form);
    form.className = ("form1");
    form.innerHTML = "Hesap Makinesi";
    

const input1 = document.createElement("input");
    document.querySelector(".form1").appendChild(input1);
    input1.setAttribute("class","inputs");
    input1.setAttribute("id", "input1");
    input1.style.marginBottom = "5px";
    input1.style.marginTop = "5px";


const input2 = document.createElement("input");
    document.querySelector(".form1").appendChild(input2);
    input2.setAttribute("class","inputs");
    input2.setAttribute("id", "input2");

const buton1 = document.createElement("input");
    document.querySelector(".form1").appendChild(buton1);
    buton1.setAttribute("type","button");
    buton1.setAttribute("id","topla");
    buton1.setAttribute("value", "+");
    buton1.className = "islem";
    buton1.addEventListener("click", function topla() {
        let s1=document.getElementById("input1").value;     
        let s2=document.getElementById("input2").value;
 	    result.value=parseInt(s1)+parseInt(s2);
    });

const buton2 = document.createElement("input");
    document.querySelector(".form1").appendChild(buton2);
    buton2.setAttribute("type","button");
    buton2.setAttribute("id","cikar");
    buton2.setAttribute("value", "-");
    buton2.className = "islem";
    buton2.addEventListener("click", function cikar() {
        let s1=document.getElementById("input1").value;  
        let s2=document.getElementById("input2").value;
        result.value=parseInt(s1)-parseInt(s2);
    });

const buton3 = document.createElement("input");
    document.querySelector(".form1").appendChild(buton3);
    buton3.setAttribute("type","button");
    buton3.setAttribute("id","carp");
    buton3.setAttribute("value", "*");
    buton3.className = "islem";
    buton3.addEventListener("click", function carp() {
        let s1=document.getElementById("input1").value;  
	let s2=document.getElementById("input2").value;
	result.value=parseInt(s1)*parseInt(s2);
    });

const buton4 = document.createElement("input");
    document.querySelector(".form1").appendChild(buton4);
    buton4.setAttribute("type","button");
    buton4.setAttribute("id","bol");
    buton4.setAttribute("value", "/");
    buton4.className = "islem";
    buton4.addEventListener("click", function bol() {
        let s1=document.getElementById("input1").value;   
        let s2=document.getElementById("input2").value; 
        if(s2==0) {
            alert("2.sayıyı 'Sıfır' girmeyiniz");
        }else {
            result.value=parseInt(s1)/parseInt(s2)
        }
    });

let result = document.createElement("input");
    document.querySelector(".form1").appendChild(result);
    result.className = "inputs";
    result.setAttribute("type","text");
    result.setAttribute("id","result"); 
    result.style.display = "block";

//////////////////////////////////////////////

const div4 = document.createElement("div");
    document.body.appendChild(div4);
    div4.className = "container";
    div4.setAttribute("id", "focus");

const image0 = document.createElement("img");
    document.querySelector("#focus").appendChild(image0);
    image0.className = "image";
    image0.setAttribute("id", "buyutme");
    image0.setAttribute("src", "base.jpg");
    image0.style.width = "800px";
    image0.style.paddingLeft = "3px";
       
/////////////////////////////////////////////

const div2 = document.createElement("div");
    div2.className = "container";
    div2.setAttribute("id","cont_2");
    document.body.appendChild(div2);
    div2.style.float = "right";
    div2.style.marginRight = "5%"

const list = document.createElement("ul");
    document.querySelector("#cont_2").appendChild(list);
    list.className = "list";

const listElement1 = document.createElement("li");
    document.querySelector(".list").appendChild(listElement1);
    listElement1.className = "list_ele";
    listElement1.setAttribute("id","element1");
    listElement1.innerHTML ="listenin 1. elemanı";

const listElement2 = document.createElement("li");
    document.querySelector(".list").appendChild(listElement2);
    listElement2.className = "list_ele";
    listElement2.setAttribute("id","element2");
    listElement2.innerHTML ="listenin 2. elemanı";

const listElement3 = document.createElement("li");
    document.querySelector(".list").appendChild(listElement3);
    listElement3.className = "list_ele";
    listElement3.setAttribute("id","element3");
    listElement3.innerHTML ="listenin 3. elemanı";

const listElement4 = document.createElement("li");
    document.querySelector(".list").appendChild(listElement4);
    listElement4.className = "list_ele";
    listElement4.setAttribute("id","element3");
    listElement4.innerHTML ="listenin 4. elemanı";

/////////////////////////////////////////////////////////

let divler = document.querySelectorAll(".container");

    divler.forEach(item => {
        item.style.display = "inline-flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center"
            
    });

let inputlar = document.querySelectorAll(".inputs");

    inputlar.forEach(item => {
        item.style.display = "block";
        item.style.padding = "5px";
    });

let liler = document.querySelectorAll(".list_ele");

    liler.forEach(item => {
        item.style.fontSize = "20px";
        item.style.padding = "8px";
    });

let islemler = document.querySelectorAll(".islem");

    islemler.forEach(item => {
        item.style.margin = "10px"
    });

///////////////////////////////////////////////////////////

let div3 = document.createElement("div");
    document.body.appendChild(div3);
    div3.className = "picture_div";
    div3.style.display = "inline-flex";
    div3.style.alignItems = "center";
    div3.style.justifyContent = "center";
    div3.style.marginTop = "5px"
    

let image1 = document.createElement("img");
    document.querySelector(".picture_div").appendChild(image1);
    image1.className = "image";
    image1.setAttribute("src", "1.jpg");
    image1.style.width = "10%";
    image1.addEventListener("mouseover", function () {
        document.querySelector("#buyutme").setAttribute("src", "1.jpg"); 
    });
    image1.addEventListener("mouseout", function () {
        document.querySelector("#buyutme").setAttribute("src", "base.jpg");
    });
let image2 = document.createElement("img");
    document.querySelector(".picture_div").appendChild(image2);
    image2.className = "image";
    image2.setAttribute("src", "2.jpg");
    image2.style.width = "10%";
    image2.addEventListener("mouseover", function () {
        document.querySelector("#buyutme").setAttribute("src", "2.jpg"); 
    });
    image2.addEventListener("mouseout", function () {
        document.querySelector("#buyutme").setAttribute("src", "base.jpg");
    });


let image3 = document.createElement("img");
    document.querySelector(".picture_div").appendChild(image3);
    image3.className = "image";
    image3.setAttribute("src", "3.jpg");
    image3.style.width = "10%";
    image3.addEventListener("mouseover", function () {
        document.querySelector("#buyutme").setAttribute("src", "3.jpg"); 
    });
    image3.addEventListener("mouseout", function () {
        document.querySelector("#buyutme").setAttribute("src", "base.jpg");
    });


let image4 = document.createElement("img");
    document.querySelector(".picture_div").appendChild(image4);
    image4.className = "image";
    image4.setAttribute("src", "4.jpg");
    image4.style.width = "10%";
    image4.addEventListener("mouseover", function () {
        document.querySelector("#buyutme").setAttribute("src", "4.jpg"); 
    });
    image4.addEventListener("mouseout", function () {
        document.querySelector("#buyutme").setAttribute("src", "base.jpg");
    });

let image5 = document.createElement("img");
    document.querySelector(".picture_div").appendChild(image5);
    image5.className = "image";
    image5.setAttribute("src", "5.jpg");
    image5.style.width = "10%";
    image5.addEventListener("mouseover", function () {
        document.querySelector("#buyutme").setAttribute("src", "5.jpg"); 
    });
    image5.addEventListener("mouseout", function () {
        document.querySelector("#buyutme").setAttribute("src", "base.jpg");
    });

let image6 = document.createElement("img");
    document.querySelector(".picture_div").appendChild(image6);
    image6.className = "image";
    image6.setAttribute("src", "6.jpg");
    image6.style.width = "10%";
    image6.addEventListener("mouseover", function () {
        document.querySelector("#buyutme").setAttribute("src", "6.jpg"); 
    });
    image6.addEventListener("mouseout", function () {
        document.querySelector("#buyutme").setAttribute("src", "base.jpg");
    });

let image7 = document.createElement("img");
    document.querySelector(".picture_div").appendChild(image7);
    image7.className = "image";
    image7.setAttribute("src", "7.jpg");
    image7.style.width = "10%";
    image7.addEventListener("mouseover", function () {
        document.querySelector("#buyutme").setAttribute("src", "7.jpg"); 
    });
    image7.addEventListener("mouseout", function () {
        document.querySelector("#buyutme").setAttribute("src", "base.jpg");
    });

let imageler = document.querySelectorAll(".image");

    imageler.forEach(item => {
        item.style.margin = "5px"
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center"
    });
