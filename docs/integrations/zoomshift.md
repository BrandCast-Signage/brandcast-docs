---
title: ZoomShift Employee Scheduling
---

# ZoomShift Employee Scheduling Integration

Display real-time employee schedules from ZoomShift on your digital signage with automatic updates and secure credential management.

## Overview

The ZoomShift integration connects your ZoomShift employee scheduling account to BrandCast, enabling automatic display of work schedules, shift information, and employee availability on digital signage. Perfect for employee break rooms, manager offices, and staff areas.

**Key Features:**
- Live API integration with ZoomShift
- Real-time schedule updates
- Today's schedule display
- Filter by location and position
- Shift categorization (Morning, Afternoon, Evening)
- Employee information (name, role, shift times)
- Secure credential storage (encrypted)
- Automatic authentication
- Timezone-aware display

**Supported Plans:** All ZoomShift plans

## Use Cases

**Restaurants & QSR:**
- Kitchen staff schedules
- Front-of-house schedules
- Manager oversight displays
- Employee check-in stations
- Break room schedule boards

**Retail:**
- Sales floor coverage
- Department schedules
- Manager schedule views
- Staff room displays
- Multi-location coordination

**Healthcare:**
- Nurse scheduling
- Shift change displays
- Department staff schedules
- On-call rotations
- Break room information

**Hospitality:**
- Front desk schedules
- Housekeeping shifts
- Restaurant staff
- Event staff scheduling
- Concierge coverage

**Office/Corporate:**
- Reception coverage
- IT support schedules
- Security shift displays
- Facility staff schedules
- Team availability

## Setup

### Prerequisites

- BrandCast account
- ZoomShift account (all plans supported)
- ZoomShift login credentials
- Schedule ID from ZoomShift
- Published schedules in ZoomShift

### Step 1: Get ZoomShift Credentials

**Find Your Schedule ID:**

1. Log into ZoomShift (zoomshift.com)
2. Navigate to your schedule
3. Check browser URL: `https://app.zoomshift.com/schedule/{scheduleId}`
4. Copy the schedule ID (e.g., `abc12345-6789`)

**Note:** You'll use your ZoomShift email and password for BrandCast connection.

### Step 2: Connect ZoomShift to BrandCast

**From Dashboard:**

1. Navigate to **Integrations** → **ZoomShift**
2. Click **Connect ZoomShift**
3. Enter credentials:
   - **Email**: Your ZoomShift account email
   - **Password**: Your ZoomShift password
   - **Schedule ID**: From Step 1
4. Click **Connect**
5. System validates credentials
6. Connection confirmed

**Security:**
- Password encrypted before storage
- Credentials stored in encrypted format
- Automatic token refresh
- Secure API communication
- Revocable at any time

**Connection Status:**
```
✓ Connected to ZoomShift
  Schedule ID: abc12345-6789
  Email: manager@example.com
  Connected: Oct 14, 2025
  Last Verified: Oct 14, 2025 2:35 PM
```

### Step 3: Configure Schedule Display

**Create Content Source:**

1. **Content Library** → **Add Content Source**
2. Select **ZoomShift Schedule**
3. Configure display options

**Configuration Options:**

**Date Range:**
- Today only
- Today + tomorrow
- Current week (7 days)
- Next 14 days
- Custom range

**Filters:**
- **Location**: Show only specific location(s)
- **Position**: Show only specific role(s)
- **All employees**: Show everyone

**Display Format:**
- List view (vertical schedule)
- Grid view (time-based grid)
- Card view (individual employee cards)
- Compact view (minimal information)

**Information Shown:**
- Employee name (first, last, or both)
- Shift start time
- Shift end time
- Position/role
- Location (if multi-location)
- Shift duration
- Shift category (Morning, Afternoon, etc.)

**Example Configuration:**
```javascript
{
  "dateRange": "today",
  "location": "Main Store",
  "position": null,  // All positions
  "displayFormat": "list",
  "showEmployeeName": "both",  // First and last name
  "showPosition": true,
  "showLocation": false,  // Single location
  "showDuration": true,
  "groupBy": "time",  // Or "position", "location"
  "sortBy": "startTime",  // Or "name", "position"
  "refreshInterval": 300  // 5 minutes
}
```

### Step 4: Add to Layout

**Dedicated Schedule Display:**
```
Layout: "Employee Schedule"
  Main Area (Fullscreen):
    - ZoomShift Schedule widget
    - List view
    - Today's schedule
    - Large, readable font
```

**Mixed Information Layout:**
```
Layout: "Break Room Display"
  Header (20%):
    - Date and time (CLOCK)
    - Weather (WEATHER)

  Main Area (60%):
    - ZoomShift Schedule
    - Today's shifts
    - Grid view

  Footer (20%):
    - Company announcements (TEXT)
```

