---
title: Display Registration
---

# Display Registration and Setup

Complete guide to registering displays, managing display sessions, and ensuring secure, reliable display connections.

## Overview

Display registration connects your physical display devices to your BrandCast account securely. Once registered, displays receive content updates automatically and remain managed through your dashboard.

**Registration Methods:**
- **Code-Based** (Recommended): 6-character code entry
- **QR Code**: Scan to register instantly
- **Auto-Discovery**: Network-based registration (Enterprise)

## Prerequisites

### Hardware Requirements

**Minimum Specifications:**
- **Display:** Any screen with HDMI input (TV, monitor, tablet)
- **Device:** Computer, tablet, or dedicated media player
- **Memory:** 2GB RAM minimum (4GB+ recommended)
- **Storage:** 500MB available space
- **Network:** WiFi or Ethernet connection

**Supported Devices:**
- Smart TVs (Samsung, LG, Sony with browser)
- Amazon Fire TV/Fire Tablets
- Apple TV / iPads
- Android TV / Android Tablets
- Raspberry Pi
- Windows/Mac/Linux computers
- Chrome OS devices
- Dedicated digital signage players

### Network Requirements

**Connectivity:**
- **Internet:** Broadband connection (5+ Mbps recommended)
- **Ports:** HTTPS (443), WebSocket (443)
- **Firewall:** Allow brandcast.app and *.brandcast.app
- **DNS:** Working DNS resolution

**Network Types:**
- **Home WiFi:** Works great
- **Business WiFi:** May need IT to whitelist
- **Guest Networks:** Usually work
- **Cellular:** LTE/5G supported (data usage considerations)
- **VPN:** Compatible (may need configuration)

### Account Setup

**Before Registering Displays:**
1. Create BrandCast account (brandcast.app)
2. Verify email address
3. Complete account setup
4. Create at least one layout
5. Have registration code ready

## Registration Process

### Method 1: Code-Based Registration (Recommended)

**Step 1: Generate Registration Code**

1. Log into BrandCast dashboard
2. Navigate to **Displays** → **Register New Display**
3. Click **Generate Registration Code**
4. 6-character code appears (e.g., **ABC123**)
5. Code valid for 15 minutes

**Step 2: Prepare Display Device**

1. Connect display device to internet
2. Open web browser
3. Navigate to: `https://display.brandcast.app`
4. Display shows registration screen

**Step 3: Enter Registration Code**

1. On display device, enter 6-character code
2. Click **Register**
3. System validates code
4. Display name prompt appears

**Step 4: Name Your Display**

1. Enter descriptive name:
   - Location: "Front Window Display"
   - Function: "Menu Board - Main"
   - Number: "Store Display #3"
2. Click **Complete Registration**

**Step 5: Verification**

1. Registration success message
2. Display immediately shows assigned content
3. Dashboard shows display online (green dot)
4. Ready to use!

**Time to Complete:** 2-3 minutes

---

### Method 2: QR Code Registration

**Step 1: Generate QR Code**

1. **Displays** → **Register New Display**
2. Click **Generate QR Code**
3. QR code appears on screen
4. Valid for 15 minutes

**Step 2: Scan QR Code**

1. On display device, navigate to `https://display.brandcast.app`
2. Click **Scan QR Code**
3. Allow camera access
4. Point camera at QR code on dashboard
5. Auto-registers instantly

**Step 3: Name Display**

1. Enter display name
2. Click **Complete**
3. Done!

**Advantages:**
- Fastest method (30 seconds)
- No typing required
- Great for multiple displays
- Reduced registration errors

**Requirements:**
- Display device must have camera
- Or use phone to scan, then transfer session

---

### Method 3: Auto-Discovery (Enterprise)

**Network-Based Registration:**

1. Connect display device to designated network
2. Device auto-detects BrandCast environment
3. Requests registration approval
4. Admin approves from dashboard
5. Display auto-configures

**Requirements:**
- Enterprise plan
- Network infrastructure setup
- IT configuration
- See Enterprise documentation

---

## Display Configuration

### Basic Settings

**After Registration:**

1. Go to **Displays** → Select display
2. Configure core settings:

**Display Information:**
- **Name**: Change anytime
- **Type**: Store Front, Break Room, etc.
- **Location**: Physical location description
- **Description**: Notes about display

**Display Settings:**
- **Orientation**: Landscape (16:9) or Portrait (9:16)
- **Resolution**: Auto-detect or manual
- **Timezone**: Display's local timezone
- **Language**: Display language preference

