# Vercel Deployment Setup for SEO

## ✅ Environment Variable Configuration

Your site is hosted on Vercel at: **https://samsilodigitalhub.vercel.app**

### Step 1: Add Environment Variables in Vercel Dashboard

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: **samsilodigitalhub**
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

#### Production Environment Variables

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://samsilodigitalhub.vercel.app` | Production, Preview, Development |

**How to add:**
- Click "Add" button
- Enter variable name: `NEXT_PUBLIC_SITE_URL`
- Enter value: `https://samsilodigitalhub.vercel.app`
- Select: ✅ Production, ✅ Preview, ✅ Development
- Click "Save"

#### Optional (Add after getting verification codes):

| Variable Name | Purpose | When to Add |
|--------------|---------|-------------|
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console | After Step 2 below |
| `NEXT_PUBLIC_BING_VERIFICATION` | Bing Webmaster | After Step 3 below |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics | After Step 4 below |

---

## 🔍 Step 2: Google Search Console Verification

### Get Verification Code:
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `https://samsilodigitalhub.vercel.app`
4. Choose verification method: **HTML tag**
5. You'll see code like: `<meta name="google-site-verification" content="abc123xyz..." />`
6. Copy only the content value: `abc123xyz...`

### Add to Your Code:
Open `src/lib/seo.ts` and update:
```typescript
verification: {
  google: "abc123xyz...", // ← Paste your verification code here
  bing: "",
  yandex: ""
}
```

### Deploy:
1. Commit and push changes to your repository
2. Vercel will automatically redeploy
3. Wait 2-3 minutes for deployment to complete
4. Go back to Google Search Console and click "Verify"

### Submit Sitemap:
1. In Google Search Console, go to **Sitemaps** section
2. Add new sitemap: `https://samsilodigitalhub.vercel.app/sitemap.xml`
3. Click "Submit"

### Request Indexing:
1. Go to **URL Inspection** tool
2. Enter: `https://samsilodigitalhub.vercel.app`
3. Click "Request Indexing"
4. Repeat for key pages:
   - `/services`
   - `/about`
   - `/blog`
   - `/contact`

---

## 🌐 Step 3: Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Add site: `https://samsilodigitalhub.vercel.app`
3. Choose verification method: **HTML meta tag**
4. Copy the verification code
5. Add to `src/lib/seo.ts`:
   ```typescript
   verification: {
     google: "abc123xyz...",
     bing: "your-bing-code", // ← Add here
     yandex: ""
   }
   ```
6. Deploy changes
7. Verify in Bing Webmaster Tools
8. Submit sitemap: `https://samsilodigitalhub.vercel.app/sitemap.xml`

---

## 📊 Step 4: Google Analytics 4 Setup

### Create GA4 Property:
1. Go to: https://analytics.google.com
2. Create new property: "Samsilo Digital Hub"
3. Set timezone: (GMT+1:00) West Central Africa
4. Set currency: Nigerian Naira (NGN)
5. Complete setup wizard

### Get Measurement ID:
1. Go to **Admin** → **Data Streams**
2. Click "Add stream" → "Web"
3. Enter: `https://samsilodigitalhub.vercel.app`
4. Stream name: "Samsilo Digital Hub Website"
5. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)

### Add to Vercel:
1. Go to Vercel dashboard → Settings → Environment Variables
2. Add new variable:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (your measurement ID)
   - Select all environments
3. Save and redeploy

### Add Google Analytics Component:
Create `src/components/google-analytics.tsx`:
```typescript
'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  if (!measurementId) return null;
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
```

Then add to `src/app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@/components/google-analytics';

// ... in your RootLayout component:
<body>
  <GoogleAnalytics />
  {/* rest of your content */}
</body>
```

---

## 🗺️ Step 5: Google Business Profile

1. Go to: https://business.google.com
2. Create business profile:
   - Name: **Samsilo Digital Hub**
   - Category: **Printing Service** or **Digital Marketing Service**
   - Address: **Lagos State University of Science and Technology area, Ikorodu, Lagos, Nigeria**
   - Phone: **+234 916 975 7481**
   - Website: **https://samsilodigitalhub.vercel.app**
3. Add business hours:
   - Monday-Friday: 8:00 AM - 6:00 PM
   - Saturday: 9:00 AM - 4:00 PM
   - Sunday: Closed
4. Upload 3-5 photos of your location/services
5. Verify your business (Google will send verification postcard or call)

