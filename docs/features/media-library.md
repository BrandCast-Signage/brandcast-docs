---
title: Media Library
---

# Media Library

The Media Library is your central hub for managing all images and videos used across your displays.

## Overview

The Media Library stores and organizes your visual content:
- **Images**: JPG, PNG, GIF formats
- **Videos**: MP4, MOV, AVI formats
- **Organization**: Tags, search, and filtering
- **Storage**: Cloud-based with automatic backups

All media is stored securely in Google Cloud Storage and accessible from any of your displays.

## Uploading Media

### Single File Upload

1. Navigate to **Library** in the main menu
2. Click **Upload Media** button
3. Select file(s) from your computer
4. (Optional) Add tags for organization
5. (Optional) Add description
6. Click **Upload**

### Bulk Upload

Upload multiple files at once:

1. Click **Upload Media**
2. Select multiple files (Shift+Click or Ctrl+Click)
3. All files upload simultaneously
4. Add shared tags to apply to all files

**File Size Limits:**
- Images: Max 10MB per file
- Videos: Max 100MB per file
- Bulk upload: Up to 20 files at once

**Pro Tip**: Name your files descriptively before uploading (e.g., "summer-sale-2024.jpg" instead of "IMG_1234.jpg") for easier searching later.

## Organizing Your Library

### Tags

Tags help you categorize and find content quickly:

**Common Tag Examples:**
- By season: `summer`, `winter`, `holiday`
- By purpose: `promotion`, `sale`, `announcement`
- By product: `apparel`, `electronics`, `food`
- By location: `store-1`, `downtown`, `mall-location`

**Adding Tags:**
1. Click on any media item
2. Type tag name in **Tags** field
3. Press Enter to add
4. Add multiple tags separated by commas

**Searching by Tag:**
- Use the tag filter in the library view
- Click on a tag to see all media with that tag
- Combine multiple tags to narrow results

### Search and Filtering

**Search Bar:**
- Search by filename, description, or tags
- Results update in real-time as you type

**Filters:**
- **Type**: Images only or Videos only
- **Date**: Upload date range
- **Size**: File size range
- **Store**: Filter by store (multi-store accounts)
- **Tags**: Filter by one or more tags

### Sorting Options

Sort your library by:
- **Name** (A-Z or Z-A)
- **Upload Date** (Newest or Oldest first)
- **File Size** (Largest or Smallest first)
- **Usage** (Most or Least used)

## Using Library Content

### In Layouts

Add library content to your layouts:

1. Open Layout Editor
2. Select a content area
3. Choose **Library** as content source
4. Select image(s) or video(s)
5. Set display duration (for slideshows)

### In Content Sources

Create content sources from library items:

1. Go to **Content Sources**
2. Click **Create Source**
3. Choose **Library** type
4. Select media file(s)
5. Configure settings (rotation, duration)

## Managing Media

### Editing Media Details

Update information about any media file:

1. Click on the media item
2. Edit:
   - **Title**: Display name
   - **Description**: Notes or details
   - **Tags**: Add/remove tags
3. Click **Save Changes**

### Replacing Media

Replace content while keeping the same usage:

1. Click on media item
2. Click **Replace File**
3. Upload new file
4. Original file is replaced everywhere it's used

**Use Case**: Update a promotional image for a sale while keeping it in all layouts that reference it.

### Deleting Media

Remove media from your library:

1. Select media item(s) using checkboxes
2. Click **Delete** button
3. Confirm deletion

**Warning**: Before deleting, check "Used In" to see if the media is currently assigned to any layouts or displays. Deleting used media may break your layouts.

### Bulk Actions

Perform actions on multiple items:

1. Use checkboxes to select multiple media
2. Choose bulk action:
   - **Add Tags**: Apply tags to all selected
   - **Move to Store**: Change store assignment
   - **Delete**: Remove all selected items

## Storage and Quotas

### Storage Limits

Your storage limit scales with your display count:

- **Included:** 2GB per active display
- **Example:** 10 displays = 20GB total storage
- **Overage:** $1/GB per month for additional storage

View your current usage: **Settings** → **Billing** → **Storage Usage**

### Managing Storage

If you're approaching your limit:

1. **Delete unused media**: Review and remove old content
2. **Compress images**: Use tools like TinyPNG before uploading
3. **Optimize videos**: Convert to web-optimized MP4 format
4. **Add more displays**: Each new display adds 2GB to your pool

## Media Performance Tips

### Image Best Practices

**Optimal Resolutions:**
- Full-screen: 1920x1080 (HD)
- Half-screen: 960x1080 or 1920x540
- Quarter-screen: 960x540

**Format Recommendations:**
- **JPG**: Photos, promotional images (smaller file size)
- **PNG**: Graphics with transparency, logos
- **GIF**: Simple animations (use sparingly)

**Compression:**
- Compress images to 85-90% quality
- Reduces file size with minimal visual impact
- Faster loading on displays

### Video Best Practices

**Optimal Settings:**
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30 fps
- **Codec**: H.264
- **Bitrate**: 5-10 Mbps for HD

**Duration:**
- Keep videos under 2 minutes for best performance
- Longer videos may buffer on slower connections
- Use video editing software to trim content

**Audio:**
- Most retail displays are muted
- Ensure visual message is clear without audio
- Add captions/text overlays for important information

## Shared vs. Store-Specific Content

### Shared Library

Available to all stores in your account:
- Brand assets (logos, colors, templates)
- Corporate messaging
- Universal promotions

**Creating Shared Content:**
1. Upload media
2. Set **Source Type** to "Shared"
3. Content appears in all store libraries

### Store-Specific Library

Only available to specific store(s):
- Location-specific promotions
- Local employee photos
- Store-specific announcements

**Creating Store-Specific Content:**
1. Upload media
2. Set **Source Type** to "Store Specific"
3. Select store(s) that can access it

## Advanced Features

### Metadata

Store additional information with each media file:
- Custom fields
- Creation date
- Source/photographer
- Usage rights
- Expiration dates

Access via **Media Details** → **Metadata** tab.

### Automatic Thumbnails

BrandCast automatically generates thumbnails for:
- All images (shown in library grid view)
- Video first frames (shown as preview)

### Usage Tracking

See where each media file is being used:

1. Click on media item
2. View **Used In** section
3. Shows all layouts, content sources, and displays using this media

Helpful for:
- Understanding content popularity
- Safe deletion (check if unused)
- Content audits

## Troubleshooting

### Upload Failed

**Common causes:**
- File size exceeds limit
- Unsupported file format
- Network connection interrupted
- Storage quota exceeded

**Solutions:**
- Compress file before uploading
- Convert to supported format
- Check internet connection
- Free up storage space or upgrade plan

### Media Not Displaying

**Check:**
1. File uploaded successfully?
2. Assigned to layout correctly?
3. Display is online and active?
4. Layout published to display?

### Slow Loading

**Optimize performance:**
- Reduce image file sizes
- Use recommended video settings
- Check display internet speed
- Verify no network throttling

## Next Steps

- **[Content Library](./content-library.md)** - Overview of all content types
- **[Layouts](./layouts.md)** - Design layouts using your media
- **[Content Association](../workflows/content-association.md)** - Connect media to displays
- **[Troubleshooting](../troubleshooting/content-problems.md)** - Fix content issues
