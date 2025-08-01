'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Clock, Zap, Crown, Wallet, AlertCircle } from 'lucide-react'

const MintSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [tokenBalance, setTokenBalance] = useState(0)
  const [isMinting, setIsMinting] = useState(false)
  const [showVerificationPopup, setShowVerificationPopup] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2024-02-01T00:00:00Z').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      
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
  }, [])

  const mechanics = [
    {
      title: "Palace Reveals",
      description: "Lore unlocks as holders rise in rank",
      chinese: "宫",
      color: "from-bonk-gold to-yellow-400"
    },
    {
      title: "Scroll Drops",
      description: "Airdropped treasures of prophecy and power",
      chinese: "卷",
      color: "from-bonk-purple to-purple-600"
    },
    {
      title: "Bonkocracy",
      description: "Holders vote on royal decrees",
      chinese: "民",
      color: "from-bonk-red to-red-600"
    },
    {
      title: "Warrior Trials",
      description: "Frog PvP coming soon... maybe",
      chinese: "武",
      color: "from-bonk-royal to-blue-600"
    }
  ]

  const handleConnectWallet = async () => {
    try {
      // Check if Phantom wallet is available
      if (typeof window !== 'undefined' && window.solana && window.solana.isPhantom) {
        // Connect to Phantom wallet
        const response = await window.solana.connect()
        const address = response.publicKey.toString()
        setWalletAddress(address)
        setIsWalletConnected(true)
        
        // Simulate token balance check (in real implementation, this would query the blockchain)
        const simulatedBalance = Math.floor(Math.random() * 10000000) + 1000000 // 1M to 11M
        setTokenBalance(simulatedBalance)
        
        // Show verification popup
        setShowVerificationPopup(true)
        setTimeout(() => setShowVerificationPopup(false), 5000) // Hide after 5 seconds
      } else {
        // Fallback for when Phantom is not available
        const mockAddress = '7xKXtg2CW87d97ZJZpuRqKZqK2N0EFfghEfqhXkH1Kf'
        setWalletAddress(mockAddress)
        setIsWalletConnected(true)
        setTokenBalance(7500000)
        setShowVerificationPopup(true)
        setTimeout(() => setShowVerificationPopup(false), 5000)
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error)
      alert('Failed to connect wallet. Please make sure Phantom wallet is installed.')
    }
  }

  const handleMint = () => {
    if (!isWalletConnected) {
      alert('Please connect your wallet first')
      return
    }
    if (tokenBalance < 5000000) {
      alert('You need at least 5,000,000 tokens to mint')
      return
    }
    
    setIsMinting(true)
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false)
      alert('Minting successful! Welcome to the Dynasty.')
    }, 2000)
  }

  const disconnectWallet = () => {
    setIsWalletConnected(false)
    setWalletAddress('')
    setTokenBalance(0)
  }

  return (
    <section
      id="mint"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-bonk-dark to-black py-24 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-bonk-gold/5"></div>
      </div>

      {/* Verification Popup */}
      {showVerificationPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-effect rounded-3xl p-8 max-w-md mx-4 border border-bonk-gold/30 relative"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-bonk-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-bonk-gold imperial-text mb-4">
                Verification Notice
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Token holder verification will begin in <span className="text-bonk-gold font-bold">2 hours</span>. 
                Minting will be available after verification is complete.
              </p>
              <button
                onClick={() => setShowVerificationPopup(false)}
                className="bg-gradient-to-r from-bonk-gold to-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-bonk-gold/50 transition-all duration-300"
              >
                Understood
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

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
            Only the chosen may mint. Only the brave may burn. Only 100 NFTs forged under the Red Moon of BONKZHAO shall ever exist.
          </p>
        </motion.div>

        {/* Minting Details */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="glass-effect rounded-3xl p-10 md:p-16 border border-white/10 hover:border-bonk-gold/30 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Minting Info */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-bonk-gold imperial-text mb-4">
                    Minting Requirements
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <Crown className="text-bonk-gold mr-2" size={24} />
                      <span className="text-bonk-gold font-bold text-xl">Price: 1 SOL</span>
                    </div>
                  </div>

                  {/* Token Requirement */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <Zap className="text-bonk-red mr-2" size={24} />
                      <span className="text-bonk-red font-bold text-xl">Requirement: 5,000,000 Tokens</span>
                    </div>
                  </div>

                  {/* Wallet Status */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <Wallet className="text-bonk-purple mr-2" size={24} />
                      <span className="text-bonk-purple font-bold text-lg">
                        {isWalletConnected ? 'Wallet Connected' : 'Wallet Not Connected'}
                      </span>
                    </div>
                    
                    {isWalletConnected && (
                      <div className="text-center md:text-left space-y-2">
                        <p className="text-white/80 text-sm">
                          Address: {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                        </p>
                        <p className="text-white/80 mb-2">Token Balance: {tokenBalance.toLocaleString()}</p>
                        <div className={`text-sm ${tokenBalance >= 5000000 ? 'text-green-400' : 'text-red-400'}`}>
                          {tokenBalance >= 5000000 ? '✓ Eligible to mint' : '✗ Need more tokens'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    {!isWalletConnected ? (
                      <button
                        onClick={handleConnectWallet}
                        className="w-full md:w-auto bg-gradient-to-r from-bonk-gold to-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-bonk-gold/50 transition-all duration-300 imperial-text text-lg"
                      >
                        Connect Solana Wallet
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <button
                          onClick={handleMint}
                          disabled={!isWalletConnected || tokenBalance < 5000000 || isMinting}
                          className={`w-full md:w-auto font-bold py-4 px-8 rounded-lg transition-all duration-300 imperial-text text-lg ${
                            isWalletConnected && tokenBalance >= 5000000 && !isMinting
                              ? 'bg-gradient-to-r from-bonk-red to-red-600 text-white hover:shadow-lg hover:shadow-bonk-red/50'
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {isMinting ? 'Minting...' : 'Mint NFT (1 SOL)'}
                        </button>
                        <button
                          onClick={disconnectWallet}
                          className="w-full md:w-auto bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm"
                        >
                          Disconnect Wallet
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right side - Countdown */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-bonk-gold imperial-text mb-6">
                  Minting Opens In
                </h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gradient-to-b from-bonk-gold/20 to-transparent rounded-lg p-4 border border-bonk-gold/30">
                    <div className="text-3xl font-bold text-bonk-gold">{timeLeft.days}</div>
                    <div className="text-sm text-white/60">Days</div>
                  </div>
                  <div className="bg-gradient-to-b from-bonk-gold/20 to-transparent rounded-lg p-4 border border-bonk-gold/30">
                    <div className="text-3xl font-bold text-bonk-gold">{timeLeft.hours}</div>
                    <div className="text-sm text-white/60">Hours</div>
                  </div>
                  <div className="bg-gradient-to-b from-bonk-gold/20 to-transparent rounded-lg p-4 border border-bonk-gold/30">
                    <div className="text-3xl font-bold text-bonk-gold">{timeLeft.minutes}</div>
                    <div className="text-sm text-white/60">Minutes</div>
                  </div>
                  <div className="bg-gradient-to-b from-bonk-gold/20 to-transparent rounded-lg p-4 border border-bonk-gold/30">
                    <div className="text-3xl font-bold text-bonk-gold">{timeLeft.seconds}</div>
                    <div className="text-sm text-white/60">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynasty Mechanics */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-bonk-gold imperial-text text-center mb-12">
            Dynasty Mechanics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanics.map((mechanic, index) => (
              <motion.div
                key={mechanic.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-bonk-gold/30 transition-all duration-500 h-full">
                  <div className="text-center">
                    {/* Chinese character icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${mechanic.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="text-xl text-white imperial-text font-black">
                        {mechanic.chinese}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-bonk-gold imperial-text mb-2">
                      {mechanic.title}
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {mechanic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MintSection 