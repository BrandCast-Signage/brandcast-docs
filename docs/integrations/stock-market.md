---
title: Stock Market Ticker
---

# Stock Market Integration

Display real-time stock quotes, tickers, and charts on your BrandCast displays.

## What is Stock Market Integration?

The Stock Market integration connects to financial data providers to display live stock quotes, market indices, and price charts. Perfect for financial services, corporate offices, or any business that wants to show market data.

## Use Cases

**Financial Services:**
- Wealth management offices
- Bank lobbies
- Investment advisory firms
- Trading floors
- Financial planning offices

**Corporate Offices:**
- Executive briefing rooms
- Trading company displays
- Investor relations
- C-suite offices
- Board rooms

**Retail Locations:**
- Financial service retail branches
- Cryptocurrency exchanges
- Gold/precious metals dealers
- Investment service kiosks

**Educational:**
- Business schools
- Finance departments
- Student centers
- Career services

## Key Features

**Real-Time Data:**
- Live stock quotes updated every minute
- Major market indices (DOW, NASDAQ, S&P 500)
- Individual stock tracking
- Percentage change and dollar change
- Volume data

**Multiple Display Modes:**
- **Ticker**: Scrolling ticker tape style
- **Chart**: Price charts with historical data
- **Grid**: Multi-stock grid view
- **Fullscreen**: Single stock detailed view

**Watchlists:**
- Create multiple watchlists
- Track up to 50 symbols per watchlist
- Organize by sector, portfolio, or theme
- Switch between watchlists on schedule

**Customization:**
- Color coding (green/red for gains/losses)
- Update frequency (1-60 minutes)
- Display duration per stock
- Show/hide specific data points

## Setting Up Stock Market Integration

### Step 1: Create Watchlist

1. Log into BrandCast dashboard
2. Navigate to **Content Sources** → **Integrations**
3. Click **Add Integration**
4. Select **Stock Market**
5. Click **Create Watchlist**

### Step 2: Add Stock Symbols

**Add Individual Symbols:**

1. Enter stock symbol (e.g., "AAPL", "GOOGL", "MSFT")
2. System verifies symbol exists
3. Click **Add**
4. Repeat for additional symbols

**Common Symbols:**
- **AAPL**: Apple Inc.
- **GOOGL**: Alphabet (Google)
- **MSFT**: Microsoft
- **AMZN**: Amazon
- **TSLA**: Tesla
- **META**: Meta (Facebook)
- **NVDA**: NVIDIA
- **^DJI**: Dow Jones Industrial Average
- **^IXIC**: NASDAQ Composite
- **^GSPC**: S&P 500

**Tips:**
- Use correct symbol format (check financial websites)
- Add "^" prefix for indices (^DJI, ^IXIC, ^GSPC)
- Verify symbols before saving
- Limit to 20-30 symbols for best performance

### Step 3: Configure Settings

**Required Fields:**
- **Watchlist Name**: Descriptive name (e.g., "Tech Stocks")
- **Symbols**: Comma-separated list or add individually

**Optional Fields:**
- **Display Mode**: Ticker, Chart, Grid, Fullscreen (default: Ticker)
- **Update Interval**: 1-60 minutes (default: 5 minutes)
- **Market Hours Only**: Only update during trading hours
- **After Hours**: Include pre-market and after-hours data

**Advanced Settings:**
- **Color Scheme**: Green/red, blue/red, custom
- **Price Format**: Decimal places (2-4)
- **Show Volume**: Display trading volume
- **Show Market Cap**: Display company market capitalization
- **Chart Period**: 1 day, 1 week, 1 month, 3 months, 1 year

### Step 4: Add to Layout

1. Open **Layout Editor**
2. Create or edit layout
3. Add content area
4. Set **Content Type** to "Stock Ticker" or "Stock Chart"
5. Select watchlist from **Content Source**
6. Configure display options
7. Save layout

## Display Modes

### Ticker Mode

