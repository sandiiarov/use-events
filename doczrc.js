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
        'https://user-images.githubusercontent.com/15861257/47831186-789c3400-dd5d-11e8-8119-2846eb0c9e10.png',
      width: 232,
    },
    colors: {
      primary: '#001a28',
    },
  },
};
