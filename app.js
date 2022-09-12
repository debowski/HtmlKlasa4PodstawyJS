const kolory = ["red","green","blue"];
let btn = document.getElementById("guzik");
let element = document.getElementById("strona");
let tekst = document.getElementById("zmiana");

btn.addEventListener("click",funkcja);

function funkcja(){
    
    element.style.backgroundColor="red";
    tekst.innerHTML = "Jakiś inny tekst";
    console.log(randomowyKolor());
}

function randomowyKolor(){
    return Math.floor(Math.random()*kolory.length);
}