let nome = prompt("Qual é seu nome?");
let peso = prompt("Quanto você pesa?");
let altura = prompt("Quanto você mede?");

parseFloat(peso);
parseFloat(altura);

function contas(){
    let IMC = peso/(altura*altura);
    return IMC.toFixed(1);
}

alert(`${nome}, seu IMC é ` + contas());

if(contas()<=18.5){
    alert("Você está abaixo do peso")
}
else if(contas()<=24.9){
    alert("Você está no peso ideial")
}
else if(contas()<=29.9){
    alert("Você está no levemente acima do peso")
}
else if(contas()<=34.9){
    alert("Você está com obesidade nível 1")
}
else if(contas()<=39.9){
    alert("Você está com obesidade nível 2")
}
else if(contas()<=40){
    alert("Você está com obesidade nível 3")
}