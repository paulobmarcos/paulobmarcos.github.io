import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import browsers from '../../utils/browsers';

import styles from './Grain.module.css';

const Grain = ({ className }) => {
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    setZIndex(browsers.isSafari() ? -1 : 0);
  }, [setZIndex]);

  return (
    <div className={ classNames(styles.grain, className) } style={ { zIndex } } />
  );
};

Grain.propTypes = {
  className: PropTypes.string,
};

export default Grain;
