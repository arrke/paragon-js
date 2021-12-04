export function zapisz(produkty){
  if(produkty.length != 0){
    localStorage.listaProduktow = JSON.stringify(produkty)
    localStorage.sumaListyProduktow = JSON.stringify(
      produkty.map((obj) => obj._suma).reduce((prev,nast) => prev+nast)
    )
    alert("Zapisano poprawnię listę zakupów!")
  }
  else{
    alert("Brak elementów do zapisania")
  }
}

export function wyczysc(produkty){
  if(produkty.length != 0){
    localStorage.removeItem("listaProduktow")
    localStorage.removeItem("sumaListyProduktow")
    console.log("wypisz");
    produkty = []
    document.getElementById('paragon').innerHTML=''
    alert("Wyczyszczono listę zakupów!")
  }
}