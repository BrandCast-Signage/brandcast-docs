---
title: Google Docs
---

# Google Docs Integration

Display your Google Docs documents directly on BrandCast displays with automatic sync and refresh. Perfect for announcements, policies, procedures, and informational content that changes frequently.

## What is Google Docs Integration?

The Google Docs integration allows you to display text documents from Google Drive on your digital signage. Documents automatically update when you edit them in Google Docs, making it ideal for dynamic content like daily specials, policy updates, or internal communications.

## Use Cases

**Retail Stores:**
- Daily specials and promotions
- Store policies and procedures
- Employee handbook excerpts
- Product information sheets
- Safety guidelines
- Return policies

**Corporate Offices:**
- Company announcements
- Department updates
- Meeting agendas
- Policy documents
- Project briefings
- Visitor information

**Restaurants:**
- Daily specials descriptions
- Menu item details
- Allergen information
- Company history
- Sustainability practices
- Chef's notes

**Healthcare:**
- Visitor policies
- Patient information
- Wayfinding instructions
- Department services
- Hours of operation
- Insurance acceptance

**Real Estate:**
- Property descriptions
- Financing information
- Agent bios
- Market insights
- Homebuyer tips
- Community highlights

## Key Features

**Automatic Sync:**
- Changes in Google Docs appear on displays within minutes
- No manual export or upload required
- Edit documents from anywhere
- Real-time content updates

**Rich Text Support:**
- Headings and subheadings
- Bold, italic, underline formatting
- Bullet points and numbered lists
- Links and references
- Formatted paragraphs

**Flexible Display:**
- Auto-scroll for long documents
- Optional title display
- Custom refresh intervals
- Full-screen or embedded in layouts

**Easy Collaboration:**
- Multiple people can edit
- Track changes and versions
- Comment and review workflow
- Approval processes

## Setting Up Google Docs Integration

### Step 1: Prepare Your Document

1. Create or open document in Google Docs
2. Format for digital signage:
   - **Clear Headings**: Use Heading 1, Heading 2 for structure
   - **Concise Content**: Keep paragraphs short (3-5 sentences)
   - **Readable Fonts**: Stick to standard fonts
   - **Good Spacing**: Add blank lines between sections
   - **Simple Formatting**: Avoid complex tables or layouts
3. Save and note the document URL

**Tips:**
- Test readability from 10-15 feet away
- Use headings to break up content
- Keep sentences short and clear
- Avoid walls of text

### Step 2: Share Your Document

**For Public Display (Recommended):**

1. Click **Share** in Google Docs
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
4. Select **Google Docs**
5. Paste your document URL
6. Configure settings:

**Required Fields:**
- **Document URL**: Full Google Docs URL
- **Name**: Descriptive name (e.g., "Daily Specials")

**Optional Fields:**
- **Show Title**: Display document title (default: yes)
- **Refresh Interval**: How often to check for updates (default: 5 minutes)
- **Auto-Scroll**: Scroll through long documents (default: yes)
- **Scroll Speed**: Slow, medium, or fast

7. Click **Test Connection** to verify
8. Click **Save**

### Step 4: Add to Layout

1. Open **Layout Editor**
2. Create or edit a layout
3. Add content area to canvas
4. Set **Content Type** to "Google Docs"
5. Select your Google Docs document from **Content Source**
6. Position and size the area
7. Save layout
8. Assign layout to display

## Configuration Options

### Title Display

**Show Title (Recommended):**
- Displays document name at top
- Helps identify content
- Professional appearance
- Good for multiple documents

**Hide Title:**
- More screen space for content
- Cleaner look
- Good for single document displays

### Refresh Interval

How often to check for document updates:

- **1 minute**: Frequently changing content (live updates)
- **5 minutes**: Standard (recommended)
- **15 minutes**: Moderate update frequency
- **30+ minutes**: Static content that rarely changes

**Considerations:**
- Shorter intervals = more bandwidth usage
- Longer intervals = delayed updates
- Balance freshness vs. resource usage

### Auto-Scroll Settings

**For Long Documents:**
- Enable auto-scroll
- Set appropriate speed
- Adjust based on content length
- Test readability while scrolling

**Scroll Speed:**
- **Slow**: 10-15 seconds per screen
- **Medium**: 7-10 seconds per screen (recommended)
- **Fast**: 5-7 seconds per screen

**Static Display:**
- Disable auto-scroll for short documents
- Content fits on one screen
- No scrolling needed

## Layout Integration

### Full-Screen Document

**Use Case:** Dedicated information display

