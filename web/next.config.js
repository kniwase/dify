const nextConfigOriginal = require('./next.config-original')

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextConfigOriginal,
  redirects: undefined,
  basePath,
  assetPrefix: basePath,
}

module.exports = nextConfig