**Manager Dashboard:**
```
Layout: "Manager Overview"
  Left (50%):
    - ZoomShift Schedule (all locations)
    - Week view

  Right (50%):
    - Business metrics
    - Notifications
    - Tasks
```

## Display Formats

### List View

**Vertical schedule list, sorted by time:**

```
┌─────────────────────────────────────┐
│ Today's Schedule - October 14, 2025 │
├─────────────────────────────────────┤
│ Morning Shift                        │
│ 7:00 AM - 3:00 PM                   │
│ • John Smith - Server               │
│ • Sarah Johnson - Host              │
│ • Mike Davis - Cook                 │
│                                     │
│ Afternoon Shift                     │
│ 3:00 PM - 11:00 PM                  │
│ • Emily Brown - Server              │
│ • Chris Wilson - Bartender          │
│ • Lisa Garcia - Cook                │
└─────────────────────────────────────┘
```

**Best For:** Simple schedules, single-location, clear hierarchy

### Grid View

**Time-based grid with employee columns:**

```
┌──────────────────────────────────────────┐
│        Today's Schedule                  │
├──────┬──────────┬──────────┬────────────┤
│ Time │ Server   │ Cook     │ Host       │
├──────┼──────────┼──────────┼────────────┤
│ 7am  │ John S.  │ Mike D.  │ Sarah J.   │
│ 11am │          │          │            │
│ 3pm  │ Emily B. │ Lisa G.  │            │
│ 7pm  │          │          │ Tom R.     │
│ 11pm │          │          │            │
└──────┴──────────┴──────────┴────────────┘
```

**Best For:** Visual timeline, multiple positions, shift overlaps

### Card View

**Individual employee cards:**

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ John Smith   │ │ Sarah Johnson│ │ Mike Davis   │
│ Server       │ │ Host         │ │ Cook         │
│ 7:00am - 3pm │ │ 7:00am - 3pm │ │ 7:00am - 3pm │
│ 8 hours      │ │ 8 hours      │ │ 8 hours      │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Best For:** Clear employee focus, easy scanning, photo displays (future)

### Compact View

**Minimal information, maximum density:**

```
┌────────────────────────────────┐
│ Today's Schedule               │
├────────────────────────────────┤
│ John Smith      | 7am - 3pm    │
│ Sarah Johnson   | 7am - 3pm    │
│ Mike Davis      | 7am - 3pm    │
│ Emily Brown     | 3pm - 11pm   │
│ Chris Wilson    | 3pm - 11pm   │
│ Lisa Garcia     | 3pm - 11pm   │
└────────────────────────────────┘
```

**Best For:** Limited space, quick reference, many employees

## Shift Categories

**Automatic Categorization:**

**Early Morning:** Before 6:00 AM
- Opening shifts
- Early prep
- Overnight to morning transition

**Morning:** 6:00 AM - 12:00 PM
- Breakfast/opening
- First shift
- Morning operations

**Afternoon:** 12:00 PM - 6:00 PM
- Lunch/midday
- Second shift
- Peak hours

**Evening:** 6:00 PM - 12:00 AM
- Dinner/closing prep
- Third shift
- Evening operations

**Night:** After 12:00 AM
- Closing shifts
- Overnight operations
- Late-night coverage

**Use Cases:**
- Color-code shifts for quick identification
- Group employees by shift category
- Show current shift prominently
- Filter displays by shift

## Filtering & Grouping

### Location Filtering

**Multi-Location Businesses:**

```javascript
{
  "location": "Downtown Location",
  "showLocationName": false  // Only one location shown
}
```

**Show All Locations:**
```javascript
{
  "location": null,  // All locations
  "showLocationName": true,  // Distinguish employees
  "groupBy": "location"  // Separate by location
}
```

**Display Example:**
```
┌────────────────────────────────┐
│ Main Street Location           │
│ • John Smith - 7am-3pm         │
│ • Sarah Johnson - 7am-3pm      │
│                                │
│ Downtown Location              │
│ • Mike Davis - 7am-3pm         │
│ • Emily Brown - 3pm-11pm       │
└────────────────────────────────┘
```

### Position Filtering

**Show Specific Roles:**

```javascript
{
  "position": "Server",  // Only servers
  "showPosition": false  // All same role
}
```

**Multiple Positions:**
```javascript
{
  "position": ["Server", "Host"],
  "groupBy": "position"
}
```

**All Positions:**
```javascript
{
  "position": null,
  "groupBy": "position",
  "sortBy": "position"
}
```

### Grouping Options

**Group By Time:**
- Shifts listed chronologically
- Start time ordering
- Shift categories as headers

**Group By Position:**
- All servers together
- All cooks together
- Easy to see coverage

