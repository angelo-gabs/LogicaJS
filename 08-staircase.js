function staircase(n) {
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n-1;
    for(lineIndex = 0; lineIndex < n; lineIndex++){
        for(columnIndex = 0; columnIndex < n; columnIndex++){
            if(columnIndex < inputPosition){
                inputLine += ' '; 
            }else{
                inputLine += symbol;
            }
        }
        console.log(inputLine)
        inputLine = '';
        inputPosition -= 1
    }
}
staircase(5);