import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 70, 75, 85],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: "/direction-01",
        destination: "/",
        permanent: true,
      },
      {
        source: "/direction-02",
        destination: "/",
        permanent: true,
      },
      {
        source: "/direction-03",
        destination: "/",
        permanent: true,
      },
      {
        source: "/direction-04",
        destination: "/",
        permanent: true,
      },
      {
        source: "/direction-05",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
