---
title: Content Import
---

# Content Import - Add Media to Your Library

Content Import lets you add images, videos, and graphics to your Media Library from multiple sources. Unlike [live integrations](./integrations.md) that auto-update, imported content is **stored in your library** and updated on your schedule.

## Understanding Content Import vs. Integrations

![Content Import Flow](/diagrams/content-import-flow-diagram.png)

**Content Import = Add to Library Once**
- User-initiated import process
- Content stored in your Media Library
- You control when to update
- One-time process (import, use, update when needed)

**vs. Live Integrations = Continuous Sync**
- Automatic updates from external services
- Content fetched in real-time
- System controls refresh schedule
- Continuous process (always syncing)

**When to Use Content Import:**
- ✅ Brand-consistent graphics and designs
- ✅ Custom imagery and photos
- ✅ Content you own and control
- ✅ Designs that change infrequently
- ✅ Need offline reliability

**When to Use Integrations:**
- ✅ Real-time data (weather, stocks, news)
- ✅ Frequently changing content (calendars, social feeds)
- ✅ Collaborative content (Google Slides)
- ✅ Need automatic updates
- ✅ External data sources

## Import Methods

### Direct Upload

**Drag and drop your media files directly into BrandCast.**

**Best For:** Quick uploads, local content, custom media

**Supported Formats:**
- **Images:** JPG, PNG, GIF, WebP, SVG
- **Videos:** MP4, WebM, MOV
- **Max File Size:** 50MB per file

**How to Upload:**

1. Go to **Content Library** → **Media**
2. Click **Upload Media** or drag files to the upload area
3. Select files from your computer
4. Add metadata:
   - Title (auto-populated from filename)
   - Description
   - Tags
   - Category
5. Click **Upload**

**Batch Upload:**
- Select multiple files at once
- Drag entire folder
- Up to 50 files per batch
- Progress indicator shows upload status

**Use Cases:**
- Product photography
- Store-specific imagery
- Event photos
- Staff photos
- Local graphics and logos
- User-generated content
- Video content

**Tips:**
- Optimize images before upload (compress to 1-2MB)
- Use descriptive filenames
- Tag consistently for easy searching
- Create folder structure
- Dimension files to display resolution (1920×1080)

---

### Canva Import (Premium Feature)

**Import professional designs from your Canva account.**

**Best For:** Marketing graphics, branded content, professional designs

**Tier Availability:** Premium, Professional, Enterprise

**Prerequisites:**
- BrandCast Premium or higher
- Canva account (Free, Pro, or Enterprise)
- Designs created and saved in Canva

#### Setup: Connect Canva Account

1. Navigate to **Integrations** → **Canva**
2. Click **Connect Canva Account**
3. Authorize BrandCast in popup window
4. Grant permissions:
   - View your designs (`design:meta:read`)
   - Export your designs (`design:content:read`)
5. Connection confirmed

**OAuth Security:**
- Industry-standard OAuth 2.0 with PKCE
- Tokens encrypted at rest
- Read-only access to designs
- Revocable anytime

#### Browse and Import Designs

1. Go to **Content Library** → **Import from Canva**
2. Browse your Canva designs
3. Use search or filters:
   - Search by name
   - Filter by date
   - Sort by recently updated
4. Preview design thumbnails
5. Click design to view details:
   - Design title
   - Dimensions (width × height)
   - Last updated date
   - Design type (graphic, presentation, etc.)
6. Click **Import Design**
7. Wait for export (2-10 seconds)
8. Design added to Media Library

**Import Process:**
```
1. Canva exports design as high-quality PNG
2. Downloaded to BrandCast
3. Uploaded to your cloud storage
4. Thumbnail generated
5. Tagged automatically ('canva', 'import')
6. Available in Media Library
```

**What Gets Imported:**
- Full-resolution PNG image
- Original dimensions preserved
- Design title as library item name
- Canva design ID (for duplicate detection)
- Import timestamp
- Thumbnail preview

#### Canva Design Best Practices

**Recommended Dimensions:**

For Standard Displays (16:9):
- 1920×1080 (Full HD) - Recommended
- 3840×2160 (4K)
- 1280×720 (HD)

