import React, { useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { changeStyle, getRangePercentage, getRangeValue, browsers } from '../../../../shared/utils';

import mogLogoUrl from '../../../../shared/media/images/experience/mog.png';
import moxyLogoUrl from '../../../../shared/media/images/experience/moxy.png';
import gyantLogoUrl from '../../../../shared/media/images/experience/gyant.png';
import triggeriseLogoUrl from '../../../../shared/media/images/experience/triggerise.png';

import styles from './Experience.module.css';

const setUniverseTranslation = (universe, value) =>
  changeStyle(universe, 'transform', `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, ${value}, 1)`);

const Experience = () => {
  const contentRef = useRef();
  const universeRef = useRef();
  const containerRef = useRef();
  const containerBoundingClientRectRef = useRef();
  const layoutContentRef = useRef();

  const handleScroll = useCallback(() => {
    const { innerHeight } = window;
    const { clientHeight } = containerRef.current;
    const { scrollTop } = layoutContentRef.current;
    const { top } = containerBoundingClientRectRef.current;
    const universe = universeRef.current;

    const currentScroll = scrollTop - top;

    const phase0 = {
      initScroll: 0,
      endScroll: innerHeight * 0.75,
      minTranslate: 0,
      maxTranslate: (innerHeight * 1500) / 1000,
    };
    const phase1 = {
      initScroll: phase0.endScroll,
      endScroll: clientHeight - (innerHeight * 1.5),
      minTranslate: phase0.maxTranslate,
      maxTranslate: (innerHeight * 67500) / 1000,
    };

    if (currentScroll < phase0.initScroll) {
      setUniverseTranslation(universe, 0);
    } else if (currentScroll >= phase0.initScroll && currentScroll < phase0.endScroll) {
      const percentage = getRangePercentage(currentScroll, phase0.initScroll, phase0.endScroll, { clamp: true });
      const translate = getRangeValue(percentage, phase0.minTranslate, phase0.maxTranslate, { clamp: true });

      for (let i = 1; i < universe.children.length; i += 1) {
        changeStyle(universe.children[i], 'opacity', 0);
      }

      setUniverseTranslation(universe, translate);
    } else if (currentScroll >= phase1.initScroll && currentScroll <= phase1.endScroll) {
      const percentage = getRangePercentage(currentScroll, phase1.initScroll, phase1.endScroll, { clamp: true });
      const translate = getRangeValue(percentage, phase1.minTranslate, phase1.maxTranslate, { clamp: true });

      // Add opacity to far away galaxies
      for (let i = 1; i < universe.children.length; i += 1) {
        const galaxy = universe.children[i];
        const minRange = ((i - 1) * 0.25) + 0.05;
        const maxRange = ((i - 1) * 0.25) + 0.2;

        const opacity = getRangePercentage(percentage, minRange, maxRange, { clamp: true });

        changeStyle(galaxy, 'opacity', opacity);
      }

      setUniverseTranslation(universe, translate);
    } else {
      setUniverseTranslation(universe, phase1.maxTranslate);
    }
  }, []);

  const handleResize = useCallback(() => {
    const { top } = containerRef.current.getBoundingClientRect();
    const layoutContent = document.getElementById('layoutContent');

    layoutContentRef.current = layoutContent;
    containerBoundingClientRectRef.current = {
      top: top + layoutContent.scrollTop,
    };

    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize, { passive: true });
    layoutContentRef.current.addEventListener('scroll', handleScroll, { passive: true });

    // Safari Optimization
    if (browsers.isSafari()) {
      changeStyle(universeRef.current, 'transition', 'none');
    }

    return () => {
      window.removeEventListener('resize', handleResize, { passive: true });
      layoutContentRef.current.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [handleScroll, handleResize]);

  return (
    <div id="experience" className={ styles.experience }>
      <div className={ styles.background } />
      <div ref={ containerRef } className={ styles.container }>
        <div ref={ contentRef } className={ styles.content }>
          <div ref={ universeRef } className={ styles.universe }>
            <div className={ classNames(styles.galaxy, styles.intro) }>
              <div className={ styles.star }>
                <div>Work</div>
                <div className={ styles.time }>Experience</div>
              </div>
            </div>
            <div className={ classNames(styles.galaxy, styles.mog) }>
              <div className={ styles.star }>
                <img alt="Mog Logo" className={ styles.logo } src={ mogLogoUrl } />
                <div className={ styles.time }>2015 to 2016</div>
                <div className={ styles.planet }>Middleware</div>
                <div className={ styles.planet }>RabbitMQ</div>
                <div className={ styles.planet }>C#</div>
                <div className={ styles.planet }>Events</div>
              </div>
            </div>
            <div className={ classNames(styles.galaxy, styles.triggerise) }>
              <div className={ styles.star }>
                <img alt="Triggerise Logo" className={ styles.logo } src={ triggeriseLogoUrl } />
                <div className={ styles.time }>2016 to 2017</div>
                <div className={ styles.planet }>Android</div>
                <div className={ styles.planet }>Web</div>
                <div className={ styles.planet }>Social</div>
                <div className={ styles.planet }>React</div>
              </div>
            </div>
            <div className={ classNames(styles.galaxy, styles.moxy) }>
              <div className={ styles.star }>
                <img alt="Moxy Logo" className={ styles.logo } src={ moxyLogoUrl } />
                <div className={ styles.time }>2017 to 2020</div>
                <div className={ styles.planet }>React</div>
                <div className={ styles.planet }>Lead</div>
                <div className={ styles.planet }>Next.js</div>
                <div className={ styles.planet }>Node.js</div>
              </div>
            </div>
            <div className={ classNames(styles.galaxy, styles.gyant) }>
              <div className={ styles.star }>
                <img alt="Gyant Logo" className={ styles.logo } src={ gyantLogoUrl } />
                <div className={ styles.time }>Current</div>
                <div className={ styles.planet }>Microservices</div>
                <div className={ styles.planet }>Node.js</div>
                <div className={ styles.planet }>Web</div>
                <div className={ styles.planet }>Health</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {};

export default Experience;
