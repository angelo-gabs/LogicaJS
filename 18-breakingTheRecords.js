function breakingTheRecords(scores){
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for(let i = 0; i<scores.length;i++){
        if(scores[i] > max){
            maxCount++;
            max = scores[i];
        }
        if(scores[i] < min){
            minCount++;
            min = scores[i];
        }   
    }
    return [maxCount, minCount]
}
console.log(breakingTheRecords([3,4,21,36,10,28,35,5,24,42]));