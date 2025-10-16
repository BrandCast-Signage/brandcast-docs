---
title: Google Business Reviews
---

# Google Business Profile Reviews Integration

Display your Google Business Profile customer reviews on digital signage to build trust and showcase positive feedback.

## Overview

The Google Business Reviews integration pulls your verified customer reviews from Google Business Profile (formerly Google My Business) and displays them on your BrandCast displays. Perfect for building credibility, showcasing customer satisfaction, and encouraging more reviews.

## Use Cases

**Retail Stores:**
- Build trust with new customers
- Showcase 5-star reviews
- Highlight product quality
- Display recent feedback

**Restaurants:**
- Show food quality ratings
- Highlight service reviews
- Display customer favorites
- Build reputation

**Service Businesses:**
- Demonstrate expertise
- Show customer satisfaction
- Build credibility
- Encourage more reviews

**Multi-Location Businesses:**
- Display location-specific reviews
- Compare location ratings
- Showcase top-performing locations
- Motivate staff with positive feedback

## Key Features

- Pull reviews from Google Business Profile automatically
- Filter by star rating (show only 4-5 star reviews)
- Display reviewer name and photo
- Show star rating and review text
- Automatic updates (new reviews appear within 6 hours)
- Multiple display styles (cards, list, slideshow)
- Response display (show business replies)

## Setting Up Google Business Reviews

### Prerequisites

1. **Google Business Profile**:
   - Active and verified Google Business Profile
   - **Owner or Manager access** (required for API access)
   - Business location ID (Place ID)

2. **Google Account with Admin Access**:
   - **IMPORTANT:** You must use a Google account that has **Owner** or **Manager** permissions for your Google Business Profile
   - Standard user accounts or accounts without admin access will not work
   - If you don't have admin access, contact your business profile administrator

### Step 1: Connect Google Account

1. Navigate to **Content Sources** → **Integrations**
2. Click **Add Integration**
3. Select **Google Business Reviews**
4. **Read the admin access warning** - ensure you're using an admin account
5. Click **Connect Google Business**
6. Sign in with the Google account that has **Owner** or **Manager** access to your Business Profile
7. Grant permissions:
   - View and manage Google Business Profile
   - Read reviews and ratings
8. Authorization successful

**⚠️ Common Mistake:** Using a personal Google account that doesn't have admin access to the Business Profile. This will result in authorization errors or empty review lists.

### Step 2: Enter Place ID

