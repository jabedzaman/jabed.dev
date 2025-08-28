import { Urbanist } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
export { metadata } from '~/config'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${urbanist.className} bg-[#fff] tracking-tight text-[#1e1e1e] antialiased dark:bg-[#111111] dark:text-[#f5f5f5]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
