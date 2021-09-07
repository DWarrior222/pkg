import { uglify } from 'rollup-plugin-uglify';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const path = require('path');
const resolve = _path => path.resolve(__dirname, '../', _path);
const pkg = require('../package.json');
const version = process.env.VERSION || pkg.version;
const banner =
`/* !
  * library v${version}
  * 
  * (c) ${new Date().getFullYear()} gsj
  */
`

const outputs = [{
  file: resolve('lib/index.common.js'),
  format: 'umd',
  globals: {
    axios: 'axios'
  }
}, {
  file: pkg.main,
  format: 'umd',
  env: 'producetion',
  globals: {
    axios: 'axios'
  }
}, {
  file: resolve('lib/index.es.js'),
  format: 'es',
  globals: {
    axios: 'axios'
  }
}, {
  file: pkg.module,
  format: 'es',
  env: 'production',
  globals: {
    axios: 'axios'
  }
}];

function buildRollupConfig(output) {
  let config = {
    input: resolve('src/index.ts'),
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript(),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      nodeResolve(),
    ],
    external: ['axios'],
    output: {
      file: output.file,
      format: output.format,
      banner,
      name: 'library',
      exports: 'named'
    }
  };

  if (output.env && output.env.includes('prod')) {
    config.plugins.push(uglify());
  }
  if (output.globals) {
    config.output.globals = output.globals;
  }

  return config;
}

export default outputs.map(buildRollupConfig);