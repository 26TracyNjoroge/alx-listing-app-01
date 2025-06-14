import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
      }
    ]
  },
};

export default nextConfig;