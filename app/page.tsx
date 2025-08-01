'use client'

import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import LoreSection from './components/LoreSection'
import HierarchySection from './components/HierarchySection'
import MintSection from './components/MintSection'
import PalaceSection from './components/PalaceSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-bonk-gold text-4xl imperial-text animate-pulse">
          王朝
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <LoreSection />
      <HierarchySection />
      <MintSection />
      <PalaceSection />
      <FAQSection />
      <Footer />
    </main>
  )
} 