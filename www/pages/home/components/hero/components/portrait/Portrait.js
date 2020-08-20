import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import glowSrc from '../../../../../../shared/media/images/glow.png';
import pauloHeadSrc from '../../../../../../shared/media/images/paulo-head.png';
import pauloBodySrc from '../../../../../../shared/media/images/paulo-body.png';
import paulomojiBaseSrc from '../../../../../../shared/media/images/paulomoji/paulomoji-base.png';
import paulomojiExpertiseSrc from '../../../../../../shared/media/images/paulomoji/paulomoji-expertise.png';
import paulomojiExperienceSrc from '../../../../../../shared/media/images/paulomoji/paulomoji-experience.png';
import paulomojiPortfolioSrc from '../../../../../../shared/media/images/paulomoji/paulomoji-portfolio.png';
import paulomojiContactsSrc from '../../../../../../shared/media/images/paulomoji/paulomoji-contacts.png';

import styles from './Portrait.module.css';

const EMOJI = {
  BASE: 'base',
  PAULO: 'paulo',
  EXPERTISE: 'expertise',
  EXPERIENCE: 'experience',
  PORTFOLIO: 'portfolio',
  CONTACTS: 'contacts',
};

const Portrait = ({ className }) => {
  const [currentEmoji, setCurrentEmoji] = useState(EMOJI.BASE);

  const handleLinkMouseOver = useCallback((event) => {
    const type = event.target.dataset.headerlink;

    setCurrentEmoji(type);
  }, []);

  const handleLinkMouseLeave = useCallback(() => {
    setCurrentEmoji(EMOJI.BASE);
  }, []);

  useEffect(() => {
    const cleaners = [];

    Object.values(EMOJI).forEach((type) => {
      const link = document.querySelector(`[data-headerlink="${type}"]`);

      if (link) {
        link.addEventListener('mouseover', handleLinkMouseOver);
        link.addEventListener('mouseleave', handleLinkMouseLeave);

        cleaners.push(() => link.removeEventListener('mouseover', handleLinkMouseOver));
        cleaners.push(() => link.removeEventListener('mouseleave', handleLinkMouseLeave));
      }
    });

    return () => cleaners.forEach((cleaner) => cleaner());
  }, [handleLinkMouseOver, handleLinkMouseLeave]);

  return (
    <div className={ classNames(styles.portrait, className) }>
      <img alt="Glow" src={ glowSrc } className={ styles.glow } />
      <img alt="Paulo Body" src={ pauloBodySrc } className={ styles.body } />
      <img alt="Paulo Head" src={ pauloHeadSrc } className={ classNames(styles.head, { [styles.active]: currentEmoji === EMOJI.PAULO }) } />
      <img
        alt="Paulo Emoji Base"
        src={ paulomojiBaseSrc }
        className={ classNames(styles.paulomoji, styles.base, { [styles.active]: currentEmoji === EMOJI.BASE }) } />
      <img
        alt="Paulo Emoji Expertise"
        src={ paulomojiExpertiseSrc }
        className={ classNames(styles.paulomoji, styles.expertise, { [styles.active]: currentEmoji === EMOJI.EXPERTISE }) } />
      <img
        alt="Paulo Emoji Experience"
        src={ paulomojiExperienceSrc }
        className={ classNames(styles.paulomoji, styles.experience, { [styles.active]: currentEmoji === EMOJI.EXPERIENCE }) } />
      <img
        alt="Paulo Emoji Portfolio"
        src={ paulomojiPortfolioSrc }
        className={ classNames(styles.paulomoji, styles.portfolio, { [styles.active]: currentEmoji === EMOJI.PORTFOLIO }) } />
      <img
        alt="Paulo Emoji Contacts"
        src={ paulomojiContactsSrc }
        className={ classNames(styles.paulomoji, styles.contacts, { [styles.active]: currentEmoji === EMOJI.CONTACTS }) } />
    </div>
  );
};

Portrait.propTypes = {
  className: PropTypes.string,
};

export default Portrait;
