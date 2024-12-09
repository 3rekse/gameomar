/** @type {import("next").NextConfig} */
module.exports = {
  output: "standalone",
  env: {
    AUTH_SECRET: 'your-secret-key',
  },
  reactStrictMode: true,
  // Altre configurazioni...
};