**Appearance:**
- Horizontal scrolling ticker
- Shows symbol, price, change, % change
- Continuous scroll through watchlist
- Classic financial ticker look

**Configuration:**
```
Display Mode: Ticker
Scroll Speed: Medium (adjustable)
Direction: Left-to-right or right-to-left
Height: 60-100px recommended
Background: Dark (for LED effect) or brand colors
```

**Best For:**
- Bottom or top screen ticker
- Showing many symbols quickly
- Traditional financial aesthetic
- High visibility

**Example Layout:**
- Position: Bottom 80px
- Shows: AAPL $150.25 ▲$2.50 (+1.69%)
- Scrolls continuously
- Updates every 5 minutes

### Chart Mode

**Appearance:**
- Line or candlestick charts
- Historical price data
- Time range selection
- One stock at a time or grid of charts

**Configuration:**
```
Display Mode: Chart
Chart Type: Line, Candlestick, or Area
Time Range: 1 day, 1 week, 1 month, etc.
Duration per Stock: 10-30 seconds
Transition: Fade between charts
```

**Best For:**
- Detailed price analysis
- Showing trends
- Single stock focus
- Financial advisors

**Chart Types:**
- **Line Chart**: Simple, clean price line
- **Candlestick**: OHLC (Open, High, Low, Close)
- **Area Chart**: Filled line chart
- **Bar Chart**: OHLC bars

### Grid Mode

**Appearance:**
- Multiple stocks in grid layout
- 2x2, 3x3, or 4x4 grid
- Each cell shows symbol and key data
- Static display (updates periodically)

**Configuration:**
```
Display Mode: Grid
Grid Size: 2x2, 3x3, 4x4, etc.
Cells: Symbol, price, change, mini chart
Update: Every 5 minutes
Colors: Green for up, red for down
```

**Best For:**
- Viewing multiple stocks simultaneously
- Portfolio overview
- Comparison displays
- Large displays

**Example 3x3 Grid:**
```
┌─────────┬─────────┬─────────┐
│ AAPL    │ GOOGL   │ MSFT    │
│ $150.25 │ $142.50 │ $375.80 │
│ ▲ +1.69%│ ▼ -0.45%│ ▲ +2.10%│
├─────────┼─────────┼─────────┤
│ AMZN    │ TSLA    │ META    │
│ $135.40 │ $245.60 │ $325.75 │
│ ▲ +0.80%│ ▲ +3.25%│ ▼ -1.20%│
├─────────┼─────────┼─────────┤
│ NVDA    │ ^DJI    │ ^GSPC   │
│ $485.20 │ 34250   │ 4420    │
│ ▲ +5.60%│ ▲ +0.35%│ ▲ +0.50%│
└─────────┴─────────┴─────────┘
```

### Fullscreen Mode

**Appearance:**
- Large, detailed single stock view
- Price, change, chart, volume, statistics
- Rotates through watchlist
- Maximum information density

**Configuration:**
```
Display Mode: Fullscreen
Duration per Stock: 15-30 seconds
Show: Price, change, chart, volume, high/low, market cap
Chart Period: 1 day intraday
Transition: Slide or fade
```

**Best For:**
- Dedicated stock display
- Single portfolio focus
- Detailed analysis
- Meeting rooms

## Watchlist Management

### Creating Multiple Watchlists

**Use Cases:**
- **Tech Portfolio**: AAPL, GOOGL, MSFT, NVDA, AMD
- **Market Indices**: ^DJI, ^IXIC, ^GSPC, ^VIX
- **Energy Sector**: XOM, CVX, COP, SLB
- **Client Portfolio**: Custom client holdings
- **Crypto**: Bitcoin, Ethereum trackers (BTC-USD, ETH-USD)

**Setup:**
1. Create watchlist for each category
2. Add relevant symbols
3. Name descriptively
4. Assign to appropriate displays or schedules

### Organizing Symbols

**By Priority:**
- Most important symbols first
- They appear first in ticker rotation
- Higher visibility

