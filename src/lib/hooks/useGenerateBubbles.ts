import { Bodies, Composite, Composites, Engine, Render } from 'matter-js';
import React, { useEffect } from 'react';

export const useGenerateBubbles = (
  ref: React.MutableRefObject<HTMLCanvasElement> | null,
  engine: Engine | undefined,
) => {
  useEffect(() => {
    if (!engine || !ref || !engine.world) {
      return;
    }

    console.log(engine, ref);

    const boundOffset = 18;
    const wallThick = 80;
    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
      },
    };
    const stack = Composites.stack(300, 0, 2, 3, 5, 5, function (x: number, y: number) {
      return Bodies.circle(x, y, 10 + Math.random() * 200, {
        frictionAir: 0,
        friction: 0.1,
        mass: 3,
        render: {},
      });
    });

    Composite.add(engine.world, [
      stack,
      Bodies.rectangle(0, -boundOffset, document.body.clientWidth * 2, wallThick, wallOptions),
      Bodies.rectangle(boundOffset, 700, document.body.clientWidth * 200, wallThick, wallOptions),
      Bodies.rectangle(-boundOffset, 0, 600, document.body.clientHeight * 2, wallOptions),
      Bodies.rectangle(
        document.body.clientWidth + boundOffset,
        600,
        600,
        document.body.clientHeight * 2,
        wallOptions,
      ),
    ]);
  }, [ref, engine]);
};
