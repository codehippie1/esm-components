import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/FancyButton.jsx',
      formats: ['es'], // ✅ Ensure ESM output
      fileName: 'fancy-button',
    },
    rollupOptions: {
      // ✅ Do not bundle these
      external: ['react', 'react-dom'],
      output: {
        // ✅ Global fallback names for excluded packages (used only in UMD, but good to include)
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
