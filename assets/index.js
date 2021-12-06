import {Product} from './Product.js'
import {wypiszListeProdukty, wypisz, wypiszSume, zwrocSume} from './printer.js'
import {zapisz,wyczysc} from './buttons.js'
let form = document.getElementById('dodajProdukt')
form.onsubmit = dodajProdukt;

let produkty;

if(localStorage.listaProduktow){
  produkty = JSON.parse(localStorage.listaProduktow)
}
else{
  produkty = []
  document.getElementById('wyczysc').disabled = true
  document.getElementById('zapisz').disabled = true
}
wypiszListeProdukty(produkty,zwrocSume(produkty))
function dodajProdukt(e){
  e.preventDefault();

  let nazwa = form.elements["nazwaProduktu"].value;
  let ilosc = form.elements["ilosc"].value;
  let cena = form.elements['cena'].value;
  if(nazwa && ilosc && cena){
    let produkt = new Product(nazwa,ilosc,cena)
    alert(`Dodano produkt ${produkt.nazwa}`)
    produkty.push(produkt)
    if(produkty.length != 0){
      document.getElementById('wyczysc').disabled = false
      document.getElementById('zapisz').disabled = false
    }
    localStorage.listaProduktow = JSON.stringify(produkty)
    wypisz(produkty.length-1, produkt, produkty);
    wypiszSume(zwrocSume(produkty))
  }
  else{
    alert('Popraw dane')
  }
}

document.getElementById('zapisz').addEventListener('click', (e) => {
  zapisz(produkty);
  e.preventDefault();
})

document.getElementById('wyczysc').addEventListener('click', (e) => {
  wyczysc(produkty)
  produkty = []
  e.preventDefault();

})