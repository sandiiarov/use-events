import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

const input = './src/index.js';
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
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      peerDepsExternal(),
      sizeSnapshot(),
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
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      peerDepsExternal(),
      uglify(),
    ],
  },
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    plugins: [
      babel(getBabelOptions({ useESModules: false })),
      peerDepsExternal(),
      sizeSnapshot(),
    ],
  },
  {
    input,
    output: { file: pkg.module, format: 'es' },
    plugins: [
      babel(getBabelOptions({ useESModules: true })),
      peerDepsExternal(),
      sizeSnapshot(),
    ],
  },
];
