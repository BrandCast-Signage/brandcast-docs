---
title: iCal Calendar
---

# iCal Calendar Integration

Connect and display any calendar that supports the iCal format (Google, Outlook, Apple, Cozi, Yahoo, etc.).

## Overview

The iCal integration is the universal standard for calendar displays. By creating **Calendar Content Sources**, you can combine multiple calendar feeds (e.g., "Company Holidays" + "Room A Schedule") into a single, cohesive display.

**Key Features:**
- **Universal:** Works with almost any calendar provider.
- **Multi-Feed:** Merge multiple calendars into one view.
- **Auto-Sync:** Updates automatically when your calendar changes.

## 1. Connect the Integration

The iCal integration is native and does not require OAuth. You connect by providing the `.ics` URL.

**Prerequisites:**
- Obtain the secret/private iCal URL from your calendar provider (Google Calendar, Outlook, etc.).

## 2. Create a Content Source

A **Content Source** is a configured set of calendar feeds.

1.  Navigate to **Integrations** > **iCal Calendar**.
2.  Click **Create New Source**.
3.  **Name:** Give the source a descriptive name (e.g., "Conference Room A Master").
4.  **Add Feed:**
    *   **Feed Name:** Label this specific calendar (e.g., "Internal Bookings").
    *   **URL:** Paste the `.ics` URL.
    *   **Color:** Assign a color for events from this feed.
5.  **Add Another Feed:** (Optional) You can add multiple feeds to one source (e.g., add "Public Holidays" to the room schedule).

**Why create Content Sources?**
You can create a "Room A" source and a "Room B" source. Both might share the same "Company Holidays" feed, but have different room booking feeds. You manage these configurations centrally.

## 3. Content Source Configuration (Styles)

Customize how this calendar appears.

*   **View Mode:**
    *   **Agenda:** List of upcoming events.
    *   **Day:** Daily schedule view.
    *   **Week:** 7-day grid view.
*   **Date Range:** How far into the future to display events (e.g., Next 7 Days).
*   **Event Details:** Show/hide location, description, or end times.

## 4. Add to Layout

1.  Open the **Layout Editor**.
2.  Add a **Calendar** area to the canvas.
3.  Select your saved source (e.g., "Conference Room A Master").
4.  **Save** the layout.

## Troubleshooting

*   **Events Not Showing:** Ensure you used the **Secret/Private** iCal address, not the public HTML address.
*   **Timezone Off:** Verify the timezone settings in your BrandCast Store settings match your calendar's timezone.
