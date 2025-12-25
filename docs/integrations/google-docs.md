---
title: Google Docs
---

# Google Docs Integration

Display your Google Docs documents directly on BrandCast displays.

## Overview

Google Docs integration allows BrandCast/FamilyCast users to display Google Docs documents directly on their digital signage displays. Documents are rendered as formatted, scrollable content with automatic styling and refresh.

**Key Features:**
- Display any Google Docs document from your Google Drive
- Automatic document rendering via Google Docs API
- Real-time document updates reflected on displays
- Flexible authentication (OAuth, service account, or Application Default Credentials)
- Optional title display
- Responsive text rendering for various display sizes

## 1. Connect the Integration

1.  Navigate to **Integrations** > **Google Docs**.
2.  Click **Connect Account**.
3.  Authorize BrandCast to access your Google Docs.

## 2. Create a Content Source

A **Content Source** links a specific document to BrandCast.

1.  Navigate to **Integrations** > **Google Docs**.
2.  Click **Create New Source**.
3.  **Select Document:** Browse your Google Drive and select the file.
4.  **Name:** Give the source a descriptive name (e.g., "Reception Welcome Letter").

**Why create Content Sources?**
You can have a "Daily Special" source linked to one doc, and a "Staff Announcements" source linked to another. Both are managed centrally in the Integrations tab.

## 3. Content Source Configuration (Styles)

Customize the display of this document.

*   **Auto-Scroll:** Enable scrolling for documents that are longer than the screen.
*   **Scroll Speed:** Adjust the speed of the scroll.
*   **Zoom/Scale:** Adjust the zoom level to make text larger or smaller on the display.
*   **Refresh Interval:** How often to fetch updates (default: 15 minutes).

## 4. Add to Layout

1.  Open the **Layout Editor**.
2.  Add a **Google Docs** area to the canvas.
3.  Select your saved source (e.g., "Reception Welcome Letter").
4.  **Save** the layout.

## Troubleshooting

*   **Formatting Issues:** Simple formatting works best. Avoid complex tables or drawing canvases within the doc.
*   **Not Updating:** Verify the "Refresh Interval" or force a manual refresh in the Content Source settings.
