export function zapisz(produkty){
  localStorage.listaProduktow = JSON.stringify(produkty)
  alert("Zapisano poprawnię listę zakupów!")
}

export function wyczysc(produkty){
  localStorage.removeItems("listaProduktow")
  produkty = []
  alert("Wyczyszczono listę zakupów!")
}