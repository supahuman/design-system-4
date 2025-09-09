/// <reference types="vite/client" />
/// <reference types="node" />

import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
const config: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@meroka/tokens': resolve(__dirname, '../../packages/tokens'),
      '@meroka/atoms': resolve(__dirname, '../../packages/atoms'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
};

export default config;
