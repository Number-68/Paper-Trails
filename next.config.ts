// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };




// export default nextConfig;

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  basePath: isProd ? "/Paper-Trails" : "",
  assetPrefix: isProd ? "/Paper-Trails/" : "",
};

module.exports = nextConfig;
