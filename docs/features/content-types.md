---
title: Content Types Reference
---

# Content Types Reference

Complete guide to all 19 content types available in BrandCast for creating engaging digital signage displays.

## Overview

BrandCast supports 19 different content types, from static images to dynamic integrations. Each content type serves specific use cases and can be combined in layouts for rich, varied displays.

**Content Categories:**
- **Static Media:** Images, Videos, Text
- **Time-Based:** Clock, Countdown, Calendar
- **Dynamic Data:** Weather, Stock Market, RSS Feeds
- **Integrations:** Google Slides, Canva, Reviews, Tasks
- **Fun & Engagement:** Dad Jokes, Quotes, Daily Inspiration

---

## Static Content Types

### IMAGE

**Description:** Display static images (photos, graphics, logos, promotional materials)

**Supported Formats:**
- JPEG/JPG (.jpg, .jpeg)
- PNG (.png) - supports transparency
- GIF (.gif) - animated GIFs supported
- WebP (.webp) - modern format, smaller files

**Use Cases:**
- Product photos
- Promotional graphics
- Logos and branding
- Menu boards
- Wayfinding signage
- QR codes

**Configuration:**
- **Source:** Upload to Media Library or URL
- **Fit:** Fill, Contain, Cover, Scale-down
- **Position:** Center, Top, Bottom, Left, Right
- **Duration:** How long image displays (if in playlist)

**Best Practices:**
- Resolution: 1920x1080 (Full HD) recommended
- File size: Under 5MB for best performance
- Use PNG for graphics with transparency
- Optimize/compress before uploading
- High contrast for readability

**Example Usage:**
```
Content Area: 1920x1080 (fullscreen)
Content Type: IMAGE
Source: media-library://summer-sale-banner.jpg
Fit: Cover
Duration: 15 seconds
```

---

### VIDEO

**Description:** Display video content with audio playback

**Supported Formats:**
- MP4 (.mp4) - recommended
- WebM (.webm)
- MOV (.mov)
- AVI (.avi) - may need transcoding

**Use Cases:**
- Product demonstrations
- Brand storytelling
- Customer testimonials
- Training videos
- Event highlights
- Promotional clips

**Configuration:**
- **Source:** Upload to Media Library or URL
- **Playback:** Loop, Play once, Auto-play
- **Audio:** On/Off, Volume level
- **Controls:** Show/hide player controls
- **Start Time:** Begin at specific timestamp
- **End Time:** Stop at specific timestamp

**Best Practices:**
- Resolution: 1920x1080 (Full HD)
- Frame rate: 30fps standard
- Codec: H.264 for best compatibility
- File size: Under 100MB recommended
- Length: 15-90 seconds ideal for digital signage
- Audio: Mix for ambient playback (if used)
- Subtitles: Include for audio-off scenarios

**Considerations:**
- Video files larger than images
- Bandwidth requirements higher
- Loop seamlessly for continuous play
- Test on actual display hardware

---

### TEXT

**Description:** Display text content with rich formatting

**Use Cases:**
- Announcements
- Special instructions
- Quick messages
- Headings and labels
- Quotes and testimonials
- Event information

**Configuration:**
- **Text Content:** Body text (supports Markdown)
- **Font Family:** Choose from available fonts
- **Font Size:** 12px - 200px
- **Font Weight:** Thin, Normal, Bold, Extra Bold
- **Color:** Text color (hex or RGB)
- **Background:** Background color or transparent
- **Alignment:** Left, Center, Right, Justify
- **Padding:** Space around text
- **Line Height:** Spacing between lines

**Formatting Options:**
- **Bold:** `**text**` or `__text__`
- **Italic:** `*text*` or `_text_`
- **Lists:** Bullet points and numbered
- **Links:** `[text](url)` (clickable if interactive display)
- **Headings:** `# H1`, `## H2`, `### H3`

**Best Practices:**
- Large, readable fonts (minimum 24px)
- High contrast (dark on light or vice versa)
- Limited text (10-15 words max)
- Sans-serif fonts for digital displays
- Test readability from viewing distance
- Use headings to create hierarchy

---

## Time-Based Content Types

### CLOCK

**Description:** Display current time in various formats

**Use Cases:**
- Employee break rooms
- Waiting areas
- Transit hubs
- Office lobbies
- Retail stores

**Display Formats:**
- **Digital:** 12-hour (3:45 PM)
- **Digital:** 24-hour (15:45)
- **Analog:** Classic clock face
- **World Clock:** Multiple time zones
- **Countdown Clock:** Time until specific event

**Configuration:**
- **Format:** 12hr, 24hr, or analog
- **Time Zone:** Select from list
- **Show Seconds:** Yes/No
- **Show Date:** Yes/No (below time)
- **Style:** Choose clock design/theme
- **Size:** Small, Medium, Large, Full

