/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["images.pexels.com", "zurihealthadmin.com"] },
}

module.exports = nextConfig
