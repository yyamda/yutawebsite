import react from "react"
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;

    background-color: white;
    border-radius: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;

    border: solid #D1D1D1;

    transition: transform 0.4s;

    &:hover {
    transform: translateY(-15px);

`
const LogoContainer = styled.div`
    width: 300px;
    // height: 200px;
    
    display: flex; 
    justify-content: center;
    align-items: center;

    // border: solid black;
`


const TextContainer = styled.div`
    width: 100%;


    // border: solid black;

`

const CompanyLogo = styled.div`

`

const Position = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 30px;
    margin-left: 20px;
    width: 500px;
`

const Description = styled.div`
    font-family: Consolas, monaco, monospace;
    font-weight: normal;
    margin-top: 10px;
    margin-left: 20px;

    // height: 100px;
    width: 450px;

    // border: solid black;

`
const Timeframe = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 20px;

    margin-right: 7px;
`
const CompTimeContainer = styled.div`
    width: 100%;
    // height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    // border: solid black;

`

const AddInfo = styled.div`
    font-family: Consolas, monaco, monospace;
    font-weight: normal;
    margin-top: 10px;
    margin-left: 20px;

    // height: 100px;
    width: 450px;

    // border: solid black;
`


function Experience(props) {
    return (
        <Container>
            <LogoContainer>
                <img src={props.img} width={props.imgW} height={props.imgH}/>
            </LogoContainer>
            <TextContainer>
                <CompTimeContainer>
                    <Position>
                        {props.position}

                    </Position>
                    <Timeframe>
                        {props.timeframe}

                    </Timeframe>
                </CompTimeContainer>
                
                <Description>
                    {props.description}

                </Description>

                {props.addinfo !== undefined ? (
                <AddInfo>
                    {props.addinfo}
                </AddInfo>
            ) : null}
                
            </TextContainer>

        </Container>
    )
}

export default Experience