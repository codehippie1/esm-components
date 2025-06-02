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
      entry: resolve(__dirname, 'src/RemotePropertyList.tsx'),
      name: 'RemotePropertyList',
      fileName: (format) => `remote-property-list.${format}.js`,
      formats: ['iife']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    minify: 'esbuild',
    sourcemap: true,
  },
}); 