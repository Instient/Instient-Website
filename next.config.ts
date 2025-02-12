import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-api.instient.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
