import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextLink from '@moxy/next-link';

import styles from './SocialItem.module.css';

const SocialItem = ({ className, icon, text, transitionDelay, href, isVisible }) => {
  const Icon = icon;

  const itemClassName = classNames(styles.item, {
    [styles.visible]: isVisible,
    [styles.invisible]: !isVisible,
  }, className);

  const itemStyle = {
    transitionDelay: `${transitionDelay}s`,
  };

  return (
    <NextLink
      className={ itemClassName }
      style={ itemStyle }
      external
      newTab
      href={ href }>
      <div className={ styles.content }>
        <Icon />
        <p>{ text }</p>
      </div>
    </NextLink>
  );
};

SocialItem.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  transitionDelay: PropTypes.number,
};

SocialItem.defaultProps = {
  transitionDelay: 0,
};

export default SocialItem;
