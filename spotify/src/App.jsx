import Header from "./components/Header"
import SideBar from "./components/SideBar"
import MainContent from "./components/MainContent"
import Container from "./components/Container"
import CardSideBar from "./components/CardSideBar"

function App() {

  return (
    <>
      <Header/>
      <Container>
        <SideBar>
          <CardSideBar/>
          <CardSideBar/>
          <CardSideBar/>
        </SideBar>
        <MainContent/>
      </Container>
    </>
  )
}

export default App
