import React, { useState, useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';

import glow from '../../../../../../shared/media/images/glow.png';
import pauloHead from '../../../../../../shared/media/images/paulo-head.png';
import pauloBody from '../../../../../../shared/media/images/paulo-body.png';
import paulomojiBase from '../../../../../../shared/media/images/paulomoji/paulomoji-base.png';
import paulomojiExpertise from '../../../../../../shared/media/images/paulomoji/paulomoji-expertise.png';
import paulomojiExperience from '../../../../../../shared/media/images/paulomoji/paulomoji-experience.png';
import paulomojiPortfolio from '../../../../../../shared/media/images/paulomoji/paulomoji-portfolio.png';
import paulomojiContacts from '../../../../../../shared/media/images/paulomoji/paulomoji-contacts.png';

import styles from './Portrait.module.scss';

interface PortraitProps {
  className?: string;
}

const EMOJI = {
  BASE: 'base',
  PAULO: 'paulo',
  EXPERTISE: 'expertise',
  EXPERIENCE: 'experience',
  PORTFOLIO: 'portfolio',
  CONTACTS: 'contacts',
};

const Portrait = ({ className }: PortraitProps) => {
  const [currentEmoji, setCurrentEmoji] = useState(EMOJI.BASE);
  const [finished, setFinished] = useState(false);

  const portraitRef = useRef<HTMLDivElement>(null);
  const loadedImagesRef = useRef(new Set());

  const handleImageLoad = useCallback(
    (event) => {
      loadedImagesRef.current.add(event.target.alt);

      if (loadedImagesRef.current.size === portraitRef.current?.children.length) {
        setTimeout(() => setFinished(true), 100);
      }
    },
    [setFinished],
  );

  const handleLinkMouseOver = useCallback((event) => {
    const type = event.target.dataset.headerlink;

    setCurrentEmoji(type);
  }, []);

  const handleLinkMouseLeave = useCallback(() => {
    setCurrentEmoji(EMOJI.BASE);
  }, []);

  useEffect(() => {
    const cleaners: (() => void)[] = [];

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

  useEffect(() => {
    if (!portraitRef.current) return;

    const { children } = portraitRef.current;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (child instanceof HTMLImageElement && child.complete) {
        handleImageLoad({ target: child });
      }
    }
  }, [handleImageLoad]);

  const portraitClassName = classNames(
    styles.portrait,
    {
      [styles.finished]: finished,
    },
    className,
  );

  /* Optimization to not display other emojis until all images are finish loading */
  const style = finished ? {} : { opacity: 0 };

  return (
    <div ref={portraitRef} className={portraitClassName}>
      <img role="presentation" alt="Glow" src={glow.src} className={styles.glow} onLoad={handleImageLoad} />
      <img role="presentation" alt="Paulo Body" src={pauloBody.src} className={styles.body} onLoad={handleImageLoad} />
      <img
        role="presentation"
        alt="Paulo Head"
        src={pauloHead.src}
        className={classNames(styles.head, { [styles.active]: currentEmoji === EMOJI.PAULO })}
        onLoad={handleImageLoad}
      />
      <img
        role="presentation"
        alt="Paulo Emoji Base"
        src={paulomojiBase.src}
        className={classNames(styles.paulomoji, styles.base, { [styles.active]: currentEmoji === EMOJI.BASE })}
        onLoad={handleImageLoad}
      />
      <img
        role="presentation"
        alt="Paulo Emoji Expertise"
        src={paulomojiExpertise.src}
        className={classNames(styles.paulomoji, styles.expertise, { [styles.active]: currentEmoji === EMOJI.EXPERTISE })}
        style={style}
        onLoad={handleImageLoad}
      />
      <img
        role="presentation"
        alt="Paulo Emoji Experience"
        src={paulomojiExperience.src}
        className={classNames(styles.paulomoji, styles.experience, { [styles.active]: currentEmoji === EMOJI.EXPERIENCE })}
        style={style}
        onLoad={handleImageLoad}
      />
      <img
        role="presentation"
        alt="Paulo Emoji Portfolio"
        src={paulomojiPortfolio.src}
        className={classNames(styles.paulomoji, styles.portfolio, { [styles.active]: currentEmoji === EMOJI.PORTFOLIO })}
        style={style}
        onLoad={handleImageLoad}
      />
      <img
        role="presentation"
        alt="Paulo Emoji Contacts"
        src={paulomojiContacts.src}
        className={classNames(styles.paulomoji, styles.contacts, { [styles.active]: currentEmoji === EMOJI.CONTACTS })}
        style={style}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default Portrait;
