import React, { useState, useEffect, useCallback, useRef } from 'react';
import IntersectionObserver from '@researchgate/react-intersection-observer';
import TextReveal from '../../../../shared/components/text-reveal';
import { GithubIcon, LinkedinIcon, MailIcon, CvIcon } from '../../../../shared/components/icons';
import { getRangeValue, changeStyle } from '../../../../shared/utils';
import useViewport from '../../../../shared/hooks/use-viewport';
import SocialItem from './components/social-item/SocialItem';

import styles from './Contacts.module.css';

const Contacts = () => {
  const { width, checkTouchScreen } = useViewport();
  const [isVisible, setVisible] = useState(false);
  const titleRef = useRef();
  const subtitleRef = useRef();

  const year = (new Date()).getFullYear();
  const subtitle = width > 600 ? 'Curious for more? Feel free to contact me.' : 'Let\'s get in touch.';

  const resetTransforms = useCallback(() => {
    changeStyle(titleRef.current, 'transform', 'none');
    changeStyle(subtitleRef.current, 'transform', 'none');
  }, []);

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    if (!checkTouchScreen() && isVisible) {
      const tX = getRangeValue((clientX / innerWidth), 30, -30);
      const tY = getRangeValue((clientY / innerHeight), 10, -10);

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
  }, [checkTouchScreen, isVisible]);

  const handleIntersectionChange = useCallback((event) => {
    setVisible(event.isIntersecting);
  }, []);

  useEffect(() => {
    checkTouchScreen() && resetTransforms();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove, { passive: true });
    };
  }, [handleMouseMove, resetTransforms, checkTouchScreen]);

  return (
    <div id="contacts" className={ styles.contacts }>
      <div className={ styles.background } />
      <IntersectionObserver onChange={ handleIntersectionChange }>
        <div className={ styles.content }>
          <div
            ref={ titleRef }
            className={ styles.title }>
            <TextReveal
              visible={ isVisible }>
              Thank you!
            </TextReveal>
          </div>
          <div
            ref={ subtitleRef }
            className={ styles.subtitle }>
            <TextReveal
              visible={ isVisible }
              revealDelay={ 0.7 }
              charTransitionDelay={ 0 }>
              { subtitle }
            </TextReveal>
          </div>
          <div className={ styles.social }>
            <SocialItem
              icon={ GithubIcon }
              text="Github"
              href="https://github.com/paulobmarcos"
              isVisible={ isVisible }
              transitionDelay={ 1 } />
            <SocialItem
              icon={ LinkedinIcon }
              text="Linkedin"
              href="https://www.linkedin.com/in/paulobmarcos"
              isVisible={ isVisible }
              transitionDelay={ 1.2 } />
            <SocialItem
              icon={ MailIcon }
              text="Email"
              href="mailto:paulobmarcos@outlook.com"
              isVisible={ isVisible }
              transitionDelay={ 1.4 } />
            <SocialItem
              icon={ CvIcon }
              text="Curriculum"
              href="https://drive.google.com/file/d/1lhgygYmEvFkEyK6rsjLaZ9d_6Y3NTopO/view?usp=sharing"
              isVisible={ isVisible }
              transitionDelay={ 1.6 } />
          </div>
        </div>
      </IntersectionObserver>
      <div className={ styles.copyright }>
        <span role="img" aria-label="copyright">Developed & designed by Paulo Marcos ©️ { year }</span>
      </div>
    </div>
  );
};

Contacts.propTypes = {};

export default Contacts;

/* ©️ Paulo Marcos { year } ⚡ Made with ❤ and React */
