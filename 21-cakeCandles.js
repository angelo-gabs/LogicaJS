function birthdayCakeCandles(candles){
    let count = 0;
    let max = Math.max(...candles);
    candles.forEach((candle) =>  {if(candle == max) count++})
    return count;
}
console.log(birthdayCakeCandles([3,2,1,3]));