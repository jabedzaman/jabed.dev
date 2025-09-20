import localFont from 'next/font/local'
import './globals.css'
import { Providers } from './providers'
export { metadata } from '~/config'

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.ttf',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${satoshi.className} bg-[#fff] tracking-tight text-[#1e1e1e] antialiased dark:bg-[#111111] dark:text-[#f5f5f5]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
