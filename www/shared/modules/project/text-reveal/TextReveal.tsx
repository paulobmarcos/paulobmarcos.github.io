import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import styles from './TextReveal.module.scss';

interface TextRevealProps {
  children: string;
  className?: string;
  revealDelay?: number;
  charTransitionDelay?: number;
  charTransitionDuration?: number;
  visible?: boolean;
}

const TextReveal = (props: TextRevealProps) => {
  const { children, className, revealDelay = 0, charTransitionDelay = 0.05, charTransitionDuration = 0.7, visible } = props;

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [isVisible, setVisible] = useState(false);
  const { ref, inView } = useInView();

  const visibility = visible ?? isVisible;

  const chars = children.split('');
  const charClassName = classNames(styles.char, {
    [styles.visible]: visibility,
    [styles.invisible]: !visibility,
  });

  useEffect(() => {
    clearTimeout(timeoutRef.current);

    if (inView) {
      setVisible(true);
    } else {
      timeoutRef.current = setTimeout(() => setVisible(false), 5000);
    }
  }, [inView]);

  return (
    <div ref={ref} className={classNames(styles.textReveal, className)}>
      {chars.map((char: string, index: number) => {
        const style = {
          transitionDuration: `${charTransitionDuration}s`,
          transitionDelay: `${revealDelay + index * charTransitionDelay}s`,
        };

        return (
          <span key={index} data-index={index} className={charClassName} style={style}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default TextReveal;
