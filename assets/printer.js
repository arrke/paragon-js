export function wypiszListeProdukty(produkty, suma) {
  if (produkty.length === 0) {

    return;
  }
  dodajColumny();
  for (let i = 0; i < produkty.length; i++) {
    wypisz(i, produkty[i], produkty)
  }
  wypiszSume(suma);
}

export function wypisz(i, produkt, produkty) {
  let tr = document.createElement('tr')
  stworzKomorke(tr, i)
  stworzKomorke(tr, produkt._nazwa)
  stworzKomorke(tr, produkt._ilosc)
  stworzKomorke(tr, produkt._cena)
  stworzKomorke(tr, produkt._suma)
  stworzPrzyciskiAkcji(tr, produkty)
  if(paragon.innerText == '')
    dodajColumny()
  paragon.appendChild(tr)
}

export function wypiszSume(suma) {
  let element = document.getElementById("suma")
  if (element === null) {
    let tr = document.createElement('tr')
    element = document.createElement('td')
    element.setAttribute("colspan", "5")
    element.id = 'suma'
    element.innerHTML = `Razem: ${suma}`
    tr.appendChild(element)
    paragon.appendChild(tr)
  }
  element.innerText = `Razem: ${suma}`
}
function dodajColumny() {
  let tr = document.createElement('tr')
  stworzKomorke(tr, 'LP')
  stworzKomorke(tr, 'Nazwa')
  stworzKomorke(tr, 'Ilosc')
  stworzKomorke(tr, 'Cena')
  stworzKomorke(tr, 'Suma')
  stworzKomorke(tr, 'Akcje')
  paragon.appendChild(tr)
}

function stworzKomorke(tr, tresc) {
  let td = document.createElement('td')
  td.innerHTML = tresc
  tr.appendChild(td)
}

function stworzPrzyciskiAkcji(tr, produkty) {
  let td = document.createElement('td')
  let button = document.createElement('button')
  button.innerHTML = '/\\'
  button.addEventListener('click', (event) => {
    let id = Number(event.target.parentNode.parentNode.firstChild.innerText);
    if (id != 0) {
      let tmp = produkty.at(id)
      produkty[id] = produkty[id - 1]
      produkty[id - 1] = tmp
      let suma = document.getElementById('suma').innerHTML.split(' ')[1]
      document.getElementById('paragon').innerHTML = ''
      wypiszListeProdukty(produkty, suma)
    }
  })
  td.appendChild(button)
  button = document.createElement('button')
  button.innerHTML = '\\/'
  button.addEventListener('click', (event) => {
    let id = Number(event.target.parentNode.parentNode.firstChild.innerText);
    if (id != produkty.length - 1) {
      let tmp = produkty.at(id)
      produkty[id] = produkty[id + 1]
      produkty[id + 1] = tmp
      let suma = document.getElementById('suma').innerHTML.split(' ')[1]
      document.getElementById('paragon').innerHTML = ''
      wypiszListeProdukty(produkty, suma)
    }
  })
  td.appendChild(button)
  button = document.createElement('button')
  button.innerHTML = 'x'
  button.addEventListener('click', (event) => {
    let id = Number(event.target.parentNode.parentNode.firstChild.innerText);
    produkty.splice(id, 1)
    document.getElementById('paragon').innerHTML = ''
    wypiszListeProdukty(produkty,zwrocSume(produkty))
  })

  td.appendChild(button)
  button = document.createElement('button')
  button.innerHTML = 'edit'
  button.addEventListener('click', (event) => {
    let id = Number(event.target.parentNode.parentNode.firstChild.innerText);
    let nowaNazwa = prompt("Podaj nową Nazwę",produkty[id]._nazwa)
    let nowaIlosc = prompt("Podaj nową Ilosc",produkty[id]._ilosc)
    while(isNaN(nowaIlosc)){
      nowaIlosc = prompt("Nie podano numeru. Podaj nową ilość",produkty[id]._ilosc)
    }
    let nowaCena = prompt("Podaj nową cenę",produkty[id]._cena)
    while(isNaN(nowaCena)){
      nowaCena = prompt("Nie podano numeru. Podaj nową cenę",produkty[id]._cena)
    }

    if (nowaNazwa && nowaIlosc && nowaIlosc) {
      let id = Number(event.target.parentNode.parentNode.firstChild.innerText);
      console.log(produkty[id])
      produkty[id]._nazwa = nowaNazwa
      produkty[id]._ilosc = nowaIlosc
      produkty[id]._cena = Number(nowaCena).toFixed(2)
      produkty[id]._suma = Number(nowaIlosc * nowaCena).toFixed(2)
      console.log(produkty[id])
      document.getElementById('paragon').innerHTML = ''
      wypiszListeProdukty(produkty, zwrocSume(produkty))
    }
    else
      alert("Popraw dane")
  })
  td.appendChild(button)
  tr.appendChild(td)
}


export function zwrocSume(produkty){
  return produkty.length !== 0 ? produkty.map((obj) => obj._suma).reduce((prev,nast) => (Number(prev)+Number(nast)).toFixed(2)) : 0
}