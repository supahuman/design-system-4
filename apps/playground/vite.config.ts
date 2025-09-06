import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@meroka/tokens': path.resolve(__dirname, '../../packages/tokens'),
      '@meroka/atoms': path.resolve(__dirname, '../../packages/atoms'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
