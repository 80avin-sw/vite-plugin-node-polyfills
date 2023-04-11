import { resolve } from 'path'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      exclude: ['fs'],
      protocolImports: true,
    }),
  ],
  root: resolve(__dirname),
})
