//tworzymy tablicę z kolorami ponumerowana od 0, 1, 2, 3....
const kolory = ["yellow","red","green","blue"];

//tworzymy trzy zmienne wskazujące na wybrane elementy na stronie
let btn = document.getElementById("guzik");
let element = document.getElementById("strona");
let tekst = document.getElementById("opis");

// do elementu btn przypisujemy nasłuchiwanie eventu "click" i po jego wciśnięciu 
// uruchamiana jest funkcja o nazwie funkcja

btn.addEventListener("click",funkcja);

// funkcja 
function funkcja(){
    let numer = randomowyKolor(); // do zmiennej numer przypisuje wartość wylosowaną przez funkcję randomowyKolor
    element.style.backgroundColor=kolory[numer]; // dla zmiennej element podmieniamy kolor tła
    tekst.innerHTML = kolory[numer]; // dla zmiennej tekst podmieniamy zawartość tekstu
}

//funkcja losująca liczbę całkowitą pomiędzy 0 a długością tablicy kolory.
function randomowyKolor(){
    let wynik = Math.floor(Math.random()*kolory.length);
    return wynik;
}