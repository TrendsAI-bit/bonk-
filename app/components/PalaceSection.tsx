'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, Scroll, Shield } from 'lucide-react'

const PalaceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const palaceFeatures = [
    {
      title: "Throne Room",
      chinese: "宝座厅",
      description: "The sacred chamber where the Bonkperor holds court and makes royal decrees.",
      chineseDesc: "邦克皇帝举行朝会和颁布皇家法令的神圣殿堂。",
      icon: "王",
      color: "from-bonk-gold to-yellow-400"
    },
    {
      title: "Library of Memes",
      chinese: "迷因图书馆",
      description: "Ancient scrolls containing the wisdom of the memeverse and prophecies of the dynasty.",
      chineseDesc: "包含迷因宇宙智慧和王朝预言的古老卷轴。",
      icon: "书",
      color: "from-bonk-red to-red-600"
    }
  ]

  const interactiveElements = [
    {
      title: "The Throne",
      chinese: "宝座",
      description: "Seat of the Bonkperor",
      chineseDesc: "邦克皇帝的宝座",
      icon: "座",
      color: "from-bonk-gold to-yellow-400"
    },
    {
      title: "Royal Decrees",
      chinese: "皇家法令",
      description: "Ancient wisdom",
      chineseDesc: "古老智慧",
      icon: "令",
      color: "from-bonk-red to-red-600"
    },
    {
      title: "Frog Guards",
      chinese: "蛙武士守卫",
      description: "Palace protectors",
      chineseDesc: "宫殿保护者",
      icon: "卫",
      color: "from-bonk-purple to-purple-600"
    }
  ]

  return (
    <section
      id="palace"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-bonk-purple/5 to-black py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/Webbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-bonk-gold imperial-text mb-6">
            Bonk Dynasty Palace
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Enter the sacred halls of the Bonk Dynasty palace
          </p>
        </motion.div>

        {/* Palace Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {palaceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                className="glass-effect rounded-3xl p-10 border border-white/10 hover:border-bonk-gold/30 transition-all duration-500 overflow-hidden"
              >
                {/* Neon Chinese character icon */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="text-3xl text-white imperial-text font-black">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Neon glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>

                <h3 className="text-2xl font-bold text-bonk-gold imperial-text mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-bonk-gold/60 text-lg imperial-text mb-6 text-center font-medium">
                  {feature.chinese}
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  {feature.description}
                </p>
                <p className="text-bonk-gold/70 imperial-text leading-relaxed text-lg">
                  {feature.chineseDesc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Throne Room */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="glass-effect rounded-3xl p-10 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-8 text-center">
            Interactive Throne Room
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactiveElements.map((element, index) => (
              <motion.div
                key={element.title}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-bonk-gold/30 transition-all duration-300 group"
              >
                {/* Neon Chinese character icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="text-2xl text-white imperial-text font-black">
                      {element.icon}
                    </div>
                  </div>
                  {/* Neon glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${element.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                
                <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-3">
                  {element.title}
                </h4>
                <p className="text-bonk-gold/60 text-sm imperial-text mb-2">
                  {element.chinese}
                </p>
                <p className="text-white/70 text-sm">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
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
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-3xl p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-bonk-gold imperial-text mb-6">
              Palace Ambience
            </h3>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Immerse yourself in the atmospheric sounds of the Bonk Dynasty palace
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-bonk-gold to-bonk-red text-black px-8 py-4 rounded-lg font-semibold imperial-text shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full mr-3 animate-pulse"></div>
                Play Palace Music
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PalaceSection 