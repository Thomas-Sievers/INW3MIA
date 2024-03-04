const prompt = require("prompt-sync")();

function getInfo(){
    let speed = prompt("Quantos quilometros por hora o carro estava?");
    return speed;
};

function payTicket(speed){
    if(speed>60){
        let ultrapassou = speed-60;
        let final = ultrapassou*100;
        return console.log(`Você terá que pagar R$${final}`);
    }
    else{
        return "Você está dentro do limite de velocidade";
    }
}
function main(){
    let speed = getInfo();
    payTicket(speed);
};

main();