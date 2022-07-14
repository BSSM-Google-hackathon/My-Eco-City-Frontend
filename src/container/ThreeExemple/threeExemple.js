import React from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import SmartCity from '../SmartCity/Smartcity';
// style
import '../../styles/Canvas/canvas.css';
import Sea from '../ProductionLine/ProductionComponents/sea';

const ThreeExemple = () => { 
    return(
        <div>
            <Canvas className="canvas" gl={{ preserveDrawingBuffer: true }} camera={{ position: [-1.5, 0.5, 3] }}>
                <Suspense fallback={null}>
                    <Shadow />
                    <SmartCity />
                    <ambientLight intensity={.5} />
                    {/* <directionalLight position={[-2, 5, 2]} intensity={5}/>  */}
                    <directionalLight position={[0, 1, 0]} intensity={1}/>
                    <OrbitControls enableZoom={true}/>
                </Suspense>
                <Suspense fallback={null}>
                    <Sea/>
                    <ambientLight intensity={.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ThreeExemple;