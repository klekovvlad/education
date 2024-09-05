import { defineConfig } from 'vite';

export default defineConfig({
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
        'index': './index.html',
      },
    },
  },
});
