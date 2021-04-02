import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

export default [
  // UMD for browser-friendly build
  {
    input: 'src/index.ts',
    output: {
      name: 'eventbus-umd',
      file: pkg.main,
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), typescript(), uglify()],
  },
  {
    input: 'src/index.ts',
    output: {
      name: 'eventbus-esm',
      file: pkg.module, // for es module like <script type="module"> import EventBus from './lib/index.esm.js'</script>
      //  or webpack , cause webpack will find npm package in module field
      format: 'esm',
    },
    plugins: [typescript(), uglify()],
  },
]
