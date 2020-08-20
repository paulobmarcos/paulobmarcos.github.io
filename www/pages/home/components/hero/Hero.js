import React from 'react';
import Bounds from '../../../../shared/components/bounds';
import TextReveal from '../../../../shared/components/text-reveal';
import Portrait from './components/portrait/Portrait';

import styles from './Hero.module.css';

const EXPERIENCE_START = new Date(2015, 12, 1);

const Hero = () => {
  const timeDiff = (new Date().getTime() - EXPERIENCE_START.getTime()) / 1000;
  const years = Math.abs(Math.round(timeDiff / (60 * 60 * 24 * 365)));

  return (
    <Bounds className={ styles.bounds }>
      <div className={ styles.background } />
      <div id="hero" className={ styles.hero }>
        <div className={ styles.title }>
          <TextReveal>Software</TextReveal>
          <TextReveal>Engineer</TextReveal>
        </div>
        <div className={ styles.number }>{ years }</div>
        <div className={ styles.experience }>
          <p>years</p>
          <p>of experience</p>
        </div>
        <Portrait className={ styles.portrait } />
      </div>
    </Bounds>
  );
};

Hero.propTypes = {};

export default Hero;
