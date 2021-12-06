export function zapisz(produkty){
  if(produkty.length != 0){
    localStorage.listaProduktow = JSON.stringify(produkty)
    alert("Zapisano poprawnię listę zakupów!")
  }
  else{
    alert("Brak elementów do zapisania")
  }
}

export function wyczysc(produkty){
  if(produkty.length != 0){
    produkty = []
    localStorage.removeItem("listaProduktow")
    document.getElementById('paragon').innerHTML=''
    document.getElementById("suma").innerText = ""
    alert("Wyczyszczono listę zakupów!")
  }
  else{
    localStorage.removeItem("listaProduktow")
    document.getElementById('paragon').innerHTML=''
    document.getElementById("suma").innerText = ""
    alert("Lista zakupów jest już pusta!")
  }
}