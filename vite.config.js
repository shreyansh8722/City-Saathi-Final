// vite.config.js
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        // let Vite/Rollup handle automatic chunking
      }
    }
  },
  // Add this server configuration
  server: {
    host: '0.0.0.0', // This makes the server accessible within the Replit container
    port: 5173, // You can use the default Vite port
    hmr: {
      // This tells the client how to connect to the HMR websocket
      protocol: 'wss', // Use secure websocket
      host: 'ce5474b2-dd67-4d46-b740-88bc32f32ac4-00-273aba9f08e81.sisko.replit.dev',
      clientPort: 443 // Use the standard HTTPS port
    }
  }
})
