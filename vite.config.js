import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      formats: ['webp'], // Укажите форматы, в которые нужно конвертировать
      extensions: ['png', 'jpg'], // Укажите форматы, которые нужно конвертировать
      optimizers: {
        webp: {
          quality: 100,
        },
      },
      webp: {
        quality: 100,
      },
    }),
  ],
  server: {
    open: true,
    port: 5000,
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
      input: {
        index: './index.html',
      },
    },
  },
});