For Portrait Displays (9:16):
- 1080×1920
- 720×1280

**Design Guidelines:**
- Create at target display size
- Use high-resolution images (300 DPI source)
- Large, readable fonts (24pt minimum)
- High contrast colors
- Important content in center 80%
- Safe margins (10% from edges)

**Canva Templates:**
Create reusable templates in Canva:
```
1. Design template with brand colors/fonts
2. Save as Canva template
3. Duplicate for each use
4. Customize content
5. Import to BrandCast
```

#### Managing Imported Designs

**Updating Designs:**
```
Process:
1. Update design in Canva
2. Re-import to BrandCast
3. New version added to library
4. Replace in layouts
5. Publish updated layouts
```

**Note:** Re-importing creates a new library item (version control)

**Organization:**
- Tag imports: 'canva', 'marketing', 'sale', 'menu', etc.
- Use folders: Promotions/2025-Fall/
- Naming convention: "sale-2025-fall-promo"
- Archive old versions

**Duplicate Prevention:**
- BrandCast detects if design already imported
- Warns before creating duplicate
- Option to force re-import for updates

#### Canva Import Troubleshooting

**Cannot Connect Canva Account:**
- Allow popup windows for brandcast.app
- Verify Canva login works at canva.com
- Clear browser cache and cookies
- Try incognito mode
- Check firewall allows api.canva.com

**Designs Not Showing:**
- Only YOUR owned designs appear
- Shared designs not accessible
- Draft designs not shown
- Verify correct Canva account connected

