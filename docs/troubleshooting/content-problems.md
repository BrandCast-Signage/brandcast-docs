---
title: Content Problems
---

# Content Problems

Comprehensive troubleshooting for content sources, media library, layouts, and content display issues.

## Quick Reference

**Content Not Displaying:**
- [Content Not Showing](#content-not-showing) - Content missing from display
- [Wrong Content Displaying](#wrong-content-displaying) - Incorrect content appearing
- [Partial Content Missing](#partial-content-missing) - Some content areas empty

**Media Issues:**
- [Images Not Loading](#images-not-loading) - Image display problems
- [Videos Not Playing](#videos-not-playing) - Video playback issues
- [Media Upload Failures](#media-upload-failures) - Can't upload files

**Dynamic Content:**
- [RSS Feed Not Updating](#rss-feed-not-updating) - Feed content stale
- [Weather Not Showing](#weather-not-showing) - Weather widget issues
- [Calendar Events Missing](#calendar-events-missing) - Calendar integration problems

**Layout Issues:**
- [Layout Looks Different](#layout-looks-different) - Layout rendering problems
- [Content Overlapping](#content-overlapping) - Z-index/positioning issues
- [Content Cut Off](#content-cut-off) - Content extends beyond borders

---

## Content Not Displaying

### Content Not Showing

**Symptoms:**
- Content area shows blank/empty
- "No content" placeholder visible
- Content was working but now missing
- Entire layout blank

**Troubleshooting Steps:**

#### Step 1: Verify Content Source Active

**Check Source Status:**
1. Go to **Content Sources**
2. Find the content source
3. Verify **Is Active** toggle is ON
4. If OFF, enable and save

**Content Source Deleted:**
- Source may have been deleted
- Check if source still exists in list
- Create new source if needed
- Reassign to layout

---

#### Step 2: Confirm Layout Assignment

**Content Must Be in Layout:**
1. Go to **Layouts** → Click layout
2. Open **Layout Editor**
3. Verify content area exists on canvas
4. Check content source is assigned to area
5. Save if changes made

**No Content Area:**
- Layout may be empty
- Add content area to canvas
- Assign content source
- Publish layout

---

#### Step 3: Check Display Assignment

**Display Must Have Layout:**
1. Go to **Displays** → Click display
2. Verify layout is assigned under **Active Layout**
3. If wrong layout, select correct one
4. Save changes

**Display Must Be Online:**
- Check display shows 🟢 "Online" status
- If offline, see [Display Problems](./display-problems.md#display-shows-offline)

---

#### Step 4: Verify Content Source Configuration

**Content Type-Specific Checks:**

**For LIBRARY Content (Images/Videos):**
- Media file still exists in library?
- Media file active (not archived)?
- File format supported?

**For INTEGRATION Content (RSS, Weather, etc.):**
- Integration connected and authorized?
- API credentials valid?
- No rate limit exceeded?
- Last fetch successful?

**For TEXT Content:**
- Text field not empty?
- Text color not same as background?
- Font size not zero?

---

#### Step 5: Clear Cache and Refresh

**Force Display Refresh:**
1. On display device, hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Or clear browser cache completely
3. Content should reappear

**Refresh Content Source:**
1. Edit content source
2. Save without changes (triggers refresh)
3. Wait 30 seconds for update
4. Check display

---

### Wrong Content Displaying

**Symptoms:**
- Display shows different content than expected
- Old content still showing
- Content from different layout appearing
- Mixed/jumbled content

**Common Causes:**

#### 1. Wrong Layout Assigned

**Verify Layout:**
1. Check which layout is assigned to display
2. Compare with what you expect to see
3. Update layout assignment if wrong

**Multiple Layouts:**
- May have similarly named layouts
- Check layout preview to verify
- Rename layouts for clarity if needed

---

#### 2. Schedule or Playlist Active

**Schedule Override:**
- Schedules override layout assignments
- Check display for active schedule
- Schedule determines what shows when

**Playlist Rotation:**
- Playlists cycle through multiple layouts
- Display may be showing different layout in rotation
- Check playlist assignment and duration

**Solution:**
1. Go to display settings
2. Check **Active Schedule** and **Active Playlist**
3. Remove if not wanted
4. Or adjust schedule/playlist rules

---

#### 3. Content Source Changed

**Content Updated:**
- Content source may have been edited
- Dynamic content (RSS, weather) updates automatically
- Check content source last update time

**Wrong Source Assigned:**
- Layout may have wrong content source
- Edit layout and verify sources
- Update to correct sources

---

#### 4. Cached Old Content

**Browser Cache:**
- Display browser may have cached old content
- Force refresh to clear cache

**Solution:**
1. Force refresh on display
2. Clear browser cache
3. Restart browser if needed
4. Re-register display if persists

---

### Partial Content Missing

**Symptoms:**
- Some content areas show, others don't
- Inconsistent content display
- Some integrations work, others fail
- Mixed success across content areas

**Troubleshooting:**

#### Check Each Content Source

For each missing content area:
1. Verify source is active
2. Check source has data (not empty)
3. Verify integration connected (if applicable)
4. Test source individually

#### Common Patterns

**All Integration Content Missing:**
- Network connectivity issue on display
- Firewall blocking integration APIs
- Check display internet connection
- Verify no corporate firewall

**All Media Content Missing:**
- Google Cloud Storage access issue
- Check display can access *.googleapis.com
- Verify internet connection stable

**Random Content Missing:**
- Individual source issues
- Check each source status
- Fix failing sources one by one

---

## Media Issues

### Images Not Loading

**Symptoms:**
- Broken image placeholder
- Image area blank
- Image loads slowly or not at all
- Some images work, others don't

**Common Causes:**

#### 1. Image File Issues

**File Format:**
- Supported: JPG, JPEG, PNG, GIF
- Not supported: BMP, TIFF, WebP, SVG, HEIC
- Convert unsupported formats to JPG/PNG

**File Corrupted:**
- Re-upload image
- Try different image
- Check image opens on your computer

**File Too Large:**
- Maximum size: 25 MB
- Compress image before upload
- Tools: TinyPNG, ImageOptim, Squoosh
- Recommended: Keep under 5 MB for best performance

---

#### 2. Network Issues

**Slow Download:**
- Large images take time to download
- Check display internet speed (minimum 5 Mbps)
- Compress images to reduce size

**Connection Lost:**
- Image download interrupted
- Check display online status
- Verify stable internet connection

---

#### 3. Image URL Issues

**URL Changed:**
- If using external URL (custom integrations)
- URL may have changed or expired
- Update to new URL

**Access Permissions:**
- Display may not have access to image
- For Google Cloud Storage, verify permissions
- Check image isn't private/restricted

---

#### 4. Display Rendering

**Browser Compatibility:**
- Some image formats may not render on all browsers
- Use JPG or PNG for best compatibility
- Update browser to latest version

**Memory Limit:**
- Too many large images may exhaust device memory
- Reduce image count per layout
- Compress images
- Restart display device

---

### Videos Not Playing

**Symptoms:**
- Video doesn't start
- Black screen where video should be
- "Video could not be loaded" error
- Video plays but no audio
- Video stutters or buffers

**Common Causes:**

#### 1. Video Format Issues

**Unsupported Codec:**
- Recommended: MP4 with H.264 codec
- Supported: MP4, MOV, AVI
- Not recommended: MKV, FLV, WebM (browser support varies)

**Re-encode Video:**
1. Use HandBrake or FFmpeg
2. Export as MP4 with H.264 codec
3. 30 fps frame rate
4. 1920x1080 resolution maximum
5. 3-5 Mbps bitrate
6. Re-upload to BrandCast

---

#### 2. File Size and Length

**Video Too Large:**
- Maximum: 500 MB (Professional/Enterprise: 2 GB)
- Compress video to reduce size
- Keep videos under 2 minutes for best performance

**Network Bandwidth:**
- Large videos require good internet
- Minimum: 10 Mbps recommended for video
- Ideal: 25+ Mbps for smooth playback
- Use ethernet instead of WiFi

---

#### 3. Audio Issues

**No Audio Playing:**
- Most displays are muted (by design)
- BrandCast defaults to video with audio OFF
- Audio not recommended for public displays
- Enable audio in video settings if needed (break rooms only)

**Audio Causing Issues:**
- If audio enabled, check volume on display device
- Verify audio output device selected (speakers vs headphones)
- Test with audio OFF to isolate issue

---

#### 4. Autoplay Restrictions

**Browser Autoplay Policy:**
- Modern browsers restrict autoplay with audio
- BrandCast handles this automatically
- Videos should autoplay without sound
- If issues, check browser autoplay settings

**Workaround:**
1. Disable audio on videos
2. Update browser to latest version
3. Clear browser cache
4. Allow autoplay for display.brandcast.app

---

#### 5. Performance Issues

**Video Stuttering:**
- Device hardware insufficient
- Reduce video resolution (720p instead of 1080p)
- Reduce bitrate (3 Mbps instead of 5 Mbps)
- Close other applications on device
- Upgrade to more powerful device

**Buffering:**
- Internet connection too slow
- Test internet speed on display
- Upgrade internet plan
- Use ethernet connection
- Compress video further

---

### Media Upload Failures

**Symptoms:**
- Upload stuck at 0%
- "Upload failed" error
- Upload times out
- File rejected

**Common Solutions:**

#### 1. File Size Limits

**Check Limits:**
- Images: 25 MB maximum
- Videos: 500 MB maximum (Standard/Professional)
- Videos: 2 GB maximum (Enterprise)

**Reduce File Size:**
- Images: Use TinyPNG, ImageOptim, Squoosh
- Videos: Use HandBrake, FFmpeg, reduce resolution/bitrate

---

#### 2. File Format

**Supported Formats:**
- Images: JPG, JPEG, PNG, GIF
- Videos: MP4 (H.264), MOV, AVI

**Unsupported Formats:**
- Images: BMP, TIFF, WebP, HEIC, SVG
- Videos: MKV, FLV, WMV, WebM

**Convert Files:**
- Images: Use online converter or Preview (Mac) / Paint (Windows)
- Videos: Use HandBrake or FFmpeg to export as MP4

---

#### 3. File Name Issues

**Invalid Characters:**
- Avoid: !, @, #, $, %, ^, &, *, (, ), [, ], {, }, <, >, ?, /, \, |
- Use only: Letters, numbers, hyphens (-), underscores (_)
- Keep file names under 100 characters
- No emojis or special Unicode characters

**Good File Names:**
- `spring-sale-banner.jpg`
- `product-demo-video-2024.mp4`
- `store-hours-graphic.png`

**Bad File Names:**
- `spring sale!!! (final).jpg`
- `video #1 @best.mp4`
- `hours&locations.png`

---

#### 4. Network/Connection Issues

**Upload Interrupted:**
- Unstable internet connection
- Upload large files on stable connection
- Use ethernet instead of WiFi
- Don't close browser during upload

**Timeout:**
- Large files may timeout
- Try smaller batch (upload 5-10 files at a time)
- Upload one large video at a time
- Increase upload timeout (contact support for Enterprise)

---

#### 5. Browser Issues

**Cache Full:**
1. Clear browser cache
2. Close and reopen browser
3. Try upload again

**Browser Extension Conflict:**
1. Disable browser extensions
2. Try incognito/private mode
3. Try different browser

**Outdated Browser:**
- Update to latest browser version
- Chrome recommended
- Clear cache after update

---

## Dynamic Content Issues

### RSS Feed Not Updating

**Symptoms:**
- Feed shows old items
- New posts don't appear
- "Last updated" timestamp old
- Feed shows stale content

**Troubleshooting Steps:**

#### Step 1: Check Feed Status

**Verify Feed Active:**
1. Go to **Content Sources** → **Integrations**
2. Find RSS feed
3. Check **Is Active** toggle is ON
4. View **Last Fetch Status**

**Last Fetch Failed:**
- If status shows error, feed URL may be broken
- Read error message for details
- Fix issue described in error

---

#### Step 2: Test Feed URL

**Verify Feed Still Works:**
1. Copy RSS feed URL
2. Paste in browser
3. Should see XML content (not formatted page)
4. Check content is recent

**Feed URL Changed:**
- Website may have changed RSS URL
- Find new feed URL
- Update in content source settings
- Save changes

**Feed No Longer Exists:**
- Website may have removed RSS feed
- Find alternative feed
- Or use RSS bridge service to create feed

---

#### Step 3: Check Update Interval

**Refresh Frequency:**
1. Edit RSS feed source
2. Check **Update Interval** (in seconds)
3. Default: 300 seconds (5 minutes)
4. May need to reduce for faster updates

**Force Manual Update:**
1. Edit RSS feed
2. Click **Test Connection**
3. Verify items load
4. Save (triggers refresh)

---

#### Step 4: API Rate Limits

**Too Many Requests:**
- Some feeds limit how often you can fetch
- If hitting rate limit, error message will indicate this
- Increase update interval (e.g., from 5 min to 15 min)
- Contact feed provider if persistently blocked

**BrandCast Quotas:**
- Standard plans: Generous RSS fetch limits
- Enterprise: Unlimited fetches
- Contact support if hitting limits

---

#### Step 5: Content Filters

**Filters Excluding Content:**
- If using include/exclude filters (Professional/Enterprise)
- Filters may be excluding all content
- Review filter rules
- Adjust or remove filters

**No Matching Items:**
- Feed may have content but none matching filters
- Check feed for items
- Adjust filter criteria

---

### Weather Not Showing

**Symptoms:**
- Weather widget blank
- "Weather unavailable" message
- Outdated weather data
- Wrong location weather

**Troubleshooting Steps:**

#### Step 1: Verify Location

**Check Location Settings:**
1. Go to **Content Sources** → Find weather source
2. Verify **Location** (ZIP code or city name)
3. Ensure location format correct
   - US ZIP codes: 5 digits (e.g., 10001)
   - City names: "New York, NY" or "London, UK"
4. Save if changed

**Location Not Found:**
- Try different format (ZIP vs city name)
- Verify spelling of city name
- Try nearby larger city
- Check for international format (use country code)

---

#### Step 2: Check API Status

**Weather API Working:**
- BrandCast uses third-party weather service
- Service may be temporarily down
- Check [status.brandcast.app](https://status.brandcast.app) for outages
- Usually resolves automatically

**API Key Valid:**
- BrandCast manages API keys automatically
- Enterprise plans can use custom API keys
- Verify custom key valid if using one

---

#### Step 3: Refresh Interval

**Update Frequency:**
- Default: 15 minutes
- Weather data updates periodically
- Old data shown until next fetch

**Force Refresh:**
1. Edit weather source
2. Save without changes
3. Waits for next update cycle
4. Or reduce refresh interval temporarily

---

#### Step 4: Display Permissions

**Location Services:**
- If using auto-detect location (Enterprise)
- Browser may block location access
- Enable location permissions in browser
- Or use manual ZIP code/city instead

---

### Calendar Events Missing

**Symptoms:**
- Calendar shows no events
- Expected events not appearing
- Calendar was working but now empty
- "No upcoming events" when there should be

**Troubleshooting Steps:**

#### Step 1: Verify Calendar Connection

**Check Integration Status:**
1. Go to **Content Sources** → **Integrations**
2. Find calendar source
3. Check **Connection Status**
4. If disconnected, click **Reconnect**

**Reauthorize Calendar:**
1. Click **Reconnect** or **Authorize**
2. Log in to Google (for Google Calendar)
3. Grant calendar access permissions
4. Confirm authorization
5. Return to BrandCast

---

#### Step 2: Check Calendar Selection

**Correct Calendar Selected:**
- You may have multiple calendars
- Verify correct calendar selected in source settings
- Some calendars may be hidden/inactive

**Calendar Permissions:**
- BrandCast needs read access to calendar
- Check Google Calendar sharing settings
- Ensure BrandCast app has access

---

#### Step 3: Date Range Settings

**Days Ahead:**
1. Edit calendar source
2. Check **Days Ahead** setting (e.g., 7, 30)
3. Events outside range won't show
4. Increase range if needed

**No Events in Range:**
- Calendar may have no upcoming events
- Check calendar directly (Google Calendar website)
- Create test event to verify connection

---

#### Step 4: Event Filters

**Calendar Filters:**
- If filtering by event type, category, or keyword
- Filters may exclude all events
- Review filter settings
- Adjust or remove filters

**Private Events:**
- Private events may not show
- Check event privacy settings
- Make events public or use different calendar

---

#### Step 5: iCal Feed Issues

**For iCal/ICS Feeds:**

**Feed URL Changed:**
- iCal feed URL may have changed
- Regenerate iCal feed URL
- Update in content source
- Save changes

**Feed Format:**
- Verify feed URL is .ics format
- Test feed URL in browser
- Should download .ics file

**Access Permissions:**
- Feed must be publicly accessible
- Check sharing settings
- Make feed public or use authentication (Enterprise)

---

## Layout Issues

### Layout Looks Different

**Symptoms:**
- Layout doesn't match what you designed
- Content areas in wrong positions
- Content sizes different than expected
- Layout broken or misaligned

**Common Causes:**

#### 1. Display Resolution Difference

**Different Screen Sizes:**
- Layout designed for one resolution
- Display has different resolution
- Content may scale or reposition

**Solution:**
- Design layouts for target display resolution
- Use responsive sizing (percentages vs pixels)
- Test on actual display device
- Create resolution-specific layouts if needed

---

#### 2. Browser Zoom

**Display Browser Zoomed:**
- Browser zoom not at 100%
- Causes layout to scale incorrectly

**Fix on Display:**
1. Reset zoom: Ctrl+0 (Windows/Linux) or Cmd+0 (Mac)
2. Verify zoom at 100%
3. Layout should render correctly

---

#### 3. Cached Old Layout

**Browser Cache:**
- Display showing cached version of layout
- Changes made in editor not reflected

**Solution:**
1. Hard refresh on display: Ctrl+Shift+R or Cmd+Shift+R
2. Clear browser cache
3. Restart browser
4. Layout should update to current version

---

#### 4. Content Overflow

**Content Too Large:**
- Content exceeds content area size
- May cause layout to break or shift

**Solution:**
1. Resize content area in Layout Editor
2. Scale content to fit
3. Use "Fit" or "Cover" settings for images
4. Reduce font size for text

---

#### 5. Unpublished Changes

**Draft Layout:**
- Changes saved as draft but not published
- Display shows last published version

**Solution:**
1. Go to **Layouts** → Click layout
2. Click **Publish** button
3. Confirm publish
4. Display updates to new version

---

### Content Overlapping

**Symptoms:**
- Content areas overlap each other
- Text on top of images
- Multiple content layers visible
- Content blocking other content

**Cause: Z-Index Layering**

Content areas stack based on z-index (layer order):
- Higher z-index = in front
- Lower z-index = behind
- Default: Last added is on top

**Solution:**

**Adjust Z-Index:**
1. Go to **Layout Editor**
2. Select overlapping content area
3. In properties panel, find **Z-Index** setting
4. Adjust number:
   - Background: 0-10
   - Middle layer: 11-50
   - Foreground: 51-100
5. Save and publish layout

**Reposition Content:**
- Move content areas so they don't overlap
- Resize content areas to fit
- Use grid layout to organize areas

---

### Content Cut Off

**Symptoms:**
- Content extends beyond visible area
- Text cut off mid-sentence
- Images partially visible
- Content area too small

**Solutions:**

#### 1. Resize Content Area

**Make Area Larger:**
1. Open **Layout Editor**
2. Select content area
3. Drag corners to resize
4. Ensure area large enough for all content
5. Save and publish

---

#### 2. Adjust Content Fit

**For Images:**
- Use "Fit" mode (shows entire image, may have letterboxing)
- vs "Cover" mode (fills area, may crop image)

**For Text:**
- Reduce font size
- Increase content area size
- Enable text wrapping
- Reduce content amount

---

#### 3. Content Scrolling

**Enable Scrolling:**
- For text-heavy content
- Enable scrolling in content area settings
- Content scrolls automatically
- Adjust scroll speed

---

#### 4. Dynamic Content Overflow

**Variable Content Length:**
- RSS feeds, calendars may have variable content
- Plan for maximum content length
- Make content area larger than needed
- Or limit number of items shown

---

## Content Source-Specific Issues

### Google Slides Not Updating

**Symptoms:**
- Slides show old content
- Changes in Google Slides don't appear
- Slides not advancing

**Solutions:**

**Check Sharing:**
1. Open Google Slides presentation
2. Click **Share**
3. Ensure "Anyone with the link can view"
4. Copy link and verify it's same link in BrandCast

**Update Link:**
- If changed presentation link, update in BrandCast
- Reshare presentation with BrandCast

**Refresh Interval:**
- Slides refresh every 15-60 minutes
- Force refresh by editing content source and saving
- Wait for next refresh cycle

**See:** [Integration Problems - Google Slides](./integration-problems.md#google-slides-issues)

---

### Stock Market Data Not Updating

**Symptoms:**
- Stock prices stale or outdated
- Tickers show "N/A"
- Wrong stock symbols

**Solutions:**

**Verify Stock Symbols:**
- Use correct ticker symbols (e.g., AAPL, GOOGL, MSFT)
- Symbols are case-insensitive but must be valid
- Check symbols on Yahoo Finance or Google Finance

**Market Hours:**
- Stock data only updates when market is open
- Outside market hours: Shows last closing price
- Weekends/holidays: No updates

**Update Interval:**
- Default: 60 seconds
- Reduce for more frequent updates (Enterprise)
- Beware of API rate limits

---

### Countdown Timer Issues

**Symptoms:**
- Countdown not moving
- Wrong time displayed
- Countdown finished but still showing

**Solutions:**

**Check Target Date:**
1. Edit countdown source
2. Verify target date/time correct
3. Check timezone settings
4. Save if changed

**Countdown Expired:**
- Configure what to show after countdown ends
- Options: Hide, show "Event started", show custom message
- Edit source to set expired behavior

**Timezone:**
- Countdown uses display's timezone
- Verify display timezone matches event timezone
- Adjust target time for timezone difference

---

## Prevention and Best Practices

### Content Quality

**Before Publishing:**
- [ ] Test content on actual display device
- [ ] Verify all images and videos load
- [ ] Check text is readable from viewing distance
- [ ] Ensure dynamic content (RSS, weather) updating
- [ ] Preview layout in different resolutions

### Regular Maintenance

**Weekly:**
- [ ] Review content source status (all active?)
- [ ] Check for failed integrations
- [ ] Archive outdated content
- [ ] Test random sample of displays

**Monthly:**
- [ ] Audit content library (remove unused)
- [ ] Review and update RSS feeds
- [ ] Reauthorize integrations if needed
- [ ] Update media with fresh content

**Quarterly:**
- [ ] Deep clean media library
- [ ] Update all layouts with new branding
- [ ] Review content performance analytics
- [ ] Optimize high-traffic layouts

### Content Optimization

**Images:**
- Compress before upload (85-90% quality)
- Use JPG for photos, PNG for graphics
- Maximum resolution: 1920x1080
- Keep file sizes under 5 MB

**Videos:**
- Use H.264 codec (MP4 format)
- Keep under 2 minutes
- 1080p maximum resolution
- 3-5 Mbps bitrate
- No audio (or low volume)

**Text:**
- Minimum 24px font size
- High contrast colors
- Short messages (3-5 seconds to read)
- Test readability from 10+ feet

**Dynamic Content:**
- Set appropriate refresh intervals
- Monitor API usage
- Cache when possible
- Have fallback content for errors

---

## Getting Help

**Still Having Content Issues?**

1. **Check Other Guides:**
   - [Common Issues](./common-issues.md) - General troubleshooting
   - [Display Problems](./display-problems.md) - Display-specific issues
   - [Integration Problems](./integration-problems.md) - Integration-specific issues

2. **Review Feature Guides:**
   - [Content Library](../features/content-library.md) - Content management
   - [Media Library](../features/media-library.md) - Media upload and organization
   - [Layouts](../features/layouts.md) - Layout design and publishing

3. **Contact Support:**
   - Email: support@brandcast.app
   - Include: Content source details, error messages, screenshots
   - Attach sample media files if relevant
   - Describe expected vs actual behavior

---

## Next Steps

- **[Content Library Guide](../features/content-library.md)** - Complete content documentation
- **[Media Library Guide](../features/media-library.md)** - Media management
- **[Content Association Workflow](../workflows/content-association.md)** - Connecting content to displays
- **[Integrations Guide](../features/integrations.md)** - Dynamic content setup
- **[RSS Feeds Guide](../integrations/rss-feeds.md)** - RSS feed troubleshooting
