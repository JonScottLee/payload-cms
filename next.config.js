require('dotenv').config();
const { sizes } = require('./cms/blocks/image/sizes');

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
};
