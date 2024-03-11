/*Crea una lista vacía llamada "listaGenerica".*/
/*
let listagenerica = [];
*/

/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/

//let lenguajesDeProgramacion = ["javaScript", "C", "C++", "kotlin", "Python"];


//lenguajesDeProgramacion.push ("java", "Ruby", "GoLang"); 
//console.log (lenguajesDeProgramacion);
 /*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
 */

//RESPUESTA
/*
function listaLenguajesProgramacion (){
    for (let i=0; i< lenguajesDeProgramacion.length; i++){
        console.log (lenguajesDeProgramacion [i]);
    }
}
 listaLenguajesProgramacion ();
 */

 /*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
 */
/*
 function listaLenguajesInversa (){
    for (let i= lenguajesDeProgramacion.length -1; i>=0; i++){
        console.log (lenguajesDeProgramacion [i]);
    }
 }
listaLenguajesInversa ();
*/
/*
Crea una función que calcule el promedio de los elementos en una lista de números.
*/

/*
function promedioNum (numeros){
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++){
   resultado += numeros[i]
   
    }
    return resultado/numeros.length;
}

let numeros = [5, 6, 3]
let media=promedioNum (numeros)
console.log (media)
*/
/*
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);
  */

  /*Crea una función que muestre en la consola el número más grande 
  y el número más pequeño en una lista.
  */
/*

 function maxMin (){
    let max = numerosList [0]
    let min = numerosList [0]

    for (i=1; i<numerosList.length; i++){
        if (numerosList[i]<min){
            min=numerosList[i];

        }if (numerosList[i]>max){
            max=numerosList[i];
        }
       
    }
    console.log (max);
    console.log (min);
 }
 let numerosList = [4,6,2]
 maxMin(numerosList);
*/
/*
 function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);
  */

  /*Crea una función que devuelva la suma de todos los elementos en una lista.
  */
/*
  let listaNumeros = [4,3,1];
  let suma =0;
  function sumaNumeros (){
    for (let i=0; i<listaNumeros.length; i++){
        suma += listaNumeros [i];
    } 
    console.log (suma)
  }
sumaNumeros (listaNumeros);
*/

/*RESPUESTA
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);
*/
/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
o -1 si no existe en la lista.
*/
/*
let numerosOrden = [1,4,6,5];
function posicion (elemento){
    for (let i=0; i<numerosOrden.length; i++){
    
        if (numerosOrden[i] ===elemento){
            return i;
        }
    }
    return -1;
}
 
 console.log (posicion(6))
*/
 /*
 function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
  */

  /*Crea una función que reciba dos listas de números del mismo tamaño 
  y devuelva una nueva lista con la suma de los elementos uno a uno.
  */
 /*
 let lista1= [2,5,3,4];
 let lista2= [4,8,9,2];
 let listaTotal= [];

 function listas (lista1, lista2){
  
  for (let i=0; i< lista1.length; i++){
    listaTotal[i]=lista1[i]+lista2[i];

  }
  return listaTotal;
 }
 listas (lista1, lista2)
 console.log (listaTotal);
 */

 /*Crea una función que reciba una lista de números 
 y devuelva una nueva lista con el cuadrado de cada número.
*/
/*
let listaNum=[4,6,2]
let listaCudrados=[];

function listaCuadrados (listaNum){
  for (let i=0; i< listaNum.length;i++){
    listaCudrados[i]=listaNum[i] * listaNum[i];
  }
  return listaCudrados
}
listaCuadrados (listaNum)
console.log (listaCudrados)
*/