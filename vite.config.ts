import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Get repository name for GitHub Pages deployment
// Using repository name as base for GitHub Pages
const getBase = () => {
  // For local development, use empty string
  if (process.env.NODE_ENV === 'development') {
    return '/';
  }
  // For production (GitHub Pages), use the repository name
  return '/battery-tech-portfolio/';
};

// https://vitejs.dev/config/
export default defineConfig({
  base: getBase(),
  server: {
    host: "localhost",
    port: 8080,
    open: true,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-slot',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip'
          ],
        },
      },
    },
  },
});
