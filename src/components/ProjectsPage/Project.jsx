import react from "react"
import styled from 'styled-components'


const ProjectContainer = styled.div`
    border-radius: 25px;
    height: 500px;
    width: 600px; 
    border: black solid;
    background: white;

    display: flex;
    // justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    transition: transform 0.4s;

    &:hover {
    transform: translateY(-15px);
  }
`

const Title = styled.a`
    width: 100%;
    height: 80px;

    font-size: 36px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: 525;
    color: gray;

    display: flex;
    align-items:center;

    padding-left: 20px;
    text-decoration: none;


    // border: solid black;
`

const ImageContainer = styled.img`
    width: 100%; 
    height: 350px;
    background-color: gray;
`
const Description = styled.div`
    width: 100%;
    height: 140px;

    padding-top: 20px;
    padding-left: 10px;

    // border: solid black;
`
function Project(props) {
    return (
            <ProjectContainer> 
                <Title href={props.link} target="_blank">
                    {props.title}
                </Title>
                <ImageContainer src={props.img}>
                </ImageContainer>
            </ProjectContainer>
    );
}

export default Project;