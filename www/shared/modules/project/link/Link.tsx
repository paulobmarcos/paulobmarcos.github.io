import React from 'react';
import classNames from 'classnames';
import NextLink, { NextLinkProps } from '../../global/next-link';
import styles from './Link.module.scss';

interface LinkProps extends NextLinkProps {
  className?: string;
}

const Link = ({ className, ...rest }: LinkProps) => <NextLink className={classNames(styles.link, className)} {...rest} />;

export default Link;