**Configuration:**
```
Layout: 1920x1080 (16:9)
Content Area: Full screen (0,0 to 1920,1080)
Content Type: Google Docs
Show Title: Yes
Auto-Scroll: Yes (if long document)
```

**Best For:**
- Policy documents
- Detailed procedures
- Long-form announcements
- Information kiosks

### Split Screen with Other Content

**Use Case:** Document + supplementary info

**Configuration:**
```
Main Area (70%): Google Docs document
Side Panel (30%): Images, weather, or announcements
```

**Example Layout:**
- Document: 1344x1080 (left 70%)
- Sidebar: 576x1080 (right 30%)

**Best For:**
- Daily specials with photos
- Announcements with branding
- Information with wayfinding
- Policies with visual aids

### Rotating Documents

**Use Case:** Multiple documents on one display

**Method 1: Playlists**
1. Create playlist
2. Add multiple Google Docs content sources
3. Set duration for each (e.g., 30 seconds)
4. Documents rotate automatically

**Method 2: Schedule**
1. Create separate content sources for each document
2. Set up schedule rules:
   - Morning announcements: 8am-12pm
   - Lunch specials: 12pm-2pm
   - Afternoon updates: 2pm-5pm

## Best Practices

### Document Design

**Content Structure:**
- Clear headline at top
- Short introductory paragraph
- Bullet points for lists
- Headings for sections
- White space between sections

**Writing Style:**
- Short sentences (10-15 words)
- Active voice
- Clear, simple language
- Avoid jargon
- One main idea per paragraph

**Formatting:**
- **Heading 1**: Main title (use once)
- **Heading 2**: Section headings
- **Heading 3**: Subsections (if needed)
- **Bold**: Emphasize key points
- **Bullets**: Lists and features

**Length:**
- Short docs: 1-2 paragraphs (fit on one screen)
- Medium docs: 3-5 paragraphs (light scrolling)
- Long docs: 6+ paragraphs (requires scrolling)
- Very long: Consider splitting into multiple documents

### Content Strategy

**Update Frequency:**
- **Daily**: Specials, news, metrics
- **Weekly**: Schedules, updates
- **Monthly**: Policies, procedures
- **As Needed**: Announcements, events

**Message Hierarchy:**
- Most important information first
- Key details in headings
- Supporting details in body
- Call-to-action at end

**Readability:**
- Use conversational tone
- Avoid complex sentences
- Define technical terms
- Write for your audience

### Performance Optimization

**Keep It Lightweight:**
- Text-only documents load faster
- Avoid embedding large images
- Keep document length reasonable
- Remove unnecessary formatting

**Refresh Strategy:**
- Frequent updates: 5-minute refresh
- Daily updates: 15-30 minute refresh
- Static content: 1-2 hour refresh
- Balance freshness vs. bandwidth

**Multiple Displays:**
- Reuse documents across displays (saves bandwidth)
- Create location-specific versions when needed
- Use templates for consistency
- Centralize frequently shared content

## Updating Documents

### Making Changes

1. Open document in Google Docs
2. Make edits:
   - Update text
   - Add or remove sections
   - Change formatting
   - Reorganize content
3. Changes save automatically
4. Display updates within 5-10 minutes

**No Action Needed in BrandCast:**
- Documents update automatically
- No re-upload required
- No content source changes needed

### Version Control

**Google Docs Features:**
- **Version History**: File → Version history
- **Restore Previous**: Revert to earlier versions
- **Named Versions**: Mark important versions
- **Track Changes**: See who edited what

**Best Practices:**
- Name versions before major changes
- Test changes before peak hours
- Keep backup copy of critical documents
- Review version history regularly

### Collaboration Workflow

**Multiple Editors:**
1. Share document with team
2. Assign editing roles
3. Use comments for feedback
4. Approve changes before publishing
5. Monitor display after updates

**Tip**: Use "Suggesting" mode for collaborative edits that require approval.

## Troubleshooting

### Document Not Displaying

**Symptoms:**
- Blank screen where document should be
- Error message on display
- Content area shows loading indefinitely

**Solutions:**

1. **Check Document URL**:
   - Paste URL in browser
   - Verify document loads
   - Ensure URL is correct format

2. **Verify Sharing Permissions**:
   - Document must be "Anyone with link" can view
   - Or display device authenticated with shared email
   - Check Google Drive sharing settings

3. **Test Connection**:
   - Edit content source in BrandCast
   - Click "Test Connection"
   - Review error message if failed

4. **Check Display Connection**:
   - Verify display online
   - Check internet connectivity
   - Test with other content sources

5. **Clear Cache**:
   - Edit content source
   - Force refresh
   - Wait 1-2 minutes

