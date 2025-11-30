---
title: Playlists
---

# Playlists

Rotate multiple layouts automatically on your displays with playlists for dynamic, engaging content.

## What are Playlists?

Playlists allow you to show multiple layouts in sequence on a single display. Each layout appears for a set duration before automatically transitioning to the next, creating a dynamic slideshow effect.

**Use Cases:**
- Rotate between product categories
- Show promotions, then announcements, then social feeds
- Display morning content, then switch to afternoon content
- Alternate between different information types

## Playlists vs. Schedules

**Playlists:**
- Continuous rotation of layouts
- Fixed order (Layout A → B → C → repeat)
- Each layout has duration
- Always running

**Schedules:**
- Time-based layout switching
- Different content at different times
- Rule-based (9am: Layout A, 12pm: Layout B)
- More complex control

**Use Both Together:**
- Schedule controls WHICH playlist plays WHEN
- Playlist controls HOW layouts rotate WITHIN that time
- Example: Morning playlist 8am-12pm, Afternoon playlist 12pm-5pm

## Creating a Playlist

### Step 1: Create Playlist

1. Navigate to **Content** → **Playlists**
2. Click **Create Playlist**
3. Enter details:
   - **Name**: Descriptive name (e.g., "Product Showcase Rotation")
   - **Description**: Optional notes about purpose
   - **Store**: Which store/location this applies to

### Step 2: Add Layouts

1. Click **Add Layout** in playlist editor
2. Select layout from dropdown
3. Configure:
   - **Duration**: How long this layout displays (seconds)
   - **Order**: Position in rotation sequence
4. Repeat for additional layouts

**Minimum:** 2 layouts required
**Maximum:** No limit, but 3-8 layouts typical

### Step 3: Configure Transitions

**Transition Style:**
- **Fade**: Smooth crossfade between layouts (recommended)
- **Slide Left**: Layouts slide from right to left
- **Slide Right**: Layouts slide from left to right
- **Slide Up**: Layouts slide from bottom to top
- **Slide Down**: Layouts slide from top to bottom
- **None**: Instant cut (fastest, but abrupt)

**Transition Speed:**
- **Fast**: 0.3 seconds
- **Medium**: 0.6 seconds (recommended)
- **Slow**: 1.0 seconds

### Step 4: Set Default Duration

**What It Does:**
- Applied to all layouts that don't have custom duration
- Simplifies setup when most layouts should display same time
- Individual layouts can override

**Recommended Durations:**
- **15-20 seconds**: Quick rotation, high engagement
- **30 seconds**: Standard (most common)
- **45-60 seconds**: Detailed content, slower pace
- **2-3 minutes**: Complex information, minimal rotation

### Step 5: Activate Playlist

1. Toggle **Active** switch to ON
2. Click **Save Playlist**
3. Assign to display(s)

**Inactive Playlists:**
- Saved but not running
- Useful for seasonal content
- Can activate/deactivate anytime

## Assigning Playlists to Displays

### Method 1: From Display Settings

1. Go to **Displays** → Select display
2. **Content Assignment** section
3. **Playlist** dropdown → Select playlist
4. Click **Save**

**Result:** Display immediately starts rotating through playlist layouts

### Method 2: From Playlist Editor

1. Edit playlist
2. **Assigned Displays** section
3. Check displays that should use this playlist
4. Click **Save**

**Result:** Selected displays switch to this playlist

### Multiple Displays

**Same Playlist:**
- Multiple displays can use same playlist
- Synchronized rotation (start at same time)
- Or independent (each starts when assigned)

**Different Playlists:**
- Each display can have unique playlist
- Different content per location
- Mix and match as needed

## Managing Playlist Content

### Reordering Layouts

**Drag and Drop:**
1. Click and hold layout in list
2. Drag to new position
3. Release to drop
4. Order updates automatically

**Or Use Order Field:**
1. Edit layout in playlist
2. Change **Order** number
3. Save
4. Layouts re-sort automatically

### Changing Duration

**Per Layout:**
1. Edit layout in playlist
2. Update **Duration** (seconds)
3. Save

**Bulk Update:**
1. Change **Default Duration** at playlist level
2. Applies to all layouts without custom duration
3. Individual custom durations remain unchanged

### Adding/Removing Layouts

**Add Layout:**
- Click **Add Layout**
- Select from available layouts
- Set duration and order
- Save

**Remove Layout:**
- Click **Remove** (❌) next to layout
- Confirm deletion
- Playlist updates immediately

**Replace Layout:**
- Remove old layout
- Add new layout in same order position

### Duplicating Playlists

**Use Case:** Create similar playlist for different store

**Steps:**
1. View playlist details
2. Click **Duplicate**
3. Name new playlist
4. Select target store
5. Edit as needed

