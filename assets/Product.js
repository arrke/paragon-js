export class Product{
  constructor(nazwa,ilosc,cena){
    this._nazwa = nazwa;
    this._ilosc = ilosc;
    this._cena = cena;
    this._suma = this._ilosc * this._cena;
  }
  set nazwa(nazwa){
    this._nazwa = nazwa;
  }
  set ilosc(ilosc){
    this._ilosc = ilosc
    this.nowaSuma()
  }
  set cena(cena){
    this._cena = cena;
    this.nowaSuma();
  }
  get nazwa(){
    return this._nazwa
  }
  get ilosc(){
    return this._ilosc
  }
  get cena(){
    return this._cena;
  }
  get suma(){
    return this._suma;
  }
  nowaSuma(){
    this._suma = this._ilosc * this._cena;
  }
}