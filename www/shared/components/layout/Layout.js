import React, { useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grain from '../grain';
import Header from '../header';
import { changeStyle } from '../../utils';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const contentRef = useRef();
  const progressRef = useRef();
  const percentageRef = useRef();

  const handleScroll = useCallback(() => {
    const { clientHeight, scrollHeight, scrollTop } = contentRef.current;
    const percentage = (clientHeight + scrollTop) / scrollHeight;

    changeStyle(percentageRef.current, 'transform', `scaleY(${percentage})`);
  }, []);

  useEffect(() => {
    const content = contentRef.current;

    content.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      content.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [handleScroll]);

  return (
    <div className={ styles.layout }>
      <Grain className={ styles.grain } />
      <div className={ styles.frame } />
      <div ref={ progressRef } className={ styles.progress }>
        <div ref={ percentageRef } className={ styles.percentage } />
      </div>
      <div
        id="layoutContent"
        ref={ contentRef }
        className={ styles.content }>
        <Header />
        { children }
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
