import { Metadata } from 'next'
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"

import './styles.css'
import { getPayload } from '@/lib/payload'
import { Providers } from '@/components/Providers'
import { ThemeToggle } from '@/components/ThemeToggle'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload()
  const profile = await payload.findGlobal({ slug: "profile", depth: 1 })
  const profileImageUrl = (typeof profile.photo !== "number" ? profile.photo?.url : null) ?? null

  return {
    title: `Resume: ${profile.name} - ${profile.profession}`,
    description: "Software engineer passionate about technology, innovation, and software development.",
    authors: [{ name: profile.name }],
    creator: profile.name,
    publisher: profile.name,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      title: `Resume: ${profile.name} - ${profile.profession}`,
      description: "Software engineer passionate about technology, innovation, and software development.",
      siteName: `${profile.name} - ${profile.profession}`,
      locale: 'en_US',
      type: 'profile',
      images: profileImageUrl ? [
        {
          url: profileImageUrl,
          width: 512,
          height: 512,
          alt: `${profile.name} - ${profile.profession}`
        }
      ] : []
    },
    robots: {
      index: false,
      follow: false,
    },
    themeColor: '#c0351f',
    viewport: 'width=device-width, initial-scale=1',
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeToggle />
          <main>{children}</main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
