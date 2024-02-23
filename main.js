import { SZEMELYLISTA } from "./adat.js";
import { konzolraIr, listaOsszeallit,kartyaKeszit } from "./függvények.js";

konzolraIr(SZEMELYLISTA)
//const a=2;
//a=3 - hibaüzenet

//const LISTA = ["Géza","Jenő"]

//console.log(LISTA[1])

//LISTA[10]="Béla"

//LISTA.push("Jakab") /*lista végére elhelyez egy elemet*/
//LISTA.pop() /*leveszi a lista utolsó elemét*/
/*Egyszerű adatszerkezet esetén a const-tal való deklarációból a változó értéke nem írható felül.
    összetett adatszerkezet esetén , mint pl. a lista és objektum const-al való deklaráláskor a lista memóriacíme nem változtható meg a lista értékei megváltoztathatóak, módosíthatom az elemeit,törölhetek a listából,adhatok hozzá új elemet.*/
//console.log(LISTA)
//console.log(LISTA[5])
/* ismerőseim nyilvántartása*/
/* const NEV = ["Géza","Jenő"]
const TEL=["06-30-5664"]*/


//console.log(SZEMELYLISTA[1].tel)

//const FELSELEM = document.getElementById("felsorolas")
const FELSELEM = document.querySelector("#felsorolas")
console.log(FELSELEM)
FELSELEM.innerHTML="<h1>Ügyesek vagyunk</h1>"
FELSELEM.innerHTML+= listaOsszeallit(SZEMELYLISTA)
const Kartya = document.querySelector("#kartyaContainer")
Kartya.innerHTML+= kartyaKeszit(SZEMELYLISTA)
console.log(Kartya)
