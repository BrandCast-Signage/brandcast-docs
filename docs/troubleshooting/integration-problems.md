---
title: Integration Problems
---

# Integration Problems

Comprehensive troubleshooting for third-party integrations including RSS feeds, calendars, weather, scheduling, and more.

## Quick Reference

**Common Integration Issues:**
- [Integration Won't Connect](#integration-wont-connect) - Authorization failures
- [Integration Disconnected](#integration-disconnected) - Connection lost
- [Data Not Updating](#data-not-updating) - Stale integration data
- [API Rate Limits](#api-rate-limits) - Too many requests

**Specific Integrations:**
- [RSS Feeds](#rss-feed-issues) - Feed not updating, errors
- [Google Slides](#google-slides-issues) - Slides not showing or updating
- [Calendar Integrations](#calendar-integration-issues) - Google Calendar, iCal issues
- [Weather](#weather-integration-issues) - Weather data problems
- [ZoomShift](#zoomshift-integration-issues) - Employee scheduling issues
- [Stock Market](#stock-market-integration-issues) - Stock data not updating

---

## Common Integration Issues

### Integration Won't Connect

**Symptoms:**
- "Authorization failed" error
- "Could not connect" message
- Integration setup incomplete
- Redirect loop during setup

**Common Causes:**

#### 1. Browser Blocking Pop-ups

**Pop-up Blocker:**
- OAuth authorization opens in pop-up window
- Browser may block pop-up

**Solution:**
1. Look for pop-up blocked indicator in browser
2. Allow pop-ups for brandcast.app
3. Try authorization again
4. Complete OAuth in pop-up window

**Disable Pop-up Blocker:**
- Chrome: Settings → Privacy → Site Settings → Pop-ups → Allow for brandcast.app
- Firefox: Settings → Privacy → Permissions → Exceptions (Pop-ups)
- Edge: Settings → Cookies → Manage exceptions

---

#### 2. Third-Party Cookies Disabled

**Cookie Settings:**
- OAuth requires third-party cookies
- Some browsers block by default (Safari, Firefox)

**Solution:**
1. Enable third-party cookies temporarily
2. Complete authorization
3. Can disable after authorization complete

**Enable Cookies:**
- Chrome: Settings → Privacy → Cookies → Allow all cookies (temporarily)
- Firefox: Settings → Privacy → Standard (or Custom with third-party cookies allowed)
- Safari: Preferences → Privacy → Uncheck "Prevent cross-site tracking" (temporarily)

---

#### 3. Browser Extensions Interfering

**Ad Blockers or Privacy Extensions:**
- uBlock Origin, Privacy Badger, etc.
- May block OAuth requests

**Solution:**
1. Disable extensions temporarily
2. Try incognito/private mode
3. Complete authorization
4. Re-enable extensions

---

#### 4. Account Permissions

**Insufficient Permissions:**
- Google account may not have access to requested data
- Corporate G Suite account with restrictions
- Calendar/slides not shared

**Solution:**
1. Verify you have access to the service
2. Check admin hasn't blocked third-party apps
3. Contact IT if corporate account
4. Try personal account to test

---

### Integration Disconnected

**Symptoms:**
- Integration was working but now shows disconnected
- "Reauthorize required" message
- Data stopped updating
- "Token expired" error

**Common Causes:**

#### 1. Token Expiration

**OAuth Tokens Expire:**
- Most OAuth tokens expire after 30-90 days
- BrandCast attempts auto-refresh
- Sometimes manual reauthorization needed

**Solution:**
1. Go to **Content Sources** → Find integration
2. Click **Reconnect** or **Reauthorize**
3. Complete OAuth flow again
4. Integration reconnects

---

#### 2. Password Changed

**Account Credentials Changed:**
- Changed password on Google, etc.
- Revokes OAuth tokens for security
- Need to reauthorize

**Solution:**
- Reauthorize integration with new credentials
- Integration works with new password

---

#### 3. Permissions Revoked

**User Revoked Access:**
- Manually revoked BrandCast access in Google Account settings
- Need to re-grant permissions

**Solution:**
1. Reauthorize integration
2. Grant all requested permissions
3. Don't revoke permissions manually

**Check Google Permissions:**
1. Go to myaccount.google.com/permissions
2. Find BrandCast
3. Verify permissions granted

---

#### 4. Service Account Issues (Enterprise)

**For Enterprise Custom OAuth:**
- Service account credentials expired
- API quota exceeded
- Billing disabled on GCP project

**Solution:**
- Verify service account credentials valid
- Check GCP project billing enabled
- Review API quotas
- Contact support for help

---

### Data Not Updating

**Symptoms:**
- Integration connected but data is stale
- Shows old information
- Last updated timestamp not recent
- Manual refresh doesn't work

**Troubleshooting:**

#### Step 1: Check Update Interval

**Refresh Frequency:**
1. Edit integration source
2. View **Update Interval** (seconds)
3. Data only refreshes at this interval
4. May need to reduce interval

**Typical Intervals:**
- RSS feeds: 300-900 seconds (5-15 minutes)
- Weather: 900 seconds (15 minutes)
- Calendar: 1800-3600 seconds (30-60 minutes)
- Stock market: 60 seconds (1 minute)

---

#### Step 2: Verify Last Fetch Status

**Check Fetch Result:**
1. Edit integration source
2. Look for **Last Fetch Status**
3. Check for error messages
4. Read error details

**Common Errors:**
- 401 Unauthorized: Reauthorize needed
- 403 Forbidden: Permissions issue
- 404 Not Found: URL changed or resource deleted
- 429 Too Many Requests: Rate limit exceeded
- 500 Server Error: Service provider issue

---

#### Step 3: Test Connection

**Manual Test:**
1. Edit integration source
2. Click **Test Connection**
3. Should fetch fresh data
4. Check for errors

**Test Successful but Still Not Updating:**
- Cache issue on display
- Force refresh display browser
- Or clear cache and restart browser

---

#### Step 4: Check Service Status

**External Service Down:**
- Google, weather service, etc. may be down
- Check service status pages:
  - Google: status.cloud.google.com
  - Weather: Check provider website
- Usually resolves automatically

---

### API Rate Limits

**Symptoms:**
- "Rate limit exceeded" error
- "Too many requests" (429 error)
- Integration stops updating after working
- Works for a while then fails

**Common Causes:**

#### Understanding Rate Limits

**What Are Rate Limits:**
- APIs limit how many requests you can make
- Prevents abuse and ensures fair usage
- Limits vary by service and plan

**Example Limits:**
- RSS feeds: Varies by provider (often unlimited)
- Google APIs: 10,000 requests/day (free), more on paid
- Weather: 1,000 requests/day (free tier)
- Stock data: Varies by provider

---

#### Solutions

**Reduce Request Frequency:**
1. Increase update interval
2. Instead of 5 minutes, use 15 or 30 minutes
3. Reduces API calls per day
4. Balances freshness with limits

**Upgrade API Plan:**
- Some services offer paid plans with higher limits
- Google Workspace has higher API quotas
- Weather APIs have premium tiers
- Stock data providers have paid plans

**Use BrandCast Proxy (Enterprise):**
- BrandCast can proxy requests
- Uses BrandCast's API quota
- Available for Enterprise plans
- Contact support to enable

---

## RSS Feed Issues

### Feed Not Found or Invalid

**Symptoms:**
- "Feed URL invalid" error
- "Could not parse feed" error
- Feed worked before but now fails
- 404 Not Found error

**Solutions:**

#### Verify Feed URL

**Test Feed:**
1. Copy RSS feed URL
2. Paste in browser address bar
3. Should show XML content
4. Look for `<rss>` or `<feed>` tags

**Feed Format:**
- Valid: `https://blog.example.com/feed`
- Valid: `https://blog.example.com/rss.xml`
- Invalid: `https://blog.example.com` (homepage, not feed)
- Invalid: `https://blog.example.com/posts` (not RSS feed)

---

#### Feed URL Changed

**Website Migrated:**
- Site may have changed CMS or structure
- RSS feed URL changed
- Need to find new URL

**Find New Feed URL:**
1. Visit website
2. Look for RSS icon or "Subscribe" link
3. Right-click → Copy link address
4. Update in BrandCast
5. Save changes

---

#### Feed No Longer Exists

**Site Removed RSS:**
- Some sites discontinue RSS feeds
- Check if feed ever existed
- Look for alternatives

**Alternatives:**
1. **RSS Bridge** - Create feeds from websites without RSS
2. **Feed43** - Extract RSS from HTML
3. **PolitePol** - Generate RSS from pages
4. Contact site owner and request RSS

---

### Feed Content Not Showing

**Symptoms:**
- Feed connects but shows no items
- Blank RSS content area
- "No items available" message
- Feed works in feed reader but not BrandCast

**Solutions:**

#### Check Max Items Setting

**Item Limit:**
1. Edit RSS feed source
2. Check **Max Items** (default: 20)
3. Feed may have fewer items
4. Or all items filtered out

---

#### Content Filters

**Include/Exclude Filters:**
- If using filters (Professional/Enterprise)
- Filters may exclude all content
- Review filter criteria

**Adjust Filters:**
1. Edit RSS feed
2. Go to **Filters** section
3. Remove or adjust filters
4. Test with no filters first

---

#### Feed Has No Recent Content

**Old or Inactive Feed:**
- Blog may not have posted recently
- RSS feed technically working but empty
- Check feed in browser for content

---

### Feed Images Missing

**Symptoms:**
- Feed headlines show but no images
- Broken image placeholders
- Inconsistent image display

**Solutions:**

#### Feed Doesn't Include Images

**Not All Feeds Have Images:**
- Some RSS feeds don't include images
- Only title and excerpt
- BrandCast can't show what isn't in feed

**Check Feed Format:**
1. View feed XML in browser
2. Look for `<enclosure>` or `<media:content>` tags
3. If absent, feed has no images
4. Choose different display style (text-only)

---

#### Image URLs Relative

**Relative vs Absolute URLs:**
- Some feeds use relative URLs (won't work)
- Example: `/images/photo.jpg` instead of `https://example.com/images/photo.jpg`
- BrandCast can't resolve relative URLs

**Solution:**
- Contact feed provider about issue
- Use different feed if available
- Display without images

---

## Google Slides Issues

### Slides Not Appearing

**Symptoms:**
- Blank area where slides should be
- "Could not load presentation" error
- Slides worked before but now missing

**Solutions:**

#### Check Sharing Settings

**Presentation Must Be Public:**
1. Open Google Slides presentation
2. Click **Share** (top-right)
3. Under "Get link", click **Change**
4. Select **Anyone with the link** → **Viewer**
5. Click **Done**
6. Copy link

**Verify Link in BrandCast:**
- Paste link in browser (logged out)
- Should be able to view without login
- If asks for login, sharing not set correctly

---

#### Presentation Link Changed

**URL Mismatch:**
- Created new presentation copy
- Link in BrandCast is old presentation
- Need to update link

**Update Link:**
1. Get new presentation link from Google Slides
2. Edit integration in BrandCast
3. Update **Presentation URL**
4. Save changes

---

#### Presentation Deleted

**File Removed:**
- Presentation may have been deleted
- Moved to trash in Google Drive
- Need to restore or use different presentation

**Restore Presentation:**
1. Go to Google Drive
2. Click **Trash** (left sidebar)
3. Find presentation
4. Right-click → **Restore**

---

### Slides Not Advancing

**Symptoms:**
- Shows first slide only
- Slides don't auto-advance
- Stuck on one slide

**Solutions:**

#### Check Auto-Advance Settings

**Slide Duration:**
1. Edit Google Slides integration
2. Check **Slide Duration** (seconds per slide)
3. Default: 10 seconds
4. May be set too long or to 0 (manual only)

**Enable Auto-Advance:**
- Ensure auto-advance enabled in integration settings
- Slide duration > 0 seconds
- Save if changed

---

#### Presentation Embed Settings

**Google Slides Publish Settings:**
1. In Google Slides: File → Publish to web
2. Check **Auto-advance slides** is enabled
3. Set advance interval
4. Republish

**Note:** Publishing to web is separate from sharing link

---

### Slides Not Updating

**Symptoms:**
- Made changes in Google Slides
- Changes don't appear in BrandCast
- Shows old version of slides

**Solutions:**

#### Wait for Refresh Interval

**Slides Cache:**
- Slides refresh every 15-60 minutes (depending on settings)
- Changes won't appear immediately
- Wait for next refresh cycle

**Force Refresh:**
1. Edit Google Slides integration
2. Save without changes (triggers refresh)
3. Or reduce refresh interval temporarily

---

#### Clear Display Cache

**Browser Caching:**
- Display may have cached old slides
- Force refresh display browser
- Ctrl+Shift+R or Cmd+Shift+R

---

## Calendar Integration Issues

### Events Not Showing

**Symptoms:**
- Calendar connected but shows no events
- "No upcoming events" when there should be
- Events visible in Google Calendar but not BrandCast

**Solutions:**

#### Check Calendar Selection

**Multiple Calendars:**
- You may have multiple Google Calendars
- Verify correct calendar selected

**Select Calendar:**
1. Edit calendar integration
2. Under **Calendar**, verify correct one selected
3. May need to reauthorize to see all calendars

---

#### Event Privacy Settings

**Private Events:**
- Private or confidential events may not show
- Check event privacy in Google Calendar

**Make Events Public:**
1. Open Google Calendar
2. Click event
3. Change visibility to "Public" or "Default"
4. Save

---

#### Date Range Too Small

**Days Ahead Setting:**
1. Edit calendar integration
2. Check **Days Ahead** (e.g., 7, 30)
3. Events outside range won't show
4. Increase range if needed

**No Events in Range:**
- May have no upcoming events in next X days
- Create test event to verify connection

---

#### Calendar Permissions

**BrandCast Needs Access:**
- Verify BrandCast has calendar access

**Check Permissions:**
1. Go to myaccount.google.com/permissions
2. Find BrandCast
3. Verify calendar permission granted
4. Remove and reauthorize if needed

---

### iCal Feed Issues

**Symptoms:**
- iCal feed not working
- "Could not fetch calendar" error
- Events not updating

**Solutions:**

#### Verify Feed URL

**iCal URL Format:**
- Should end in `.ics`
- Example: `https://calendar.google.com/calendar/ical/example/basic.ics`

**Test Feed:**
1. Paste iCal URL in browser
2. Should download .ics file
3. Open file to verify events inside

---

#### Feed Access Permissions

**Public vs Private:**
- iCal feed must be publicly accessible
- No authentication required (Standard plans)
- Or use authenticated feed (Enterprise)

**Make Feed Public:**
- Google Calendar: Settings → Share with specific people or groups → Make available to public
- Generate new public iCal URL
- Update in BrandCast

---

#### Feed URL Expired

**Regenerate Feed:**
- iCal URLs sometimes expire or change
- Need to regenerate

**Get New iCal URL:**
1. Google Calendar: Settings → Integrate calendar → Secret address in iCal format
2. Copy new URL
3. Update in BrandCast

---

## Weather Integration Issues

### Weather Not Displaying

**Symptoms:**
- Weather widget blank
- "Weather unavailable" error
- No weather data showing

**Solutions:**

#### Verify Location Format

**Location Entry:**
- US ZIP code: 5 digits (e.g., 10001)
- City name: "City, State" or "City, Country"
- International: Include country code

**Examples:**
- Valid: `90210`
- Valid: `Los Angeles, CA`
- Valid: `London, UK`
- Invalid: `Los Angeles` (ambiguous - multiple cities)
- Invalid: `902` (incomplete ZIP)

---

#### Location Not Found

**Try Different Format:**
1. If ZIP code fails, try city name
2. If city name fails, try ZIP
3. Try nearby larger city
4. Verify spelling

**International Locations:**
- Always include country
- Use English city names
- Example: `Tokyo, Japan` not `東京`

---

### Wrong Location Weather

**Symptoms:**
- Shows weather for different city
- Incorrect location data

**Solutions:**

#### Verify Location Setting

**Check Configuration:**
1. Edit weather integration
2. Verify **Location** field
3. Ensure matches display physical location
4. Save if changed

---

#### ZIP Code Ambiguity

**Multiple Locations:**
- Some ZIP codes cover large areas
- Weather may be for ZIP code center, not exact location

**Solution:**
- Use specific city name instead
- Include state/country for precision

---

### Weather Data Outdated

**Symptoms:**
- Weather not current
- Shows old temperature
- Forecast not updating

**Solutions:**

#### Check Update Interval

**Refresh Frequency:**
- Default: 15 minutes
- Weather data only updates at this interval

**Reduce Interval:**
1. Edit weather integration
2. Reduce **Update Interval**
3. Recommended minimum: 5 minutes (300 seconds)
4. Save

---

#### Weather API Issue

**Service Provider:**
- BrandCast uses third-party weather API
- Service may be temporarily down
- Check [status.brandcast.app](https://status.brandcast.app)
- Usually resolves automatically

---

## ZoomShift Integration Issues

### Schedules Not Showing

**Symptoms:**
- Schedule widget blank
- "No schedules available" message
- Employees not appearing

**Solutions:**

#### Verify ZoomShift Connection

**Check Authorization:**
1. Go to **Content Sources** → Find ZoomShift integration
2. Check connection status
3. If disconnected, click **Reconnect**
4. Log into ZoomShift
5. Authorize BrandCast

---

#### Check Date Range

**Schedule Period:**
1. Edit ZoomShift integration
2. Verify **Date Range** (today, week, month)
3. No schedules may exist for selected range
4. Check ZoomShift directly for schedules

---

#### Location/Department Filters

**Filter Settings:**
- May be filtering to specific location/department
- No employees in that filter

**Adjust Filters:**
1. Edit ZoomShift integration
2. Check location and department filters
3. Remove filters or adjust
4. Save

---

### Schedule Not Updating

**Symptoms:**
- Schedule shows old data
- Recent changes in ZoomShift don't appear
- Employees showing wrong shifts

**Solutions:**

#### Refresh Interval

**Update Frequency:**
- Default: 30 minutes
- Changes won't appear immediately

**Force Refresh:**
1. Edit ZoomShift integration
2. Click **Test Connection**
3. Or save without changes
4. Wait for next refresh

---

#### Sync Issues

**ZoomShift API:**
- API may be delayed
- Changes take time to propagate
- Usually updates within 5-10 minutes

---

## Stock Market Integration Issues

### Stock Prices Not Showing

**Symptoms:**
- Ticker shows "N/A"
- Stock prices blank
- "Symbol not found" error

**Solutions:**

#### Verify Stock Symbols

**Correct Symbols:**
- Use official ticker symbols
- Examples: AAPL (Apple), GOOGL (Alphabet), MSFT (Microsoft)
- Case-insensitive but must be exact

**Check Symbols:**
1. Search on Yahoo Finance or Google Finance
2. Copy exact symbol
3. Update in BrandCast

**Common Mistakes:**
- Using company name instead of symbol
- Typos in symbol
- Outdated symbol (company merged/renamed)

---

#### Market Hours

**Stock Market Closed:**
- Stocks only update when market is open
- NYSE hours: 9:30 AM - 4:00 PM ET, Monday-Friday
- Closed weekends and holidays
- Shows last closing price when closed

**No Error:**
- This is expected behavior
- Prices update when market reopens

---

### Stock Prices Outdated

**Symptoms:**
- Prices not current
- Delayed by several minutes
- Shows pre-market prices during market hours

**Solutions:**

#### Check Update Interval

**Refresh Frequency:**
- Default: 60 seconds (1 minute)
- Can reduce for more frequent updates (Enterprise)

**Real-Time vs Delayed:**
- Free stock APIs have 15-minute delay
- Real-time requires paid API (Enterprise)
- Verify API tier

---

#### API Rate Limits

**Too Many Requests:**
- Stock APIs have strict rate limits
- If exceeded, updates pause
- Increase update interval
- Upgrade to paid API tier

---

## Integration Best Practices

### Configuration

**Update Intervals:**
- Set based on data freshness needs
- Balance freshness with API limits
- Recommended intervals:
  - RSS: 5-15 minutes
  - Weather: 15-30 minutes
  - Calendar: 30-60 minutes
  - Schedules: 30 minutes
  - Stock: 60 seconds (paid) or 5 minutes (free)

**Error Handling:**
- Enable fallback content for integrations
- Show cached data if fetch fails
- Configure error messages

### Monitoring

**Regular Checks:**
- Review integration status weekly
- Check for disconnected integrations
- Monitor API usage and limits
- Reauthorize before tokens expire

**Alerts:**
- Enable email alerts for failed integrations (Enterprise)
- Monitor error logs
- Set up uptime monitoring

### Security

**OAuth Best Practices:**
- Don't share OAuth tokens
- Reauthorize if security concerns
- Use dedicated service accounts (Enterprise)
- Rotate credentials periodically

**API Keys:**
- Keep API keys secure
- Don't expose in client-side code
- Rotate keys if compromised
- Use environment variables

---

## Getting Help

**Still Having Integration Issues?**

1. **Check Other Guides:**
   - [Common Issues](./common-issues.md) - General troubleshooting
   - [Display Problems](./display-problems.md) - Display-specific issues
   - [Content Problems](./content-problems.md) - Content-specific issues

2. **Review Integration Guides:**
   - [Integrations Overview](../features/integrations.md) - All integrations documented
   - [RSS Feeds Guide](../integrations/rss-feeds.md) - Detailed RSS troubleshooting

3. **Check Service Status:**
   - BrandCast: [status.brandcast.app](https://status.brandcast.app)
   - Google: [status.cloud.google.com](https://status.cloud.google.com)
   - Check third-party service status pages

4. **Contact Support:**
   - Email: support@brandcast.app
   - Include: Integration type, error messages, screenshots
   - Describe: What you're trying to do, what's happening instead
   - Attach: Screenshots of integration settings (hide sensitive data)

---

## Next Steps

- **[Integrations Guide](../features/integrations.md)** - Complete integration documentation
- **[RSS Feeds Guide](../integrations/rss-feeds.md)** - RSS feed setup and troubleshooting
- **[Content Library](../features/content-library.md)** - Managing integrated content
- **[Setup Checklist](../getting-started/setup-checklist.md)** - Production deployment guide
