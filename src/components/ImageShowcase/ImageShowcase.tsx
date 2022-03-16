import React, { useRef } from 'react';
import { usePhysicsEngine } from '../../lib/hooks/usePhysicsEngine';
import { useGenerateBubbles } from '../../lib/hooks/useGenerateBubbles';
import { Engine, Render } from 'matter-js';
import { Sticker, Wrapper } from './ImageShowCase.styled';
import { useResize } from '../../lib/hooks/useResize';
import { useMouseControls } from '../../lib/hooks/useMouseControls';

const ImageShowcase = () => {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  const [engine, render] = usePhysicsEngine(canvasRef);
  useGenerateBubbles(canvasRef, engine as Engine);
  useMouseControls(engine as Engine, render as Render);

  return (
    <Wrapper>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      <Sticker>
        <p>Move your cursor to try it.</p>
      </Sticker>
    </Wrapper>
  );
};

export { ImageShowcase };
