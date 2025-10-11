---
title: RSS Feeds
---

# RSS Feeds Integration Guide

Display dynamic content from blogs, news sites, and other RSS sources on your BrandCast displays.

## What are RSS Feeds?

RSS (Really Simple Syndication) is a web feed format that allows websites to publish frequently updated content in a standardized format. BrandCast can display RSS feed content on your screens, automatically updating as new content is published.

## Use Cases

**Retail Stores:**
- Company blog posts
- Industry news and trends
- Product announcements
- Sale notifications

**Corporate Offices:**
- Company news and updates
- Department announcements
- Industry publications
- Employee blog highlights

**Restaurants:**
- Food blog features
- Local event listings
- Daily specials feeds
- Customer review highlights

**Fitness Centers:**
- Workout tips and articles
- Nutrition blogs
- Fitness news
- Member success stories

## Setting Up RSS Feeds

### Step 1: Find Your RSS Feed URL

Most websites with regularly updated content offer RSS feeds:

**Common Locations:**
- Look for RSS icon (📰 or orange wave icon)
- Check website footer for "RSS" or "Feed" links
- Add `/feed`, `/rss`, or `/feed.xml` to blog URLs
- Check site's "Subscribe" page

**Testing Feed URLs:**
1. Paste URL into browser
2. Should see XML content (not formatted webpage)
3. Look for `<rss>` or `<feed>` tags
4. Verify content appears recent

**Example Feed URLs:**
- `https://example.com/feed`
- `https://blog.example.com/rss`
- `https://example.com/feed.xml`
- `https://example.com/blog/feed/`

### Step 2: Add RSS Feed to BrandCast

1. Navigate to **Content Sources** → **Integrations**
2. Click **Add Integration**
3. Select **RSS Feed**
4. Enter feed details:

**Required Fields:**
- **Feed URL**: Full RSS feed URL
- **Name**: Descriptive name (e.g., "Company Blog")

**Optional Fields:**
- **Priority**: Display order (0 = highest, default: 0)
- **Max Items**: How many items to cache (default: 20)
- **Update Interval**: Fetch frequency in seconds (default: 300 = 5 minutes)

5. Click **Test Feed** to verify connection
6. Click **Save**

### Step 3: Configure Display Settings

**Update Interval:**
- **5 minutes (300 sec)**: Breaking news, high-frequency updates
- **15 minutes (900 sec)**: Standard blogs, moderate updates
- **30 minutes (1800 sec)**: Slower-moving content
- **60 minutes (3600 sec)**: Infrequent updates, archival content

**Max Items:**
- **5-10 items**: Focused, curated selection
- **15-20 items**: Standard feed (recommended)
- **25-50 items**: Comprehensive archive

**Priority:**
- **0**: Highest priority (shows first)
- **50**: Medium priority
- **100**: Lowest priority (shows last)

Use priority when displaying multiple feeds to control order.

## Adding RSS Feeds to Layouts

### Method 1: RSS Content Area

1. Open Layout Editor
2. Add content area to canvas
3. Set **Content Type** to "RSS"
4. Select your RSS feed from **Content Source**
5. Configure display options:
   - **Display Style**: Ticker, list, cards, full
   - **Items to Show**: How many items visible at once
   - **Rotation Speed**: How long each item shows
6. Save layout

### Method 2: Multiple Feed Ticker

Display multiple RSS feeds in rotation:

1. Create content area
2. Add multiple RSS feeds as sources
3. Set rotation interval (e.g., 10 seconds per feed)
4. Feeds alternate automatically
5. Use priority to control order

## Display Styles

### Ticker Style

**Appearance:**
- Scrolling text across bottom or side
- Continuous horizontal scroll
- Classic news ticker look

**Best For:**
- News headlines
- Short updates
- Breaking news
- Maximum visibility

**Configuration:**
```
Display Style: Ticker
Scroll Speed: Medium (adjustable)
Direction: Left-to-right or right-to-left
Height: 60-100px recommended
```

**Example Layout:**
- Position: Bottom 10% of screen
- Shows: Title + publish date
- Scrolls continuously
- Multiple stories in queue

