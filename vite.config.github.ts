import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// Configuration spécifique pour GitHub Pages
// Le HTML sera généré directement à la racine de dist/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  root: "./client",
  publicDir: "./public",
  build: {
    // Build directement dans dist/ (pas dist/public/)
    outDir: "../dist",
    emptyOutDir: true,
    // Optimisations pour production
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  // Utiliser des chemins relatifs pour GitHub Pages
  base: './',
});
