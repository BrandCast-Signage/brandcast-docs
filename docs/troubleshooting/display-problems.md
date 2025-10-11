---
title: Display Problems
---

# Display Problems

Comprehensive troubleshooting guide for display registration, connectivity, and content display issues.

## Quick Reference

**Display Registration Issues:**
- [Display Won't Register](#display-wont-register) - Registration code problems
- [Registration Code Expired](#registration-code-expired) - Code timeout issues
- [Registration Failed Error](#registration-failed-error) - Common registration errors

**Display Connectivity:**
- [Display Shows Offline](#display-shows-offline) - Connection lost
- [Display Keeps Disconnecting](#display-keeps-disconnecting) - Intermittent connection
- [Display Session Expired](#display-session-expired) - Session timeout

**Content Display:**
- [Content Not Updating](#content-not-updating) - Layout changes not appearing
- [Wrong Content Showing](#wrong-content-showing) - Incorrect layout displayed
- [Display Shows Blank Screen](#display-shows-blank-screen) - Nothing visible

**Performance:**
- [Display Running Slow](#display-running-slow) - Laggy performance
- [Content Loads Slowly](#content-loads-slowly) - Slow image/video loading
- [Display Freezes or Crashes](#display-freezes-or-crashes) - System crashes

---

## Display Registration

### Display Won't Register

**Symptoms:**
- "Invalid registration code" error
- "Registration failed" message
- Code accepted but display doesn't connect
- Display stays on registration screen

**Common Causes and Solutions:**

#### 1. Registration Code Issues

**Expired Code:**
- Codes expire after 24 hours
- Check **Last Generated** timestamp in display settings
- Generate new code if expired

**How to Generate New Code:**
1. Go to **Displays**
2. Click on display name
3. Click **Generate New Registration Code**
4. Note the 6-character code
5. Use new code on display device

**Code Already Used:**
- Each code can only be used once
- If display was previously registered, you need a new code
- Deregister the display first if needed

**Incorrect Code Entered:**
- Codes are case-sensitive
- Verify: ABC123 ≠ abc123
- Check for similar-looking characters:
  - 0 (zero) vs O (letter O)
  - 1 (one) vs I (letter I) vs l (lowercase L)
- Re-enter code carefully

---

#### 2. Display Configuration

**Display Not Active:**
1. Go to **Displays** in dashboard
2. Click on display
3. Check **Is Active** toggle
4. Enable if disabled
5. Save changes

**Display Deleted:**
- Display may have been deleted from dashboard
- Create new display record
- Generate fresh registration code

**Store Assignment Wrong:**
- Display assigned to wrong store
- Verify store selection in display settings
- Update store if needed

---

#### 3. Network Issues

**No Internet Connection:**
1. Verify display device connected to WiFi/ethernet
2. Test internet: Open browser, visit google.com
3. Check WiFi password is correct
4. Restart router if needed

**Firewall Blocking:**
Display device needs access to:
- `display.brandcast.app` (registration endpoint)
- `*.brandcast.app` (all BrandCast services)
- `*.googleapis.com` (content delivery)
- Port 443 (HTTPS)
- WebSocket connections

**Corporate Network:**
- Ask IT to whitelist BrandCast domains
- May need exception for WebSocket
- Test on different network to confirm

---

#### 4. Browser Compatibility

**Unsupported Browser:**
- Chrome 90+ (recommended)
- Firefox 88+
- Edge 90+
- Safari 14+ (limited support)
- Internet Explorer NOT supported

**Browser Issues:**
1. Clear browser cache and cookies
2. Disable browser extensions
3. Try incognito/private mode
4. Update browser to latest version
5. Try different browser

---

### Registration Code Expired

**Symptoms:**
- "Registration code has expired" error
- Code was valid yesterday but not today
- Code shows as expired in dashboard

**Solution:**

Registration codes automatically expire after 24 hours for security.

**Generate Fresh Code:**
1. Log into BrandCast dashboard
2. Go to **Displays**
3. Click on the display you want to register
4. Click **Generate New Registration Code**
5. A new 6-character code appears
6. Use this code within 24 hours
7. Go to display device and enter new code at display.brandcast.app

**Prevention:**
- Generate code when ready to register (not days in advance)
- Complete registration within 24 hours
- Save code securely during registration process

---

### Registration Failed Error

**Symptoms:**
- Generic "Registration failed" error
- No specific error message
- Registration screen refreshes but doesn't connect

**Troubleshooting Steps:**

**Step 1: Verify Code Format**
- Code should be exactly 6 characters
- Mix of letters and numbers
- Check for spaces or special characters
- Example valid code: `ABC123`

**Step 2: Check Display Settings**
1. Display is active (not disabled)
2. Display has a layout assigned (or can be blank initially)
3. Store assignment is correct
4. No conflicting display registration

**Step 3: Network Diagnostics**
1. Open browser console (F12)
2. Look for network errors
3. Check for failed API calls
4. Verify internet speed (minimum 5 Mbps)

**Step 4: Device Fingerprint Conflict**
If device was previously registered:
1. Deregister old display session
2. Clear browser data completely
3. Restart device
4. Try registration again

**Step 5: Contact Support**
If all above steps fail:
- Email support@brandcast.app
- Include: Display code, error message, browser version
- Attach screenshot if possible

---

## Display Connectivity

### Display Shows Offline

**Symptoms:**
- 🔴 Red "Offline" status in dashboard
- Display was online but now shows offline
- Last ping timestamp is old (10+ minutes ago)
- Display not responding to layout changes

**Common Causes:**

#### 1. Display Device Issues

**Device Powered Off:**
- Check if display device (tablet, TV, computer) is on
- Verify screen isn't sleeping or in standby
- Check power cable connection

**Browser Closed:**
- BrandCast must stay open in browser
- Check if browser was closed
- Reopen display.brandcast.app
- May need to re-register if session expired

**Device Sleeping:**
- Disable sleep/screen saver mode
- Prevent automatic sleep:
  - **Windows**: Settings → Power & Sleep → Never
  - **Mac**: System Preferences → Energy Saver → Prevent sleep
  - **Android/Fire**: Settings → Display → Sleep → Never
  - **iPad**: Settings → Display & Brightness → Auto-Lock → Never

---

#### 2. Network Connectivity

**Internet Disconnected:**
1. Check WiFi/ethernet connection on device
2. Verify internet working (test other sites)
3. Restart router if needed
4. Reconnect to WiFi network

**Network Changed:**
- Display may have switched networks
- Reconnect to correct WiFi
- Re-enter password if needed
- Verify network has internet access

**Poor Signal Strength:**
- WiFi signal may be weak at display location
- Move closer to router
- Use WiFi extender
- Switch to ethernet cable (recommended)

---

#### 3. Session Issues

**Session Expired:**
- Sessions timeout after 24 hours of inactivity
- Need to reconnect
- May need to re-register

**How to Reconnect:**
1. Refresh browser on display device
2. If shows registration screen, re-register with new code
3. If shows layout, should reconnect automatically
4. Check dashboard for "Online" status

**Session Timeout Settings:**
- Default: 24 hour timeout
- Contact support for extended sessions (Enterprise)

---

#### 4. Server Issues

**BrandCast Service Outage:**
1. Check [status.brandcast.app](https://status.brandcast.app)
2. Look for active incidents
3. Service outages are rare but possible
4. Wait for service restoration

**Scheduled Maintenance:**
- Check for maintenance notifications
- Usually during off-hours (2-4 AM EST)
- Displays reconnect automatically after maintenance

---

### Display Keeps Disconnecting

**Symptoms:**
- Display alternates between online and offline
- Connection drops every few minutes/hours
- "Idle" status appears frequently
- Unstable heartbeat pings

**Common Causes:**

#### 1. Network Stability

**Intermittent WiFi:**
- WiFi connection dropping periodically
- Router issues
- Network congestion
- Interference from other devices

**Solutions:**
1. **Use Ethernet** (best solution)
   - Hardwire display device to router
   - More stable than WiFi
   - Eliminates wireless interference

2. **Improve WiFi Signal**
   - Move router closer to display
   - Use WiFi extender
   - Change WiFi channel (reduce interference)
   - Upgrade to 5GHz WiFi (less congestion)

3. **Network Troubleshooting**
   - Restart router and modem
   - Update router firmware
   - Check for bandwidth throttling
   - Contact ISP about connection stability

---

#### 2. Device Power Management

**Aggressive Power Saving:**
- Device entering low-power mode
- WiFi/network being disabled to save power
- Screen turning off

**Solutions:**

**Disable Power Saving:**
1. Keep device plugged into power (don't run on battery)
2. Disable sleep mode completely
3. Prevent WiFi from turning off:
   - **Windows**: Advanced power settings → Wireless Adapter → Maximum Performance
   - **Mac**: Energy Saver → Prevent computer from sleeping
   - **Android/Fire**: Developer options → Stay awake when charging
   - **iPad**: Settings → Display → Auto-Lock → Never

**Keep Browser Active:**
- Some devices kill background tabs
- Keep BrandCast as the active/focused window
- Use kiosk mode if available (prevents tab switching)

---

#### 3. Browser Memory Leaks

**Long-Running Browser:**
- Browser consuming too much memory over time
- Causes crashes or slowdowns
- Connection drops when browser struggles

**Solutions:**
1. **Restart Browser Daily**
   - Set up automatic restart (overnight)
   - Windows Task Scheduler / Mac Automator
   - Clears memory and refreshes connection

2. **Update Browser**
   - Keep browser up to date
   - Latest versions have better memory management
   - Chrome recommended for best stability

3. **Reduce Memory Usage**
   - Close other tabs/applications
   - Use dedicated display device (not multi-purpose)
   - Don't use display device for other tasks

---

### Display Session Expired

**Symptoms:**
- "Session expired" message on display
- Redirected to registration screen
- Display shows offline even though device is on

**Cause:**
Sessions expire after 24 hours for security. If display loses connection for extended period, session may also expire.

**Solution:**

**Re-register Display:**
1. Generate new registration code in dashboard
2. On display device at display.brandcast.app
3. Enter new code
4. Display reconnects with fresh session

**Prevent Future Expirations:**
1. Ensure stable internet connection
2. Keep device powered on
3. Maintain active browser session
4. Consider scheduled overnight restarts (reconnects automatically)

**Extended Sessions (Enterprise):**
- Contact support for longer session durations
- Can extend to 7+ days for stable deployments
- Requires Enterprise plan

---

## Content Display

### Content Not Updating

**Symptoms:**
- Layout changes made in dashboard don't appear on display
- Display shows old content
- New layouts not showing
- Updates delayed or not happening

**Troubleshooting Steps:**

#### Step 1: Verify Layout Assignment

**Check Display Settings:**
1. Go to **Displays** → Click display name
2. Under **Active Layout**, verify correct layout is assigned
3. If wrong layout, select correct one and save
4. Changes apply within 30 seconds

**Layout Not Assigned:**
- If "No layout assigned", select layout
- Click **Update**
- Display should show new layout immediately

---

#### Step 2: Confirm Layout Published

**Draft vs. Published:**
- Only published layouts appear on displays
- Draft layouts are for editing only

**Publish Layout:**
1. Go to **Layouts** → Click layout name
2. Click **Publish** button
3. Confirm publish action
4. Display updates within 30 seconds

---

#### Step 3: Check Display Connection

**Display Must Be Online:**
1. Verify display shows 🟢 "Online" status
2. If offline, see [Display Shows Offline](#display-shows-offline)
3. Check "Last Ping" timestamp (should be recent)

---

#### Step 4: Clear Display Cache

**Force Refresh:**
On display device:
1. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Or close and reopen browser
3. Content should update immediately

**Clear Browser Cache:**
1. Open browser settings
2. Clear cache and cookies for brandcast.app
3. Refresh page
4. May need to re-register display

---

#### Step 5: Check Content Sources

**Content Source Issues:**
- Content source may be inactive
- Integration may have failed
- Media files may be missing

**Verify Content Sources:**
1. Go to **Content Sources**
2. Check all sources in layout are active
3. Verify integrations connected
4. Test content sources individually

---

### Wrong Content Showing

**Symptoms:**
- Display shows different layout than assigned
- Content doesn't match what's in dashboard
- Old layout still showing
- Mix of old and new content

**Common Causes:**

#### 1. Schedule Override

**Scheduled Content:**
- Schedules can override layout assignments
- Check if display has active schedule

**Verify:**
1. Go to display settings
2. Check **Active Schedule** section
3. If schedule assigned, it overrides layout
4. Schedule rules determine what shows when

**Solution:**
- Remove schedule if not wanted
- Or adjust schedule rules
- Or wait for schedule to change (time-based)

---

#### 2. Playlist Active

**Playlist Rotation:**
- Playlists cycle through multiple layouts
- Display may be showing different layout in rotation

**Check Playlist:**
1. Go to display settings
2. Look for **Active Playlist**
3. See which layouts are in playlist
4. Verify rotation is working as expected

**Solution:**
- Remove playlist if not wanted
- Or edit playlist to change layouts
- Or adjust layout durations in playlist

---

#### 3. Cached Content

**Browser Caching:**
- Display browser may have cached old layout
- Needs refresh to show new content

**Solution:**
1. Force refresh on display: Ctrl+Shift+R or Cmd+Shift+R
2. Clear browser cache
3. Restart browser
4. Content should update

---

#### 4. Wrong Display Selected

**Verify Display:**
- May have updated wrong display in dashboard
- Check display name carefully

**Solution:**
1. Confirm which physical display has issue
2. Find matching display in dashboard
3. Verify layout assignment
4. Update correct display

---

### Display Shows Blank Screen

**Symptoms:**
- Display is white/black screen
- No content visible
- Browser open but nothing showing
- "Loading..." screen never finishes

**Common Causes:**

#### 1. No Layout Assigned

**Check Assignment:**
1. Go to **Displays** → Click display
2. Under **Active Layout**, check if layout selected
3. If "None" or blank, select layout
4. Save changes

**Display Must Have Layout:**
- Displays won't show anything without assigned layout
- Assign at least one layout to display content

---

#### 2. Layout is Empty

**Empty Layout:**
- Layout exists but has no content areas
- Or all content areas are empty

**Verify Layout:**
1. Go to **Layouts** → Click layout
2. Open in Layout Editor
3. Check for content areas on canvas
4. Add content if layout is empty

---

#### 3. Content Source Failed

**All Content Failed to Load:**
- Every content source in layout has error
- Nothing to display

**Check Content Sources:**
1. Go to **Content Sources**
2. Check status of sources in this layout
3. Look for error messages
4. Fix failing content sources
5. See [Content Problems](./content-problems.md)

---

#### 4. JavaScript Error

**Browser Error:**
- JavaScript error preventing layout render
- Check browser console (F12)

**Solution:**
1. Refresh page
2. Clear cache
3. Update browser
4. Try different browser
5. Contact support with console error

---

## Performance Issues

### Display Running Slow

**Symptoms:**
- Display lags or stutters
- Content transitions choppy
- Delayed response to updates
- General sluggishness

**Common Causes:**

#### 1. Device Hardware Limitations

**Underpowered Device:**
- Old or low-spec tablet/computer
- Insufficient RAM (need 2GB+ minimum)
- Slow processor

**Solutions:**
1. **Upgrade Device:**
   - Minimum: 2GB RAM, 1.5GHz processor
   - Recommended: 4GB+ RAM, 2GHz+ processor
   - Best: Dedicated digital signage device

2. **Optimize Device:**
   - Close all other applications
   - Restart device regularly
   - Clear unnecessary files
   - Update operating system

---

#### 2. Layout Complexity

**Too Much Content:**
- Layout has too many content areas
- Large images/videos
- Multiple integrations refreshing
- High-resolution media

**Solutions:**
1. **Simplify Layout:**
   - Reduce number of content areas (6-8 maximum)
   - Use smaller images (1920x1080 max)
   - Optimize video codec and bitrate
   - Reduce simultaneous integrations

2. **Optimize Media:**
   - Compress images (85-90% quality)
   - Use H.264 video codec
   - Keep videos under 2 minutes
   - Reduce video resolution if needed

---

#### 3. Network Speed

**Slow Internet:**
- Content takes long to download
- Videos buffer or stutter
- Images load slowly

**Solutions:**
1. **Test Internet Speed:**
   - Visit speedtest.net on display device
   - Minimum: 5 Mbps download
   - Recommended: 10+ Mbps download
   - For video: 25+ Mbps recommended

2. **Improve Connection:**
   - Use ethernet instead of WiFi
   - Upgrade internet plan
   - Reduce network congestion
   - Close bandwidth-heavy apps

---

#### 4. Browser Performance

**Browser Struggling:**
- Long-running browser session
- Memory leaks
- Too many cached resources

**Solutions:**
1. **Restart Browser:**
   - Daily restart recommended
   - Clears memory and cache
   - Refreshes connection

2. **Update Browser:**
   - Keep Chrome/Firefox updated
   - Latest versions perform better
   - Enable hardware acceleration

3. **Dedicated Device:**
   - Don't use display for other tasks
   - Single-purpose device performs better
   - Fewer conflicts and slowdowns

---

### Content Loads Slowly

**Symptoms:**
- Images take time to appear
- Videos buffer before playing
- Blank areas while content loads
- "Loading..." indicators visible

**Solutions:**

#### 1. Optimize Media Files

**Image Optimization:**
- Compress images before upload
- Use JPG for photos (smaller than PNG)
- Maximum size: 1920x1080 for most displays
- Tools: TinyPNG, ImageOptim, Squoosh

**Video Optimization:**
- Use H.264 codec (best compatibility and size)
- Reduce bitrate (3-5 Mbps sufficient for most)
- Keep videos under 2 minutes
- Resolution: 1920x1080 or lower
- Tools: HandBrake, FFmpeg

---

#### 2. Preload Content

**Content Caching:**
BrandCast automatically caches content:
- Images cached for 24 hours
- Videos cached for 24 hours
- Integrations cached per refresh interval

**Improve Caching:**
1. Keep same content in layouts longer
2. Reduces need to re-download
3. Preloads next layout in playlist
4. Enable longer cache durations (Enterprise)

---

#### 3. Network Bandwidth

**Increase Internet Speed:**
- Upgrade from 5 Mbps to 10+ Mbps
- Use ethernet (faster than WiFi)
- Reduce network congestion
- Check for ISP throttling

**Content Delivery:**
- BrandCast uses Google Cloud CDN
- Content delivered from nearest location
- Should be fast globally
- Slow loading may indicate local network issue

---

### Display Freezes or Crashes

**Symptoms:**
- Display stops responding
- Browser crashes completely
- Display shows error page
- Device needs restart

**Common Causes:**

#### 1. Memory Exhaustion

**Browser Out of Memory:**
- Long-running session consumes RAM
- Memory leak in browser
- Too much content cached

**Solutions:**
1. **Restart Browser Daily:**
   - Schedule overnight restart
   - Clears memory automatically
   - Prevents accumulation

2. **Increase Device RAM:**
   - Upgrade to device with 4GB+ RAM
   - Dedicated signage hardware
   - Commercial-grade displays

---

#### 2. Incompatible Content

**Problematic Media:**
- Corrupted video file
- Unsupported format
- Oversized file
- Malformed integration data

**Solutions:**
1. **Identify Problem Content:**
   - Check which content causes crash
   - Remove content temporarily
   - Test layout without it
   - Replace with different content

2. **Validate Media:**
   - Re-encode video files
   - Compress images
   - Test content in browser first
   - Use recommended formats

---

#### 3. Browser Issues

**Browser Bug:**
- Rare but possible
- Update to latest version
- Try different browser

**Solutions:**
1. Update browser to latest version
2. Try Chrome (most reliable)
3. Clear all browser data
4. Reinstall browser if needed

---

#### 4. Device Overheating

**Thermal Shutdown:**
- Device gets too hot
- Shuts down to protect hardware
- Common with tablets in enclosed spaces

**Solutions:**
1. **Improve Ventilation:**
   - Don't enclose device
   - Ensure airflow around device
   - Use fan if needed

2. **Reduce Load:**
   - Simplify layout
   - Reduce screen brightness
   - Enable device sleep when business closed

---

## Hardware-Specific Issues

### Tablet/iPad Display Issues

**Screen Rotation:**
- Lock screen orientation
- Settings → Display → Rotation Lock → On
- Prevents accidental rotation

**Auto-Brightness:**
- Disable auto-brightness for consistent display
- Set manual brightness level
- Prevents screen dimming

**Battery Health:**
- Keep plugged in (don't run on battery)
- Lithium batteries degrade when always at 100%
- Some iPads/tablets have "battery health" settings

---

### Smart TV Display Issues

**TV Sleep Mode:**
- Disable TV sleep mode in TV settings
- Keep TV powered on 24/7
- Use TV's "retail" or "commercial" mode if available

**HDMI Ports:**
- If using external device (Fire Stick, etc.)
- Use HDMI port labeled "ARC" if available
- Disable HDMI-CEC (can cause unwanted behavior)

**TV Updates:**
- Keep TV firmware updated
- Check manufacturer's website
- Updates improve stability

---

### Computer Display Issues

**Screen Saver:**
- Disable screen saver completely
- Control Panel → Screen Saver → None
- Prevents interruption

**Windows Updates:**
- Schedule updates for off-hours
- Prevent automatic restarts during business
- Update manually overnight

**Login Screen:**
- Disable password on wake
- Auto-login on startup
- Prevents lock screen from showing

---

## Prevention and Maintenance

### Daily Checks

- [ ] Verify displays show online status
- [ ] Check that content is displaying correctly
- [ ] Review any alert notifications
- [ ] Test remote layout updates

### Weekly Maintenance

- [ ] Review display health metrics
- [ ] Clean screens if needed
- [ ] Test display restarts
- [ ] Update content as scheduled

### Monthly Maintenance

- [ ] Restart all display devices
- [ ] Update browser if new version available
- [ ] Review network performance
- [ ] Check for device firmware updates
- [ ] Archive old layouts and content

### Best Practices

**Stable Network:**
- Use ethernet whenever possible
- Dedicated WiFi SSID for displays
- Minimum 10 Mbps per display
- Backup internet connection (Enterprise)

**Dedicated Devices:**
- Don't use display devices for other tasks
- Single-purpose improves reliability
- Reduces conflicts and issues

**Regular Restarts:**
- Restart display devices weekly
- Clear memory and cache
- Refresh connections
- Improve long-term stability

**Monitor Performance:**
- Check display analytics
- Track uptime percentage
- Identify problematic displays
- Address issues proactively

---

## Getting Help

**Still Having Issues?**

1. **Check Other Guides:**
   - [Common Issues](./common-issues.md) - General troubleshooting
   - [Content Problems](./content-problems.md) - Content-specific issues
   - [Integration Problems](./integration-problems.md) - Integration issues

2. **Contact Support:**
   - Email: support@brandcast.app
   - Include: Display name, error message, browser/device info
   - Attach screenshots if possible
   - Describe steps to reproduce

3. **Emergency Support:**
   - For critical display outages during business hours
   - Email: emergency@brandcast.app
   - Enterprise plans only

---

## Next Steps

- **[Display Setup Workflow](../workflows/display-setup.md)** - Initial display setup guide
- **[Displays Feature Guide](../features/displays.md)** - Complete display documentation
- **[Content Association](../workflows/content-association.md)** - Assigning content to displays
- **[Setup Checklist](../getting-started/setup-checklist.md)** - Production deployment
