import { Composite, Engine, Mouse, MouseConstraint, Render } from 'matter-js';

export const useMouseControls = (engine: Engine, render: Render) => {
  if (!render) {
    return;
  }

  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      // @ts-ignore
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  render.mouse = mouse;

  // @ts-ignore
  mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener(
    'DOMMouseScroll',
    // @ts-ignore
    mouseConstraint.mouse.mousewheel,
  );

  Composite.add(engine.world, [mouseConstraint]);
};
