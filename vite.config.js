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
      host: '71c30762-0397-4584-957d-f2a258442747-00-3m0tgo7v0biwl.sisko.replit.dev',
      clientPort: 443 // Use the standard HTTPS port
    }
  }
})
