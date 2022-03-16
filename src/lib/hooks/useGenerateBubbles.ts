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

    const boundOffset = 18;
    const wallThick = 80;
    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: 'black',
      },
    };
    const stack = Composites.stack(
      document.body.clientWidth / 2,
      document.body.clientHeight / 30 - 200,
      2,
      3,
      5,
      5,
      function (x: number, y: number) {
        return Bodies.circle(x, y, 10 + Math.random() * (document.body.clientWidth / 6), {
          frictionAir: 0.1,
          friction: 0.1,
          mass: 2,
          render: {},
        });
      },
    );

    Composite.add(engine.world, [
      stack,
      //Walls
      Bodies.rectangle(0, -boundOffset, document.body.clientWidth * 2, wallThick, wallOptions),
      Bodies.rectangle(
        boundOffset,
        document.body.clientHeight,
        document.body.clientWidth * 200,
        wallThick,
        wallOptions,
      ),
      Bodies.rectangle(-boundOffset, 0, wallThick, document.body.clientHeight * 2, wallOptions),
      Bodies.rectangle(
        document.body.clientWidth + boundOffset,
        document.body.clientHeight,
        wallThick,
        document.body.clientHeight * 2,
        wallOptions,
      ),
    ]);
  }, [ref, engine]);
};
