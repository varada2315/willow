import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3098,
    host: '0.0.0.0',
    allowedHosts: ['willow', 'willow.cyberpunk.co.in', 'bmscegirlspg.in', 'www.bmscegirlspg.in']
  },
  preview: {
    port: 3098,
    host: '0.0.0.0',
    allowedHosts: ['willow', 'willow.cyberpunk.co.in', 'bmscegirlspg.in', 'www.bmscegirlspg.in']
  }
})
