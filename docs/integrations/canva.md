---
title: Canva Integration
---

# Canva Integration

Import and display your Canva designs directly in BrandCast digital signage with OAuth authentication and automatic synchronization.

## Overview

The Canva integration connects your Canva account to BrandCast, allowing you to import designs directly into your media library and display them on your digital signage. Perfect for businesses that create marketing materials, menus, and promotional content in Canva.

**Key Features:**
- OAuth 2.0 secure authentication
- Browse your Canva designs from dashboard
- One-click import to media library
- Automatic PNG export
- Design metadata preserved
- Duplicate detection
- High-quality rendering
- Easy design updates

**Supported Canva Plans:** Free, Pro, Teams, Enterprise

## Use Cases

**Retail Stores:**
- Sale and promotion graphics
- Product announcements
- Seasonal campaigns
- Brand consistency
- Quick design updates

**Restaurants & QSR:**
- Menu boards designed in Canva
- Daily specials graphics
- Promotional offers
- Event announcements
- Holiday menus

**Corporate Offices:**
- Company announcements
- Department updates
- Employee recognition
- Policy posters
- Event promotions

**Event Venues:**
- Event schedules
- Sponsor graphics
- Wayfinding signage
- Program information
- Special offers

**Marketing Agencies:**
- Client campaigns
- Seasonal content
- Brand templates
- Multi-client management
- Quick turnaround

## Setup

### Prerequisites

- BrandCast account
- Canva account (Free, Pro, or Enterprise)
- Designs published in Canva
- Internet connection

### Step 1: Connect Canva Account

**From BrandCast Dashboard:**

1. Navigate to **Integrations** → **Canva**
2. Click **Connect Canva Account**
3. Authorize BrandCast in Canva popup
4. Grant required permissions:
   - View your designs (`design:meta:read`)
   - Export your designs (`design:content:read`)
5. Confirm connection

**OAuth Flow:**
- Secure OAuth 2.0 with PKCE
- Tokens stored encrypted
- Automatic token refresh
- Revocable at any time

**Connection Status:**
```
✓ Connected to Canva
  Account: yourname@example.com
  Connected: Oct 14, 2025
  Status: Active
```

### Step 2: Browse Canva Designs

**View Your Designs:**

1. Navigate to **Content Library** → **Import from Canva**
2. Browse your Canva designs
3. Search by name or filter by type
4. Preview designs before importing

**Design Information Shown:**
- Design thumbnail
- Design title
- Dimensions (width × height)
- Last updated date
- Import status

**Supported Design Types:**
- Static graphics (PNG export)
- Single-page designs
- Multi-page designs (first page)
- Social media graphics
- Presentations
- Posters and flyers
- Custom dimensions

### Step 3: Import Designs

**Import to Library:**

1. Select design from Canva browser
2. Click **Import Design**
3. Wait for export (2-10 seconds)
4. Design added to media library

**Import Process:**
```
1. Canva exports design as PNG
2. Downloaded to BrandCast
3. Uploaded to your cloud storage
4. Thumbnail generated
5. Added to media library
6. Ready for use in layouts
```

**What Gets Imported:**
- Full-resolution PNG image (1920×1080 or original size)
- Design title (as library item name)
- Original dimensions preserved
- Canva design ID (for duplicate prevention)
- Import timestamp
- Thumbnail preview

**Import Settings:**
```javascript
{
  "name": "Summer Sale 2025",
  "description": "Imported from Canva: Summer Sale 2025",
  "tags": ["canva", "import", "sale"],
  "format": "PNG",
  "quality": "High"
}
```

### Step 4: Add to Layouts

**Use Imported Designs:**

1. Open layout editor
2. Drag **Image** area to canvas
3. Select imported Canva design
4. Resize and position
5. Save layout

**Or Add to Playlist:**
1. Create or edit playlist
2. Add layout with Canva design
3. Set duration
4. Publish to displays

