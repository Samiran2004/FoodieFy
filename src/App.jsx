import styled from "styled-components"
import './App.css'
import Nav from "./components/Nav"
import Foodcard from "./components/Foodcard";
import Footer from "./components/Footer";

function App() {

  return (
    <MainContainer>
      <Nav />
      <Foodcard />
      <Footer/>
    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
  width: auto;
  background-image:url(https://png.pngtree.com/background/20231101/original/pngtree-3d-rendered-interface-for-a-homemade-food-app-picture-image_5830862.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`