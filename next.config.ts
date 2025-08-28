import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: { mdxRs: true },
  output: 'standalone',
  redirects: async () => {
    return [
      {
        source: '/github',
        destination: 'https://github.com/jabedzaman',
        permanent: true,
      },
      {
        source: '/git',
        destination: 'https://github.com/jabedzaman',
        permanent: true,
      },
      {
        source: '/resume',
        destination: 'https://cdn.jabed.dev/resume.pdf',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jabed.dev',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