### Content Assignment

**What to Display:**

**Option 1: Layout**
- Assign single, static layout
- Content never changes (unless you update layout)
- Good for: Simple signage

**Option 2: Playlist**
- Assign rotating playlist
- Layouts auto-rotate
- Good for: Dynamic content, variety

**Option 3: Schedule**
- Time-based content switching
- Different content at different times
- Good for: Day-part content, menus

**Priority:**
- Schedule > Playlist > Layout
- If schedule assigned, it controls everything
- Playlist only active during unscheduled times
- Layout is fallback if nothing else assigned

### Advanced Settings

**Performance:**
- **Refresh Interval**: How often to check for updates
- **Cache Duration**: Content caching strategy
- **Preload**: Preload next content
- **Quality**: Auto, High, Medium, Low

**Behavior:**
- **Auto-Restart**: Daily restart time
- **Sleep Schedule**: Turn off during closed hours
- **Offline Mode**: Show cached content if disconnected
- **Error Display**: How to handle errors

**Security:**
- **Session Timeout**: Auto-logout after inactivity
- **PIN Protection**: Require PIN for settings
- **Restricted Mode**: Lock down display settings
- **Remote Management**: Allow/deny remote access

---

## Display Sessions

### What are Display Sessions?

A session is an active, authenticated connection between a display device and BrandCast servers.

**Session Lifecycle:**
1. **Created**: During registration
2. **Active**: Display connected and receiving content
3. **Idle**: Connected but inactive (>30 minutes)
4. **Expired**: Session timeout or logout
5. **Revoked**: Manually terminated

**Session Information:**
- **Session Token**: Unique identifier
- **IP Address**: Display's network address
- **User Agent**: Browser/device information
- **Created**: When session started
- **Last Active**: Most recent activity
- **Expires**: When session auto-expires (if set)

### Managing Sessions

**View Active Sessions:**

1. **Displays** → Select display
2. **Sessions** tab
3. See all active and recent sessions

**Session Details:**
- Device fingerprint
- IP address
- Geographic location
- Browser type
- Connection method
- Activity status

**Terminating Sessions:**

**Single Session:**
1. Find session in list
2. Click **Revoke**
3. Confirm termination
4. Display disconnects immediately

**All Sessions (Display Reset):**
1. Display settings → **Security**
2. Click **Revoke All Sessions**
3. Confirm
4. All sessions terminated
5. Display must re-register

**Use Cases:**
- Device stolen or lost
- Security concern
- Moving display to new location
- Troubleshooting connection issues

### Session Security

**Security Features:**

**Device Fingerprinting:**
- Tracks unique device characteristics
- Prevents unauthorized access
- Detects if display device changed
- Alerts on suspicious activity

**Session Expiration:**
- Auto-expire after inactivity period
- Default: Never (for continuous displays)
- Optional: 24 hours, 7 days, 30 days
- Good for: Temporary displays, demos

**IP Restrictions:**
- Limit sessions to specific IP ranges
- Enterprise feature
- Prevents remote access from unauthorized networks

**Two-Factor Registration:**
- Require second verification step
- Email or SMS confirmation
- Extra security for sensitive locations

---

## Multi-Display Management

### Bulk Registration

**Register Many Displays Quickly:**

**Step 1: Prepare Registration List**
1. Create spreadsheet with display names and locations
2. Generate codes in advance
3. Print code list for technicians

**Step 2: Parallel Registration**
1. Multiple technicians can register simultaneously
2. Each uses unique code from list
3. Coordinate via shared document

**Step 3: Verification**
1. Check all displays online in dashboard
2. Verify names and assignments
3. Test content displays correctly

**Tools:**
- Bulk registration spreadsheet template
- QR code sheets (multiple per page)
- Mobile registration app (coming soon)

### Grouping Displays

**Display Groups:**

Create logical groups for easier management:

**By Location:**
- "Store #123 Displays"
- "Main Street Location"
- "Corporate HQ"

**By Function:**
- "Menu Boards"
- "Promotional Displays"
- "Employee Information"

**By Content:**
- "Product Showcase Group"
- "Corporate Communications"
- "Entertainment Displays"

**Group Actions:**
- Assign content to all displays in group
- Update settings across group
- Monitor group health
- Generate group reports

### Naming Conventions

**Best Practices:**

**Format:** `[Location] - [Type] - [Number]`

