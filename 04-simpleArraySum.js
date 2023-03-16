//Dado uma array de inteiros, encontre a soma de seus elementos.
//Por exemplo, se o array ar=[1,2,3], 1+2+3=6, então retorne 6.
function simpleArraySum(ar) {
   let soma = 0;
   for(let i = 0; i< ar.length; i++){
    soma += ar[i];
   } 
   return soma
}

console.log(simpleArraySum([1,2,3]));
