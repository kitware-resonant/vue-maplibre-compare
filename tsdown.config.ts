import { defineConfig } from 'tsdown';
import Vue from 'unplugin-vue/rolldown';

export default defineConfig({
  entry: 'src/index.ts',
  platform: 'browser',
  target: 'baseline-widely-available',
  plugins: [Vue({ isProduction: true })],
  dts: { vue: true },
  css: {
    fileName: 'vue-maplibre-compare.css',
  },
});
