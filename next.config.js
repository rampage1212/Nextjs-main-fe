/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		isDev: true,
		basePath: __dirname,
	},
};

module.exports = nextConfig;
