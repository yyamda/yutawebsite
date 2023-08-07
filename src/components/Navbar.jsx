import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    width: 100%; 
    height: 50px;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 10px 0px;
    background-color: white;
    opacity: 0.7;


    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

const List = styled.ul`
    margin-right: 150px;
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    // border: black solid;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`; 

const ListItem = styled(Link)`
    color: black;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 20px;
    text-decoration: none;
    position: relative;

    &.active {
        font-weight: 400; 
        color: #B8B8B8; 
      }
  
      &:hover {
        color: #B8B8B8; 
        transition: 0.5s ease-in-out;
      }
  
      &::after {
        content: "";
        position: absolute; 
        left: 1;
        bottom: 0;
        display: block;
        height: 2px;
        width: 0;
        background-color: #B8B8B8;
        transition: width 0.4s ease-in-out;
      }
  
      &:hover::after {
        width: 100%;
      }

    // border: black solid;
`;


const HomeIcon = styled.img`
    height: 60px;
    margin-left: 30px;
`

const Navbar = () => {
    return (
        <Container>
            <Link to="/Home">
                <HomeIcon src="public/img/YutaWebsiteLogo.png"/>
            </Link>
            <List>
                <ListItem to="/home"> Home </ListItem>
                <ListItem to="/experiences"> Experiences </ListItem>
                <ListItem to="/projects" > Projects </ListItem>
               
            </List>
        </Container>
    )
}

export default Navbar