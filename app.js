let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMax =10;
mostrarCondicionesIniciales();

function mostrarCondicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#intentar').removeAttribute('disabled');
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    if(listaNumerosGenerados.length == numeroMax) {
        asignarTextoElemento('p','Ya se soretearon todos los números posibles');
    }
    else {  
        if(listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
} 

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste, ${numeroDeUsuario} es el número secretro y lo hiciste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');
        limpiarCaja(); 
    }
    else {
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p',`${numeroDeUsuario} es menor que el número secreto, escribe otro número`);
            intentos++;
            limpiarCaja();
        }
        else{
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p',`${numeroDeUsuario} es mayor que el número secreto, escribe otro número`);
                intentos++;
                limpiarCaja();
            }
            else {
                asignarTextoElemento('p','Por favor, ingresa un número del 1 al 10');
            }
        }
    }
    return;
}

function reiniciarJuego() {
    limpiarCaja();
    mostrarCondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