**Styling Options:**
- Font customization (digital)
- Clock face design (analog)
- Colors and backgrounds
- Animations (smooth second hand, flip numbers)

**Best Practices:**
- Large enough to read from distance
- High contrast for visibility
- Sync with display device time
- Consider audience (12hr vs 24hr preference)

---

### COUNTDOWN

**Description:** Count down to specific date/time or count up from past date

**Use Cases:**
- Event countdowns (product launch, sale end)
- Days until holiday
- Time since last accident
- Grand opening countdown
- Time remaining in promotion

**Configuration:**
- **Target Date/Time:** What to count to/from
- **Count Direction:** Down (to) or Up (from)
- **Display Units:** Days, Hours, Minutes, Seconds
- **Labels:** "Days", "Hours", etc.
- **Completion Message:** What shows when countdown reaches zero
- **Completion Action:** Loop, hide, show message

**Display Formats:**
- **Full:** "5 Days 3 Hours 24 Minutes"
- **Compact:** "5d 3h 24m"
- **Large Number:** "5" with "DAYS" label
- **Progress Bar:** Visual percentage

**Best Practices:**
- Include context ("Sale ends in...")
- Use for urgency and FOMO
- Large, prominent numbers
- Update frequently (every second if showing seconds)
- Have completion plan

**Example:**
```
Countdown to Black Friday Sale
Target: November 24, 2025 00:00:00
Display: Large Numbers
Show: Days and Hours only
Message: "SALE NOW LIVE!"
```

---

### CALENDAR

**Description:** Display calendar events and schedules

**Use Cases:**
- Meeting room schedules
- Event calendars
- Class schedules
- Appointment availability
- Team schedules

**Configuration:**
- **Source:** iCal feed, Google Calendar, or manual entries
- **View:** Day, Week, Month, Agenda
- **Time Range:** Today, This Week, Next 7 Days, etc.
- **Filter:** By calendar, category, or keyword
- **Colors:** Color-code by calendar or category

**Display Modes:**
- **Day View:** Today's schedule, hourly breakdown
- **Week View:** 7-day grid
- **Month View:** Full month calendar
- **Agenda:** Linear list of upcoming events
- **Current + Next:** Show current event and what's next

**Best Practices:**
- Limit to relevant events
- Clear, large event titles
- Color-code for quick identification
- Show location if relevant
- Update frequency: Every 5-15 minutes

---

## Dynamic Data Content Types

### WEATHER

**Description:** Display current weather conditions and forecasts

**Use Cases:**
- Retail stores
- Office lobbies
- Outdoor venues
- Travel centers
- Event spaces

**Data Displayed:**
- Current temperature
- Current conditions (sunny, cloudy, rain, etc.)
- "Feels like" temperature
- Humidity percentage
- Wind speed and direction
- 5-7 day forecast
- Hourly forecast
- Sunrise/sunset times
- UV index
- Air quality index (AQI)

**Configuration:**
- **Location:** ZIP code, city name, or GPS coordinates
- **Units:** Fahrenheit or Celsius
- **Display Style:** Compact, Detailed, or Minimal
- **Forecast:** Show/hide multi-day
- **Icons:** Choose weather icon set
- **Update Frequency:** Every 30-60 minutes

**Display Styles:**
- **Compact:** Current temp + icon
- **Standard:** Current + 3-day forecast
- **Detailed:** Full data + 7-day forecast
- **Icon Only:** Large weather icon with temp

**Best Practices:**
- Update every 30 minutes minimum
- Include "feels like" temp in extreme weather
- Show forecast for planning
- Match icon style to brand
- Consider location accuracy (building vs. zip code)

---

### STOCK_TICKER

**Description:** Display real-time stock quotes in scrolling ticker format

**Details:** See [Stock Market Integration](../integrations/stock-market.md) for full guide

**Use Cases:**
- Financial services offices
- Trading floors
- Corporate offices
- Investment firms
- Business news displays

**Configuration:**
- **Watchlist:** Select stocks to display
- **Display Format:** Symbol, Price, Change, % Change
- **Scroll Speed:** Slow, Medium, Fast
- **Direction:** Left-to-right or Right-to-left
- **Update Interval:** 1-5 minutes
- **Market Hours Only:** Yes/No

**Best Practices:**
- Limit to 20-30 symbols
- Use standard ticker format
- Color code (green up, red down)
- Include major indices (DOW, S&P, NASDAQ)
- Update every 5 minutes during market hours

---

### STOCK_CHART

**Description:** Display stock price charts with historical data

**Details:** See [Stock Market Integration](../integrations/stock-market.md) for full guide

**Use Cases:**
- Financial analysis displays
- Executive dashboards
- Investment presentations
- Portfolio monitoring

