import OpeningPanel from "./OpeningPanel"
import styled from "styled-components"
import Navbar from "../Navbar"

const Container = styled.div`
    height: 100vh;
    color: black; 
    background: url("public/img/paintwallBW2.jpg");
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

