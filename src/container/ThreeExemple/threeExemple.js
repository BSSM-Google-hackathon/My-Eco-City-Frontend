import React from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Box from '../../components/Box';
import { OrbitControls } from "@react-three/drei";

// style
import '../../styles/Canvas/canvas.css';
import AnimatedSphere from '../../components/AnimatedSphere';
import SmartCity from '../SmartCity/Smartcity';

const ThreeExemple = () => { 
    return(
        <Canvas className="canvas">
            {/* 불러오는 동안 null 표시 */}
            {/* <Suspense fallback={null}>
                <Box/>
            </Suspense> */}
            {/* <Suspense fallback={null}>
                <AnimatedSphere/>
            </Suspense> */}
            <Suspense fallback={null}>
                <SmartCity />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    )
}

export default ThreeExemple;