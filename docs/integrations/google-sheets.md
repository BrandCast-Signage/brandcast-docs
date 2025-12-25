---
title: Google Sheets
---

# Google Sheets Integration

Display data from Google Sheets as formatted tables or charts.

## Overview

Google Sheets integration allows BrandCast/FamilyCast users to display Google Sheets spreadsheet data directly on their digital signage displays. Sheets can be displayed as schedules, inventory lists, or custom data tables with automatic updates.

**Key Features:**
- Display any Google Sheets spreadsheet from your Google Drive
- Two specialized display modes: Schedule and Inventory
- Automatic data fetching via Google Sheets API
- Real-time spreadsheet updates reflected on displays
- Flexible authentication (OAuth, service account, or Application Default Credentials)
- Sheet-specific rendering (select individual sheets from multi-sheet workbooks)
- Responsive table rendering for various display sizes

## 1. Connect the Integration

1.  Navigate to **Integrations** > **Google Sheets**.
2.  Click **Connect Account**.
3.  Authorize BrandCast to access your Google Sheets.

## 2. Create a Content Source

A **Content Source** links a specific sheet to BrandCast.

1.  Navigate to **Integrations** > **Google Sheets**.
2.  Click **Create New Source**.
3.  **Select Sheet:** Browse your Google Drive and select the file.
4.  **Select Tab/Range:** Choose which tab to display, or enter a specific range (e.g., `Sheet1!A1:C10`).
5.  **Name:** Give the source a descriptive name (e.g., "Q3 Sales Leaderboard").

**Why create Content Sources?**
You can have multiple Content Sources pointing to the *same* spreadsheet file but different tabs. For example, one source displays the "Inventory" tab, while another displays the "Schedule" tab.

## 3. Content Source Configuration (Styles)

Customize how this table appears.

*   **Headers:** Choose to show or hide the first row as headers.
*   **Striping:** Enable alternating row colors for readability.
*   **Font Size:** Adjust text size to fit the screen.
*   **Refresh Interval:** How often to check for updates (default: 5 minutes).

## 4. Add to Layout

1.  Open the **Layout Editor**.
2.  Add a **Google Sheets** area to the canvas.
3.  Select your saved source (e.g., "Q3 Sales Leaderboard").
4.  **Save** the layout.

## Troubleshooting

*   **Formatting Not Matching:** Complex formatting (merged cells, pivot tables) may not render perfectly. Keep the display sheet simple and clean.
*   **Data Not Updating:** Verify the "Refresh Interval" in your Content Source settings.
