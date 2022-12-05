
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true // TODO: use custom image loader like web3.storage
  },

  webpack: (config) => {
    // import files from the sample-code dir as source (don't evaluate on import)
    // note: raw-loader is deprecated in webpack 5, but the recommended replacement
    // [asset modules](https://webpack.js.org/guides/asset-modules/) gives you the
    // post-processed (babel or SWC) output instead of the original source when using
    // `type: 'asset/source'`.
    // If anyone finds a way to get the raw source using an asset module, please remove
    // this raw-loader config.
    config.module.rules.push({
      test: /.*sample-code.*/i,
      use: 'raw-loader'
    })
    return config
  },
}

module.exports = nextConfig
