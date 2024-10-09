import Header from "./components/Header"
import SideBar from "./components/SideBar"
import MainContent from "./components/MainContent"
import Container from "./components/Container"
import CardSideBar from "./components/CardSideBar"
import { useEffect, useState } from "react"

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

          {
            artistas.map( artistas => (           
            <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
              <p>{artistas.name}</p>
              <div className="bg-green-400 w-3/4 h-7"></div>
            </div>
            ))
          }


        </MainContent>
      </Container>
    </>
  )
}

export default App
