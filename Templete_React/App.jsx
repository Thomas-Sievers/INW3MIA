import './App.css'
import Banner from './Componentes/Banner/Banner'
import Informacoes from './Componentes/Informacoes/Informacoes'
import Habilidades from './Componentes/Habilidades/Habilidades'
import Formulario from './Componentes/Formulario/Formulario'
import Rodape from './Componentes/Rodape/Rodape'

function App() {
  return (
    <>
      <Banner/>
      <div className='mainInfo'>
        <section id='info'>
          <Informacoes/>
          <Habilidades/>
        </section>
        <Formulario/>
      </div>
      <Rodape/>
    </>
  )
}

export default App
