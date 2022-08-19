import { useEffect, useRef, useCallback } from 'react';

const useRequestAnimationFrame = (frameRequest: FrameRequestCallback) => {
  const frameRequestRef = useRef(frameRequest);

  frameRequestRef.current = frameRequest;

  const handleFrameRequest = useCallback<FrameRequestCallback>((time: DOMHighResTimeStamp) => {
    frameRequestRef.current(time);
    window.requestAnimationFrame(handleFrameRequest);
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(handleFrameRequest);
  }, []);
};

export default useRequestAnimationFrame;
