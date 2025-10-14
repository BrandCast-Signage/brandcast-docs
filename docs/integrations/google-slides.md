---
title: Google Slides
---

# Google Slides Integration

Display your Google Slides presentations directly on BrandCast displays with automatic sync and refresh.

## What is Google Slides Integration?

The Google Slides integration allows you to display presentations from Google Drive on your digital signage. Presentations automatically update when you edit them in Google Slides, making it perfect for dynamic content that changes frequently.

## Use Cases

**Retail Stores:**
- Product catalogs and lookbooks
- Seasonal promotions and sales
- Brand story presentations
- New arrival showcases
- Training materials

**Corporate Offices:**
- Company updates and announcements
- Department metrics and KPIs
- Project status presentations
- Training content
- Event schedules

**Restaurants:**
- Menu boards (daily specials)
- Nutritional information
- Promotional offers
- Franchise updates
- Food safety training

**Real Estate:**
- Property listings
- Market updates
- Agent profiles
- Open house schedules
- Neighborhood highlights

## Key Features

**Automatic Sync:**
- Changes in Google Slides appear on displays within minutes
- No manual upload or export required
- Edit presentations from anywhere

**Flexible Display:**
- Auto-advance slides with custom timing
- Transition effects (fade, slide, none)
- Full-screen or embedded in layouts
- Loop presentations continuously

**Multiple Presentations:**
- Display different presentations on different displays
- Rotate multiple presentations in playlists
- Schedule presentations by time of day

**Permissions:**
- Anyone with link can view (no sign-in required on display)
- Private presentations (requires authentication)
- Shared presentations across team

## Setting Up Google Slides Integration

### Step 1: Prepare Your Presentation

1. Create or open presentation in Google Slides
2. Design slides for digital signage:
   - **Aspect Ratio**: Set to 16:9 (standard for most displays)
   - **Font Size**: Use large, readable fonts (minimum 24pt)
   - **High Contrast**: Ensure text is readable from distance
   - **Simple Layouts**: Avoid cluttered designs
3. Save and note the presentation URL

**Tips:**
- Test readability from 10-15 feet away
- Use bold, sans-serif fonts
- Limit text to key points
- Use high-quality images

### Step 2: Share Your Presentation

**For Public Display (Recommended):**

1. Click **Share** in Google Slides
2. Click **Change** under "General access"
3. Select **Anyone with the link**
4. Set permissions to **Viewer**
5. Click **Done**
6. Copy the sharing link

**For Private Display:**

1. Share with specific email addresses
2. Grant Viewer access
3. Display device must authenticate with Google account

### Step 3: Add to BrandCast

1. Log into BrandCast dashboard
2. Navigate to **Content Sources** → **Integrations**
3. Click **Add Integration**
4. Select **Google Slides**
5. Paste your presentation URL
6. Configure settings:

**Required Fields:**
- **Presentation URL**: Full Google Slides URL
- **Name**: Descriptive name (e.g., "Weekly Specials")

**Optional Fields:**
- **Slide Duration**: Seconds per slide (default: 5)
- **Transition**: Fade, slide, or none (default: fade)
- **Transition Speed**: Fast, medium, or slow
- **Auto-Loop**: Restart when finished (default: yes)
- **Starting Slide**: Begin at specific slide number

7. Click **Test Connection** to verify
8. Click **Save**

### Step 4: Add to Layout

1. Open **Layout Editor**
2. Create or edit a layout
3. Add content area to canvas
4. Set **Content Type** to "Google Slides"
5. Select your Google Slides presentation from **Content Source**
6. Position and size the area
7. Save layout
8. Assign layout to display

## Configuration Options

### Slide Duration

How long each slide appears before advancing:

- **3 seconds**: Fast-paced, attention-grabbing
- **5 seconds**: Standard (recommended)
- **10 seconds**: Detailed information
- **15+ seconds**: Complex slides with lots of content

**Auto Duration:**
- Let Google Slides control timing (if set in presentation)
- Uses slide-specific durations from Slides editor

### Transition Effects

**Fade:**
- Smooth cross-fade between slides
- Professional appearance
- Works well for any content
- Recommended for most use cases

**Slide:**
- Slides move left-to-right
- More dynamic feel
- Good for sequential content
- May be distracting for text-heavy slides

**None:**
- Instant cut between slides
- Fastest transitions
- Best for simple slides
- Can feel abrupt

### Loop Settings

**Continuous Loop:**
- Presentation restarts automatically
- Recommended for most displays
- Ensures constant content

**Play Once:**
- Stop at last slide
- Useful for scheduled presentations
- Requires manual restart or schedule

### Advanced Options

