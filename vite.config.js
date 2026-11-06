import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cashfreeApiPlugin } from './scripts/vite-cashfree-api.js'

export default defineConfig({
  plugins: [react(), tailwindcss(), cashfreeApiPlugin()],
})
