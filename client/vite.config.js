import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Ensure this is set correctly
  build: {
    outDir: '../dist', // Adjust if necessary
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});