**Chart Types:**
- Line chart
- Candlestick
- Area chart
- Bar chart

**Configuration:**
- **Symbol:** Stock to chart
- **Time Range:** 1 day, 1 week, 1 month, 1 year, all time
- **Chart Type:** Line, candlestick, area, bar
- **Indicators:** Moving averages, volume, RSI, etc.
- **Update Interval:** 5-15 minutes

---

### RSS

**Description:** Display content from RSS feeds (news, blogs, updates)

**Details:** See [RSS Feeds Integration](../integrations/rss-feeds.md) for full guide

**Use Cases:**
- Company news
- Industry updates
- Blog posts
- Press releases
- Product announcements

**Display Modes:**
- **Ticker:** Scrolling headlines
- **List:** Vertical list of items
- **Cards:** Individual cards with images
- **Full Content:** Detailed article view

**Configuration:**
- **Feed URL:** RSS/Atom feed URL
- **Max Items:** How many to display
- **Update Interval:** Fetch frequency
- **Display Style:** Ticker, list, cards, or full
- **Show Images:** Yes/No
- **Truncate:** Limit content length

---

## Integration Content Types

### SLIDES

**Description:** Display Google Slides presentations

**Details:** See [Google Slides Integration](../integrations/google-slides.md) for full guide

**Use Cases:**
- Product catalogs
- Training materials
- Company presentations
- Menu boards
- Brand guidelines

**Configuration:**
- **Presentation URL:** Google Slides share link
- **Slide Duration:** Seconds per slide
- **Transition:** Fade, slide, or none
- **Auto-Loop:** Restart when finished
- **Starting Slide:** Begin at specific slide number

**Best Practices:**
- Design for 16:9 aspect ratio
- Large fonts (24pt minimum)
- High contrast
- Simple layouts
- 10-30 slides optimal

---

### CANVA

**Description:** Display designs from Canva

**Use Cases:**
- Social media graphics
- Promotional designs
- Branded content
- Design templates
- Marketing materials

**Configuration:**
- **Canva URL:** Shareable Canva link
- **Auto-Refresh:** Check for updates
- **Duration:** Display time (if in playlist)

**Requirements:**
- Canva design must be published/shared
- Design should be 1920x1080 for best quality
- Static designs only (no Canva animations in BrandCast)

---

### REVIEWS

**Description:** Display customer reviews from Google Business Profile

**Details:** See [Google Business Reviews Integration](../integrations/google-business-reviews.md) for full guide

**Use Cases:**
- Build credibility
- Showcase satisfaction
- Social proof
- Customer feedback

**Display Styles:**
- Cards with star ratings
- Slideshow (one review at a time)
- List of reviews
- Ticker with review snippets

**Configuration:**
- **Location:** Which Google Business location
- **Filter:** Minimum star rating (e.g., 4-5 stars only)
- **Show Replies:** Include business responses
- **Max Reviews:** How many to display
- **Update:** Sync frequency

---

### TASKS

**Description:** Display task lists from Google Tasks or Cozi Lists

**Use Cases:**
- Team todo lists
- Project task tracking
- Employee checklists
- Daily task boards

**Configuration:**
- **Source:** Google Tasks or Cozi
- **List:** Which task list to show
- **Filter:** Completed, Pending, All
- **Sort:** By due date, priority, or manual
- **Show Completed:** Yes/No

**Display:**
- Checkbox + task name
- Due date (if set)
- Priority indicator
- Progress bar (% complete)

---

## Engagement Content Types

### DAD_JOKE

**Description:** Display family-friendly dad jokes for entertainment

**Use Cases:**
- Break rooms
- Waiting areas
- Family-friendly businesses
- Ice breakers
- Light-hearted content

**Configuration:**
- **Rotation:** How often to change joke
- **Category:** General, puns, one-liners
- **Display Style:** Simple text, card format, Q&A format

**Source:**
- Curated joke database
- Safe-for-work content
- Regularly updated

**Best Practices:**
- Rotate every 30-60 seconds
- Use as filler content
- Good for low-stress environments
- Pairs well with other content types

---

### QUOTES

**Description:** Display inspirational or motivational quotes

**Use Cases:**
- Employee motivation
- Brand values
- Inspirational content
- Waiting area entertainment

**Configuration:**
- **Category:** Motivational, Leadership, Success, Teamwork, Custom
- **Source:** Curated database or custom quotes
- **Rotation:** Change frequency
- **Show Author:** Yes/No
- **Style:** Text-only, with background image, card format

**Custom Quotes:**
- Add your own quote library
- Company-specific messaging
- Leadership quotes
- Brand mantras

---

### SOCIAL_EMBED

**Description:** Display social media content (Twitter, Instagram, etc.)

**Use Cases:**
- Brand social feeds
- User-generated content
- Hashtag campaigns
- Social proof
- Event streams

