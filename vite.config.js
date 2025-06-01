import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
    global: 'globalThis',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/RemoteFancyButton.tsx'),
      name: 'RemoteFancyButton',
      fileName: (format) => `remote-fancy-button.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        paths: {
          react: 'https://esm.sh/react@17.0.2?dev',
          'react-dom': 'https://esm.sh/react-dom@17.0.2?dev'
        }
      }
    },
    minify: 'esbuild',
    sourcemap: true,
  },
}); 