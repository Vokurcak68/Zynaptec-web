/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Force fresh build every time
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
}

module.exports = nextConfig
