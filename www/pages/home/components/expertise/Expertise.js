import React, { useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import Bounds from '../../../../shared/components/bounds';
import useViewport from '../../../../shared/hooks/use-viewport';
import { changeStyle, getRangeValue } from '../../../../shared/utils';

import react3dUrl from '../../../../shared/media/images/react-3d.png';
import next3dUrl from '../../../../shared/media/images/next-3d.png';
import redux3dUrl from '../../../../shared/media/images/redux-3d.png';
import node3dUrl from '../../../../shared/media/images/node-3d.png';

import styles from './Expertise.module.css';

const Expertise = () => {
  const { checkTouchScreen } = useViewport();
  const textRef = useRef();
  const logosRef = useRef();
  const containerRef = useRef();
  const layoutContentRef = useRef();
  const boudingClientRectRef = useRef();

  const resetTransforms = useCallback(() => {
    changeStyle(textRef.current, 'transform', 'none');
    changeStyle(logosRef.current, 'transform', 'none');
  }, []);

  const handleMouseMove = useCallback((event) => {
    const { scrollTop } = layoutContentRef.current;
    const { minVisible, maxVisible } = boudingClientRectRef.current;

    if (!checkTouchScreen()) {
      if (scrollTop >= minVisible && scrollTop <= maxVisible) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        const tX = getRangeValue((clientX / innerWidth), -50, 50);
        const tY = getRangeValue((clientY / innerHeight), -50, 50);

        const rY = getRangeValue((clientX / innerWidth), -15, 15);
        const rX = getRangeValue((clientY / innerHeight), -10, 10);

        const translateText = `translate3d(${tX}px, ${tY}px, 0px)`;
        const translateLogos = `translate3d(${tX * 1.3}px, ${tY * 1.3}px, 0px)`;

        const rotateText = `rotateX(${-rX}deg) rotateY(${rY}deg) rotateZ(0deg)`;
        const rotateLogos = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

        const scale3d = 'scale3d(1, 1, 1)';

        changeStyle(textRef.current, 'transform', `${translateText} ${rotateText} ${scale3d}`);
        changeStyle(logosRef.current, 'transform', `${translateLogos} ${rotateLogos} ${scale3d}`);
      }
    } else {
      resetTransforms();
    }
  }, [checkTouchScreen, resetTransforms]);

  const handleResize = useCallback(() => {
    const { innerHeight } = window;
    const { top, bottom } = containerRef.current.getBoundingClientRect();

    layoutContentRef.current = document.getElementById('layoutContent');

    const { scrollTop } = layoutContentRef.current;

    boudingClientRectRef.current = {
      minVisible: Math.max((top + scrollTop) - innerHeight, 0),
      maxVisible: bottom + scrollTop,
    };
  }, []);

  useEffect(() => {
    checkTouchScreen() && resetTransforms();

    handleResize();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.addEventListener('resize', handleResize, { passive: true });
      window.removeEventListener('mousemove', handleMouseMove, { passive: true });
    };
  }, [handleMouseMove, handleResize, checkTouchScreen, resetTransforms]);

  return (
    <Bounds className={ styles.bounds }>
      <div className={ styles.background } />
      <div id="expertise" className={ styles.expertise }>
        <div ref={ containerRef } className={ styles.container }>
          <div ref={ textRef } className={ styles.text }>
            <div className={ styles.title }>Expertise & Proficiency</div>
            <div className={ styles.item }>React</div>
            <div className={ styles.item }>Next.js</div>
            <div className={ styles.item }>Redux</div>
            <div className={ styles.item }>Node.js</div>
          </div>
          <div ref={ logosRef } className={ styles.logos }>
            <img
              alt="React Logo"
              className={ classNames(styles.itemLogo, styles.react) }
              src={ react3dUrl } />
            <img
              alt="Next Logo"
              className={ classNames(styles.itemLogo, styles.next) }
              src={ next3dUrl } />
            <img
              alt="Redux Logo"
              className={ classNames(styles.itemLogo, styles.redux) }
              src={ redux3dUrl } />
            <img
              alt="Node Logo"
              className={ classNames(styles.itemLogo, styles.node) }
              src={ node3dUrl } />
          </div>
        </div>
      </div>
    </Bounds>
  );
};

Expertise.propTypes = {};

export default Expertise;
