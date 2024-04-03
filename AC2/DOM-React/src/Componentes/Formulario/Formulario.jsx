function Formulario(){
    return(
        <>
        <form>
                <h1 id="form_titulo">Contato</h1>
                <label for="name">Nome: </label>
                <input type="text" id="name"/>

                <label for="email">Email: </label>
                <input type="email" id="email"/>

                <label for="celular">Celular: </label>
                <input type="number" id="celular"/>

                <input type="submit"/>
            </form>
        </>
    )
}

export default Formulario