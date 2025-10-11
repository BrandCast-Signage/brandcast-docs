---
title: Content Association
---

# Content Association

Learn how to connect your content (images, videos, integrations) to your displays.

## Overview

Content association is how you control what appears on your displays. In BrandCast:
- Each display can show multiple pieces of content
- Each piece of content can appear on multiple displays
- You control associations through layouts and assignments

## Content Association Methods

### Method 1: Using Layouts (Recommended)

The most common way to associate content with displays:

1. **Create a Layout**
   - Go to **Layouts** → **Create Layout**
   - Add content areas to your layout canvas
   - Drag and drop content into each area

2. **Assign Layout to Display**
   - Go to **Displays**
   - Click on your display
   - Under **Active Layout**, select your layout
   - Click **Update**

Your display immediately shows the new layout with associated content.

### Using Playlists

Playlists let you rotate multiple pieces of content in a single area:

1. **Create Playlist**
   - Go to **Library** → **Playlists**
   - Click **Create Playlist**
   - Name your playlist (e.g., "Product Showcase")

2. **Add Content to Playlist**
   - Drag media files from your library
   - Set display duration for each item
   - Reorder items by dragging

3. **Add Playlist to Layout**
   - Open your layout in the Layout Editor
   - Select a content area
   - Choose **Source** → **Playlist**
   - Select your playlist
   - Save layout

**Playlist Settings:**
- **Duration**: How long each item displays (default: 10 seconds)
- **Transition**: Fade, slide, or none
- **Loop**: Automatically restart when finished

### Using Schedules

Schedule different content for different times:

1. **Create Schedule**
   - Go to **Schedules** → **Create Schedule**
   - Name your schedule (e.g., "Daily Promotions")

2. **Add Time Blocks**
   - Click **Add Time Block**
   - Set day(s) of week
   - Set start and end times
   - Assign content or playlist

3. **Assign Schedule to Display**
   - Go to your display settings
   - Under **Scheduling**, select your schedule
   - Click **Update**

**Example Schedule:**
```
Monday-Friday:
  9am-12pm:  Morning Specials
  12pm-2pm:  Lunch Menu
  2pm-5pm:   Afternoon Deals
  5pm-close: Evening Promotions

Saturday-Sunday:
  All Day:   Weekend Specials
```

## Content Types and Associations

### Static Media (Images/Videos)

**Best for:**
- Product photos
- Promotional graphics
- Video announcements

**Association:**
- Add to layouts directly
- Include in playlists
- Schedule for specific times

### Dynamic Content (Integrations)

**Google Slides:**
- Associate by connecting Google account
- Select presentation
- Set refresh interval

**RSS Feeds:**
- Add feed URL
- Configure update frequency
- Style feed display

**Calendar:**
- Connect Google Calendar
- Select calendars to display
- Choose event filters

**Weather:**
- Configure location
- Select data to show (temp, forecast, alerts)
- Set update interval

See [Integrations](../features/integrations.md) for detailed setup.

## Managing Content Associations

### Viewing Current Associations

**For a Display:**
1. Go to **Displays**
2. Click on display name
3. View **Active Layout** section
4. See all associated content

**For Content:**
1. Go to **Library**
2. Click on content item
3. View **Used In** section
4. See which displays use this content

### Changing Associations

**Update Display Content:**
1. Go to display settings
2. Change **Active Layout**
3. Or edit the current layout
4. Changes appear immediately

**Update Playlist Content:**
1. Go to **Library** → **Playlists**
2. Edit playlist
3. Add/remove/reorder items
4. Save changes
5. All displays using this playlist update automatically

### Removing Associations

**Remove Content from Display:**
- Edit the layout and remove content areas
- Switch to a different layout
- Deactivate the display

**Remove Content from Playlist:**
- Edit playlist
- Click X next to content item
- Save changes

## Multi-Store Content Management

### Shared Content

Content can be shared across multiple stores:

1. **Upload to Shared Library**
   - Mark content as **Shared** during upload
   - Or edit content and enable **Share Across Stores**

2. **Associate with Multiple Displays**
   - Shared content appears in all stores' libraries
   - Each store can use it in their own layouts
   - Updates to content appear everywhere

### Store-Specific Content

Keep content local to one store:

1. Upload without **Shared** checkbox
2. Content only appears in that store's library
3. Can only be used on displays in that store

**Use Cases:**
- **Shared**: Brand logos, corporate announcements, product images
- **Store-Specific**: Local promotions, store hours, staff schedules

See [Multi-Store Management](./multi-store-management.md) for more details.

## Best Practices

### Content Organization

**Use Tags:**
- Tag content by category (promotions, products, seasonal)
- Filter by tags when building layouts
- Quickly find relevant content

**Name Clearly:**
- Use descriptive names: "Summer Sale 2024" not "image123.jpg"
- Include dates for time-sensitive content
- Add version numbers if you iterate

**Archive Old Content:**
- Remove outdated promotional content
- Keep historical content for reference
- Clean up unused content monthly

### Layout Design

**One Layout Per Display Type:**
- Create "Store Front" layout template
- Create "Break Room" layout template
- Duplicate and customize as needed

**Consistent Areas:**
- Keep content areas in same positions
- Use same area names across layouts
- Makes switching layouts seamless

**Test Before Deploying:**
- Preview layout before assigning
- Check on actual display if possible
- Verify all content loads correctly

### Scheduling Strategy

**Plan Ahead:**
- Schedule promotional content in advance
- Set up holiday schedules early
- Review schedule weekly

**Don't Over-Schedule:**
- Leave some flexibility for urgent updates
- Don't schedule every minute of every day
- Allow default content to show sometimes

**Coordinate with Team:**
- Share schedule calendar with content creators
- Set deadlines for content submission
- Review schedule in team meetings

## Troubleshooting

### Content Not Appearing on Display

**Check:**
1. Is content associated with the display's layout?
2. Is the layout assigned to the display?
3. Is the display active and connected?
4. Is content within a scheduled time block?

**Solutions:**
- Verify layout assignment in display settings
- Check that content area has content assigned
- Ensure schedule includes current time
- Refresh display connection

### Content Appears on Wrong Display

**Check:**
1. Which layout is assigned to the display?
2. Is the layout shared across displays?
3. Are store assignments correct?

**Solutions:**
- Verify display is using correct layout
- Create separate layouts for different displays
- Check multi-store settings

### Playlist Not Rotating

**Check:**
1. Does playlist have multiple items?
2. Is duration set for each item?
3. Is display active and connected?

**Solutions:**
- Add at least 2 items to playlist
- Set duration (minimum 5 seconds)
- Check display connection status
- Try reloading display

### Schedule Not Activating

**Check:**
1. Is current time within schedule block?
2. Is schedule assigned to display?
3. Are day/time settings correct?

**Solutions:**
- Verify schedule time blocks include now
- Check timezone settings match display
- Ensure schedule is enabled
- Review schedule assignment

## Next Steps

- **[Display Setup](./display-setup.md)** - Configure display settings
- **[User Management](./user-management.md)** - Control who can manage content
- **[Content Library](../features/content-library.md)** - Organize your media
- **[Layouts](../features/layouts.md)** - Design custom layouts
- **[Integrations](../features/integrations.md)** - Add dynamic content sources