### List Style

**Appearance:**
- Vertical list of headlines
- One headline per line
- Clean, readable format

**Best For:**
- Blogs and articles
- Company updates
- Longer headlines
- Detailed information

**Configuration:**
```
Display Style: List
Items Visible: 5-10
Font Size: 18-24px
Line Height: 1.5
Item Duration: 5-10 seconds each
```

**Example Layout:**
- Position: Side panel (30% width)
- Shows: Title + author + date
- Rotates every 8 seconds
- 7 items visible at once

### Card Style

**Appearance:**
- Individual cards with image
- Title + excerpt + metadata
- Visual, magazine-style layout

**Best For:**
- Featured articles
- Blog posts with images
- Visual content
- Premium presentation

**Configuration:**
```
Display Style: Cards
Cards Per Row: 1-3
Image Size: Medium or Large
Show Excerpt: Yes (2-3 lines)
Card Duration: 10-15 seconds
```

**Example Layout:**
- Position: Main content area (60-70%)
- Shows: Image + title + excerpt + date
- Rotates every 12 seconds
- 2 cards side-by-side

### Full Content Style

**Appearance:**
- Single article at a time
- Full headline, content, image
- Immersive reading experience

**Best For:**
- Featured stories
- Important announcements
- Detailed content
- Focused messaging

**Configuration:**
```
Display Style: Full Content
Content Lines: 5-10 lines
Image Position: Top or left
Duration: 20-30 seconds per article
Transitions: Fade or slide
```

**Example Layout:**
- Position: Full screen or large area
- Shows: Large image + full headline + content preview
- Stays for 25 seconds
- Fades between stories

## Finding RSS Feeds

### Popular Platforms

**News Sites:**
- Most major news sites have RSS feeds
- Check footer or "Subscriptions" section
- Examples: CNN, BBC, Reuters, Associated Press

**Blogs:**
- WordPress blogs: Add `/feed` to URL
- Medium: `/feed/@username`
- Blogger: `/feeds/posts/default`
- Ghost: `/rss/`

**Social Media (via third-party tools):**
- Twitter: Use tools like Nitter or RSS Bridge
- Instagram: RSS Bridge or specialized services
- YouTube: Use channel RSS feeds
- Reddit: Add `.rss` to subreddit URL

**Business Tools:**
- Company blogs (check for RSS icon)
- Press release services
- Industry publications
- Trade journals

### Creating Custom RSS Feeds

**From Websites Without RSS:**
Use services like:
- **RSS.app**: Create feeds from any website
- **Feed43**: Extract RSS from HTML pages
- **PolitePol**: Generate feeds from web pages
- **Feedity**: Convert web content to RSS

**From Social Media:**
- **RSS Bridge**: Convert social media to RSS
- **Queryfeed**: Twitter to RSS
- **IFTTT**: Create custom feed automation

### Testing Feeds

Before adding to BrandCast:

1. **Paste URL in browser**:
   - Should display XML (not a webpage)
   - Look for recent content
   - Verify items have titles and dates

2. **Use RSS Validator**:
   - Visit validator.w3.org/feed/
   - Paste feed URL
   - Check for errors

3. **Check Content Quality**:
   - Are headlines descriptive?
   - Do items have images?
   - Is publish date included?
   - Is content appropriate?

## Best Practices

### Content Selection

**Choose Feeds That:**
- Update regularly (daily or more)
- Have consistent formatting
- Include images when possible
- Are relevant to your audience
- Maintain quality standards

**Avoid Feeds That:**
- Update rarely (weekly or less)
- Have inconsistent quality
- Contain inappropriate content
- Require login/paywall
- Have broken images

### Update Strategy

**High-Frequency Feeds (News):**
```
Update Interval: 5-15 minutes
Max Items: 20-30
Priority: High
Use For: Breaking news, live updates
```

**Medium-Frequency Feeds (Blogs):**
```
Update Interval: 30-60 minutes
Max Items: 15-20
Priority: Medium
Use For: Company blogs, industry news
```