**By Sector:**
- Group related stocks
- Technology, Finance, Healthcare, Energy, etc.
- Easier portfolio management

**By Performance:**
- Top gainers watchlist
- Top losers watchlist
- Most active watchlist
- Update periodically

### Editing Watchlists

**Add/Remove Symbols:**
1. Edit watchlist in BrandCast
2. Add new symbols
3. Remove outdated symbols
4. Reorder for priority
5. Save changes

**Updates:**
- Changes reflect immediately
- No display restart required
- Historical data preserved

## Market Hours and Data

### Trading Hours

**US Markets:**
- **Pre-Market**: 4:00 AM - 9:30 AM ET
- **Regular Hours**: 9:30 AM - 4:00 PM ET
- **After-Hours**: 4:00 PM - 8:00 PM ET

**Market Closed:**
- Weekends
- Market holidays
- Display shows last closing prices

**Options:**
- **Market Hours Only**: Updates stop when market closes
- **24/7 Updates**: Include pre/after-hours and international
- **Show Market Status**: "Market Open" / "Market Closed" indicator

### Data Delay

**Real-Time Data:**
- Updates every 1-5 minutes during market hours
- Slight delay (typically 1-2 minutes)
- Sufficient for most use cases

**End-of-Day Data:**
- Free tier: 15-minute delay
- Premium tier: Real-time (1-minute delay)

### International Markets

**Supported Exchanges:**
- NYSE: New York Stock Exchange
- NASDAQ: NASDAQ Stock Market
- LSE: London Stock Exchange (use .L suffix)
- TSE: Tokyo Stock Exchange (use .T suffix)
- And more (check symbol format)

**Symbol Formats:**
- US Stocks: AAPL, GOOGL, MSFT
- London: BP.L, HSBA.L
- Toronto: RY.TO, TD.TO
- Frankfurt: DAI.DE, VOW.DE

## Best Practices

### Watchlist Size

**Optimal:**
- **Ticker Mode**: 15-30 symbols
- **Chart Mode**: 5-15 symbols
- **Grid Mode**: 4-16 symbols (match grid size)
- **Fullscreen**: 5-10 symbols

**Too Many Symbols:**
- Ticker scrolls too fast
- Individual stocks get less airtime
- Harder to track specific symbols
- Increase display time or create multiple watchlists

### Update Frequency

**Real-Time Monitoring:**
- Update interval: 1-5 minutes
- For active traders, volatile stocks
- Higher bandwidth usage

**General Awareness:**
- Update interval: 10-15 minutes
- For casual monitoring
- Lower bandwidth usage

**Static Display:**
- Update interval: 30-60 minutes
- For reference displays
- Minimal bandwidth

### Visual Design

**Readability:**
- Large font sizes (minimum 18pt for ticker)
- High contrast colors
- Avoid busy backgrounds
- Test from viewing distance

**Color Coding:**
- Green for gains (▲)
- Red for losses (▼)
- White/gray for unchanged
- Consistent across displays

**Professional Appearance:**
- Clean, minimal design
- Financial industry standard colors
- Brand integration subtle
- Focus on data clarity

### Content Strategy

**Display Placement:**
- **Reception Areas**: Market indices + company stock
- **Trading Floors**: Detailed charts + multiple watchlists
- **Executive Offices**: Portfolio stocks + major indices
- **Client-Facing**: Relevant sector stocks

**Combining with Other Content:**
- Ticker at bottom + main content above
- Split screen: charts + news feeds
- Rotating: stocks → news → company info

## Troubleshooting

### Prices Not Updating

**Symptoms:**
- Stale prices showing
- Last update time is old
- "Unable to fetch data" message

**Solutions:**

1. **Check Market Hours**:
   - US markets: 9:30 AM - 4:00 PM ET weekdays
   - Verify market is open
   - Check for market holidays

2. **Verify Symbols**:
   - Ensure symbols are valid
   - Check for typos
   - Use correct format (^DJI for indices)

