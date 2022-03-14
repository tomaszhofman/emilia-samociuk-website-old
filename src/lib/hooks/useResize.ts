import React, { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

type InitialState = {
  height: number;
  width: number;
};

export const useResize = () => {
  const [currentWindowSize, setCurrentWindowSize] = useState<InitialState>({
    height: 0,
    width: 0,
  });

  const handleResize = useCallback(() => {
    console.log('dupa');
    setCurrentWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', throttle(handleResize, 150));

    return () => {
      window.removeEventListener('resize', throttle(handleResize, 150));
    };
  }, [handleResize]);

  return [currentWindowSize];
};
