import React, { Suspense } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';

export default function Mainpage() {
  // const rolls = useLoader(GLTFLoader,'../rolls.gltf')
  return (
    <div>
    <Canvas camera={{fov:45,position:[300,300,300] }} shadows>
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <Stars/>
      {/* <Suspense fallback={null}>
      <primitive object={rolls.scene} />
      <Environment preset='sunset' background/>
     </Suspense>     */}
    </Canvas>
    </div>
  )
}

