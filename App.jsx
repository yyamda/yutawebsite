import Contact from "./src/components/Contact"
import Hero from "./src/components/Hero"
import Who from "./src/components/Who"
import Works from "./src/components/Works"
import styled from "styled-components"
import Test from "./src/components/Test"
import useScript from "./src/useScript"

const Container = styled.div`
    height: 100vh;
    scroll-snap-type : y mandatory; 
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width:none;
    color: black; 
    background: url("public/img/paintwallBW2.jpg");
    background-size: 1700px 700px;
    position: relative;

`

const Canvas = styled.canvas`
  position: sticky;
  border: solid blue;
  top: 0; 
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`
function App({url}) {
  useScript(url)
    return (
        <Container >
                  <Canvas id="canvas"/>
            <Hero/>
            <Who/>
            <Works/>
            <Contact/>
          </Container>
    )
  }

  export default App