import { useState, useEffect, useCallback } from 'react';

const defaultViewport = {
  width: 1920,
  height: 1080,
  isSquare: false,
  isPortrait: false,
  isLandscape: true,
  checkTouchScreen: () => false,
};

const useViewport = () => {
  const [viewport, setViewport] = useState(defaultViewport);

  const handleResize = useCallback(() => {
    const { innerWidth, innerHeight } = window;

    setViewport((viewport) => ({
      ...viewport,
      width: innerWidth,
      height: innerHeight,
      isSquare: innerWidth === innerHeight,
      isPortrait: innerWidth < innerHeight,
      isLandscape: innerWidth > innerHeight,
      checkTouchScreen: () => matchMedia('(any-pointer: coarse)').matches,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return viewport;
};

export default useViewport;
