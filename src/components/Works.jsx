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
`;

const Left = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;
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
`;

const Right = styled.div`
    flex: 0.6;
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