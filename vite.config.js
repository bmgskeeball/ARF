import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // you're deploying at root now
  plugins: [react()]
})
