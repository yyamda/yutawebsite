import react from "react"
import styled from "styled-components"
import Experience from "../ExperiencePage/Experience"
import blizzard from "../../../public/img/blizzard.png"
import burningrock from "../../../public/img/burningrock.png"
import berkeley from "../../../public/img/berkeley.png"
import bishop from "../../../public/img/bishop.png"


const Header = styled.div`
    height: 200px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    // border: solid black;
`
const SubHeader = styled.div`
    height: 100px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ExperienceContainer = styled.div`
    width: 85%; 

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 75px;

    gap: 30px;

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
const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;

    
    // border: solid black;

    

    
`

function Experiences() {
    return (
        <Container> 
            <Header> Experiences </Header>
            <SubHeader> Work Experience </SubHeader>

            <ExperienceContainer>
                <Experience timeframe="May 2023 - August 2023" position="Product Management Intern"
                img={blizzard} imgW="180" imgH="80" 
                description="Worked with the Battle.net Desktop team to ship 4 QoL features with 10+ engineers & designers, set up data analytics portals on Looker, and conduct a comprehensive competitve analysis on post-purchase UI/UX"
                addinfo="Skills: Product Management, SQL BigQuery, Looker, Figma, Project Management, Communication"/>

                <Experience timeframe="December 2022 - May 2023" position="Project Manager (Contract)"
                img="public/img/amex.png" imgW="125" imgH="125" 
                description="Managed a team of 5 to develop 6 comprehensive product roadmaps of Large Language Model (LLM) use cases for AMEX Digital Labs"
                addinfo="Skills: Product Roadmapping, Project Management, Presentation, Technical Consulting"/>
           
                <Experience timeframe="August 2022 - February 2023" position="Project Manager (Contract)"
                img="public/img/intuit.png" imgW="150" imgH="50" 
                description="Managed a team of 6 and conducted 20+ meeting with 30+ internal engineers and data scientists to develop an internal AI documentation portal for 1000+ Intuit data scientists"
                addinfo="Skills: Technical Consultation, ML Lifecycle roadmapping, technical writing,"/>

                <Experience timeframe="May 2022 - August 2022" position="Software Engineer Intern "
                img="public/img/nttdata.png" imgW="180" imgH="40" 
                description= "Developed a personalized ranking software prototype utilizing a quantum computer and optimizing algorithms"
                addinfo="Skills: Python (pandas, pyQUBO), Linear Algebra, Japanese"/>
           
                <Experience timeframe="January 2022 - May 2022" position="Software Engineer (Contract) "
                img="public/img/captaintv.png" imgW="180" imgH="60" 
                description="Developed a full stack web scraper that scrapes SNS platforms to extract data to help with sponsorship outreach "
                addinfo="Skills: Python (Selenium, tkinter, pandas)"/>
           
                <Experience timeframe="August 2021 - January 2022" position="Software Engineer (Contract)"
                img={burningrock} imgW="175" imgH="85"
                 description="Developed a full stack live-updating database that list 1000+ new clinical trials globally for company outreach"
                 addinfo="Skills: React, Python, Postman, MongoDB"/>
        
            </ExperienceContainer>

            <SubHeader> Education</SubHeader>
                <ExperienceContainer>
                    <Experience timeframe="August 2021 - Current" position="B.A. in Computer Science and Data Science "
                    img={berkeley} imgW="175" imgH="50" 
                    description="Activities: Product Space, UpSync Consulting, Data Science Society"
                    addinfo="Relevant Coursework: CS 61A (Functional Programming), CS 61B (Data Structures), CS 61C (Machines and Computer Architecture) 
                    CS 70 (Discrete Math), MATH 54 (Linear Algebra), CS 186 (Databases), DATA 8 (Intro to Data Science), DATA 100 (Principles of Data Science)"/>
            
                    <Experience timeframe="August 2017 - May 2021" position="High School Diploma"
                    img={bishop} imgW="125" imgH="125" description='Activities: Varsity Boys Tennis, ASB, Philosophy Club, Science Club, KnightLife, Principal"s Advisory Committee'/>
                </ExperienceContainer>
        </Container>


    )
}

export default Experiences