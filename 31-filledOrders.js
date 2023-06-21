function filledOrders(order, k){
    let sum = 0;
    let sort = order.sort((a,b) => a-b);
    for(let i = 0; i<order.length;i++){
        if(order[i] <= k){
            sum++;
            k -= order[i];
        }
    }
    return sum;
}
console.log(filledOrders([10,30,1,3,4,5,6], 40));