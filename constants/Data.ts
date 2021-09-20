import { ISongs } from './Interfaces';

export const songs: ISongs[] = [
  {
    id: '1',
    title: 'Kontho',
    artist: 'Anupam Roy',
    image: require('../assets/albumCover1.png'),
    song: require('../assets/tracks/track-0.mp3'),
  },
  {
    id: '2',
    title: 'Humraah',
    artist: 'Sachet Tandon',
    image: require('../assets/albumCover2.jpg'),
    song: require('../assets/tracks/track-1.mp3'),
  },
  {
    id: '3',
    title: 'Kyon',
    artist: 'B Preak, Payal Dev',
    image: require('../assets/albumCover3.jpg'),
    song: require('../assets/tracks/track-2.mp3'),
  },
  {
    id: '4',
    title: 'Buzz',
    artist: 'Aastha Gill, Badshah',
    image: require('../assets/albumCover4.jpg'),
    song: require('../assets/tracks/track-3.mp3'),
  },
];
