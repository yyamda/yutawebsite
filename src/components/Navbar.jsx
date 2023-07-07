import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
    display: flex;
    justify-content: center; 
    background: white; 
    height: 80px;
    width: 100%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`
const Container = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 10px 0px ;


    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;
const Links = styled.div`
    width: 600px;
    margin-right: 150px;
    font-size: 20px;
`;

const Logo = styled.img`
    height: 50px;
`;

const List = styled.ul`
    display: flex; 
    justify-content: space-between; 
    gap: 20px;
    list-style: none;
    // border: red solid;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`; 

const ListItem = styled.li`
    cursor: pointer;
    font-family: "Lucida Console", "Courier New", monospace;
    // font-weight: bold;


`;

const Icons = styled.div`
    display: flex;
    align-items: center; 
    gap: 20px;
    border: red solid;
`;

const Icon = styled.img`
    width: 20px; 
    cursor: pointer; 
`;

const Button = styled.button`
    width: 100px; 
    padding: 10px;
    background-color: black;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
`;

const HomeIcon = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    width: 150px; 
    justify-content: center;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 25px;
    font-weight: bold;
    

`


const Navbar = () => {
    return (
        <Section> 
            <Container>
                <HomeIcon>
                    Yuta
                </HomeIcon>
                <Links>
                    <List>
                        <ListItem> Home</ListItem>
                        <ListItem> Projects</ListItem>
                        <ListItem> Experiences</ListItem>
                        <ListItem> Contact</ListItem>

                    </List>
                </Links>
                {/* <Icons>
                    <Icon src="public/img/search.png"/>
                    <Button> Hire Now</Button>
                </Icons> */}
            </Container>
        </Section>
    )
}

export default Navbar