---
title: Layouts
---

# Layouts

Layouts are the foundation of your BrandCast displays. They define how content is organized and presented on your screens.

## What is a Layout?

A layout is a visual template that divides your display into content areas. Each area can show different types of content:

- **Images and Videos** from your media library
- **Live Integrations** like weather, calendars, or RSS feeds
- **Text Content** like announcements or quotes
- **Dynamic Data** like schedules or stock tickers

Think of layouts as the blueprint for your display - defining what appears where and when.

## Layout Components

### Canvas

The canvas is your workspace where you design layouts:

- **Default Size**: 1920x1080 (Full HD)
- **Aspect Ratios**: 16:9 (standard), 9:16 (portrait), custom
- **Grid System**: Snap-to-grid for precise alignment
- **Zoom**: Zoom in/out for detailed editing

### Content Areas

Content areas are regions within your layout that display specific content:

**Properties:**
- **Position** (x, y coordinates)
- **Size** (width, height in pixels)
- **Content Type** (image, video, integration, text, etc.)
- **Z-Index** (layer order - which areas appear on top)

**Content Types Supported:**
- IMAGE - Static images from library
- VIDEO - Video files from library
- SLIDES - Google Slides presentations
- TEXT - Static text or announcements
- CALENDAR - Event calendars (Google, iCal)
- SCHEDULE - Employee schedules (ZoomShift)
- CLOCK - Real-time clock
- COUNTDOWN - Countdown timers
- WEATHER - Local weather information
- QUOTES - Inspirational quotes
- STOCK_TICKER - Stock market data
- STOCK_CHART - Stock price charts
- RSS - RSS feed content

## Creating a Layout

### From Scratch

1. Navigate to **Layouts** in the main menu
2. Click **Create Layout**
3. Enter basic information:
   - **Name**: Descriptive name (e.g., "Front Counter - Summer Sale")
   - **Description**: Optional notes
   - **Ratio**: 16:9, 9:16, or custom
   - **Resolution**: 1920x1080 (default) or custom
4. Click **Create**

You'll be taken to the Layout Editor with a blank canvas.

### From Template

Start with a pre-built template:

1. Navigate to **Layouts**
2. Click **Browse Templates**
3. Filter by:
   - **Category**: Retail, QSR, Corporate, Fitness, etc.
   - **Industry**: Your specific industry
   - **Featured**: Popular templates
4. Click **Use Template**
5. Customize the template to match your brand

**Template Categories:**
- RETAIL - Store front displays, promotions
- QSR - Quick service restaurants
- CORPORATE - Office displays
- FITNESS - Gym and fitness centers
- SALON - Hair and beauty salons
- MEDICAL - Healthcare facilities
- HOSPITALITY - Hotels and restaurants
- EDUCATION - Schools and universities

## Layout Editor

### Adding Content Areas

**Method 1: Drag and Drop**
1. Click **Add Area** button
2. Drag to position on canvas
3. Resize by dragging corners/edges
4. Release to place

**Method 2: Precise Positioning**
1. Click **Add Area**
2. Enter exact coordinates and dimensions
3. Click **Create**

### Configuring Content Areas

Click on any content area to configure:

**General Settings:**
- **Area ID**: Unique identifier
- **Content Type**: Select from dropdown
- **Content Source**: Choose specific content
- **Z-Index**: Layer order (higher = on top)

**Content-Specific Settings:**

For **Images/Videos:**
- Select from media library
- Set duration (for slideshows)
- Enable/disable rotation

For **Integrations:**
- Configure integration settings
- Set refresh interval
- Customize display options

For **Text:**
- Enter text content
- Choose font, size, color
- Set alignment and padding

### Layout Tools

**Toolbar Options:**
- **Select** - Click to select areas
- **Move** - Drag to reposition
- **Resize** - Drag corners/edges
- **Duplicate** - Copy area with all settings
- **Delete** - Remove area
- **Align** - Align multiple areas
- **Distribute** - Space areas evenly

**Alignment Tools:**
- Align Left/Center/Right
- Align Top/Middle/Bottom
- Distribute Horizontally/Vertically

**Grid and Snap:**
- Enable/disable grid overlay
- Snap to grid for precision
- Adjust grid spacing

### Preview Mode

Test your layout before deploying:

1. Click **Preview** button
2. View full-screen preview
3. Test content rotation/transitions
4. Check responsive behavior
5. Click **Exit Preview** when done

## Layout Templates

### Using System Templates

BrandCast provides professional templates:

**Benefits:**
- Designed by professionals
- Industry-specific layouts
- Mobile-responsive
- Tested and optimized

**Customization:**
- Change colors to match your brand
- Replace content with your media
- Adjust sizing and positioning
- Save as your own template

### Creating Custom Templates

Save your layouts as reusable templates:

1. Design your layout
2. Click **Save as Template**
3. Enter template details:
   - **Name**
   - **Description**
   - **Category**
   - **Industry Tags**
   - **Preview Image**
4. Choose visibility:
   - **Private**: Only you can use
   - **Shared**: Available to all stores in your account
5. Click **Save**

Your template appears in the template library for future use.

## Layout Configuration

### Default Layout

Set a layout as default for new displays:

1. Go to **Layouts**
2. Click on layout
3. Enable **Set as Default**
4. Click **Save**

New displays automatically use this layout until you assign a different one.

### Layout Metadata

Store additional information:

