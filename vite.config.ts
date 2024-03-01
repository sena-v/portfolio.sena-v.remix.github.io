import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import styleX from 'vite-plugin-stylex'

export default defineConfig({
  plugins: [remix({ ssr: false }), tsconfigPaths(), styleX()],
})
