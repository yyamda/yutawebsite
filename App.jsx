import Contact from "./src/components/Contact"
import Hero from "./src/components/Hero"
import Who from "./src/components/Who"
import Works from "./src/components/Works"
import styled from "styled-components"
import Test from "./src/components/Test"

const Container = styled.div`
    height: 100vh; 
    scroll-snap-type : y mandatory; 
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width:none;
    color: white; 
    background: url("public/img/bg.jpeg");
    }
`
// &::-webkit-scrollbar{
//     display: none;
function App() {
    return (
      <Container>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
      </Container>
    )
  }
  
  export default App