// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/old-listings',
          destination: '/listings',
          permanent: true,
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/api/listings',
          destination: '/api/new-listings',
        },
      ];
    },
  };
  