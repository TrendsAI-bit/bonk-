'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const HierarchySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const tiers = [
    {
      name: "The Bonkperor",
      chinese: "邦克皇帝",
      rarity: "Mythic",
      count: 1,
      ids: [6],
      color: "from-bonk-gold to-yellow-400",
      description: "The one true ruler. Mythical, majestic, and dangerously based.",
      chineseDesc: "真正的统治者。神话般的，威严的，危险地基于。"
    },
    {
      name: "The Shadow Emperor",
      chinese: "影帝",
      rarity: "Mythic",
      count: 1,
      ids: [7],
      color: "from-bonk-purple to-purple-600",
      description: "Puppetmaster of the realm. Moves silently. Mints loudly.",
      chineseDesc: "领域的傀儡师。静默移动。大声铸造。"
    },
    {
      name: "Frog Warriors",
      chinese: "蛙武士",
      rarity: "Legendary",
      count: 6,
      ids: [8, 9, 10, 11, 12, 13],
      color: "from-green-400 to-green-600",
      description: "Martial protectors of the dynasty. Strike fast. Leap harder.",
      chineseDesc: "王朝的武术保护者。快速出击。更努力地跳跃。"
    },
    {
      name: "Court Magistrates",
      chinese: "御史官",
      rarity: "Rare",
      count: 20,
      ids: Array.from({length: 20}, (_, i) => i + 81),
      color: "from-bonk-red to-red-600",
      description: "Scholars of the scroll. Keepers of chaos. Report jeets daily.",
      chineseDesc: "卷轴的学者。混乱的守护者。每日报告背叛者。"
    },
    {
      name: "Dog Royal Peasants",
      chinese: "狗百姓",
      rarity: "Common",
      count: 76,
      ids: [...Array.from({length: 5}, (_, i) => i + 1), ...Array.from({length: 67}, (_, i) => i + 14)],
      color: "from-gray-400 to-gray-600",
      description: "Loyal, meme-trained, and always barking for airdrops.",
      chineseDesc: "忠诚的，迷因训练的，总是为空投而吠叫。"
    }
  ]

  return (
    <section
      id="hierarchy"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-bonk-dark to-black py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-bonk-gold imperial-text mb-6">
            等级制度
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From humble peasants to supreme emperors, discover your place in the dynasty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-effect rounded-2xl p-6 h-full royal-border hover:imperial-shadow transition-all duration-300"
              >
                {/* Rarity Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${tier.color}`}>
                    {tier.rarity}
                  </span>
                  <span className="text-bonk-gold text-sm font-bold">
                    {tier.count} NFT{tier.count > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-white imperial-text mb-2"
                >
                  {tier.name}
                </motion.h3>
                <p className="text-bonk-gold text-lg imperial-text mb-4">
                  {tier.chinese}
                </p>

                {/* Description */}
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <p className="text-bonk-gold/70 text-sm imperial-text leading-relaxed">
                  {tier.chineseDesc}
                </p>

                {/* ID Range */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/60 text-xs scroll-text">
                    IDs: {tier.ids.length <= 6 ? tier.ids.join(', ') : `${tier.ids[0]}-${tier.ids[tier.ids.length-1]}`}
                  </p>
                </div>

                {/* Animated character placeholder */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mt-4 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-lg flex items-center justify-center"
                >
                  <span className="text-4xl opacity-50">
                    {tier.name === "The Bonkperor" ? "👑" :
                     tier.name === "The Shadow Emperor" ? "👤" :
                     tier.name === "Frog Warriors" ? "🐸" :
                     tier.name === "Court Magistrates" ? "📜" : "🐕"}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-effect rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-6 text-center">
            Collection Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-bonk-gold">100</div>
              <div className="text-white/60 text-sm">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bonk-gold">2</div>
              <div className="text-white/60 text-sm">Mythic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bonk-gold">6</div>
              <div className="text-white/60 text-sm">Legendary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bonk-gold">20</div>
              <div className="text-white/60 text-sm">Rare</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HierarchySection 