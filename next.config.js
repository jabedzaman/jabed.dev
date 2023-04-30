const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  experimental: { appDir: true },
  crossOrigin: 'anonymous',
  redirects: () => [
    {
      source: '/github',
      destination: '/api/redirects/github',
      permanent: true,
    },
    {
      source: '/twitter',
      destination: '/api/redirects/twitter',
      permanent: true,
    },
    {
      source: '/linkedin',
      destination: '/api/redirects/linkedin',
      permanent: true,
    },
    {
      source: '/youtube',
      destination: '/api/redirects/youtube',
      permanent: true,
    },
    {
      source: '/demn',
      destination: '/api/redirects/demn', 
      permanent: true,
    }
  ],
})