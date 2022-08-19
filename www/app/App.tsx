import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useServiceWorker, HeadFavicon, HeadManifest, HeadSeo } from './modules';
import Layout from '../shared/modules/project/layout';

const App = ({ Component, pageProps, router }: AppProps) => {
  useServiceWorker();

  useEffect(() => {
    console.log('%cHi there 👋 !', 'font-size: x-large');
    console.log('%cVisitor 1 Million!! 🌍', 'font-size: x-large');
    console.log('%cYou just won a prize!!! 🎉🎁', 'font-size: x-large');
    console.log('%c...', 'font-size: x-large');
    console.log('%cJust kidding 😅', 'font-size: x-large');
    console.log('%cContinue with your exploration 🕵️‍♂️', 'font-size: x-large');
  }, []);

  return (
    <>
      <HeadSeo />
      <HeadFavicon />
      <HeadManifest />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      </Head>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
};

export default appWithTranslation(App);
