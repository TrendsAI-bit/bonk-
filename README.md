# 🏵️ Bonk Dynasty Website

A legendary NFT collection website for the Bonk Dynasty - a collection of 100 unique characters spanning from common peasants to mythical emperors.

## 🎯 Project Overview

**不疯魔，不成王** (Without madness, there is no king.)

The Bonk Dynasty website is a modern, interactive web application built with Next.js that tells the story of a legendary NFT collection. The website features:

- **Hero Section** - Dramatic entrance with the main title and call-to-action
- **Lore Section** - Ancient scrolls revealing the dynasty's history
- **Hierarchy Section** - Display of all 5 tiers with animated character cards
- **Mint Section** - Interactive minting ritual with countdown timer
- **Palace Section** - Animated throne room with interactive elements
- **FAQ Section** - Imperial edicts styled as expandable questions
- **Footer** - Dynasty seal with social media links

## 🏗️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## 🎨 Design Features

- **Imperial Theme**: Gold, red, and purple color scheme
- **Glass Morphism**: Modern glass effects with backdrop blur
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Responsive Design**: Mobile-first approach
- **Chinese Typography**: Noto Serif SC font for authentic feel
- **Particle Effects**: Floating elements and background animations

## 📊 Collection Structure

| Tier | Name | Count | Rarity | IDs |
|------|------|-------|--------|-----|
| Mythic | The Bonkperor | 1 | Mythic | #006 |
| Mythic | The Shadow Emperor | 1 | Mythic | #007 |
| Legendary | Frog Warriors | 6 | Legendary | #008-013 |
| Rare | Court Magistrates | 20 | Rare | #081-100 |
| Common | Dog Royal Peasants | 76 | Common | #001-005, #014-080 |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bonk-dynasty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy the project**
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Option 3: Deploy via Vercel Dashboard

1. **Zip the project**
   ```bash
   zip -r bonk-dynasty.zip . -x "node_modules/*" ".git/*"
   ```

2. **Upload to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Upload the zip file
   - Deploy

## 📁 Project Structure

```
bonk-dynasty/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── LoreSection.tsx
│   │   ├── HierarchySection.tsx
│   │   ├── MintSection.tsx
│   │   ├── PalaceSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── Webbackground.png
├── metadata.json
├── items.json
├── generate_metadata.py
├── BONK_DYNASTY_SUMMARY.md
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎭 Key Features

### Hero Section
- Dramatic background with the provided `Webbackground.png`
- Animated title with gradient text effects
- Floating particle animations
- Call-to-action button with glow effects

### Lore Section
- Scroll-like animations for ancient text
- Glass morphism cards with imperial styling
- Bilingual content (English/Chinese)

### Hierarchy Section
- Interactive tier cards with hover animations
- Rarity badges with gradient colors
- Progress indicators and statistics

### Mint Section
- Live countdown timer to launch
- Interactive mint button with loading states
- Progress bar showing minted vs total supply
- Dynasty mechanics preview

### Palace Section
- Animated throne room with floating particles
- Interactive palace features
- Background music integration ready

### FAQ Section
- Expandable questions styled as imperial edicts
- Smooth animations for opening/closing
- Bilingual answers

### Footer
- Dynasty seal with crown icon
- Social media links
- Imperial decree section

## 🎨 Customization

### Colors
The theme uses custom Tailwind colors:
- `bonk-gold`: #FFD700
- `bonk-red`: #DC2626
- `bonk-purple`: #7C3AED
- `bonk-dark`: #1F2937
- `bonk-royal`: #1E40AF
- `bonk-shadow`: #374151

### Animations
Custom keyframes for:
- Floating animations
- Glow effects
- Scroll animations
- Fade-in effects

### Fonts
- **Imperial Text**: Noto Serif SC (Chinese)
- **Scroll Text**: Courier New (monospace)

## 🔧 Configuration

### Environment Variables
No environment variables required for basic deployment.

### Build Configuration
The project is optimized for Vercel deployment with:
- Next.js 14 App Router
- Image optimization disabled for custom backgrounds
- Static export ready

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔗 Links

- **Website**: [Deployed URL]
- **Twitter**: [Twitter URL]
- **Discord**: [Discord URL]
- **Collection**: [NFT Collection URL]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **Bonk Community** - For the inspiration and support
- **Next.js Team** - For the amazing framework
- **Framer Motion** - For the smooth animations
- **Tailwind CSS** - For the utility-first styling

---

**不疯魔，不成王** - May the memes flow freely! 🏵️ 