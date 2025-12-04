const { sumar, restar, multiplicar } = require('./calculadora.js');

let pasados = 0;
let fallados = 0;

if (sumar(2,3) === 5) { console.log('Test 1 paso: suma(2,3) = 5'); pasados++; }
else { console.log('Test 1 fallo'); fallados++; }

if (restar(10,5) === 5) { console.log('Test 2 paso: resta(10,5) = 5'); pasados++; }
else { console.log('Test 2 fallo'); fallados++; }

if (multiplicar(4,5) === 20) { console.log('Test 3 paso: multiplicar(4,5) = 20'); pasados++; }
else { console.log('Test 3 fallo'); fallados++; }

console.log('\nTotal: ' + pasados + ' pasados, ' + fallados + ' fallados');

if (fallados > 0) process.exit(1);