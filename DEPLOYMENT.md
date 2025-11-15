# GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your code pushed to a GitHub repository

## Step-by-Step Deployment

### Step 1: Update Repository Name (if needed)

The `vite.config.js` file has the base path set to `/muneer_radwan_portfolio/`. 

**If your GitHub repository name is different**, update it in `vite.config.js`:

```javascript
base: '/your-repository-name/',
```

For example, if your repo is named `portfolio`, change it to:
```javascript
base: '/portfolio/',
```

### Step 2: Push Your Code to GitHub

If you haven't already, initialize git and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/muneer_radwan_portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu bar)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
5. The page will save automatically

### Step 4: Trigger the Deployment

The GitHub Actions workflow will automatically run when you:
- Push to the `main` branch, OR
- Manually trigger it from the Actions tab

**Option A: Automatic (Recommended)**
- Just push any changes to the `main` branch:
  ```bash
  git add .
  git commit -m "Deploy portfolio"
  git push origin main
  ```

**Option B: Manual Trigger**
1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the branch (usually `main`) and click **Run workflow**

### Step 5: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, you'll see a green checkmark

### Step 6: Access Your Site

After successful deployment, your site will be available at:
```
https://yourusername.github.io/muneer_radwan_portfolio/
```

Replace `yourusername` with your GitHub username and `muneer_radwan_portfolio` with your repository name.

## Troubleshooting

### Issue: 404 Error on Routes

**Solution**: The `public/404.html` file handles SPA routing. Make sure it's included in your repository.

### Issue: Assets Not Loading

**Solution**: Verify the `base` path in `vite.config.js` matches your repository name exactly.

### Issue: Workflow Fails

**Common causes:**
1. **Node version**: The workflow uses Node 20. If you need a different version, edit `.github/workflows/deploy.yml`
2. **Build errors**: Check the Actions log for specific error messages
3. **Permissions**: Make sure GitHub Pages permissions are enabled in repository settings

### Issue: Site Shows Blank Page

**Solution**: 
1. Check browser console for errors
2. Verify the base path in `vite.config.js` is correct
3. Make sure all routes use the correct base path

## Updating Your Site

To update your deployed site:

1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. The workflow will automatically rebuild and redeploy

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```
2. Update your DNS settings to point to GitHub Pages
3. Update the base path in `vite.config.js` to `/` (root)
4. Redeploy

## Verification Checklist

Before deploying, make sure:

- [ ] Repository name matches the base path in `vite.config.js`
- [ ] All code is committed and pushed to GitHub
- [ ] GitHub Pages is enabled with "GitHub Actions" as source
- [ ] The workflow file exists at `.github/workflows/deploy.yml`
- [ ] `public/404.html` exists for SPA routing
- [ ] `public/.nojekyll` file exists

## Quick Commands Reference

```bash
# Build locally to test
npm run build

# Preview production build
npm run preview

# Start development server
npm run dev

# Push to GitHub (triggers deployment)
git add .
git commit -m "Your message"
git push origin main
```

## Need Help?

- Check GitHub Actions logs in the **Actions** tab
- Verify all files are committed and pushed
- Ensure the base path matches your repository name
- Check the browser console for runtime errors

---

Your portfolio should be live at: `https://yourusername.github.io/muneer_radwan_portfolio/`