**Refresh Interval:**
- How often to check for presentation updates
- Default: 5 minutes
- Range: 1-60 minutes
- Lower = more frequent updates, more bandwidth

**Cache Duration:**
- How long to store presentation locally
- Default: 1 hour
- Improves performance
- Reduces bandwidth usage

**Quality Settings:**
- **Auto**: Adjusts based on connection (recommended)
- **High**: Best quality, more bandwidth
- **Medium**: Balanced
- **Low**: Faster loading, lower quality

## Layout Integration

### Full-Screen Presentation

**Use Case:** Dedicated presentation display

**Configuration:**
```
Layout: 1920x1080 (16:9)
Content Area: Full screen (0,0 to 1920,1080)
Content Type: Google Slides
Duration: 5 seconds per slide
Transition: Fade
```

**Best For:**
- Product showcases
- Training rooms
- Conference rooms
- Waiting areas

### Split Screen with Other Content

**Use Case:** Presentation + supplementary info

**Configuration:**
```
Main Area (70%): Google Slides presentation
Side Panel (30%): Calendar, weather, or announcements
```

**Example Layout:**
- Slides: 1344x1080 (left 70%)
- Sidebar: 576x1080 (right 30%)

**Best For:**
- Employee information centers
- Reception areas
- Break rooms

### Rotating Presentations

**Use Case:** Multiple presentations on one display

**Method 1: Playlists**
1. Create playlist
2. Add multiple Google Slides content sources
3. Set duration for each (e.g., 2 minutes)
4. Presentations rotate automatically

**Method 2: Schedule**
1. Create separate content sources for each presentation
2. Set up schedule rules:
   - Morning presentation: 8am-12pm
   - Afternoon presentation: 12pm-5pm
   - Evening presentation: 5pm-close

## Best Practices

### Presentation Design

**Slide Design:**
- Use presentation theme consistently
- Limit to 5-7 words per line
- Maximum 3-4 lines per slide
- Large images (avoid small icons)
- High contrast (dark text on light, or vice versa)

**Fonts:**
- Sans-serif fonts (Arial, Roboto, Open Sans)
- Minimum 24pt for body text
- Minimum 36pt for headlines
- Avoid decorative or script fonts

**Colors:**
- Brand colors for consistency
- High contrast ratios (WCAG AA standard)
- Avoid red/green combinations (color blindness)
- Test readability in actual lighting conditions

**Images:**
- High resolution (1920x1080 or better)
- Properly licensed
- Compress for faster loading
- Avoid small, detailed images

### Content Strategy

**Slide Count:**
- 10-20 slides: Ideal for most presentations
- 5-10 slides: Quick updates or promotions
- 20-50 slides: Detailed product catalogs
- 50+ slides: Consider splitting into multiple presentations

**Update Frequency:**
- Daily: Specials, news, metrics
- Weekly: Promotions, schedules
- Monthly: General information
- Seasonal: Campaigns, products

**Message Hierarchy:**
- Most important message first
- One main message per slide
- Support with visuals
- End with call-to-action

### Performance Optimization

**File Size:**
- Keep presentations under 50MB
- Compress images before inserting
- Avoid embedded videos (use separate video content source)
- Remove unused slides

**Refresh Strategy:**
- Frequent updates: 5-10 minute refresh
- Daily updates: 30-60 minute refresh
- Static content: 2-4 hour refresh
- Balance freshness vs. bandwidth

**Multiple Displays:**
- Reuse presentations across displays (saves bandwidth)
- Create display-specific presentations when needed
- Use templates for consistency

## Updating Presentations

### Making Changes

1. Open presentation in Google Slides
2. Make edits:
   - Add/remove/reorder slides
   - Update text and images
   - Change formatting
3. Changes save automatically
4. Display updates within 5-10 minutes

**No Action Needed in BrandCast:**
- Presentations update automatically
- No re-upload required
- No content source changes needed

### Version Control

**Google Slides Features:**
- **Version History**: File → Version history
- **Restore Previous**: Revert to earlier versions
- **Named Versions**: Mark important versions
- **Publish Changes**: Changes push to displays

**Best Practices:**
- Name versions before major changes
- Test changes before business hours
- Keep backup copy of critical presentations
- Review version history regularly

## Troubleshooting

### Presentation Not Displaying

**Symptoms:**
- Blank screen where presentation should be
- Error message on display
- Content area shows loading indefinitely

**Solutions:**

1. **Check Presentation URL**:
   - Paste URL in browser
   - Verify presentation loads
   - Ensure URL is correct format

2. **Verify Sharing Permissions**:
   - Presentation must be "Anyone with link" can view
   - Or display device authenticated with shared email
   - Check Google Drive sharing settings

