import React, { useEffect, useState } from 'react';
import { Engine, Render, Bodies, World, Runner, Composite, Composites, Body } from 'matter-js';
import { useResize } from './useResize';

export const usePhysicsEngine = (ref: React.MutableRefObject<HTMLCanvasElement> | null) => {
  const [engine, setEngine] = useState<Engine>();
  const [renderer, setRenderer] = useState<Render>();
  const [currentWindowSize] = useResize();

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    const engine1 = Engine.create();

    const renderer1 = Render.create({
      engine: engine1,
      canvas: ref.current,
      options: {
        width: currentWindowSize.width,
        height: currentWindowSize.height,
        showVelocity: true,
        showAngleIndicator: false,
        wireframes: false,
        background: 'transparent',
      },
    });

    Render.run(renderer1);
    Runner.run(Runner.create(), engine1);

    setRenderer(renderer1);
    setEngine(engine1);
  }, [ref, currentWindowSize]);

  return [engine, renderer];
};
