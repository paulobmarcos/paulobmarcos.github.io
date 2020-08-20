import React, { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextLink from '@moxy/next-link';
import MoxyCarousel from '@moxy/react-carousel';
import TextReveal from '../../../../../../shared/components/text-reveal';
import { changeStyle, getRangeValue, browsers } from '../../../../../../shared/utils';
import useViewport from '../../../../../../shared/hooks/use-viewport';

import styles from './Carousel.module.css';

const getOffset = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  if (window.innerHeight > window.innerWidth) {
    return Math.round(window.innerWidth * 0.1) - Math.round(window.innerWidth * 0.02);
  }

  return Math.round(window.innerWidth * 0.20) - 22;
}

const Carousel = ({ items, onItemChange }) => {
  const { isPortrait } = useViewport();
  const [offset, setOffset] = useState(0);
  const slidesRef = useRef([]);
  const preventLinkRef = useRef(false);

  const handleBeforeChange = useCallback(() => {
    preventLinkRef.current = true;
  }, []);

  const handleItemClick = useCallback((event) => {
    if (preventLinkRef.current) {
      event.preventDefault();
    }

    preventLinkRef.current = false;
  }, []);

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const tX = getRangeValue((clientX / innerWidth), -5, 5);
    const tY = getRangeValue((clientY / innerHeight), -5, 5);
    const tZ = browsers.isSafari() ? 100 : 0;

    const rY = getRangeValue((clientX / innerWidth), -8, 8);
    const rX = getRangeValue((clientY / innerHeight), -8, 8);

    const translateBackground = `translate3d(${tX}px, ${tY}px, 0px)`;
    const translateInfo = `translate3d(${tX * 1.7}px, calc(-50% + ${tY * 1.7}px), ${tZ}px)`;

    const rotateBackground = `rotateX(${-rX}deg) rotateY(${rY}deg) rotateZ(0deg)`;
    const rotateInfo = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

    const scale3d = 'scale3d(1, 1, 1)';

    const [intro, ...slides] = slidesRef.current;

    // Handle Slides
    for (const slide of slides) {
      const [background, info] = slide.children;

      if (slide.classList.contains('-current') && !isPortrait) {
        changeStyle(background, 'transform', `${translateBackground} ${rotateBackground} ${scale3d}`);
        changeStyle(info, 'transform', `${translateInfo} ${rotateInfo} ${scale3d}`);
      } else {
        changeStyle(background, 'transform', 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        changeStyle(info, 'transform', `translate3d(0px, -50%, ${tZ}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
      }
    }
  }, [isPortrait]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => window.removeEventListener('mousemove', handleMouseMove, { passive: true });
  }, [handleMouseMove]);

  useEffect(() => {
    slidesRef.current = document.querySelectorAll('.rc-slide');
  }, [items]);

  useEffect(() => { setOffset(() => getOffset); }, []);

  const renderItem = useCallback((item, index) => (
    <NextLink
      key={ `${item.title}-${index}` }
      className={ styles.item }
      external
      newTab
      href={ item.url }
      //onClick={ handleItemClick }
    >
      <div className={ styles.background }>
        <div className={ styles.image } style={ { backgroundImage: `url(${item.image})` } } />
      </div>
      <div className={ styles.info }>
        <div className={ styles.title }>{ item.title }</div>
        <div className={ styles.subtitle }>{ item.subtitle }</div>
      </div>
    </NextLink>
  ), [handleItemClick]);

  const renderIntro = (introClassName) => (
    <div className={ classNames(styles.intro, introClassName) }>
      <div className={ styles.content }>
        <div className={ styles.subtitle }>Slide & Discover</div>
        <TextReveal className={ styles.title }>Notourios</TextReveal>
        <TextReveal className={ styles.title } revealDelay={ 0.15 }>Work</TextReveal>
      </div>
    </div>
  );

  return (
    <>
      { isPortrait && renderIntro() }
      <MoxyCarousel
        draggable
        disableNativeScroll
        offset={ offset }
        wrapperClassName={ styles.wrapper }
        carouselClassName={ styles.carousel }
        sliderClassName={ styles.slider }
        beforeChange={ handleBeforeChange }
        afterChange={ onItemChange }>
        { !isPortrait && renderIntro() }
        { items.map(renderItem) }
      </MoxyCarousel>
    </>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  onItemChange: PropTypes.func,
};

export default Carousel;
