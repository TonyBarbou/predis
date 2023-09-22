import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Providers } from "./providers";
import NavBar from "./navBar/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Predis',
  description: 'Predis, an advanced demand forecasting platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark bg-black text-white">
      <body className={inter.className}>
        <Providers>
          <NavBar/>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
