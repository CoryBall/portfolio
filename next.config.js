/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  webpack5: true,
  images: {
    domains: ['https://cdn.coryball.dev'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
