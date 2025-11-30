---
title: Google Tasks Integration
---

# Google Tasks Integration

Display task lists from Google Tasks on your digital signage displays.

## Overview

The Google Tasks integration connects to your Google account to display to-do lists, project trackers, and checklists on your screens. By creating **Google Tasks Content Sources**, you can configure specific lists (e.g., "Opening Checklist", "Team Projects") and reuse them across multiple layouts.

**Key Features:**
- **Live Sync:** Tasks update automatically when changed in Google Tasks.
- **Multiple Lists:** Display one or more task lists in a single widget.
- **Visual Styles:** Choose from List, Board, or Compact views.

## 1. Connect the Integration

1.  Navigate to **Integrations** > **Google Tasks**.
2.  Click **Connect Account**.
3.  Sign in with your Google account and authorize BrandCast to read your tasks.

## 2. Create a Content Source

A **Content Source** is a specific configuration of task lists.

1.  Navigate to **Integrations** > **Google Tasks**.
2.  Click **Create New Source**.
3.  **Name:** Give it a descriptive name (e.g., "Morning Shift Checklist").
4.  **Select Lists:** Choose which Google Task lists to include in this source.
5.  **Filtering:**
    *   **Show Completed:** Toggle visibility of completed tasks.
    *   **Hide After:** Automatically hide completed tasks after a set time (e.g., 1 hour).
    *   **Due Date:** Filter by Today, This Week, or All.

**Why create Content Sources?**
You can create a "Manager's Dashboard" source that shows *all* task lists, and a separate "Front Desk To-Do" source that only shows the "Reception" list. Both use the same underlying Google account connection.

## 3. Content Source Configuration (Styles)

Customize the appearance of your task list.

*   **Display Style:**
    *   **List:** Standard vertical list with checkboxes.
    *   **Board:** Kanban-style columns grouped by status or list.
    *   **Compact:** Minimalist view for sidebars.
*   **Typography:** Font sizes and colors.
*   **Grouping:** Group tasks by List Name, Due Date, or Status.

## 4. Add to Layout

1.  Open the **Layout Editor**.
2.  Add a **Task List** area to the canvas.
3.  Select your saved source (e.g., "Morning Shift Checklist").
4.  **Save** the layout.

## Troubleshooting

*   **Tasks Not Updating:** Google Tasks syncs every 15 minutes. You can force a manual refresh from the Integration settings.
*   **Missing Lists:** If you add a new list in Google, you may need to edit your Content Source to select it.
