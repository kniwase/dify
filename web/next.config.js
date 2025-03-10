const nextConfigOriginal = require('./next.config-original')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextConfigOriginal,
  basePath: '/self-hosted-dify',
  redirects: undefined,
};

module.exports = nextConfig;
