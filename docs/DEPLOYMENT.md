# Deploying Documentation to Vercel

This guide will help you deploy the Etch documentation to Vercel with the custom domain `docs.etchwp.com`.

## Prerequisites

1. A Vercel account (free at [vercel.com](https://vercel.com))
2. Access to your GitHub repository
3. DNS control for `etchwp.com`

## Step 1: Connect to Vercel

1. **Sign up/Login** to [Vercel](https://vercel.com)
2. **Import your GitHub repository**:
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `etch` repository
   - Click "Import"

## Step 2: Configure Build Settings

Vercel should automatically detect the configuration from `vercel.json`, but verify these settings:

- **Framework Preset**: Other
- **Build Command**: `cd docs && npm install && npm run build`
- **Output Directory**: `docs/build`
- **Install Command**: `cd docs && npm install`

## Step 3: Add Custom Domain

1. **Go to your project settings** in Vercel
2. **Navigate to "Domains"**
3. **Add domain**: `docs.etchwp.com`
4. **Configure DNS**:
   - Vercel will provide DNS records
   - Add a CNAME record in your DNS provider:
     ```
     Type: CNAME
     Name: docs
     Value: [vercel-provided-domain]
     ```

## Step 4: Verify Deployment

1. **Deploy your project** (should happen automatically)
2. **Visit** `https://docs.etchwp.com`
3. **Test navigation** and ensure all links work

## Automatic Deployments

Once connected, Vercel will automatically:

- ✅ Deploy on every push to `main`
- ✅ Deploy on pull requests (preview deployments)
- ✅ Provide preview URLs for testing
- ✅ Handle HTTPS certificates automatically

## Troubleshooting

### Build Issues

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `docs/package.json`
- Verify Node.js version compatibility

### Domain Issues

- DNS propagation can take up to 48 hours
- Verify CNAME record is correct
- Check domain status in Vercel dashboard

### Content Issues

- Clear browser cache
- Check if content is properly built in `docs/build/`
- Verify markdown files are properly formatted

## Local Development

To test locally before deploying:

```bash
# Start documentation development server
npm run docs:dev

# Build documentation locally
npm run docs:build

# Serve built documentation
npm run docs:serve
```

## Updating Documentation

1. **Make changes** to files in `docs/docs/`
2. **Commit and push** to GitHub
3. **Vercel automatically deploys** the changes
4. **Visit** `https://docs.etchwp.com` to see updates

## Environment Variables

If you need environment variables for the documentation:

1. **Go to project settings** in Vercel
2. **Navigate to "Environment Variables"**
3. **Add variables** as needed
4. **Redeploy** to apply changes
