import {Product} from './Product.js'
import {wypiszListeProdukty, wypisz, wypiszSume} from './printer.js'
import {zapisz,wyczysc} from './buttons.js'
let form = document.getElementById('dodajProdukt')
form.onsubmit = dodajProdukt;

let paragon = document.getElementById('paragon')
let produkty;
let suma;
if(localStorage.listaProduktow){
  produkty = JSON.parse(localStorage.listaProduktow)
}
else{
  produkty = []
}
if(localStorage.sumaListyProduktow){
  suma = JSON.parse(localStorage.sumaListyProduktow)
}
else{
  if(produkty.length === 0){
    suma = 0;
  }
  else{
    suma = produkty.map((obj) => obj._suma).reduce((prev,nast) => prev+nast)
  }
}
wypiszListeProdukty(produkty,suma)
function dodajProdukt(e){
  let nazwa = form.elements["nazwaProduktu"].value;
  let ilosc = form.elements["ilosc"].value;
  let cena = form.elements['cena'].value;
  if(nazwa && ilosc && cena){
    let produkt = new Product(nazwa,ilosc,cena)
    console.log(produkty)
    alert(`Dodano produkt ${produkt.nazwa}`)
    produkty.push(produkt)
    localStorage.listaProduktow = JSON.stringify(produkty)
    localStorage.sumaListyProduktow = JSON.stringify(suma+produkt._suma)
    suma = suma+product._suma
    wypisz(produkty.length-1, produkt);
    console.log(suma)
    wypiszSume(suma)
  }
  else{
    alert('Popraw dane')
  }
  e.preventDefault();
}


document.getElementById('zapisz').addEventListener('click', () => {
  zapisz(produkty);
})

document.getElementById('wyczysc').addEventListener('click', () => {
  wyczysc(produkty)
})