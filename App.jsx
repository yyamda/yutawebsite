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
    border: solid blue;

`

const Canvas = styled.canvas`
  position: relative; 
  height: 100%;
`

// star, crater good
// &::-webkit-scrollbar{x
//     display: none;
function App({url}) {
  // useScript(url)
    return (
      <div>
        {/* <Canvas id="canvas"></Canvas> */}
        <Container >
              <Hero/>
              <Who/>
              <Works/>
              <Contact/>
          </Container>
        </div>
    )
  }
  
  export default App