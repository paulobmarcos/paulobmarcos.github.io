import React, { useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { changeStyle, getRangePercentage, getRangeValue, browsers } from '../../../../shared/utils';

import mogLogo from '../../../../shared/media/images/experience/mog.png';
import moxyLogo from '../../../../shared/media/images/experience/moxy.png';
import rowsLogo from '../../../../shared/media/images/experience/rows.png';
import gyantLogo from '../../../../shared/media/images/experience/gyant.png';
import triggeriseLogo from '../../../../shared/media/images/experience/triggerise.png';
import confLogo from '../../../../shared/media/images/experience/conf.png';

import styles from './Experience.module.scss';

interface ContainerBoundingClientRect {
  top: number;
}

const setUniverseTranslation = (universe: HTMLElement, value: number) =>
  changeStyle(universe, 'transform', `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, ${value}, 1)`);

const Experience = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const universeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const layoutContentRef = useRef<HTMLElement | null>(null);
  const containerBoundingClientRectRef = useRef<ContainerBoundingClientRect | null>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !universeRef.current || !layoutContentRef.current || !containerBoundingClientRectRef.current) return;

    const { clientHeight } = containerRef.current;
    const { scrollTop, clientHeight: viewportHeight, clientWidth: viewportWidth } = layoutContentRef.current;
    const { top } = containerBoundingClientRectRef.current;
    const universe = universeRef.current;
    const isiOS = browsers.isiOS();

    const currentScroll = scrollTop - top;

    const phase0BaseTranslate = !isiOS ? 1500 : 1000;
    const phase0HeightPercentage = !isiOS ? 0.75 : 1;

    const phase1BaseTranslate = !isiOS ? 104000 : 68000 + (viewportHeight / viewportWidth) * 6800; // TODO! BETTER iOS ALGORITHM
    const phase1HeightPercentage = !isiOS ? 1.5 : 1.3;

    const phase0 = {
      initScroll: 0,
      endScroll: viewportHeight * phase0HeightPercentage,
      minTranslate: 0,
      maxTranslate: (viewportHeight * phase0BaseTranslate) / 1000,
    };
    const phase1 = {
      initScroll: phase0.endScroll,
      endScroll: clientHeight - viewportHeight * phase1HeightPercentage,
      minTranslate: phase0.maxTranslate,
      maxTranslate: (viewportHeight * phase1BaseTranslate) / 1000,
    };

    console.log({ viewportHeight, phase1BaseTranslate });

    if (currentScroll < phase0.initScroll) {
      setUniverseTranslation(universe, 0);
    } else if (currentScroll >= phase0.initScroll && currentScroll < phase0.endScroll) {
      const percentage = getRangePercentage(currentScroll, phase0.initScroll, phase0.endScroll, { clamp: true });
      const translate = getRangeValue(percentage, phase0.minTranslate, phase0.maxTranslate, { clamp: true });

      for (let i = 1; i < universe.children.length; i += 1) {
        const galaxy = universe.children[i] as HTMLElement;
        changeStyle(galaxy, 'opacity', '0');
      }

      setUniverseTranslation(universe, translate);
    } else if (currentScroll >= phase1.initScroll && currentScroll <= phase1.endScroll) {
      const percentage = getRangePercentage(currentScroll, phase1.initScroll, phase1.endScroll, { clamp: true });
      const translate = getRangeValue(percentage, phase1.minTranslate, phase1.maxTranslate, { clamp: true });

      const totalWorkGalaxies = universe.children.length - 1;

      // Add opacity to far away galaxies
      for (let i = 1; i <= totalWorkGalaxies; i += 1) {
        const galaxy = universe.children[i] as HTMLElement;
        const workGalaxyIndex = i - 1;

        const coefficient = 1 / totalWorkGalaxies;
        const minRange = workGalaxyIndex * coefficient;
        const maxRange = (workGalaxyIndex + 1) * coefficient;

        const opacity = getRangePercentage(percentage, minRange, maxRange, { clamp: true });

        changeStyle(galaxy, 'opacity', String(opacity));
      }

      setUniverseTranslation(universe, translate);
    } else {
      setUniverseTranslation(universe, phase1.maxTranslate);

      for (let i = 1; i < universe.children.length; i += 1) {
        const galaxy = universe.children[i] as HTMLElement;
        changeStyle(galaxy, 'opacity', '1');
      }
    }
  }, []);

  const handleResize = useCallback(() => {
    if (!containerRef.current) return;

    const { top } = containerRef.current.getBoundingClientRect();
    const layoutContent = document.getElementById('layoutContent');

    if (layoutContent) {
      layoutContentRef.current = layoutContent;

      containerBoundingClientRectRef.current = {
        top: top + layoutContent.scrollTop,
      };

      handleScroll();
    }
  }, [handleScroll]);

  useEffect(() => {
    if (!containerRef.current || !universeRef.current) return;

    handleResize();

    window.addEventListener('resize', handleResize, { passive: true });
    layoutContentRef.current?.addEventListener('scroll', handleScroll, { passive: true });

    // Safari & isOS Optimization
    if (browsers.isSafari() || browsers.isiOS()) {
      changeStyle(universeRef.current, 'transition', 'none');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      layoutContentRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, handleResize]);

  return (
    <div id="experience" className={styles.experience}>
      <div className={styles.background} />
      <div ref={containerRef} className={styles.container}>
        <div ref={contentRef} className={styles.content}>
          <div ref={universeRef} className={styles.universe}>
            <div className={classNames(styles.galaxy, styles.intro)}>
              <div className={styles.star}>
                <div>Work</div>
                <div className={styles.time}>Experience</div>
              </div>
            </div>
            <div className={classNames(styles.galaxy, styles.mog)}>
              <div className={styles.star}>
                <img alt="Mog Logo" className={styles.logo} src={mogLogo.src} />
                <div className={styles.time}>2015 to 2016</div>
                <div className={styles.planet}>Middleware</div>
                <div className={styles.planet}>RabbitMQ</div>
                <div className={styles.planet}>C#</div>
                <div className={styles.planet}>Events</div>
              </div>
            </div>
            <div className={classNames(styles.galaxy, styles.triggerise)}>
              <div className={styles.star}>
                <img alt="Triggerise Logo" className={styles.logo} src={triggeriseLogo.src} />
                <div className={styles.time}>2016 to 2017</div>
                <div className={styles.planet}>Android</div>
                <div className={styles.planet}>Web</div>
                <div className={styles.planet}>Social</div>
                <div className={styles.planet}>React</div>
              </div>
            </div>
            <div className={classNames(styles.galaxy, styles.moxy)}>
              <div className={styles.star}>
                <img alt="Moxy Logo" className={styles.logo} src={moxyLogo.src} />
                <div className={styles.time}>2017 to 2020</div>
                <div className={styles.planet}>React</div>
                <div className={styles.planet}>Lead</div>
                <div className={styles.planet}>Next.js</div>
                <div className={styles.planet}>Node.js</div>
              </div>
            </div>
            <div className={classNames(styles.galaxy, styles.gyant)}>
              <div className={styles.star}>
                <img alt="Gyant Logo" className={styles.logo} src={gyantLogo.src} />
                <div className={styles.time}>2020 to 2021</div>
                <div className={styles.planet}>Microservices</div>
                <div className={styles.planet}>Node.js</div>
                <div className={styles.planet}>Web</div>
                <div className={styles.planet}>Health</div>
              </div>
            </div>
            <div className={classNames(styles.galaxy, styles.rows)}>
              <div className={styles.star}>
                <img alt="Rows Logo" className={styles.logo} src={rowsLogo.src} />
                <div className={styles.time}>2021</div>
                <div className={styles.planet}>React</div>
                <div className={styles.planet}>Typescript</div>
                <div className={styles.planet}>Web</div>
                <div className={styles.planet}>Spreadsheets</div>
              </div>
            </div>
            <div className={classNames(styles.galaxy, styles.conf)}>
              <div className={styles.star}>
                <img alt="Conf Logo" className={styles.logo} src={confLogo.src} />
                <div className={styles.time}>Current</div>
                <div className={styles.planet}>React</div>
                <div className={styles.planet}>Fintech</div>
                <div className={styles.planet}>Typescript</div>
                <div className={styles.planet}>Core</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
