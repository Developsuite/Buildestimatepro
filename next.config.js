/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Disable image optimization (Cloudflare Pages doesn't support Next.js image optimization)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
