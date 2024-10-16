import Header from "./components/Header"
import SideBar from "./components/SideBar"
import MainContent from "./components/MainContent"
import Container from "./components/Container"
import CardSideBar from "./components/CardSideBar"
import { useEffect, useState } from "react"
import artista from "../server/Models/Artista"

function App() {

  const [ artistas, setArtistas ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <Header/>
      <Container>
        <SideBar>
          <CardSideBar/>
          <CardSideBar/>
          <CardSideBar/>
        </SideBar>
        <MainContent>
          <>
            <h1>Rock</h1>
            {artistas
              .filter ( artista => artista.genero.includes("rock indie"))
              .map( artista => (
                <div className=" bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                  <h1>{artista.name}</h1>
                </div>
              ))
            }
          </>
        </MainContent>
      </Container>
    </>
  )
}

export default App
