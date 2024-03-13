//header - h1 - main - div - img - p - form - label - input - footer
const body = document.body;

const banner = () => {
    let header = document.createElement("header");
    let textoHeader = document.createElement('h1');
    textoHeader.innerHTML = "Conheça um pouco sobre mim";
    body.appendChild(header);
    header.append(textoHeader);
}



const main = () => {
    let main = document.createElement('main');

    function apresentacao(){
        let apresentacao = document.createElement('div');
        apresentacao.setAttribute('id', 'apresentacao');

        let kaneto_foto = document.createElement('img');
        kaneto_foto.src = 'img/Screen Shot 2024-03-09 at 7.04.34 PM.png'

        let texto_apresentacao = document.createElement('div');
        apresentacao.setAttribute('id', 'texto_apresentacao'); 
        //Perguntar para o professor pq o CSS nao ta funfando
       
        let kaneto_texto = document.createElement('p');
        kaneto_texto.innerHTML = "Olá! Sou José Otavio Kaneto, um entusiasta da programação dedicado a criar soluções inovadoras. Com habilidades em HTML5, CSS3, JavaScript, MongoDB, SQL e Node.js, encontro motivação na resolução de desafios e na busca contínua por conhecimento. Além de ser apaixonado por programação, passo horas me entretendo com projetos pessoais e explorando novas ferramentas. Meu portfólio reflete não apenas minhas habilidades técnicas, mas também minha paixão e comprometimento com a área. Estou ansioso para contribuir com projetos empolgantes no futuro";

        main.append(apresentacao);
        apresentacao.append(kaneto_foto);
        apresentacao.append(texto_apresentacao);
        texto_apresentacao.append(kaneto_texto);
    }

    const cards = () => {
        let card = document.createElement('div');
        card.setAttribute('id', 'cards');

        let html = document.createElement('img');
        html.src = 'img/html.png';

        let css = document.createElement('img');
        css.src = 'img/css.png';

        let js = document.createElement('img');
        js.src = 'img/js.png';

        let mongo = document.createElement('img');
        mongo.src = 'img/mongo.png';

        let node = document.createElement('img');
        node.src = 'img/node.png';

        let sql = document.createElement('img')
        sql.src = 'img/sql.png';

        main.append(card);
        card.append(html);
        card.append(css);
        card.append(js);
        card.append(mongo);
        card.append(node);
        card.append(sql);
    }

    const formulario = () => {
        let form = document.createElement('form');

        let texto_form = document.createElement('h1');
        texto_form.setAttribute('id', 'form_titulo');
        texto_form.innerHTML = "Contato";

        let nome = document.createElement('label');
        nome.setAttribute('for', 'name'); 
        nome.innerHTML = 'Nome: ';

        let input_nome = document.createElement('input');
        input_nome.setAttribute('type', 'text');
        input_nome.setAttribute('id', 'name');

        let email = document.createElement('label');
        email.setAttribute('for', 'email');
        email.innerHTML = 'Email: ';

        let input_email = document.createElement('input');
        input_email.setAttribute('type', 'email');
        input_email.setAttribute('id', 'email');

        let celular = document.createElement('label');
        celular.setAttribute('for', 'celular');
        celular.innerHTML = 'Celular: ';

        let input_celular = document.createElement('input');
        input_celular.setAttribute('type', 'celular');
        input_celular.setAttribute('id', 'celular');

        let submit = document.createElement('input');
        input_celular.setAttribute('type', 'submit'); //Perguntar pq ele foi pra cima

        main.append(form);
        form.append(texto_form);
        form.append(nome);
        form.append(input_nome);
        form.append(email);
        form.append(input_email);
        form.append(celular);
        form.append(input_celular);
        form.append(submit);
    }

        body.appendChild(main);
        apresentacao();
        cards();
        formulario();
}



const footer = ()=>{
    let footer = document.createElement("footer");

    let celularFooter = document.createElement('p');
    celularFooter.innerHTML = "Tel: (11)94000-8848";

    let emailFooter = document.createElement('p');
    emailFooter.innerHTML = "Email: josekaneto0828@gmail.com";

    body.appendChild(footer);
    footer.append(celularFooter);
    footer.append(emailFooter);
}



const chamar = ()=>{
    banner();
    main();
    footer();
}

chamar();