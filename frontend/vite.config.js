import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Add proxy to connect backend to frontend
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
  plugins: [react()],
})
