import React, { useEffect, useState, useCallback, useRef } from 'react';
import classNames from 'classnames';
import MoxyCarousel from '@moxy/react-carousel';
import NextLink from '@/root/www/shared/modules/global/next-link';
import TextReveal from '@/root/www/shared/modules/project/text-reveal/TextReveal';
import { useViewport } from '@/root/www/shared/modules/global/react-hooks';
import { changeStyle, getRangeValue, browsers } from '@/root/www/shared/utils';
import { CarouselItem } from '../../types';
import styles from './Carousel.module.scss';

interface CarouselProps {
  items: CarouselItem[];
  onItemChange?: () => void;
}

const getOffset = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  if (window.innerHeight > window.innerWidth) {
    if (browsers.isiOS()) {
      return Math.round(window.innerWidth * 0.125) - Math.round(window.innerWidth * 0.02);
    }

    return Math.round(window.innerWidth * 0.1) - Math.round(window.innerWidth * 0.02);
  }

  return Math.round(window.innerWidth * 0.2) - 22;
};

const Carousel = ({ items, onItemChange }: CarouselProps) => {
  const { isPortrait } = useViewport();

  const [offset, setOffset] = useState(0);

  const slidesRef = useRef<NodeListOf<Element> | null>(null);
  const preventLinkRef = useRef(false);

  const handleBeforeChange = useCallback(() => {
    preventLinkRef.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!slidesRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const tX = getRangeValue(clientX / innerWidth, -5, 5);
      const tY = getRangeValue(clientY / innerHeight, -5, 5);
      const tZ = browsers.isSafari() ? 100 : 0;

      const rY = getRangeValue(clientX / innerWidth, -8, 8);
      const rX = getRangeValue(clientY / innerHeight, -8, 8);

      const translateBackground = `translate3d(${tX}px, ${tY}px, 0px)`;
      const translateInfo = `translate3d(${tX * 1.7}px, calc(-50% + ${tY * 1.7}px), ${tZ}px)`;

      const rotateBackground = `rotateX(${-rX}deg) rotateY(${rY}deg) rotateZ(0deg)`;
      const rotateInfo = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

      const scale3d = 'scale3d(1, 1, 1)';

      const [_intro, ...slides] = slidesRef.current;

      // Handle Slides
      for (const slide of slides) {
        const background = slide.children[0] as HTMLElement;
        const info = slide.children[1] as HTMLElement;

        if (slide.classList.contains('-current') && !isPortrait) {
          changeStyle(background, 'transform', `${translateBackground} ${rotateBackground} ${scale3d}`);
          changeStyle(info, 'transform', `${translateInfo} ${rotateInfo} ${scale3d}`);
        } else {
          changeStyle(background, 'transform', 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
          changeStyle(info, 'transform', `translate3d(0px, -50%, ${tZ}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
        }
      }
    },
    [isPortrait],
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    slidesRef.current = document.querySelectorAll('.rc-slide');
  }, [items]);

  useEffect(() => {
    setOffset(getOffset());
  }, []);

  const renderItem = useCallback(
    (item, index) => (
      <NextLink key={`${item.title}-${index}`} className={styles.item} external newTab href={item.url}>
        <div className={styles.background}>
          <div className={styles.image} style={{ backgroundImage: `url(${item.image.src})` }} />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.subtitle}>{item.subtitle}</div>
        </div>
      </NextLink>
    ),
    [],
  );

  const renderIntro = (introClassName?: string) => (
    <div className={classNames(styles.intro, introClassName)}>
      <div className={styles.content}>
        <div className={styles.subtitle}>Slide & Discover</div>
        <TextReveal className={styles.title}>Notorious</TextReveal>
        <TextReveal className={styles.title} revealDelay={0.15}>
          Work
        </TextReveal>
      </div>
    </div>
  );

  return (
    <>
      {isPortrait && renderIntro()}
      <MoxyCarousel
        draggable
        disableNativeScroll
        offset={offset}
        wrapperClassName={styles.wrapper}
        carouselClassName={styles.carousel}
        sliderClassName={styles.slider}
        beforeChange={handleBeforeChange}
        afterChange={onItemChange}
      >
        {!isPortrait && renderIntro()}
        {items.map(renderItem)}
      </MoxyCarousel>
    </>
  );
};

export default Carousel;
