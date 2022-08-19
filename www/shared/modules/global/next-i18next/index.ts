import { GetServerSideProps, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import config from '@/root/next-i18next.config.js';

export const getTranslationsProps = async (locale = config.i18n.defaultLocale) => {
  const translationProps = await serverSideTranslations(locale, ['common']);

  return {
    props: { ...translationProps },
  };
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => getTranslationsProps(locale);

export const getStaticProps: GetStaticProps = async ({ locale }) => getTranslationsProps(locale);
