# Cloudflare Pages Quick Setup Guide

## Cloudflare Pages Dashboard Configuration

When setting up your project in Cloudflare Pages, use these exact settings:

### Project Settings
- **Project name**: `buildestimatepro`
- **Production branch**: `main` (or `master` if that's your default branch)

### Build Configuration
- **Framework preset**: `Next.js` (if available) or `None`
- **Build command**: `npm run pages:build`
- **Build output directory**: `.vercel/output/static`
- **Root directory**: `/` (leave empty if root)
- **Node.js version**: `18` or `20`

### Environment Variables
Add these if needed (none required for basic deployment):
- (Optional) `NODE_ENV=production`

## Installation Steps

1. **Install the Cloudflare adapter** (already added to package.json):
   ```bash
   npm install
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Cloudflare Pages support"
   git push origin main
   ```

3. **Connect Repository in Cloudflare**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your GitHub repository: `buildestimatepro`
   - Use the build settings above
   - Click "Save and Deploy"

4. **Deploy**:
   - Your site will automatically deploy to: `buildestimatepro.pages.dev`
   - Every push to `main` branch will trigger a new deployment

## Important Notes

⚠️ **Admin Panel Limitation**: The admin panel that writes to JSON files will NOT work on Cloudflare Pages because file system writes are not supported. Only read operations work.

To make admin panel work, you'll need to migrate to Cloudflare D1 database (see CLOUDFLARE_DEPLOYMENT.md for details).

## Troubleshooting

- **Build fails**: Check Node.js version is 18+ in build settings
- **API routes not working**: Ensure you're using `@cloudflare/next-on-pages` adapter
- **File writes fail**: This is expected - migrate to D1 database for admin features

