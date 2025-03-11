const nextConfigOriginal = require('./next.config-original')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextConfigOriginal,
  redirects: undefined,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}

module.exports = nextConfig
