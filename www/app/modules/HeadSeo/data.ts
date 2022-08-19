import seoImage from '../../../shared/media/images/seo.jpg';

const URL = 'https://paulobmarcos.github.io';

export const data = {
  url: URL,
  title: 'paulobmarcos',
  description: 'Paulo Marcos | Software Engineer Personal Website',
  keywords: [
    'Paulo',
    'Marcos',
    'paulobmarcos',
    'software',
    'engineer',
    'engenheiro',
    'fullstack',
    'front',
    'frontend',
    'front-end',
    'back',
    'backend',
    'back-end',
    'lead',
    'feup',
    'react',
  ],
  image: { src: `${URL}${seoImage}`, width: 1200, height: 630 },
};

export const metaData = {
  title: data.title,
  meta: [
    { name: 'description', content: data.description },
    { name: 'keywords', content: data.keywords.join(' ') },
    /* Facebook & search engines */
    { property: 'og:url', content: data.url },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: data.description },
    { property: 'og:site_name', content: data.title },
    { property: 'og:image', content: data.image.src },
    { property: 'og:image:width', content: data.image.width },
    { property: 'og:image:height', content: data.image.height },
    /* Twitter */
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: data.url },
    { property: 'twitter:title', content: data.title },
    { property: 'twitter:description', content: data.description },
    { property: 'twitter:image', content: data.image.src },
  ],
  link: [{ rel: 'canonical', href: data.url }],
};

export default data;
