import React, { useContext } from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import SmartCity from '../SmartCity/Smartcity';
// style
import '../../styles/Canvas/canvas.css';
import Sea from '../ProductionLine/ProductionComponents/sea';
import { OrbitContext, useOrbitContext } from '../../context/orbitContext';

const ThreeExemple = ({ children }) => { 

    const {orbit,
        completed,
        checked} = useOrbitContext();
    const context = useContext(OrbitContext);

    return(
        <div>
            <Canvas className="canvas" gl={{ preserveDrawingBuffer: true }} camera={{ position: [-1.5, 0.5, 3] }}>
                <Suspense fallback={null}>
                    <Shadow />
                    <SmartCity />
                    <ambientLight intensity={.5} />
                    {/* <directionalLight position={[-2, 5, 2]} intensity={5}/>  */}
                    <directionalLight position={[0, 1, 0]} intensity={1}/>
                    <OrbitControls enabled={orbit[0]}/>
                </Suspense>
                <Suspense fallback={null}>
                    <Sea orbit={orbit}/>
                    <ambientLight intensity={.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ThreeExemple;