import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path';
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";
import VueI18nPlugin from "@intlify/vite-plugin-vue-i18n";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    svgLoader(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), "./locales/**"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
