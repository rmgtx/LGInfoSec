# GitHub Pages Deployment Guide

This guide explains how to deploy the Mend InfoSec Portal to GitHub Pages.

## Prerequisites

- A GitHub account
- The repository pushed to GitHub
- GitHub Pages enabled in repository settings

## Changes Made for GitHub Pages

### 1. Static Export Configuration

The app has been configured for static export:

- `next.config.js` now includes `output: "export"` for static site generation
- `basePath` is configured to work with GitHub Pages subdirectories
- Image optimization is disabled (required for static export)

### 2. API Routes Converted to Client-Side

Since GitHub Pages only serves static files, server-side API routes won't work:

- **RSS Feed (`/api/cyberalerts`)**:
  - Converted to client-side RSS parsing using `lib/rssParser.ts`
  - Uses a CORS proxy (`api.allorigins.win`) to fetch RSS feeds
  - Works entirely in the browser

- **Incident Report (`/api/report`)**:
  - Converted to use `mailto:` links
  - Opens the user's email client with pre-filled form data
  - **TODO**: Update the email address in `components/IncidentReportModal.tsx` (line 52)

### 3. GitHub Actions Workflow

An automated deployment workflow has been created at `.github/workflows/deploy.yml` that:

- Builds the Next.js app on every push to `main`
- Automatically deploys to GitHub Pages
- Handles basePath configuration based on repository name

## Deployment Steps

### Step 1: Update Configuration

1. **Set the basePath** (if needed):
   - If your repository is `username.github.io` (root domain), the basePath is automatically set to empty
   - If your repository is `username/repo-name` (subdirectory), the basePath is automatically set to `/repo-name`
   - You can override this by setting the `NEXT_PUBLIC_BASE_PATH` environment variable in the GitHub Actions workflow

2. **Update the InfoSec email address**:
   - Open `components/IncidentReportModal.tsx`
   - Find line 52: `const emailAddress = "infosec@example.com";`
   - Replace with your actual InfoSec email address

3. **Optional: Update CORS proxy** (if needed):
   - If the default CORS proxy (`api.allorigins.win`) doesn't work, you can:
     - Use a different proxy service
     - Set up your own CORS proxy
     - Update `lib/rssParser.ts` line 12 with your preferred proxy

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 3: Push to GitHub

1. Commit all changes:

   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build your Next.js app
   - Deploy it to GitHub Pages
   - Make it available at `https://username.github.io/repo-name` (or `https://username.github.io` for root domain)

### Step 4: Verify Deployment

1. Wait for the GitHub Actions workflow to complete (check the **Actions** tab)
2. Visit your GitHub Pages URL
3. Test all functionality:
   - Navigation links
   - RSS feed loading
   - Incident report form (should open email client)
   - Calendar and other components

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the app locally:

   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Push the `out` directory to the `gh-pages` branch:

   ```bash
   git subtree push --prefix out origin gh-pages
   ```

   Or use a tool like `gh-pages`:

   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d out
   ```

## Troubleshooting

### BasePath Issues

If assets (CSS, JS, images) aren't loading:

- Check that `basePath` is correctly set in `next.config.js`
- Verify the repository name matches the basePath
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### RSS Feed Not Loading

If the RSS feed doesn't load:

- Check browser console for CORS errors
- Try a different CORS proxy service
- Verify the RSS feed URL is accessible
- Check if the proxy service is down

### Build Failures

If the GitHub Actions build fails:

- Check the Actions tab for error messages
- Verify all dependencies are in `package.json`
- Ensure Node.js version is compatible (18+)
- Check for TypeScript or linting errors

### Email Client Not Opening

If the incident report form doesn't open the email client:

- Verify the email address is set correctly
- Check browser settings (some browsers block `mailto:` links)
- Consider using a form service like Formspree as an alternative

## Production Considerations

For a production deployment, consider:

1. **Form Submission Service**:
   - Use Formspree, Google Forms, or a similar service
   - Or set up a serverless function (Vercel, Netlify Functions, AWS Lambda)

2. **Custom Domain**:
   - Configure a custom domain in GitHub Pages settings
   - Update DNS records as instructed by GitHub

3. **Analytics**:
   - Add Google Analytics or similar
   - Track page views and user interactions

4. **Performance**:
   - Optimize images before adding them
   - Use Next.js Image component (with `unoptimized: true` for static export)
   - Consider using a CDN for static assets

5. **Security**:
   - Review and update dependencies regularly
   - Use environment variables for sensitive data
   - Implement proper CORS policies if using external APIs

## Environment Variables

If you need environment variables for the build:

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Add your secrets/variables
3. Update `.github/workflows/deploy.yml` to use them:
   ```yaml
   env:
     NEXT_PUBLIC_BASE_PATH: ${{ secrets.BASE_PATH }}
   ```

## Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
