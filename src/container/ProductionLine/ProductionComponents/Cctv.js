import React, { useRef } from 'react'
import { TransformControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

export default function CCTV( props ) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cctv.gltf')
  return (
    <TransformControls enabled={props.orbit} showX={props.orbit} showZ={props.orbit} showY={props.orbit}>
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-85.12, 18.82, -53.48]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.54, 0.95, 0.54]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.cctv_body} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.cctv_inner} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.cctv_cam_iris} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.cctv_cam_pupil} />
          </group>
        </group>
      </group>
    </group>
    </TransformControls>
  )
}

useGLTF.preload('/cctv.gltf')
