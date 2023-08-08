import OpeningPanel from "./OpeningPanel"
import styled from "styled-components"
import Navbar from "../Navbar"
import background from "../../../public/img/paintwallBW2.jpg"

const Container = styled.div`
    height: 100vh;
    color: black; 
    background: url(${background});
    background-size: 1700px 700px;
    position: relative;

`
function Home({}) {
      return (
          <Container >
            <Navbar/>
            <OpeningPanel/>
          </Container>
      )
    }
  
    export default Home

