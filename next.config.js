/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["drive.google.com", "i.imgur.com", "links.zvapor.xyz"],
  },
};
