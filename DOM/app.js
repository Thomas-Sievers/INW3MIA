const btn1 = document.querySelector('button');
const listaFilmes = document.querySelector('#listaFilmes');

btn1.addEventListener('click', ()=>{
    const valorDigitado = document.querySelector('#filmeInput').value;
    //Criar elemento li
    const itemLista = document.createElement('li');
    //adiciona o li á lista
    listaFilmes.append(itemLista);
    //adiciona conteudo a li
    itemLista.innerHTML = valorDigitado;
    //muda o css do irem
    itemLista.style.backgroundColor = 'red';
    //adiciona uma classe ao item
    itemLista.classList.add(fundo-azul);
});

// Se quiser que a ação aconteça quando a tela carregue, use onload