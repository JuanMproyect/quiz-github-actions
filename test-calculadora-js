const { sumar, restar, multiplicar } = require('./calculadora.js');

let pasados = 0;
let fallados = 0;

// Test 1: Suma
if (sumar(2, 3) === 5) {
    console.log("Test 1 pasó: suma(2, 3) = 5");
    pasados++;
} else {
    console.log("Test 1 falló");
    fallados++;
}

// Test 2: Resta
if (restar(10, 5) === 5) {
    console.log("Test 2 pasó: resta(10, 5) = 5");
    pasados++;
} else {
    console.log("Test 2 falló");
    fallados++;
}

// Test 3: Multiplicación
if (multiplicar(4, 5) === 20) {
    console.log("Test 3 pasó: multiplicar(4, 5) = 20");
    pasados++;
} else {
    console.log("Test 3 falló");
    fallados++;
}

console.log("\nTotal: " + pasados + " pasados, " + fallados + " fallados");

if (fallados > 0) {
    process.exit(1);
}