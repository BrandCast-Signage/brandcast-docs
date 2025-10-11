---
title: Content Library
---

# Content Library

Your central hub for all content types in BrandCast - from images and videos to integrations and dynamic data.

## Overview

The Content Library in BrandCast encompasses all content you can display on your screens:

**Static Content:**
- Images (JPG, PNG, GIF)
- Videos (MP4, MOV, AVI)
- Text and announcements

**Dynamic Content:**
- Google Slides presentations
- Calendar events
- Weather forecasts
- RSS feeds
- Employee schedules
- Stock market data
- Inspirational quotes

**Interactive Content:**
- Countdown timers
- Real-time clocks
- Task lists
- Custom integrations

All content is organized through **Content Sources** - the foundation of BrandCast's content management system.

## Content Types

### IMAGE

Display static images from your media library.

**Supported Formats:**
- JPG/JPEG - Photos and photographs
- PNG - Graphics with transparency
- GIF - Simple animations

**Use Cases:**
- Product photos
- Promotional graphics
- Brand logos
- Employee photos
- Event posters

**Configuration:**
- Single image or slideshow
- Duration per image (5-60 seconds)
- Transition effects
- Auto-rotation

**See:** [Media Library](./media-library.md) for upload and management

---

### VIDEO

Display video content from your media library.

**Supported Formats:**
- MP4 - Recommended (H.264 codec)
- MOV - QuickTime format
- AVI - Windows video

**Use Cases:**
- Product demonstrations
- Training videos
- Marketing campaigns
- Customer testimonials
- Promotional content

**Configuration:**
- Looping or single play
- Audio on/off (default: off)
- Auto-start
- Fallback image for loading

**Best Practices:**
- Keep under 2 minutes for best performance
- 1920x1080 resolution (Full HD)
- 30 fps frame rate
- No audio (most displays are muted)

**See:** [Media Library](./media-library.md) for video optimization

---

### SLIDES

Display Google Slides presentations with auto-sync.

**Features:**
- Auto-sync with Google Drive
- Slide transitions
- Update changes automatically
- Support for images and text

**Use Cases:**
- Product catalogs
- Menu boards
- Training materials
- Marketing decks
- Company presentations

**Configuration:**
- Slide duration (5-30 seconds)
- Auto-advance enabled
- Refresh interval (15-60 minutes)
- Loop presentation

**Setup:**
1. Create presentation in Google Slides
2. Share with BrandCast
3. Add as content source
4. Configure auto-advance timing

**Limitations:**
- Animations may not render
- Videos within slides not supported
- Maximum 50 slides recommended

