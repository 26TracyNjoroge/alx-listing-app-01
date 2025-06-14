import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Simple domain list
  },
};

export default nextConfig;