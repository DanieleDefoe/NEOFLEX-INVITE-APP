import { nanoid } from 'nanoid'

import applebyz from '../assets/applebyz.png'
import earpods from '../assets/earpods.png'
import wideearpods from '../assets/wideearpods.png'

import airpods from '../assets/airpods.png'
import gerlax from '../assets/gerlax.png'
import borofone from '../assets/borofone.png'

const headphones = [
  {
    img: applebyz,
    title: 'Apple BYZ S8521',
    price: 2927,
    rate: 4.7,
    id: nanoid(),
  },
  {
    img: earpods,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    id: nanoid(),
  },
  {
    img: wideearpods,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    id: nanoid(),
  },
  {
    img: applebyz,
    title: 'Apple BYZ S8521',
    price: 2927,
    rate: 4.7,
    id: nanoid(),
  },
  {
    img: earpods,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    id: nanoid(),
  },
  {
    img: wideearpods,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    id: nanoid(),
  },
]

const wireless = [
  {
    img: airpods,
    title: 'Apple AirPods',
    price: '9527',
    rate: '4.7',
    id: nanoid(),
  },
  {
    img: gerlax,
    title: 'GERLAX GH-04',
    price: '6527',
    rate: '4.7',
    id: nanoid(),
  },
  {
    img: borofone,
    title: 'BOROFONE BO4',
    price: '7527',
    rate: '4.7',
    id: nanoid(),
  },
]

export { headphones, wireless }
