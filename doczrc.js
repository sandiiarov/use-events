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
      src: 'https://bit.ly/2TEAeBu',
      width: 232,
    },
    colors: {
      primary: '#000000',
    },
  },
};
