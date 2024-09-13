import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      formats: ['webp'], // Укажите форматы, в которые нужно конвертировать
      extensions: ['png', 'jpg'], // Укажите форматы, которые нужно конвертировать
      webp: {
        quality: 100,
      },
    }),
    compression(),
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
