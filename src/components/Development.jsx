import React from 'react' 
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Piano from './Piano'

const Development = () => {
    return (
        <Canvas>
        <OrbitControls enableZoom={false} autoRotate/> 
         <Stage environment="city" intensity={0.4}>
             <Piano />
         </Stage>
         <OrbitControls enableZoom={false} />
     </Canvas>
    )
}

export default Development