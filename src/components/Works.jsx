import React, {useState} from 'react'
import styled from 'styled-components'
import Development from "./Development"
import ProductDesign from "./ProductDesign"
import WebDesign from "./WebDesign"



const data = [
    "Web Design",
    "Development",
    "Illustration", 
    "Product Design", 
    "Social Media",
];

const Section = styled.div`
    height: 100vh; 
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    display: flex; 
    justify-content: space-between; 

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;

const Left = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 20px;
        justify-content: center;
    }
`;

const List = styled.ul`
    list-style: none; 
    display: flex; 
    flex-direction: column; 
    gap: 20px;
`;

const ListItem = styled.li`
    font-size: 90px;
    font-weight: bold; 
    cursor: pointer; 
    color: ${(props) => (props.selected ? 'white' : 'transparent')};
    -webkit-text-stroke: 1px white;
    position: relative; 

    @media only screen and (max-width: 768px) {
        font-size: 24px; 
        color: white; 
    -webkit-text-stroke: 0px;

    }
`;

const Right = styled.div`
    flex: 0.6;

    @media only screen and (max-width: 768px) {
        flex: 0.3;
    }
`;

const Works = () => {
    const [work, setWork] = useState("Web Design");
    
    return (
        <Section> 
            <Container>
                <Left>
                    <List>
                        {data.map(item=>(
                            <ListItem 
                                key={item} 
                                selected={work === item} 
                                text={item} 
                                onClick={(()=>setWork(item))}>
                                    {item}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {work === "Web Design" ? (
                        <WebDesign/>
                    ) : work === "Development" ? (
                        <Development/>
                    ) : (
                        <ProductDesign/>
                    )}
                </Right>
            </Container>
        </Section>
    );
};

export default Works