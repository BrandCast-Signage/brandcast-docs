---
title: Google Sheets
---

# Google Sheets Integration

Display your Google Sheets spreadsheets directly on BrandCast displays with automatic sync and refresh. Perfect for dashboards, pricing lists, schedules, leaderboards, and any data that updates frequently.

## What is Google Sheets Integration?

The Google Sheets integration allows you to display spreadsheet data from Google Drive on your digital signage. Sheets automatically update when you edit them, making it ideal for live data like sales numbers, inventory levels, schedules, and metrics.

## Use Cases

**Retail Stores:**
- Price lists and product catalogs
- Inventory availability
- Sales leaderboards
- Daily/weekly goals tracker
- Staff schedules
- Commission rankings
- Promotional pricing

**Corporate Offices:**
- KPI dashboards
- Project status boards
- Team performance metrics
- Resource availability
- Meeting room schedules
- Employee directory
- Quarterly goals progress

**Restaurants:**
- Menu pricing boards
- Daily specials with prices
- Ingredient inventory
- Staff shift schedules
- Sales by item
- Wait time estimates
- Reservation schedule

**Real Estate:**
- Property listings with prices
- Open house schedules
- Agent performance metrics
- Market statistics
- Commission leaderboards
- Available properties
- Price trends

**Healthcare:**
- Wait time by department
- Staff on-duty schedule
- Room availability
- Appointment schedule
- Resource availability
- Department directory
- Service pricing

## Key Features

**Live Data Sync:**
- Changes in Google Sheets appear on displays within minutes
- Real-time data updates
- Edit from anywhere
- Automatic refresh

**Rich Formatting:**
- Tables with headers
- Colored cells and backgrounds
- Bold, italic text
- Number formatting (currency, percentages)
- Cell borders and styling

**Flexible Display:**
- Show specific sheet tabs
- Display entire table or range
- Optional title and headers
- Auto-scaling to fit screen
- Sticky column headers

**Powerful Capabilities:**
- Formulas update automatically
- Charts and calculations
- Conditional formatting
- Data validation
- Integration with other Google tools

## Setting Up Google Sheets Integration

### Step 1: Prepare Your Spreadsheet

1. Create or open spreadsheet in Google Sheets
2. Format for digital signage:
   - **Clear Headers**: First row with bold column names
   - **Readable Data**: Clean, well-formatted cells
   - **Appropriate Size**: Not too many columns (5-8 max for readability)
   - **Good Contrast**: Dark text on light background (or vice versa)
   - **Simple Layout**: Avoid merged cells or complex structures
3. Name your sheet tab descriptively
4. Save and note the spreadsheet URL

**Tips:**
- Test visibility from 10-15 feet away
- Use larger fonts (12-14pt minimum)
- Bold headers for emphasis
- Limit decimal places for numbers
- Keep row count manageable (10-20 visible rows ideal)

### Step 2: Share Your Spreadsheet

**For Public Display (Recommended):**

1. Click **Share** in Google Sheets
2. Click **Change** under "General access"
3. Select **Anyone with the link**
4. Set permissions to **Viewer**
5. Click **Done**
6. Copy the sharing link

**For Private Display:**

1. Share with specific email addresses
2. Grant Viewer access
3. Display device must authenticate with Google account

### Step 3: Add to BrandCast

1. Log into BrandCast dashboard
2. Navigate to **Content Sources** → **Integrations**
3. Click **Add Integration**
4. Select **Google Sheets**
5. Paste your spreadsheet URL
6. Configure settings:

**Required Fields:**
- **Spreadsheet URL**: Full Google Sheets URL
- **Name**: Descriptive name (e.g., "Price List")

**Optional Fields:**
- **Sheet Name**: Specific tab to display (leave blank for first sheet)
- **Show Title**: Display spreadsheet title (default: yes)
- **Refresh Interval**: How often to check for updates (default: 5 minutes)
- **Data Range**: Specific cell range (e.g., A1:E20) or leave blank for all

7. Click **Test Connection** to verify
8. Click **Save**

### Step 4: Add to Layout

1. Open **Layout Editor**
2. Create or edit a layout
3. Add content area to canvas
4. Set **Content Type** to "Google Sheets"
5. Select your Google Sheets spreadsheet from **Content Source**
6. Position and size the area
7. Save layout
8. Assign layout to display

## Configuration Options

### Sheet Selection

