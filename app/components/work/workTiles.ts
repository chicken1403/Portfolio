export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/work.webp',
      width: 800,
      height: 1522,
    },
  },
  {
    description: 'I researched in ',
    title: 'ISRO Inter-IIT High Prep',
    image: {
      src: '/static/images/isro.webp',
      width: 530,
      height: 707,
    },
  },
  {
    description: `I built `,
    title: 'RIC Website',
    image: {
      src: '/static/images/ric.webp',
      width: 527,
      height: 788,
    },
  },
  {
    description: `I built`,
    title: 'Ping Pong playing AI',
    image: {
      src: '/static/images/ping-pong.webp',
      width: 529,
      height: 759,
    },
  },
  {
    description: `I built`,
    title: 'Elite Code',
    image: {
      src: '/static/images/elite.webp',
      width: 524,
      height: 721,
    },
  },
  {
    description: `I built`,
    title: 'Spotify Clone',
    image: {
      src: '/static/images/spotify.webp',
      width: 533,
      height: 757,
    },
  },
];
