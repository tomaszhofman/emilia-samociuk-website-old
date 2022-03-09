import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Container } from '../../styles/shared';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import styled from 'styled-components';
import { Html, useTexture } from '@react-three/drei';
import {
  Physics,
  PlaneProps,
  SphereProps,
  useCompoundBody,
  usePlane,
  useSphere,
} from '@react-three/cannon';
import * as THREE from 'three';
import { Logo } from '../Logo';

const rfs = THREE.MathUtils.randFloatSpread;

const Section = styled.section`
  height: 110rem;
  margin-top: -5rem;
`;

const baubles = [...Array(5)].map(
  (): SphereProps => ({
    args: [10],
    mass: 2,
    angularDamping: 0.2,
    linearDamping: 0.99,
    position: [rfs(3), 0, 0],
  }),
);

const ShowCaseScene = ({
  i,
  scale = 5,
  count = 5,
  vec = new THREE.Vector3(),
  mat = new THREE.Matrix4(),
  ...props
}: PlaneProps & { scale: number }) => {
  const imagesTexture = useTexture('modern-house.png');
  imagesTexture.minFilter = THREE.LinearFilter;

  const [ref, api] = useSphere(() => ({
    ...props,
  }));

  useFrame(({ clock }, delta) => {
    const activeTime = -clock.getElapsedTime() * 10;
    let time = -15;

    if (activeTime > time) {
      console.log('text');
      api.position.subscribe(p =>
        api.applyForce(
          vec
            .set(...p)
            .normalize()
            .multiplyScalar(-clock.getElapsedTime() * delta * 100)
            .toArray(),
          [0, 0, 0],
        ),
      );
    }
  });
  return (
    <mesh ref={ref} castShadow receiveShadow scale={i * 5}>
      <circleGeometry args={[0.5, 50, 50]} />
      <meshStandardMaterial map={imagesTexture} />
    </mesh>
  );
};

const ImageShowcase = () => {
  return (
    <Section>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 20], fov: 100, near: 10, far: 40 }}>
          <Physics gravity={[0, 2, 0]} iterations={10}>
            <pointLight position={[1, 10, 10]} />
            <ambientLight scale={10} />
            {baubles.map((b, i) => (
              <ShowCaseScene {...b} key={i} i={i} />
            ))}
          </Physics>
        </Canvas>
      </Suspense>
    </Section>
  );
};

export { ImageShowcase };
