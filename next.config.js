/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Static export for Cloudflare Pages (uncomment for production build)
  // output: 'export',
  
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for better static hosting compatibility
  trailingSlash: true,
}

module.exports = nextConfig
