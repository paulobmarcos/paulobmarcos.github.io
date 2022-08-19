import React from 'react';
import Svg, { Props } from 'react-inlinesvg';

import github from '../../../media/svgs/github.svg';
import linkedin from '../../../media/svgs/linkedin.svg';
import arrowLeft from '../../../media/svgs/arrow-left.svg';
import arrowRight from '../../../media/svgs/arrow-right.svg';
import mail from '../../../media/svgs/mail.svg';

export type IconProps = Omit<Props, 'src'>;

export const IconGitHub = (props: IconProps) => <Svg {...props} src={github.src} />;
export const IconLinkedIn = (props: IconProps) => <Svg {...props} src={linkedin.src} />;
export const IconArrowLeft = (props: IconProps) => <Svg {...props} src={arrowLeft.src} />;
export const IconArrowRight = (props: IconProps) => <Svg {...props} src={arrowRight.src} />;
export const IconMail = (props: IconProps) => <Svg {...props} src={mail.src} />;
