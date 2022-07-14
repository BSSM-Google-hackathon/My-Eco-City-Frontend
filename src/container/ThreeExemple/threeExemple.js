import React, { useContext } from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import SmartCity from '../SmartCity/Smartcity';
// style
import '../../styles/Canvas/canvas.css';
import Sea from '../ProductionLine/ProductionComponents/sea';
import { OrbitContext, useOrbitContext } from '../../context/orbitContext';
import Box from '../ProductionLine/ProductionComponents/Box';
import Bench from '../ProductionLine/ProductionComponents/Bench';
import Bicycle from '../ProductionLine/ProductionComponents/Bicycle';
import WindTurbin from '../ProductionLine/ProductionComponents/Wind-turbin';
import Drone from '../ProductionLine/ProductionComponents/Drone';
import Tree from '../ProductionLine/ProductionComponents/Tree';
import Solor from '../ProductionLine/ProductionComponents/Solor';

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
                    {/* 스마트 시티 불러오기 */}
                    <SmartCity />
                    <ambientLight intensity={.5} />
                    {/* <directionalLight position={[-2, 5, 2]} intensity={5}/>  */}
                    <directionalLight position={[0, 1, 0]} intensity={1}/>
                    <OrbitControls enabled={orbit[0]}/>
                </Suspense>
                {orbit[2][0].created && (<Suspense fallback={null}>
                    <Bench orbit={orbit[2][0].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
                {orbit[2][1].created && (<Suspense fallback={null}>
                    <Bicycle orbit={orbit[2][1].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
                {orbit[2][2].created && (<Suspense fallback={null}>
                    <WindTurbin orbit={orbit[2][2].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
                {orbit[2][3].created && (<Suspense fallback={null}>
                    <Drone orbit={orbit[2][3].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
                {orbit[2][4].created && (<Suspense fallback={null}>
                    <Tree orbit={orbit[2][4].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
                {orbit[2][5].created && (<Suspense fallback={null}>
                    <Sea orbit={orbit[2][5].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
                {orbit[2][6].created && (<Suspense fallback={null}>
                    <Box orbit={orbit[2][6].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
                {orbit[2][7].created && (<Suspense fallback={null}>
                    <Solor orbit={orbit[2][7].transformable}/>
                    {/* <ambientLight intensity={.5} /> */}
                </Suspense>)}
            </Canvas>
        </div>
    )
}

export default ThreeExemple;