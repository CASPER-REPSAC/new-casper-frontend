/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
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
