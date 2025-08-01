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
      className="min-h-screen bg-gradient-to-b from-bonk-dark to-black py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-bonk-gold imperial-text mb-6">
            The Hierarchy
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From humble peasants to supreme emperors, discover your place in the dynasty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                className="glass-effect rounded-2xl p-8 h-full border border-white/10 hover:border-bonk-gold/30 transition-all duration-500"
              >
                {/* Rarity Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${tier.color}`}>
                    {tier.rarity}
                  </span>
                  <span className="text-bonk-gold text-sm font-semibold">
                    {tier.count} NFT{tier.count > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-2xl font-bold text-white imperial-text mb-3"
                >
                  {tier.name}
                </motion.h3>
                <p className="text-bonk-gold text-lg imperial-text mb-6">
                  {tier.chinese}
                </p>

                {/* Description */}
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  {tier.description}
                </p>
                <p className="text-bonk-gold/70 text-sm imperial-text leading-relaxed mb-6">
                  {tier.chineseDesc}
                </p>

                {/* ID Range */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60 text-xs scroll-text">
                    IDs: {tier.ids.length <= 6 ? tier.ids.join(', ') : `${tier.ids[0]}-${tier.ids[tier.ids.length-1]}`}
                  </p>
                </div>

                {/* Animated character placeholder */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-6 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-lg flex items-center justify-center border border-white/10"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-bonk-gold/20 to-bonk-red/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-bonk-gold/60 rounded-full"></div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-20 glass-effect rounded-3xl p-10 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-8 text-center">
            Collection Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-bonk-gold mb-2">100</div>
              <div className="text-white/60 text-sm font-medium">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bonk-gold mb-2">2</div>
              <div className="text-white/60 text-sm font-medium">Mythic</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bonk-gold mb-2">6</div>
              <div className="text-white/60 text-sm font-medium">Legendary</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bonk-gold mb-2">20</div>
              <div className="text-white/60 text-sm font-medium">Rare</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HierarchySection 