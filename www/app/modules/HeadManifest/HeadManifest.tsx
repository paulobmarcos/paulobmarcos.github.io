import React from 'react';
import Head from 'next/head';
import manifest from '../../../../public/manifest.json';

const HeadManifest = () => {
  return (
    <Head>
      <meta name="theme-color" content={manifest.theme_color} />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default HeadManifest;
