import pkg from './package.json';

export default {
  title: 'Use Events',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  themeConfig: {
    logo: {
      src:
        'https://user-images.githubusercontent.com/15861257/47953123-f53e3680-df46-11e8-81f0-a3e63641a7ef.png',
      width: 232,
    },
    colors: {
      primary: '#000000',
    },
  },
};
