---
title: Social Media Embeds
---

# Social Media Embeds Integration

Display aggregated social media feeds from Instagram, Facebook, Twitter, and more on your digital signage using third-party embed services.

## Overview

The Social Media Embeds integration enables you to showcase social media content from multiple platforms on your displays. Using third-party aggregator services, you can combine feeds from Instagram, Facebook, Twitter/X, LinkedIn, YouTube, TikTok, and other platforms into a single curated display.

**Integration Approach:**
- Use third-party aggregator services (Curator.io, Juicer, etc.)
- Generate embed code from service dashboard
- Paste embed code into BrandCast
- Display renders automatically on signage

**Key Features:**
- Multiple social platforms in one feed
- Professional aggregator services
- Content moderation and filtering
- Customizable feed layouts
- Hashtag and account tracking
- Real-time or scheduled updates
- iframe and JavaScript embed support

## Use Cases

**Retail Stores:**
- User-generated content (UGC) from customers
- Product mentions and hashtags
- Brand social presence
- Customer testimonials
- Contest entries

**Events & Venues:**
- Live event hashtags
- Attendee posts
- Event photo walls
- Real-time social buzz
- Engagement displays

**Corporate Offices:**
- Company social media
- Employee advocacy posts
- Corporate announcements
- Brand campaigns
- Industry news

**Restaurants & Hospitality:**
- Customer food photos
- Check-ins and reviews
- Brand hashtags
- Menu items in action
- Special events

**Marketing & Agencies:**
- Campaign monitoring
- Client social feeds
- Brand awareness displays
- Social proof
- Influencer content

## Supported Social Platforms

**Via Third-Party Services:**
- Instagram (posts, stories, reels)
- Facebook (posts, page content)
- Twitter/X (tweets, mentions)
- LinkedIn (company posts)
- YouTube (videos, channels)
- TikTok (videos)
- Pinterest (pins)
- Vimeo (videos)
- RSS feeds

**Note:** Platform support varies by aggregator service. Check service documentation for current platform availability.

## Recommended Aggregator Services

### Curator.io (Recommended)

**Why Choose Curator.io:**
- Professional-grade moderation
- Free tier available (3 sources)
- Auto-moderation with profanity filters
- Analytics and insights
- Custom branding
- Excellent for production use

**Free Tier:**
- 3 social media sources
- 24-hour update interval
- Basic moderation
- Standard layouts