### Benefits:
- Appears in Google Maps
- Shows in "near me" searches
- Displays business hours and phone
- Customer reviews visible in search results

---

## 🔄 Step 6: Redeploy and Test

### Trigger Redeployment:
After adding environment variables in Vercel, redeploy:

**Option 1: Through Vercel Dashboard**
1. Go to Deployments tab
2. Find latest deployment
3. Click "..." menu → "Redeploy"

**Option 2: Git Push**
1. Make any small change (add a space in a comment)
2. Commit and push to your repository
3. Vercel auto-deploys

### Verify Environment Variables:
After deployment, check if environment variables are working:
1. Visit: https://samsilodigitalhub.vercel.app
2. View page source (Ctrl+U or Cmd+U)
3. Search for "samsilodigitalhub.vercel.app" in the HTML
4. You should see it in meta tags and JSON-LD

### Test These URLs:
- ✅ Homepage: https://samsilodigitalhub.vercel.app
- ✅ Sitemap: https://samsilodigitalhub.vercel.app/sitemap.xml
- ✅ Robots: https://samsilodigitalhub.vercel.app/robots.txt
- ✅ Manifest: https://samsilodigitalhub.vercel.app/manifest.webmanifest
- ✅ Blog: https://samsilodigitalhub.vercel.app/blog
- ✅ Services: https://samsilodigitalhub.vercel.app/services

---

## 📈 Step 7: Monitor Performance

### Tools to Use:

1. **Google Search Console** (https://search.google.com/search-console)
   - Check weekly for indexing status
   - Monitor search queries
   - Track impressions and clicks
   - Fix any coverage issues

2. **Google Analytics 4** (https://analytics.google.com)
   - Daily traffic overview
   - User behavior
   - Conversion tracking
   - Real-time visitors

3. **Vercel Analytics** (Built-in)
   - Core Web Vitals
   - Page load performance
   - Real User Monitoring

4. **PageSpeed Insights** (https://pagespeed.web.dev)
   - Test URL: https://samsilodigitalhub.vercel.app
   - Check mobile and desktop performance
   - Get optimization suggestions

---

## ⚠️ Common Vercel Deployment Issues

### Issue 1: Environment Variables Not Working
**Solution:**
- Make sure you selected all environments (Production, Preview, Development)
- Redeploy after adding variables
- Check variable names (must start with `NEXT_PUBLIC_` for client-side access)

### Issue 2: Sitemap Not Updating
**Solution:**
- Clear Vercel cache: Settings → General → Clear Cache
- Redeploy
- Wait 5 minutes, then check sitemap URL

### Issue 3: Verification Meta Tag Not Found
**Solution:**
- Make sure you committed and pushed changes to GitHub
- Check Vercel deployment logs for errors
- View page source to confirm meta tag is present

### Issue 4: Images Not Loading
**Solution:**
- Check next.config.ts remote patterns
- Make sure images are in the public folder
- Verify image paths in code (use leading slash: `/images/...`)

---

## 🎯 Success Checklist

After completing all steps, verify:

- [ ] NEXT_PUBLIC_SITE_URL set in Vercel environment variables
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google Search Console
- [ ] Bing Webmaster Tools verified
- [ ] Google Analytics installed and tracking
- [ ] Google Business Profile created
- [ ] All pages loading correctly on https://samsilodigitalhub.vercel.app
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Meta tags showing correct domain in page source
- [ ] No console errors in browser DevTools

---

## 📞 Next Actions

1. **Today:** Add NEXT_PUBLIC_SITE_URL to Vercel environment variables
2. **This Week:** Complete Google Search Console verification
3. **Week 2:** Set up Google Business Profile and Analytics
4. **Week 3:** Submit to Bing, monitor first rankings
5. **Month 1:** Start seeing initial traffic, optimize based on data

---

## 💡 Pro Tips for Vercel Deployment

1. **Preview Deployments:** Every git push creates a preview URL - test before merging to main
2. **Custom Domain:** Consider getting a custom domain (e.g., samsilodigitalhub.com) for better branding
3. **Edge Functions:** Your site is on Vercel's global edge network - fast worldwide
4. **Automatic SSL:** HTTPS is automatically configured - good for SEO
5. **Build Logs:** Check deployment logs if something breaks

---

Your site is now live at **https://samsilodigitalhub.vercel.app** with all SEO optimizations ready to go! 🚀

Follow the steps above to complete the setup and start ranking on Google.
