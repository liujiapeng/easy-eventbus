import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default [
  // UMD for browser-friendly build
  {
    input: 'src/index.ts',
    output: {
      name: 'howLongUntilLunch',
			file: pkg.main,
			format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript()
    ]
  },
]