**See:** [Integrations](./integrations.md#google-slides) for setup details

---

### TEXT

Display static or scrolling text content.

**Features:**
- Custom text content
- Font selection and sizing
- Color customization
- Scrolling or static display

**Use Cases:**
- Announcements
- Quotes and messages
- Emergency notifications
- Store policies
- Welcome messages

**Configuration:**
- Font family and size
- Text color and background
- Alignment (left, center, right)
- Scrolling speed (if enabled)
- Auto-wrap text

**Text Formatting:**
- Bold, italic, underline
- Multiple colors
- Line spacing
- Padding and margins

---

### CALENDAR

Display upcoming events from calendar integrations.

**Supported Sources:**
- Google Calendar
- iCal/ICS feeds
- Apple Calendar
- Microsoft Outlook

**Features:**
- Show upcoming events
- Filter by calendar
- Color-coding
- Event details display

**Use Cases:**
- Meeting room schedules
- Company events
- Store hours and closings
- Holiday schedules
- Community events

**Configuration:**
- Days ahead to show (1-30)
- Events per view (5-20)
- Event details (time, location, description)
- Multiple calendars combined
- Color per calendar

**Display Formats:**
- List view - Vertical list of events
- Grid view - Calendar grid
- Agenda view - Day-by-day schedule
- Compact - Event names only

**See:** [Integrations](./integrations.md#calendar-integrations) for setup

---

### SCHEDULE

Display employee schedules from scheduling systems.

**Supported Systems:**
- ZoomShift (integrated)
- Custom CSV imports
- API integrations (Enterprise)

**Features:**
- Today's schedule
- Week view
- By department/location
- Real-time updates

**Use Cases:**
- Break room displays
- Manager dashboards
- Reception areas
- Employee check-in

**Configuration:**
- Department filters
- Location filters
- Date range (today, week, month)
- Refresh interval (15-30 minutes)
- Display format (grid, list)

**Information Shown:**
- Employee names
- Shift times
- Positions/roles
- Break times
- Department/location

**See:** [Integrations](./integrations.md#employee-scheduling-zoomshift) for ZoomShift setup

---

### CLOCK

Display real-time clock with customizable formats.

**Features:**
- Real-time updates
- Multiple timezones
- 12/24 hour formats
- Date display

**Use Cases:**
- All displays (standard inclusion)
- Multi-timezone offices
- International locations
- Meeting rooms

**Configuration:**
- Time format (12-hour or 24-hour)
- Show seconds (yes/no)
- Show date
- Timezone selection
- Font size and color

**Display Styles:**
- Digital - LED-style numbers
- Analog - Clock face
- Text - "3:45 PM EST"
- Minimal - Time only

---

### COUNTDOWN

Display countdown timers for events or deadlines.

**Features:**
- Count down to specific date/time
- Event name display
- Auto-remove when expired
- Multiple timezones

**Use Cases:**
- Event countdowns
- Sale deadlines
- Product launches
- Holiday countdowns
- Meeting reminders

**Configuration:**
- Target date/time
- Event name/title
- Display format (days, hours, minutes, seconds)
- What to show after expiration
- Auto-remove or show "Event Started"

**Display Formats:**
- Large format - "5 Days 3 Hours 22 Minutes"
- Compact - "5d 3h 22m"
- Circular - Circular progress indicator
- Percentage - "83% until event"

---

### WEATHER

Display current weather and forecasts.

**Features:**
- Current conditions
- Multi-day forecasts (3, 5, 7 days)
- Temperature, humidity, wind
- Weather icons
- Auto-location detection

**Use Cases:**
- Customer information
- Employee planning
- Outdoor businesses
- Event planning

**Configuration:**
- Location (ZIP code or city)
- Units (Fahrenheit/Celsius)
- Display format (current, forecast, both)
- Refresh interval (15 minutes recommended)
- Show details (humidity, wind, etc.)

**Information Shown:**
- Temperature (current and feels like)
- Conditions (sunny, cloudy, rain, etc.)
- Humidity percentage
- Wind speed and direction
- High/low temperatures
- Precipitation chance

**Display Styles:**
- Current only - Large current temp
- Forecast only - 5-day forecast
- Combined - Current + 3-day forecast
- Minimal - Temp and icon only

**See:** [Integrations](./integrations.md#weather) for setup

---

### QUOTES

Display inspirational or motivational quotes.

**Features:**
- Curated quote library
- Category selection
- Daily rotation
- Author attribution

**Use Cases:**
- Employee motivation
- Customer inspiration
- Break rooms
- Reception areas

**Configuration:**
- Category (inspirational, leadership, success, wisdom)
- Refresh rate (daily, hourly, every 30 min)
- Display style (simple, card, full screen)
- Show author (yes/no)

**Quote Categories:**
- Inspirational - General motivation
- Leadership - Business leadership
- Success - Achievement and goals
- Wisdom - Philosophical insights
- Humor - Light-hearted quotes
- Custom - Upload your own

**See:** [Integrations](./integrations.md#inspirational-quotes) for setup

---

### STOCK_TICKER

Display real-time stock market data in ticker format.

**Features:**
- Real-time stock prices
- Scrolling ticker display
- Multiple symbols
- Price change indicators

**Use Cases:**
- Financial services
- Corporate lobbies
- Investment firms
- Break rooms (employee stock options)

**Configuration:**
- Stock symbols (AAPL, GOOGL, etc.)
- Ticker speed
- Update interval (60 seconds recommended)
- Display format (symbol, price, change)

**Information Shown:**
- Stock symbol
- Current price
- Change amount
- Change percentage
- Color-coded (green up, red down)

**See:** [Integrations](./integrations.md#stock-market-data) for setup

---

### STOCK_CHART

Display stock price charts and graphs.

**Features:**
- Price charts
- Historical data
- Multiple timeframes
- Technical indicators (optional)

**Use Cases:**
- Financial analysis
- Investment displays
- Corporate performance tracking
- Executive dashboards

**Configuration:**
- Stock symbol
- Timeframe (1 day, 1 week, 1 month, 1 year)
- Chart type (line, candlestick, bar)
- Update interval (1-5 minutes)

**Chart Types:**
- Line chart - Simple price line
- Candlestick - OHLC data
- Bar chart - Volume bars
- Area - Filled area under line

**See:** [Integrations](./integrations.md#stock-market-data) for setup

---

### RSS

Display content from RSS feeds (news, blogs, updates).

**Features:**
- Auto-updating feeds
- Multiple feed support
- Content filtering
- Priority ordering

**Use Cases:**
- News tickers
- Company blog posts
- Industry updates
- Social media feeds

**Configuration:**
- Feed URL
- Update interval (5-60 minutes)
- Max items to cache (10-50)
- Display style (ticker, list, cards, full)
- Priority (0-100)

**Display Styles:**
- Ticker - Scrolling text across screen
- List - Vertical list of headlines
- Cards - Image + headline + excerpt
- Full - Full article preview

**See:** [RSS Feeds Guide](../integrations/rss-feeds.md) for comprehensive setup

---

### CANVA

Display designs created in Canva.

**Features:**
- Link to Canva designs
- Auto-sync updates
- Professional templates
- Full design support

**Use Cases:**
- Marketing graphics
- Promotional materials
- Custom branded content
- Seasonal campaigns

**Configuration:**
- Canva share URL
- Refresh interval (15-30 minutes)
- Display duration
- Auto-update on changes

**See:** [Integrations](./integrations.md#canva-integration) for setup

---

### DAD_JOKE

Display daily dad jokes for entertainment.

**Features:**
- Daily dad jokes
- Family-friendly content
- Rotation options
- Reveal animations

**Use Cases:**
- Break rooms
- Casual offices
- Retail stores
- Fun atmosphere

**Configuration:**
- Refresh rate (daily, hourly)
- Display style (full joke, reveal animation)
- Card styling

---

### TASKS

Display task lists and to-dos (Enterprise/FamilyCast).

**Features:**
- Task list display
- Completion status
- Due dates
- Priority indicators

**Use Cases:**
- Project management
- Team to-dos
- Family chores (FamilyCast)
- Shared task lists

**Configuration:**
- Task list source (Google Tasks, Cozi Lists)
- Show completed (yes/no)
- Sort order (priority, due date, alphabetical)
- Refresh interval

---

## Content Sources

All content in BrandCast is managed through **Content Sources**.

### What is a Content Source?

A content source is a configured instance of a content type:

**Examples:**
- Media Library Source → Specific images/videos
- RSS Feed Source → Specific RSS feed URL
- Weather Source → Specific location's weather
- Calendar Source → Specific calendar connection

### Content Source Types

**STATIC**
- Fixed content that doesn't change
- Example: Static text, single image

**LIBRARY**
- Content from media library
- Example: Uploaded images/videos

**INTEGRATION**
- Dynamic content from external services
- Example: Google Slides, Weather, RSS, Calendars

### Creating Content Sources

1. Navigate to **Content Sources**
2. Click **Add Content Source**
3. Choose content type
4. Configure settings
5. Test and save

### Managing Content Sources

**Viewing All Sources:**
- Go to **Content Sources**
- Filter by type, store, or status
- Search by name

**Editing Sources:**
- Click on source name
- Update configuration
- Changes apply to all layouts using this source

**Deactivating Sources:**
- Toggle "Is Active" off
- Stops updating but preserves configuration
- Re-enable anytime

**Deleting Sources:**
- Click **Delete**
- Warning if used in layouts
- Removes from all layouts

## Content Association Workflow

### Step 1: Create Content Source

Prepare your content:
- Upload media to library, OR
- Configure integration (RSS, calendar, etc.), OR
- Enter static text/data

### Step 2: Add to Layout

Include in your layout design:
1. Open Layout Editor
2. Add content area
3. Select content type
4. Choose content source
5. Position and size area

### Step 3: Assign to Display

Deploy to physical screens:
1. Go to display settings
2. Assign layout with content
3. Content appears on screen

**See:** [Content Association Workflow](../workflows/content-association.md) for complete process

## Shared vs. Store-Specific Content

### Shared Content

Available to all stores in your account:

**When to Use:**
- Brand assets and logos
- Corporate messaging
- National promotions
- Standard templates

**Benefits:**
- Centralized management
- Consistent branding
- Single update affects all stores

### Store-Specific Content

Only available to assigned store(s):

**When to Use:**
- Local promotions
- Store manager photos
- Location-specific events
- Regional campaigns

**Benefits:**
- Local customization
- Relevant messaging
- Store autonomy

**See:** [Multi-Store Management](../workflows/multi-store-management.md) for details

## Content Organization

### Tagging

Organize content with tags:

**Example Tags:**
- Season: `summer`, `winter`, `holiday`
- Purpose: `sale`, `announcement`, `training`
- Department: `corporate`, `retail`, `marketing`
- Status: `active`, `draft`, `archived`

**Using Tags:**
- Add when creating content source
- Search by tag
- Filter displays by tag
- Bulk operations by tag

### Folders (Enterprise)

Organize content sources into folders:
- By department
- By campaign
- By season
- By store

### Search and Filters

Find content quickly:
- Search by name or description
- Filter by type (image, video, integration)
- Filter by store
- Filter by active/inactive status
- Sort by creation date, name, or usage

## Content Performance

### Analytics

Track content performance:

**Metrics:**
- Display count - How many displays use this content
- View time - How long content displays
- Update frequency - How often content changes
- Error rate - Integration fetch failures

**Accessing Analytics:**
1. Go to **Content Sources**
2. Click on source
3. View **Analytics** tab

### Optimization Tips

**Images:**
- Compress to 85-90% quality
- Use recommended resolutions
- Avoid excessive file sizes
- Test on actual displays

**Videos:**
- Keep under 2 minutes
- Use H.264 codec
- 30 fps maximum
- No audio (most displays muted)

**Integrations:**
- Set appropriate refresh intervals
- Monitor API usage
- Cache when possible
- Handle errors gracefully

**See:** [Media Library](./media-library.md) for optimization details

## Best Practices

### Content Strategy

**Balance Static and Dynamic:**
- 60-70% static content (control and consistency)
- 30-40% dynamic content (freshness and engagement)

**Update Frequency:**
- Critical content: Daily or more
- Important content: Weekly
- Standard content: Monthly
- Seasonal content: Quarterly

**Content Lifecycle:**
1. Plan - Determine content needs
2. Create - Develop or integrate content
3. Deploy - Assign to displays
4. Monitor - Track performance
5. Update - Refresh as needed
6. Archive - Remove outdated content

### Quality Guidelines

**All Content:**
- High resolution and quality
- Brand-consistent styling
- Appropriate for audience
- Readable from viewing distance
- Tested before deployment

**Text Content:**
- Large fonts (24px minimum)
- High contrast colors
- Short messages (less is more)
- No typos or errors

**Visual Content:**
- Professional appearance
- On-brand colors and fonts
- Clear, sharp images
- Appropriate aspect ratios

**Dynamic Content:**
- Reliable sources
- Appropriate refresh rates
- Error handling
- Fallback content

### Security and Compliance

**Content Review:**
- Review before publishing
- Ensure appropriate for audience
- Check copyright and licensing
- Verify accuracy

**Data Privacy:**
- Don't display sensitive information
- Respect employee privacy (schedules on internal displays only)
- Follow GDPR/privacy regulations
- Secure API credentials

**Content Moderation:**
- Monitor RSS feeds for inappropriate content
- Review user-generated content
- Have removal procedures
- Maintain content policies

## Troubleshooting

### Content Not Displaying

**Check:**
1. Content source is active
2. Content assigned to layout
3. Layout assigned to display
4. Display is online
5. No error messages in source settings

**See:** [Content Problems](../troubleshooting/content-problems.md) for detailed troubleshooting

### Integration Errors

**Common Issues:**
- API credentials expired
- Rate limits exceeded
- Network connectivity
- Feed URL changed

**Solutions:**
- Reauthorize integration
- Increase refresh interval
- Test connection
- Update feed URL

**See:** [Integration Problems](../troubleshooting/integration-problems.md) for detailed troubleshooting

### Slow Performance

**Symptoms:**
- Content loads slowly
- Display lags or freezes
- Delayed updates

**Solutions:**
- Optimize image/video sizes
- Reduce number of content sources per layout
- Increase refresh intervals
- Check display internet speed

## Next Steps

- **[Media Library](./media-library.md)** - Manage images and videos
- **[Layouts](./layouts.md)** - Design layouts with content
- **[Integrations](./integrations.md)** - Set up dynamic content
- **[Content Association](../workflows/content-association.md)** - Deploy content to displays
- **[Troubleshooting](../troubleshooting/content-problems.md)** - Fix content issues
