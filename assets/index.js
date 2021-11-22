import {Product} from './Product.js'

let form = document.getElementById('dodajProdukt')
form.onsubmit = dodajProdukt;

let paragon = document.getElementById('paragon')
let produkty;
if(localStorage.listaProduktow){
  produkty = JSON.parse(localStorage.listaProduktow)
}
else{
  produkty = []
}
wypiszListeProdukty(produkty)
function dodajProdukt(e){
  let nazwa = form.elements["nazwaProduktu"].value;
  let ilosc = form.elements["ilosc"].value;
  let cena = form.elements['cena'].value;
  if(nazwa && ilosc && cena){
    let produkt = new Product(nazwa,ilosc,cena)
    console.log(produkty)
    produkty.push(produkt)
    alert(`Dodano produkt ${produkt.nazwa}`)
    localStorage.listaProduktow = JSON.stringify(produkty)
    wypisz(produkty.length-1, produkt);
  }
  else{
    alert('Popraw dane')
  }
  e.preventDefault();
}


function wypiszListeProdukty(produkty){
  if(produkty.length === 0){
    reutrn;
  }
  for(let i = 0 ; i< produkty.length; i++){
    wypisz(i,produkty[i])
  }
}

function wypisz(i,produkt){
  let element = document.createElement('div');
    const newContent = document.createTextNode(`Lp. ${i} : ${produkt._nazwa} :: ${produkt._ilosc} ::: ${produkt._cena} :::: ${produkt._suma}`)
    element.appendChild(newContent)
    paragon.appendChild(element)
}