/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`,
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
