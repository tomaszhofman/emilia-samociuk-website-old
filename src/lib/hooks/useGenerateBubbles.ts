import {Bodies, Body, Composite, Composites, Engine, Render, World} from 'matter-js';
import React, {useEffect} from 'react';
import {graphql, useStaticQuery} from 'gatsby';

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function percentX(percent: number) {
  return Math.round((percent / 100) * window.innerWidth);
}

function percentY(percent: number) {
  return Math.round((percent / 100) * window.innerHeight);
}

export const useGenerateBubbles = (
    ref: React.MutableRefObject<HTMLCanvasElement> | null,
    engine: Engine | undefined,
) => {

  let lastPageYOffset = null;
  const data = useStaticQuery(graphql`
    {
      allDatoCmsAsset {
        nodes {
          sizes {
            width
            height
          }
          url
        }
      }
    }
  `);

  const handleScroll = () => {
    const delta = (lastPageYOffset - window.pageYOffset) * 0.025
    bodies.forEach(body => {
      Body.setVelocity(body, {
        x: body.velocity.x + delta * 0.5,
        y: body.velocity.y + delta * 1.5,
      });
    });

    lastPageYOffset = window.pageYOffset;





  };

  const imagesFromDatoCms = data.allDatoCmsAsset.nodes;
  let stackIndex: number = -1;
  let bodies = [];
  const TOTAL_BODIES = 5;


  const boundOffset = 18;
  const wallThick = 80;
  const wallOptions = {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
    },
  };

  useEffect(() => {
    if (!engine || !ref || !engine.world || !imagesFromDatoCms) {
      return;
    }

    engine.world.gravity.y = 0;

    window.addEventListener('scroll', handleScroll);

    const createBody = (index: number) => {
      if (imagesFromDatoCms.length < 5 || index >= 5) {
        return;
      }

      const imageSizes = imagesFromDatoCms[index].sizes;
      const imageViewPortSize = getRandomArbitrary(percentY(10), percentY(20));

      console.log(imagesFromDatoCms[index].url);

      return Bodies.rectangle(
          getRandomArbitrary(percentX(40), percentY(60)),
          getRandomArbitrary(percentX(20), percentY(60)),
          (imageSizes.width / imageViewPortSize) * 70,
          (imageSizes.height / imageViewPortSize) * 70,
          {
            mass: 1,
            plugin: {
              wrap: {
                min: {x: 0, y: 0},
                max: {x: window.innerWidth, y: window.innerHeight},
              },
            },
            render: {
              sprite: {
                texture: imagesFromDatoCms[index].url,
                xScale: 0.33,
                yScale: 0.33,
              },
            },
          },
      );
    };

    for (let i = 0; i < TOTAL_BODIES; i++) {
      const index = i;
      const newBody = createBody(index);
      bodies.push(newBody);
    }

    World.add(engine.world, bodies);

    Composite.add(engine.world, [

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
