---
title: Cozi Calendar
---

# Cozi Calendar Integration

Display family calendars from Cozi on your digital signage for household coordination and family organization.

## Overview

The Cozi Calendar integration enables you to show family schedules, appointments, activities, and events from Cozi family organizer on your displays. Cozi is designed for busy families to coordinate schedules, and this integration brings that coordination to your kitchen, entryway, or family room display.

**Key Features:**
- Family calendar synchronization
- Color-coded family member calendars
- All-day and timed events
- Activity and appointment tracking
- Automatic event synchronization
- Timezone-aware scheduling
- Custom parsing for Cozi format
- Multiple family calendars supported
- Robust error handling

**Integration Type:** COZI_CALENDAR

## Use Cases

**Home/Family:**
- Kitchen command center displays
- Family room calendar
- Entryway schedule display
- Kids' bedroom activity schedules
- Home office family calendar

**Common Family Events:**
- Kids' sports practices and games
- School events and activities
- Doctor and dentist appointments
- Family outings and vacations
- Birthday parties
- Extracurricular activities
- Parent-teacher conferences
- After-school programs

**Household Coordination:**
- Work schedules
- Carpool rotations
- Meal planning
- House maintenance
- Pet care schedules
- Volunteer commitments

## About Cozi

**Cozi Family Organizer:**
- Free family calendar app
- iOS, Android, and web access
- Color-coded per family member
- Shared family access
- Shopping lists (see [Tasks Integration](./tasks.md))
- To-do lists (see [Tasks Integration](./tasks.md))
- Meal planner
- Family journal

**Why Use Cozi:**
- Designed specifically for families
- Easy for all family members to use
- Free tier available
- Syncs across all devices
- Visual color coding
- Simple sharing

