/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/auth/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' }
        ]
      },
      // Add security headers for all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      }
    ]
  },

  images: {
    domains: [
      'lh3.googleusercontent.com', // Google OAuth user avatars
      'cdn1.iconfinder.com',
      'gehu.ac.in',
      'img.freepik.com',
      'images.pexels.com',
      'plus.unsplash.com',
      'images.unsplash.com',
      'res.cloudinary.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: '**.freepik.com',
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      // Add Google's OAuth domains
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      }
    ],
    minimumCacheTTL: 60, // Cache images for 60 seconds
  },

  // Required for NextAuth.js in production
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/api/auth/signin',
      }
    ]
  },

  // Enable React Strict Mode
  reactStrictMode: true,

  // For Vercel deployments
  output: 'standalone' // Recommended for production
};

export default nextConfig;