1. Find your Google Place ID using [Google's Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Enter the Place ID in the configuration form
3. The system will validate and fetch your business details:
   - Business name
   - Address
   - Current rating
   - Total review count

**Multiple Locations:**
- Create separate content sources for each location (each needs its own Place ID)
- Rotate between locations on schedule
- Compare reviews across locations

### Step 3: Configure Review Settings

**Filter Options:**
- **Minimum Rating**: Show only 4-5 star reviews (recommended)
- **Maximum Reviews**: Number to display (default: 20)
- **Include Business Reply**: Show your responses (optional)
- **Sort Order**: Newest first, highest rated, most helpful

**Update Settings:**
- **Sync Frequency**: Every 6 hours (Google API limit)
- **Auto-Remove**: Hide deleted or removed reviews
- **Language Filter**: Show only specific languages

**Display Settings:**
- **Show Reviewer Name**: Yes/No
- **Show Reviewer Photo**: Yes/No
- **Show Date**: Relative (2 days ago) or absolute (Jan 15, 2025)
- **Truncate Long Reviews**: Character limit for display

### Step 4: Add to Layout

1. Open **Layout Editor**
2. Add content area
3. Set **Content Type** to "Reviews"
4. Select Google Business Reviews source
5. Choose display style:
   - **Carousel**: One review at a time (auto-advances)
   - **List**: Multiple reviews vertically (scrollable)
   - **Grid**: Reviews in responsive grid layout
6. Configure styling and colors
7. Save layout

## Display Styles

### Carousel Mode

**Appearance:**
- One review at a time, full screen
- Large, readable text
- Prominent star rating
- Reviewer photo and name
- Auto-advances to next review

**Best For:**
- Maximum impact and readability
- Focused customer attention
- Smaller displays or limited space
- Highlighting individual reviews

**Configuration:**
```
Duration Per Review: 5-10 seconds (configurable)
Auto-advance: Yes
Show: Full review text (truncated at 300 characters)
Reviewer Info: Name and photo (configurable)
Progress Indicators: Dots showing position in rotation
```

### List Mode

**Appearance:**
- Vertical scrolling list of reviews
- Compact card format for each review
- Multiple reviews visible simultaneously
- Star ratings and review text
- Scrollable for longer lists

**Best For:**
- Displaying many reviews at once
- Quick scanning of customer feedback
- Larger displays with vertical space
- Sidebar or dedicated review sections

**Configuration:**
```
Reviews Displayed: Up to 50 (configurable max)
Card Size: Compact format
Auto-scroll: Optional
Show: Name, photo, rating, truncated text (150 chars)
Spacing: Optimized for readability
```

### Grid Mode

**Appearance:**
- Responsive grid layout
- Review cards in rows and columns
- Minimum 300px per card
- Adapts to screen width
- Professional card-based design

**Best For:**
- Maximum reviews visible
- Balanced, organized appearance
- Wide displays or main content areas
- Modern, professional aesthetic

**Configuration:**
```
Grid: Auto-fill (min 300px per card)
Responsive: Yes
Cards Per Row: Auto-adjusts to screen width
Show: Compact review info
Overflow: Scrollable
```

## Best Practices

### Review Selection

**Quality Over Quantity:**
- Show your best reviews (4-5 stars)
- Filter out generic/short reviews manually if needed
- Highlight detailed, specific feedback
- Balance recent reviews with all-time favorites

**Diversity:**
- Mix of different reviewers
- Various aspects mentioned (product, service, atmosphere)
- Different time periods (not all from same month)
- Representative of customer base

**Authenticity:**
- Show real, unedited reviews
- Include minor criticisms if present (builds trust)
- Don't cherry-pick only perfect reviews
- Be transparent

### Visual Design

**Readability:**
- Large, clear fonts (minimum 16pt)
- High contrast text/background
- Adequate spacing between elements
- Star ratings visible and recognizable

**Branding:**
- Use brand colors subtly
- Include subtle logo
- Match store aesthetic
- Professional appearance

**Photos:**
- Show reviewer photos (builds authenticity)
- Or use placeholder avatars if privacy preferred
- Ensure photos display correctly

### Content Strategy

**Placement:**
- **Point of Sale**: Build trust before purchase
- **Waiting Areas**: Entertainment while customers wait
- **Entrance**: Welcome with positive feedback
- **Store Windows**: Attract passersby

**Rotation:**
- Update display regularly (automated)
- Rotate through different reviews
- Ensure customers see variety
- Keep content fresh

**Calls to Action:**
- "See more reviews on Google"
- "Leave us a review!" with QR code
- "Thank you to our customers"
- Encourage more feedback

## Responding to Reviews

### Display Business Replies

**Why Show Responses:**
- Demonstrates active engagement
- Shows you value customer feedback
- Builds trust and credibility
- Highlights customer service

**Configuration:**
- Enable "Include Business Reply"
- Responses appear below review
- Distinguish visually (different color/font)
- Keep responses concise

### Response Best Practices

**For Positive Reviews:**
- Thank customers personally
- Mention specific details from review
- Invite them back
- Keep it warm and genuine

**For Critical Reviews:**
- Address concerns professionally
- Offer to resolve offline
- Show empathy
- Demonstrate improvement

## Managing Reviews

### Refreshing Reviews

**Automatic Sync:**
- Every 6 hours automatically
- New reviews appear on display
- Updated ratings reflected
- Removed reviews disappear

**Manual Refresh:**
1. Edit content source
2. Click "Sync Now"
3. Wait 1-2 minutes
4. New reviews appear

### Handling Negative Reviews

**Filtering:**
- Set minimum rating to 4 stars
- Automatically excludes 1-3 star reviews
- Focus on positive feedback for display

**Responding:**
- Always respond to negative reviews in Google Business Profile
- Don't display negative reviews on signage
- Use feedback to improve
- Turn critics into advocates with good responses

### Review Moderation

**Google's Role:**
- Google may remove reviews that violate policy
- Fake/spam reviews filtered automatically
- BrandCast respects Google's moderation

**Your Role:**
- Can't delete legitimate reviews
- Can flag inappropriate reviews to Google
- Can respond to all reviews
- Can choose which ratings to display (4-5 stars)

## Troubleshooting

### Reviews Not Displaying

**Check:**
- Google account still connected
- OAuth token hasn't expired
- Location selected correctly
- Minimum number of reviews exists (need 5+ reviews)

**Solutions:**
1. Reconnect Google account
2. Verify Business Profile is active
3. Check review count in Google Business Profile
4. Test connection in BrandCast

### Reviews Not Updating

**Sync Delay:**
- Google API updates every 6 hours
- New reviews may take time to appear
- Force manual sync if needed

**Token Expiration:**
- OAuth tokens expire after 90 days
- Reconnect Google account
- Re-authorize permissions

### Missing Reviewer Photos

**Causes:**
- Reviewer set profile to private
- No Google profile photo
- Privacy settings

**Solutions:**
- Use placeholder avatars (silhouette icons)
- Focus on review text and ratings
- Not all reviewers have photos (normal)

### Incorrect Business Location

**Check:**
- Correct location selected in settings
- Not showing another location's reviews
- Google account manages desired location

**Fix:**
1. Edit content source
2. Change selected location
3. Save
4. Reviews update within 6 hours

## Privacy and Compliance

**Reviewer Privacy:**
- Display only public review data
- Respect reviewer display name choice
- Don't add external information
- Follow Google's Terms of Service

**Data Usage:**
- Reviews belong to Google and reviewers
- Display for promotional purposes only
- Don't modify or misrepresent
- Keep data secure

**Compliance:**
- Follow FTC guidelines for displaying reviews
- Don't cherry-pick misleadingly
- Clearly attribute to Google
- Update regularly to stay current

## Encouraging More Reviews

### In-Store Tactics

**QR Codes:**
- Generate Google review link QR code
- Display near checkout or exit
- "Scan to leave us a review"
- Make it easy for customers

**Signage:**
- "Love us? Leave a review!"
- Display on receipts
- Staff mentions
- Follow-up emails

**Incentives:**
- Don't offer incentives for positive reviews (against Google policy)
- Can remind customers to review
- Can thank reviewers publicly
- Focus on great service

### Digital Tactics

**Email Campaigns:**
- Follow-up after purchase
- Direct link to Google review page
- Personalized messages
- Timing matters (1-3 days after visit)

**Social Media:**
- Share positive reviews
- Thank reviewers
- Link to Google profile
- Encourage others to review

## Advanced Features

### Multi-Location Dashboard

**Compare Locations:**
- Side-by-side review displays
- Rating comparisons
- Review count metrics
- Performance leaderboards

**Staff Motivation:**
- Show which locations excel
- Recognize top-rated stores
- Encourage friendly competition

### Review Analytics

**Track Metrics:**
- Average rating over time
- Review frequency
- Response rate
- Sentiment trends

**Insights:**
- Identify improvement areas
- Track impact of changes
- Monitor customer satisfaction
- Benchmark against goals

### Integration with Other Content

**Combine With:**
- Product photos
- Store information
- Promotions
- Social media feeds

**Example Layout:**
- Main area: Product slideshow
- Sidebar: Recent reviews
- Bottom ticker: Review snippets

## Next Steps

- **[Social Media](./social-embed.md)** - Display social proof
- **[RSS Feeds](./rss-feeds.md)** - Show press and news mentions
- **[Layouts](../features/layouts.md)** - Design with reviews
- **[Content Association](../workflows/content-association.md)** - Deploy to displays
- **[Troubleshooting](../troubleshooting/integration-problems.md)** - Fix issues
