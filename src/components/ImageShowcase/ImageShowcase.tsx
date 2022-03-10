import React, { useRef } from 'react';
import { usePhysicsEngine } from '../../lib/hooks/usePhysicsEngine';
import { useGenerateBubbles } from '../../lib/hooks/useGenerateBubbles';
import { Engine } from 'matter-js';

const ImageShowcase = () => {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  const [engine] = usePhysicsEngine(canvasRef);
  useGenerateBubbles(canvasRef, engine as Engine);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export { ImageShowcase };
