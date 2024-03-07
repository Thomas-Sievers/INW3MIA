const prompt =  require("prompt-sync")();

function ask(){
    let num1 = parseFloat(prompt("Escolha um número: "));
    let num2 = parseFloat(prompt("Escolha outro número: "));
    let num3 = parseFloat(prompt("Escolha um terceiro número: "));

    return userChoice = {
        number1 : num1,
        number2 : num2,
        number3 : num3
    };
};

function check(number1, number2, number3){
    if((number1 == number2) || (number1	== number3) || (number2 == number3)){
        return console.log("Dois ou mais número são iguais.");
    }
    if((number1 > number2) && (number1 > number3)){
        return console.log(`O número ${number1} é o maior dos 3 números escolhidos`);
    }
    else if((number2 > number1) && (number2 > number3)){
        return console.log(`O número ${number2} é o maior dos 3 números escolhidos`);
    }
    else if((number3 > number1) && (number3 > number2)){
        return console.log(`O número ${number3} é o maior dos 3 números escolhidos`);
    };
};

function main(){
    let userData = ask();
    let number1 = userData.number1;
    let number2 = userData.number2;
    let number3 = userData.number3;
    check(number1, number2, number3);
};

main();