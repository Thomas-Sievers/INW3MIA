import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Container from "./components/Container"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header/>
      <Container>
        <SideBar>
          <Outlet/>
        </SideBar>
      </Container>
    </>
  )
}

export default App