## Design Requirements

### Recommended Dimensions

**Standard Displays (16:9):**
- 1920×1080 (Full HD) - Recommended
- 3840×2160 (4K)
- 1280×720 (HD)

**Portrait Displays (9:16):**
- 1080×1920
- 720×1280

**Custom Sizes:**
- Any Canva dimension supported
- Scaled to fit display area
- Aspect ratio preserved

### Design Best Practices

**For Digital Signage:**

**Layout:**
- Simple, uncluttered design
- Large, readable fonts (24pt minimum)
- High contrast colors
- Important content in center
- Safe margins (10% from edges)

**Colors:**
- High contrast (dark on light or vice versa)
- Test on actual display
- Consider viewing distance
- Avoid pure white (95% white better)
- Avoid pure black (10% black better)

**Typography:**
- Sans-serif fonts preferred
- Minimum 24pt font size
- Maximum 3 font styles
- Bold for emphasis
- Clear hierarchy

**Images:**
- High resolution (300 DPI source)
- Proper licensing
- Optimized file sizes
- Avoid small details
- Sharp, clear photos

### File Specifications

**Export Format:**
- Format: PNG
- Bit depth: 24-bit color
- Transparency: Supported
- Compression: Lossless

**File Size:**
- Typical: 500KB - 2MB
- Maximum: 10MB
- Automatic optimization
- Cloud storage friendly

## Using Canva Designs

### Single Design Display

**Configuration:**
1. Import Canva design
2. Create layout with image area
3. Select imported design
4. Set to fullscreen or custom size
5. Assign to display

**Example:**
```
Layout: "Summer Sale Promotion"
  Area 1: Fullscreen (1920×1080)
    Content: Canva Import "Summer Sale 2025.png"
    Display: 100% screen
```

### Rotating Multiple Designs

**Playlist Configuration:**
1. Import multiple Canva designs
2. Create separate layouts for each
3. Add layouts to playlist
4. Set duration per design (10-30 seconds)
5. Enable transitions

**Example Playlist:**
```
Playlist: "Weekly Promotions"
  1. Monday Special (imported from Canva) - 15 sec
  2. Tuesday Deal (imported from Canva) - 15 sec
  3. Wednesday Sale (imported from Canva) - 15 sec
  4. Weekend Event (imported from Canva) - 15 sec
  Transition: Fade (Medium)
```

### Mixed Content Layouts

**Combine Canva with Live Data:**

```
Layout: "Store Information Board"
  Main Area (70%):
    Canva design "Store Brand Header.png"

  Sidebar (30%):
    - Current time (CLOCK widget)
    - Local weather (WEATHER widget)
    - Store hours (TEXT)

  Footer:
    RSS news ticker
```

## Managing Designs

### Updating Designs

**Process:**
1. Update design in Canva
2. Re-import to BrandCast (creates new version)
3. Replace in layouts
4. Publish updated layouts

**Note:** Importing same design creates duplicate (intentional for version control)

**Best Practice:**
- Use descriptive names with dates
- Archive old versions
- Test before deploying
- Keep backup of previous version

### Organizing Imports

**Tagging Strategy:**
```
Tags:
- "canva" (automatic)
- "import" (automatic)
- "sale" (add manually)
- "menu" (add manually)
- "2025-october" (date tag)
- "store-123" (location tag)
```

**Folder Organization:**
- Promotions/Summer 2025/
- Menus/Breakfast/
- Events/Holiday/
- Brand/Logos/

### Duplicate Prevention

**Automatic Detection:**
- Checks Canva design ID
- Prevents exact duplicates
- Warns if design already imported
- Suggests using existing import

**Override:**
- Force re-import creates new version
- Useful for updated designs
- Original preserved
- Manual cleanup needed

## Troubleshooting

### Cannot Connect Canva Account

**Symptoms:**
- "Failed to authorize" error
- OAuth popup closes immediately
- Connection times out

