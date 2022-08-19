/* eslint-disable */
// @ts-nocheck

// CODE FROM: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

// Opera 8.0+
const isOpera = () => (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
const isFirefox = () => typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari = () =>
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
const isIE = () => /*@cc_on!@*/ false || !!document.documentMode;

// Edge 20+
const isEdge = () => !isIE && !!window.StyleMedia;

// Chrome 1 - 79
const isChrome = () => !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
const isEdgeChromium = () => isChrome && navigator.userAgent.indexOf('Edg') != -1;

// Blink engine detection
const isBlink = () => (isChrome || isOpera) && !!window.CSS;

// iOS (with iPad iOS 13 detection)
const isiOS = () =>
  ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

const browser = {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isEdgeChromium,
  isBlink,
  isiOS,
};

export default browser;
