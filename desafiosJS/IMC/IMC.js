const prompt = require("prompt-sync")();

function getUserInfo(){
    let weight = prompt("Digite seu peso");
    let height = prompt("Digite sua altura");

    return pessoa = {
        peso: weight,
        altura: height
    };
};

function calcImc(pesoInformado,alturaInformado){

    return pesoInformado / alturaInformado**2;
};

function main(){
    let userData = getUserInfo();
    let peso = userData.peso;
    let altura = userData.altura;
    let resultImc = calcImc(peso,altura);
    let nivelObesidade = check(peso,altura);

    function check(){
        if(resultImc<=18.5){
           return "Você está abaixo do peso";
        }
        else if(resultImc<=24.9){
            return "Você está no peso ideial";
        }
        else if(resultImc<=29.9){
            return "Você está no levemente acima do peso";
        }
        else if(resultImc<=34.9){
            return "Você está com obesidade nível 1";
        }
        else if(resultImc<=39.9){
            return "Você está com obesidade nível 2";
        }
        else if(resultImc<=40){
            return "Você está com obesidade nível 3";
        }
    };
    console.log(`Seu IMC é ${resultImc.toFixed(1)}. ${nivelObesidade}`)
};

main();