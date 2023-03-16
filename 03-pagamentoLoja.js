//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. 
//Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
//EXEMPLO:
//Preço: R$60,00
//À vista: R$54,00
//Ou 3x de: R$20,00
//========================

let preco = 60;
let aVista = preco * 0.90;
let parcelado = preco/3;

console.log(`Preço: R$${preco.toFixed(2)}`);
console.log(`À vista: R$${aVista.toFixed(2)}`);
console.log(`Ou 3x de: R$${parcelado.toFixed(2)}`);

