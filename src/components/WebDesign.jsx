import React from 'react' 
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera} from '@react-three/drei'
import Maccy from './Maccy'


const WebDesign = () => {
    const initialScale = [0.2, 0.2, 0.2];

    return (
        <Canvas>
           <OrbitControls enableZoom={false} autoRotate/> 
            <Stage environment="city" intensity={0.6}>
                <Maccy initialScale={initialScale}/>
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default WebDesign