const prompt =  require("prompt-sync")();

function ask(){
    let num1 = prompt("Escolha um número");
    let num2 = prompt("Escolha outro número");
    let num3 = prompt("Escolha um terceiro número");

    return userChoice = {
        number1 : num1,
        number2 : num2,
        number3 : num3
    };
};

function main(){
    let userData = ask();
    let number1 = userData.number1;
    let number2 = userData.number2;
    let number3 = userData.number3;

    function check(number1, number2, number3){
        
    };
};