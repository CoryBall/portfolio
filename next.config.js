const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')(['@react-three/drei', 'three']);
const runtimeCaching = require('next-pwa/cache')


module.exports = withTM(withPWA({
  future: {
    webpack5: true,
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: ['coryball.sfo3.digitaloceanspaces.com']
  }
}));
