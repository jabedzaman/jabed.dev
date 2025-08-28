import * as React from 'react'
import { Header } from './_components/header'
import { Footer } from './_components/footer'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
