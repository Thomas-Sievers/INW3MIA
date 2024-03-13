const nomes = [{
    nomes: 'Ryu',
    tipo: 'Fogo',
    idade: 187

},
{
    nomes: 'Akuma',
    tipo: 'Fogo',
    idade: 250
}
];

for(let i = 0; i<nomes.length; i++){
    console.log(nomes[i]);
};

nomes.map(element => {
    console.log(element);
});