---
title: Task Lists (Google Tasks & Cozi)
---

# Task Lists Integration

Display task lists from Google Tasks or Cozi on your digital signage for team coordination, personal productivity, and household management.

## Overview

The Tasks integration connects your Google Tasks or Cozi Lists accounts to BrandCast, enabling automatic display of to-do lists, shopping lists, and task tracking on digital signage. Perfect for team coordination, family organization, and personal productivity displays.

**Supported Services:**
- **Google Tasks**: Personal and workspace task management
- **Cozi Lists**: Family shopping and to-do lists

**Key Features:**
- Multiple list support
- Task completion tracking
- Due date display and sorting
- Completed task filtering
- Custom display grouping
- Real-time updates
- Secure OAuth authentication
- Task hierarchy (subtasks)
- Filtering and sorting options

## Use Cases

**Family Displays:**
- Shopping lists in kitchen
- Chore lists for kids
- Family to-do lists
- Meal planning lists
- Household project tracking

**Office/Team:**
- Team task boards
- Project task tracking
- Meeting action items
- Shared to-do lists
- Department task displays

**Personal Productivity:**
- Daily task list display
- Home office task tracking
- Personal goal tracking
- Habit checklist
- Project management

**Retail/Business:**
- Opening/closing checklists
- Inventory check lists
- Maintenance task lists
- Staff task assignments
- Daily operations checklist

## Supported Task Services

### Google Tasks

**Overview:**
- Free task management from Google
- Integrated with Gmail and Calendar
- Multiple task lists
- Subtask support
- Due dates and notes

**Best For:**
- Personal productivity
- Workspace collaboration
- Gmail integration
- Cross-device sync

**Requirements:**
- Google account
- OAuth authentication
- Task lists created in Google Tasks

### Cozi Lists

**Overview:**
- Family organization platform
- Shopping and to-do lists
- Family calendar integration
- Color-coded lists
- Shared family access

**Best For:**
- Family organization
- Household management
- Shopping lists
- Family coordination

**Requirements:**
- Cozi account (free or premium)
- Username/password authentication
- Lists created in Cozi app

## Setup - Google Tasks

### Step 1: Connect Google Tasks

**From Dashboard:**

1. Navigate to **Integrations** → **Google Tasks**
2. Click **Connect Google Tasks**
3. Sign in with Google account
4. Grant permissions:
   - View tasks
   - View task lists
5. Connection confirmed

**OAuth Flow:**
- Secure Google OAuth 2.0
- Read-only access to tasks
- Automatic token refresh
- Revocable at any time

**Connection Status:**
```
✓ Connected to Google Tasks
  Account: you@gmail.com
  Connected: Oct 14, 2025
  Lists: 3 task lists found
```

### Step 2: Select Task Lists

