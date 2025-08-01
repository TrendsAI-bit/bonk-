# 🚀 Bonk Dynasty Website Deployment Guide

This guide will help you deploy the Bonk Dynasty website to Vercel.

## 📋 Prerequisites

- Node.js 18+ installed
- A Vercel account (free at [vercel.com](https://vercel.com))
- Git (optional, for GitHub deployment)

## 🎯 Quick Deploy Options

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd /path/to/bonk-dynasty
   vercel
   ```

4. **Follow the prompts**
   - Project name: `bonk-dynasty`
   - Framework preset: `Next.js`
   - Root directory: `./`
   - Build command: `npm run build`
   - Output directory: `.next`

### Option 2: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Bonk Dynasty website"
   git branch -M main
   git remote add origin https://github.com/yourusername/bonk-dynasty.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

### Option 3: Deploy via Vercel Dashboard

1. **Zip the project**
   ```bash
   zip -r bonk-dynasty.zip . -x "node_modules/*" ".git/*" ".next/*"
   ```

2. **Upload to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Upload the zip file
   - Configure settings manually

## ⚙️ Configuration Settings

### Environment Variables
No environment variables are required for basic deployment.

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Domain Settings
- **Custom Domain**: Optional
- **HTTPS**: Automatically enabled
- **CDN**: Global edge network

## 🔧 Post-Deployment

### 1. Verify Deployment
- Check that all sections load correctly
- Test responsive design on mobile
- Verify animations work smoothly
- Test navigation links

### 2. Custom Domain (Optional)
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings

### 3. Analytics (Optional)
1. Go to project settings
2. Enable Vercel Analytics
3. Monitor performance metrics

## 🎨 Customization

### Update Content
- Edit component files in `app/components/`
- Modify metadata in `app/layout.tsx`
- Update colors in `tailwind.config.js`

### Add Features
- New sections: Create new components
- Animations: Use Framer Motion
- Styling: Modify Tailwind classes

### Background Image
- Replace `public/Webbackground.png` with your image
- Update path in `HeroSection.tsx` and `PalaceSection.tsx`

## 📊 Performance Optimization

### Built-in Optimizations
- ✅ Next.js 14 App Router
- ✅ Static generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS optimization

### Monitoring
- Vercel Analytics
- Core Web Vitals
- Lighthouse scores

## 🔍 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Issues
1. Check build logs in Vercel dashboard
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+

### Performance Issues
1. Optimize images
2. Reduce bundle size
3. Enable compression

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design
- Touch-friendly interactions
- Optimized loading times
- Progressive enhancement

## 🔗 Useful Links

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)

## 🎯 Success Checklist

- [ ] Website deploys successfully
- [ ] All sections load correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] SEO metadata configured
- [ ] Social media links updated
- [ ] Custom domain configured (if needed)

## 🏵️ Final Notes

The Bonk Dynasty website is now ready for deployment! The site features:

- **Imperial Design**: Gold and red theme with glass morphism
- **Smooth Animations**: Framer Motion powered interactions
- **Responsive Layout**: Works on all devices
- **SEO Optimized**: Meta tags and structured data
- **Fast Performance**: Optimized for speed

**不疯魔，不成王** - May your deployment be successful! 🏵️ 