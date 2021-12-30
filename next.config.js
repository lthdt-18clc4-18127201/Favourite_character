const withImages = require('next-images')
const path = require('path')
const withPlugins = require('next-compose-plugins')

//const withSass = require('@zeit/next-sass')

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  },
  reactStrictMode: true,
}

const nextConfig = {
  images: {
    domains: ['rickandmortyapi.com']
  }
}

module.exports = withPlugins(
  //withSass(),
  [[withImages]], 
  nextConfig
)