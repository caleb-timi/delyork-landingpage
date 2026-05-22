/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./html-pages/*.html"]
  }
};

module.exports = nextConfig;
