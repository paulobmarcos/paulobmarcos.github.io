import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextLink from '@moxy/next-link';

import styles from './Link.module.css';

const Link = ({ className, ...rest }) => (
  <NextLink className={ classNames(styles.link, className) } { ...rest } />
);

Link.propTypes = {
  className: PropTypes.string,
};

export default Link;
