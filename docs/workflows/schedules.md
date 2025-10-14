---
title: Schedules
---

# Schedules

Control when specific layouts or playlists display with time-based scheduling rules for automated content management.

## What are Schedules?

Schedules automate content changes based on time, allowing you to show different layouts or playlists at specific times of day, days of week, or date ranges. Perfect for businesses with different content needs throughout the day or week.

**Example Use Cases:**
- Breakfast menu 6am-11am, lunch menu 11am-2pm, dinner menu 2pm-close
- Employee schedule during business hours, promotions after hours
- Weekend content vs. weekday content
- Holiday-specific displays during December
- Sale promotions only during sale dates

## Schedules vs. Playlists

**Schedules:**
- **When** content displays (time-based)
- Switch between different layouts/playlists
- Time slots, days of week, date ranges
- Rule-based automation

**Playlists:**
- **How** layouts rotate (sequence-based)
- Continuous rotation within a time period
- Duration per layout
- Order and transitions

**Use Together:**
- Schedule controls which playlist plays when
- Example: "Morning Playlist" 8am-12pm, "Afternoon Playlist" 12pm-5pm
- Each playlist rotates its layouts during its scheduled time

## Creating a Schedule

### Step 1: Create Schedule

1. Navigate to **Content** → **Schedules**
2. Click **Create Schedule**
3. Enter basic information:
   - **Name**: Descriptive name (e.g., "Daily Content Schedule")
   - **Description**: Optional notes about purpose
   - **Store**: Which location this applies to
4. Click **Create**

### Step 2: Add Schedule Rules

A schedule consists of multiple rules that determine when content displays:

1. Click **Add Rule** in schedule editor
2. Configure rule (see detailed sections below)
3. Repeat for additional time periods
4. Order matters - higher priority rules override lower priority

**Rule Components:**
- **Target**: What to display (layout or playlist)
- **Time Slots**: When to display it
- **Days of Week**: Which days apply
- **Date Range**: Start and end dates (optional)
- **Recurrence**: Repeat patterns
- **Priority**: Which rule wins if conflicts occur

### Step 3: Activate Schedule

1. Toggle **Active** to ON
2. Click **Save Schedule**
3. Assign to display(s)

## Schedule Rules Explained

### Rule Targets

**Layout Target:**
- Display single layout during time slot
- Static content
- Example: "Lunch Menu Layout" from 11am-2pm

**Playlist Target:**
- Display rotating playlist during time slot
- Dynamic content
- Example: "Promotional Playlist" from 9am-5pm

**Priority:**
- Number 0-1000 (higher = more important)
- When rules overlap, highest priority wins
- Default: 100

### Time Slots

Define when rule is active:

**Format:** Start time - End time
- **Example:** 09:00 - 17:00 (9am to 5pm)
- **Example:** 18:00 - 23:59 (6pm to midnight)
- **Example:** 00:00 - 06:00 (midnight to 6am)

**Multiple Time Slots Per Rule:**
- Breakfast: 06:00-11:00
- Lunch: 11:00-14:00
- Dinner: 14:00-22:00

**Spanning Midnight:**
- Close to open: 22:00 - 02:00
- Works correctly across day boundary

**All Day:**
- 00:00 - 23:59
- Or leave empty for 24/7

### Days of Week

Select which days rule applies:

**Options:**
- ☐ Sunday
- ☐ Monday
- ☐ Tuesday
- ☐ Wednesday
- ☐ Thursday
- ☐ Friday
- ☐ Saturday

**Presets:**
- **Weekdays**: Mon-Fri
- **Weekends**: Sat-Sun
- **Every Day**: All 7 days

**Examples:**
- Monday-Friday only: Business hours content
- Saturday-Sunday only: Weekend specials
- Tuesday & Thursday: Specific day promotions

### Date Ranges

Optional start and end dates for rule:

**Use Cases:**
- **Holiday Promotions**: Dec 1 - Dec 25
- **Seasonal Content**: Summer (Jun 1 - Aug 31)
- **Limited-Time Offers**: Sale dates only
- **Event Coverage**: Conference week

**Settings:**
- **Start Date**: When rule begins (optional, defaults to now)
- **End Date**: When rule expires (optional, runs indefinitely)
- **Exclude Dates**: Specific dates to skip

**No Dates Set:**
- Rule active forever (or until manually disabled)
- Repeats weekly based on days of week and time slots

### Recurrence Patterns

Advanced repeat patterns:

**Weekly Recurrence:**
- Every week on selected days
- Most common pattern
- Default behavior

**Bi-Weekly:**
- Every 2 weeks on selected days
- Example: Payday promotions

**Monthly:**
- Specific week of month (1st Monday, 3rd Friday)
- Specific date (15th of every month)
- Last day of month

