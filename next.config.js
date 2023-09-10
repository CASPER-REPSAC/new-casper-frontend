/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        destination: 'http://localhost:8080/api/:path*',
        source: '/api/:path*',
      },
      {
        source: '/admin/users/log',
        destination: '/admin/users/log/1',
      },
      {
        source: '/admin/users/list',
        destination: '/admin/users/list/1',
      },
      {
        source: '/admin',
        destination: '/admin/dashboard',
      },
    ];
  },
};

module.exports = nextConfig;
