---
title: RSS Feeds
---

# RSS Feeds Integration

Display dynamic content from blogs, news sites, and other RSS sources on your BrandCast displays.

## Overview

The RSS Feeds integration allows you to connect to any valid RSS feed URL and display its content on your digital signage. By creating reusable **RSS Content Sources**, you can easily distribute news, blog updates, or industry announcements across multiple layouts and displays.

**Key Features:**
- **Auto-Updating:** Content refreshes automatically based on your settings.
- **Reusable Sources:** Configure a feed once (e.g., "Industry News") and use it in multiple layouts.
- **Flexible Display:** Choose from Ticker, List, or Card styles for each source.

## 1. Connect the Integration

RSS Feeds are a native integration and do not require external account authentication (OAuth). You simply provide the feed URL.

**Prerequisites:**
- A valid RSS feed URL (e.g., `https://rss.nytimes.com/rss/cnn_topstories.rss`).
- Ensure the feed is public and valid (test at [validator.w3.org/feed](https://validator.w3.org/feed)).

## 2. Create a Content Source

A **Content Source** is a configured instance of an RSS feed. You can create multiple sources for different feeds (e.g., "Tech News Source", "Company Blog Source").

1.  Navigate to **Integrations** > **RSS Feeds**.
2.  Click **Create New Source**.
3.  **Feed URL:** Enter the full URL of the RSS feed.
4.  **Name:** Give it a descriptive name (e.g., "BBC Top Stories").
5.  **Refresh Interval:** How often to check for new posts (e.g., Every 15 minutes, Hourly).
6.  **Max Items:** Limit the number of items to fetch and display (default: 10).

**Why create Content Sources?**
Once created, this source is saved in your account. You can add "BBC Top Stories" to your Lobby Layout, your Breakroom Layout, and your Hallway Playlist without re-entering the URL every time.

## 3. Content Source Configuration (Styles)

Customize how this specific feed appears. These settings are saved with the Content Source.

*   **Display Style:**
    *   **Ticker:** Scrolling text at the bottom of the screen.
    *   **List:** Vertical list of headlines.
    *   **Cards:** Grid of cards with images and summaries.
*   **Typography:** Choose fonts, sizes, and colors for headlines and body text.
*   **Filtering:** (Advanced) Include/Exclude items based on keywords.

## 4. Add to Layout

Once your Content Source is ready, place it on a screen.

1.  Open the **Layout Editor** for the desired Layout.
2.  Add a **RSS Feed** area to the canvas.
3.  Select your saved source (e.g., "BBC Top Stories") from the dropdown.
4.  **Save** the layout.

**Layout Reusability:**
You can create a special "Holiday News Layout" using this source and assign it to a schedule. When the holidays are over, simply remove the layout from the schedule. The layout and the RSS source remain saved in your account for next year.

## Troubleshooting

*   **Feed Not Valid:** If the feed doesn't load, check it with an online RSS validator.
*   **Images Missing:** Not all RSS feeds include images. Check the feed source.