**Custom Intervals:**
- Every N days
- Every N weeks
- Complex patterns

**Examples:**
```
Every other Tuesday: Bi-weekly, Tuesday selected
First Monday of month: Monthly, 1st Monday
Every 10 days: Custom interval, 10 days
```

## Priority System

### How Priority Works

**Conflict Resolution:**
When multiple rules could apply at same time, highest priority wins.

**Example Scenario:**
```
Rule A: "General Content" - Priority 100 (default)
  Time: 09:00-17:00, Every day
  Shows: Standard Layout

Rule B: "Lunch Special" - Priority 200
  Time: 11:00-14:00, Every day
  Shows: Lunch Promo Layout

Result:
- 09:00-11:00: Rule A (General Content)
- 11:00-14:00: Rule B (Lunch Special) ← Higher priority
- 14:00-17:00: Rule A (General Content)
```

**Priority Levels:**
- **1000**: Highest - Emergency overrides
- **500-900**: High - Important time-sensitive content
- **100-400**: Normal - Regular scheduled content
- **1-99**: Low - Fallback content
- **0**: Lowest - Default/catchall rules

### Best Practices

**Structure Priority Like This:**
```
Priority 1000: Emergency announcements (closures, alerts)
Priority 500: Holiday/special event content
Priority 300: Time-sensitive promotions
Priority 100: Regular daily schedule
Priority 50: Default fallback content
```

**Avoid:**
- All rules same priority (creates ambiguity)
- Random priority numbers
- Too many high-priority rules

## Common Schedule Patterns

### Restaurant Day Parts

**Breakfast, Lunch, Dinner Menus:**

```
Schedule: "Daily Menu Schedule"

Rule 1: Breakfast Menu
  Target: Breakfast Menu Layout
  Time: 06:00-11:00
  Days: Every day
  Priority: 100

Rule 2: Lunch Menu
  Target: Lunch Menu Layout
  Time: 11:00-14:00
  Days: Every day
  Priority: 100

Rule 3: Dinner Menu
  Target: Dinner Menu Layout
  Time: 14:00-22:00
  Days: Every day
  Priority: 100

Rule 4: Late Night (if applicable)
  Target: Late Night Layout
  Time: 22:00-01:00
  Days: Fri-Sat only
  Priority: 100
```

### Retail Store Hours

**Business Hours vs. After Hours:**

```
Schedule: "Store Hours Content"

Rule 1: Open for Business
  Target: Store Open Playlist
  Time: 08:00-20:00
  Days: Mon-Sat
  Priority: 200

Rule 2: Closed - Coming Back Tomorrow
  Target: Closed Layout
  Time: 20:00-08:00
  Days: Mon-Sat
  Priority: 200

Rule 3: Weekend Hours
  Target: Weekend Playlist
  Time: 10:00-18:00
  Days: Sunday
  Priority: 200

Rule 4: Sunday Closed
  Target: Closed Layout
  Time: 18:00-10:00
  Days: Sunday
  Priority: 200
```

### Seasonal Promotions

**Holiday Content Override:**

```
Schedule: "Holiday Overrides"

Rule 1: Black Friday
  Target: Black Friday Mega Sale Layout
  Date: Nov 24-25, 2025
  Time: All day
  Priority: 1000 (highest)

Rule 2: December Holiday
  Target: Holiday Playlist
  Date: Dec 1-25, 2025
  Time: 08:00-20:00
  Priority: 800

Rule 3: New Year Promotion
  Target: New Year Layout
  Date: Dec 26-Jan 5
  Time: All day
  Priority: 800

Rule 4: Default Content (always runs when above not active)
  Target: Regular Playlist
  Time: All day
  Days: Every day
  Priority: 100
```

### Weekday vs. Weekend

**Different Content Friday-Sunday:**

```
Schedule: "Week Schedule"

Rule 1: Weekday Content
  Target: Business Content Playlist
  Time: 08:00-18:00
  Days: Mon-Fri
  Priority: 100

Rule 2: Weekend Specials
  Target: Weekend Promotions Playlist
  Time: 10:00-20:00
  Days: Sat-Sun
  Priority: 100

Rule 3: After Hours (both weekday and weekend)
  Target: Closed/Security Layout
  Time: 18:00-08:00 (weekdays), 20:00-10:00 (weekends)
  Days: Every day
  Priority: 100
```

## Assigning Schedules to Displays

### Method 1: From Display Settings

1. Go to **Displays** → Select display
2. **Content Assignment** section
3. Select **Schedule** tab
4. Choose schedule from dropdown
5. Click **Save**

**Result:** Display follows schedule rules automatically

### Method 2: From Schedule Editor

1. Edit schedule
2. **Assigned Displays** section
3. Check displays that should use this schedule
4. Click **Save**

