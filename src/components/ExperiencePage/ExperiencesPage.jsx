import react from "react" 
import Navbar from "../Navbar"
import styled from 'styled-components'
import ExperiencePanel from "../ExperiencePage/ExperiencePanel"


const Container = styled.div`
    color: black; 
    background: url("public/img/paintwallBW2.jpg");
    background-size: 1700px 700px;
    background-attachment: fixed; 
    position: relative;

    display: flex; 
    flex-direction: column;
    align-items: center:


    
    

`

function Experiences() {
    return (
        <Container>
            <Navbar/>
            <ExperiencePanel/>
        </Container>
    )
}

export default Experiences