# 🚀 Deploy to Vercel - Quick Guide

## Method 1: Using Vercel Website (Easiest!) ⚡

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub, GitLab, or Email

### Step 2: Deploy
1. Once logged in, click **"Add New Project"**
2. Click **"Browse"** or drag & drop your `valentine` folder
3. Vercel will automatically detect it's a static site
4. Click **"Deploy"**
5. Wait 30-60 seconds
6. Done! You'll get a live URL like: `your-project.vercel.app`

## Method 2: Using Vercel CLI (For Advanced Users) 💻

### Step 1: Install Vercel CLI
Open PowerShell/Terminal in the valentine folder and run:
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Choose your account
- Link to existing project? **No**
- What's your project's name? **valentine** (or any name)
- In which directory is your code located? **./**
- Want to modify settings? **No**

### Step 4: Production Deploy
```bash
vercel --prod
```

## 🎉 After Deployment

You'll get a URL like:
- `https://valentine-xyz123.vercel.app`

Share this link with Billo! 💕

## 📱 Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Click on your project
3. Go to **Settings** → **Domains**
4. Add your custom domain

## 🔄 Update Your Site

After making changes:
1. **Website Method**: Just drag & drop the folder again
2. **CLI Method**: Run `vercel --prod` in the folder

---

Your Valentine website will be live in under 2 minutes! 🚀
