import React from 'react';
import Svg from 'react-inlinesvg';

import arrowLeftSvg from '../../media/svgs/arrow-left.svg';
import arrowRightSvg from '../../media/svgs/arrow-right.svg';
import cvSvg from '../../media/svgs/cv.svg';
import githubSvg from '../../media/svgs/github.svg';
import linkedinSvg from '../../media/svgs/linkedin.svg';
import mailSvg from '../../media/svgs/mail.svg';

const ArrowLeftIcon = (props) => <Svg { ...props } src={ arrowLeftSvg } />;
const ArrowRightIcon = (props) => <Svg { ...props } src={ arrowRightSvg } />;
const CvIcon = (props) => <Svg { ...props } src={ cvSvg } />;
const GithubIcon = (props) => <Svg { ...props } src={ githubSvg } />;
const LinkedinIcon = (props) => <Svg { ...props } src={ linkedinSvg } />;
const MailIcon = (props) => <Svg { ...props } src={ mailSvg } />;

export {
  ArrowLeftIcon,
  ArrowRightIcon,
  CvIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
};
