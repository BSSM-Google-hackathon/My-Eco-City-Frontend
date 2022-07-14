import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import texture from "../textures/map.jpg";
import { OrbitControls } from "@react-three/drei";


export default function Box() {
    // const colorMap = useLoader(TextureLoader, texture);
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]}/>
            <meshNormalMaterial attach="material" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <OrbitControls enableZoom={false} />
        </mesh>
    );
}