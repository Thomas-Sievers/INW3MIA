const prompt = require("prompt-sync")();

function bookQuantity(){
    let quantity = prompt("Quantos livros você irá comprar?");
    return quantity
};

function main(){
    let quantity = bookQuantity();
    let pay = total(quantity);

    function total(quantity){
        if(quantity => 7){
            return quantity*15;
        }
        else{
            return quantity*22;
        };
    };

    console.log(`O total da sua compra é ${pay}`);
};
main();