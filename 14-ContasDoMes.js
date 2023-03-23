// Desenvolva um algoritmo que recebe todas as suas contas do mês, faça a soma dos valores e diminua do seu salário. 
// Como saída mostre o salário, o total de gastos e o quanto irá sobrar no final do mês 
let salario = 2000;
let gastos = {
 'luz': 200,
 'agua': 100,
 'internet': 85,
 'comida': 800
}
let total= Object.values(gastos).reduce((a,b) => a+b);

console.log(`Salário: R$${salario.toFixed(2)}
Total de gastos: R$${total.toFixed(2)}
Restante: R$${(salario-total).toFixed(2)}`);