**Import Fails:**
- Check design ownership (can't import shared designs)
- Simplify complex designs
- Check storage quota available
- Verify internet connection

**Poor Quality Display:**
- Create design at target size (1920×1080)
- Use high-res images in Canva
- Match layout area to design dimensions
- Use "Contain" fit mode in layout

#### Canva Import Limitations

**Current Limitations:**
- ✅ Static graphics (PNG export)
- ✅ Single-page designs
- ⚠️ Multi-page designs (first page only)
- ❌ Animated designs (GIF/video)
- ❌ Auto-sync on Canva updates (manual re-import required)
- ❌ Bulk import (one at a time currently)
- ❌ Shared design import (own designs only)

**Canva Plans Supported:**
- ✅ Free
- ✅ Pro
- ✅ Teams
- ✅ Enterprise

---

### URL Import

**Link to images hosted on external servers.**

**Best For:** Externally hosted content, CDN assets, dynamic URLs

**How to Import from URL:**

1. Go to **Content Library** → **Media**
2. Click **Add from URL**
3. Enter image URL:
   ```
   https://example.com/images/product-photo.jpg
   ```
4. Configure options:
   - **Title:** Display name
   - **Description:** Optional notes
   - **Tags:** For organization
   - **Cache Duration:** How long to cache (default: 24 hours)
   - **Auto-refresh:** Automatically re-fetch on schedule
5. Click **Import**
6. Image fetched and cached
7. Available in Media Library

**Requirements:**
- Publicly accessible URL
- Direct link to image file (ends in .jpg, .png, etc.)
- HTTPS recommended (HTTP works but less secure)
- Stable hosting required

**Supported Image URLs:**
- JPG: `https://example.com/image.jpg`
- PNG: `https://example.com/graphic.png`
- GIF: `https://example.com/animation.gif`
- WebP: `https://example.com/photo.webp`

**Cache Settings:**

**Cache Duration:**
- 1 hour - Frequently changing content
- 6 hours - Daily updates
- 24 hours (default) - Standard content
- 1 week - Rarely changing content
- Never expire - Static content

**Auto-refresh:**
- Enable to automatically re-fetch image on schedule
- Useful for dynamic URLs that change
- Disabled by default (manual refresh)

**Use Cases:**
- Product images from ecommerce platform
- Dynamic content from APIs
- User-generated content from website
- Shared assets across multiple systems
- Real-time graphics (scores, prices, etc.)

**Advantages:**
- No file upload needed
- Link to existing assets
- Update at source
- Reduce storage usage
- Integration flexibility

**Considerations:**
- Requires reliable hosting
- External dependency (site must be online)
- Network latency
- Bandwidth costs on source side
- Less reliable than uploaded content

**Troubleshooting:**

**Image Not Loading:**
- Verify URL is publicly accessible
- Check HTTPS/HTTP protocol
- Ensure direct link to image (not webpage)
- Test URL in browser
- Check source site is online

**Image Quality Issues:**
- Verify source image resolution
- Check for compression at source
- Ensure image dimensions appropriate
- Test with different cache duration

**Slow Loading:**
- Check source server response time
- Consider uploading instead
- Increase cache duration
- Use CDN for source hosting

---

### Google Photos Sync (FamilyCast Only)

**Sync photo albums from Google Photos for family slideshows.**

**Available In:** FamilyCast only
**Tier:** All FamilyCast plans

**How It Works:**
1. Connect Google Photos account
2. Select albums to sync
3. Photos sync automatically (6-hour intervals)
4. Display in slideshow layouts
5. New photos appear automatically

**Use Cases:**
- Family photo slideshows
- Vacation photo displays
- Holiday memories
- Kids' art and achievements
- Pet photos
- Shared family albums

**Setup:** [Google Photos Integration Guide](../../familycast-docs/docs/integrations/google-photos.md)

**Key Features:**
- Album sync (select which albums)
- Smart albums (People, Places, Things)
- Shared albums (collaborative)
- Automatic updates (new photos within 6 hours)
- Facial recognition filtering
- Safe filtering (kid-safe)

**Why FamilyCast Only:**
Google Photos is optimized for personal/family content. BrandCast users typically need professional graphics (use Canva Import or Direct Upload instead).

---

## Organizing Imported Content

### Tagging Strategy

**Use Consistent Tags:**
```
Source Tags:
- 'canva' (automatic for Canva imports)
- 'upload' (for direct uploads)
- 'url-import' (for URL imports)
- 'google-photos' (FamilyCast)

Content Type Tags:
- 'menu'
- 'sale'
- 'product'
- 'event'
- 'staff'
- 'promotional'

Time-based Tags:
- '2025-fall'
- '2025-october'
- 'holiday-2025'
- 'back-to-school'

Location Tags:
- 'store-123'
- 'headquarters'
- 'all-stores'
```

### Folder Structure

**Recommended Organization:**
```
Media Library/
├── Promotions/
│   ├── 2025-Fall/
│   ├── 2025-Holiday/
│   └── Ongoing/
├── Menus/
│   ├── Breakfast/
│   ├── Lunch/
│   └── Dinner/
├── Products/
│   ├── Category-A/
│   └── Category-B/
├── Events/
│   └── 2025-Events/
└── Brand/
    ├── Logos/
    └── Templates/
```

### Metadata Best Practices

**Complete Metadata:**
- **Title:** Descriptive, searchable
- **Description:** Context and notes
- **Tags:** Multiple relevant tags
- **Category:** Primary category
- **Created Date:** Auto-populated
- **Imported From:** Source tracking

**Example:**
```
Title: "Fall Sale 2025 - 40% Off"
Description: "Promotional graphic for fall clearance sale, valid Oct 1-31"
Tags: ['canva', 'sale', '2025-fall', 'promotional']
Category: Promotions
Imported From: Canva
Created: Oct 1, 2025
```

## Using Imported Content

### In Slideshows

**Add to Slideshow:**
1. Open Layout Editor
2. Add Image/Slideshow area
3. Click area → **Select Content**
4. Browse Media Library
5. Filter by tags or folders
6. Select imported content
7. Configure slide settings
8. Save layout

**Mix Import Sources:**
```
Slideshow Example:
- Slide 1-3: Canva imports (marketing)
- Slide 4-6: Direct uploads (photos)
- Slide 7-8: URL imports (products)
- Slide 9-10: Google Slides (live menu)
```

### In Static Layouts

**Single Image Display:**
1. Create layout
2. Add Image area
3. Select imported content
4. Set fit mode (contain, cover, fill)
5. Position and size
6. Save and deploy

### In Playlists

**Rotate Imported Content:**
```
Playlist: "Weekly Promotions"
- Layout 1: Monday special (Canva import)
- Layout 2: Tuesday deal (direct upload)
- Layout 3: Wednesday sale (URL import)
- Layout 4: Weekend event (Canva import)

Each layout: 5 minute duration
Transition: Fade
```

## Performance Tips

### Optimize File Sizes

**Before Upload:**
- Compress images (target 1-2MB)
- Resize to display resolution
- Use appropriate format:
  - JPG: Photos and complex images
  - PNG: Graphics with transparency
  - WebP: Modern format, smaller files

**Compression Tools:**
- TinyPNG.com - Online compression
- ImageOptim - Mac application
- Squoosh.app - Browser-based
- Canva built-in optimizer

### Storage Management

**Regular Cleanup:**
- Archive old seasonal content
- Delete unused imports
- Remove duplicate imports
- Review storage usage monthly

**Storage Limits by Plan:**
- Starter: 5GB
- Professional: 50GB
- Enterprise: Unlimited

**Monitor Usage:**
Settings → Billing → Storage Usage

### Caching Strategy

**For URL Imports:**
- Frequently changing: 1-6 hour cache
- Daily updates: 24 hour cache
- Rarely changing: 1 week cache
- Static content: Never expire

**Benefits:**
- Faster display loading
- Reduced external requests
- Offline reliability
- Lower bandwidth costs

## Comparing Import Methods

| Feature | Direct Upload | Canva Import | URL Import | Google Photos |
|---------|--------------|--------------|------------|---------------|
| **Speed** | Instant | 5-10 sec | 2-5 sec | 2-6 hours |
| **Quality** | Full control | High (PNG) | Varies | High |
| **Storage** | Uses quota | Uses quota | Minimal | Links only |
| **Offline** | ✅ Yes | ✅ Yes | ❌ No | ⚠️ Cached |
| **Updates** | Manual | Manual | Auto option | Automatic |
| **Design Tools** | External | Canva | External | Google Photos |
| **Tier** | All plans | Premium+ | All plans | FamilyCast |
| **Best For** | Quick, local | Marketing | External assets | Family photos |

## Best Practices

### Workflow Recommendations

**Standard Workflow:**
```
1. Plan Content
   → Map out what content needed
   → Choose appropriate import method

2. Create/Source Content
   → Design in Canva (marketing)
   → Photograph locally (events)
   → Host externally (products)

3. Import to BrandCast
   → Use appropriate method
   → Add complete metadata
   → Organize with tags/folders

4. Create Layouts
   → Mix import sources
   → Configure slideshow settings
   → Test on one display

5. Deploy
   → Assign to displays
   → Monitor performance
   → Update as needed
```

**Update Cycle:**
```
Daily: Check URL imports (if auto-refresh enabled)
Weekly: Review Canva designs for updates
Monthly: Clean up old content
Quarterly: Archive seasonal content
Annually: Full library audit
```

### Design Consistency

**Brand Guidelines:**
- Use Canva brand kit
- Consistent templates
- Standard dimensions
- Color palette adherence
- Typography standards

**File Naming:**
```
Convention: [type]-[date]-[description]

Examples:
- menu-2025-10-breakfast
- sale-2025-fall-40percent
- event-2025-halloween-party
- product-category-a-featured
```

## Next Steps

**Get Started:**
- **[Slideshow Content](./slideshow-content.md)** - Use imported content in slideshows
- **[Layout Editor](./layouts.md)** - Create layouts with imported media
- **[Media Library](./content-library.md)** - Organize and manage content

**Advanced:**
- **[Playlists](../workflows/playlists.md)** - Schedule content rotation
- **[Performance Optimization](../guides/performance.md)** - Optimize content delivery
- **[Content Strategy](../guides/content-strategy.md)** - Plan your content calendar

**Related:**
- **[Integrations](./integrations.md)** - Live data feeds
- **[Templates](./templates.md)** - Pre-built layouts
- **[Display Management](./displays.md)** - Deploy content

---

**Ready to import content?** Choose your method above and start building your media library!
