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
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        inlineDynamicImports: true,
        paths: {
          react: 'https://esm.sh/stable/react@17.0.2/es2021/react.js',
          'react-dom': 'https://esm.sh/stable/react-dom@17.0.2/es2021/react-dom.js'
        }
      }
    },
    minify: 'esbuild',
    sourcemap: true,
  },
}); 