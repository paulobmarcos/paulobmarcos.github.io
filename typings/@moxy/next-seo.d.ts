declare module '@moxy/next-seo' {
  interface Props {
    data: {
      title?: string,
      meta?: { [key: string]: string | number | undefined }[],
      link?: { [key: string]: string | number | undefined }[],
    }
  }

  function NextSeo(props: Props): JSX.Element;
  export = NextSeo;
}