- **Creation Date**: Auto-tracked
- **Last Modified**: Auto-tracked
- **Created By**: User who created it
- **Tags**: Organize layouts by tags
- **Notes**: Internal notes

Access via **Layout Settings** → **Metadata**

## Advanced Features

### Multi-Area Layouts

Create complex layouts with multiple content areas:

**Example: Retail Store Front**
- Header: Store logo + time (20% height)
- Main: Promotional video (60% height, 70% width)
- Sidebar: Weather + upcoming events (60% height, 30% width)
- Footer: Rotating announcements (20% height)

**Tips:**
- Use grid system for alignment
- Group related content areas
- Consider visual hierarchy
- Test on actual display size

### Responsive Layouts

Layouts adapt to different display sizes:

**Aspect Ratio Handling:**
- 16:9 layouts scale for widescreen displays
- 9:16 layouts for portrait/vertical displays
- Custom ratios for unique display shapes

**Content Scaling:**
- Images scale proportionally
- Text adjusts for readability
- Videos maintain aspect ratio

### Dynamic Content

Content that updates automatically:

**Real-Time Content:**
- Clock - Updates every second
- Weather - Refreshes every 15 minutes
- Stock Ticker - Updates every minute
- Calendar - Syncs with source

**Scheduled Content:**
- Different content by time of day
- Seasonal content rotation
- Event-based displays

## Best Practices

### Design Guidelines

**Visual Hierarchy:**
1. Most important content: Largest and centered
2. Supporting content: Medium size, secondary position
3. Tertiary content: Smaller, edges or corners

**Color and Contrast:**
- Use high contrast for readability
- Match your brand colors
- Avoid too many competing colors
- Test visibility from distance

**Text Readability:**
- Minimum font size: 24px for body text
- Minimum font size: 48px for headings
- Use sans-serif fonts for clarity
- Limit text content - displays are visual

**Content Balance:**
- Don't overcrowd the display
- Use white space effectively
- Group related content
- Maintain consistent styling

### Performance Optimization

**Image Optimization:**
- Use recommended resolutions
- Compress images before upload
- Avoid unnecessary animations
- Limit number of areas (8-12 max)

**Video Considerations:**
- Keep videos under 2 minutes
- Use web-optimized formats
- Avoid autoplay with sound
- Provide fallback images

**Integration Refresh:**
- Set appropriate refresh intervals
- Don't refresh too frequently
- Cache when possible
- Handle API failures gracefully

### Content Rotation

**Slideshow Areas:**
- Rotate 3-5 images per area
- Duration: 10-15 seconds per image
- Use smooth transitions
- Avoid jarring changes

**Layout Rotation:**
- Use playlists for multiple layouts
- Rotate every 30-60 seconds
- Keep consistent branding across layouts
- Test transitions between layouts

## Common Use Cases

### Retail Store Front

**Layout Structure:**
- **Header**: Logo + tagline + clock
- **Hero**: Large promotional content (sale, new arrivals)
- **Side Panel**: Weather + store hours
- **Footer**: Social media handles + WiFi info

**Recommended:**
- Rotate 3-4 promotional layouts
- Update weekly with new sales
- Include seasonal messaging

### Restaurant Menu Board

**Layout Structure:**
- **Header**: Restaurant name + logo
- **Main Area**: Menu items with prices
- **Sidebar**: Daily specials
- **Footer**: Nutritional info or promotions

**Recommended:**
- Update menu items as needed
- Highlight daily specials
- Show appealing food images

### Employee Break Room

**Layout Structure:**
- **Header**: Company logo + date/time
- **Main Left**: Weekly schedule (ZoomShift)
- **Main Right**: Announcements + events
- **Footer**: Weather + inspirational quote

**Recommended:**
- Schedule updates automatically
- Post company news weekly
- Include employee recognition

### Reception Area

**Layout Structure:**
- **Header**: Welcome message + logo
- **Calendar**: Upcoming events/meetings
- **News**: Company updates via RSS
- **Footer**: Contact information

**Recommended:**
- Professional, welcoming tone
- Clear, readable fonts
- Minimal animation

## Troubleshooting

### Layout Not Displaying

**Check:**
1. Layout saved and published?
2. Assigned to display correctly?
3. Display is online?
4. Content sources are active?

**Common Issues:**
- Unsaved changes not visible
- Content area misconfigured
- Integration errors
- Display offline

### Content Not Showing

**Verify:**
- Content source is active
- Media files uploaded successfully
- Integration credentials valid
- Refresh interval appropriate

### Layout Appears Distorted

**Possible Causes:**
- Aspect ratio mismatch
- Display resolution different than layout
- Image scaling issues
- Browser zoom setting

**Solutions:**
- Match layout ratio to display
- Use recommended resolutions
- Check display settings
- Reset browser zoom to 100%

### Performance Issues

**If layout loads slowly:**
- Reduce number of content areas
- Optimize image/video file sizes
- Decrease integration refresh rates
- Check display internet speed

## Next Steps

- **[Display Setup](../workflows/display-setup.md)** - Assign layouts to displays
- **[Media Library](./media-library.md)** - Upload content for layouts
- **[Integrations](./integrations.md)** - Add dynamic content sources
- **[Playlists](../workflows/content-association.md#playlists)** - Rotate multiple layouts
- **[Troubleshooting](../troubleshooting/display-problems.md)** - Fix display issues
