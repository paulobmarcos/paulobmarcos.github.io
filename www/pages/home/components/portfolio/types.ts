import { StaticImageData } from 'next/image';

export interface CarouselItem {
  url: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
}
