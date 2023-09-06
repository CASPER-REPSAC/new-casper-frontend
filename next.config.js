/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        destination: 'http://localhost:8080/api/:path*',
        source: '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
