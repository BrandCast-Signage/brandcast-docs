---
title: Display Setup
---

# Display Setup

This guide walks you through the complete process of setting up and configuring displays for your retail locations.

## Overview

Displays are the physical screens in your store that show content to customers or employees. BrandCast supports two types of displays:

- **Store Front** - Customer-facing displays (lobby, entrance, checkout areas)
- **Break Room** - Employee-facing displays (schedules, announcements, training)

## Creating a Display

### Step 1: Navigate to Displays

1. Log into your BrandCast dashboard
2. Click **Displays** in the left navigation menu
3. Click **Create Display** button

### Step 2: Configure Display Settings

**Basic Information:**
- **Name** - Descriptive name (e.g., "Checkout Counter Display")
- **Type** - Store Front or Break Room
- **Location** - Physical location description (e.g., "Front Entrance", "Register 3")
- **Store** - Select which store this display belongs to

**Optional Settings:**
- **Description** - Additional notes about this display
- **Is Active** - Enable/disable the display

Click **Create** to generate the display and registration code.

### Step 3: Note Your Registration Code

After creating the display, you'll see a **6-character registration code**. Keep this handy for the next step.

**Security Note**: Registration codes expire after 24 hours. If your code expires, you can generate a new one from the display settings page.

## Registering Your Display Device

### Supported Devices

- **Tablets**: iPad, Android tablets, Amazon Fire tablets
- **Smart TVs**: Any TV with a web browser
- **Computers**: Windows, Mac, Linux with Chrome/Firefox
- **HDMI Sticks**: Amazon Fire Stick, Chromecast, Roku (with browser app)

### Registration Process

On your display device:

1. Open a web browser (Chrome or Firefox recommended)
2. Navigate to: **display.brandcast.app**
3. Enter your 6-character registration code
4. Click **Register Device**
5. The display will connect and show your assigned layout

**Troubleshooting**: If registration fails:
- Verify internet connection
- Check that registration code hasn't expired
- Try a different browser
- Clear browser cache and cookies

## Display Configuration Options

### Assigning a Layout

Displays show content through layouts. To change the active layout:

1. Go to **Displays** → Click on your display
2. Under **Active Layout**, select from the dropdown
3. Click **Update**

The display will immediately switch to the new layout.

### Setting a Schedule

Schedules let you change layouts based on time of day:

1. Create a schedule from **Schedules** menu
2. Go to your display settings
3. Under **Active Schedule**, select your schedule
4. Click **Update**

Example: Show promotional content during business hours, display "Closed" message after hours.

### Playlist Assignment

Playlists rotate through multiple layouts on a timer:

1. Create a playlist from **Playlists** menu
2. Go to your display settings
3. Under **Playlist**, select your playlist
4. Click **Update**

Playlists are useful for rotating different promotions or announcements.

## Managing Multiple Displays

### Bulk Operations

For multi-store operations:

1. Go to **Displays**
2. Use checkboxes to select multiple displays
3. Click **Bulk Actions** dropdown:
   - Assign same layout to all
   - Enable/disable multiple displays
   - Update settings across displays

### Display Groups

Organize displays by:
- **Store** - Filter by location
- **Type** - View only Store Front or Break Room displays
- **Status** - See active/inactive displays

## Display Health Monitoring

### Session Status

Each display shows its connection status:

- 🟢 **Online** - Display is connected and active
- 🟡 **Idle** - Connected but no activity (may be sleeping)
- 🔴 **Offline** - Not connected (check device/network)

### Last Activity

View when each display last checked in:
- **Last Accessed** - Most recent ping from display
- **Session Started** - When current session began

### Troubleshooting Connection Issues

If a display shows offline:

1. **Check physical device**:
   - Is it powered on?
   - Is screen displaying anything?
   - Check HDMI connections

2. **Verify network**:
   - Is device connected to WiFi?
   - Can device access other websites?
   - Check firewall/proxy settings

3. **Browser issues**:
   - Clear browser cache
   - Update browser to latest version
   - Try incognito/private browsing mode

4. **Re-register if needed**:
   - Generate new registration code
   - Re-register the device

## Display Settings Reference

### Registration Method

- **Manual** - User enters registration code (default)
- **QR Code** - Scan QR code to register (coming soon)

### Metadata

Store custom data about your display:
- Installation date
- Hardware specifications
- Warranty information
- Maintenance schedule

Access via **Display Settings** → **Metadata** tab.

## Best Practices

### Hardware Recommendations

**For Optimal Performance:**
- **Tablets**: iPad (2018 or newer), Samsung Galaxy Tab
- **Computers**: 4GB+ RAM, modern processor
- **Network**: Stable WiFi with 10+ Mbps speed
- **Display**: 1920x1080 resolution or higher

### Content Refresh

- Displays auto-refresh content every 5 minutes
- Layout changes apply immediately
- For time-sensitive content, use schedules or playlists

### Security

- Keep registration codes confidential
- Use store-specific WiFi networks
- Enable auto-lock on tablet devices
- Regularly update browser software

### Placement Guidelines

**Store Front Displays:**
- Eye level for average customer height
- Avoid direct sunlight/glare
- Position near high-traffic areas
- Ensure power outlets nearby

**Break Room Displays:**
- Visible from seating areas
- Protected from spills/damage
- Accessible for employees to view schedules

## Common Use Cases

### Reception Area

- **Layout**: Welcome message + calendar events
- **Schedule**: Business hours only
- **Content**: Company news, visitor information

### Checkout Counter

- **Layout**: Promotions + product highlights
- **Playlist**: Rotate 3-5 promotional layouts
- **Refresh**: Every 30 seconds

### Employee Break Room

- **Layout**: Schedule + announcements + weather
- **Schedule**: 24/7 active
- **Content**: Shift schedules, company updates, local weather

## Next Steps

- **[Content Association](./content-association.md)** - Connect content to your displays
- **[Layouts](../features/layouts.md)** - Design custom layouts
- **[Playlists](../features/integrations.md#playlists)** - Create content rotation schedules
- **[Troubleshooting](../troubleshooting/display-problems.md)** - Fix common display issues
