import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Disable the canvas module
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: false, // Add this line to disable canvas
    };

    return config; // Return the modified config
  },
};

export default nextConfig;