**Supported Platforms:**
- Twitter/X posts
- Instagram posts
- Facebook posts (public)
- LinkedIn posts

**Configuration:**
- **Source:** Social media URL or username
- **Type:** Single post, user timeline, hashtag feed
- **Filter:** Keyword filtering
- **Update:** Fetch frequency
- **Moderation:** Approve before display

**Important:**
- Follow platform terms of service
- Respect privacy settings
- Moderate user content
- Copyright considerations

---

## Content Type Combinations

### Layout Strategies

**Single Content Type (Fullscreen):**
- Large video demonstrations
- Full-screen presentations
- Immersive image displays

**Multiple Content Types (Split Screen):**
- Main area: Video/Slides (70%)
- Sidebar: Clock + Weather (30%)

**Grid Layouts:**
- Quadrants with different content types
- Example: News (RSS), Weather, Calendar, Announcements

**Ticker + Main Content:**
- Bottom ticker: Stock quotes or RSS
- Main area: Video or slides
- Common in corporate environments

**Rotating Content Types:**
- Playlist of different content types
- Variety keeps attention
- Mix static and dynamic

---

## Best Practices by Industry

### Retail

**Recommended Types:**
- IMAGE: Product photos, sales graphics
- VIDEO: Product demos, brand stories
- COUNTDOWN: Sale ending soon
- REVIEWS: Customer testimonials
- SOCIAL_EMBED: User photos with products

### Corporate/Office

**Recommended Types:**
- CALENDAR: Meeting schedules
- CLOCK: Current time, multiple time zones
- WEATHER: Local conditions
- STOCK_TICKER: Company stock + indices
- RSS: Company news, industry updates
- SLIDES: Presentations, metrics dashboards

### Restaurants/QSR

**Recommended Types:**
- IMAGE/VIDEO: Menu items, food photography
- TEXT: Daily specials
- SLIDES: Full menu rotation
- REVIEWS: Customer reviews
- COUNTDOWN: Limited time offers
- SOCIAL_EMBED: Customer food photos

### Fitness/Wellness

**Recommended Types:**
- CLOCK: Class timing
- CALENDAR: Class schedules
- VIDEO: Exercise demonstrations
- QUOTES: Motivational content
- COUNTDOWN: Challenge countdowns
- WEATHER: Outdoor workout conditions

### Healthcare

**Recommended Types:**
- TEXT: Announcements, instructions
- CALENDAR: Appointment schedules
- CLOCK: Current time
- VIDEO: Patient education
- WEATHER: For patient planning
- QUOTES: Wellness inspiration

---

## Performance Considerations

### Content Type Impact

**Lightweight (Low Resource):**
- TEXT
- CLOCK
- COUNTDOWN
- DAD_JOKE
- QUOTES

**Medium (Moderate Resource):**
- IMAGE
- CALENDAR
- WEATHER
- RSS (text only)

**Heavy (High Resource):**
- VIDEO
- SLIDES (complex presentations)
- STOCK_CHART (real-time updates)
- RSS (with images)
- SOCIAL_EMBED

### Optimization Tips

**For Slower Displays:**
- Use more static content types
- Reduce update frequencies
- Optimize image sizes
- Limit simultaneous dynamic sources

**For Fast Displays:**
- Mix content types freely
- Higher update frequencies
- Complex layouts supported
- Multiple video sources possible

**Network Considerations:**
- Dynamic types require consistent internet
- Cache where possible
- Graceful degradation if connection lost
- Local fallback content

---

## Troubleshooting by Content Type

### Static Content Not Displaying

**IMAGE/VIDEO:**
- Check file format supported
- Verify file not corrupted
- Check file size (too large?)
- Confirm upload completed
- Verify URL accessible

**TEXT:**
- Check for special characters
- Verify font available
- Check color contrast (text visible?)
- Confirm size fits area

### Dynamic Content Not Updating

**WEATHER/STOCK:**
- Check internet connection
- Verify API key valid
- Review rate limits
- Confirm location/symbol correct

**RSS/CALENDAR:**
- Test feed URL in browser
- Verify feed format valid
- Check update interval setting
- Confirm no fetch errors

### Integration Content Issues

**SLIDES/CANVA:**
- Verify sharing permissions
- Check presentation published
- Test URL in browser
- Confirm OAuth connected

**REVIEWS/TASKS:**
- Check OAuth connection status
- Verify account permissions
- Confirm location/list selected
- Test sync manually

---

## Next Steps

- **[Layouts](./layouts.md)** - Combine content types in layouts
- **[Content Library](./content-library.md)** - Manage content sources
- **[Integrations](./integrations.md)** - Set up integration content types
- **[Playlists](../workflows/playlists.md)** - Rotate content
- **[Schedules](../workflows/schedules.md)** - Time-based content control
