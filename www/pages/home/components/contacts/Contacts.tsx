import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import TextReveal from '@/root/www/shared/modules/project/text-reveal';
import { IconGitHub, IconLinkedIn, IconMail } from '@/root/www/shared/modules/project/icons';
import { useViewport } from '@/root/www/shared/modules/global/react-hooks';
import { changeStyle, getRangeValue } from '@/root/www/shared/utils';
import SocialItem from './components/social-item/SocialItem';

import styles from './Contacts.module.scss';

const Contacts = () => {
  const { width, checkTouchScreen } = useViewport();
  const { ref: contentRef, inView } = useInView();

  const [isVisible, setVisible] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const visibilityTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const year = new Date().getFullYear();
  const subtitle = width > 600 ? 'Curious for more? Feel free to contact me.' : "Let's get in touch.";

  const resetTransforms = useCallback(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    changeStyle(titleRef.current, 'transform', 'none');
    changeStyle(subtitleRef.current, 'transform', 'none');
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!titleRef.current || !subtitleRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      if (!checkTouchScreen() && isVisible) {
        const tX = getRangeValue(clientX / innerWidth, 30, -30);
        const tY = getRangeValue(clientY / innerHeight, 10, -10);

        const rY = 0;
        const rX = 0;

        const translateTitle = `translate3d(${tX}px, ${tY}px, 0px)`;
        const translateSubtitle = `translate3d(${tX * 0.7}px, ${tY * 0.7}px, 0px)`;

        const rotateTitle = `rotateX(${-rX}deg) rotateY(${rY}deg) rotateZ(0deg)`;
        const rotateSubtitle = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

        const scale3d = 'scale3d(1, 1, 1)';

        changeStyle(titleRef.current, 'transform', `${translateTitle} ${rotateTitle} ${scale3d}`);
        changeStyle(subtitleRef.current, 'transform', `${translateSubtitle} ${rotateSubtitle} ${scale3d}`);
      } else {
        changeStyle(titleRef.current, 'transform', 'none');
        changeStyle(subtitleRef.current, 'transform', 'none');
      }
    },
    [checkTouchScreen, isVisible],
  );

  useEffect(() => {
    clearTimeout(visibilityTimeoutRef.current);

    if (inView) {
      setVisible(true);
    } else {
      visibilityTimeoutRef.current = setTimeout(() => setVisible(false), 5000);
    }
  }, [inView]);

  useEffect(() => {
    checkTouchScreen() && resetTransforms();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, resetTransforms, checkTouchScreen]);

  return (
    <div id="contacts" className={styles.contacts}>
      <div className={styles.background} />
      <div ref={contentRef} className={styles.content}>
        <div ref={titleRef} className={styles.title}>
          <TextReveal visible={isVisible}>Thank you!</TextReveal>
        </div>
        <div ref={subtitleRef} className={styles.subtitle}>
          <TextReveal visible={isVisible} revealDelay={0.7} charTransitionDelay={0}>
            {subtitle}
          </TextReveal>
        </div>
        <div className={styles.social}>
          <SocialItem icon={IconGitHub} text="Github" href="https://github.com/paulobmarcos" isVisible={isVisible} transitionDelay={1} />
          <SocialItem
            icon={IconLinkedIn}
            text="Linkedin"
            href="https://www.linkedin.com/in/paulobmarcos"
            isVisible={isVisible}
            transitionDelay={1.2}
          />
          <SocialItem icon={IconMail} text="Email" href="mailto:paulobmarcos@outlook.com" isVisible={isVisible} transitionDelay={1.4} />
        </div>
      </div>
      <div className={styles.copyright}>
        <span role="img" aria-label="copyright">
          Developed & designed by Paulo Marcos ©️ {year}
        </span>
      </div>
    </div>
  );
};

export default Contacts;