**Group By Location:**
- Multi-location separation
- Location-specific management
- Clear organizational structure

**Group By Employee:**
- Alphabetical employee list
- Individual-focused view
- Easy name lookup

## Schedule Updates

### Refresh Frequency

**Automatic Updates:**

**Every 5 Minutes (Recommended):**
- Near real-time updates
- Catches last-minute changes
- 288 updates/day
- Minimal performance impact

**Every 15 Minutes:**
- Balanced freshness
- Good for most use cases
- 96 updates/day

**Every 30 Minutes:**
- Less frequent updates
- Suitable for stable schedules
- 48 updates/day

**Hourly:**
- Infrequent updates
- Long-term planning displays
- 24 updates/day

**Manual Refresh:**
- On-demand updates
- Button or schedule trigger
- Full control

### What Triggers Updates

**Automatic:**
- New shift published in ZoomShift
- Shift time changed
- Employee assigned/unassigned
- Shift deleted
- Location/position changed

**Manual:**
- Admin refresh button
- Schedule change notification
- System cache clear

## Troubleshooting

### Connection Failed

**Symptoms:**
- "Failed to connect" error
- Credentials rejected
- Authentication timeout

**Solutions:**

1. **Verify Credentials:**
   - Check email spelling
   - Verify password correct
   - Confirm schedule ID accurate

2. **Check ZoomShift Account:**
   - Log into ZoomShift separately
   - Confirm account active
   - Verify schedule accessible

3. **Schedule ID:**
   - Must be exact match
   - Copy from ZoomShift URL
   - No extra spaces

4. **Re-connect:**
   - Disconnect ZoomShift
   - Wait 30 seconds
   - Connect again with correct credentials

### Schedule Not Showing

**Symptoms:**
- Blank schedule display
- "No shifts found" message
- Empty schedule area

**Check:**

1. **Shifts Published:**
   - ZoomShift schedules must be published
   - Unpublished shifts never shown
   - Publish in ZoomShift first

2. **Date Range:**
   - Displaying correct dates?
   - Shifts exist for date range?
   - Check today vs. custom range

3. **Filters:**
   - Location filter matches?
   - Position filter matches?
   - Remove filters to test

4. **Timezone:**
   - Store timezone configured correctly?
   - Shifts showing in wrong timezone?
   - Adjust store timezone settings

**Solutions:**
- Verify shifts published in ZoomShift
- Check date range includes shifts
- Remove all filters temporarily
- Confirm store timezone correct

### Credentials Expired

**Symptoms:**
- "Credentials expired" error
- Schedule stops updating
- Authentication failure

**Causes:**
- Password changed in ZoomShift
- Schedule ID changed
- Account suspended
- Token expiration

**Fix:**
1. Navigate to **Integrations** → **ZoomShift**
2. Click **Disconnect**
3. Re-connect with current credentials
4. Verify connection successful

### Wrong Shifts Showing

**Symptoms:**
- Yesterday's schedule
- Future schedule
- Wrong location

**Check:**

1. **Date Range Setting:**
   - Set to "Today" vs. custom?
   - Date filter configured correctly?

2. **Location Filter:**
   - Filter matches schedule location?
   - Multiple locations confusion?

3. **Cache:**
   - Old data cached?
   - Force refresh display
   - Clear cache

**Solutions:**
- Verify date range setting
- Check location filter
- Refresh display
- Re-configure if needed

## Best Practices

### Display Placement

**Employee Break Rooms:**
- Large display
- Easy visibility from all areas
- Updated hourly at minimum
- Today + tomorrow schedule

**Manager Offices:**
- Desktop/tablet display
- Week view
- All locations (if applicable)
- Detailed information

**Staff Entrance/Time Clock:**
- Quick reference
- Today only
- Compact format
- Who's working now

**Kitchen/Back of House:**
- Waterproof/protected display
- Large text
- Position-specific
- Current shift focus

### Schedule Design

**Typography:**
- Minimum 18pt font size
- Sans-serif for readability
- Bold for names
- Clear time format (12hr recommended)

**Colors:**
- Neutral backgrounds
- High contrast text
- Color-code shifts (optional)
- Status indicators (working vs. scheduled)

**Layout:**
- Logical grouping (time, position, or location)
- Clear headers
- Adequate spacing
- Hierarchy (important info larger)

**Information Density:**
- Don't overcrowd
- 10-15 employees max per screen
- Use multiple pages/screens if needed
- Prioritize current/upcoming shifts

### Update Strategy

**High-Traffic Locations:**
- 5-minute refresh
- Real-time feel
- Catch changes quickly

**Planning/Overview Displays:**
- 15-30 minute refresh
- Less urgency
- Stable view

