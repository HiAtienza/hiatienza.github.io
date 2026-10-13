import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  // User-site Pages deploys at the domain root: no repository basePath or assetPrefix.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false
};

export default nextConfig;
