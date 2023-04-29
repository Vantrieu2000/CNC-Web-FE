/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
    },
    i18n: {
        locales: ['jp'],
        defaultLocale: 'jp',
    },
};

module.exports = nextConfig;
