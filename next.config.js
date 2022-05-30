/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
}
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withPlugins(
  [
    [withMDX, {pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],}]
  ],
  nextConfig
)
