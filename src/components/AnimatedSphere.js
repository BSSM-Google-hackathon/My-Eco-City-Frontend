import React from "react";
import { useThree } from "react-three-fiber"
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useGesture } from "react-use-gesture"
import { useSpring, a } from "@react-spring/three"

export default function AnimatedSphere() {
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0], config: { friction: 10 } }))
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
  })

  return (
        <a.mesh {...spring} {...bind()} castShadow>
            <Sphere visible args={[1, 50, 100]} scale={.5}>   
                {/* <OrbitControls makeDefault /> */}
                <MeshDistortMaterial
                    color="#fafafa"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0}
                />
            </Sphere>
        </a.mesh>
  );
}