3. **Test Connection**:
   - Edit content source in BrandCast
   - Click "Test Connection"
   - Review error message if failed

4. **Check Display Connection**:
   - Verify display online
   - Check internet connectivity
   - Test with other content sources

5. **Clear Cache**:
   - Edit content source
   - Force refresh
   - Wait 1-2 minutes

### Slides Not Updating

**Symptoms:**
- Old content still showing
- Recent changes not appearing
- Display shows outdated slides

**Solutions:**

1. **Check Refresh Interval**:
   - May be set too long
   - Reduce to 5-10 minutes
   - Force manual refresh

2. **Verify Changes Saved**:
   - Open presentation in Google Slides
   - Confirm edits are present
   - Check for "Saving..." indicator

3. **Clear Presentation Cache**:
   - Edit content source in BrandCast
   - Click "Force Refresh"
   - Wait 5 minutes for update

4. **Review Version History**:
   - File → Version history in Google Slides
   - Confirm changes saved
   - Restore if needed

5. **Check Google Slides Status**:
   - Visit [Google Workspace Status](https://www.google.com/appsstatus)
   - Verify no outages
   - Wait and retry if service disrupted

### Slow Performance or Stuttering

**Symptoms:**
- Slides advance slowly
- Transitions lag or freeze
- Images load slowly

**Solutions:**

1. **Reduce File Size**:
   - Compress images in presentation
   - Remove unused slides
   - Limit slide count
   - Target under 50MB total

2. **Lower Quality Settings**:
   - Change from "High" to "Medium"
   - Reduces bandwidth usage
   - Improves loading speed

3. **Increase Cache Duration**:
   - Stores presentation longer locally
   - Reduces re-downloading
   - Improves performance

4. **Check Internet Speed**:
   - Test display's connection speed
   - Minimum: 5 Mbps recommended
   - 10+ Mbps for best experience
   - Upgrade connection if needed

5. **Reduce Refresh Frequency**:
   - Increase interval to 30-60 minutes
   - Lower bandwidth usage
   - Better for slower connections

### Slides Cut Off or Misaligned

**Symptoms:**
- Content extends beyond visible area
- Text or images partially hidden
- Slides don't fit display

**Solutions:**

1. **Check Presentation Aspect Ratio**:
   - File → Page setup in Google Slides
   - Set to **Widescreen (16:9)** for most displays
   - Standard (4:3) for older displays
   - Match your display's aspect ratio

2. **Adjust Content Area Size**:
   - Edit layout in BrandCast
   - Ensure content area matches aspect ratio
   - 16:9 example: 1920x1080, 1280x720, etc.

3. **Review Slide Layouts**:
   - Check safe zones in Google Slides
   - Keep important content centered
   - Avoid placing text near edges
   - Test with different slide layouts

## Advanced Features

### Multiple Language Presentations

**Setup:**
1. Create separate presentations per language
2. Add as different content sources
3. Use schedules to switch based on time
4. Or use multiple displays per language

**Example:**
- English: 8am-2pm
- Spanish: 2pm-8pm

### Conditional Content

**Using Schedules:**
1. Create presentation variations
2. Add schedule rules:
   - Breakfast menu: 6am-11am
   - Lunch menu: 11am-2pm
   - Dinner menu: 2pm-close

### A/B Testing

**Compare Presentations:**
1. Create two versions
2. Display on different displays
3. Track engagement metrics
4. Switch to better performer

### Integration with Forms

**Collect Feedback:**
1. Add QR code slide
2. Link to Google Forms
3. Collect customer input
4. Update presentation based on feedback

## Compliance and Legal

### Copyright

**Using Images:**
- Only use licensed or owned images
- Credit sources if required
- Respect Creative Commons licenses
- Purchase stock photos when needed

**Brand Assets:**
- Follow brand guidelines
- Use approved logos and colors
- Get permission for trademark use

### Accessibility

**ADA Compliance:**
- High contrast text/background
- Large, readable fonts
- Avoid flashing or rapid animations
- Include alt text in presentation notes

**Color Blindness:**
- Don't rely solely on color to convey information
- Use patterns, shapes, or text labels
- Test with color blindness simulators

## Next Steps

- **[Content Library](../features/content-library.md)** - Organize presentations
- **[Layouts](../features/layouts.md)** - Design layouts with Google Slides
- **[Playlists](../workflows/playlists.md)** - Rotate multiple presentations
- **[Schedules](../workflows/schedules.md)** - Time-based presentation switching
- **[Troubleshooting](../troubleshooting/integration-problems.md)** - Fix common issues
