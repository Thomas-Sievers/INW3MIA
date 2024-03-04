const prompt = require("prompt-sync")();

function bookQuantity(){
    let quantity = prompt("Quantos livros você irá comprar?");
    return quantity
};

function total(quantity){
    if(quantity >= 7){
        let valorTotal = quantity*15;
        return console.log(`Você terá que pagar R$${valorTotal}`);
    }
    else{
        let valorTotal = quantity*22;
        return console.log(`Você terá que pagar R$${valorTotal}`);
    };
};

function main(){
    let quantity = bookQuantity();
    total(quantity);
};
main();