**Archive/Reference:**
- Hourly updates
- Historical view
- Long-term planning

### Security

**Credential Protection:**
- Never share ZoomShift password
- Use dedicated account if possible
- Rotate passwords regularly
- Revoke access when employees leave

**Schedule Visibility:**
- Consider privacy in public areas
- Position displays appropriately
- Filter sensitive information
- Limit to employee-only areas

**Data Access:**
- Only show published schedules
- No wage/salary information
- No personal employee data
- Respect employee privacy

## Advanced Features

### Multi-Location Management

**Separate Displays Per Location:**
```
Location A Display:
  - Filter: Location A
  - Shows: Only Location A schedule

Location B Display:
  - Filter: Location B
  - Shows: Only Location B schedule
```

**Central Management Display:**
```
Manager Office Display:
  - Filter: All Locations
  - Group By: Location
  - Shows: Complete schedule overview
```

### Position-Based Displays

**Kitchen Display:**
```
Configuration:
  - Position: ["Cook", "Prep Cook", "Sous Chef"]
  - Group By: Time
  - Format: Grid view
```

**Front of House Display:**
```
Configuration:
  - Position: ["Server", "Host", "Bartender"]
  - Group By: Shift
  - Format: List view
```

### Current Shift Highlighting

**Show Who's Working Now:**
```
┌────────────────────────────────┐
│ Currently Working (2:30 PM)    │
├────────────────────────────────┤
│ ● Emily Brown - Server         │
│ ● Chris Wilson - Bartender     │
│ ● Lisa Garcia - Cook           │
│                                │
│ Upcoming (3:00 PM)             │
│ • Tom Reed - Host              │
└────────────────────────────────┘
```

**Benefits:**
- Quick staff identification
- Current coverage visibility
- Planning for transitions
- Manager oversight

### Schedule Notifications (Coming Soon)

**Planned Features:**
- Shift starting soon alert
- Coverage gap warnings
- Schedule change notifications
- Late employee alerts

## API Reference

### Connect ZoomShift

```
POST /api/integrations/zoomshift/connect
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "email": "manager@example.com",
  "password": "your-password",
  "scheduleId": "abc12345-6789"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully connected to ZoomShift",
  "data": {
    "scheduleId": "abc12345-6789",
    "connectedAt": "2025-10-14T14:35:00Z"
  }
}
```

### Check Connection Status

```
GET /api/integrations/zoomshift/status
Authorization: Bearer {userToken}
```

**Response (Connected):**
```json
{
  "connected": true,
  "scheduleId": "abc12345-6789",
  "email": "manager@example.com",
  "connectedAt": "2025-10-14T14:35:00Z",
  "lastVerified": "2025-10-14T15:20:00Z"
}
```

**Response (Not Connected):**
```json
{
  "connected": false
}
```

### Get Shifts

```
GET /api/integrations/zoomshift/shifts?startDate=2025-10-14&endDate=2025-10-14&storeId=store_abc123
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "employees": [
      {
        "name": "John Smith",
        "firstName": "John",
        "lastName": "Smith",
        "date": "2025-10-14",
        "startTime": "7:00 AM",
        "endTime": "3:00 PM",
        "position": "Server",
        "location": "Main Store",
        "totalDuration": "8:00",
        "status": "scheduled",
        "shift": "Morning"
      }
    ],
    "currentDate": "2025-10-14",
    "todaySchedule": [...],
    "summary": {
      "totalEmployees": 15,
      "employeesWorking": 0,
      "employeesScheduled": 6,
      "currentShift": "Afternoon"
    },
    "lastUpdated": "2025-10-14T14:35:00Z"
  }
}
```

### Get Locations

```
GET /api/integrations/zoomshift/locations
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "success": true,
  "locations": [
    {
      "id": "loc_0",
      "name": "Main Store"
    },
    {
      "id": "loc_1",
      "name": "Downtown Location"
    }
  ]
}
```

### Disconnect ZoomShift

```
DELETE /api/integrations/zoomshift/disconnect
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully disconnected from ZoomShift"
}
```

## Legacy CSV Support

**Note:** CSV-based integration is deprecated but still supported for backward compatibility.

**CSV Upload Method:**
1. Export schedule from ZoomShift as CSV
2. Upload CSV to BrandCast
3. Schedule parsed and displayed
4. Manual update required for changes

**Migrate to API:**
- Better: Real-time updates
- Better: Automatic synchronization
- Better: No manual uploads
- Better: Credential management

## Next Steps

- **[Content Types](../features/content-types.md)** - Learn about TASKS content type
- **[Layouts](../features/layouts.md)** - Design schedule displays
- **[Schedules](../workflows/schedules.md)** - Time-based schedule visibility
- **[User Management](../workflows/user-management.md)** - Manage employee access
