import React, { Suspense, useRef, useState } from 'react';
import { Container } from '../../styles/shared';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Section = styled.section`
  height: 110rem;
  margin-top: -5rem;
`;

type ShowCaseSceneProps = {
  position: [number, number, number][];
};

const POSITIONS = [
  [0, 0, -2],
  [0.9, 0.9, -6],
  [2, -0.9, -25],
  [-1.5, 0, -8],
];

const ShowCaseScene = ({ position }: ShowCaseSceneProps) => {
  let imagesTexture = useTexture('modern-house.png');
  imagesTexture.minFilter = THREE.LinearFilter;

  const [bounce, setBounce] = useState<boolean>(true);

  const mesh = useRef<THREE.Mesh>();
  useFrame((state, delta) => {
    const obj = mesh.current!;

    if (bounce) {
      obj.translateOnAxis(new THREE.Vector3(0.5, 0, 0).normalize(), delta * 0.1);
      obj.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), delta * 0.1);

      console.log(obj.position.x > 5);
      if (obj.position.x >= 0.3) {
        setBounce(false);
      }
    } else if (!bounce) {
      obj.translateOnAxis(new THREE.Vector3(1, 0, 0).normalize(), delta * -0.1);
      obj.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), delta * -0.1);
      if (obj.position.x <= -0.3) {
        setBounce(true);
      }
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <circleGeometry args={[0.5, 50, 50]} />
      <meshStandardMaterial map={imagesTexture} />
    </mesh>
  );
};

const ImageShowcase = () => {
  return (
    <Section>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10], fov: 10 }}>
          <pointLight position={[1, 10, 10]} />
          <ambientLight />
          <group>
            {POSITIONS.map(position => (
              <ShowCaseScene position={position} />
            ))}
          </group>
        </Canvas>
      </Suspense>
    </Section>
  );
};

export { ImageShowcase };
