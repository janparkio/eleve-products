/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_SERVICE_ACCOUNT_CREDENTIALS:
      process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS,
  },
  output: 'export',
};

module.exports = nextConfig;