**Solutions:**

1. **Check Permissions:**
   - Allow popup windows for brandcast.app
   - Check browser privacy settings
   - Disable popup blockers temporarily

2. **Verify Canva Login:**
   - Log into canva.com separately
   - Confirm account active
   - Try different browser

3. **Clear Cache:**
   - Clear browser cookies
   - Clear BrandCast session
   - Try incognito mode
   - Restart browser

4. **Check Firewall:**
   - Allow api.canva.com
   - Allow www.canva.com
   - Check corporate firewall rules

### Designs Not Showing

**Symptoms:**
- Empty design list
- "No designs found" message
- Old designs missing

**Check:**

1. **Design Ownership:**
   - Only your owned designs shown
   - Shared designs not accessible
   - Team designs require team permissions

2. **Design Status:**
   - Design must be saved in Canva
   - Draft designs not shown
   - Deleted designs removed

3. **Account Connection:**
   - Verify connection active
   - Token may have expired
   - Reconnect Canva account

**Solutions:**
- Ensure designs saved in Canva
- Check you're logged into correct Canva account
- Reconnect Canva OAuth
- Contact support if persistent

### Import Fails

**Symptoms:**
- "Failed to import design" error
- Import stuck at "Processing"
- "Export job failed" message

**Common Causes:**

**Permission Issues:**
```
Error: "Permission denied: This design may be shared
with you but not owned by you"
```
**Solution:** Can only import designs you own

**Design Complexity:**
```
Error: "Export job timeout"
```
**Solution:**
- Simplify design in Canva
- Reduce layer count
- Flatten complex elements
- Try again

**Network Issues:**
```
Error: "Failed to download design"
```
**Solution:**
- Check internet connection
- Retry import
- Try smaller design

**Storage Quota:**
```
Error: "Storage limit reached"
```
**Solution:**
- Delete unused library items
- Upgrade storage quota
- Archive old content

### Poor Quality Display

**Symptoms:**
- Blurry design on screen
- Pixelated text
- Low resolution appearance

**Solutions:**

1. **Check Source Resolution:**
   - Create Canva design at target size (1920×1080)
   - Use high-res images in Canva
   - Avoid scaling up small designs

2. **Layout Configuration:**
   - Match layout area to design dimensions
   - Use "Contain" fit mode (not "Cover")
   - Avoid excessive scaling

3. **Display Settings:**
   - Verify display resolution settings
   - Check HDMI/display quality
   - Test on different display

## Advanced Features

### Bulk Import

**Import Multiple Designs:**
1. Select multiple designs (coming soon)
2. Click "Import Selected"
3. Batch export and import
4. All added to library

**Current Workaround:**
- Import designs one at a time
- Use naming convention
- Tag for organization
- Takes 5-10 seconds per design

### Design Templates

**Canva Templates for Signage:**

Create standardized templates in Canva:
- Menu board template
- Sale announcement template
- Event poster template
- Daily special template

**Workflow:**
1. Create template in Canva
2. Duplicate template for each use
3. Customize content
4. Import to BrandCast
5. Display

**Benefits:**
- Brand consistency
- Fast content creation
- Professional designs
- Easy updates

### Auto-Sync (Future Feature)

**Planned Functionality:**
- Automatic design updates
- Sync on schedule
- Version management
- Change notifications

**Current Limitation:**
Manual re-import required for updates

## OAuth Token Management

### Token Expiration

**Access Tokens:**
- Valid for: 1 hour
- Auto-refresh: Yes
- Stored: Encrypted
- Scope: Read designs only

**Refresh Tokens:**
- Valid for: 60 days
- Use: Re-authenticate automatically
- Stored: Encrypted

**When Tokens Expire:**
- BrandCast attempts auto-refresh
- If refresh fails, reconnect required
- Notification sent to user
- No data loss

### Revoking Access

**Disconnect Canva:**

