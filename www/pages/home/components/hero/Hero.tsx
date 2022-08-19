import React from 'react';
import Bounds from '../../../../shared/modules/project/bounds';
import TextReveal from '../../../../shared/modules/project/text-reveal';
import Portrait from './components/portrait/Portrait';
import styles from './Hero.module.scss';

const EXPERIENCE_START = new Date(2015, 9, 12);

const Hero = () => {
  const years = new Date(new Date().getTime() - EXPERIENCE_START.getTime()).getFullYear() - 1970;

  return (
    <Bounds className={styles.bounds}>
      <div className={styles.background} />
      <div id="hero" className={styles.hero}>
        <div className={styles.title}>
          <TextReveal>Software</TextReveal>
          <TextReveal>Engineer</TextReveal>
        </div>
        <div className={styles.number}>{years}</div>
        <div className={styles.experience}>
          <p>years</p>
          <p>of experience</p>
        </div>
        <Portrait className={styles.portrait} />
      </div>
    </Bounds>
  );
};

export default Hero;
