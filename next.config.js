/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: false, // Disable strict mode to reduce hydration warnings
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    // we use biome for linting
    ignoreDuringBuilds: true,
  },
  typescript: {
    // we'll run tsc separately
    ignoreBuildErrors: true,
  },
  // Suppress hydration warnings in console for development
  onDemandEntries: {
    // Don't remove pages from memory
    maxInactiveAge: 1000 * 60 * 60
  }
};

module.exports = nextConfig;
