import './App.css'
import Banner from './Componentes/Banner/Banner'
import Apresentacao from './Componentes/Apresentacao/Apresentacao'
import Cards from './Componentes/Cards/Cards'
import Formulario from './Componentes/Formulario/Formulario'
import Rodape from './Componentes/Rodape/Rodape'

function App() {
  return (
    <>
      <Banner/>
      <main>
      <Apresentacao/>
      <Cards/>
      <Formulario/>
      </main>
      <Rodape/>
    </>
  )
}

export default App
