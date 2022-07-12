import Rolls from './Rolls';
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, SpotLight, Circle } from '@react-three/drei';
import * as THREE from 'three';
import { CircleBufferGeometry } from 'three';

export default function DreamCar() {
  const s = true;
  return (
    <Canvas
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      camera={{ fov: 25, position: [10, 10, 10] }}
      shadows
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <Stars />
        <Rolls />
        <mesh
          position={[0, -1.15, 0]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          scale={[10, 10, 10]}
          receiveShadow={true}
        >
          <circleGeometry attach="geometry" args={[3, 128]} />
          <meshStandardMaterial attach="material" color="black" />
        </mesh>
        <ambientLight intensity={0.2} />
        {/* <spotLight
          position={[0, 3, 0]}
          intensity={15}
          castShadow={true}
        /> */}

        <spotLight
          position={[1, 10, 10]}
          intensity={3}
          castShadow={true}
          color={'orange'}
        />
        <directionalLight position={[0, 0, 1]} intensity={15} />
      </Suspense>
    </Canvas>
  );
}
