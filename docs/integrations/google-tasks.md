---
title: Google Tasks Integration
---

# Google Tasks Integration

Display task lists from Google Tasks on your digital signage displays. Perfect for team task tracking, project management displays, and productivity dashboards.

## Overview

The Google Tasks integration syncs your task lists from Google Tasks and displays them on your screens with automatic updates. Tasks appear with completion status, due dates, and can be organized by task list.

**Use Cases:**
- Project management boards in team spaces
- Daily task lists in break rooms
- Personal productivity displays (FamilyCast)
- Team coordination in retail back offices
- To-do tracking in corporate offices
- Task reminders for family members (FamilyCast)

**Available In:** BrandCast (all tiers), FamilyCast (all tiers)

---

## Features

### Task Display Options

**What Shows:**
- Task title and description
- Due date (if set)
- Completion status (checkbox)
- Task list name
- Subtasks (if present)
- Notes attached to tasks

**Display Modes:**
- **List View**: Vertical list of tasks by task list
- **Board View**: Kanban-style board by due date
- **Today View**: Only tasks due today
- **This Week View**: Tasks due within 7 days
- **Compact View**: Minimal space usage (task titles only)

### Filtering & Organization

**By Task List:**
- Display specific task lists only
- Combine multiple task lists
- Show all task lists together
- Color-code by task list

**By Status:**
- Show only incomplete tasks (default)
- Show completed tasks
- Show both complete and incomplete
- Hide completed after X hours

**By Due Date:**
- Tasks due today
- Tasks due this week
- Overdue tasks only
- All tasks regardless of due date

### Automatic Updates

**Sync Frequency:**
- 5 minutes (real-time for critical displays)
- 15 minutes (default - recommended)
- 30 minutes (standard updates)
- 60 minutes (low-priority displays)

**Smart Refresh:**
- Only updates when tasks change
- Cached data reduces API calls
- Offline fallback to last sync
- Manual refresh available

---

## Setup

### Step 1: Connect Google Account

1. Navigate to **Content Sources** in your BrandCast dashboard
2. Click **Add Integration**
3. Select **Google Tasks**
4. Click **Connect Google Account**
5. Google OAuth popup appears:
   - Sign in to your Google account
   - Review permissions requested:
     - `tasks.readonly` - Read your task lists and tasks
   - Click **Allow**
6. You'll be redirected back to BrandCast
7. Connection confirmed

**OAuth Permissions:**
- **Read-only access** - BrandCast cannot create, edit, or delete tasks
- **Secure storage** - OAuth tokens encrypted at rest
- **Revocable** - Disconnect anytime in Google account settings or BrandCast

### Step 2: Select Task Lists

1. After connecting, you'll see all your Google Task lists
2. Select which task lists to display:
   - **All task lists** - Show tasks from all lists
   - **Specific lists** - Choose individual task lists
   - **My Tasks** - Default Google Tasks list
   - **Custom lists** - Any task lists you've created
3. Preview shows sample tasks from selected lists

**Task List Options:**
- Assign colors to differentiate lists
- Set priority order for display
- Show/hide task list names
- Filter by keywords

### Step 3: Configure Display Settings

**Filtering:**
- **Show completed tasks**: Yes / No (default: No)
- **Hide completed after**: 1 hour, 4 hours, 24 hours, Never
- **Due date filter**: All, Today, This Week, Overdue Only
- **Max tasks shown**: 5, 10, 20, 50, Unlimited

**Display Style:**
- **Layout**: List, Board, Compact
- **Sort by**: Due date, Creation date, Custom order (from Google)
- **Group by**: Task list, Due date, None
- **Show due dates**: Yes / No
- **Show descriptions**: Yes / No / Truncate

**Refresh Settings:**
- **Update interval**: 5, 15, 30, 60 minutes
- **Smart refresh**: Only update when tasks change (recommended)
- **Manual refresh**: Allow on-screen refresh button

### Step 4: Design & Layout

**Positioning:**
- **Full screen**: Dedicated task board display
- **Sidebar**: 20-30% of screen alongside other content
- **Footer**: Scrolling ticker of upcoming tasks
- **Dashboard panel**: One section of multi-widget layout

**Styling:**
- **Theme**: Light, Dark, Auto (match display theme)
- **Font size**: Small, Medium, Large, Extra Large
- **Checkbox style**: Checkmark, Circle, Square
- **Color scheme**: Match task list colors or custom palette

