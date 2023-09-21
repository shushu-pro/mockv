import { defineConfig } from '@shushu.pro/rollup';

export default defineConfig({
  plugins: {
    // terser: false,
    // babel: [],
  },
  output: {
    cjs: true,
    es: true,
    umd: {
      name: 'mockv',
    },
    dts: true,
  },
});