**Low-Frequency Feeds (Archives):**
```
Update Interval: 2-4 hours
Max Items: 10-15
Priority: Low
Use For: Evergreen content, curated posts
```

### Multiple Feed Management

**When Using Multiple Feeds:**

1. **Set Clear Priorities**:
   - 0-25: Critical feeds (company news)
   - 26-50: Important feeds (industry news)
   - 51-75: Supplementary feeds (general interest)
   - 76-100: Optional feeds (entertainment)

2. **Balance Update Frequencies**:
   - Don't refresh all feeds simultaneously
   - Stagger intervals to distribute load
   - Higher priority = more frequent updates

3. **Limit Total Feeds**:
   - 1-3 feeds: Optimal for most displays
   - 4-6 feeds: Multi-topic displays
   - 7+ feeds: Only for dedicated news displays

4. **Monitor Feed Health**:
   - Check for failed fetches
   - Review error logs
   - Disable broken feeds
   - Test periodically

## Content Customization

### Filtering Content

*Available in Professional and Enterprise plans*

Filter RSS content by keywords:

**Include Filters:**
- Only show items containing specific words
- Example: Only show posts tagged "sale" or "promotion"

**Exclude Filters:**
- Hide items containing specific words
- Example: Exclude political or controversial topics

**Configuration:**
1. Edit RSS feed
2. Go to **Filters** section
3. Add include/exclude keywords
4. Save changes

### Content Transformation

**Strip HTML Tags:**
- Removes formatting from content
- Shows plain text only
- Useful for clean, consistent display

**Truncate Content:**
- Limit excerpt length
- Show first N characters
- Add "..." for truncated content

**Replace Text:**
- Find and replace specific terms
- Standardize brand names
- Fix common formatting issues

## Troubleshooting

### Feed Not Updating

**Symptoms:**
- Content shows old items
- New posts don't appear
- "Last updated" timestamp is old

**Solutions:**

1. **Check Feed URL**:
   - Paste in browser to verify still works
   - Feed may have changed URL
   - Site may have removed RSS

2. **Verify Update Interval**:
   - May be set too long
   - Reduce interval to 5-15 minutes
   - Force manual refresh

3. **Review Error Logs**:
   - Go to feed settings
   - Check "Last Fetch Status"
   - Read error message if failed
   - Fix authentication or connection issues

4. **Test Feed**:
   - Click "Test Connection" in feed settings
   - Verify successful response
   - Check returned content

5. **Check API Limits**:
   - Some feeds have request limits
   - Increase update interval if hitting limits
   - Contact feed provider if blocked

### No Content Displaying

**Symptoms:**
- Feed connected but nothing shows
- Blank content area
- Error message on display

**Solutions:**

1. **Verify Content Source Assignment**:
   - Layout area has feed assigned?
   - Correct feed selected?
   - Content type set to "RSS"?

2. **Check Feed Items**:
   - Does feed have content?
   - View feed in browser to verify items
   - Some feeds may be temporarily empty

3. **Review Feed Status**:
   - Is feed active (not disabled)?
   - Check "isActive" setting
   - Enable if disabled

4. **Test Display**:
   - Preview layout before deploying
   - Check for JavaScript errors
   - Verify internet connection on display device

### Images Not Showing

**Symptoms:**
- Headlines appear but no images
- Broken image placeholders
- Inconsistent image display

**Solutions:**

1. **Check Feed Format**:
   - Not all RSS feeds include images
   - View feed XML to verify image tags
   - Look for `<enclosure>` or `<media:content>` tags

