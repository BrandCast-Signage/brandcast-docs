---
title: Displays
---

# Displays

Physical screens that show your BrandCast content to customers and employees.

## Overview

Displays are the endpoints of your BrandCast system - the actual screens in your stores, offices, or facilities that show your content to your audience.

**Display Types:**
- **Store Front** - Customer-facing displays (lobby, checkout, entrance)
- **Break Room** - Employee-facing displays (schedules, announcements, training)

**Key Features:**
- Cloud-managed display control
- Real-time health monitoring
- Remote layout updates
- Session management
- Registration codes for easy setup
- Multi-store display management

## Creating a Display

### Step 1: Navigate to Displays

1. Log into your BrandCast dashboard
2. Click **Displays** in the main menu
3. Click **Create Display**

### Step 2: Configure Display

**Required Fields:**
- **Name**: Descriptive name (e.g., "Front Counter Display #1")
- **Type**: Store Front or Break Room
- **Location**: Physical location description
- **Store**: Which store this display belongs to

**Optional Fields:**
- **Description**: Additional notes about the display
- **Is Active**: Enable or disable the display
- **Metadata**: Custom fields for your tracking needs

### Step 3: Save and Get Registration Code

After saving, you'll receive a **6-character registration code** to connect your physical device.

**Example:** `ABC123`

**Security:**
- Codes expire after 24 hours
- Generate new code if expired
- One-time use per display
- Secure transmission

## Registering Display Devices

### Supported Devices

**Tablets:**
- iPad (2018 or newer)
- Android tablets (4GB+ RAM)
- Amazon Fire tablets
- Samsung Galaxy Tab

**Smart TVs:**
- Any TV with web browser
- Samsung Smart TV
- LG WebOS
- Android TV
- Roku (with browser channel)

**Computers:**
- Windows PC (Win 10+)
- Mac (macOS 10.14+)
- Linux (Ubuntu, Debian)
- Chrome browser recommended

**HDMI Sticks:**
- Amazon Fire Stick
- Chromecast (with Chrome browser)
- Roku Streaming Stick (with browser)

### Registration Process

**On the display device:**

1. Open web browser (Chrome or Firefox recommended)
2. Navigate to: **display.brandcast.app**
3. Enter your 6-character registration code
4. Click **Register Device**
5. Display connects and shows assigned layout

**What Happens:**
- Device creates secure session
- Registers device fingerprint
- Connects to BrandCast cloud
- Downloads and displays assigned layout
- Begins heartbeat monitoring

### Troubleshooting Registration

**Registration Failed:**
- Code may have expired (generate new one)
- Check internet connection
- Clear browser cache and cookies
- Try different browser
- Disable browser extensions

**Display Shows Error:**
- Verify code entered correctly
- Check display is active in dashboard
- Ensure display has layout assigned
- Review network firewall rules

**See:** [Display Setup Workflow](../workflows/display-setup.md) for detailed setup

## Display Configuration

### Assigning Layouts

**Single Layout Assignment:**
1. Go to display settings
2. Under **Active Layout**, select layout
3. Click **Update**
4. Display immediately switches to new layout

**Why It Updates Immediately:**
- Cloud-based control
- No need to touch physical device
- Changes apply within seconds
- Rollback available if needed

### Using Schedules

Control layout changes based on time:

**Example Schedule:**
- 9 AM - 5 PM: Promotional content
- 5 PM - 9 PM: After-hours messaging
- Weekends: Weekend-specific content

**Setup:**
1. Create schedule in **Schedules** menu
2. Define time-based rules
3. Assign to display
4. Automatic layout switching

**See:** [Content Association](../workflows/content-association.md) for schedule setup

### Using Playlists

Rotate through multiple layouts automatically:

**Example Playlist:**
- Layout 1: 30 seconds
- Layout 2: 45 seconds
- Layout 3: 30 seconds
- Repeat

