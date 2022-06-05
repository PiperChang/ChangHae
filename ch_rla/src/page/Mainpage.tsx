import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Environment, OrbitControls, } from '@react-three/drei';
import Rolls from "./Rolls"
import * as THREE from 'three'

export default function Mainpage() {
  const rolls = useLoader(GLTFLoader, "/rolls.gltf")
  return (
    <div style={{ backgroundColor: "Orange", height: '500px' }} >
      <div style={{ backgroundColor: "Orange", width: '50%', height:"100%" }}>
      <DreamCar/>
      </div>
    </div>
  )
}

function DreamCar() {
  return (
    <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}  camera={{ fov: 45, position: [10, 10, 10] }} shadows>
    <Suspense fallback={null}>
      <OrbitControls />
      <Rolls/>
      <directionalLight position={[-1, 10, 0]} intensity={1} />
      <mesh position={[0, -1.15, 0]} rotation={[Math.PI / 2, Math.PI, 0]} scale={[10, 10, 10]} receiveShadow={true}>
        <planeBufferGeometry />
        <meshBasicMaterial color="white" />
      </mesh>
      <ambientLight intensity={1} />
      <directionalLight position={[-1, 10, 0]} intensity={1} castShadow={true}/>
      <directionalLight position={[1, 10, 0]} intensity={8} castShadow={true}/>
    </Suspense>
  </Canvas>
)
}
