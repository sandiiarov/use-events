import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const input = './src/index.js';
const external = id => !id.startsWith('.') && !id.startsWith('/');
const name = 'UseEvents';
const globals = { react: 'React' };

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  plugins: [['@babel/plugin-transform-runtime', { useESModules }]],
});

export default [
  {
    input,
    output: {
      file: 'dist/use-events.umd.js',
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    output: {
      file: 'dist/use-events.min.js',
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify(),
    ],
  },
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false }))],
  },
  {
    input,
    output: { file: pkg.module, format: 'es' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true }))],
  },
];
