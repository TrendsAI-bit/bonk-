'use client'

import { motion } from 'framer-motion'
import { Twitter, MessageCircle, Crown, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Discord', icon: MessageCircle, url: '#', color: 'hover:text-purple-400' },
  ]

  return (
    <footer className="bg-gradient-to-t from-black to-bonk-dark py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-t from-bonk-gold/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Dynasty Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-bonk-gold to-bonk-red rounded-full flex items-center justify-center mr-4 imperial-shadow">
                <Crown className="text-black" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-bonk-gold imperial-text">
                  Bonk Dynasty
                </h3>
                <p className="text-white/60 text-sm">
                  不疯魔，不成王
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A legendary collection of 100 NFTs spanning from common peasants to mythical emperors. 
              Each character tells a story of loyalty, chaos, and the eternal quest for memetic immortality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Collection', href: '#hierarchy' },
                { name: 'Lore', href: '#lore' },
                { name: 'Mint', href: '#mint' },
                { name: 'Palace', href: '#palace' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="block text-white/70 hover:text-bonk-gold transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-6">
              Join the Dynasty
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-gradient-to-r from-bonk-gold/20 to-bonk-red/20 rounded-full border border-bonk-gold/30 text-bonk-gold transition-all duration-200 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              Follow us for updates and community events
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Heart className="text-bonk-red" size={16} />
              <span>Built with love for the Bonk community</span>
            </div>
            
            <div className="flex items-center space-x-4 text-white/60 text-sm">
              <span>© {currentYear} Bonk Dynasty</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </motion.div>

        {/* Imperial Decree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="glass-effect rounded-xl p-6 royal-border">
            <h5 className="text-bonk-gold imperial-text font-bold mb-2">
              Imperial Decree
            </h5>
            <p className="text-white/80 text-sm leading-relaxed">
              "In the name of the Bonkperor, we declare this dynasty eternal. 
              May the memes flow freely, and may chaos reign supreme. 
              Long live the Bonk Dynasty!"
            </p>
            <p className="text-bonk-gold/70 imperial-text text-sm mt-2">
              "以邦克皇帝的名义，我们宣布这个王朝永恒。愿迷因自由流淌，愿混乱至高无上。邦克王朝万岁！"
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 