### Step 5: Save & Deploy

1. Click **Save Integration**
2. Integration appears in Content Sources
3. Add to layout:
   - Open **Layout Editor**
   - Add **Google Tasks** content area
   - Select your Google Tasks integration
   - Position and size the area
   - Save layout
4. Assign layout to display
5. Tasks appear within 15 minutes (or next refresh interval)

---

## Display Examples

### Example 1: Team Task Board (Retail Back Office)

**Setup:**
- Display mode: Board View (grouped by due date)
- Task lists: "Store Operations", "Inventory", "Customer Service"
- Filter: Show incomplete tasks only
- Refresh: 15 minutes
- Layout: Full screen display

**Use Case:** Team members see all store tasks organized by when they're due. Helps coordinate daily operations and ensure nothing is forgotten.

### Example 2: Daily Task List (Corporate Office)

**Setup:**
- Display mode: List View
- Task lists: "Sales Team Tasks", "Marketing Tasks"
- Filter: Today only
- Refresh: 5 minutes
- Layout: Sidebar (30% of screen)

**Use Case:** Office display shows today's priorities for sales and marketing teams alongside company announcements and calendar.

### Example 3: Family To-Do Board (FamilyCast)

**Setup:**
- Display mode: List View with checkboxes
- Task lists: "Household", "Kids Chores", "Shopping List"
- Filter: This week
- Refresh: 15 minutes
- Layout: Full screen with weather widget

**Use Case:** Family information center shows weekly tasks for household management, organized by category with clear due dates.

### Example 4: Personal Productivity Display

**Setup:**
- Display mode: Compact View
- Task lists: "Work", "Personal", "Projects"
- Filter: Overdue + Today
- Refresh: 5 minutes
- Layout: Sidebar alongside calendar

