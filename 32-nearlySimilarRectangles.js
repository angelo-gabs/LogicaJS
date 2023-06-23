function nearlySimilarRectangles(sides){
    let count = 0;
    for(let i = 0; i<sides.length-1; i++){ 
        for(let j = i+1; j<sides.length; j++){ 
           if(sides[i][0] / sides[j][0] == sides[i][1]/ sides[j][1]){ 
            count++
           }
        }
    }
    return count
}
console.log(nearlySimilarRectangles([
    [4,8], [15,30],[25,50]
]));