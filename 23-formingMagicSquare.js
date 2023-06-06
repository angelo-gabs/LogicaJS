function formingMagicSquare(s) {
    let possibleMatrices = [
    [[8,1,6],[3,5,7],[4,9,2]], //0
    [[6,1,8],[7,5,3],[2,9,4]], //1
    [[4,9,2],[3,5,7],[8,1,6]], //2
    [[2,9,4],[7,5,3],[6,1,8]], //3
    [[8,3,4],[1,5,9],[6,7,2]], //4
    [[4,3,8],[9,5,1],[2,7,6]], //5
    [[6,7,2],[1,5,9],[8,3,4]], //6
    [[2,7,6],[9,5,1],[4,3,8]], //7
];
let maxVal = Number.MAX_VALUE;
for(let i = 0; i<possibleMatrices.length; i++){
    let min = 0;
    for(let line = 0; line<s.length; line++){
        for(let column = 0; column<s.length; column++){
            min += Math.abs(s[line][column] - possibleMatrices[i][line][column]);
        }
    }
    maxVal = Math.min(maxVal, min);
}
return maxVal
}
console.log(formingMagicSquare([
[5, 3, 4],
[1, 5, 8],
[6, 4, 2]]));