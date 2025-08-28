import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'gallery',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