**Setup:**
1. Create playlist in **Playlists** menu
2. Add layouts with durations
3. Set transition style (fade, slide, none)
4. Assign to display

**Best Practices:**
- 3-5 layouts per playlist optimal
- 30-60 seconds per layout
- Smooth transitions preferred
- Test before deploying

## Display Health Monitoring

### Session Status

Each display shows real-time status:

**🟢 Online** - Display connected and active
- Last ping within 5 minutes
- Displaying content normally
- Receiving updates

**🟡 Idle** - Connected but inactive
- Device may be sleeping
- Screen saver active
- Network temporarily disconnected
- Usually auto-recovers

**🔴 Offline** - Not connected
- No ping for 10+ minutes
- Device powered off
- Network disconnected
- Requires investigation

### Activity Tracking

**Last Accessed:**
- Timestamp of most recent ping
- Updates every 1-5 minutes
- Indicates display is alive

**Session Started:**
- When current session began
- Tracks uptime
- Helps identify connection issues

**Session Token:**
- Unique identifier for this session
- Secure authentication
- Rotates on disconnect/reconnect

### Health Metrics

Monitor display performance:

**Uptime:**
- Percentage of time online
- Last 24 hours, 7 days, 30 days
- Target: 99%+ uptime

**Connection Quality:**
- Ping response time
- Network latency
- Packet loss

**Content Delivery:**
- Successful layout loads
- Failed content fetches
- Cache hit rate

Access health metrics in display settings → **Analytics** tab.

## Display Types

### Store Front Displays

Customer-facing displays for public areas.

**Common Locations:**
- Lobby and entrance
- Checkout counters
- Product aisles
- Waiting areas
- Service desks

**Typical Content:**
- Promotional offers
- Product information
- Brand messaging
- Entertainment
- Wayfinding

**Considerations:**
- Bright, high-contrast content
- Large, readable text
- Auto-brightness for ambient light
- Sound off (usually)
- Professional appearance

### Break Room Displays

Employee-facing displays for internal areas.

**Common Locations:**
- Employee break rooms
- Back offices
- Time clock areas
- Training rooms
- Kitchen areas

**Typical Content:**
- Employee schedules
- Company announcements
- Training materials
- HR updates
- Benefits information

**Considerations:**
- Functional over flashy
- Schedule information prominent
- Text-heavy okay
- Updated frequently
- Security (internal only)

## Multi-Display Management

### Viewing All Displays

**Dashboard View:**
1. Go to **Displays**
2. See all displays with status
3. Filter and sort

**Information Shown:**
- Display name
- Store location
- Type (Store Front/Break Room)
- Status (Online/Idle/Offline)
- Assigned layout
- Last active time

### Bulk Operations

Manage multiple displays at once:

**Select Multiple Displays:**
1. Use checkboxes to select displays
2. Click **Bulk Actions** dropdown

**Available Actions:**
- Assign same layout to all
- Apply schedule to all
- Enable/disable multiple displays
- Update settings across displays
- Generate new registration codes

**Use Cases:**
- Deploy new promotional campaign to all stores
- Switch all displays to holiday content
- Update schedules across locations
- Disable displays for maintenance

### Display Groups

Organize displays for easier management:

**By Store:**
- All displays for Store #1
- All displays for Downtown location
- Regional grouping

**By Type:**
- All Store Front displays
- All Break Room displays
- All displays in a department

**By Purpose:**
- All promotional displays
- All informational displays
- All training displays

## Display Settings

### Basic Settings

**Display Information:**
- Name - Change display name
- Description - Update notes
- Location - Physical location
- Type - Store Front or Break Room

**Operational Settings:**
- Is Active - Enable/disable display
- Registration Code - Generate new code
- Auto-refresh - Enable periodic refresh

### Advanced Settings

**Session Management:**
- Session timeout (default: 24 hours)
- Auto-reconnect on disconnect
- Device fingerprint validation
- IP address logging

