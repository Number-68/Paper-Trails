import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Paper-Trails',   // double-check this matches your repo name
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;