### Multiple Displays

**Same Schedule:**
- Apply schedule to multiple displays
- Synchronized content switching
- Easier management

**Different Schedules:**
- Each display can have unique schedule
- Location-specific content timing
- Flexibility per display

**No Schedule:**
- Display shows assigned layout or playlist
- No automatic time-based switching
- Manual control only

## Testing Schedules

### Preview Mode

Before deploying:

1. Edit schedule
2. Click **Preview**
3. Select date and time
4. See which rule would be active
5. Verify correct content shows

**Test These Scenarios:**
- Different times of day
- Different days of week
- Edge cases (midnight, rule transitions)
- Conflict resolution (priority)
- Date range boundaries

### Live Testing

**Best Practice:**
1. Assign schedule to test display first
2. Monitor for 24-48 hours
3. Verify transitions work correctly
4. Check no gaps or overlaps
5. Then deploy to production displays

**What to Watch:**
- Content switches at correct times
- No blank screens during transitions
- Priority rules working as expected
- Date ranges activate/deactivate correctly

## Managing Schedules

### Editing Active Schedules

**Safe to Edit:**
- Add new rules
- Change priorities
- Adjust time slots
- Update date ranges
- Modify targets

**Changes Apply:**
- Immediately on save
- No display restart needed
- Next scheduled time uses new rules

**Caution:**
- Deleting rules may create gaps
- Changing priorities may cause unexpected switches
- Test before deploying to many displays

### Duplicating Schedules

**Use Case:** Similar schedule for different location

**Steps:**
1. View schedule
2. Click **Duplicate**
3. Name new schedule
4. Select target store
5. Edit rules as needed
6. Save

**Result:** Copy of schedule with all rules preserved

### Disabling Schedules

**Temporarily Disable:**
1. Edit schedule
2. Toggle **Active** to OFF
3. Save

**Result:**
- Displays revert to assigned layout/playlist
- Schedule rules preserved but not executing
- Can re-enable anytime

**Permanently Delete:**
- Remove from all displays first
- Then delete schedule
- Rules cannot be recovered (duplicate first if unsure)

## Troubleshooting

### Wrong Content Displaying

**Symptoms:**
- Expected layout not showing
- Wrong time slot active
- Outdated content displaying

**Check:**
1. **Schedule Active:** Toggle is ON
2. **Display Assigned:** Schedule assigned to display
3. **Current Time:** Display's clock correct? (timezone issues)
4. **Rule Matches:** Current time/day matches rule
5. **Priority:** No higher priority rule overriding

**Solutions:**
- Verify rule configuration
- Check for conflicting higher-priority rules
- Confirm date ranges include today
- Test with Preview mode

### Content Not Switching

**Symptoms:**
- Stuck on one layout
- No transitions at scheduled times
- Schedule seems inactive

**Check:**
1. **Display Online:** Must be connected
2. **Schedule Active:** Toggle ON in schedule settings
3. **Rules Valid:** At least one rule matches current time
4. **Network:** Display can reach server

**Solutions:**
- Restart display
- Re-assign schedule to display
- Check display logs for errors
- Verify network connectivity

### Gaps in Coverage

**Symptoms:**
- Blank screen at certain times
- Default content showing unexpectedly
- "No content" message

**Cause:** No rule covers current time/day

**Check:**
1. Review all rules
2. Plot time slots on timeline
3. Find gaps

**Solution:**
- Add catchall rule (priority 1, all day, every day)
- Fill gaps with appropriate rules
- Use preview mode to verify coverage

### Conflicts and Unexpected Overrides

**Symptoms:**
- Lower priority content showing instead of higher
- Content switches erratically
- Rule not activating

**Cause:** Priority misconfiguration or rule overlap

**Debug:**
1. List all rules by priority (highest to lowest)
2. Note time slots and days for each
3. Identify overlaps
4. Verify priorities correct

**Fix:**
- Adjust priorities to match intent
- Remove duplicate/conflicting rules
- Use preview mode to test

### Time Zone Issues

**Symptoms:**
- Content switches at wrong clock time
- Off by several hours

**Check:**
1. **Display Time Zone:** Display settings
2. **Account Time Zone:** Account settings
3. **Schedule Time Zone:** Should match location

**Fix:**
- Update display time zone setting
- Verify account default time zone
- All should match physical location

## Advanced Features

### Exception Dates

**Skip Specific Dates:**
- Rule usually active but not on exceptions
- Example: Closed on Thanksgiving despite normal Thursday hours

**Setup:**
1. Edit rule
2. **Exception Dates** section
3. Add dates to exclude
4. Save

**Use Cases:**
- Holidays (closed when usually open)
- Special events (different content those days)
- Maintenance days

### Conditional Rules

