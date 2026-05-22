/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false,
    localePrefix: 'never',
    alternateLinks: false
  },
}

module.exports = nextConfig
