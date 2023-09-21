import { defineConfig } from '@shushu.pro/rollup';

export default defineConfig({
  mode: 'production',
  input: './playground',
  browser: true,
  output: {
    umd: {
      file: './docs/index.js',
    },
  },
});
