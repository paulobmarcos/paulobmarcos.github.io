import React from 'react';
import NextLink from '../../global/next-link';
import Link from '../link';
import { IconGitHub, IconLinkedIn } from '../icons';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.name}>
        <Link external href="#hero" data-headerlink="paulo">
          <b>Paulo</b> Marcos
        </Link>
      </div>
      <div className={styles.links}>
        <Link external href="#expertise" data-headerlink="expertise">
          Expertise
        </Link>
        <Link external href="#experience" data-headerlink="experience">
          Experience
        </Link>
        <Link external href="#portfolio" data-headerlink="portfolio">
          Portfolio
        </Link>
        <Link external href="#contacts" data-headerlink="contacts">
          Contacts
        </Link>
      </div>
      <div className={styles.social}>
        <NextLink external newTab href="https://github.com/paulobmarcos">
          <IconGitHub />
        </NextLink>
        <NextLink external newTab href="https://www.linkedin.com/in/paulobmarcos">
          <IconLinkedIn />
        </NextLink>
      </div>
    </div>
  </header>
);

export default Header;
