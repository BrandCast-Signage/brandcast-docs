---
title: Google Calendar
---

# Google Calendar Integration

Display event calendars from Google Calendar, Outlook, Apple Calendar, or any iCal-compatible calendar service on your digital signage.

## Overview

The Google Calendar integration enables you to show upcoming events, meetings, and appointments on your displays using the standard iCal format. This works with Google Calendar, Microsoft Outlook, Apple Calendar, and any other calendar service that provides an iCal feed URL.

**Key Features:**
- Multiple calendar feeds in one display
- Automatic event synchronization
- Color-coded calendar categories
- All-day and timed events
- Priority-based event sorting
- Chronological or custom event ordering
- Date range filtering
- Feed-specific event limits
- 30-second timeout protection
- Robust error handling

**Integration Type:** ICAL_CALENDAR

## Use Cases

**Corporate Offices:**
- Conference room schedules
- Company-wide events
- Meeting room booking displays
- Executive calendar displays
- Department event calendars

**Event Venues:**
- Event schedule displays
- Room booking information
- Conference agendas
- Workshop schedules
- Performance calendars

**Educational Institutions:**
- Class schedules
- Campus events
- Exam schedules
- Faculty meetings
- Student activities

**Healthcare:**
- Appointment schedules
- Staff meeting calendars
- Procedure schedules
- Room availability
- Doctor availability

**Fitness Centers:**
- Class schedules
- Personal training sessions
- Facility event calendar
- Member events
- Instructor availability

## Supported Calendar Services

### Google Calendar (Primary)

**Best For:**
- Personal and business calendars
- Shared team calendars
- Resource calendars
- Event calendars

**Features:**
- Easy iCal URL generation
- Multiple calendar support
- Color coding
- All-day events
- Recurring events
- Timezone support

