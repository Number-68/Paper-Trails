import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};


/* Removes fast refresh */
module.exports = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: false,
  },
};

export default nextConfig;
