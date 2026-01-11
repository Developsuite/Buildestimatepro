/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
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
}

module.exports = nextConfig
