import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import browsers from '../../../utils/browsers';
import styles from './Grain.module.scss';

interface GrainProps {
  className: string;
}

const Grain = ({ className }: GrainProps) => {
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    setZIndex(browsers.isSafari() ? -1 : 0);
  }, [setZIndex]);

  return <div className={classNames(styles.grain, className)} style={{ zIndex }} />;
};

export default Grain;
