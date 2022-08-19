import auxImage from '../../../../../shared/media/images/works/audioux.jpg';
import thuImage from '../../../../../shared/media/images/works/thu.jpg';
import stratioImage from '../../../../../shared/media/images/works/stratio.jpg';
import cavalliImage from '../../../../../shared/media/images/works/cavalli.jpg';
import proenzaImage from '../../../../../shared/media/images/works/proenza.jpg';

import { CarouselItem } from '../types';

const data: CarouselItem[] = [
  {
    url: 'https://auxnyc.com/',
    title: 'Audio UX',
    subtitle: 'The future of audio branding.',
    image: auxImage,
  },
  {
    url: 'https://www.youtube.com/embed/ZiUUsN99ngM',
    title: 'THU Japan',
    subtitle: 'A storytelling bootcamp for creators.',
    image: thuImage,
  },
  {
    url: 'https://www.youtube.com/embed/rM-RnCVk_O0',
    title: 'Stratio',
    subtitle: 'Driving a zero downtime future.',
    image: stratioImage,
  },
  {
    url: 'https://www.robertocavalli.com/',
    title: 'Roberto Cavalli',
    subtitle: 'The official Roberto Cavall online store.',
    image: cavalliImage,
  },
  {
    url: 'https://www.proenzaschouler.com/',
    title: 'Proenza Schouler',
    subtitle: 'The official Proenza Schouler online store.',
    image: proenzaImage,
  },
];

export default data;
