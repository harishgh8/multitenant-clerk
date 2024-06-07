/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: ["fakeimg.pl", "image.tmdb.org"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
