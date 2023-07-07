import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh; 
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    border: solid red;

`
const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
`

const Left = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Contact = () => {
    return (
        <Section> 
            <Left>
                <Title> Contact Me!</Title>
                <Subtitle>yutayamada501@gmail.com</Subtitle>
            </Left>
        </Section>
    )
}

export default Contact