**Result:** Copy of playlist with all layouts and settings

## Advanced Playlist Features

### Weighted Rotation

**What It Does:**
- Some layouts appear more frequently than others
- Based on duration (longer = more impressions)
- Or explicit weight setting

**Example:**
```
Layout A: 30 seconds (1x weight)
Layout B: 60 seconds (2x weight) ← Appears twice as often
Layout C: 30 seconds (1x weight)

Rotation: A → B → C → B → A → B → C → B (repeats)
```

**Setup:**
1. Edit playlist
2. Enable **Weighted Rotation**
3. Set weight per layout (1-10)
4. Higher weight = more frequent appearance

### Dynamic Playlists

**Content-Based Rotation:**
- Layouts automatically added based on rules
- Example: "All promotions" playlist includes any layout tagged "promotion"
- Updates when new layouts created

**Setup:**
1. Enable **Dynamic Playlist**
2. Set filtering rules:
   - Tag-based
   - Date-based (layouts valid today)
   - Content type-based
3. Save

**Benefit:** Playlists update automatically, no manual management

### Playlist Scheduling

**Combine with Schedules:**
- Different playlists at different times
- Example:
  - Breakfast Playlist: 6am-11am
  - Lunch Playlist: 11am-2pm
  - Dinner Playlist: 2pm-10pm

**Setup:**
1. Create schedule (see [Schedules documentation](./schedules.md))
2. Add rules with playlists as target
3. Assign schedule to display

### Conditional Playlists

**Rules-Based Activation:**
- Weather-based: Rain playlist vs. Sunny playlist
- Stock level-based: Low stock highlights
- Time-sensitive: Flash sale playlist

**Requires:** 5+ displays (Advanced Analytics & Logic)

## Best Practices

### Playlist Design

**Layout Count:**
- **2-3 layouts**: Simple rotation, easy to follow
- **4-6 layouts**: Standard, good variety
- **7-10 layouts**: High variety, longer cycle
- **10+ layouts**: Consider splitting into multiple playlists

**Total Cycle Time:**
- Calculate: Sum of all layout durations = one complete cycle
- Recommended: 2-5 minutes per cycle
- Too short (&lt;1 min): Disorienting
- Too long (&gt;10 min): May miss content

**Content Variety:**
- Mix content types (promos, info, social, etc.)
- Avoid repetitive layouts
- Balance text-heavy and visual layouts
- Keep pacing interesting

### Duration Guidelines

**Content Type Recommendations:**
- **Images/Photos**: 10-15 seconds
- **Simple Text**: 15-20 seconds
- **Detailed Information**: 30-45 seconds
- **Complex Data/Charts**: 45-60 seconds
- **Video Layouts**: Duration of video + 5 seconds
- **Interactive Content**: 60+ seconds

**Reading Time Formula:**
- Count words on layout
- Average reading speed: 200-250 words/minute
- Add 5-10 seconds buffer
- Example: 50 words = 12-15 seconds minimum

**Adjust for Audience:**
- Retail (quick browsing): Shorter durations
- Waiting areas: Longer durations
- Employee break rooms: Longer durations
- High-traffic areas: Shorter durations

### Transition Selection

**Fade (Recommended):**
- Professional appearance
- Works with all content types
- No jarring motion
- Universal choice

**Slide Transitions:**
- More dynamic
- Good for sequential content (step 1 → step 2)
- Can be distracting if overused
- Match slide direction to content flow

**None (Instant Cut):**
- Use sparingly
- Best for very similar layouts
- News/stock ticker style
- When speed matters most

### Performance Optimization

**Layout Complexity:**
- Simpler layouts transition faster
- Heavy layouts may cause lag
- Optimize images (compress, resize)
- Limit simultaneous animations

**Caching:**
- Playlists pre-load next layout
- Ensures smooth transitions
- More layouts = more memory usage
- Keep playlist size reasonable (&lt;15 layouts)

**Network Considerations:**
- Content-heavy playlists need good bandwidth
- Video in playlists especially demanding
- Test on actual display hardware
- Consider lower-res content for slower connections

## Monitoring Playlist Performance

### Playback Analytics

**Metrics Available:**
- Views per layout
- Average view duration
- Completion rate (full duration viewed)
- Skip/interrupt rate

**Access:**
1. **Analytics** → **Content Performance**
2. Filter by playlist
3. View layout-level metrics

**Use Insights to:**
- Identify underperforming layouts
- Optimize duration allocations
- Remove low-engagement content
- Test and iterate

### Display Health

**Monitor:**
- Playlist running smoothly?
- Transitions working correctly?
- No frozen/crashed displays?

**Check:**
1. **Displays** → Display health dashboard
2. Review error logs
3. Check last successful playlist rotation

