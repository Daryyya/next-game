import coin from '../public/image/bg-coin.jpg';
import green from '../public/image/bg-green.jpg';
import xmas from '../public/image/bg-xmas.jpg';
import cookie from '../public/image/bg-cookie.jpg'
import cake from '../public/image/item/cake.png'
import cake2 from '../public/image/item/cake-2.png'
import cake3 from '../public/image/item/cake-3.png'
import cake4 from '../public/image/item/cake-4.png'
import coin1 from '../public/image/item/coin-1.png'
import coin2 from '../public/image/item/coin-2.png'
import coin3 from '../public/image/item/coin-3.png'
import flower from '../public/image/item/flower.png'
import flower2 from '../public/image/item/flower-2.png'
import flower3 from '../public/image/item/flower-3.png'
import flower4 from '../public/image/item/flower-4.png'
import toy from '../public/image/item/toy.png'
import toy2 from '../public/image/item/toy-2.png'
import toy3 from '../public/image/item/toy-3.png'
import toy4 from '../public/image/item/toy-4.png'
import resultCookie from '../public/image/result-cookie.png'
import resultCoin from '../public/image/result-coin.png'
import resultXmas from '../public/image/result-xmas.png'
import resultGreen from '../public/image/result-green.png'

import { StaticImageData } from 'next/image';

export interface Style {
  bg: string | StaticImageData;
  itemsBg: (string | StaticImageData)[];
  resultBg: string | StaticImageData;
}

export const data: Style[] = [
  {
    bg: coin,
    itemsBg: [coin1, coin2, coin3, coin2, coin1, coin2],
    resultBg: resultCoin,
  },
  {
    bg: green,
    itemsBg: [flower, flower2, flower3, flower4, flower3, flower],
    resultBg: resultGreen,
  },
  {
    bg: xmas,
    itemsBg: [toy, toy2, toy3, toy4, toy3, toy2],
    resultBg: resultXmas,
  },
  {
    bg: cookie,
    itemsBg: [cake, cake2, cake3, cake4, cake, cake3],
    resultBg: resultCookie
  },
]