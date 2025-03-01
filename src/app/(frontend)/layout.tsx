import React from 'react'
import './styles.css'

export const metadata = {
  description: "Software engineer passionate about technology, innovation, and software development.",
  title: 'Curriculum vitae Luboš Matejčík – Software Engineer',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
