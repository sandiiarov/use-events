import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const input = './src/index.ts';
const external = id => !id.startsWith('.') && !id.startsWith('/');
const name = 'UseEvents';
const globals = { react: 'React' };

const getBabelOptions = ({ useESModules }) => ({
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  plugins: [['@babel/plugin-transform-runtime', { useESModules }]],
  extensions: ['.ts', '.tsx'],
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
      nodeResolve({ extensions: ['.ts', '.tsx'] }),
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
      nodeResolve({ extensions: ['.ts', '.tsx'] }),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify(),
    ],
  },
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external,
    plugins: [
      nodeResolve({ extensions: ['.ts', '.tsx'] }),
      babel(getBabelOptions({ useESModules: false })),
    ],
  },
  {
    input,
    output: { file: pkg.module, format: 'es' },
    external,
    plugins: [
      nodeResolve({ extensions: ['.ts', '.tsx'] }),
      babel(getBabelOptions({ useESModules: true })),
    ],
  },
];