**Content Delivery:**
- Cache duration for layouts
- Preload next layout in playlist
- Image quality (high/medium/low)
- Video buffering settings

**Display Behavior:**
- Auto-start on browser open
- Fullscreen mode
- Hide cursor
- Prevent sleep mode

**Metadata:**
Store custom information:
- Installation date
- Hardware model
- Screen size and resolution
- Maintenance schedule
- Responsible person

Access via **Display Settings** → **Metadata** tab

## Display Security

### Registration Security

**Secure Registration:**
- 6-character random codes
- One-time use per code
- 24-hour expiration
- Encrypted transmission

**Device Fingerprinting:**
- Hardware identifiers
- Browser fingerprint
- IP address tracking
- Prevents unauthorized access

### Session Security

**Secure Sessions:**
- Encrypted communication (HTTPS)
- Session tokens
- Automatic timeout
- Re-authentication required

**Access Control:**
- Only authorized users create displays
- Role-based permissions
- Audit logging
- Session revocation

### Network Security

**Recommendations:**
- Use dedicated WiFi for displays
- Separate network from customer WiFi
- Firewall configuration
- VPN for sensitive content (Enterprise)

**Required Connectivity:**
- Outbound HTTPS (port 443)
- WebSocket connection
- DNS resolution
- No inbound connections required

## Best Practices

### Hardware Selection

**For Optimal Performance:**

**Budget-Friendly:**
- Amazon Fire Tablet (HD 10)
- Entry-level Android tablet
- Repurposed older tablets

**Recommended:**
- iPad (2020 or newer)
- Samsung Galaxy Tab
- High-quality Android tablet

**Professional:**
- Commercial-grade displays
- Dedicated digital signage hardware
- Built-in media players

### Installation

**Physical Placement:**
- Eye level for average viewer
- Avoid direct sunlight and glare
- Near power outlet
- WiFi signal strength: Good or better
- Accessible for maintenance

**Mounting:**
- Secure mounting (wall or stand)
- Cable management
- Power accessible but hidden
- Ventilation for tablets/computers
- Locked or secured against theft

### Network Requirements

**Minimum:**
- 5 Mbps download
- 1 Mbps upload
- Stable connection (no dropouts)

**Recommended:**
- 10+ Mbps download
- 5+ Mbps upload
- Ethernet preferred over WiFi
- Dedicated SSID for displays

**For Video Content:**
- 25+ Mbps download
- Low latency (<50ms)
- No bandwidth throttling

### Naming Conventions

Use consistent, descriptive names:

**Format:** `[STORE-CODE]-[LOCATION]-[PURPOSE]`

**Examples:**
- `NYC01-FRONT-CUSTOMER` - Front counter customer display
- `NYC01-BREAK-EMPLOYEE` - Break room employee display
- `LA-WEST-CHECKOUT-01` - Checkout display #1
- `CHI-LOOP-LOBBY-MAIN` - Main lobby display

**Benefits:**
- Easy identification
- Searchable by location
- Scalable across stores
- Clear purpose

### Content Refresh Strategy

**Manual Updates:**
- Major content changes
- New campaigns
- Seasonal updates

**Scheduled Updates:**
- Time-based content switches
- Business hours vs after-hours
- Weekday vs weekend content

**Playlist Rotation:**
- Automatic content variety
- 3-5 layouts rotating
- 30-60 seconds each

**Dynamic Content:**
- RSS feeds auto-update
- Weather refreshes
- Calendars sync automatically

### Maintenance

**Daily:**
- Check display status (all online?)
- Verify content displaying correctly
- Respond to alerts

**Weekly:**
- Review display health metrics
- Clean screens if needed
- Test remote updates

**Monthly:**
- Update content refresh
- Review analytics
- Hardware inspection
- Software updates if needed

**Quarterly:**
- Deep clean hardware
- Replace damaged equipment
- Review display placement
- Update documentation

## Common Use Cases