### Document Not Updating

**Symptoms:**
- Old content still showing
- Recent changes not appearing
- Display shows outdated text

**Solutions:**

1. **Check Refresh Interval**:
   - May be set too long
   - Reduce to 5-10 minutes
   - Force manual refresh

2. **Verify Changes Saved**:
   - Open document in Google Docs
   - Confirm edits are present
   - Check for "Saving..." indicator

3. **Clear Document Cache**:
   - Edit content source in BrandCast
   - Click "Force Refresh"
   - Wait 5 minutes for update

4. **Review Version History**:
   - File → Version history in Google Docs
   - Confirm changes saved
   - Restore if needed

### Text Too Small or Cut Off

**Symptoms:**
- Text difficult to read from distance
- Content extends beyond visible area
- Formatting looks wrong

**Solutions:**

1. **Increase Font Size in Document**:
   - Select text in Google Docs
   - Increase font size (try 14-18pt)
   - Use larger headings (24-36pt)

2. **Simplify Content**:
   - Reduce amount of text
   - Use more white space
   - Break into sections
   - Consider multiple documents

3. **Adjust Content Area Size**:
   - Make content area larger in layout
   - Ensure adequate padding
   - Test readability from display distance

4. **Use Heading Styles**:
   - Apply Heading 1, Heading 2 styles
   - Headings automatically larger
   - Creates visual hierarchy
   - Improves readability

### Scrolling Too Fast or Slow

**Symptoms:**
- Can't read content before it scrolls away
- Scrolling feels sluggish
- Awkward pacing

**Solutions:**

1. **Adjust Scroll Speed**:
   - Edit content source settings
   - Change from fast/medium/slow
   - Test on actual display
   - Match to content length

2. **Disable Auto-Scroll**:
   - If document fits on one screen
   - Static display may be better
   - User controls viewing pace

3. **Split Long Documents**:
   - Break into multiple documents
   - Create playlist rotation
   - Shorter segments easier to read
   - Better pacing control

## Advanced Features

### Dynamic Content with Apps Script

**Auto-Update Documents:**
- Use Google Apps Script
- Fetch data from external sources
- Update document automatically
- Display always shows current data

**Example Uses:**
- Daily sales numbers from spreadsheet
- Weather data from API
- Social media feed
- Inventory counts

### Document Templates

**Create Reusable Templates:**
1. Design master template
2. Make a copy for each use
3. Fill in variable content
4. Update link in BrandCast

**Template Ideas:**
- Daily specials format
- Weekly announcement structure
- Event information layout
- Policy document format

### Multi-Language Support

**Display in Multiple Languages:**
1. Create document per language
2. Add as separate content sources
3. Use schedules to switch languages
4. Or use multiple displays per language

**Example:**
- English: 8am-2pm
- Spanish: 2pm-8pm

### Integration with Google Sheets

**Pull Data from Sheets:**
1. Create Google Docs document
2. Use Insert → Chart (from Sheets)
3. Link to spreadsheet data
4. Document auto-updates when sheet changes

**Use Cases:**
- Sales leaderboards
- Inventory levels
- Project status
- Metrics dashboards

## Compliance and Legal

### Copyright and Licensing

**Content Ownership:**
- Only use content you own or have rights to
- Respect copyright on quoted material
- Credit sources when required
- Follow fair use guidelines

**Brand Guidelines:**
- Follow company brand standards
- Use approved messaging
- Get necessary approvals
- Maintain consistency

### Accessibility

**ADA Compliance:**
- Clear, readable fonts
- High contrast text
- Simple language
- Logical content structure

**Inclusive Content:**
- Plain language (avoid jargon)
- Cultural sensitivity
- Multiple reading levels
- Clear headings for navigation

### Data Privacy

**Sensitive Information:**
- Avoid PII (personally identifiable information)
- Don't display financial data
- Remove confidential information
- Consider display location visibility

**Compliance:**
- GDPR considerations for EU customers
- HIPAA compliance for healthcare
- Industry-specific regulations
- Company data policies

## Next Steps

- **[Google Sheets](google-sheets.md)** - Display spreadsheet data
- **[Google Slides](google-slides.md)** - Show presentations
- **[Content Library](../features/content-library.md)** - Organize documents
- **[Layouts](../features/layouts.md)** - Design layouts with Google Docs
- **[Playlists](../workflows/playlists.md)** - Rotate multiple documents
- **[Schedules](../workflows/schedules.md)** - Time-based document switching
- **[Troubleshooting](../troubleshooting/integration-problems.md)** - Fix common issues
