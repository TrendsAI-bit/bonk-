'use client'

import { motion } from 'framer-motion'
import { Twitter, Crown, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-bonk-dark py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-bonk-gold/5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Dynasty Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-bonk-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-bonk-gold/30">
              <Crown className="text-black" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-bonk-gold imperial-text mt-4">
              Bonk Dynasty
            </h3>
            <p className="text-white/60 mt-2">
              不疯魔，不成王 • Without madness, there is no king
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center space-x-8 mb-12"
          >
            <motion.a
              href="https://x.com/theBonkdynasty"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-r from-bonk-gold to-yellow-400 rounded-full flex items-center justify-center text-black hover:shadow-lg hover:shadow-bonk-gold/50 transition-all duration-300"
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex items-center justify-center space-x-2 text-white/60">
              <Heart className="text-bonk-red" size={16} />
              <span className="text-sm">
                © 2024 Bonk Dynasty. All rights reserved.
              </span>
            </div>
            <p className="text-xs text-white/40 mt-2">
              Built with imperial precision for the memeverse
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 