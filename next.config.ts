import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Compress responses
  compress: true,
  // Optimize production build
  productionBrowserSourceMaps: false,
  // Enable modern module/nomodule pattern
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Power optimization for script loading
  poweredByHeader: false,
};

export default nextConfig;
