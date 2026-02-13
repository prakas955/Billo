# 🚀 GitHub Setup Guide

## Step-by-Step Instructions

### Step 1: Initialize Git Repository

Open PowerShell/Terminal in the valentine folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Valentine website for Billo"
```

### Step 2: Create GitHub Repository

1. Go to: https://github.com/new
2. **Repository name**: `valentine` (or any name you like)
3. **Description**: "A beautiful Valentine's Day website with interactive questions and gifts"
4. **Visibility**: 
   - ✅ **Public** (recommended - free hosting)
   - Or Private (if you want it private)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### Step 3: Connect and Push

After creating the repo, GitHub will show you commands. Run these in PowerShell:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentine.git
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### Step 4: Verify

1. Go to your GitHub profile
2. You should see your `valentine` repository
3. All files should be there!

## 🎯 Quick Commands (Copy & Paste)

```bash
# Navigate to folder
cd "C:\Users\bhatt\OneDrive\Desktop\valentine"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Valentine website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/valentine.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## ✅ After GitHub Setup

Once your code is on GitHub, you can:
1. **Deploy to Vercel** - Connect your GitHub repo (automatic deployments!)
2. **Share the GitHub link** - Anyone can see your code
3. **Update easily** - Just push changes, Vercel auto-deploys!

---

**Need help?** Let me know if you get stuck on any step!
