import type { NextConfig } from "next"; 

const nextConfig: NextConfig = { 
  transpilePackages: ["@repo/ui", "@repo/utils", "@repo/tokens"],
}; 

export default nextConfig;