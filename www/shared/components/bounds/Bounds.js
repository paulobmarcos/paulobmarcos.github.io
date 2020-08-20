import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Bounds.module.css';

const Bounds = ({ children, className, contentClassName }) => (
  <div className={ classNames(styles.bounds, className) }>
    <div className={ classNames(styles.content, contentClassName) }>
      { children }
    </div>
  </div>
);

Bounds.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

export default Bounds;