**Show Specific Sheet:**
- Enter exact tab name
- Displays only that sheet
- Good for multi-sheet workbooks
- Updates when sheet name changes

**Show First Sheet (Default):**
- Leave sheet name blank
- Always shows leftmost tab
- Simpler setup
- Good for single-sheet workbooks

### Data Range

**Full Sheet (Default):**
- Leave blank
- Shows all data
- Auto-adjusts to content

**Specific Range:**
- Enter cell range (e.g., "A1:F25")
- Shows only specified cells
- Good for large sheets
- Focuses on relevant data

**Examples:**
- `A1:E20` - First 5 columns, 20 rows
- `B2:D50` - Columns B-D, skip header
- `Sheet2!A1:Z100` - Entire Sheet2 data

### Title Display

**Show Title (Recommended):**
- Displays spreadsheet name
- Shows sheet tab name
- Identifies data source
- Professional appearance

**Hide Title:**
- More space for data
- Cleaner look
- Good for branded displays
- When title is obvious

### Refresh Interval

How often to check for spreadsheet updates:

- **1 minute**: Live data (stock prices, metrics)
- **5 minutes**: Standard (recommended)
- **15 minutes**: Moderate update frequency
- **30+ minutes**: Static or infrequently changing data

**Considerations:**
- Shorter intervals = more bandwidth
- Longer intervals = delayed updates
- Match to data update frequency

## Layout Integration

### Full-Screen Table

**Use Case:** Dedicated data display

**Configuration:**
```
Layout: 1920x1080 (16:9)
Content Area: Full screen (0,0 to 1920,1080)
Content Type: Google Sheets
Show Title: Yes
Data Range: All
```

**Best For:**
- Price lists
- Schedules
- Inventory tables
- Leaderboards
- Dashboards

### Split Screen with Context

**Use Case:** Data + supplementary content

**Configuration:**
```
Main Area (60%): Google Sheets table
Side Panel (40%): Charts, images, or related content
```

**Example Layout:**
- Table: 1152x1080 (left 60%)
- Context: 768x1080 (right 40%)

**Best For:**
- Sales data + product images
- Schedule + announcements
- Metrics + goals
- Pricing + promotions

### Dashboard Layout

**Use Case:** Multiple data sources

**Configuration:**
```
Top Half: Google Sheets metrics table
Bottom Left: Chart or graph
Bottom Right: Text updates or images
```

**Best For:**
- KPI dashboards
- Performance tracking
- Multi-metric displays
- Executive summaries

## Best Practices

### Spreadsheet Design

**Table Structure:**
- Bold header row
- Consistent column widths
- Clear column names
- Sorted data (by relevance)
- No empty rows in middle
- Freeze header row

**Data Formatting:**
- **Numbers**: Right-aligned
- **Text**: Left-aligned
- **Currency**: $1,234.56 format
- **Percentages**: 95.3% format
- **Dates**: Short format (MM/DD/YYYY)
- **Decimals**: Limit to 1-2 places

**Color Coding:**
- Use sparingly
- High contrast
- Consistent meaning
- Colorblind-friendly
- Headers can be colored
- Highlight important rows

**Column Width:**
- Wide enough for content
- Not excessively wide
- Consistent across rows
- Auto-size before sharing
- Test on actual display

### Content Strategy

**Data Selection:**
- Show only relevant data
- Top 10-20 items
- Filter unnecessary columns
- Hide technical/internal data
- Focus on actionable information

**Update Frequency:**
- **Real-time**: Every 1-5 minutes
- **Hourly**: Every 15-30 minutes
- **Daily**: Every 1-2 hours
- **Weekly**: Every 4-6 hours

**Data Accuracy:**
- Validate formulas regularly
- Check data sources
- Review before publishing
- Test calculations
- Monitor for errors

### Performance Optimization

**Keep Sheets Lightweight:**
- Limit to 100-200 rows visible
- Remove unnecessary columns
- Avoid complex formulas in displayed range
- Use simple formatting
- Remove hidden sheets (if possible)