**Examples:**
- "Store 101 - Menu Board - 1"
- "Main St - Window Display - Front"
- "HQ - Lobby - Reception"
- "Break Room - TV - Employee"

**Benefits:**
- Easy sorting and filtering
- Clear identification
- Scalable naming
- Team understanding

---

## Troubleshooting Registration

### Registration Code Not Working

**Symptoms:**
- "Invalid code" error
- Code not recognized
- Registration fails

**Causes & Solutions:**

**Code Expired:**
- Codes valid 15 minutes
- Generate new code
- Complete registration within time limit

**Typo in Code:**
- Double-check characters
- Codes are case-insensitive
- Watch for similar characters (0 vs O, 1 vs I)

**Code Already Used:**
- Each code single-use
- Generate new code
- Cannot reuse old codes

**Account Issue:**
- Verify account active
- Check quota limits (max displays reached?)
- Confirm email verified

### Display Won't Connect

**Symptoms:**
- Stuck on "Connecting..." screen
- "Unable to reach server" message
- Display never appears in dashboard

**Check:**

**Internet Connection:**
- Verify device connected to network
- Test by browsing to google.com
- Check WiFi password correct
- Ethernet cable properly connected

**Firewall/Network:**
- Corporate networks may block
- Contact IT to whitelist brandcast.app
- Check proxy settings
- Try guest network if available

**Browser Compatibility:**
- Use modern browser (Chrome, Firefox, Safari, Edge)
- Update to latest version
- Clear browser cache
- Try different browser

**Account Status:**
- Verify account in good standing
- Check subscription active
- Confirm not exceeding display limits
- Look for account restrictions

### Display Appears Offline

**Immediately After Registration:**

Wait 30-60 seconds for initial sync. If still offline:

1. Refresh dashboard (Ctrl/Cmd + R)
2. Check display device still connected
3. Look at display - any error messages?
4. View display logs (if accessible)

**Solutions:**
- Restart display browser
- Re-enter display URL
- Check internet connection
- Revoke and re-register if needed

---

## Display Replacement

### Moving Display to New Device

**Scenario:** Replacing hardware but keeping same display profile

**Method 1: Session Transfer**

1. Open new device browser
2. Go to `https://display.brandcast.app`
3. Click **Link Existing Display**
4. Enter display code or scan QR
5. Old session auto-revoked
6. New device takes over

**Method 2: Manual Re-Registration**

1. Revoke all sessions for old display
2. Register new device with same name
3. Re-assign content
4. Old device disconnected

### Retiring a Display

**Proper Decommissioning:**

1. **Displays** → Select display
2. Note any assigned content (for records)
3. Click **Delete Display**
4. Confirm deletion
5. All sessions revoked
6. Display removed from account
7. Cannot be recovered (register as new if needed later)

**Before Deleting:**
- Document configuration
- Screenshot settings
- Note content assignments
- Export analytics data (if needed)
- Remove from any groups

---

## Best Practices

### Registration

**Do:**
- ✅ Use descriptive, consistent names
- ✅ Register in batches for efficiency
- ✅ Document each display (location, device type)
- ✅ Test immediately after registration
- ✅ Assign content right away

**Don't:**
- ❌ Use generic names ("Display 1", "Display 2")
- ❌ Skip configuration steps
- ❌ Leave displays unassigned
- ❌ Forget to test connection
- ❌ Rush through setup

### Security

**Physical Security:**
- Mount displays securely
- Hide device access (behind display or in locked cabinet)
- Use kiosk mode browsers
- Disable physical buttons if possible

**Network Security:**
- Use dedicated network for displays (optional)
- Enable WPA2/WPA3 WiFi security
- Monitor for unauthorized access
- Regular security audits

**Session Management:**
- Review active sessions monthly
- Revoke suspicious sessions immediately
- Set expiration for temporary displays
- Document display movements

### Maintenance

**Regular Checks:**
- Weekly: Verify all displays online
- Monthly: Review session list
- Quarterly: Audit display names and assignments
- Annually: Hardware refresh cycle

**Health Monitoring:**
- Enable display health alerts
- Monitor uptime percentage
- Track connection quality
- Review error logs

---

## Next Steps

- **[Display Health Monitoring](./display-health.md)** - Monitor display status
- **[Content Association](./content-association.md)** - Assign content to displays
- **[Playlists](./playlists.md)** - Create rotating content
- **[Schedules](./schedules.md)** - Time-based content control
- **[Troubleshooting](../troubleshooting/display-problems.md)** - Fix display issues
