const nextConfigOriginal = require('./next.config-original')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextConfigOriginal,
  redirects: undefined,
  basePath: '/self-hosted-dify',
  assetPrefix: '/self-hosted-dify',
  publicRuntimeConfig: {
    basePath: '/self-hosted-dify',
  }
};

module.exports = nextConfig;