1. Navigate to **Integrations** → **Canva**
2. Click **Disconnect**
3. Confirm revocation
4. Tokens deleted
5. Imported designs remain in library

**From Canva:**
1. Log into canva.com
2. Settings → Apps & Integrations
3. Find BrandCast
4. Click "Revoke Access"

**Effect:**
- Can no longer import new designs
- Existing imported designs unaffected
- Re-connect anytime

### Security

**OAuth Security:**
- Industry-standard OAuth 2.0
- PKCE for added security
- Tokens encrypted at rest
- HTTPS for all API calls
- Automatic token rotation

**Permissions:**
- Read-only access to designs
- Cannot edit Canva designs
- Cannot delete Canva designs
- Cannot access team settings
- No payment information accessed

## API Reference

### List Canva Designs

```
GET /api/canva/designs
Authorization: Bearer {accessToken}
```

**Response:**
```json
{
  "designs": [
    {
      "id": "DAFxyz123",
      "title": "Summer Sale 2025",
      "thumbnailUrl": "https://...",
      "width": 1920,
      "height": 1080,
      "type": "image",
      "createdAt": "2025-10-01T10:00:00Z",
      "updatedAt": "2025-10-14T14:35:00Z"
    }
  ]
}
```

### Import Design

```
POST /api/canva/import
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "designId": "DAFxyz123",
  "storeId": "store_abc123",
  "name": "Summer Sale 2025",
  "tags": ["sale", "summer", "2025"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "libraryItemId": "lib_xyz789",
    "downloadUrl": "gs://bucket/canva-design.png",
    "message": "Design imported successfully"
  }
}
```

### Check Connection Status

```
GET /api/canva/auth/status
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "isAuthenticated": true,
    "hasTokens": true,
    "isExpired": false,
    "expiresAt": "2025-10-14T15:35:00Z"
  }
}
```

## Best Practices

### Design Workflow

**Recommended Process:**

1. **Plan Content:**
   - Identify signage needs
   - Map content calendar
   - Design schedule

2. **Create in Canva:**
   - Use templates or create custom
   - Design at display resolution
   - Follow signage best practices
   - Save with clear names

3. **Import to BrandCast:**
   - Import when design finalized
   - Add descriptive tags
   - Organize in folders

4. **Deploy to Displays:**
   - Add to layouts
   - Test on one display first
   - Roll out to all displays
   - Monitor performance

5. **Update Cycle:**
   - Review designs weekly
   - Update seasonal content
   - Archive outdated designs
   - Maintain library organization

### Performance Tips

**Optimize File Sizes:**
- Use appropriate dimensions
- Avoid unnecessary transparency
- Compress in Canva before export
- Balance quality vs. file size

**Library Management:**
- Regular cleanup
- Archive old designs
- Use consistent naming
- Tag systematically

**Network Efficiency:**
- Import during off-hours
- Batch imports when possible
- Test before bulk import
- Monitor bandwidth usage

## Limitations

**Current Limitations:**

**Design Types:**
- ✅ Static graphics (PNG)
- ✅ Single-page designs
- ⚠️ Multi-page (first page only)
- ❌ Animated designs (GIF/video)
- ❌ Interactive content

**Features:**
- ❌ Auto-sync on Canva updates
- ❌ Bulk import (coming soon)
- ❌ Team folder access
- ❌ Shared design import
- ✅ Design metadata

**Canva Plans:**
- ✅ Free plan supported
- ✅ Pro plan supported
- ✅ Teams plan supported
- ✅ Enterprise plan supported

## Next Steps

- **[Google Slides Integration](./google-slides.md)** - Alternative for presentations
- **[Content Library](../features/content-library.md)** - Manage imported designs
- **[Layouts](../features/layouts.md)** - Use designs in layouts
- **[Media Library](../features/media-library.md)** - Organize content
- **[Playlists](../workflows/playlists.md)** - Rotate multiple designs
