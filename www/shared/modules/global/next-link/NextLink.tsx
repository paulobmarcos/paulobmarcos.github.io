/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link, { LinkProps } from 'next/link';

export interface NextLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const NextLink = (props: NextLinkProps) => {
  const { href, children, className, newTab, external, style, ...rest } = props;

  const Anchor = (
    <a
      className={className}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer' : undefined}
      href={external ? href : undefined}
      style={style}
      {...rest}
    >
      {children}
    </a>
  );

  if (external) {
    return Anchor;
  }

  return (
    <Link href={href} {...rest}>
      {Anchor}
    </Link>
  );
};

export default NextLink;
