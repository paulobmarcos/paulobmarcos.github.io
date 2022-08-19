import React from 'react';
import classNames from 'classnames';
import styles from './Bounds.module.scss';

interface BoundsProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const Bounds = ({ children, className, contentClassName }: BoundsProps) => (
  <div className={classNames(styles.bounds, className)}>
    <div className={classNames(styles.content, contentClassName)}>{children}</div>
  </div>
);

export default Bounds;
