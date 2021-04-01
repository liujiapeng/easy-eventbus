import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'howLongUntilLunch',
      file: pkg.main,
      format: 'umd',  // for cmd & amd like webpack project or node project
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      name: 'howLongUntilLunch',
      file: pkg.module, // for es module like <script type="module"> import EventBus from './lib/index.esm.js'</script>
      format: 'esm',
    },
    plugins: [typescript()],
  },
]