**Formula Optimization:**
- Calculations happen in Google Sheets
- Display shows results only
- Heavy formulas OK (don't slow display)
- Use named ranges
- Avoid volatile functions (NOW, RAND)

**Multiple Displays:**
- Reuse sheets across displays
- Create location-specific sheets when needed
- Centralize master data
- Use templates for consistency

## Updating Spreadsheets

### Making Changes

1. Open spreadsheet in Google Sheets
2. Make edits:
   - Update cell values
   - Add or remove rows
   - Change formatting
   - Update formulas
3. Changes save automatically
4. Display updates within 5-10 minutes

**No Action Needed in BrandCast:**
- Spreadsheets update automatically
- No re-upload required
- No content source changes needed

### Version Control

**Google Sheets Features:**
- **Version History**: File → Version history
- **Restore Previous**: Revert to earlier versions
- **Named Versions**: Mark important versions
- **See Changes**: View edit history

**Best Practices:**
- Name versions before major changes
- Test formulas before deploying
- Keep backup copy of critical sheets
- Review version history regularly
- Document major changes

### Collaboration Workflow

**Multiple Editors:**
1. Share sheet with team
2. Assign editing roles
3. Use cell comments for notes
4. Protect critical ranges
5. Monitor display after updates

**Protection Settings:**
- Protect header rows
- Lock formula cells
- Restrict editing to specific ranges
- Prevent accidental changes

## Common Use Cases and Examples

### Price List

**Setup:**
```
Column A: Product Name
Column B: SKU/Item Number
Column C: Price
Column D: Availability (In Stock/Out of Stock)
Column E: Last Updated
```

**Formatting:**
- Bold headers
- Currency format for prices
- Color code availability (green/red)
- Sort by product name or category

### Sales Leaderboard

**Setup:**
```
Column A: Rank (1, 2, 3...)
Column B: Employee Name
Column C: Sales This Week ($)
Column D: Sales This Month ($)
Column E: % of Goal
```

**Formatting:**
- Sort by sales (descending)
- Highlight top 3 performers
- Color code goal achievement
- Update automatically with formulas

### Staff Schedule

**Setup:**
```
Column A: Time Slot
Column B: Monday
Column C: Tuesday
Column D: Wednesday
Column E: Thursday
Column F: Friday
```

**Formatting:**
- Bold time slots
- Color code by shift type
- Clear, readable names
- Update weekly

### Inventory Availability

**Setup:**
```
Column A: Product Name
Column B: Category
Column C: Quantity in Stock
Column D: Status (Low/OK/High)
Column E: Last Restocked
```

**Formatting:**
- Conditional formatting for stock levels
- Red = Low, Yellow = OK, Green = High
- Sort by status or category
- Auto-calculate from inventory system

### KPI Dashboard

**Setup:**
```
Column A: Metric Name
Column B: Current Value
Column C: Goal
Column D: % of Goal
Column E: Trend (↑ ↓ →)
```

**Formatting:**
- Large fonts for numbers
- Color code performance
- Use symbols for trends
- Bold metric names

## Troubleshooting

### Spreadsheet Not Displaying

**Symptoms:**
- Blank screen where table should be
- Error message on display
- Content area shows loading indefinitely

**Solutions:**

1. **Check Spreadsheet URL**:
   - Paste URL in browser
   - Verify spreadsheet loads
   - Ensure URL is correct format

2. **Verify Sharing Permissions**:
   - Must be "Anyone with link" can view
   - Or display device authenticated
   - Check Google Drive sharing settings

3. **Test Connection**:
   - Edit content source in BrandCast
   - Click "Test Connection"
   - Review error message if failed

4. **Verify Sheet Name**:
   - Check exact tab name (case-sensitive)
   - Must match exactly
   - Leave blank to show first sheet

5. **Check Data Range**:
   - Ensure range is valid (e.g., A1:E20)
   - Must contain data
   - Remove if showing full sheet

### Data Not Updating

**Symptoms:**
- Old data still showing
- Recent changes not appearing
- Display shows outdated numbers

**Solutions:**

1. **Check Refresh Interval**:
   - May be set too long
   - Reduce to 5 minutes
   - Force manual refresh

2. **Verify Changes Saved**:
   - Open spreadsheet in Google Sheets
   - Confirm edits are present
   - Check for "Saving..." indicator
   - Wait for "All changes saved"

3. **Clear Spreadsheet Cache**:
   - Edit content source in BrandCast
   - Click "Force Refresh"
   - Wait 5 minutes for update

4. **Check Formulas**:
   - Ensure formulas calculate correctly
   - Check for #ERROR or #REF
   - Verify data sources
   - Test calculations

### Table Too Small or Text Unreadable

**Symptoms:**
- Text difficult to read from distance
- Table appears tiny on display
- Columns too narrow

**Solutions:**

1. **Increase Font Size**:
   - Select cells in Google Sheets
   - Increase font size (14-18pt)
   - Bold important data
   - Test readability

2. **Adjust Column Widths**:
   - Auto-resize columns
   - Make wider for readability
   - Consistent widths
   - Remove unnecessary columns

3. **Reduce Data Displayed**:
   - Show fewer rows
   - Remove columns
   - Use data range to limit
   - Focus on key information

4. **Make Content Area Larger**:
   - Edit layout in BrandCast
   - Increase content area size
   - Test on actual display
   - Adjust as needed

### Formatting Looks Wrong

**Symptoms:**
- Colors not showing
- Alignment off
- Borders missing
- Numbers display incorrectly

**Solutions:**

1. **Simplify Formatting**:
   - Use basic formatting only
   - Avoid complex conditional formatting
   - Test with simple styles
   - Build complexity gradually

2. **Check Browser Compatibility**:
   - Some advanced features may not render
   - Use standard formatting
   - Test on display before deploying

3. **Verify Data Types**:
   - Ensure numbers formatted as numbers
   - Dates formatted as dates
   - Text formatted as text
   - Currency shows correctly

4. **Clear and Reapply**:
   - Remove formatting
   - Reapply from scratch
   - Use Format → Clear formatting
   - Apply new styles carefully

## Advanced Features

### Formulas and Calculations

**Live Calculations:**
- Google Sheets formulas run automatically
- Display shows results
- Updates happen server-side
- Complex calculations supported

**Useful Formulas:**
- `=SUM(B2:B10)` - Total sales
- `=AVERAGE(C2:C20)` - Average value
- `=COUNTIF(D:D,"In Stock")` - Count items
- `=TODAY()` - Current date
- `=NOW()` - Current date and time

### Conditional Formatting

**Visual Data Indicators:**
- Color scales (red to green)
- Icon sets (arrows, flags)
- Data bars (progress indicators)
- Custom rules based on values

**Common Rules:**
- Highlight values above/below target
- Color code by percentage
- Show trends with icons
- Emphasize outliers

### Integration with Other Google Tools

**Google Forms:**
- Collect data via forms
- Auto-populate spreadsheet
- Display live responses
- Real-time updates

**Google Apps Script:**
- Fetch data from external APIs
- Auto-update from databases
- Send notifications
- Custom automation

**Import Functions:**
- `=IMPORTRANGE()` - Pull from other sheets
- `=IMPORTDATA()` - Import CSV/TSV
- `=GOOGLEFINANCE()` - Stock prices
- `=IMPORTXML()` - Web scraping

### Named Ranges

**Simplify Range Management:**
1. Select cells in Google Sheets
2. Data → Named ranges
3. Create descriptive name (e.g., "PriceList")
4. Use in BrandCast data range setting

**Benefits:**
- Easier to remember
- Update range without changing BrandCast
- Self-documenting
- Reduces errors

### Multiple Sheet Tabs

**Display Different Sheets:**
- Create separate content sources per sheet
- Use playlists to rotate
- Or use schedules to switch
- Show different data at different times

**Example:**
- Morning: Sales Dashboard sheet
- Afternoon: Inventory Status sheet
- Evening: Next Day Schedule sheet

## Data Security and Privacy

### Sensitive Information

**What to Avoid:**
- Personal contact information
- Financial account numbers
- Passwords or credentials
- Social security numbers
- Confidential business data

**Best Practices:**
- Review what's visible from display location
- Use separate sheet for public display
- Hide sensitive columns
- Filter out private data

### Access Control

**Sharing Settings:**
- Use "Anyone with link" for public displays
- Restrict editing to authorized users
- Monitor access via sharing settings
- Review periodically

**Change Tracking:**
- Version history shows all edits
- See who made changes
- Restore if unauthorized changes
- Enable notifications for changes

## Next Steps

- **[Google Docs](google-docs.md)** - Display documents
- **[Google Slides](google-slides.md)** - Show presentations
- **[Content Library](../features/content-library.md)** - Organize spreadsheets
- **[Layouts](../features/layouts.md)** - Design layouts with Google Sheets
- **[Playlists](../workflows/playlists.md)** - Rotate multiple sheets
- **[Schedules](../workflows/schedules.md)** - Time-based sheet switching
- **[Troubleshooting](../troubleshooting/integration-problems.md)** - Fix common issues
