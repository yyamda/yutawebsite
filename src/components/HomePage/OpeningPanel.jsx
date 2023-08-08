import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import Yuta from '../../../public/img/yuta.png'
import github from '../../../public/img/github.png'

const Container = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;



    // border: solid black;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Title = styled.div`
    font-size: 74px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: bold;

    animation: Appear 0.5s ease-in-out 0.5s both;

    @keyframes Appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;


const Desc = styled.p`
    font-size: 24px; 
    color: gray;
    font-family: "Lucida Console", "Courier New", monospace;

    animation: Appear 0.5s ease-in-out 0.5s both;

    @keyframes Appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }

`;

const Desc2 = styled.p`
    font-size: 24px; 
    color: gray;
    font-family: "Lucida Console", "Courier New", monospace;
    margin-top: 30px;

    animation: Appear 0.5s ease-in-out 0.5s both;

    @keyframes Appear {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }

`;
const InfoBox = styled.div`
    width: 500px;
    height: 500px;
    column-gap: 0px 100px;

    padding-top: 200px;

    // border: solid black;
`
const YutaPicture = styled.img`
    height: 800px;

    animation: Appear 0.5s ease-in-out 0.5s both;

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
const IconBar = styled.div`
    display: flex; 
    flex-direction: row;
    margin-top: 30px;
    gap: 50px;

    animation: Appear 0.5s ease-in-out 0.5s both;


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

const Hero = () => {
    return (
        <Container> 
            <InfoBox>
                <Title> Yuta Yamada</Title>
                <Desc> Computer Science and Data Science Student at UC Berkeley</Desc>
                <IconBar>
                    <a href="https://www.linkedin.com/in/yutayamada/" target="_blank">
                        <Icon src="public/img/linkedin.png" height="50" width="50"/>
                    </a>
                    <a href="https://github.com/yyamda" target="_blank">
                        <Icon src={github} height="50" width="50"/>
                    </a>
                    <a href="https://instagram.com/yuta_.yamada?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                        <Icon src="public/img/instagram.png" height="50" width="50"/>
                    </a>
                </IconBar>
                <Desc2> Contact Me: yutayamada@berkeley.edu</Desc2>
            </InfoBox>
            <YutaPicture src={Yuta}/>
        </Container>
    )
}

export default Hero