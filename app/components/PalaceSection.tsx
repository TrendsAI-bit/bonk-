'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, Scroll, Sword, Shield } from 'lucide-react'

const PalaceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const palaceFeatures = [
    {
      icon: Crown,
      title: "Throne Room",
      description: "The sacred chamber where the Bonkperor holds court and makes royal decrees.",
      chinese: "宝座室 - 邦克皇帝举行朝会和颁布皇家法令的神圣殿堂。"
    },
    {
      icon: Scroll,
      title: "Library of Memes",
      description: "Ancient scrolls containing the wisdom of the memeverse and prophecies of the dynasty.",
      chinese: "迷因图书馆 - 包含迷因宇宙智慧和王朝预言的古代卷轴。"
    },
    {
      icon: Sword,
      title: "Warrior's Hall",
      description: "Training grounds where Frog Warriors perfect their martial arts and combat techniques.",
      chinese: "武士大厅 - 蛙武士完善武术和战斗技巧的训练场。"
    },
    {
      icon: Shield,
      title: "Council Chamber",
      description: "Where Court Magistrates gather to discuss matters of state and maintain order.",
      chinese: "议事厅 - 御史官聚集讨论国家事务和维护秩序的地方。"
    }
  ]

  return (
    <section
      id="palace"
      ref={ref}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/Webbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-bonk-gold rounded-full"
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
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Animated columns */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-bonk-gold/50 to-transparent"></div>
        <div className="absolute right-10 top-0 bottom-0 w-1 bg-gradient-to-b from-bonk-gold/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-bonk-gold imperial-text mb-6">
            宫殿
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Enter the sacred halls of the Bonk Dynasty palace
          </p>
        </motion.div>

        {/* Palace Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {palaceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect rounded-2xl p-8 royal-border hover:imperial-shadow transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-bonk-gold to-bonk-red rounded-lg mr-4">
                    <feature.icon className="text-black" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-bonk-gold imperial-text">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-bonk-gold/70 imperial-text leading-relaxed">
                  {feature.chinese}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Throne Room */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 royal-border"
        >
          <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-6 text-center">
            Interactive Throne Room
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Throne */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-bonk-gold/20 to-transparent rounded-xl border border-bonk-gold/30"
            >
              <div className="text-6xl mb-4">👑</div>
              <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-2">
                The Throne
              </h4>
              <p className="text-white/70 text-sm">
                Seat of the Bonkperor
              </p>
            </motion.div>

            {/* Scroll */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-bonk-red/20 to-transparent rounded-xl border border-bonk-red/30"
            >
              <div className="text-6xl mb-4">📜</div>
              <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-2">
                Royal Decrees
              </h4>
              <p className="text-white/70 text-sm">
                Ancient wisdom
              </p>
            </motion.div>

            {/* Warriors */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-bonk-purple/20 to-transparent rounded-xl border border-bonk-purple/30"
            >
              <div className="text-6xl mb-4">🐸</div>
              <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-2">
                Frog Guards
              </h4>
              <p className="text-white/70 text-sm">
                Palace protectors
              </p>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm max-w-2xl mx-auto">
              The palace is alive with the energy of the memeverse. Every corner holds secrets, 
              every hall echoes with the whispers of ancient prophecies. This is where the fate 
              of the Bonk Dynasty is decided.
            </p>
          </div>
        </motion.div>

        {/* Music/Ambient Sound Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 royal-border">
            <h3 className="text-2xl font-bold text-bonk-gold imperial-text mb-4">
              Palace Ambience
            </h3>
            <p className="text-white/80 mb-6">
              Immerse yourself in the atmospheric sounds of the Bonk Dynasty palace
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-bonk-gold to-bonk-red text-black px-6 py-3 rounded-lg font-bold imperial-text"
            >
              🎵 Play Palace Music
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PalaceSection 