**Dynamic Rule Activation:**
- Based on external conditions
- Weather-based (if raining, show indoor activities)
- Stock level-based (low stock highlights)
- Real-time data-driven

**Requires:** Professional plan + integration setup

### Schedule Analytics

**Track Performance:**
- Which rules triggered most
- Coverage gaps (no rule active)
- Conflict resolutions
- Rule effectiveness

**Access:**
1. **Analytics** → **Schedules**
2. Select schedule
3. View metrics

**Insights:**
- Identify unused rules (consider removing)
- Find gaps in coverage
- Optimize priorities

## Best Practices

### Schedule Design

**Keep It Simple:**
- Start with basic rules
- Add complexity only if needed
- Fewer rules = easier to manage

**Plan on Paper First:**
- Draw timeline of your day/week
- Mark desired content per time slot
- Then build rules to match

**Use Descriptive Names:**
- Rule names: "Breakfast Hours", "Weekend Sale", "Holiday Override"
- Makes debugging easier
- Team understands intent

### Priority Strategy

**Clear Hierarchy:**
```
1000: Emergencies only
800-900: Special events (rare)
500-700: Seasonal/limited time
100-400: Regular schedule
1-99: Defaults/fallbacks
```

**Avoid Priority Conflicts:**
- Don't use same priority for overlapping rules
- Leave gaps (use 100, 300, 500, not 100, 101, 102)
- Easier to insert rules later

### Coverage Strategy

**Always Have Fallback:**
- Lowest priority rule (1-50)
- All day, every day
- Shows default content if nothing else matches

**No Gaps:**
- Every time slot covered
- Use preview mode to verify
- Test at midnight, transition times

### Maintenance

**Regular Reviews:**
- Monthly: Remove expired date-based rules
- Quarterly: Verify rules still relevant
- Annually: Complete schedule audit

**Documentation:**
- Keep notes on rule purpose
- Document special cases
- Note who requested each rule

## Examples and Templates

### Example 1: Coffee Shop

```
Schedule: "Cafe Daily Schedule"

Rule 1: Morning Rush (Priority 200)
  Target: Breakfast Specials Playlist
  Time: 06:00-09:00, Every day

Rule 2: Mid-Morning (Priority 100)
  Target: Standard Menu Layout
  Time: 09:00-11:30, Every day

Rule 3: Lunch Crowd (Priority 200)
  Target: Lunch Combos Playlist
  Time: 11:30-14:00, Every day

Rule 4: Afternoon (Priority 100)
  Target: Bakery & Drinks Layout
  Time: 14:00-17:00, Every day

Rule 5: Evening (Priority 100)
  Target: Closing Hours Layout
  Time: 17:00-20:00, Every day

Rule 6: Closed (Priority 100)
  Target: Closed Sign Layout
  Time: 20:00-06:00, Every day
```

### Example 2: Fitness Center

```
Schedule: "Gym Content Schedule"

Rule 1: Early Birds (Priority 100)
  Target: Morning Motivation Playlist
  Time: 05:00-09:00, Mon-Fri

Rule 2: Daytime (Priority 100)
  Target: Class Schedule & Tips Layout
  Time: 09:00-17:00, Mon-Fri

Rule 3: Evening Rush (Priority 100)
  Target: High Energy Playlist
  Time: 17:00-21:00, Mon-Fri

Rule 4: Weekend Warriors (Priority 100)
  Target: Weekend Classes Playlist
  Time: 07:00-19:00, Sat-Sun

Rule 5: Late Night (Priority 50)
  Target: 24/7 Access Info Layout
  Time: 21:00-05:00, Every day
```

### Example 3: Retail with Sales

```
Schedule: "Store Schedule with Promotions"

Rule 1: Flash Sale (Priority 1000)
  Target: Flash Sale Urgency Layout
  Date: [Today only]
  Time: All day

Rule 2: Weekend Sale (Priority 800)
  Target: Weekend Sale Playlist
  Days: Sat-Sun
  Time: 10:00-20:00

Rule 3: Regular Business Hours (Priority 100)
  Target: Standard Store Playlist
  Days: Mon-Sat
  Time: 08:00-21:00

Rule 4: Sunday Hours (Priority 100)
  Target: Sunday Relaxed Playlist
  Days: Sunday
  Time: 11:00-18:00

Rule 5: Closed (Priority 50)
  Target: Closed Layout
  Time: All other times
```

## Next Steps

- **[Playlists](./playlists.md)** - Create content rotations within schedule slots
- **[Layouts](../features/layouts.md)** - Design layouts to schedule
- **[Content Association](./content-association.md)** - Assign schedules to displays
- **[Display Setup](./display-setup.md)** - Configure displays for scheduling
- **[Analytics](../features/analytics.md)** - Track schedule performance
