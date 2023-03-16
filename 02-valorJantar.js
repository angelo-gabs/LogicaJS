// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let valor = 80;
let taxa = 80*(10/100);
let total = valor + taxa;

console.log(`Valor do jantar: R$${valor.toFixed(2)}`);
console.log(`Taxa do garçom: R$${taxa.toFixed(2)}`);
console.log(`Total a pagar: R$${total.toFixed(2)}`);
