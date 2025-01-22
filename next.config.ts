import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  // basePath: '/Dexterz',
  images: {
    unoptimized: true, // Disable image optimization if you're serving them statically
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
