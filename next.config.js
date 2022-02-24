const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = withImages(nextConfig);
