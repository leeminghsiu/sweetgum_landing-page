/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/round.glb')

  // to spin
  useFrame ( ()=> (group.current.rotation.y += 0.01))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Torus.geometry} material={materials['Perfect Tint']} rotation={[0, 0, 0]} scale={1} />
    </group>
  )
}

useGLTF.preload('/round.glb')
