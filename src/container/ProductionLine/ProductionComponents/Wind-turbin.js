import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TransformControls } from '@react-three/drei'

export default function WindTurbin(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/wind-turbin.gltf')
  return (
    <TransformControls enabled={props.orbit} showX={props.orbit} showZ={props.orbit} showY={props.orbit}>
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[0.4, 0.4, 0.47]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Windmill} />
          </group>
          <group position={[0, 13.16, 0.56]} scale={[0.4, 0.4, 0.47]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Windmill} />
          </group>
        </group>
      </group>
    </group>
    </TransformControls>
  )
}

useGLTF.preload('/wind-turbin.gltf')
