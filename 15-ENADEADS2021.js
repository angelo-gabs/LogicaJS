/*
Questão 3 ENADE 2021
Considere a realização de uma pesquisa com 1000 pessoas para obtenção das seguintes informações:
o valor da maior altura; o valor da menor altura; a média das alturas; quantas pessoas têm altura inferior à média das alturas.
Considere, ainda, que um programador foi slecionado para desenvolver um modelo de código que
soluciona o problema automatizando a coleta das alturas e a geração das informações 
*/

let alturas = [];
function criaPessoa(num){
  for(let i = 0; i<num;i++){
    alturas.push(Math.random() * (2.5 - 1.3) + 1.3);
   }
}
criaPessoa(1000)

let soma =  alturas.reduce((a,b) => a+b);
let media = (soma/alturas.length).toFixed(2);
let mediaMenor = 0;
alturas.forEach(x => {if(x<media) mediaMenor++})

console.log(`Menor altura: ${(alturas.sort((a,b) => a-b)[0]).toFixed(2)}`); // crescente
console.log(`Maior altura: ${(alturas.sort((a,b) => b-a)[0]).toFixed(2)}`); // decrescente
console.log(`Média  das alturas: ${media}`);
console.log(`Quantidade de alturas inferiores à média: ${mediaMenor}`);



