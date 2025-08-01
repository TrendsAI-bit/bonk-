'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const scrollToLore = () => {
    const element = document.getElementById('lore')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/Webbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-lg md:text-xl text-bonk-gold font-light tracking-wider uppercase mb-4">
              Legendary NFT Collection
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 imperial-text leading-tight"
          >
            <span className="gradient-text">BONK</span>
            <br />
            <span className="text-bonk-gold">DYNASTY</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-white/90 imperial-text mb-4">
              不疯魔，不成王
            </p>
            <p className="text-lg text-white/70 font-light">
              Without madness, there is no king
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="space-y-8 mb-12"
          >
            <p className="text-lg text-bonk-gold/90 font-medium">
              100 Unique Characters • 5 Rarity Tiers • Solana Network
            </p>
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              From humble peasants to supreme emperors, each character embodies the spirit of the Bonk Dynasty. 
              A collection that transcends mere digital art, telling stories of loyalty, chaos, and the eternal quest for memetic immortality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToLore}
              className="bg-gradient-to-r from-bonk-gold to-bonk-red text-black px-10 py-4 rounded-lg text-lg font-semibold imperial-text shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enter the Dynasty
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-bonk-gold/50 text-bonk-gold px-10 py-4 rounded-lg text-lg font-semibold imperial-text hover:bg-bonk-gold/10 transition-all duration-300"
            >
              View Collection
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-bonk-gold cursor-pointer"
            onClick={scrollToLore}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-bonk-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection 