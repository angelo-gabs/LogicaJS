function bonAppetit(bill, k, b) {
    let res = (bill.reduce((a,b)=> a+b) - bill[k])/2;
    res == b ? console.log('Bon Appetit'):console.log(b-res);
}
bonAppetit([3,10,2,9], 1, 12);
