import { Composite, Engine, Mouse, MouseConstraint, Render } from 'matter-js';

export const useMouseControls = (engine: Engine, render: Render) => {
  if (!render) {
    return;
  }

  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  render.mouse = mouse;

  mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener(
    'DOMMouseScroll',
    mouseConstraint.mouse.mousewheel,
  );

  Composite.add(engine.world, [mouseConstraint]);
};
