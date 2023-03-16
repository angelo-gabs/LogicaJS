//Hacker hank -  A very big sum

function aVeryBigSum(ar) {
   let soma  = ar.reduce((a,b)=>(a+b));
   return soma
}
console.log(aVeryBigSum([100000, 200000, 530402, 132123254]));
