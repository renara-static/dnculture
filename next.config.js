/** @type {import('next').NextConfig} */
const nextConfig = {
  // content: ["./src/**/*.{html,js}"],
  reactStrictMode: true,
  // give output static output with index.html
  // output: 'export',
  // disable images optimization to remove bug on static page
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