### Retail Store Front

**Setup:**
- 2-3 displays per store
- Main entrance display
- Checkout counter display
- Product display (optional)

**Content Strategy:**
- 70% promotional
- 20% informational
- 10% entertainment

**Update Frequency:**
- Weekly content updates
- Daily for sales
- Seasonal campaigns

### Restaurant Menu Board

**Setup:**
- Multiple displays as menu boards
- Kitchen display (orders)
- Drive-thru display

**Content:**
- Menu items with prices
- Daily specials
- Upsell items
- Nutrition information

**Update Frequency:**
- Real-time for specials
- Weekly for menu changes
- Seasonal menu updates

### Corporate Office

**Setup:**
- Lobby display (visitors)
- Break room display (employees)
- Meeting room displays (schedules)
- Department displays (metrics)

**Content:**
- Company news
- Meeting schedules
- Announcements
- Employee recognition

**Update Frequency:**
- Daily announcements
- Real-time meeting schedules
- Weekly recognition updates

### Fitness Center

**Setup:**
- Entrance display
- Workout area displays
- Class schedule display
- Locker room displays

**Content:**
- Class schedules
- Fitness tips
- Member spotlights
- Special events

**Update Frequency:**
- Real-time class schedules
- Weekly tips and content
- Daily class highlights

## Troubleshooting

### Display Won't Register

**Check:**
1. Registration code not expired?
2. Display is active in dashboard?
3. Internet connection working?
4. Browser compatible?

**Solutions:**
- Generate new registration code
- Activate display in settings
- Test internet on device
- Use Chrome or Firefox browser

**See:** [Display Problems](../troubleshooting/display-problems.md) for detailed troubleshooting

### Display Shows Offline

**Check:**
1. Device powered on?
2. Internet connected?
3. Browser still open?
4. Screen not sleeping?

**Solutions:**
- Restart display device
- Reconnect to WiFi
- Reopen display.brandcast.app
- Disable sleep mode
- Re-register if needed

### Content Not Updating

**Check:**
1. Layout assigned to display?
2. Layout published?
3. Display online?
4. Cache issue?

**Solutions:**
- Verify layout assignment
- Publish layout changes
- Refresh display browser
- Force cache clear

### Performance Issues

**Symptoms:**
- Slow loading
- Choppy animations
- Delayed updates
- Freezing

**Solutions:**
- Check internet speed
- Reduce layout complexity
- Optimize images/videos
- Restart display device
- Update browser

**See:** [Display Problems](../troubleshooting/display-problems.md) for comprehensive troubleshooting

## Display Analytics

### Metrics Tracked

**Uptime Metrics:**
- Total uptime percentage
- Offline incidents count
- Average session duration
- Reconnection frequency

**Content Metrics:**
- Layouts displayed count
- Content load time
- Failed content fetches
- Cache hit rate

**Performance Metrics:**
- Page load time
- Render time
- Network latency
- Error rate

### Accessing Analytics

1. Go to **Displays**
2. Click on display name
3. Navigate to **Analytics** tab
4. Select date range
5. View metrics and graphs

### Using Analytics

**Identify Issues:**
- Displays with low uptime
- Slow content delivery
- Network problems
- Hardware issues

**Optimize Performance:**
- Find displays needing faster internet
- Identify content causing slowdowns
- Optimize high-traffic layouts
- Plan hardware upgrades

**Track Trends:**
- Uptime trends over time
- Seasonal performance patterns
- Content effectiveness
- Display health degradation

## Next Steps

- **[Display Setup Workflow](../workflows/display-setup.md)** - Complete display setup guide
- **[Layouts](./layouts.md)** - Create layouts for your displays
- **[Content Library](./content-library.md)** - Prepare content to display
- **[Content Association](../workflows/content-association.md)** - Connect content to displays
- **[Troubleshooting Display Problems](../troubleshooting/display-problems.md)** - Fix common issues
