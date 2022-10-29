import coin from './img/bg-coin.jpg';
import green from './img/bg-green.jpg';
import xmas from './img/bg-xmas.jpg';
import cookie from './img/bg-cookie.jpg'
import { StaticImageData } from 'next/image';

export interface Style {
  bg: string | StaticImageData;
  // item: string | StaticImageData;
}

export const data: Style[] = [
  {
    bg: coin,
    
  },
  {
    bg: green,
  },
  {
    bg: xmas,
  },
  {
    bg: cookie,
  },
]