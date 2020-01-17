/* eslint-disable global-require */
/**
 * Data packet to ensure consistency of object type.
 * An alternative could be to make a class and construct objects.
 */
export default {
  sunflowerMelody: {
    title: 'Sunflower Melody',
    price: 30.0,
    image: {
      src: require('../../assets/img/flower-1.png'),
      alt: 'Sunflower Melody rounded image',
      srcSet: [
        `${require('../../assets/img/flower-1@2x.png')} 2x`,
        `${require('../../assets/img/flower-1@3x.png')} 3x`,
      ],
    },
  },
  springMix: {
    title: 'Spring Mix',
    price: 35.0,
    image: {
      src: require('../../assets/img/flower-2.png'),
      alt: 'Spring Mix rounded image',
      srcSet: [
        `${require('../../assets/img/flower-2@2x.png')} 2x`,
        `${require('../../assets/img/flower-2@3x.png')} 3x`,
      ],
    },
  },
  colorfulArrangement: {
    title: 'Colorful Arrangement',
    price: 40.0,
    image: {
      src: require('../../assets/img/flower-3.png'),
      alt: 'Colorful Arrangement rounded image',
      srcSet: [
        `${require('../../assets/img/flower-3@2x.png')} 2x`,
        `${require('../../assets/img/flower-3@3x.png')} 3x`,
      ],
    },
  },
  tulipSeason: {
    title: 'Tulip Season',
    price: 50.0,
    image: {
      src: require('../../assets/img/flower-4.png'),
      alt: 'Tulip Season rounded image',
      srcSet: [
        `${require('../../assets/img/flower-4@2x.png')} 2x`,
        `${require('../../assets/img/flower-4@3x.png')} 3x`,
      ],
    },
  },
};
/* eslint-enable global-require */
