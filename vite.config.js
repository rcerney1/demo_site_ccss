import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    preview: {
      allowedHosts: ['demo-site-ccss.onrender.com'], // Add your Render URL here
    },
  },
})
