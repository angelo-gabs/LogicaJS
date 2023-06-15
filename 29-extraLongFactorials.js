function extraLongFactorials(n) {
    n = BigInt(n);
    let count = BigInt(1);
    for(let i = n; i>1; i--){
        count *= i;
    }
    console.log(count.toString());
}
extraLongFactorials(25);