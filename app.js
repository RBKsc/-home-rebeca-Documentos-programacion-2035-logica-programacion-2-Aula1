let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo=10;
console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto; 
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log (intentos);
    console.log (numeroUsuario == numeroSecreto);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento ("p", `acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (numeroUsuario > numeroSecreto){
        asignarTextoElemento ("p", "El número secreto es menor"); 
    } else {
        asignarTextoElemento("p", "El número secreto es mayor")
    }
    intentos++;
    limpiarCaja ();
}
    return;
}

function limpiarCaja(){
   document.querySelector ("#valorUsuario").value = "";
  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor ((Math.random ()*numeroMaximo)+1);

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
//SI ya sorteamos los números

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "ya se sortearon todos los números posibles");
    }else {

 if (listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
 }else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }
 }
}  
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
//limpiar caja
limpiarCaja ();
//Indicar intervalo de mensaje de números
condicionesIniciales();
//deshabilitar el boton de juego nuevo
document.querySelector("#reiniciar").setAttribute("disabled", "true");

}
condicionesIniciales();

