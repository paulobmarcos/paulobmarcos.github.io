import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IntersectionObserver from '@researchgate/react-intersection-observer';

import styles from './TextReveal.module.css';

const TextReveal = ({ children, className, revealDelay, charTransitionDelay, charTransitionDuration, visible }) => {
  const timeoutRef = useRef();
  const [isVisible, setVisible] = useState(false);

  const visibility = typeof visible !== 'undefined' ? visible : isVisible;

  const chars = children.split('');
  const charClassName = classNames(styles.char, {
    [styles.visible]: visibility,
    [styles.invisible]: !visibility,
  });

  const handleIntersectionChange = useCallback((event) => {
    const { isIntersecting } = event;

    clearTimeout(timeoutRef.current);

    if (isIntersecting) {
      setVisible(true);
    } else {
      timeoutRef.current = setTimeout(() => setVisible(false), 5000);
    }
  }, []);

  const renderChar = (char, index) => {
    const style = {
      transitionDuration: `${ charTransitionDuration }s`,
      transitionDelay: `${ revealDelay + (index * charTransitionDelay) }s`,
    };

    return (
      <span
        key={ index }
        data-index={ index }
        className={ charClassName }
        style={ style }>
        { char }
      </span>
    );
  };

  return (
    <IntersectionObserver onChange={ handleIntersectionChange }>
      <div className={ classNames(styles.textReveal, className) }>
        { chars.map(renderChar) }
      </div>
    </IntersectionObserver>
  );
};

TextReveal.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  revealDelay: PropTypes.number,
  charTransitionDelay: PropTypes.number,
  charTransitionDuration: PropTypes.number,
  visible: PropTypes.bool,
};

TextReveal.defaultProps = {
  revealDelay: 0,
  charTransitionDelay: 0.05,
  charTransitionDuration: 0.7,
};

export default TextReveal;
