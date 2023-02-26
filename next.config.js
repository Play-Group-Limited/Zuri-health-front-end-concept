/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.pexels.com",
      "zurihealthadmin.com",
      "zuri-health-space.fra1.cdn.digitaloceanspaces.com",
    ],
  },
}


module.exports = {
  ...nextConfig,
  images: {
    domains: ['zurihealthadmin.com'],
  },
};