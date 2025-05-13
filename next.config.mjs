/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/auth/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://seharsehpathi.in' },
        ],
      },
    ]
  },
     images: {
    domains: [
         'img.freepik.com',
      'images.pexels.com',
      'plus.unsplash.com',
      'images.unsplash.com',
      // Add other domains you use here
    ],
    
    // OR use remotePatterns for more control:
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: '**.freepik.com', // सभी फ्रीपिक सबडोमेन के लिए
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
    ],
  },
};

export default nextConfig;
