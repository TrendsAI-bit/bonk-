'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Clock, Zap, Crown } from 'lucide-react'

const MintSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [minted, setMinted] = useState(0)
  const [isMinting, setIsMinting] = useState(false)

  // Set launch date (example: 7 days from now)
  const launchDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const handleMint = async () => {
    setIsMinting(true)
    // Simulate minting process
    setTimeout(() => {
      setMinted(prev => prev + 1)
      setIsMinting(false)
    }, 2000)
  }

  const mintPrice = "0.1 SOL"
  const maxSupply = 100

  return (
    <section
      id="mint"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-bonk-red/10 to-black py-20 relative overflow-hidden"
    >
      {/* Background ritual circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-bonk-gold rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-bonk-red rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-bonk-purple rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-bonk-gold imperial-text mb-6">
            铸造仪式
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Only the chosen may mint. Only the brave may burn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mint Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 royal-border">
              <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-6">
                Mint Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Price:</span>
                  <span className="text-bonk-gold font-bold">{mintPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Supply:</span>
                  <span className="text-bonk-gold font-bold">{minted}/{maxSupply}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Network:</span>
                  <span className="text-bonk-gold font-bold">Solana</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Max per wallet:</span>
                  <span className="text-bonk-gold font-bold">5</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Progress</span>
                  <span>{Math.round((minted / maxSupply) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(minted / maxSupply) * 100}%` }}
                    className="bg-gradient-to-r from-bonk-gold to-bonk-red h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Ritual Info */}
            <div className="glass-effect rounded-2xl p-8 royal-border">
              <h3 className="text-2xl font-bold text-bonk-gold imperial-text mb-4">
                The Mint Ritual
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Only 100 NFTs forged under the Red Moon of BONKZHAO shall ever exist. 
                Each mint is a sacred ritual, connecting you to the ancient memeverse 
                and granting you a unique position in the Bonk Dynasty.
              </p>
            </div>
          </motion.div>

          {/* Countdown and Mint Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Countdown */}
            <div className="glass-effect rounded-2xl p-8 royal-border text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-bonk-gold mr-2" size={24} />
                <h3 className="text-2xl font-bold text-bonk-gold imperial-text">
                  Launch Countdown
                </h3>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bonk-gold">{timeLeft.days}</div>
                  <div className="text-white/60 text-sm">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bonk-gold">{timeLeft.hours}</div>
                  <div className="text-white/60 text-sm">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bonk-gold">{timeLeft.minutes}</div>
                  <div className="text-white/60 text-sm">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bonk-gold">{timeLeft.seconds}</div>
                  <div className="text-white/60 text-sm">Seconds</div>
                </div>
              </div>
            </div>

            {/* Mint Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMint}
                disabled={isMinting || minted >= maxSupply}
                className={`w-full py-6 px-8 rounded-2xl text-2xl font-bold imperial-text royal-border transition-all duration-300 ${
                  isMinting || minted >= maxSupply
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-bonk-gold to-bonk-red text-black hover:animate-glow imperial-shadow'
                }`}
              >
                {isMinting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-2"></div>
                    Minting...
                  </div>
                ) : minted >= maxSupply ? (
                  <div className="flex items-center justify-center">
                    <Crown className="mr-2" size={24} />
                    Sold Out
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Zap className="mr-2" size={24} />
                    Mint Now
                  </div>
                )}
              </motion.button>
              
              <p className="text-white/60 text-sm mt-4">
                Connect your wallet to begin the ritual
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Dynasty Mechanics Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-8 text-center">
            Dynasty Mechanics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Palace Reveals", desc: "Lore unlocks as holders rise in rank", icon: "🏮" },
              { title: "Scroll Drops", desc: "Airdropped treasures of prophecy and power", icon: "🎖️" },
              { title: "Bonkocracy", desc: "Holders vote on royal decrees", icon: "🧠" },
              { title: "Warrior Trials", desc: "Frog PvP coming soon... maybe", icon: "🐸" }
            ].map((mechanic, index) => (
              <motion.div
                key={mechanic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{mechanic.icon}</div>
                <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-2">
                  {mechanic.title}
                </h4>
                <p className="text-white/70 text-sm">
                  {mechanic.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MintSection 