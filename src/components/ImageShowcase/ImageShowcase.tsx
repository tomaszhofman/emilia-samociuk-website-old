import React, { useEffect, useRef } from 'react';
import { usePhysicsEngine } from '../../lib/hooks/usePhysicsEngine';
import { useGenerateBubbles } from '../../lib/hooks/useGenerateBubbles';
import { Engine, Render } from 'matter-js';
import { Sticker, Wrapper } from './ImageShowCase.styled';
import { useMouseControls } from '../../lib/hooks/useMouseControls';
import { graphql, useStaticQuery } from 'gatsby';

const ImageShowcase = () => {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  const [engine, render] = usePhysicsEngine(canvasRef);
  useGenerateBubbles(canvasRef, engine as Engine);
  useMouseControls(engine as Engine, render as Render);

  return (
    <Wrapper>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      <Sticker>
        <p>Grab and try to move it.</p>
      </Sticker>
    </Wrapper>
  );
};

export { ImageShowcase };
