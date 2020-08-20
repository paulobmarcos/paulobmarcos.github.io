import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from '../shared/components/layout';

import favicon from '../shared/media/favicons/favicon.ico';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Paulo Marcos</title>
      <link rel="shortcut icon" type="image/x-icon" href={ favicon } />
    </Head>
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
