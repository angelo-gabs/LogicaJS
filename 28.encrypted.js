function encryption(s) {
    let text = s.replaceAll(' ','');
    let length = text.length;
    let raiz = Math.sqrt(length);
    let columns = Math.ceil(raiz); 
    let res = '';
    for(let i = 0 ; i<columns; i++){ 
        for(let j = i; j<length; j+=columns){
            res += text[j];
        }
        res += ' ';
    }
    return res
     
}
console.log(encryption('feedthedog'));