**Use Case:** Personal display shows immediate priorities (overdue and today's tasks) to keep focus on what matters most.

---

## Configuration Options

### Task List Selection

**Options:**
- Display all task lists from Google account
- Select specific task lists to show
- Reorder task lists for display priority
- Color-code task lists for visual distinction
- Show/hide task list names in display

### Filtering Rules

**Completion Status:**
- Show incomplete tasks only (default)
- Show completed tasks only
- Show both complete and incomplete
- Auto-hide completed after time delay

**Due Date Filters:**
- All tasks (no filter)
- Today only
- This week (next 7 days)
- Overdue only
- No due date tasks
- Custom date range

**Task Content:**
- Include subtasks
- Include task notes/descriptions
- Show only parent tasks
- Filter by keyword in task title

### Display Formatting

**Layout Styles:**

**List View:**
- Vertical list of tasks
- Group by task list or due date
- Checkboxes show completion status
- Due dates displayed inline
- Best for: Detailed task tracking

**Board View:**
- Kanban-style columns by due date
- "Today", "This Week", "Later" columns
- Drag-and-drop visual (display only, not interactive)
- Best for: Visual task organization

**Compact View:**
- Minimal space usage
- Task titles only (no descriptions)
- Due date icons
- Best for: Sidebar or footer displays

**Typography:**
- Font family: System default or custom
- Font size: 12pt - 48pt
- Line spacing: Compact, Normal, Relaxed
- Checkbox size: Small, Medium, Large

**Colors:**
- Use Google task list colors
- Custom color per task list
- Due date color coding (overdue = red, today = orange, future = blue)
- Completed task styling (strikethrough, gray out, hide)

### Sync & Refresh

**Update Frequency:**
- 5 minutes - Near real-time (uses more API quota)
- 15 minutes - Default (balanced)
- 30 minutes - Standard updates
- 60 minutes - Low-priority displays

**Smart Features:**
- **Smart refresh**: Only updates when Google Tasks data changes
- **Offline mode**: Shows last cached data if connection fails
- **Manual refresh**: On-screen button to force immediate update
- **Status indicator**: Shows last update time

---

## Use Cases by Industry

### Retail & QSR

**Back Office Task Board:**
- Opening/closing checklists
- Daily inventory tasks
- Customer service follow-ups
- Maintenance reminders

**Setup:**
- Task lists: "Opening", "Closing", "Daily Tasks"
- Display: Full screen in back office
- Filter: Today + Overdue
- Refresh: 15 minutes

### Corporate Offices

**Department Task Tracking:**
- Project milestones
- Team deliverables
- HR tasks (onboarding, reviews)
- IT helpdesk queue

**Setup:**
- Task lists: By department
- Display: Dashboard panel
- Filter: This week
- Refresh: 15 minutes

### Home & Family (FamilyCast)

**Family Command Center:**
- Household chores
- Kids' homework and activities
- Shopping lists
- Pet care reminders
- Home maintenance

**Setup:**
- Task lists: "Mom", "Dad", "Kids", "Household"
- Display: Full screen with calendar
- Filter: This week
- Refresh: 15 minutes

### Event Venues

**Event Setup Checklists:**
- Pre-event setup tasks
- Day-of coordination
- Breakdown checklists
- Vendor coordination

**Setup:**
- Task lists: By event name
- Display: Backstage display
- Filter: Today only
- Refresh: 5 minutes

---

## Managing Google Tasks Integration

### Viewing Status

1. Go to **Content Sources**
2. Find **Google Tasks** integration
3. Status indicators:
   - 🟢 **Connected** - Active and syncing
   - 🟡 **Warning** - Connection issue or quota limit
   - 🔴 **Error** - Needs attention

### Updating Settings

1. Click on Google Tasks integration
2. Modify any settings:
   - Task list selection
   - Display filters
   - Refresh interval
   - Styling options
3. Click **Save Changes**
4. Changes apply to all displays using this integration

### Reconnecting Account

If connection expires or you need to switch accounts:

1. Go to integration settings
2. Click **Disconnect Account**
3. Click **Connect Google Account**
4. Authorize with desired Google account
5. Re-select task lists
6. Save

**Note**: Task list selections reset when reconnecting. You'll need to re-select which lists to display.

### Deactivating Integration

To pause without deleting:

1. Go to integration settings
2. Toggle **Is Active** to off
3. Click **Save**

Integration stops updating but remains configured. Displays show last cached data. Re-enable anytime by toggling back on.

### Deleting Integration

To permanently remove:

1. Click on integration
2. Click **Delete Integration**
3. Confirm deletion

**Warning**: This removes the integration from all layouts using it. Update your layouts first or they'll show empty content areas.

---

## Performance & Optimization

### API Rate Limits

**Google Tasks API Limits:**
- Free tier: 50,000 requests per day
- Typical usage: 96 requests per day per integration (15-min refresh)
- 10 integrations: 960 requests per day (well under limit)

**Optimization Tips:**
- Use 15-minute refresh for most displays (default)
- Enable smart refresh (only updates when data changes)
- Avoid excessive manual refreshes
- Monitor usage in integration settings

### Caching Strategy

**How Caching Works:**
- BrandCast caches task data at refresh interval
- All displays using same integration share cached data
- Cache refreshes automatically on schedule
- Offline fallback uses last successful cache

**Benefits:**
- Reduces API calls (stays under quota)
- Faster display loading (cached data)
- Offline reliability (displays work during network issues)
- Consistent data across multiple displays

### Display Performance

**Best Practices:**
- Limit to 50 tasks per display (performance)
- Use compact view for large task lists
- Filter by date range (show only relevant tasks)
- Hide completed tasks after 4 hours (reduces clutter)

---

## Troubleshooting

### Tasks Not Showing

**Possible Causes:**
1. Google account not connected
2. No task lists selected
3. Filters hiding all tasks
4. Refresh interval too long

**Solutions:**
1. Check integration status (green indicator)
2. Verify task list selection in settings
3. Temporarily remove filters to test
4. Manually trigger refresh
5. Check Google Tasks in Google app (ensure tasks exist)

### Tasks Not Updating

**Possible Causes:**
1. Refresh interval too long
2. Network connectivity issue
3. Google API quota exceeded (rare)
4. OAuth token expired

**Solutions:**
1. Reduce refresh interval to 15 minutes
2. Check display internet connection
3. Review API usage in integration settings
4. Reconnect Google account if token expired

### Wrong Task Lists Showing

**Possible Causes:**
1. Incorrect task lists selected
2. Using wrong Google account
3. Task lists renamed in Google

**Solutions:**
1. Review task list selection in settings
2. Verify correct Google account connected
3. Re-select task lists if they were renamed

### Display Formatting Issues

**Possible Causes:**
1. Too many tasks for layout size
2. Font size too large
3. Layout area too small
4. Task titles/descriptions very long

**Solutions:**
1. Increase max tasks limit or reduce task count
2. Use smaller font size or compact view
3. Resize layout area for task widget
4. Enable truncation for long text

### Authentication Errors

**Error: "Authorization Failed"**

**Solution:**
1. Disconnect Google account
2. Clear browser cache and cookies
3. Reconnect Google account
4. Ensure popup blockers disabled
5. Try incognito/private browsing mode

---

## Privacy & Security

### OAuth Permissions

**What BrandCast Accesses:**
- ✅ **Read task lists** - View task list names
- ✅ **Read tasks** - View task titles, descriptions, due dates, status
- ❌ **Cannot create** - BrandCast cannot add tasks
- ❌ **Cannot edit** - BrandCast cannot modify tasks
- ❌ **Cannot delete** - BrandCast cannot remove tasks

**Read-Only Access**: BrandCast has view-only permissions to your Google Tasks. Your task data is safe and cannot be modified through BrandCast.

### Data Storage

**How Data is Stored:**
- OAuth tokens encrypted at rest (AES-256)
- Task data cached temporarily (15-60 minutes)
- No persistent storage of task content
- Logs contain no task details

**Data Retention:**
- Cached task data expires after refresh interval
- OAuth tokens stored until disconnected
- Integration settings stored until deleted

### Revoking Access

**In BrandCast:**
1. Go to Google Tasks integration settings
2. Click **Disconnect Account**
3. Confirm disconnection

**In Google:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click **Third-party apps with account access**
3. Find **BrandCast**
4. Click **Remove Access**

---

## Best Practices

### Task Organization

**For Teams:**
- Create separate task lists by department or project
- Use clear, descriptive task titles
- Set due dates for time-sensitive tasks
- Add detailed notes/descriptions for complex tasks
- Assign tasks in Google Tasks, display for visibility in BrandCast

**For Families (FamilyCast):**
- Create task lists by person ("Mom Tasks", "Kids Chores")
- Use due dates for weekly chores
- Include recurring tasks (weekly, daily routines)
- Keep shopping lists separate from chores

**For Personal Productivity:**
- Use "Today" view to stay focused
- Overdue + Today filter for immediate priorities
- Hide completed tasks to reduce clutter
- Sync across phone, computer, and display

### Display Design

**Effective Layouts:**
- **Full screen task board**: Dedicated display in back office or command center
- **Sidebar task list**: 20-30% of screen alongside calendar and announcements
- **Dashboard panel**: One widget in multi-panel layout
- **Footer ticker**: Scrolling upcoming tasks at bottom of screen

**Visual Hierarchy:**
- Overdue tasks in red (urgent)
- Today's tasks in orange (important)
- Future tasks in blue (plan ahead)
- Completed tasks grayed out or hidden

**Readability:**
- Font size: 18pt minimum for task titles
- Line spacing: Normal or relaxed (not compact)
- High contrast: Dark text on light background or vice versa
- Limit to 10-15 tasks per screen for readability

### Workflow Integration

**Update Tasks in Google:**
- Edit tasks in Google Tasks app (mobile or web)
- Changes sync to BrandCast within refresh interval
- Mark complete in Google, display updates automatically
- Add new tasks in Google, they appear on display

**Multi-Display Strategy:**
- Use same integration across multiple displays
- Customize filters per display (Today view for one, This Week for another)
- Share task lists across team displays
- Personal displays show individual task lists

---

## Related Features

**Combine with other integrations:**
- **[Calendar Integration (iCal)](./ical-calendar.md)** - Show tasks alongside calendar events
- **[RSS Feeds](./rss-feeds.md)** - Display news with task tracking
- **[Weather](./weather.md)** - Add weather to task board displays

**Layout ideas:**
- **[Layout Editor](../features/layouts.md)** - Design task board layouts
- **[Playlists](../workflows/playlists.md)** - Rotate between task views
- **[Display Management](../features/displays.md)** - Deploy to multiple screens

**FamilyCast-specific:**
- **[Cozi Lists Integration](./cozi-lists.md)** - Alternative family task lists
- **[Google Photos](./google-photos.md)** - Combine tasks with family photos

---

## Next Steps

1. **[Connect Google Tasks](https://app.brandcast.app/integrations/google-tasks)** - Set up integration
2. **[Create Task Board Layout](../features/layouts.md)** - Design your display
3. **[Assign to Display](../workflows/content-association.md)** - Deploy to screens

**Need help?** Contact support or see [Troubleshooting Guide](../troubleshooting/integration-problems.md).
