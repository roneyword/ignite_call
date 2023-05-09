/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: true,
    pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  },
};

module.exports = nextConfig;
