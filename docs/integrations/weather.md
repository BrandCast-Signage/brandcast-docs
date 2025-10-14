---
title: Weather Integration
---

# Weather Integration

Display real-time weather conditions and forecasts powered by WeatherAPI.com with automatic location detection and customizable display modes.

## Overview

The Weather integration provides current conditions, hourly forecasts, and multi-day forecasts for any location. Perfect for retail stores, offices, event venues, and any business where weather matters to customers or operations.

**Key Features:**
- Real-time weather data (updated every 1-30 minutes)
- Current conditions with detailed metrics
- 24-hour hourly forecasts
- 1-7 day daily forecasts
- Automatic location detection from store address
- Multiple display modes (minimal, verbose)
- Fahrenheit and Celsius support
- Weather icons and condition descriptions
- Fallback data if API unavailable

**Data Provider:** [WeatherAPI.com](https://www.weatherapi.com/)

## Use Cases

**Retail Stores:**
- Help customers plan purchases (umbrellas, sunscreen, winter gear)
- Display outdoor temperature for climate control awareness
- Show weather-appropriate product suggestions

**Restaurants & QSR:**
- Outdoor seating availability messaging
- Weather-based menu suggestions (hot soup on cold days)
- Delivery timing expectations

**Event Venues:**
- Outdoor event planning information
- Attendee preparation guidance
- Day-of-event weather updates

**Office Lobbies:**
- Employee commute planning
- Dress code guidance (jacket weather)
- Lunch break outdoor activity planning

**Fitness Centers:**
- Outdoor workout conditions
- Running/cycling weather suitability
- Temperature-based hydration reminders

## Setup

### Prerequisites

- BrandCast account with Weather integration enabled
- Store location configured (or manual location entry)
- Internet connection on display device

### Step 1: Enable Weather Integration

Weather integration is available on all BrandCast plans. No OAuth or external account setup required - the weather data is provided via BrandCast's API.

**Verify Availability:**
1. Log into BrandCast dashboard
2. Navigate to **Integrations** → **Weather**
3. Status should show "Available"

### Step 2: Create Weather Content Source

**From Dashboard:**

1. Navigate to **Content Library** → **Add Content Source**
2. Select **Weather** from integration types
3. Click **Configure Weather**

**Configuration Options:**

**Location:**
- Store code (automatic detection from store address)
- ZIP code (e.g., "10001")
- City name (e.g., "New York, NY")
- Full address (e.g., "123 Main St, New York, NY 10001")
- Coordinates (e.g., "40.7128, -74.0060")

**Forecast Type:**
- Current Conditions Only
- Hourly Forecast (24 hours)
- Daily Forecast (1-7 days)

**Display Mode:**
- Minimal (temperature, icon, brief conditions)
- Verbose (all available data: humidity, wind, UV index, etc.)

**Units:**
- Imperial (°F, mph, inches)
- Metric (°C, km/h, mm)

**Refresh Interval:**
- Every 1 minute (real-time monitoring)
- Every 5 minutes (default)
- Every 15 minutes
- Every 30 minutes (reduces API calls)
- Every 60 minutes (weather changes slowly)

### Step 3: Add to Layout

**Drag-and-Drop:**

1. Open layout editor
2. Create or select content area for weather
3. Drag **Weather** content source to area
4. Resize and position as needed

**Recommended Sizes:**

**Minimal Mode:**
- Small: 300x150 (corner widget)
- Medium: 400x200 (sidebar)
- Large: 600x300 (header/footer)

**Verbose Mode:**
- Medium: 500x400
- Large: 800x600
- Full Section: 1200x800

### Step 4: Configure Display Options

**Weather Display Settings:**

**Show Elements:**
- Temperature (always shown)
- Condition description
- Weather icon
- "Feels like" temperature
- Humidity percentage
- Wind speed and direction
- UV index
- Visibility
- Pressure
- Sunrise/sunset times

**Styling:**
- Font size for temperature
- Icon size
- Background color/transparency
- Text color
- Border style

**Forecast Display:**
- Number of hours (hourly: 6, 12, 24)
- Number of days (daily: 1, 3, 5, 7)
- Show high/low temperatures
- Show precipitation chance
- Compact vs. detailed view

## Configuration Options

### Location Detection

**Automatic Detection (Recommended):**
```javascript
{
  "location": "STORE_CODE",
  "autoDetect": true
}
```
Weather automatically uses store address from account settings.

**Manual Entry:**
```javascript
{
  "location": "10001",  // ZIP code
  "autoDetect": false
}
```

**Examples:**
- ZIP: `"10001"`
- City: `"New York, NY"`
- Address: `"Times Square, New York, NY"`
- Coords: `"40.7128,-74.0060"`

### Forecast Types

**Current Conditions Only:**
```javascript
{
  "forecastType": "current",
  "displayMode": "minimal"
}
```
Shows: Temperature, icon, condition description

**Hourly Forecast:**
```javascript
{
  "forecastType": "hourly",
  "hours": 24,
  "displayMode": "minimal"
}
```
Shows: Next 24 hours with temps and icons

**Daily Forecast:**
```javascript
{
  "forecastType": "daily",
  "forecastDays": 7,
  "displayMode": "verbose"
}
```
Shows: 7-day forecast with high/low, conditions, precipitation

### Display Modes

**Minimal Mode:**
```javascript
{
  "displayMode": "minimal",
  "showDetails": false
}
```

**Data Included:**
- Temperature
- Weather icon
- Brief condition description
- High/low (if daily forecast)

**Best For:**
- Corner widgets
- Sidebar displays
- Quick glances
- Space-constrained layouts

**Verbose Mode:**
```javascript
{
  "displayMode": "verbose",
  "showDetails": true
}
```

**Data Included:**
- All minimal mode data plus:
- "Feels like" temperature
- Humidity percentage
- Wind speed and direction
- UV index
- Visibility
- Atmospheric pressure
- Sunrise/sunset times (daily forecast)
- Precipitation totals

**Best For:**
- Dedicated weather sections
- Large displays
- Detailed information needs
- Weather-dependent businesses

### Units

**Imperial (US):**
```javascript
{
  "units": "imperial"
}
```
- Temperature: Fahrenheit (°F)
- Wind: Miles per hour (mph)
- Precipitation: Inches
- Visibility: Miles
- Pressure: Millibars (mb)

**Metric (International):**
```javascript
{
  "units": "metric"
}
```
- Temperature: Celsius (°C)
- Wind: Kilometers per hour (km/h)
- Precipitation: Millimeters (mm)
- Visibility: Kilometers
- Pressure: Millibars (mb)

### Refresh Intervals

**Recommended Settings:**

**Real-Time Monitoring (1-5 min):**
- Use case: Severe weather monitoring
- API calls: High (12-60/hour)
- Cost: Higher usage

**Standard Updates (15-30 min):**
- Use case: Normal business displays
- API calls: Moderate (2-4/hour)
- Cost: Balanced

**Infrequent Updates (60 min):**
- Use case: General information
- API calls: Low (1/hour)
- Cost: Minimal

**Balance Cost vs. Freshness:**
```
1 min:   1440 calls/day (real-time)
5 min:   288 calls/day
15 min:  96 calls/day
30 min:  48 calls/day (recommended)
60 min:  24 calls/day (minimal)
```

## Weather Data Reference

### Current Conditions

**Available Data:**

```json
{
  "temperature": 72,
  "feelsLike": 70,
  "humidity": 65,
  "windSpeed": 8,
  "windDirection": "NE",
  "description": "Partly Cloudy",
  "icon": "02d",
  "uvIndex": 6,
  "visibility": 10,
  "pressure": 1013
}
```

**Data Definitions:**
- **Temperature**: Actual air temperature
- **Feels Like**: Apparent temperature (wind chill / heat index)
- **Humidity**: Relative humidity percentage
- **Wind Speed**: Wind speed in mph or km/h
- **Wind Direction**: Cardinal direction (N, NE, E, etc.)
- **Description**: Human-readable conditions
- **Icon**: Weather icon code (see Icon Reference)
- **UV Index**: UV radiation level (0-11+)
- **Visibility**: Distance visible (miles or km)
- **Pressure**: Atmospheric pressure (mb)

### Hourly Forecast

**Available Data:**

```json
{
  "hourly": [
    {
      "time": "2025-10-14T15:00:00Z",
      "temperature": 73,
      "description": "Sunny",
      "icon": "01d",
      "precipitation": 0,
      "humidity": 60,
      "windSpeed": 10
    }
  ]
}
```

**24-Hour Coverage:**
- Hourly updates for next 24 hours
- Precipitation probability
- Temperature trends
- Condition changes

### Daily Forecast

**Available Data:**

```json
{
  "daily": [
    {
      "date": "2025-10-14",
      "high": 78,
      "low": 62,
      "description": "Partly Cloudy",
      "icon": "02d",
      "precipitation": 5,
      "humidity": 65,
      "windSpeed": 12,
      "sunrise": "6:30 AM",
      "sunset": "7:45 PM"
    }
  ]
}
```

**1-7 Day Coverage:**
- High and low temperatures
- Daily precipitation totals
- Average conditions
- Sunrise/sunset times

### Weather Icons

**Icon Mapping:**

- `01d` - Clear sky
- `02d` - Few clouds (partly cloudy)
- `03d` - Scattered clouds
- `04d` - Broken clouds (overcast)
- `09d` - Shower rain
- `10d` - Rain
- `11d` - Thunderstorm
- `13d` - Snow
- `50d` - Mist/fog

**Night Variants:**
Icons ending in `n` represent nighttime conditions (e.g., `01n` = clear night)

## Layout Examples

### Minimal Corner Widget

**Configuration:**
```javascript
{
  "location": "STORE_CODE",
  "forecastType": "current",
  "displayMode": "minimal",
  "units": "imperial",
  "refreshInterval": 30
}
```

**Layout Size:** 300x150 (top-right corner)

**Display:**
```
┌─────────────┐
│   ☀️ 72°F   │
│   Sunny     │
└─────────────┘
```

### Sidebar Weather Panel

**Configuration:**
```javascript
{
  "location": "New York, NY",
  "forecastType": "daily",
  "forecastDays": 3,
  "displayMode": "minimal",
  "units": "imperial",
  "refreshInterval": 30
}
```

**Layout Size:** 400x600 (right sidebar)

**Display:**
```
┌─────────────────┐
│   New York, NY  │
│                 │
│   ☀️ 72°F       │
│   Sunny         │
│                 │
│ Today:   78/62  │
│ Fri:     75/60  │
│ Sat:     71/58  │
└─────────────────┘
```

### Full Weather Section

**Configuration:**
```javascript
{
  "location": "10001",
  "forecastType": "daily",
  "forecastDays": 7,
  "displayMode": "verbose",
  "units": "imperial",
  "refreshInterval": 15
}
```

**Layout Size:** 1200x800 (full section)

**Display:**
```
┌──────────────────────────────────────────────┐
│ Weather for New York, NY                     │
│                                              │
│ Currently: ☀️ 72°F  Feels like: 70°F        │
│ Sunny                                        │
│                                              │
│ Humidity: 65%     Wind: NE 8 mph            │
│ UV Index: 6       Visibility: 10 mi         │
│                                              │
│ 7-Day Forecast:                              │
│ Today  ☀️  78/62  Sunny                      │
│ Fri    🌤️  75/60  Partly Cloudy             │
│ Sat    ☁️  71/58  Cloudy                     │
│ Sun    🌧️  68/55  Light Rain                │
│ Mon    ⛈️  65/52  Thunderstorms             │
│ Tue    🌤️  72/58  Partly Cloudy             │
│ Wed    ☀️  76/61  Sunny                      │
└──────────────────────────────────────────────┘
```

## Best Practices

### Location Configuration

**Use Automatic Detection:**
- Simplifies setup
- Ensures accuracy
- Updates if store moves
- Eliminates typos

**Manual Entry Tips:**
- Use ZIP codes for simplicity
- Include state for city names
- Test location before deploying

### Refresh Strategy

**Weather Change Speed:**
- Temperature: Changes slowly (30-60 min okay)
- Conditions: Change moderately (15-30 min)
- Severe weather: Need real-time (1-5 min)

**Recommended Intervals:**
```
Normal business:        30 minutes
Weather-sensitive:      15 minutes
Severe weather zones:   5 minutes
General information:    60 minutes
```

### Display Sizing

**Mobile/Small Displays:**
- Use minimal mode
- Current conditions only
- Large, readable fonts
- Simple icon

**Medium Displays:**
- Minimal or verbose
- 3-day forecast
- Include key details
- Balanced information

**Large Displays:**
- Verbose mode
- 7-day forecast
- All available data
- Rich visualizations

### Content Placement

**Corner Widget:**
- Top-right or top-left
- Non-intrusive
- Always visible
- Quick reference

**Sidebar:**
- Right or left sidebar
- More detail space
- Complements main content
- Consistent location

**Header/Footer:**
- Weather bar across top/bottom
- Compact horizontal format
- Multiple locations possible
- Always present

**Dedicated Section:**
- Full weather display
- Detailed forecasts
- Primary content
- Weather-focused businesses

## Troubleshooting

### Weather Not Displaying

**Symptoms:**
- Weather area blank
- "Loading" message stuck
- Error message shown

**Check:**

1. **Internet Connection:**
   - Verify display online
   - Test other integrations
   - Check network access

2. **Location Valid:**
   - Test location in Google Maps
   - Verify ZIP code correct
   - Check spelling of city names

3. **API Status:**
   - BrandCast status page
   - WeatherAPI.com status
   - Recent outages?

4. **Content Source Configuration:**
   - Weather source active
   - Location field filled
   - Forecast type selected

**Solutions:**
- Use automatic location detection
- Try alternative location format
- Increase refresh interval
- Check BrandCast status page

### Incorrect Location

**Symptoms:**
- Wrong city weather shown
- Temperature doesn't match local
- Unexpected conditions

**Causes:**
- ZIP code typo
- Ambiguous city name
- Store address incorrect
- Manual coordinates wrong

**Fix:**
1. Use automatic detection (store code)
2. Verify store address in settings
3. Use specific location (City, State)
4. Test location in mapping service

### Data Not Updating

**Symptoms:**
- Weather frozen in time
- Stale temperature
- Yesterday's forecast

**Check:**

1. **Refresh Interval:**
   - Too long? (60+ min)
   - Set to 15-30 minutes

2. **Display Connection:**
   - Display online?
   - Recent heartbeat?
   - Network stable?

3. **API Limits:**
   - Too many displays?
   - Refresh too frequent?
   - Check usage limits

**Solutions:**
- Reduce refresh interval to 15 min
- Verify display connectivity
- Check for API rate limiting

### Performance Issues

**Symptoms:**
- Slow weather updates
- Delayed rendering
- Display lag

**Causes:**
- Network latency
- Too frequent refreshes
- Large forecast data
- Slow API responses

**Optimization:**
```
1. Increase refresh interval to 30-60 min
2. Use minimal mode instead of verbose
3. Reduce forecast days (3 instead of 7)
4. Check network quality
```

## Advanced Features

### Multiple Locations

**Display Weather for Multiple Stores:**

Create separate weather content sources:

```javascript
// Store 1 Weather
{
  "location": "10001",
  "name": "NYC Store Weather"
}

// Store 2 Weather
{
  "location": "90210",
  "name": "LA Store Weather"
}
```

**Layout:** Split screen showing multiple cities

### Weather-Based Content

**Dynamic Content Switching:**

Use schedules with weather conditions:

```
If temperature > 80°F:
  Show: Air conditioning promotion
Else if temperature < 40°F:
  Show: Hot coffee special
```

**Note:** Conditional weather logic coming soon

### Fallback Data

**Automatic Fallback:**

If WeatherAPI.com unavailable:
- Realistic seasonal temperatures generated
- Appropriate weather descriptions
- Time-of-day adjustments
- User sees plausible data instead of error

**Fallback Indicator:**
- Small icon shows data is estimated
- Refreshes when API available
- Seamless user experience

## API Reference

### Get Weather Content

```
GET /api/weather/content/:contentSourceId
```

**Response:**
```json
{
  "data": {
    "location": "New York, NY",
    "current": {
      "temperature": 72,
      "feelsLike": 70,
      "humidity": 65,
      "windSpeed": 8,
      "windDirection": "NE",
      "description": "Partly Cloudy",
      "icon": "02d",
      "uvIndex": 6,
      "visibility": 10,
      "pressure": 1013
    },
    "daily": [
      {
        "date": "2025-10-14",
        "high": 78,
        "low": 62,
        "description": "Partly Cloudy",
        "icon": "02d",
        "precipitation": 5,
        "humidity": 65,
        "windSpeed": 12,
        "sunrise": "6:30 AM",
        "sunset": "7:45 PM"
      }
    ]
  },
  "lastUpdated": "2025-10-14T14:35:00Z",
  "nextUpdate": "2025-10-14T15:05:00Z"
}
```

### Create Weather Content Source

```
POST /api/weather
```

**Request Body:**
```json
{
  "name": "Store Weather",
  "description": "Weather display for main store",
  "storeId": "store_abc123",
  "weatherConfig": {
    "location": "STORE_CODE",
    "forecastType": "daily",
    "forecastDays": 7,
    "displayMode": "verbose",
    "units": "imperial",
    "refreshInterval": 30,
    "showDetails": true
  },
  "isActive": true
}
```

## Next Steps

- **[Content Types](../features/content-types.md)** - Learn about all content types
- **[Layouts](../features/layouts.md)** - Design layouts with weather
- **[Schedules](../workflows/schedules.md)** - Time-based weather display
- **[Troubleshooting](../troubleshooting/content-problems.md)** - Fix content issues
