import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh; 
    scroll-snap-align: center;

`
const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
    justify-content: space-between; 
    gap: 50px; 
`

const Left = styled.div`
    flex: 1;
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    padding: 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Form = styled.form`
    width: 500px; 
    display: flex; 
    flex-direction: column;
    gap: 25px;
`

const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6; 
    border: none;
    border-radius: 5px; 
`
const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px; 
    background-color: #e8e6e6; 
`
const Button = styled.textarea`
    background-color: #da4ea2;
    color: white; 
    border: none; 
    font-weight: bold; 
    cursor: pointer; 
    border-radius: 5px;
    padding: 20px;

`
const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Right = styled.div`
    flex: 1;
`
const Contact = () => {
    return (
        <Section> 
            <Container>
                <Left>
                    <Title> Contact Me!</Title>
                    <Subtitle>yutayamada501@gmail.com</Subtitle>
                </Left>
                <Right></Right>
            </Container>
        </Section>
    )
}

export default Contact