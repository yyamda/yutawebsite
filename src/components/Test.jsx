import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'
import Cube from "./Cube"


const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

const Test = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate/> 
                <ambientLight intensity={1} />
                <directionalLight position={[3,2,1]} />
                <Cube />
            </Canvas>
        </Container>
    )
}
export default Test