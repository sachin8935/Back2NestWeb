import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  compress: true, // Enable gzip compression
  productionBrowserSourceMaps: false,
  poweredByHeader: false, // Hide "X-Powered-By: Next.js"

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // ✅ Important addition — ensure assetlinks.json is served directly (no redirects)
  async redirects() {
    return [
      {
        source: '/.well-known/assetlinks.json',
        destination: '/.well-known/assetlinks.json',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
