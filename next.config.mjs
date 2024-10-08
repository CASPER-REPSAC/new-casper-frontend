/** @type {import('next').NextConfig} */

import unTypiaNext from '@ryoppippi/unplugin-typia/next';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'build.casper.or.kr',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: `${API_URL}/:path*`,
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

export default unTypiaNext(nextConfig, {});
