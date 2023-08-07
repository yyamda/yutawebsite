import {react, useState} from "react" 
import Navbar from "../Navbar"
import styled from 'styled-components'
import Project from './Project'

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


const WholeContainer = styled.div`
    // border: red solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    gap: 70px;
    margin-bottom: 300px;

    animation: Appear 1s ease-in-out 1s both;

    @keyframes Appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


    
`
const SubHeader = styled.div`
    height: 70px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 24px;

    display: flex;
    justify-content: center;

    // border: solid black;
`

const Header = styled.div`
    height: 150px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    // border: solid black;
`
const HeaderContainer = styled.div`
    width: 100%;
    height: 400px;

    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;

    animation: Appear 1s ease-in-out 1s both;

    @keyframes Appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    // border: solid black;
`
const Icon = styled.img`
    height: 50;
    width: 50;

    transition: transform 0.3s;

    &:hover {
    transform: translateY(-6px);
  }

`
const projects = 
    [ 
        {
        Title: 'Social Alarm Clock App', 
        img: 'public/img/socialalarm.png',
        link: "https://github.com/yyamda/socialalarmclock"
        }, 
        {
            Title: 'Product Space Website', 
            img: 'public/img/pswebsite.png',
            link: "https://github.com/yyamda/pswebsite"
        }, 
        {
        Title: 'Personal Website', 
        img: 'public/img/yutawebsite.png',
        link: "https://github.com/yyamda/yutawebsite"
        }
    ]
function Projects() {
    return (
        <Container>
            <Navbar/>
            <HeaderContainer>
                <Header> Projects </Header>
                <SubHeader> More projects on my GitHub site  </SubHeader>
                <a href="https://github.com/yyamda" target="_blank">
                        <Icon src="public/img/github.png" height="50" width="50"/>
                    </a>
            </HeaderContainer>
            <WholeContainer> 
                {projects.map((project) => {
                    return (
                        <Project 
                            title={project.Title}
                            img={project.img}
                            link={project.link}
                            />
                    );
                })}
            </WholeContainer>

        </Container>
    )
}

export default Projects