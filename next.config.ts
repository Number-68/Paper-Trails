import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Paper-Trails',  
  distDir: 'out',         
  images: {
    unoptimized: true,
  },
};

export default nextConfig;