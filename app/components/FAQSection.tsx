'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Scroll } from 'lucide-react'

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the Bonk Dynasty?",
      answer: "The Bonk Dynasty is a legendary NFT collection of 100 unique characters spanning from common peasants to mythical emperors. Each character represents a unique position in the dynasty's hierarchy, telling a story of loyalty, chaos, and the eternal quest for memetic immortality.",
      chinese: "邦克王朝是一个传奇的NFT收藏品，包含100个独特角色，从普通百姓到神话皇帝。每个角色都代表着王朝等级制度中的独特地位，讲述着忠诚、混乱和对迷因永生的永恒追求的故事。"
    },
    {
      question: "How many NFTs are in the collection?",
      answer: "The collection consists of exactly 100 NFTs, each with unique traits and rarity levels. The distribution includes 2 Mythic, 6 Legendary, 20 Rare, and 76 Common characters.",
      chinese: "该收藏品包含正好100个NFT，每个都有独特的特征和稀有度等级。分布包括2个神话级、6个传说级、20个稀有级和76个普通角色。"
    },
    {
      question: "What are the different rarity tiers?",
      answer: "The collection features 5 tiers: The Bonkperor (Mythic, 1 of 1), The Shadow Emperor (Mythic, 1 of 1), Frog Warriors (Legendary, 6 total), Court Magistrates (Rare, 20 total), and Dog Royal Peasants (Common, 76 total).",
      chinese: "该收藏品包含5个等级：邦克皇帝（神话级，1个），影帝（神话级，1个），蛙武士（传说级，共6个），御史官（稀有级，共20个），狗百姓（普通级，共76个）。"
    },
    {
      question: "What is the mint price?",
      answer: "The mint price is 0.1 SOL per NFT. Each wallet can mint up to 5 NFTs during the public sale.",
      chinese: "每个NFT的铸造价格为0.1 SOL。每个钱包在公开销售期间最多可以铸造5个NFT。"
    },
    {
      question: "What utilities do the NFTs provide?",
      answer: "Holders gain access to exclusive community features including Palace Reveals (lore unlocks), Scroll Drops (airdropped treasures), Bonkocracy (voting rights), and future Warrior Trials (PvP features).",
      chinese: "持有者可以获得独家社区功能，包括宫殿揭示（传说解锁）、卷轴掉落（空投宝藏）、邦克民主（投票权）和未来的武士试炼（PvP功能）。"
    },
    {
      question: "When will the mint launch?",
      answer: "The mint will launch under the Red Moon of BONKZHAO. Stay tuned to our social media channels for the exact date and time.",
      chinese: "铸造将在BONKZHAO红月下启动。请关注我们的社交媒体频道获取确切的日期和时间。"
    },
    {
      question: "What blockchain is this on?",
      answer: "The Bonk Dynasty collection is built on Solana, chosen for its speed, low fees, and vibrant NFT ecosystem.",
      chinese: "邦克王朝收藏品建立在Solana上，选择它是因为其速度、低费用和充满活力的NFT生态系统。"
    },
    {
      question: "What does '不疯魔，不成王' mean?",
      answer: "This ancient proverb translates to 'Without madness, there is no king.' It represents the core philosophy of the Bonk Dynasty - that true greatness comes from embracing chaos and the unpredictable nature of the memeverse.",
      chinese: "这句古老的谚语翻译为'不疯魔，不成王'。它代表了邦克王朝的核心哲学——真正的伟大来自于拥抱混乱和迷因宇宙的不可预测性。"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-bonk-dark to-black py-24 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-bonk-gold/5"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <Scroll className="text-bonk-gold mr-4" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold text-bonk-gold imperial-text">
              Royal Decrees
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Imperial edicts and answers to common questions about the Bonk Dynasty
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-effect rounded-2xl border border-white/10 hover:border-bonk-gold/30 overflow-hidden transition-all duration-300"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-bonk-gold to-bonk-red rounded-full flex items-center justify-center mr-6">
                      <span className="text-black font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-bonk-gold imperial-text">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-bonk-gold"
                  >
                    {openFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 space-y-6">
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-white/90 leading-relaxed mb-6 text-lg">
                        {faq.answer}
                      </p>
                      <div className="border-l-4 border-bonk-gold/30 pl-6">
                        <p className="text-bonk-gold/80 imperial-text leading-relaxed text-lg">
                          {faq.chinese}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-3xl p-10 border border-white/10">
            <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-6">
              Still Have Questions?
            </h3>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Join our community to learn more about the Bonk Dynasty
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-bonk-gold to-bonk-red text-black px-8 py-4 rounded-lg font-semibold imperial-text shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Discord
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-bonk-gold/50 text-bonk-gold px-8 py-4 rounded-lg font-semibold imperial-text hover:bg-bonk-gold/10 transition-all duration-300"
              >
                Follow Twitter
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection 