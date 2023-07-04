/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 maccy.gltf --transform
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-mac-mini-m1-79f1f864089d423fb06d220fe2085c71
Title: Apple Mac Mini M1
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('../maccy-transformed.glb')
  const { initialScale } = props; 

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.MacMini_MatteBlack_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} scale={initialScale} />
      <mesh geometry={nodes.MacMini_PowerButton_0.geometry} material={materials.PowerButton} rotation={[-Math.PI / 2, 0, 0]} scale={initialScale}/>
    </group>
  )
}

useGLTF.preload('../maccy-transformed.glb')