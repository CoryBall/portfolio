const withTM = require('next-transpile-modules')(['@react-three/drei', 'three']);

module.exports = withTM({
  future: {
    webpack5: true,
  },
  images: {
    domains: ['coryball.sfo3.digitaloceanspaces.com']
  }
});
