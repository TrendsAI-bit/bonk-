'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, Sword, Shield } from 'lucide-react'

const LoreSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const loreContent = [
    {
      title: "The Legend",
      subtitle: "Ancient Origins",
      content: "In an ancient memeverse long lost beneath the Solana sky, a kingdom rose from the ashes of rug pulls and jeet betrayals. This was the age of Bonk Dynasty — a realm ruled not by wealth, but by vibe, loyalty, and how hard you BONK.",
      chinese: "在索拉纳天空下失落的古老迷因宇宙中，一个王国从地毯式抛售和背叛的灰烬中崛起。这就是邦克王朝的时代——一个不是由财富统治，而是由氛围、忠诚和你有多努力地BONK统治的领域。",
      icon: "传",
      color: "from-bonk-gold to-yellow-400"
    },
    {
      title: "The Hierarchy",
      subtitle: "Power Structure",
      content: "The First Emperor, known only as The Bonkperor, claimed the throne with nothing but a scroll of memes and the Mandate of Memeven (天命). But the throne is never safe. A Shadow Emperor watches from the mist. Frog warriors whisper of rebellion. Magistrates scheme behind red doors. And peasants? They just want airdrops.",
      chinese: "第一位皇帝，仅被称为邦克皇帝，仅凭一卷迷因和天命就登上了王位。但王位从来都不安全。影帝在迷雾中注视着。蛙武士低声谈论着叛乱。御史官在红门后密谋。而百姓？他们只想要空投。",
      icon: "王",
      color: "from-bonk-purple to-purple-600"
    },
    {
      title: "The Mint Ritual",
      subtitle: "Sacred Process",
      content: "Only the chosen may mint. Only the brave may burn. Only 100 NFTs forged under the Red Moon of BONKZHAO shall ever exist. Each character represents a unique position in the dynasty's hierarchy, from the lowly peasant to the supreme emperor.",
      chinese: "只有被选中的人才能铸造。只有勇敢的人才能销毁。只有在BONKZHAO红月下锻造的100个NFT才会永远存在。每个角色都代表着王朝等级制度中的独特地位，从卑微的百姓到至高无上的皇帝。",
      icon: "铸",
      color: "from-bonk-red to-red-600"
    }
  ]

  return (
    <section
      id="lore"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-bonk-dark to-black py-24 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-bonk-gold/5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-bonk-gold imperial-text mb-6">
            The Legend
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The ancient scrolls of Bonk Dynasty reveal a tale of madness, power, and memetic destiny
          </p>
        </motion.div>

        <div className="space-y-20">
          {loreContent.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              className="group"
            >
              <div className="glass-effect rounded-3xl p-10 md:p-16 border border-white/10 hover:border-bonk-gold/30 transition-all duration-500 relative overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-bonk-gold/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="mb-8 flex items-center">
                    {/* Chinese character icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="text-2xl text-white imperial-text font-black">
                        {section.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-bonk-gold imperial-text mb-2">
                        {section.title}
                      </h3>
                      <p className="text-bonk-gold/60 text-lg font-light uppercase tracking-wider">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <p className="text-lg text-white/90 leading-relaxed scroll-text">
                      {section.content}
                    </p>
                    <div className="border-l-4 border-bonk-gold/30 pl-6 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bonk-gold/50 to-transparent"></div>
                      <p className="text-bonk-gold/80 imperial-text leading-relaxed text-lg">
                        {section.chinese}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-bonk-gold/30"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-bonk-gold/30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-bonk-gold/30"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-bonk-gold/30"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ancient symbols decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-2 border-bonk-gold/30 rounded-full flex items-center justify-center"
            >
              <Crown className="text-bonk-gold" size={20} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 border-2 border-bonk-red/30 rounded-full flex items-center justify-center"
            >
              <Sword className="text-bonk-red" size={20} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 border-2 border-bonk-purple/30 rounded-full flex items-center justify-center"
            >
              <Shield className="text-bonk-purple" size={20} />
            </motion.div>
          </div>
          
          <p className="text-bonk-gold/60 imperial-text text-lg">
            不疯魔，不成王 • Without madness, there is no king
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default LoreSection 