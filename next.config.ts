import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static exports
  basePath: '/Paper-Trails',
  images: {
    unoptimized: true, // Required for static export
  },
  reactCompiler: true,
};



module.exports = nextConfig;


export default nextConfig;
