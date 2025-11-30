---
title: Weather
---

# Weather Integration

Display current conditions and forecasts for any location on your BrandCast displays.

## Overview

The Weather integration allows you to keep your audience informed with live weather updates. By creating **Weather Content Sources**, you can configure weather widgets for specific locations (e.g., "HQ Weather", "Store #123 Weather") and reuse them across any number of layouts.

**Key Features:**
- **Live Updates:** Automatically fetches current conditions and forecasts.
- **Multiple Locations:** Create separate sources for different geographical locations.
- **Visual Styles:** Choose from Current Conditions, 3-Day Forecast, or 5-Day Forecast.

## 1. Connect the Integration

The Weather integration is native to BrandCast and requires no external account setup. It uses your BrandCast account to fetch data.

## 2. Create a Content Source

A **Content Source** is a configured instance of the Weather integration for a specific location.

1.  Navigate to **Integrations** > **Weather**.
2.  Click **Create New Source**.
3.  **Name:** Give it a descriptive name (e.g., "Chicago Office Weather").
4.  **Location:** Enter the City/State or Zip Code.
5.  **Units:** Select Fahrenheit or Celsius.

**Why create Content Sources?**
Once you create "Chicago Office Weather," you can drag and drop this exact weather configuration into your Lobby Layout, your Elevator Screen Layout, and your Employee App Layout. If you need to change the location later, update the Source once, and it updates everywhere.

## 3. Content Source Configuration (Styles)

Customize how the weather appears. These visual settings are saved with the Content Source but can be overridden at the Layout level if needed.

*   **Display Style:**
    *   **Current:** Simple icon and temperature. Good for headers/footers.
    *   **Forecast:** 3-day or 5-day outlook with highs/lows. Good for sidebars.
    *   **Full:** Detailed view with humidity, wind, and precipitation.
*   **Typography:** Font styles and colors.
*   **Icons:** Choose icon sets (Flat, Realistic, Minimal).

## 4. Add to Layout

Once your Content Source is ready, place it on a screen.

1.  Open the **Layout Editor** for the desired Layout.
2.  Add a **Weather** area to the canvas.
3.  Select your saved source (e.g., "Chicago Office Weather") from the dropdown.
4.  **Save** the layout.

**Flexible Layouts:**
You can have multiple weather sources in one layout! For example, a "Global Offices" layout could feature three separate Weather Content Sources: "Chicago," "London," and "Tokyo," all arranged side-by-side.

## Troubleshooting

*   **Wrong Location:** If the weather seems incorrect, check the Zip Code or try using "City, State" format for better accuracy.
*   **Data Stale:** Weather data refreshes every 15 minutes.
