/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		isDev: true,
		basePath: __dirname.replaceAll("\\", "/"),
	},
};

module.exports = nextConfig;
