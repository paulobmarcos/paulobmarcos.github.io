import React from 'react';
import Head from 'next/head';

/**
 * This component adds the recommended favicons.
 * The following icons should be placed in the "public/favicons" folder:
 * - favicon.ico
 * - favicon-16x16.png (16px x 16px)
 * - favicon-32x32.png (32px x 32px)
 * - apple-touch-icon.png (180px x 180px)
 */
const HeadFavicon = () => (
  <Head>
    <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
  </Head>
);

export default HeadFavicon;
