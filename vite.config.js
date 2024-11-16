import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.NODE_ENV === 'development' ? '/' : '/Amazon_SMBs/', // Base path for local dev vs GitHub Pages
  build: {
    outDir: 'dist',  // The directory where the production build will be output
  },
});
