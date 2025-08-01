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

  const mechanics = [
    { 
      title: "Palace Reveals", 
      desc: "Lore unlocks as holders rise in rank", 
      chinese: "宫殿揭示",
      icon: "宫",
      color: "from-bonk-gold to-yellow-400"
    },
    { 
      title: "Scroll Drops", 
      desc: "Airdropped treasures of prophecy and power", 
      chinese: "卷轴掉落",
      icon: "卷",
      color: "from-bonk-red to-red-600"
    },
    { 
      title: "Bonkocracy", 
      desc: "Holders vote on royal decrees", 
      chinese: "邦克民主",
      icon: "民",
      color: "from-bonk-purple to-purple-600"
    },
    { 
      title: "Warrior Trials", 
      desc: "Frog PvP coming soon... maybe", 
      chinese: "武士试炼",
      icon: "武",
      color: "from-green-400 to-green-600"
    }
  ]

  return (
    <section
      id="mint"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-bonk-red/5 to-black py-24 relative overflow-hidden"
    >
      {/* Background ritual circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-bonk-gold/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-bonk-red/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-bonk-purple/20 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-bonk-gold imperial-text mb-6">
            The Mint Ritual
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Only the chosen may mint. Only the brave may burn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mint Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-3xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-8">
                Mint Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium">Price:</span>
                  <span className="text-bonk-gold font-bold text-lg">{mintPrice}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium">Supply:</span>
                  <span className="text-bonk-gold font-bold text-lg">{minted}/{maxSupply}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium">Network:</span>
                  <span className="text-bonk-gold font-bold text-lg">Solana</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/80 font-medium">Max per wallet:</span>
                  <span className="text-bonk-gold font-bold text-lg">5</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8">
                <div className="flex justify-between text-sm text-white/60 mb-3">
                  <span className="font-medium">Progress</span>
                  <span className="font-medium">{Math.round((minted / maxSupply) * 100)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(minted / maxSupply) * 100}%` }}
                    className="bg-gradient-to-r from-bonk-gold to-bonk-red h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Ritual Info */}
            <div className="glass-effect rounded-3xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-bonk-gold imperial-text mb-6">
                The Sacred Process
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
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
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Countdown */}
            <div className="glass-effect rounded-3xl p-10 border border-white/10 text-center">
              <div className="flex items-center justify-center mb-8">
                <Clock className="text-bonk-gold mr-3" size={28} />
                <h3 className="text-2xl font-bold text-bonk-gold imperial-text">
                  Launch Countdown
                </h3>
              </div>
              
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-bonk-gold mb-2">{timeLeft.days}</div>
                  <div className="text-white/60 text-sm font-medium">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-bonk-gold mb-2">{timeLeft.hours}</div>
                  <div className="text-white/60 text-sm font-medium">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-bonk-gold mb-2">{timeLeft.minutes}</div>
                  <div className="text-white/60 text-sm font-medium">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-bonk-gold mb-2">{timeLeft.seconds}</div>
                  <div className="text-white/60 text-sm font-medium">Seconds</div>
                </div>
              </div>
            </div>

            {/* Mint Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleMint}
                disabled={isMinting || minted >= maxSupply}
                className={`w-full py-6 px-8 rounded-2xl text-xl font-semibold imperial-text transition-all duration-300 ${
                  isMinting || minted >= maxSupply
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-bonk-gold to-bonk-red text-black shadow-lg hover:shadow-xl'
                }`}
              >
                {isMinting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    Minting...
                  </div>
                ) : minted >= maxSupply ? (
                  <div className="flex items-center justify-center">
                    <Crown className="mr-3" size={24} />
                    Sold Out
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Zap className="mr-3" size={24} />
                    Mint Now
                  </div>
                )}
              </motion.button>
              
              <p className="text-white/60 text-sm mt-6 font-medium">
                Connect your wallet to begin the ritual
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Dynasty Mechanics Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-12 text-center">
            Dynasty Mechanics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mechanics.map((mechanic, index) => (
              <motion.div
                key={mechanic.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                className="glass-effect rounded-2xl p-8 text-center border border-white/10 hover:border-bonk-gold/30 transition-all duration-300 group"
              >
                {/* Neon Chinese character icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${mechanic.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="text-2xl text-white imperial-text font-black">
                      {mechanic.icon}
                    </div>
                  </div>
                  {/* Neon glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${mechanic.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                
                <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-3">
                  {mechanic.title}
                </h4>
                <p className="text-bonk-gold/60 text-sm imperial-text mb-3">
                  {mechanic.chinese}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
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