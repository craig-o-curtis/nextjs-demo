/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = (_phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    // appDir: true, // doesn't work
    ...defaultConfig,
    // fix FOUC css flicker on route change, requires critters npm pkg
    // doesn't work on dev mode
    experimental: {
      optimizeCss: true,
    },

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
  };
  return nextConfig;
};
