---
title: Slideshow Integration
---

# Slideshow Integration

Connect Google Slides presentations to your BrandCast displays for dynamic, easily-updated content.

## Overview

The Slideshow integration allows you to:
- Display Google Slides presentations on your displays
- Auto-refresh content when slides are updated
- Share presentations across multiple displays
- Manage content in familiar Google Slides interface

## Prerequisites

- Google account with access to Google Slides
- Google Slides presentation (shared or owned by you)
- BrandCast account with active display

## Setting Up Google Slides Integration

### Step 1: Connect Google Account

1. Go to **Integrations** → **Google Slides**
2. Click **Connect Google Account**
3. Sign in with your Google account
4. Grant BrandCast permission to access Google Slides
5. Confirm connection

### Step 2: Add Presentation

1. In **Google Slides** integration settings
2. Click **Add Presentation**
3. Choose method:
   - **Select from Google Drive** - Browse your presentations
   - **Enter Presentation URL** - Paste link from Google Slides

### Step 3: Configure Settings

**Presentation Settings:**
- **Refresh Interval** - How often to check for updates (default: 5 minutes)
- **Auto-advance Slides** - Automatically move to next slide
- **Slide Duration** - Seconds per slide (if auto-advance enabled)
- **Loop** - Restart from beginning when finished

### Step 4: Add to Layout

1. Open your layout in Layout Editor
2. Add or select a content area
3. Choose **Source** → **Integration** → **Google Slides**
4. Select your presentation
5. Save layout

Your display now shows the Google Slides presentation.

## Managing Presentations

### Updating Content

**To update displayed content:**
1. Edit your Google Slides presentation
2. Make changes and save
3. BrandCast automatically refreshes based on your refresh interval

**No need to update anything in BrandCast** - changes appear automatically!

### Multiple Displays

Use the same presentation across multiple displays:

1. Add presentation to integration once
2. Reference it in multiple layouts
3. All displays show the same content
4. Update once, updates everywhere

### Presentation Library

View all connected presentations:

1. Go to **Integrations** → **Google Slides**
2. See list of all presentations
3. View which displays use each presentation
4. Edit settings or remove presentations

## Presentation Best Practices

### Slide Design

**Optimize for displays:**
- Use 16:9 aspect ratio (widescreen)
- Large, readable fonts (minimum 24pt)
- High-contrast colors
- Minimal text per slide
- High-resolution images

**Avoid:**
- Small text or details
- Busy backgrounds
- Too much information per slide
- Animations (may not display correctly)

### Content Strategy

**Effective presentations:**
- 5-10 slides for rotation
- Clear, focused message per slide
- Mix of text and visuals
- Regular updates to maintain interest
- Time-sensitive content (sales, events)

**Slide Timing:**
- Product slides: 10-15 seconds
- Detailed info: 20-30 seconds
- Simple graphics: 5-10 seconds
- Text-heavy: 15-20 seconds

### Performance

**Keep presentations smooth:**
- Limit to 20 slides per presentation
- Optimize image file sizes
- Avoid video embeds (use BrandCast video uploads instead)
- Set appropriate refresh intervals

## Troubleshooting

### Presentation Not Showing

**Check:**
1. Is Google account still connected?
2. Is presentation shared/accessible?
3. Is presentation assigned to display layout?
4. Is display online and connected?

**Solutions:**
- Reconnect Google account
- Verify presentation sharing settings
- Check layout assignment
- Refresh display

### Presentation Not Updating

**Check:**
1. When was last refresh?
2. What's the refresh interval setting?
3. Has presentation actually changed?

**Solutions:**
- Wait for next refresh cycle
- Manually trigger refresh from integration settings
- Adjust refresh interval if needed
- Verify changes saved in Google Slides

### Slides Displaying Incorrectly

**Common issues:**
- Custom fonts not rendering
- Animations not working
- Images appearing distorted

**Solutions:**
- Use standard Google Fonts
- Remove animations from slides
- Use 16:9 aspect ratio images
- Simplify slide designs

## Advanced Features

### Scheduling Presentations

Show different presentations at different times:

1. Create schedule in **Schedules**
2. Assign different layouts with different presentations
3. Presentations change automatically based on schedule

**Example:**
```
Monday-Friday:
  9am-5pm: Product Catalog Presentation
  5pm-close: Daily Specials Presentation
Weekend:
  All day: Weekend Promotions Presentation
```

### Presentation Playlists

Rotate through multiple presentations:

1. Add multiple presentations to integration
2. Create layout with slideshow area
3. Configure area to cycle through presentations
4. Set duration for each presentation

### Multi-Store Presentations

**Corporate presentations:**
- Connect once at account level
- Share across all stores
- Update centrally, applies everywhere

**Store-specific presentations:**
- Connect at store level
- Only visible to that store
- Customize per location

## Best Use Cases

### Retail Storefronts

- Product catalogs
- Current promotions
- New arrivals
- Brand storytelling

### Break Rooms

- Employee schedules
- Training materials
- Company news
- Safety information

### Reception Areas

- Company overview
- Services offered
- Team introductions
- Customer testimonials

### Event Displays

- Conference agendas
- Speaker bios
- Sponsor information
- Session schedules

## Permissions and Sharing

### Google Slides Permissions

BrandCast requires:
- Read access to presentations
- Cannot edit or delete presentations
- Cannot access other Google Drive files

### Presentation Sharing

**Ensure proper sharing:**
- Presentations must be accessible by connected Google account
- Use "Anyone with the link can view" for easy access
- Or specifically share with integration service account

### Security

- BrandCast only accesses presentations you explicitly add
- Revoke access anytime from Google Account settings
- Disconnect integration removes all access

## Next Steps

- **[RSS Feeds](./rss-feeds.md)** - Add news and social feeds
- **[Content Association](../workflows/content-association.md)** - Connect content to displays
- **[Layouts](../features/layouts.md)** - Design custom layouts
- **[Integrations Overview](../features/integrations.md)** - Explore other integrations