2. **Image URL Issues**:
   - Some feeds use relative URLs (won't work)
   - Image URLs may be expired
   - HTTPS/HTTP mixed content issues

3. **Display Settings**:
   - Verify "Show Images" is enabled
   - Check image size settings
   - Allow time for images to load

4. **Alternative Solutions**:
   - Use card style without images
   - Switch to text-only display
   - Find feed with better image support

### Slow Performance

**Symptoms:**
- Feeds load slowly
- Display feels sluggish
- Content updates lag

**Solutions:**

1. **Reduce Max Items**:
   - Lower from 30 to 15-20
   - Less content to fetch and process
   - Faster load times

2. **Increase Update Interval**:
   - Fetch less frequently
   - Reduces API calls
   - Improves performance

3. **Optimize Display**:
   - Reduce number of feeds per layout
   - Simplify display style (ticker vs. cards)
   - Limit concurrent integrations

4. **Check Internet Speed**:
   - Verify display has adequate bandwidth
   - Test connection at display location
   - Upgrade network if needed

## Advanced Configuration

### Priority and Weighting

Display items from multiple feeds in specific order:

**Example Configuration:**
```
Feed 1 (Company Blog): Priority 0, Weight 3
Feed 2 (Industry News): Priority 1, Weight 2
Feed 3 (General News): Priority 2, Weight 1
```

**Result:**
- 50% company blog posts
- 33% industry news
- 17% general news

### Custom CSS Styling

*Enterprise plans only*

Apply custom styles to RSS content:

```css
/* Ticker style customization */
.rss-ticker {
  background: linear-gradient(90deg, #1976d2, #dc004e);
  color: white;
  font-size: 20px;
  padding: 10px 20px;
}

/* Card style customization */
.rss-card {
  border: 2px solid #1976d2;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* List style customization */
.rss-list-item {
  border-left: 4px solid #dc004e;
  padding-left: 15px;
  margin-bottom: 10px;
}
```

### Webhook Notifications

*Enterprise plans only*

Get notified when RSS feeds update:

1. Go to **Settings** → **Webhooks**
2. Add webhook URL
3. Select "RSS Feed Updated" event
4. Receive POST request when feed fetches new items

**Use Cases:**
- Trigger external automation
- Log feed updates
- Sync with other systems
- Monitor content freshness

## Examples

### Company Blog Display

**Configuration:**
```
Feed URL: https://blog.yourcompany.com/feed
Name: Company Blog
Update Interval: 1800 (30 minutes)
Max Items: 10
Priority: 0
Display Style: Cards
```

**Layout:**
- Full content area (80% width)
- 2 cards side-by-side
- Shows image, title, excerpt, author
- Rotates every 15 seconds
- Company logo in header

### News Ticker

**Configuration:**
```
Feed URL: https://news.example.com/rss
Name: Industry News
Update Interval: 300 (5 minutes)
Max Items: 25
Priority: 0
Display Style: Ticker
```

**Layout:**
- Bottom 80px of screen
- Continuous horizontal scroll
- Shows title + timestamp
- Blue background, white text
- Logo watermark in corner

### Multi-Feed Sidebar

**Configuration:**
```
Feed 1: Company Blog (Priority 0)
Feed 2: Industry News (Priority 1)
Feed 3: Tech Updates (Priority 2)
All: Update Interval 900 (15 minutes)
Display Style: List
```

**Layout:**
- Right sidebar (25% width)
- Shows 8 headlines at once
- Rotates every 8 seconds
- Color-coded by feed source
- Scrolling text

## Compliance and Legal

### Copyright Considerations

**Using RSS Feeds:**
- RSS feeds are intended for redistribution
- Respect feed terms of service
- Don't remove attribution
- Link back to original sources when possible

**Fair Use:**
- Display headlines and excerpts (not full articles)
- Don't present as your own content
- Include source attribution
- Follow feed's usage guidelines

### Privacy and Data

**Data Handling:**
- RSS feed content is public
- BrandCast caches feed items temporarily
- No personal data collected from feeds
- Content auto-expires based on settings

**Third-Party Feeds:**
- Review content before displaying
- Monitor for inappropriate content
- Have moderation policy
- Can filter or exclude items

## Next Steps

- **[Integrations Overview](../features/integrations.md)** - Other integration options
- **[Layouts](../features/layouts.md)** - Design layouts with RSS content
- **[Content Association](../workflows/content-association.md)** - Deploy RSS feeds to displays
- **[Troubleshooting](../troubleshooting/integration-problems.md)** - Fix RSS issues
