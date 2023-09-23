import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Providers } from "./providers";
import NavBar from "./navBar/page";
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider>
      <html lang="en" className="dark bg-black text-white">
        <body className={inter.className}>
          <Providers>
            <NavBar/>
            {children}
            <Analytics />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
