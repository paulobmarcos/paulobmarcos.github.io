import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, type = 'button', ...rest } = props;

  return <button type={type} className={classNames(styles.button, className)} {...rest} />;
};

export default Button;
