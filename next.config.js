/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  reactStrictMode: false,
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
  async redirects() {
    return [
      {
        source: '/boards/:board_type',
        destination: '/boards/:board_type/list/1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
