import React, { useRef, useCallback, useEffect } from 'react';
import Grain from '../grain';
import Header from '../header';
import changeStyle from '../../../utils/change-style';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!contentRef.current || !percentageRef.current) return;

    const { clientHeight, scrollHeight, scrollTop } = contentRef.current;
    const percentage = (clientHeight + scrollTop) / scrollHeight;

    changeStyle(percentageRef.current, 'transform', `scaleY(${percentage})`);
  }, []);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    content.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      content.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.layout}>
      <Grain className={styles.grain} />
      <div className={styles.frame} />
      <div ref={progressRef} className={styles.progress}>
        <div ref={percentageRef} className={styles.percentage} />
      </div>
      <div id="layoutContent" ref={contentRef} className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
