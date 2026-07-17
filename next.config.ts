import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sirve la versión clásica (vanilla) alojada en public/classic bajo /classic.
  async rewrites() {
    return [{ source: "/classic", destination: "/classic/index.html" }];
  },
};

export default nextConfig;