3. **Check Update Interval**:
   - May be set too long
   - Reduce to 5 minutes
   - Force manual refresh

4. **Test Connection**:
   - Edit watchlist
   - Click "Test Connection"
   - Review error message

5. **Check API Limits**:
   - Free tier: 5 requests/minute
   - May hit rate limit with too many symbols
   - Reduce watchlist size or increase interval

### Symbol Not Found

**Symptoms:**
- "Symbol not found" error
- Stock doesn't appear in watchlist
- Invalid symbol message

**Solutions:**

1. **Verify Symbol**:
   - Check on financial websites (Yahoo Finance, Google Finance)
   - Ensure correct spelling
   - Use proper format

2. **Check Exchange**:
   - Add exchange suffix if needed (.L, .TO, .DE)
   - US stocks don't need suffix
   - Indices need ^ prefix

3. **Symbol Changes**:
   - Company may have changed ticker
   - Mergers/acquisitions
   - Delisted stocks
   - Update to new symbol

### Chart Not Displaying

**Symptoms:**
- Blank chart area
- "No data available" message
- Chart fails to load

**Solutions:**

1. **Check Time Range**:
   - Stock may not have history for selected range
   - Try shorter time range
   - New listings may lack historical data

2. **Verify Symbol**:
   - Ensure symbol valid and active
   - Check if stock is suspended/halted
   - Test with known symbol (e.g., AAPL)

3. **Check Display Size**:
   - Content area may be too small
   - Minimum: 400x300 pixels recommended
   - Increase content area size

4. **Review Chart Settings**:
   - Chart type supported for symbol
   - Time range available
   - Data points sufficient

### Slow Performance

**Symptoms:**
- Ticker stutters or lags
- Charts load slowly
- Updates delayed

**Solutions:**

1. **Reduce Watchlist Size**:
   - Limit to 20-30 symbols
   - Split into multiple watchlists
   - Remove low-priority symbols

2. **Increase Update Interval**:
   - Change from 1 min to 5 min
   - Reduces API calls
   - Improves performance

3. **Simplify Display**:
   - Use ticker instead of charts
   - Reduce chart complexity
   - Show fewer data points

4. **Check Internet Speed**:
   - Minimum: 5 Mbps recommended
   - Test connection at display location
   - Upgrade if needed

## Advanced Features

### Custom Calculations

**Portfolio Value:**
- Track total portfolio value
- Calculate daily P/L
- Show percentage performance
- *Available in Professional plan*

**Watchlist Statistics:**
- Average gain/loss
- Top performers
- Sector breakdown
- Market correlation

### Alerts and Notifications

**Price Alerts:**
- Notify when stock hits target price
- Percentage change thresholds
- Volume spikes
- *Available in Professional plan*

**Integration:**
- Send to Slack, email, SMS
- Real-time notifications
- Custom alert conditions

### Historical Data Export

**Export Features:**
- Download historical prices
- CSV format
- Custom date ranges
- Watchlist snapshots

**Use Cases:**
- Performance analysis
- Client reporting
- Compliance records
- Portfolio tracking

## Compliance and Legal

### Data Usage

**Terms:**
- Data for display purposes only
- Not for trading decisions
- Follow data provider terms
- Check licensing requirements

**Restrictions:**
- No redistribution
- Internal use only
- Not for resale
- Comply with exchange rules

### Disclaimers

**Required:**
- "Data delayed 15 minutes" (if applicable)
- "For informational purposes only"
- "Not investment advice"
- Data source attribution

**Placement:**
- Footer of display
- Small but readable text
- Always visible
- Meet regulatory requirements

## Next Steps

- **[RSS Feeds](./rss-feeds.md)** - Add financial news feeds
- **[Layouts](../features/layouts.md)** - Design layouts with stock data
- **[Schedules](../workflows/schedules.md)** - Schedule different watchlists
- **[Content Library](../features/content-library.md)** - Organize financial content
- **[Troubleshooting](../troubleshooting/integration-problems.md)** - Fix integration issues
