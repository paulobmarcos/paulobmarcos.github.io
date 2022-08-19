import React, { useRef, useEffect, useCallback } from 'react';
import { IconArrowLeft, IconArrowRight } from '@/root/www/shared/modules/project/icons';
import { changeStyle } from '@/root/www/shared/utils';
import Carousel from './components/carousel';
import data from './data';

import styles from './Portfolio.module.scss';

interface BoundingClientRect {
  top: number;
}

const Portfolio = () => {
  const layoutRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLElement | null>(null);
  const boundsRef = useRef<BoundingClientRect>({ top: 0 });

  const handleSliderMouseEnter = useCallback(() => {
    if (!pointerRef.current) return;

    changeStyle(pointerRef.current, 'opacity', '1');
  }, []);

  const handleSliderMouseLeave = useCallback(() => {
    if (!pointerRef.current) return;

    changeStyle(pointerRef.current, 'opacity', '0');
  }, []);

  const handleSliderMouseMove = useCallback((event) => {
    if (!pointerRef.current || !layoutRef.current) return;

    const { clientX, clientY } = event;

    const x = clientX - (pointerRef.current.clientWidth - 10);
    const y = clientY - (boundsRef.current.top - layoutRef.current.scrollTop) - 22 - 5;

    changeStyle(pointerRef.current, 'opacity', '1');
    changeStyle(pointerRef.current, 'transform', `translate(${x}px, ${y}px)`);
  }, []);

  const handleResize = useCallback(() => {
    if (!portfolioRef.current || !layoutRef.current) return;

    const { top } = portfolioRef.current.getBoundingClientRect();

    boundsRef.current = { top: top + layoutRef.current.scrollTop };
  }, []);

  useEffect(() => {
    layoutRef.current = document.getElementById('layoutContent');
    sliderRef.current = document.querySelector('.rc-slider');

    sliderRef.current?.addEventListener('mouseenter', handleSliderMouseEnter, { passive: true });
    sliderRef.current?.addEventListener('mouseleave', handleSliderMouseLeave, { passive: true });
    sliderRef.current?.addEventListener('mousemove', handleSliderMouseMove, { passive: true });

    layoutRef.current?.addEventListener('scroll', handleSliderMouseLeave, { passive: true });

    window.addEventListener('resize', handleResize, { passive: true });

    handleResize();

    return () => {
      sliderRef.current?.removeEventListener('mouseenter', handleSliderMouseEnter);
      sliderRef.current?.removeEventListener('mouseleave', handleSliderMouseLeave);
      sliderRef.current?.removeEventListener('mousemove', handleSliderMouseMove);

      layoutRef.current?.removeEventListener('scroll', handleSliderMouseLeave);

      window.removeEventListener('resize', handleResize);
    };
  }, [handleSliderMouseEnter, handleSliderMouseLeave, handleSliderMouseMove, handleResize]);

  return (
    <div id="portfolio" ref={portfolioRef} className={styles.portfolio}>
      <div className={styles.background} />
      <div className={styles.content}>
        <Carousel items={data} />
        <div ref={pointerRef} className={styles.pointer}>
          <IconArrowLeft className={styles.left} />
          <IconArrowRight className={styles.right} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
