const withMDX = require('@next/mdx');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['mdx', 'jsx', 'js'],
};

module.exports = ([withMDX], nextConfig);
