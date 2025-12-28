# 🚀 Deploy Aaryan Editz Website to Vercel (FREE)

## ✨ Quick Deployment (5 minutes)

### Option 1: Deploy via Vercel Website (Recommended - Easiest)

#### Step 1: Push to GitHub
1. **Create GitHub Account** (if you don't have one)
   - Go to: https://github.com/signup
   - Sign up for FREE

2. **Create New Repository**
   - Go to: https://github.com/new
   - Repository name: `aaryan-editz-website`
   - Make it **Public** or **Private** (your choice)
   - **DON'T** add README, .gitignore, or license (we already have them)
   - Click "Create repository"

3. **Push Your Code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/aaryan-editz-website.git
   git branch -M main
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

#### Step 2: Deploy to Vercel
1. **Sign up for Vercel**
   - Go to: https://vercel.com/signup
   - Click "Continue with GitHub"
   - Authorize Vercel

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select your `aaryan-editz-website` repository
   - Click "Import"

3. **Configure Build Settings** (Auto-detected, but verify):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes ⏱️
   - Your site will be live! 🎉

5. **Get Your Live URL**
   - You'll get a URL like: `https://aaryan-editz-website.vercel.app`
   - You can customize it to: `https://aaryaneditz.vercel.app`

---

### Option 2: Deploy via Vercel CLI (Advanced)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (Select your account)
# - Link to existing project? N
# - Project name? aaryan-editz
# - Directory? ./
# - Override settings? N

# Deploy to Production
vercel --prod
```

---

## 🎯 After Deployment

### Custom Domain (Optional)
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In Vercel Dashboard → Your Project → Settings → Domains
3. Add your custom domain
4. Update DNS settings as shown

### Environment Variables (For EmailJS)
1. In Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

---

## 📊 Benefits of Vercel

✅ **FREE Forever** (for personal projects)
✅ **Auto-deploys** on every git push
✅ **HTTPS** included
✅ **Global CDN** (fast worldwide)
✅ **Free SSL Certificate**
✅ **Zero Configuration**
✅ **Preview Deployments** for every commit

---

## 🔄 Future Updates

After initial deployment, any changes you make:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will **automatically deploy** your changes in ~2 minutes! 🚀

---

## 🆘 Troubleshooting

**Problem:** Build fails
- Check Vercel build logs
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally first

**Problem:** 404 on routes
- Vercel handles this automatically for Vite/React
- If issues persist, create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

---

## 📞 Need Help?
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

**Your website will be live in less than 10 minutes! 🎊**
