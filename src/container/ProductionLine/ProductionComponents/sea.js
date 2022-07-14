import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useSpring, a } from "@react-spring/three"
import { useThree } from "react-three-fiber"
import { useGesture } from "react-use-gesture"
import { TransformControls } from '@react-three/drei'

export default function Sea({ ...props }) {
  
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0], config: { friction: 10 } }))
  const bind = useGesture({
      onDrag: ({ offset: [x, y] }) => set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
  })

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/city.gltf')
  // const { actions } = useAnimations(animations, group)
  return (
    <TransformControls>
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sea_446" position={[0, 0, 0]} scale={[0.53, 0.06, 0.55]}>
                <mesh name="Object_1346" geometry={nodes.Object_1346.geometry} material={materials.water} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>

    </TransformControls>
  )
}

useGLTF.preload('/city.gltf')
