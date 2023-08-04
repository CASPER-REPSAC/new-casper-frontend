/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        destination: "http://build.casper.or.kr:8080/api/:path*",
        source: '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
