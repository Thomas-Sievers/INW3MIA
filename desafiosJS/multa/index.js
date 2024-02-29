const prompt = require("prompt-sync")();

function getInfo(){
    let speed = prompt("Quantos quilometros por hora o carro estava?");
    return speed;
};

function main(){
    let speed = getInfo();
    let final = payTicket(speed);

    function payTicket(speed){
        if(speed>60){
            let ultrapassou = speed-60;
            return ultrapassou*100;
        }
        else{
            return "Você está dentro do limite de velocidade";
        }
    };
    if(final === "Você está dentro do limite de velocidade"){
        console.log(final);
    }
    else{
        console.log(`A multa que você precisa pagar é: ${final}`);    
    };
};

main();