**Common Issues:**
- Display offline → Playlist paused
- Network issues → Choppy transitions
- Content load failures → Skips layouts

## Troubleshooting

### Playlist Not Playing

**Symptoms:**
- Display shows single layout, not rotating
- Playlist assigned but not active
- Blank screen

**Check:**
1. **Playlist Active:** Ensure playlist toggle is ON
2. **Display Assignment:** Verify playlist assigned to display
3. **Display Online:** Check display connection status
4. **Layouts Exist:** Confirm all layouts in playlist are valid (not deleted)

**Solutions:**
- Re-assign playlist to display
- Toggle playlist active status off/on
- Restart display
- Check display logs for errors

### Layouts Not Transitioning

**Symptoms:**
- Stuck on one layout
- No rotation happening
- Long delay between layouts

**Check:**
1. **Duration Settings:** Verify durations not set extremely long
2. **Network Connection:** Slow network may delay transitions
3. **Content Loading:** Heavy content may cause delays

**Solutions:**
- Reduce layout complexity
- Optimize images and media
- Check network speed at display location
- Force refresh display

### Wrong Order or Missing Layouts

**Symptoms:**
- Layouts appear in incorrect order
- Some layouts never appear
- Random skipping

**Check:**
1. **Order Numbers:** Verify order field set correctly (1, 2, 3, etc.)
2. **Active Status:** Ensure all layouts in playlist are active
3. **Permissions:** Verify display has access to all layouts

**Solutions:**
- Edit playlist, review order
- Check individual layout settings
- Remove and re-add problematic layouts
- Clear display cache

### Transition Issues

**Symptoms:**
- Choppy or laggy transitions
- Black screen between layouts
- No transition effect applied

**Check:**
1. **Display Performance:** Old/slow hardware may struggle
2. **Transition Setting:** Verify transition selected correctly
3. **Layout Compatibility:** Some content types don't transition well

**Solutions:**
- Use "None" transition for better performance
- Upgrade display hardware if needed
- Simplify layouts
- Reduce transition speed

### Sync Issues (Multiple Displays)

**Symptoms:**
- Displays showing different layouts at same time
- Out of sync rotation
- Some displays ahead/behind others

**Explanation:**
- By default, displays start playlist when assigned
- Each display independent
- Synchronization not automatic

**To Synchronize:**
1. Assign playlist to all displays simultaneously
2. Or use schedule to start all at specific time
3. **Content Sync:** Available for accounts with 3+ displays

## Examples and Use Cases

### Retail Store Rotation

**Scenario:** Clothing store wants to showcase products

**Playlist Setup:**
```
Name: "Product Showcase"
Default Duration: 30 seconds
Transition: Fade (Medium)

Layouts:
1. New Arrivals (30 sec)
2. Summer Sale Promotion (45 sec - longer for CTA)
3. Customer Testimonials (30 sec)
4. Social Media Feed (30 sec)
5. Loyalty Program Benefits (30 sec)

Total Cycle: 2 minutes 45 seconds
```

**Result:** Customers see variety of content, with extra emphasis on current promotion.

### Restaurant Menu Rotation

**Scenario:** QSR wants to show full menu across day parts

**Playlist Setup:**
```
Name: "All-Day Menu"
Default Duration: 20 seconds
Transition: Slide Left

Layouts:
1. Breakfast Menu (20 sec)
2. Lunch Specials (25 sec)
3. Dinner Combos (25 sec)
4. Desserts & Drinks (15 sec)
5. Catering Options (20 sec)

Total Cycle: 1 minute 45 seconds
```

Combined with schedule:
- Breakfast playlist: 6am-11am (emphasizes breakfast)
- Lunch/Dinner playlist: 11am-close (emphasizes lunch/dinner)

### Corporate Office Information Center

**Scenario:** Company wants to keep employees informed

**Playlist Setup:**
```
Name: "Employee Info Hub"
Default Duration: 45 seconds
Transition: Fade (Slow)

Layouts:
1. Company Announcements (60 sec)
2. Department Metrics Dashboard (45 sec)
3. Upcoming Events Calendar (45 sec)
4. Employee Recognition (45 sec)
5. Safety Reminders (30 sec)
6. Wellness Tips (30 sec)

Total Cycle: 4 minutes 45 seconds
```

**Result:** Comprehensive employee information, longer durations for reading.

## Next Steps

- **[Schedules](./schedules.md)** - Time-based content control
- **[Layouts](../features/layouts.md)** - Design layouts for playlists
- **[Content Association](./content-association.md)** - Assign content to displays
- **[Analytics](../features/analytics.md)** - Track playlist performance
- **[Display Setup](./display-setup.md)** - Optimize displays for playlists
