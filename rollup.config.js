import path from 'path'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json';
// import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const outDir = path.join(__dirname, '');
const external = id => id.includes('@babel/runtime');

const getBabeloptions = () => {
  const options = {
    babelrc: false,
    babelHelpers: 'runtime',
    presets: [['@babel/preset-env', {
      useBuiltIns: false,
    }]],
    plugins: [[
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        version: '^7.18.3',
      }
    ]],
    extensions: [...DEFAULT_EXTENSIONS, 'ts'],
  }
  return options
}

export default [
  // CommonJs
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.main}`,
      format: 'cjs',
      sourcemap: true
    },
    external: external,
    plugins: [
      json(),
      typescript(),
      nodeResolve({ preferBuiltins: false }),
      commonjs({
        include: "node_modules/**",
      }),
      babel(getBabeloptions()),
    ]
  },

  // ES
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.module}`,
      format: 'es',
      sourcemap: true
    },
    external: external,
    plugins: [
      json(),
      typescript({
        tsconfigOverride: { compilerOptions: { declaration: true } },
      }),
      nodeResolve({ preferBuiltins: false }),
      commonjs({
        include: "node_modules/**",
      }),
      babel(getBabeloptions()),
      // terser()
    ]
  },

  // UMD
  {
    input: 'src/index.ts',
    external: external,
    output: {
      file: `${outDir}/${pkg.browser}`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
    },
    plugins: [
      json(),
      typescript(),
      nodeResolve({ preferBuiltins: false }),
      commonjs({
        include: "node_modules/**",
      }),
      babel(getBabeloptions()),
      // terser()
    ]
  }
]
