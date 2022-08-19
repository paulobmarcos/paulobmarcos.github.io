import React from 'react';
import Hero from './components/hero';
import Expertise from './components/expertise';
import Experience from './components/experience';
import Portfolio from './components/portfolio';
import Contacts from './components/contacts';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Expertise />
      <Experience />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
