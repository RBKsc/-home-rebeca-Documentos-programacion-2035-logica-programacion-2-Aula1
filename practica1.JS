/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
/*
/*
function masaCorporal(peso, altura){
    return peso/altura*altura;

}
 let IMC = masaCorporal (60, 1.40);
 console.log (IMC);
 */

/*respuesta
 function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
*/

 /*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/

/*respuesta
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
*/

/*Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
 */
/*
let dolar=17.06
let pesos=0;

function cambioDolar (pesos){
  let resultado= dolar * pesos
  return resultado;
}

console.log (cambioDolar (5))
*/

/*
respuesta
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);
*/

/*
Crea una función que muestre en pantalla el área 
y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
/*
let altura=0;
let anchura=0;

function area (altura, anchura){
let resultado=anchura*altura;
return resultado;
}
console.log (area (2,2))

function perimetro (altura, anchura){
  let sumaPerimetro= 2*altura + 2*anchura
  return sumaPerimetro
}
console.log (perimetro (2,2));
*/
 
/*respuesta
function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);
*/

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
/*
let pi=3.14
let radio= 4

function areaCirculo (pi){
let circuloArea = pi * (radio*radio);
return circuloArea;
}
console.log (areaCirculo (pi))

function perimetroCirculo (pi){
  let circuloPerimetro= (pi*pi)*radio;
  return circuloPerimetro;
}
console.log (perimetroCirculo (pi))

/*respuesta
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);
*/


/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
/*
let numero = 1;
let tabla = 0;

function tablaMultiplicar (tabla){

while (numero <=10){
 
  let resultado = numero * tabla
  numero ++;
  console.log (tabla + "x" + numero + "=" + resultado);
} 
} 
tablaMultiplicar (2)
*/

/*respuesta
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
*/