**View Available Lists:**
- Personal Tasks
- Work Projects
- Shopping List
- Home Improvement
- (Any lists you've created)

**Select Lists to Display:**
- All lists (combined view)
- Specific list (single list)
- Multiple selected lists

**Example Configuration:**
```javascript
{
  "service": "google_tasks",
  "taskListIds": ["list_abc123", "list_def456"],
  "showCompleted": false,
  "maxTasks": 20,
  "sortBy": "dueDate",
  "groupBy": "list"
}
```

### Step 3: Configure Display

**Display Options:**

**Task Information:**
- Task title (required)
- Due date
- Completion status (checkbox)
- Notes/description
- Subtasks
- List name

**Filtering:**
- Show/hide completed tasks
- Completed tasks display duration (e.g., 24 hours)
- Filter by specific lists
- Filter by due date

**Sorting:**
- By due date (earliest first)
- By position (manual order)
- By title (alphabetical)
- By updated time (most recent)

**Grouping:**
- By list (separate each list)
- By status (active vs. completed)
- By due date (overdue, today, this week, etc.)
- No grouping (flat list)

## Setup - Cozi Lists

### Step 1: Connect Cozi

**From Dashboard:**

1. Navigate to **Integrations** → **Cozi Lists**
2. Click **Connect Cozi**
3. Enter Cozi credentials:
   - **Email/Username**: Your Cozi login
   - **Password**: Your Cozi password
4. Click **Connect**
5. System authenticates and fetches lists
6. Connection confirmed

**Security:**
- Password encrypted before storage
- Session token management
- Automatic re-authentication
- Secure credential storage

**Connection Status:**
```
✓ Connected to Cozi
  Account: family@example.com
  Connected: Oct 14, 2025
  Lists: 5 lists found
```

### Step 2: Select Lists

**Available Cozi Lists:**
- Shopping List
- To Do
- (Any custom lists)

**Select for Display:**
- All lists
- Shopping List only
- To Do only
- Multiple selected

### Step 3: Configure Display

**Same Options as Google Tasks:**
- Task filtering
- Completion tracking
- Due date display
- Sorting and grouping

## Display Formats

### List View (Default)

**Simple vertical task list:**

```
┌────────────────────────────────┐
│ Shopping List                  │
├────────────────────────────────┤
│ ☐ Milk                         │
│ ☐ Bread                        │
│ ☐ Eggs                         │
│ ☑ Butter (completed)           │
│                                │
│ To Do List                     │
│ ☐ Take out trash              │
│ ☐ Water plants                │
│ ☐ Pay bills (Due: Oct 15)     │
└────────────────────────────────┘
```

**Best For:** Simple to-do lists, shopping lists, quick reference

### Grouped View

**Tasks organized by category:**

```
┌────────────────────────────────┐
│ Tasks                          │
├────────────────────────────────┤
│ Overdue (2)                    │
│ ☐ Submit report               │
│ ☐ Schedule meeting            │
│                                │
│ Due Today (3)                  │
│ ☐ Call dentist               │
│ ☐ Grocery shopping            │
│ ☐ Pick up dry cleaning       │
│                                │
│ Due This Week (4)              │
│ ☐ Finish presentation         │
│ ☐ Review budget               │
└────────────────────────────────┘
```

**Best For:** Priority management, deadline tracking, work tasks

### Checklist View

**Clean checkbox format:**

```
┌────────────────────────────────┐
│ Daily Routine                  │
├────────────────────────────────┤
│ ✓ Make bed                     │
│ ✓ Breakfast                    │
│ ☐ Exercise                     │
│ ☐ Meditation                   │
│ ☐ Check email                  │
│ ☐ Plan tomorrow                │
└────────────────────────────────┘
```

**Best For:** Habits, routines, checklists, recurring tasks

### Card View (Grid)

**Task cards in grid layout:**

```
┌───────────┐ ┌───────────┐ ┌───────────┐
│ Grocery   │ │ Home      │ │ Work      │
│ Shopping  │ │ Projects  │ │ Tasks     │
│           │ │           │ │           │
│ 8 items   │ │ 5 tasks   │ │ 12 tasks  │
│ 2 done    │ │ 1 done    │ │ 7 done    │
└───────────┘ └───────────┘ └───────────┘
```

**Best For:** Multiple lists, visual organization, list summaries

## Configuration Options

### Filtering

**Show Completed Tasks:**
```javascript
{
  "showCompleted": true,
  "completedTasksDisplayDuration": 24  // Hours
}
```
- `true`: Show all completed tasks
- `false`: Hide completed tasks
- `completedTasksDisplayDuration`: Auto-hide after X hours

**Filter by List:**
```javascript
{
  "taskListIds": ["list_123", "list_456"]
}
```
- Show only selected lists
- Combine multiple lists
- Exclude specific lists

**Filter by Due Date:**
```javascript
{
  "dueDateFilter": "upcoming",  // overdue, today, upcoming, all
  "dueDateRange": 7  // Days
}
```

### Sorting

**Sort By:**
- `dueDate`: Earliest due date first
- `position`: Manual order from task app
- `title`: Alphabetical
- `updated`: Most recently modified

**Sort Order:**
- `asc`: Ascending (A-Z, earliest first)
- `desc`: Descending (Z-A, latest first)

**Example:**
```javascript
{
  "sortBy": "dueDate",
  "sortOrder": "asc"  // Overdue tasks appear first
}
```

### Grouping

**Group By List:**
```javascript
{
  "groupBy": "list"
}
```
**Display:**
```
Shopping List
  ☐ Milk
  ☐ Bread

To Do
  ☐ Call dentist
  ☐ Pay bills
```

**Group By Status:**
```javascript
{
  "groupBy": "status"
}
```
**Display:**
```
Active (5)
  ☐ Task 1
  ☐ Task 2

Completed (3)
  ☑ Task 3
  ☑ Task 4
```

**Group By Due Date:**
```javascript
{
  "groupBy": "dueDate"
}
```
**Display:**
```
Overdue (2)
Due Today (3)
Due This Week (5)
No Due Date (4)
```

### Display Limits

**Maximum Tasks:**
```javascript
{
  "maxTasks": 20  // Show first 20 tasks
}
```

**Pagination:**
```javascript
{
  "maxTasks": 10,
  "autoRotate": true,
  "rotateInterval": 30  // Seconds
}
```

## Layout Examples

### Kitchen Family Display

```
Layout: "Family Command Center"
  Header (15%):
    - Date and Weather

  Main (70%):
    - Cozi Shopping List (left 50%)
    - Cozi To Do List (right 50%)

  Footer (15%):
    - Family Calendar (this week)
```

**Use Case:** Family coordination, shopping, household tasks

### Office Team Display

```
Layout: "Team Task Board"
  Fullscreen:
    - Google Tasks (all team lists)
    - Grouped by: Status
    - Show: Active tasks only
    - Sort by: Due date
    - Large font, easy reading from distance
```

**Use Case:** Team coordination, project tracking, accountability

### Personal Productivity

```
Layout: "Daily Focus"
  Main (80%):
    - Today's tasks (due today + overdue)
    - Priority: Overdue at top

  Sidebar (20%):
    - Upcoming this week
    - Completed today count
    - Motivational quote
```

**Use Case:** Home office, personal workspace, focus display

### Retail Operations

```
Layout: "Daily Operations Checklist"
  Header:
    - Store name, date, shift

  Main:
    - Opening Checklist (Google Tasks)
    - Checkbox format
    - Sort by: Position (custom order)
    - Show: Incomplete only

  Footer:
    - Manager notes
```

**Use Case:** Store operations, standardized procedures, accountability

## Advanced Features

### Task Hierarchy (Subtasks)

**Google Tasks Subtasks:**
```
☐ Plan Birthday Party
  ☐ Book venue
  ☐ Send invitations
  ☐ Order cake
  ☐ Buy decorations
```

**Display Options:**
- Indent subtasks
- Show/hide completed subtasks
- Collapse/expand parent tasks
- Subtask completion percentage

**Configuration:**
```javascript
{
  "showHierarchy": true,
  "indentSubtasks": 20,  // Pixels
  "collapseCompleted": true
}
```

### Due Date Indicators

**Visual Due Date Status:**

```
☐ Submit report [OVERDUE]
☐ Team meeting [TODAY]
☐ Project review [TOM]
☐ Budget review [Oct 20]
☐ No due date
```

**Color Coding:**
- Red: Overdue
- Orange: Due today
- Yellow: Due tomorrow
- Green: Due this week
- Gray: No due date

### Task Notes Display

**Show Task Details:**
```
☐ Call dentist
  Due: Oct 15
  Note: Schedule cleaning, mention sensitivity
```

**Configuration:**
```javascript
{
  "showNotes": true,
  "notesMaxLength": 100,  // Characters
  "notesTruncate": true
}
```

### Completion Tracking

**Progress Display:**
```
Shopping List
  Progress: 6/10 completed (60%)
  ☑☑☑☑☑☑☐☐☐☐

To Do List
  Progress: 3/8 completed (38%)
  ☑☑☑☐☐☐☐☐
```

**Use Cases:**
- Motivation
- Progress visualization
- Quick status check
- Team accountability

## Troubleshooting

### Connection Failed

**Google Tasks:**

**Symptoms:**
- OAuth fails
- "Permission denied" error
- Can't authorize

**Solutions:**
1. Check Google account access
2. Verify popup blockers disabled
3. Try different browser
4. Revoke and reconnect
5. Check Google account permissions

**Cozi Lists:**

**Symptoms:**
- "Invalid credentials" error
- Can't connect
- Authentication timeout

**Solutions:**
1. Verify email/username correct
2. Confirm password accurate
3. Log into Cozi separately to test
4. Check account active
5. Try resetting Cozi password

### Tasks Not Showing

**Symptoms:**
- Empty task list
- "No tasks found"
- Expected tasks missing

**Check:**

1. **Task Lists Selected:**
   - Verify correct lists selected
   - Check "All lists" vs. specific
   - Confirm lists have tasks

2. **Filters:**
   - "Show completed" setting
   - Task list filter
   - Due date filter
   - Remove all filters to test

3. **Task Service:**
   - Google Tasks: Tasks exist in Google Tasks app?
   - Cozi: Lists exist in Cozi app?

**Solutions:**
- Select all lists
- Disable all filters
- Check task app directly
- Refresh connection

### Tasks Not Updating

**Symptoms:**
- Stale task list
- Changes not reflected
- Completed tasks still showing

**Causes:**
- Caching
- Refresh interval too long
- Connection issue
- OAuth token expired

**Solutions:**
1. **Force Refresh:**
   - Manual refresh button
   - Clear cache
   - Reconnect service

2. **Check Refresh Interval:**
   - Default: 5 minutes
   - Adjust if needed
   - Balance freshness vs. API limits

3. **Verify Connection:**
   - Check integration status
   - Re-authenticate if needed
   - Test in task app

### Wrong Tasks Showing

**Symptoms:**
- Tasks from wrong list
- Other user's tasks
- Unexpected content

**Check:**

1. **Account:**
   - Correct Google/Cozi account connected?
   - Multiple accounts confused?
   - Personal vs. work account?

2. **List Selection:**
   - Correct lists selected?
   - Filter configuration?
   - List IDs match?

**Fix:**
- Disconnect and reconnect correct account
- Verify list selection
- Check filter settings

## Best Practices

### Task List Organization

**Keep Lists Focused:**
- One purpose per list
- Clear list names
- Logical grouping
- Regular cleanup

**Good Examples:**
- "Grocery Shopping"
- "Home Projects"
- "Work - Q4 Goals"
- "Daily Habits"

**Avoid:**
- "Stuff"
- "Things to do"
- "Misc"
- Overly long lists

### Display Design

**Readability:**
- Minimum 18pt font
- High contrast
- Clear checkbox symbols
- Adequate spacing
- Not too many tasks per screen

**Visual Hierarchy:**
- Group related tasks
- Prioritize important tasks
- Use color for status
- Clear section headers

**Information Density:**
- 10-20 tasks max per view
- Use pagination if needed
- Group to reduce clutter
- Show only relevant info

### Update Strategy

**Refresh Frequency:**

**High Priority (Real-time):**
- Team collaboration: 1-5 minutes
- Shared family lists: 5 minutes
- Office displays: 5-10 minutes

**Normal (Standard):**
- Personal productivity: 15 minutes
- Shopping lists: 15-30 minutes
- Project tracking: 30 minutes

**Low Priority (Archive):**
- Reference lists: Hourly
- Long-term planning: Daily

### Privacy Considerations

**Public Displays:**
- Avoid sensitive tasks
- No personal information
- Generic task titles
- Consider audience

**Team Displays:**
- Work-appropriate content
- Respectful task names
- Professional language
- Clear ownership

**Family Displays:**
- Age-appropriate content
- Privacy for sensitive tasks
- Considerate phrasing

## API Reference

### Get Task Lists

```
GET /api/tasks/lists?service=google_tasks
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "lists": [
    {
      "id": "list_abc123",
      "title": "Personal Tasks",
      "updated": "2025-10-14T14:35:00Z"
    }
  ]
}
```

### Get Tasks

```
GET /api/tasks?service=google_tasks&listIds=list_abc123&showCompleted=false
Authorization: Bearer {userToken}
```

**Response:**
```json
{
  "tasks": [
    {
      "id": "task_xyz789",
      "title": "Call dentist",
      "due": "2025-10-15T12:00:00Z",
      "status": "needsAction",
      "listId": "list_abc123",
      "listName": "Personal Tasks",
      "notes": "Schedule cleaning",
      "position": "0"
    }
  ]
}
```

### Complete Task

```
POST /api/tasks/task_xyz789/complete
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "listId": "list_abc123",
  "service": "google_tasks"
}
```

## Next Steps

- **[Content Types](../features/content-types.md)** - Learn about TASKS content type
- **[Layouts](../features/layouts.md)** - Design task list displays
- **[ZoomShift Integration](./zoomshift.md)** - Employee task integration
- **[Google Calendar](./google-calendar.md)** - Combine tasks with calendar
