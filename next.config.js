/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true // TODO: use custom image loader like web3.storage
  },
}

module.exports = nextConfig
