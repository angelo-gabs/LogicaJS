//Sabendo que o fuso horário da França é de +5 horas (no horário de verão na França), 
//elaborar um programa que leia a hora no Brasil e informa a hora na França
function conversor(horasBr, minutos){
    let horasFr = horasBr + 5;
    horasFr>= 24 ? horasFr= horasFr - 24: horasFr;
    horasFr < 10 ? horasFr = '0'+horasFr: horasFr;
    return `Brasil: ${horasBr}:${minutos}
França: ${horasFr}:${minutos}`
}
console.log(conversor(23,45));


/*
horasBrasil = 23; //28   
minutos = 28;
horasFranca = horasBrasil + 5;
if(horasFranca >= 24){
    horasFranca = Math.abs(horasFranca - 24)
}
if(horasFranca < 10) {
    horasFranca = '0'+horasFranca;
}
console.log(`Brasil: ${horasBrasil}:${minutos}
França: ${horasFranca}:${minutos}`);
*/

