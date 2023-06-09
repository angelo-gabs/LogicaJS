function plusMinus(arr) {
    let positive = 0;
    let negative = 0; 
    let zero = 0;
    let length = arr.length
    for(let i=0 ; i<length; i++){
        if(arr[i]> 0){
            positive++;
        }else if(arr[i] < 0){
            negative++;
        }else{
            zero++;
        }
    }
    console.log(positive/length);
    console.log(negative/length);
    console.log(zero/length);
}
plusMinus([-4, 3, -9, 0, 4, 1])