import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),],
    optimizeDeps: {
      include: ["framer-motion", "sonner"], // Ensure they are properly bundled
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    }
})
