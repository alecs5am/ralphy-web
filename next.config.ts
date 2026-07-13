import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  eslint: {
    // This app has no local ESLint config. TypeScript remains part of the build.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ralphy",
        permanent: true,
      },
      {
        // /templates folded into /library (issue 054 — one discovery surface,
        // no overlap). Next preserves the incoming query string on a redirect
        // by default, so a bookmarked `/templates?...` lands on the equivalent
        // library view.
        source: "/templates",
        destination: "/library",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
