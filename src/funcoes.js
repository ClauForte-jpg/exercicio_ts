"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    const total = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    console.log("Total:", total);
    console.log("Números:", numeros);
}
//void
function teste() {
    if (10 > 5) {
        return 'dez maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