**Website:** [calendar.google.com](https://calendar.google.com)

### Microsoft Outlook

**Best For:**
- Corporate calendars
- Exchange calendars
- Office 365 calendars
- Team calendars

**Features:**
- iCal export
- Shared calendars
- Meeting rooms
- Resource booking

**Website:** [outlook.com](https://outlook.com)

### Apple Calendar (iCal)

**Best For:**
- Mac/iOS users
- Personal calendars
- iCloud calendars
- Family calendars

**Features:**
- Native iCal format
- iCloud sync
- Shared calendars
- Calendar subscriptions

**Website:** [icloud.com/calendar](https://icloud.com/calendar)

### Other iCal Services

Any service that provides an iCal/ICS URL:
- Yahoo Calendar
- AOL Calendar
- CalDAV servers
- Custom calendar systems
- Event management platforms

## Setup

### Step 1: Get Calendar iCal URL

#### From Google Calendar

1. Open [Google Calendar](https://calendar.google.com)
2. Find the calendar in the left sidebar
3. Click the three dots next to calendar name
4. Select **Settings and sharing**
5. Scroll to **Integrate calendar** section
6. Copy the **Secret address in iCal format** URL

**Example URL:**
```
https://calendar.google.com/calendar/ical/your-calendar-id/private-abc123/basic.ics
```

**Important:**
- Use the **Secret address** (private URL)
- Don't share this URL publicly
- It provides full access to your calendar
- Regenerate if compromised

#### From Microsoft Outlook

1. Open [Outlook Calendar](https://outlook.com/calendar)
2. Go to **Settings** → **Calendar** → **Shared calendars**
3. Select calendar to share
4. Click **Publish to iCal**
5. Copy the provided iCal URL

**Alternative (Outlook Desktop):**
1. Right-click calendar
2. Select **Publish to Internet**
3. Choose **iCal** format
4. Copy generated URL

#### From Apple Calendar

1. Open **Calendar** app
2. Right-click calendar in sidebar
3. Select **Get Info**
4. Check **Public** calendar
5. Copy the **Calendar Address** (webcal:// or https://)

**Convert webcal to https:**
- Replace `webcal://` with `https://`
- Example: `webcal://p01-caldav.icloud.com/...` → `https://p01-caldav.icloud.com/...`

### Step 2: Add Calendar Feed to BrandCast

**From Dashboard:**

1. Navigate to **Content Library** → **Add Content Source**
2. Select **Calendar** content type
3. Click **Add Calendar Feed**
4. Enter feed details:
   - **Name**: Descriptive name (e.g., "Company Events")
   - **iCal URL**: Paste the URL from Step 1
   - **Priority**: Numeric priority (higher = more important)
   - **Color**: Visual color for this feed (optional)
5. Click **Add Feed**
6. Repeat for additional calendar feeds

**Feed Configuration:**
```javascript
{
  "name": "Company Events",
  "icalUrl": "https://calendar.google.com/calendar/ical/.../basic.ics",
  "isActive": true,
  "priority": 100,
  "color": "#4285F4"
}
```

**Priority System:**
- Higher number = higher priority
- Used for sorting when events overlap
- Range: 0-999
- Default: 0

**Color Coding:**
- Hex color code (e.g., "#4285F4")
- Used to visually distinguish feeds
- Optional (defaults to calendar's color)
- Applied as border or background

### Step 3: Configure Display Settings

**Display Options:**

**Event Filtering:**
- **Date Range**: Show events from today to X days ahead
- **Max Events**: Limit total events displayed
- **Max Per Feed**: Limit events per calendar feed
- **Include All-Day**: Show/hide all-day events
- **Include Past**: Show events that already started

**Event Sorting:**
- **Chronological**: Sort by start time (default)
- **Priority**: Sort by feed priority, then time
- **Feed-Specific**: Group by feed, then sort

**Display Format:**
- **Compact List**: Simple event list
- **Detailed View**: Full event details
- **Day View**: Events grouped by day
- **Week View**: 7-day calendar grid
- **Timeline**: Horizontal timeline view

**Configuration Example:**
```javascript
{
  "refreshInterval": 300,        // 5 minutes
  "maxEvents": 20,               // Show 20 events total
  "maxEventsPerFeed": 10,        // Max 10 events per calendar
  "mergeStrategy": "chronological",
  "dateRange": 14,               // Next 14 days
  "includeAllDay": true,
  "includePast": false,
  "displayFormat": "compact"
}
```

### Step 4: Add to Layout

**In Layout Editor:**

1. Open or create layout
2. Add content area for calendar
3. Set content type to **CALENDAR**
4. Select your calendar content source
5. Position and size the area
6. Save layout
7. Assign to display

**Recommended Sizes:**

**Sidebar Widget:**
- 300×600 to 400×800
- Compact list view
- 5-10 events visible
- Good for overview

**Half Screen:**
- 960×1080 or 800×600
- Detailed view
- 10-15 events visible
- Good for lobby displays

**Fullscreen:**
- 1920×1080
- Week or timeline view
- Maximum information
- Good for dedicated calendar displays

## Display Formats

### Compact List View

**Simple vertical list of upcoming events:**

```
┌────────────────────────────────┐
│ Upcoming Events                │
├────────────────────────────────┤
│ 📅 Oct 14 - 9:00 AM            │
│ Team Standup                   │
│ Conference Room A              │
│                                │
│ 📅 Oct 14 - 2:00 PM            │
│ Client Presentation            │
│ Main Conference Room           │
│                                │
│ 📅 Oct 15 - All Day            │
│ Company Holiday                │
│                                │
│ 📅 Oct 15 - 10:30 AM           │
│ Department Meeting             │
│ Room 204                       │
└────────────────────────────────┘
```

**Best For:** Sidebar widgets, simple event lists, quick reference

### Detailed View

**Full event information with descriptions:**

```
┌────────────────────────────────┐
│ Today's Schedule               │
├────────────────────────────────┤
│ 9:00 AM - 10:00 AM             │
│ ▶ Team Standup                 │
│   Conference Room A            │
│   Daily team sync meeting      │
│   📞 Zoom link available       │
│                                │
│ 2:00 PM - 3:30 PM              │
│ ▶ Client Presentation          │
│   Main Conference Room         │
│   Q4 results presentation      │
│   👥 External attendees        │
│                                │
│ 4:00 PM - 5:00 PM              │
│ ▶ Project Review               │
│   Room 204                     │
│   Weekly project status        │
└────────────────────────────────┘
```

**Best For:** Detailed schedules, conference room displays, meeting info

### Day View

**Events grouped by day:**

```
┌────────────────────────────────┐
│ This Week's Events             │
├────────────────────────────────┤
│ Monday, Oct 14                 │
│   9:00 AM  Team Standup        │
│   2:00 PM  Client Presentation │
│   4:00 PM  Project Review      │
│                                │
│ Tuesday, Oct 15                │
│   All Day  Company Holiday     │
│                                │
│ Wednesday, Oct 16              │
│   10:00 AM Budget Meeting      │
│   3:00 PM  Training Session    │
│                                │
│ Thursday, Oct 17               │
│   9:30 AM  Department Sync     │
│   1:00 PM  Lunch & Learn       │
└────────────────────────────────┘
```

**Best For:** Weekly overviews, lobby displays, employee schedules

### Week Grid View

**7-day calendar grid:**

```
┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│  Mon 14 │  Tue 15 │  Wed 16 │  Thu 17 │  Fri 18 │  Sat 19 │  Sun 20 │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ 9:00 AM │         │ 10:00AM │ 9:30 AM │ All Day │         │         │
│ Standup │ Holiday │ Budget  │ Dept    │ Conf    │         │         │
│         │         │         │ Sync    │         │         │         │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ 2:00 PM │         │ 3:00 PM │ 1:00 PM │         │         │         │
│ Client  │         │ Training│ Lunch   │         │         │         │
│ Present │         │         │ Learn   │         │         │         │
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘
```

**Best For:** Week overview, visual planning, event center displays

### Timeline View

**Horizontal timeline showing duration:**

```
┌────────────────────────────────────────────────────────┐
│         Today - Monday, October 14, 2025               │
├────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┤
│8AM │9AM │10AM│11AM│12PM│ 1PM│ 2PM│ 3PM│ 4PM│ 5PM│6PM │
├────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┤
│    ███ Standup        ████████ Client         ███ Rev │
│    9-10AM             2-3:30PM Pres           4-5PM   │
└────────────────────────────────────────────────────────┘
```

**Best For:** Visual schedules, meeting room booking, duration visualization

## Multi-Feed Calendar

### Combining Multiple Calendars

Display events from multiple calendars simultaneously:

**Example: Office Calendar Display**
```
Feed 1: Company Events (Priority: 100, Color: Blue)
  - All-hands meetings
  - Company holidays
  - Corporate events

Feed 2: Department Calendar (Priority: 90, Color: Green)
  - Team meetings
  - Department events
  - Project milestones

Feed 3: Conference Rooms (Priority: 80, Color: Orange)
  - Room A bookings
  - Room B bookings
  - Meeting room availability
```

**Display Result:**
Events merged and sorted based on configuration
- Chronological: Mixed by time, color-coded by feed
- Priority: Company events shown first when overlapping
- Feed-Specific: Each feed section separate

### Feed Priority

**When to Use:**
- Multiple overlapping events
- Important events should stand out
- Limited screen space

**Example Priority Setup:**
```
Executive Calendar:    Priority 100
Company-Wide Events:   Priority 90
Department Events:     Priority 80
Team Calendar:         Priority 70
Personal Calendars:    Priority 50
```

**Behavior:**
- Events at same time: Higher priority shown first
- Limited space: Higher priority events included
- Full display: All events shown, sorted by priority then time

### Color Coding

**Visual Differentiation:**
- Each feed has unique color
- Shown as event border, background, or accent
- Helps identify event source at a glance

**Recommended Colors:**
```
Company Events:    #4285F4 (Blue)
Department:        #34A853 (Green)
Training:          #FBBC04 (Yellow)
Meetings:          #EA4335 (Red)
Personal:          #9E9E9E (Gray)
```

## Advanced Configuration

### Event Filtering

**Date Range:**
```javascript
{
  "startDate": "2025-10-14",  // Start from specific date
  "endDate": "2025-10-28",    // End at specific date
  "dateRange": 14              // Or: Next 14 days from now
}
```

**Event Limits:**
```javascript
{
  "maxEvents": 20,             // Total events across all feeds
  "maxEventsPerFeed": 10,      // Max per individual feed
}
```

**Event Types:**
```javascript
{
  "includeAllDay": true,       // Show all-day events
  "includePast": false,        // Hide past events
  "includeRecurring": true     // Show recurring events
}
```

### Merge Strategies

**Chronological (Default):**
- Events sorted by start time only
- Simplest approach
- Good for most use cases

```javascript
{
  "mergeStrategy": "chronological"
}
```

**Priority-Based:**
- Events sorted by priority, then time
- Higher priority feeds shown first
- Good when some calendars more important

```javascript
{
  "mergeStrategy": "priority"
}
```

**Feed-Specific:**
- Events grouped by feed
- Each feed limited independently
- Then merged chronologically
- Good for balanced multi-feed display

```javascript
{
  "mergeStrategy": "feed-specific",
  "maxEventsPerFeed": 5
}
```

### Refresh Intervals

**Recommended Settings:**

**Real-Time Needs (Conference Rooms):**
- Interval: 60-300 seconds (1-5 minutes)
- Ensures room availability current
- Higher server load

**Standard Office Use:**
- Interval: 300-900 seconds (5-15 minutes)
- Balance between freshness and performance
- Recommended for most cases

**Low-Priority Displays:**
- Interval: 1800-3600 seconds (30-60 minutes)
- Reduces server load
- Good for informational displays

**Configuration:**
```javascript
{
  "refreshInterval": 300  // 5 minutes (in seconds)
}
```

## Troubleshooting

### Calendar Feed Not Loading

**Symptoms:**
- "Failed to fetch calendar" error
- Events not showing
- Empty calendar display

**Solutions:**

1. **Verify iCal URL:**
   - Copy URL from calendar source
   - Paste in browser to test
   - Should download .ics file
   - Check for typos

2. **Check Calendar Privacy:**
   - Google Calendar: Must be "Public" or use secret link
   - Outlook: Must be published to internet
   - Apple Calendar: Must be shared with public link
   - Private calendars won't work

3. **Test URL Accessibility:**
   - Open URL in browser
   - Should download calendar file
   - If browser shows error, URL is wrong
   - Regenerate iCal URL if needed

4. **Network Issues:**
   - BrandCast servers must reach calendar host
   - Firewall may block requests
   - DNS must resolve calendar domain
   - 30-second timeout for slow responses

### Events Not Updating

**Symptoms:**
- Old events still showing
- New events not appearing
- Calendar seems frozen

**Check:**

1. **Refresh Interval:**
   - Check configured refresh rate
   - Default: 5 minutes
   - May take time to update
   - Manually refresh to test

2. **Calendar Source:**
   - Verify events exist in source calendar
   - Check event dates (future events only)
   - Confirm calendar not deleted
   - Test iCal URL in browser

3. **Cache Issues:**
   - Clear browser cache on display
   - Restart display device
   - Force content refresh
   - Check BrandCast server logs

**Solutions:**
- Wait for next refresh cycle
- Reduce refresh interval
- Verify source calendar updated
- Contact support if persists

### Wrong Events Showing

**Symptoms:**
- Events from wrong calendar
- Unexpected events appearing
- Missing expected events

**Check:**

1. **Feed Configuration:**
   - Verify correct iCal URL
   - Check feed is active
   - Confirm feed name matches calendar
   - Review feed priority settings

2. **Event Filters:**
   - Check date range settings
   - Verify max events not too low
   - Review feed-specific limits
   - Check if past events filtered

3. **Multiple Feeds:**
   - Review all configured feeds
   - Check for duplicate feeds
   - Verify each feed URL
   - Remove unused feeds

### Timezone Issues

**Symptoms:**
- Events showing at wrong time
- All-day events at midnight
- Time offset errors

**Solutions:**

1. **Store Timezone:**
   - Set correct timezone in Store settings
   - BrandCast converts all events to store timezone
   - Verify timezone matches display location

2. **Calendar Timezone:**
   - Check source calendar timezone
   - Google Calendar: Settings → Timezone
   - Outlook: Calendar settings → Timezone
   - Events stored in calendar's timezone

3. **Display Timezone:**
   - Display device timezone
   - Should match store timezone
   - Browser timezone setting
   - Operating system timezone

### Performance Issues

**Symptoms:**
- Slow calendar loading
- Display lag
- High CPU usage
- Calendar timeouts

**Optimization:**

1. **Reduce Event Count:**
   - Lower maxEvents limit
   - Reduce date range
   - Limit events per feed
   - Filter unnecessary calendars

2. **Increase Refresh Interval:**
   - Change from 1 minute to 5 minutes
   - Reduces server load
   - Decreases network traffic
   - Less processing required

3. **Simplify Display:**
   - Use compact view instead of detailed
   - Show fewer calendar feeds
   - Remove large event descriptions
   - Optimize layout complexity

## Best Practices

### Calendar Management

**Keep Calendars Organized:**
- Use descriptive event titles
- Add locations to all events
- Include event descriptions
- Set appropriate event times
- Use all-day for full-day events

**Color Coding:**
- Consistent colors per calendar type
- Visual hierarchy (important = bright)
- Don't use too many colors
- Test visibility on displays

**Event Descriptions:**
- Include relevant details
- Add meeting links
- Note special requirements
- Keep descriptions concise

### Display Strategy

**Content Balance:**
- Don't show too many events
- 10-20 events maximum
- Prioritize near-term events
- Use pagination if needed

**Readability:**
- Minimum 18pt font for events
- High contrast colors
- Clear event titles
- Adequate spacing

**Update Frequency:**
- Conference rooms: 1-5 minutes
- Office displays: 5-15 minutes
- Lobby displays: 15-30 minutes
- Informational: 30-60 minutes

### Privacy Considerations

**Sensitive Information:**
- Don't display private events
- Use "Busy" instead of titles
- Hide attendee information
- Redact confidential details

**Public Displays:**
- Review all events before displaying
- Remove employee personal calendars
- Filter inappropriate content
- Use separate public calendar

**Access Control:**
- Don't share secret iCal URLs
- Regenerate if compromised
- Use least-privilege calendars
- Regular access reviews

## API Reference

### Create Calendar Content Source

```
POST /api/content-sources
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "name": "Company Events",
  "type": "CALENDAR",
  "sourceType": "INTEGRATION",
  "integrationType": "ICAL_CALENDAR",
  "storeId": "store_abc123",
  "config": {
    "refreshInterval": 300,
    "maxEvents": 20,
    "mergeStrategy": "chronological",
    "dateRange": 14
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "content_xyz789",
    "name": "Company Events",
    "type": "CALENDAR",
    "createdAt": "2025-10-14T14:35:00Z"
  }
}
```

### Add Calendar Feed

```
POST /api/content-sources/:contentSourceId/calendar-feeds
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "name": "Company Events",
  "icalUrl": "https://calendar.google.com/calendar/ical/.../basic.ics",
  "isActive": true,
  "priority": 100,
  "color": "#4285F4"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "feed_abc123",
    "name": "Company Events",
    "icalUrl": "https://calendar.google.com/calendar/ical/.../basic.ics",
    "isActive": true,
    "priority": 100,
    "color": "#4285F4",
    "createdAt": "2025-10-14T14:35:00Z"
  }
}
```

### Get Calendar Events

```
GET /api/content-sources/:contentSourceId/events?startDate=2025-10-14&endDate=2025-10-28
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "events": [
      {
        "id": "event_abc123",
        "title": "Team Standup",
        "start": "2025-10-14T09:00:00Z",
        "end": "2025-10-14T10:00:00Z",
        "location": "Conference Room A",
        "description": "Daily team sync",
        "isAllDay": false,
        "feedId": "feed_abc123",
        "feedName": "Company Events",
        "feedColor": "#4285F4",
        "feedPriority": 100
      }
    ],
    "totalEvents": 1
  }
}
```

## Next Steps

- **[Cozi Calendar](./cozi-calendar.md)** - Family calendar integration
- **[Content Types](../features/content-types.md)** - Learn about CALENDAR content type
- **[Layouts](../features/layouts.md)** - Design calendar displays
- **[ZoomShift](./zoomshift.md)** - Employee scheduling integration
- **[Tasks](./tasks.md)** - Task list integration
