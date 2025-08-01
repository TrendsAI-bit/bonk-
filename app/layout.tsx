import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonk Dynasty - 不疯魔，不成王',
  description: 'A legendary collection of Bonk Dynasty characters spanning from common peasants to mythical emperors. Without madness, there is no king.',
  keywords: 'Bonk, NFT, Dynasty, Solana, Meme, Collection',
  authors: [{ name: 'Bonk Dynasty' }],
  openGraph: {
    title: 'Bonk Dynasty - 不疯魔，不成王',
    description: 'A legendary collection of Bonk Dynasty characters spanning from common peasants to mythical emperors.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-container">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 