**Website:** [cozi.com](https://www.cozi.com)

## Cozi vs. Google Calendar

| Feature | Cozi Calendar | Google Calendar |
|---------|---------------|-----------------|
| **Target Audience** | Families | Everyone |
| **Color Coding** | Per family member | Per calendar |
| **Shopping Lists** | ✅ Yes | ❌ No |
| **Meal Planner** | ✅ Yes | ❌ No |
| **Family Focus** | ✅ Yes | Neutral |
| **Free Tier** | Yes (ads) | Yes |
| **Mobile Apps** | iOS, Android | iOS, Android |
| **iCal Support** | Yes | Yes |
| **Best For** | Family coordination | Personal/work calendars |

**When to Use:**
- **Cozi**: Family-focused household displays
- **Google Calendar**: Office, personal, or business displays

## Setup

### Step 1: Create Cozi Account

1. Visit [cozi.com](https://www.cozi.com) or download mobile app
2. Click **Sign Up**
3. Enter email and create password
4. Create your family:
   - Family name
   - Add family members
   - Assign colors to each member
5. Verify email address

**Free vs. Premium:**
- **Free**: Full calendar, ads, 1 calendar color per person
- **Premium ($29.99/year)**: No ads, month view, birthday reminders, change colors

Either tier works with BrandCast integration.

### Step 2: Add Family Events to Cozi

**From Cozi App:**
1. Open Cozi app
2. Go to **Calendar**
3. Tap **+ Add**
4. Enter event details:
   - **Title**: Event name
   - **Date**: Event date
   - **Time**: Start/end times (or all-day)
   - **Who**: Which family members
   - **Location**: Where (optional)
   - **Notes**: Additional details
5. Save event

**Event appears:**
- In your Cozi app
- On all family members' devices
- On your BrandCast display (after sync)

**Event Types:**
- Regular appointments
- All-day events
- Recurring events
- Multi-day events

### Step 3: Get Cozi iCal URL

**From Cozi Website:**

1. Log into [cozi.com](https://www.cozi.com)
2. Click your name → **Account Settings**
3. Select **Calendar** tab
4. Find **Subscribe to Calendar** section
5. Copy the **iCal feed URL**

**Example URL:**
```
https://www.cozi.com/feeds/calendar/ics/FAMILY-ID-HERE/
```

**Important:**
- Keep this URL private (family access only)
- URL provides read access to family calendar
- Regenerate if compromised
- Each Cozi family has unique URL

**Free vs. Premium:**
- Both tiers provide iCal URL
- Same integration process
- Same features in BrandCast

### Step 4: Add to BrandCast

**From Dashboard:**

1. Navigate to **Content Library** → **Add Content Source**
2. Select **Calendar** content type
3. Choose **Cozi Calendar** integration
4. Enter feed details:
   - **Name**: "Family Calendar" (or family name)
   - **iCal URL**: Paste Cozi URL from Step 3
   - **Priority**: 100 (default)
   - **Color**: Optional override (Cozi provides colors)
5. Click **Add Feed**
6. Events sync automatically

**Configuration:**
```javascript
{
  "name": "Smith Family Calendar",
  "icalUrl": "https://www.cozi.com/feeds/calendar/ics/abc123/",
  "isActive": true,
  "priority": 100,
  "color": null  // Use Cozi's colors
}
```

### Step 5: Configure Display Settings

**Display Options:**

**Event Filtering:**
- **Date Range**: Show next 7-14 days (family planning)
- **Max Events**: 15-20 events (typical family load)
- **Include All-Day**: Yes (school holidays, etc.)
- **Include Past**: No (focus on upcoming)

**Display Format:**
- **Compact List**: Best for kitchen displays
- **Day View**: See today's schedule
- **Week View**: Plan ahead for the week

**Recommended Configuration:**
```javascript
{
  "refreshInterval": 300,        // 5 minutes
  "maxEvents": 20,
  "dateRange": 14,               // Next 2 weeks
  "includeAllDay": true,
  "displayFormat": "day-view",
  "showFamilyColors": true       // Color-code by family member
}
```

### Step 6: Add to Family Display Layout

**Kitchen Command Center Example:**

```
Layout: "Family Hub"
  Header (15%):
    - Date, Time, Weather

  Main (70%):
    - Cozi Family Calendar (left 50%)
    - Cozi Shopping List (right 50%)

  Footer (15%):
    - Daily Inspiration
    - Upcoming Events Preview
```

**Recommended Sizes:**
- Kitchen tablet (10"): 1280×800, compact view
- Wall display: 1920×1080, detailed view
- Entryway display: Portrait 1080×1920, week view

## Display Formats

### Family Day View

**Today's schedule color-coded by family member:**

```
┌────────────────────────────────┐
│ Smith Family - Today           │
│ Monday, October 14, 2025       │
├────────────────────────────────┤
│ 🔵 Sarah                        │
│   9:00 AM - 10:30 AM           │
│   Dentist Appointment          │
│   Dr. Johnson's Office         │
│                                │
│ 🟢 Tommy                        │
│   3:30 PM - 5:00 PM            │
│   Soccer Practice              │
│   Lincoln Park Fields          │
│                                │
│ 🟡 Emma                         │
│   4:00 PM - 5:30 PM            │
│   Piano Lesson                 │
│   Mrs. Anderson's Studio       │
│                                │
│ 👨‍👩‍👧‍👦 Everyone                │
│   6:30 PM - 7:30 PM            │
│   Family Dinner                │
│   Home                         │
└────────────────────────────────┘
```

**Color Legend:**
- 🔵 Blue: Mom/Parent 1
- 🟢 Green: Dad/Parent 2
- 🟡 Yellow: Child 1
- 🔴 Red: Child 2
- 🟣 Purple: Child 3
- 👨‍👩‍👧‍👦 Family events: All members

### Weekly Family Schedule

**Week overview with color coding:**

```
┌─────────────────────────────────────────────────────────┐
│ Smith Family - This Week                                │
├──────────┬──────────┬──────────┬──────────┬──────────────┤
│ Mon 14   │ Tue 15   │ Wed 16   │ Thu 17   │ Fri 18      │
├──────────┼──────────┼──────────┼──────────┼──────────────┤
│ 🔵 9:00  │ 🟢 7:30  │ 🟡 3:00  │ 🟢 6:00  │ All Day     │
│ Dentist  │ Gym      │ Dance    │ Meeting  │ School      │
│          │          │          │          │ Holiday     │
├──────────┼──────────┼──────────┼──────────┼──────────────┤
│ 🟢 3:30  │          │ 🟢 5:30  │          │ 🟡 4:00     │
│ Soccer   │          │ Dinner   │          │ Playdate    │
│ Practice │          │ Out      │          │             │
├──────────┼──────────┼──────────┼──────────┼──────────────┤
│ 6:30 PM  │ 6:30 PM  │ 6:30 PM  │ 6:30 PM  │ 6:00 PM     │
│ Family   │ Family   │ Family   │ Family   │ Movie       │
│ Dinner   │ Dinner   │ Dinner   │ Dinner   │ Night       │
└──────────┴──────────┴──────────┴──────────┴──────────────┘
```

### Compact Family List

**Simple upcoming events:**

```
┌────────────────────────────────┐
│ Upcoming Family Events         │
├────────────────────────────────┤
│ TODAY                          │
│ 🔵 9:00 AM  Sarah - Dentist    │
│ 🟢 3:30 PM  Tommy - Soccer     │
│ 🟡 4:00 PM  Emma - Piano       │
│ 👨‍👩‍👧‍👦 6:30 PM  Family Dinner  │
│                                │
│ TOMORROW                       │
│ 🟢 7:30 AM  John - Gym         │
│ All Day     School Closed      │
│                                │
│ WEDNESDAY                      │
│ 🟡 3:00 PM  Emma - Dance       │
│ 🟢 5:30 PM  Dinner Reservation │
└────────────────────────────────┘
```

## Color Coding

### Cozi Family Member Colors

**Default Cozi Colors:**
- **Parent 1**: Blue
- **Parent 2**: Green
- **Child 1**: Yellow
- **Child 2**: Red
- **Child 3**: Purple
- **Child 4**: Orange
- **Everyone**: Gray or multi-color

**Customization:**
- Cozi Premium: Change any color
- Free tier: Fixed colors per position
- BrandCast respects Cozi's colors automatically

### Visual Indicators

**Color Usage:**
- **Event border**: Primary indicator
- **Event background**: Subtle fill
- **Dot/icon**: Compact displays
- **Text color**: High contrast for readability

**Family Events (Everyone):**
- Special multi-color indicator
- "Family" label
- Prominent display
- Different visual style

## Advanced Features

### Timezone Handling

**Supported Timezones:**
- America/New_York (Eastern)
- America/Chicago (Central)
- America/Denver (Mountain)
- America/Los_Angeles (Pacific)
- UTC
- GMT

**How It Works:**
1. Cozi stores events in your timezone
2. BrandCast fetches with timezone info
3. Converts to display timezone
4. Shows correct local time

**Example:**
```
Cozi (New York): 3:00 PM ET
Display (California): Shows 12:00 PM PT
Display (New York): Shows 3:00 PM ET
```

**Configuration:**
- Set store timezone in Store settings
- BrandCast handles conversion automatically
- No manual timezone setup needed

### All-Day Events

**Detection:**
Cozi marks events as all-day when:
- No specific time set
- Event spans full day(s)
- School holidays
- Birthdays
- Vacation days

**Display:**
- Shown at top of day view
- No time shown, just date
- Special "All Day" badge
- Prominent positioning

**Example:**
```
All Day: School Holiday
All Day: Emma's Birthday
All Day: Family Vacation (Oct 20-25)
```

### Recurring Events

**Supported:**
- Daily (every day)
- Weekly (e.g., every Monday)
- Monthly (e.g., first Tuesday)
- Custom patterns

**How BrandCast Handles:**
- Shows all future occurrences
- Respects date range limit
- Updates automatically
- Maintains recurrence pattern

**Example:**
```
Soccer Practice (Recurring: Every Monday & Wednesday 3:30 PM)
  Next occurrences:
    Mon, Oct 14 at 3:30 PM
    Wed, Oct 16 at 3:30 PM
    Mon, Oct 21 at 3:30 PM
```

## Troubleshooting

### Cozi Calendar Not Loading

**Symptoms:**
- Events not showing
- "Failed to fetch calendar" error
- Empty calendar display

**Solutions:**

1. **Verify iCal URL:**
   - Log into cozi.com
   - Go to Account Settings → Calendar
   - Copy fresh iCal URL
   - Update in BrandCast

2. **Check Cozi Account Status:**
   - Cozi account active?
   - Email verified?
   - Events exist in Cozi?
   - Test URL in browser (should download .ics file)

3. **Network Connectivity:**
   - BrandCast servers can reach cozi.com
   - No firewall blocking
   - Internet connection stable

### Events Showing at Wrong Time

**Symptoms:**
- Times off by hours
- All-day events at midnight
- Timezone confusion

**Check:**

1. **Store Timezone:**
   - Go to Store settings
   - Verify timezone matches location
   - Common: America/New_York, America/Los_Angeles
   - Update if incorrect

2. **Cozi App Timezone:**
   - Open Cozi app
   - Settings → Timezone
   - Should match your actual timezone
   - Update if traveling

3. **Display Device Timezone:**
   - Check device system timezone
   - Should match store timezone
   - Update in device settings

### Missing Events

**Symptoms:**
- Some events not appearing
- Incomplete calendar
- Recent events missing

**Check:**

1. **Date Range Filter:**
   - Check display date range setting
   - Events outside range won't show
   - Increase range if needed
   - Default: 14 days

2. **Event Count Limit:**
   - Check maxEvents setting
   - May be cutting off events
   - Increase limit if needed
   - Default: 20 events

3. **Sync Delay:**
   - Wait 5 minutes for sync
   - Check refresh interval
   - Force refresh if needed
   - Cozi → BrandCast sync time

### Color Coding Not Working

**Symptoms:**
- All events same color
- Colors not matching Cozi
- Family members not distinguished

**Solutions:**

1. **Enable Color Coding:**
   ```javascript
   {
     "showFamilyColors": true,
     "useCoziColors": true
   }
   ```

2. **Check Cozi Setup:**
   - Each family member has unique color?
   - Colors assigned in Cozi app?
   - Cozi Premium for custom colors (optional)

3. **Display Limitations:**
   - Some displays may not support all colors
   - High contrast mode may override
   - Check display color settings

## Best Practices

### Family Calendar Organization

**Event Naming:**
- Include person's name (if not color-coded)
- Use clear, descriptive titles
- Add location for away events
- Note carpools or rides needed

**Good Examples:**
```
✅ Tommy - Soccer Practice (Lincoln Park)
✅ Emma - Piano Lesson (Mrs. Anderson)
✅ Family - Dinner at Grandma's
✅ Sarah - Dentist (Dr. Johnson, 3:00 PM)
```

**Avoid:**
```
❌ Practice
❌ Appointment
❌ Thing
❌ Event
```

**Use Locations:**
- Add addresses for away events
- Note which kid for pickups
- Include contact info in notes
- Helpful for carpools

### Display Placement

**Kitchen:**
- Eye level near entry
- Visible from cooking area
- Near command center spot
- Tablet on wall or counter

**Entryway:**
- First thing seen entering home
- Kids can check schedule leaving
- Portrait orientation works well
- Larger display for family viewing

**Kids' Rooms:**
- Personal schedule display
- Just their events (filtered by color)
- Homework deadlines
- Activity reminders

### Content Balance

**Family Display:**
- Calendar (60%): Main family schedule
- Lists (30%): Shopping, to-do lists
- Other (10%): Weather, inspirational quote

**Update Frequency:**
- Kitchen display: 5-15 minutes
- Kids' room: 15-30 minutes
- Entryway: 5-10 minutes
- Check before leaving home

### Privacy

**Home vs. Public:**
- Home displays: Show all details
- Guest-visible displays: Filter sensitive events
- Kids' rooms: Age-appropriate filtering
- Consider what's visible to visitors

**Event Privacy:**
- Doctor appointments: Generic "Appointment"
- Sensitive events: Use notes field (not title)
- Financial events: Keep off shared calendar
- Private events: Use separate calendar

## Integration with Other Cozi Features

### Cozi Lists (Separate Integration)

Cozi also provides:
- Shopping lists
- To-do lists
- Meal planner

**See:** [Tasks Integration](./tasks.md) for Cozi Lists setup

**Combined Display:**
```
Layout: "Family Command Center"
  Left (50%): Cozi Calendar (this integration)
  Right (50%): Cozi Shopping & To-Do Lists (Tasks integration)
```

### Cozi Colors Across Integrations

**Color Consistency:**
- Calendar events: Family member colors
- Tasks: Optional family member assignment
- Lists: Color-coded by list type
- Unified visual system

## API Reference

### Create Cozi Calendar Source

```
POST /api/content-sources
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "name": "Smith Family Calendar",
  "type": "CALENDAR",
  "sourceType": "INTEGRATION",
  "integrationType": "COZI_CALENDAR",
  "storeId": "store_abc123",
  "config": {
    "refreshInterval": 300,
    "maxEvents": 20,
    "dateRange": 14,
    "showFamilyColors": true
  }
}
```

### Add Cozi Calendar Feed

```
POST /api/content-sources/:contentSourceId/calendar-feeds
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "name": "Smith Family",
  "icalUrl": "https://www.cozi.com/feeds/calendar/ics/abc123/",
  "isActive": true,
  "priority": 100,
  "color": null
}
```

### Get Family Events

```
GET /api/content-sources/:contentSourceId/events?dateRange=14
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "events": [
      {
        "id": "cozi_event_abc123",
        "title": "Tommy - Soccer Practice",
        "start": "2025-10-14T15:30:00Z",
        "end": "2025-10-14T17:00:00Z",
        "location": "Lincoln Park Fields",
        "description": "Bring water bottle and cleats",
        "isAllDay": false,
        "feedColor": "#00FF00",
        "familyMember": "Tommy"
      }
    ]
  }
}
```

## Next Steps

- **[Google Calendar](./google-calendar.md)** - Office and personal calendars
- **[Tasks](./tasks.md)** - Cozi shopping and to-do lists
- **[Content Types](../features/content-types.md)** - Learn about CALENDAR content type
- **[Layouts](../features/layouts.md)** - Design family displays
- **[Display Setup](../workflows/display-setup.md)** - Set up kitchen displays
