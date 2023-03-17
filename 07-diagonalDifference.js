function diagonalDifference(arr) { 
let leftRight = 0;
let rightLeft = 0;
for(let i = 0; i<arr.length;i++){
    leftRight += arr[i][i];
    rightLeft += arr[i][arr.length-i-1];
}  
let res = Math.abs(leftRight - rightLeft);
return res
}
//                                 0       1       2   
//                               0 1 2   0 1 2   0 1 2
console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));
console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));

