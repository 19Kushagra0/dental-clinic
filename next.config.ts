import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
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
