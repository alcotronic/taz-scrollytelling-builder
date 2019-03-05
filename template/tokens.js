const SCREEN_SIZES = [['phone', 500], ['tablet', 768], ['desktop', 1024]];

const colors = {
  brand: 'linear-gradient(to bottom, rgba(201,6,43,1) 0%,rgba(213,13,46,1) 100%)'
};

const fonts = {
  serif: {
    family: 'DroidSerif, logo',
    weight: {
      regular: 400
    }
  },

  sansSerif: {
    family: 'taz, logo',
    weight: {
      regular: 400,
      bold: 700
    }
  }
};

const mq = SCREEN_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

export { colors, fonts, mq };
