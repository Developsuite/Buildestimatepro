# Cloudflare Pages Deployment Guide

## Prerequisites

1. **GitHub Repository**: Push your code to a GitHub repository
2. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
3. **Supabase Account**: Sign up at [supabase.com](https://supabase.com)
4. **Node.js Version**: Ensure you're using Node.js 18.x or later

## Step 1: Set Up Supabase Database

Your app now uses Supabase for data storage, which works perfectly with Cloudflare Pages.

### 1.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project name (e.g., "buildestimatepro")
5. Set a strong database password (save this!)
6. Select a region close to your users
7. Click "Create new project"

### 1.2 Create Database Tables

Go to SQL Editor in your Supabase dashboard and run this SQL:

```sql
-- Create trades table
CREATE TABLE trades (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT,
  category TEXT,
  hero_section JSONB NOT NULL DEFAULT '{}',
  overview_section JSONB NOT NULL DEFAULT '{}',
  services_section JSONB NOT NULL DEFAULT '{}',
  benefits_section JSONB NOT NULL DEFAULT '{}',
  cta_section JSONB NOT NULL DEFAULT '{}',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  author TEXT,
  published_at TIMESTAMPTZ,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  meta_description TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_trades_slug ON trades(slug);
CREATE INDEX idx_trades_published ON trades(published);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);

-- Enable Row Level Security
ALTER TABLE trades ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on trades" ON trades
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access on blog_posts" ON blog_posts
  FOR SELECT USING (true);

-- Create policies for authenticated write access (for admin)
CREATE POLICY "Allow authenticated insert on trades" ON trades
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on trades" ON trades
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated delete on trades" ON trades
  FOR DELETE USING (true);

CREATE POLICY "Allow authenticated insert on blog_posts" ON blog_posts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on blog_posts" ON blog_posts
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated delete on blog_posts" ON blog_posts
  FOR DELETE USING (true);
```

### 1.3 Get API Keys

1. Go to Project Settings > API
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

## Step 2: Configure Environment Variables

### Local Development

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Cloudflare Pages

Add these same environment variables in Cloudflare Pages:
1. Go to your project > Settings > Environment variables
2. Add both variables for Production and Preview environments

## Step 3: Install Dependencies

```bash
npm install @supabase/supabase-js --legacy-peer-deps
npm install --save-dev @cloudflare/next-on-pages --legacy-peer-deps
```

## Step 4: Update package.json

Ensure your scripts include:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "pages:build": "npm run build && npx @cloudflare/next-on-pages"
  }
}
```

## Step 5: Deploy to Cloudflare Pages

### Build Settings

- **Framework preset**: `Next.js` (or `None`)
- **Build command**: `npm run pages:build`
- **Build output directory**: `.vercel/output/static`
- **Node.js version**: `18` or `20`

### GitHub Integration

1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect your GitHub account
3. Select your repository
4. Configure build settings as above
5. Add environment variables (Supabase URL and key)
6. Click "Save and Deploy"

## Step 6: Custom Domain (Optional)

1. Go to your project settings in Cloudflare Pages
2. Click "Custom domains"
3. Add your domain
4. Follow DNS configuration instructions

## What Works Now

✅ All static pages (Home, Services, About, Contact, etc.)
✅ Admin Panel - Create/Edit/Delete trade pages
✅ Admin Panel - Create/Edit/Delete blog posts
✅ Dynamic trade pages
✅ Blog listing and individual posts
✅ All frontend functionality

## Migrating Existing Data

If you have existing data in `data/trades.json`, you can migrate it to Supabase:

1. Open your Supabase SQL Editor
2. Insert your existing trades manually, or
3. Use the Supabase dashboard Table Editor to add records

## Troubleshooting

### "Missing Supabase URL" Error
- Ensure environment variables are set correctly
- Check variable names match exactly: `NEXT_PUBLIC_SUPABASE_URL`

### Database Connection Issues
- Verify your Supabase project is active
- Check API keys are correct
- Ensure RLS policies are set up

### Build Fails
- Check Node.js version is 18+ in build settings
- Run `npm install --legacy-peer-deps` if dependency conflicts occur

## Support Resources

- [Supabase Docs](https://supabase.com/docs)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
