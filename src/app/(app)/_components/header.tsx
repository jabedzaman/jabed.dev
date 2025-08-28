'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TextEffect } from '~/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.jpg"
          className="h-16 w-16 rounded-full object-cover"
          alt="profile"
          width={200}
          height={200}
          priority
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Jabed
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            full-stack dev
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
