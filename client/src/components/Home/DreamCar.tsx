import Rolls from './Rolls';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Spinner from '../common/Loading/Spinner';
import Intro from './Intro';

import * as THREE from 'three';
import styles from './DreamCar.module.css';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function DreamCar({ visible, setVisible }: Props) {
  return (
    <div className={styles.Container}>
      <Suspense fallback={<Spinner />}>
        <div className={styles.Car}>
          <Canvas
            gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
            camera={{ fov: 30, position: [0, 1.3, 5] }}
            shadows
          >
            <OrbitControls maxPolarAngle={Math.PI / 2} autoRotate={visible} />
            <Rolls />
            <mesh
              position={[0, -1.15, 3]}
              rotation={[Math.PI / 2, Math.PI, 0]}
              scale={[1.5, 2, 1]}
              receiveShadow={true}
            >
              <circleGeometry attach="geometry" args={[4, 128]} />
              <meshStandardMaterial attach="material" color="black" />
            </mesh>
            <pointLight
              position={[-1.5, 0.4, -0.8]}
              intensity={50}
              distance={1}
              color={'#00FFAB'}
            />
            <pointLight
              position={[1.5, 0.4, -0.8]}
              intensity={50}
              distance={1}
              color={'#00FFAB'}
            />
            {/* on */}
            <pointLight
              position={[1, 0.4, -0.8]}
              intensity={1}
              color={'blue'}
              visible={visible}
            />
            <spotLight
              angle={0.7}
              position={[0, 3, -3]}
              intensity={1}
              distance={10}
              visible={visible}
            />
            <directionalLight
              position={[3, 1, 0]}
              intensity={0.1}
              color={'orange'}
              visible={visible}
            />
            <directionalLight
              position={[1, 3, 0]}
              intensity={0.1}
              color={'blue'}
              visible={visible}
            />
            <pointLight
              color={'white'}
              position={[0, 1, -0.2]}
              distance={7}
              intensity={2}
              visible={visible}
            />
            <spotLight
              angle={0.7}
              position={[-0.5, 1, -1.2]}
              intensity={3}
              castShadow={true}
              color={'#819115'}
              distance={7}
              visible={visible}
            />
            <spotLight
              angle={0.7}
              position={[0.5, 1, -1.2]}
              intensity={3}
              castShadow={true}
              color={'#819115'}
              distance={9}
              visible={visible}
            />
          </Canvas>
        </div>
        <Intro visible={visible} setVisible={setVisible} />
      </Suspense>
    </div>
  );
}
export default DreamCar;
