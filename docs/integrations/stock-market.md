---
title: Stock Market
---

# Stock Market Integration

Display live stock prices, market indices, and financial charts on your BrandCast displays.

## Overview

The Stock Market integration provides real-time (or delayed) financial data. By creating **Stock Content Sources**, you can build customized tickers or charts for specific sectors (e.g., "Tech Stocks", "Competitor Watchlist") and reuse them across your network.

**Key Features:**
- **Market Data:** Support for major indices (Dow, Nasdaq, S&P 500) and individual equities.
- **Visualizations:** Scrolling tickers or detailed charts.
- **Reusability:** Define a watchlist once, display it anywhere.

## 1. Connect the Integration

The Stock Market integration is native to BrandCast. No external brokerage account is required.

## 2. Create a Content Source

A **Content Source** defines *which* stocks to track.

1.  Navigate to **Integrations** > **Stock Market**.
2.  Click **Create New Source**.
3.  **Name:** Give it a descriptive name (e.g., "Tech Sector Watchlist").
4.  **Symbols:** Enter stock symbols (e.g., AAPL, MSFT, GOOGL).
5.  **Market:** Select the exchange (e.g., US Markets).

**Why create Content Sources?**
You might create a "Competitor Watchlist" source. You can then add this single source to the "Executive Dashboard Layout" as a detailed chart, and to the "Lobby Layout" as a simple scrolling ticker. The underlying list of symbols is managed in one place.

## 3. Content Source Configuration (Styles)

Customize the visualization for this source.

*   **Display Style:**
    *   **Ticker:** Horizontal scrolling bar (Symbol, Price, Change).
    *   **List:** Vertical list of quotes.
    *   **Chart:** Graphical view of price history (1D, 5D, 1M).
*   **Color Coding:** Green for gain, Red for loss (customizable).
*   **Speed:** Scroll speed for tickers.

## 4. Add to Layout

1.  Open the **Layout Editor**.
2.  Add a **Stock Market** area.
3.  Select your saved source (e.g., "Tech Sector Watchlist").
4.  **Save** the layout.

## Troubleshooting

*   **Delayed Data:** Most data is delayed by 15 minutes per exchange regulations.
*   **Missing Symbol:** Verify the ticker symbol is correct for the selected exchange.

