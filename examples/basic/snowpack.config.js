/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  mount: {
    './src': '/',
  },
  plugins: ['@snowpack/plugin-typescript', 'snowpack-plugin-sass'],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2017',
  },
  packageOptions: {
    types: true,
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    sourcemap: true,
  },
}
