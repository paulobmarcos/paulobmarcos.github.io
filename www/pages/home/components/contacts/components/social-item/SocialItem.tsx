import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NextLink } from '@/root/www/shared/modules/global';
import { IconProps } from '@/root/www/shared/modules/project';

import styles from './SocialItem.module.scss';

interface SocialItemProps {
  icon: (props: IconProps) => JSX.Element;
  text: string;
  href: string;
  className?: string;
  isVisible?: boolean;
  transitionDelay?: number;
}

const SocialItem = (props: SocialItemProps) => {
  const { className, icon, text, href, transitionDelay = 0, isVisible = false } = props;

  const Icon = icon;

  const itemClassName = classNames(
    styles.item,
    {
      [styles.visible]: isVisible,
      [styles.invisible]: !isVisible,
    },
    className,
  );

  const itemStyle = {
    transitionDelay: isVisible ? `${transitionDelay}s` : '0s',
  };

  return (
    <NextLink className={itemClassName} style={itemStyle} external newTab href={href}>
      <div className={styles.content}>
        <Icon />
        <p>{text}</p>
      </div>
    </NextLink>
  );
};

SocialItem.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  transitionDelay: PropTypes.number,
};

SocialItem.defaultProps = {
  isVisible: false,
  transitionDelay: 0,
};

export default SocialItem;
