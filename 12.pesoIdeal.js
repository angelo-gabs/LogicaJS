//Desenvolva um algoritmo para calcular o peso ideal de uma pessoa
//O peso ideal de um adulto pode ser calculado a partir das fórmulas:
// 22 * altura^2 (para homens)
// 21 * altura^2 (para mulheres)
function pesoIdeal(altura, sexo){
    let peso;
    if(sexo == "M"){
        peso = 22 * Math.pow(altura,2);
    }else if(sexo == "F"){
        peso = 21 * Math.pow(altura,2);
    }else{
        return "Sexo inválido"
    }
    return peso.toFixed(2)+'kg'

}
console.log(pesoIdeal(1.80, 'M'));
