import React from 'react' 
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import Chess from './Chess'

const ProductDesign = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate/> 
            <PerspectiveCamera position={[0,0,5]} /> 
            <Stage environment="city" intensity={0.4}>
                <Chess />
            </Stage>
            <OrbitControls enableZoom={false} />
     </Canvas>
    )
}

export default ProductDesign