**Pricing:** Free to $249/month
**Website:** [curator.io](https://curator.io)

**Best For:** Production displays requiring moderation

### Juicer (Easy Setup)

**Why Choose Juicer:**
- Simple drag-and-drop setup
- Free tier available (2 sources)
- Quick to configure
- Good for testing
- Multiple embed options

**Free Tier:**
- 2 social media sources
- 24-hour updates
- Basic moderation
- Custom CSS

**Pricing:** Free to $49/month
**Website:** [juicer.io](https://www.juicer.io)

**Best For:** Quick setup and testing

### Taggbox (Premium)

**Why Choose Taggbox:**
- Advanced customization
- Real-time updates
- AI-powered moderation
- Detailed analytics
- Rights management

**Pricing:** Starts at $25/month
**Website:** [taggbox.com](https://taggbox.com)

**Best For:** Advanced features and customization

### Walls.io (Events)

**Why Choose Walls.io:**
- Event-focused features
- Live event walls
- Custom branding
- Moderation tools
- Multiple display modes

**Pricing:** Starts at €99/month
**Website:** [walls.io](https://walls.io)

**Best For:** Events and activations

### EmbedSocial

**Why Choose EmbedSocial:**
- Instagram-focused
- UGC management
- Review embeds
- TikTok support
- Shoppable feeds

**Pricing:** Starts at $29/month
**Website:** [embedsocial.com](https://embedsocial.com)

**Best For:** Instagram and TikTok content

### Custom/Other Services

**Any Service Works:**
- Use any aggregator providing embeds
- iframe or JavaScript embeds supported
- Enter custom service name
- No pre-configured limits

## Setup

### Step 1: Choose Aggregator Service

**For First-Time Users:**
- Curator.io (best for production)
- Juicer (easiest setup)

**For Advanced Users:**
- Compare features vs. budget
- Consider moderation needs
- Check platform support
- Review update frequency

**Decision Factors:**
- **Budget:** Free vs. paid tiers
- **Sources:** How many platforms needed
- **Updates:** Update frequency requirements
- **Moderation:** Content filtering needs
- **Customization:** Branding and layout control

### Step 2: Create Service Account

**Example: Setting Up Curator.io**

1. Visit [curator.io](https://curator.io)
2. Click **Sign Up** (free account)
3. Verify email address
4. Complete onboarding
5. Create your first feed

**Example: Setting Up Juicer**

1. Visit [juicer.io](https://www.juicer.io)
2. Sign up for free
3. Name your feed
4. Start adding sources

### Step 3: Configure Your Feed

**Add Social Media Sources:**

1. In aggregator dashboard, click **Add Source**
2. Choose platform (Instagram, Facebook, etc.)
3. Authenticate with platform (OAuth)
4. Select accounts or hashtags to track

**Example Instagram Setup:**
```
Source: Instagram
Type: Hashtag
Hashtag: #YourBrandName
Filter: Recent posts only
Moderation: Auto-approve
```

**Example Twitter/X Setup:**
```
Source: Twitter
Type: User mentions
Username: @YourBrand
Filter: Exclude retweets
Moderation: Manual approval
```

**Configure Moderation:**
- Enable profanity filter
- Set auto-moderation rules
- Review and approve manually
- Block specific users/words
- Hide sensitive content

**Customize Layout:**
- Choose grid, masonry, or carousel
- Set columns and spacing
- Configure colors and fonts
- Add branding elements
- Preview on different screens

### Step 4: Get Embed Code

**From Aggregator Dashboard:**

1. Navigate to **Embed** or **Publish** section
2. Choose embed type:
   - **iframe**: Simpler, more compatible
   - **JavaScript**: More features, dynamic
3. Copy embed code

**iframe Example:**
```html
<iframe src="https://curator.io/widget/..."
        width="100%" height="100%">
</iframe>
```

**JavaScript Example:**
```html
<div id="curator-feed-123"></div>
<script type="text/javascript">
  (function(){
    var i = document.createElement('script');
    i.src = 'https://cdn.curator.io/...';
    document.head.appendChild(i);
  })();
</script>
```

### Step 5: Add to BrandCast

**From Dashboard:**

1. Navigate to **Content Library** → **Add Content Source**
2. Select **Social Media Embed**
3. Choose your service:
   - Curator.io
   - Juicer
   - Taggbox
   - Walls.io
   - EmbedSocial
   - Custom (other service)
4. Paste embed code
5. Click **Preview** to test
6. Name your content source (e.g., "Instagram Feed")
7. Click **Save**

**Configuration:**
```javascript
{
  "name": "Instagram Feed",
  "service": "curator",
  "embedType": "iframe",  // or "javascript"
  "embedCode": "<iframe src='...' ...></iframe>"
}
```

### Step 6: Add to Layout

**In Layout Editor:**

1. Open or create layout
2. Select content area for social feed
3. Choose **Social Media Embed** content source
4. Adjust size and position
5. Save layout
6. Publish to displays

**Recommended Sizes:**

**Sidebar Widget:**
- 300×600 to 400×800
- Vertical feed
- 2-3 columns
- Scrolling enabled

**Full Section:**
- 800×600 to 1200×800
- Grid layout
- 3-5 columns
- More posts visible

**Fullscreen:**
- 1920×1080
- Large posts
- Maximum visibility
- Event displays

## Display Formats

### Grid Layout

**Multiple posts in grid:**

```
┌────────────────────────────────┐
│   Your Brand Social Feed       │
├──────┬──────┬──────┬──────────┤
│[IMG] │[IMG] │[IMG] │[IMG]     │
│User1 │User2 │User3 │User4     │
│      │      │      │          │
│[IMG] │[IMG] │[IMG] │[IMG]     │
│User5 │User6 │User7 │User8     │
└──────┴──────┴──────┴──────────┘
```

**Best For:** Multiple posts, variety, high engagement

### Masonry Layout

**Pinterest-style staggered grid:**

```
┌────────────────────────────────┐
│   Social Wall                  │
├──────┬──────────┬──────────────┤
│[IMG] │[IMG]     │[IMG]         │
│      │          │              │
│[IMG] │          │[IMG]         │
│      │[IMG]     │              │
│      │          │              │
└──────┴──────────┴──────────────┘
```

**Best For:** Mixed content types, visual variety

### Carousel/Slider

**Auto-rotating posts:**

```
┌────────────────────────────────┐
│   ← Featured Post →            │
│                                │
│        [LARGE IMAGE]           │
│                                │
│   @username                    │
│   "Amazing experience! ..."    │
│   ❤ 234  💬 12                 │
└────────────────────────────────┘
```

**Best For:** Single post focus, storytelling, large displays

### Waterfall/Stream

**Continuous scrolling feed:**

```
┌────────────────────────────────┐
│   Live Social Feed             │
│   ↓ ↓ ↓                        │
├────────────────────────────────┤
│ [Post 1] @user1                │
│ [Post 2] @user2                │
│ [Post 3] @user3                │
│ [Post 4] @user4                │
│ [Post 5] @user5                │
│   ... continuous scroll ...    │
└────────────────────────────────┘
```

**Best For:** Live events, high-volume content, dynamic displays

## Content Moderation

### Why Moderation Matters

**Risks Without Moderation:**
- Inappropriate content
- Off-brand messages
- Profanity
- Competitor mentions
- Spam
- Irrelevant posts

**Benefits of Moderation:**
- Brand-safe content
- Professional presentation
- Legal compliance
- Positive sentiment
- Relevant posts only

### Moderation Tools

**Auto-Moderation (Recommended):**
```
Settings:
  - Profanity filter: Enabled
  - Block NSFW content: Yes
  - Spam detection: Enabled
  - Keyword blacklist: [competitor names, etc.]
  - Minimum engagement: 5 likes
  - Verified accounts only: No
```

**Manual Moderation:**
- Review queue for new posts
- Approve/reject individually
- Hide specific posts
- Block users
- Report abuse

**Whitelist Approach:**
- Only approved accounts shown
- Pre-screen all content
- Safest but slowest
- Best for brand-critical displays

**Blacklist Approach:**
- All content shown except blocked
- Faster updates
- Occasional inappropriate content
- Requires monitoring

### Best Practices

**Set Clear Guidelines:**
```
Approve:
  ✓ Brand mentions and tags
  ✓ Product photos/videos
  ✓ Positive experiences
  ✓ User-generated content
  ✓ Event posts

Reject:
  ✗ Profanity or offensive content
  ✗ Competitor mentions
  ✗ Spam or promotional
  ✗ Irrelevant content
  ✗ Low-quality images
```

**Regular Review:**
- Check feed daily
- Respond to negative posts offline
- Update moderation rules
- Remove outdated content

## Troubleshooting

### Embed Not Displaying

**Symptoms:**
- Blank area where feed should be
- "Loading..." stuck
- Error message

**Solutions:**

1. **Check Embed Code:**
   - Copy entire code
   - No partial code
   - Include all `<script>` tags
   - Check for closing tags

2. **iframe Issues:**
   - Verify `src` attribute present
   - Check URL valid and accessible
   - Test URL in browser directly
   - Check for CORS restrictions

3. **JavaScript Issues:**
   - Allow 5-10 seconds loading time
   - Check browser console for errors
   - Verify scripts not blocked
   - Test in different browser

4. **Service Configuration:**
   - Check aggregator service active
   - Verify feed published
   - Confirm sources connected
   - Test embed code in plain HTML

### Feed Not Updating

**Symptoms:**
- Old posts still showing
- New posts not appearing
- Stale content

**Check:**

1. **Service Update Frequency:**
   - Free tiers: 24-hour updates
   - Paid tiers: 15min to 1-hour updates
   - Check service dashboard

2. **Feed Active:**
   - Verify feed not paused
   - Check sources still connected
   - Confirm OAuth tokens valid

3. **Cache:**
   - Aggregator service caches
   - Browser caching
   - BrandCast display cache
   - Force refresh display

**Solutions:**
- Wait for service update interval
- Upgrade to paid tier for faster updates
- Manually refresh display
- Check service status page

### Wrong Content Showing

**Symptoms:**
- Irrelevant posts
- Competitor content
- Off-brand posts

**Check:**

1. **Source Configuration:**
   - Correct hashtags tracked?
   - Right accounts connected?
   - Keywords accurate?

2. **Moderation:**
   - Auto-moderation enabled?
   - Blocked keywords configured?
   - Manual approval needed?

3. **Platform Changes:**
   - Instagram/Facebook API changes
   - Hashtag hijacking
   - Account compromised

**Solutions:**
- Review and update sources
- Tighten moderation rules
- Switch to whitelist approach
- Remove problematic sources

### Performance Issues

**Symptoms:**
- Slow loading
- Display lag
- High CPU usage

**Causes:**
- Large images
- Many posts loading
- Complex JavaScript
- Network latency

**Optimization:**
- Limit posts shown (10-20 max)
- Use iframe over JavaScript
- Reduce update frequency
- Optimize aggregator settings
- Use CDN-hosted embeds

## Best Practices

### Content Strategy

**Choose Right Hashtag:**
- Brand-specific (e.g., #YourBrand)
- Campaign-specific (e.g., #SummerSale2025)
- Event-specific (e.g., #YourEvent2025)
- Unique and memorable
- Monitor for misuse

**Encourage Engagement:**
```
Call to Action:
"Share your experience with #YourBrand
and see your post on our display!"
```

**Promote Visibility:**
- Signage near display
- Social media announcements
- In-store promotion
- Website mention
- Email campaigns

### Display Design

**Readability:**
- Large enough images
- Readable text overlays
- High contrast
- Clear usernames
- Visible engagement metrics

**Branding:**
- Match brand colors (if service allows)
- Add logo/header
- Consistent styling
- Professional appearance

**Information Hierarchy:**
- Image/video primary
- Username secondary
- Caption tertiary
- Engagement metrics last

### Legal & Compliance

**Rights & Permissions:**
- User-generated content needs rights
- Most services include TOS compliance
- Public posts generally okay
- Private accounts require permission
- Commercial use varies by platform

**Privacy:**
- Don't show personal information
- Respect user privacy settings
- Remove posts on request
- Follow platform guidelines
- GDPR/CCPA compliance

**Platform Terms:**
- Follow Instagram TOS
- Respect Facebook policies
- Comply with Twitter/X rules
- Review aggregator service terms
- Stay updated on changes

## Advanced Features

### Multi-Feed Displays

**Show Multiple Feeds:**
```
Layout: "Social Media Wall"
  Left (50%): Instagram Feed
  Right (50%): Twitter Feed
```

**Or Rotate Feeds:**
```
Playlist:
  1. Instagram Feed (30 sec)
  2. Facebook Feed (30 sec)
  3. Twitter Feed (30 sec)
```

### Hashtag Campaigns

**Track Campaign Performance:**
1. Create campaign hashtag
2. Set up aggregator feed
3. Display in-store
4. Monitor engagement
5. Measure results

**Example Campaign:**
```
Campaign: Summer Photo Contest
Hashtag: #MySummerWith[Brand]
Prize: $100 gift card
Display: Store window feed
Duration: 30 days
```

### Event Social Walls

**Live Event Display:**
1. Create event hashtag
2. Set up Walls.io or Curator feed
3. Enable real-time updates
4. Display on event screens
5. Moderate in real-time

**Configuration:**
```
Event: Product Launch Party
Hashtag: #[Brand]Launch2025
Update: Real-time (paid tier)
Moderation: Manual approval
Display: Event venue screens
```

### Analytics Integration

**Track Performance (via aggregator):**
- Post impressions
- Engagement rates
- Top posts
- Active users
- Hashtag reach

**Use Data For:**
- Content strategy
- Campaign optimization
- Display effectiveness
- ROI measurement

## Service Comparison

| Feature | Curator.io | Juicer | Taggbox | Walls.io |
|---------|-----------|--------|---------|----------|
| **Free Tier** | Yes (3 sources) | Yes (2 sources) | No | No |
| **Starting Price** | Free | Free | $25/mo | €99/mo |
| **Update Frequency** | 24hr (free), 15min (paid) | 24hr (free), 1hr (paid) | Real-time | Real-time |
| **Moderation** | Excellent | Basic | Advanced | Advanced |
| **Customization** | High | Medium | Very High | High |
| **Analytics** | Yes | Limited | Detailed | Yes |
| **Best For** | Production | Testing | Advanced | Events |

## Next Steps

- **[Content Types](../features/content-types.md)** - Learn about SOCIAL_EMBED type
- **[Layouts](../features/layouts.md)** - Design social media displays
- **[Google Business Reviews](./google-business-reviews.md)** - Another social proof option
- **[RSS Feeds](./rss-feeds.md)** - Alternative content aggregation
