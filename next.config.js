/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for Cloudflare Pages (uncomment for production build)
  // output: 'export',

  // Disable image optimization (Cloudflare Pages doesn't support Next.js image optimization)
  images: {
    unoptimized: true,
  },

  // Disable webpack persistent caching to avoid large cache files on Cloudflare Pages
  webpack: (config, { dev }) => {
    if (!dev) {
      // Use memory cache instead of filesystem cache in production builds
      config.cache = {
        type: 'memory',
      }
    }
    return config
  },

  // Trailing slashes for better static hosting compatibility
  trailingSlash: true,
}

module.exports = nextConfig
