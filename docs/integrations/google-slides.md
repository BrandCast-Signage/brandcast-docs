---
title: Google Slides
---

# Google Slides Integration

Display your Google Slides presentations directly on BrandCast displays.

## Overview

The Google Slides integration allows you to connect your Google account and use your presentations as dynamic digital signage. By creating **Slides Content Sources**, you can configure specific presentations (e.g., "Lunch Menu", "Corporate Overview") and deploy them to any screen.

**Key Features:**
- **Auto-Sync:** Changes made in Google Slides are automatically reflected on your displays.
- **Reusable Sources:** Connect a presentation once, use it in multiple layouts.
- **Flexible Playback:** Customize slide duration and transition effects per source.

## 1. Connect the Integration

1.  Navigate to **Integrations** > **Google Slides**.
2.  Click **Connect Account**.
3.  Authorize BrandCast to access your Google Slides presentations.

## 2. Create a Content Source

A **Content Source** links a specific Google Slides presentation to BrandCast.

1.  Navigate to **Integrations** > **Google Slides**.
2.  Click **Create New Source**.
3.  **Select Presentation:** Browse your Google Drive and select the desired file.
4.  **Name:** Give the source a descriptive name (e.g., "Q3 Sales Deck").

**Why create Content Sources?**
You might have a "Morning Announcements" presentation and an "Afternoon Specials" presentation. Creating separate Content Sources for each allows you to schedule them independently or rotate them in a playlist.

## 3. Content Source Configuration (Styles)

Customize how this presentation plays back.

*   **Slide Duration:** How long each slide stays on screen (default: 10 seconds).
*   **Transitions:** Choose effects like Fade, Slide, or None.
*   **Auto-Loop:** Restart presentation when finished.
*   **Refresh Interval:** How often to check Google Drive for updates (default: 15 minutes).

## 4. Add to Layout

1.  Open the **Layout Editor**.
2.  Add a **Google Slides** area to the canvas.
3.  Select your saved source (e.g., "Q3 Sales Deck").
4.  **Save** the layout.

## Troubleshooting

*   **Slides Not Updating:** Check the "Refresh Interval" in your Content Source settings. You can also force a manual refresh.
*   **Blank Screen:** Ensure the BrandCast service account has permission to view the file if you are using a shared drive link (though OAuth usually handles this).
