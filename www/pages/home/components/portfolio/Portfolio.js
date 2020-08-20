import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../../shared/components/icons';
import changeStyle from '../../../../shared/utils/change-style';
import Carousel from './components/carousel';
import data from './data';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  const layoutRef = useRef(null);
  const portfolioRef = useRef(null);
  const pointerRef = useRef(null);
  const sliderRef = useRef(null);
  const boundsRef = useRef(null);

  const handleSliderMouseEnter = useCallback(() => {
    changeStyle(pointerRef.current, 'opacity', '1');
  }, []);

  const handleSliderMouseLeave = useCallback(() => {
    changeStyle(pointerRef.current, 'opacity', '0');
  }, []);

  const handleSliderMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;

    const x = clientX - (pointerRef.current.clientWidth - 10);
    const y = clientY - (boundsRef.current.top - layoutRef.current.scrollTop) - 22 - 5;

    changeStyle(pointerRef.current, 'opacity', '1');
    changeStyle(pointerRef.current, 'transform', `translate(${x}px, ${y}px)`);
  }, []);

  const handleResize = useCallback(() => {
    const { top } = portfolioRef.current.getBoundingClientRect();

    boundsRef.current = { top: top + layoutRef.current.scrollTop };
  }, []);

  useEffect(() => {
    layoutRef.current = document.getElementById('layoutContent');
    sliderRef.current = document.querySelector('.rc-slider');

    sliderRef.current.addEventListener('mouseenter', handleSliderMouseEnter, { passive: true });
    sliderRef.current.addEventListener('mouseleave', handleSliderMouseLeave, { passive: true });
    sliderRef.current.addEventListener('mousemove', handleSliderMouseMove, { passive: true });

    layoutRef.current.addEventListener('scroll', handleSliderMouseLeave, { passive: true });

    window.addEventListener('resize', handleResize, { passive: true });

    handleResize();

    return () => {
      sliderRef.current.removeEventListener('mouseenter', handleSliderMouseEnter, { passive: true });
      sliderRef.current.removeEventListener('mouseleave', handleSliderMouseLeave, { passive: true });
      sliderRef.current.removeEventListener('mousemove', handleSliderMouseMove, { passive: true });

      layoutRef.current.removeEventListener('scroll', handleSliderMouseLeave, { passive: true });

      window.removeEventListener('resize', handleResize, { passive: true });
    };
  }, [handleSliderMouseEnter, handleSliderMouseLeave, handleSliderMouseMove, handleResize]);

  return (
    <div id="portfolio" ref={ portfolioRef } className={ styles.portfolio }>
      <div className={ styles.background } />
      <div className={ styles.content }>
        <Carousel items={ data } />
        <div ref={ pointerRef } className={ styles.pointer }>
          <ArrowLeftIcon className={ styles.left } />
          <ArrowRightIcon className={ styles.right } />
        </div>
      </div>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
