import path from 'node:path'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig, type Plugin } from 'vite'

/** Root-relative URL prefixes that vite owns and nitro must not answer. */
const VITE_OWNED = ['/node_modules/', '/src/']

/**
 * Nitro's dev middleware treats any URL with a file extension as an app route
 * unless the browser sends `Sec-Fetch-Dest: script`. Browsers that send
 * `empty` (or omit the header) get the SSR 404 page for module requests like
 * `/src/router.tsx`. Rewriting them to `/@fs/` puts them back on nitro's
 * passthrough list.
 */
function serveViteOwnedUrls(): Plugin {
  return {
    name: 'serve-vite-owned-urls',
    enforce: 'pre',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url
        if (url && VITE_OWNED.some((prefix) => url.startsWith(prefix))) {
          req.url = `/@fs${path.posix.join(server.config.root, url)}`
        }
        next()
      })
    },
  }
}

export default defineConfig({
  // Listen on all interfaces so the site is reachable from other devices on the LAN.
  server: { host: '0.0.0.0', port: 3200, strictPort: true },
  plugins: [
    serveViteOwnedUrls(),
    tailwindcss(),
    tanstackStart({ srcDirectory: 'src' }),
    viteReact(),
    nitro(),
  ],
})
