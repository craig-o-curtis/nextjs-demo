/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = (_phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    // appDir: true, // doesn't work
    ...defaultConfig,

    // turn off for turbo
    // experimental: {
    //   optimizeCss: true,
    // },

    // route-based redirects
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/',
          permanent: true, // triggers 308
        },
      ];
    },
    // example writing robots to api folder
    async rewrites() {
      return [
        {
          source: '/robots.txt',
          destination: '/api/robots',
        },
      ];
    },
  };
  return nextConfig;
};
