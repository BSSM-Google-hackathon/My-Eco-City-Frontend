import React from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import Sea from './ProductionComponents/sea';

// style
import '../../styles/Canvas/productionLine.css'


// data
import eco_item from './data/data';
import { useOrbitContext } from '../../context/orbitContext';

const ProductionLine = () => {

  const {orbit,
    completed,
    checked} = useOrbitContext();

  const SelectedItem = () => {
    completed();
  }
  
  const CompletedItem = () => {
    checked();
  }

  const lineItem = eco_item.map((item, idx) => {
    return (
      <div className="line--item" onClick={SelectedItem} key={item.id} >{idx+1} {item.title} {item.desc} 
        <Canvas className="canvas2">
          <Suspense fallback={null}>
            <Shadow />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 1, 0]} intensity={1} />
            <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={1} />
          </Suspense>
        </Canvas>
      </div>
    )
  })

  return (
    <div className="line">
      {lineItem}
      <button onClick={CompletedItem}>확인</button>
    </div>
  )
}

export default ProductionLine;