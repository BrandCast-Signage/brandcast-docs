---
title: Daily Inspiration
---

# Daily Inspiration Integration

Display daily inspirational content from multiple faith traditions and philosophical sources to inspire, uplift, and connect with your audience.

## Overview

The Daily Inspiration integration provides thoughtful, uplifting content from various religious, spiritual, and philosophical traditions. Choose from 10+ sources to match your organization's values and audience, with automatic daily content updates and respectful, authentic presentations.

**Key Features:**
- 10+ content sources (religious, spiritual, philosophical)
- Automatic daily updates
- Multiple refresh rates (5 min to weekly)
- Customizable display styles
- Original language + translations (for religious texts)
- Author and reference attribution
- Respectful, authentic content
- Cached for performance

**Content Sources Available:**
- Spiritual (Non-Religious)
- World Religions
- Philosophical Traditions
- Custom RSS Feeds

## Use Cases

**Healthcare Facilities:**
- Waiting room comfort
- Patient room inspiration
- Staff break rooms
- Multi-faith chapel displays
- Inclusive healing environment

**Education:**
- University chaplaincy
- Multi-faith centers
- Student lounges
- Cultural awareness
- Interfaith dialogue

**Corporate Offices:**
- Wellness programs
- Diversity initiatives
- Employee inspiration
- Quiet/reflection rooms
- Cultural celebration

**Community Centers:**
- Interfaith spaces
- Cultural centers
- Senior centers
- Youth programs
- Community events

**Hospitality:**
- Hotel lobbies
- Conference centers
- Resorts
- Retreat centers
- Event venues

## Available Content Sources

### Spiritual (Non-Religious)

**Inspirational Quotes**
- **Content:** Motivational quotes from great thinkers, leaders, and authors
- **Examples:** Maya Angelou, Martin Luther King Jr., Eleanor Roosevelt
- **Languages:** English
- **Themes:** Motivation, perseverance, kindness, leadership, growth
- **Best For:** Universal inspiration, diverse audiences, secular spaces

**Philosophical Wisdom**
- **Content:** Teachings from philosophical traditions
- **Examples:** Stoicism, Confucianism, Humanism, Ancient Greek philosophy
- **Languages:** English with source language notes
- **Themes:** Virtue, reason, ethics, meaning, wisdom
- **Best For:** Thoughtful reflection, academic settings, contemplative spaces

### World Religions

**Bible Verses (Christianity)**
- **Content:** Scripture from Old and New Testament
- **Translations:** KJV, NIV, ESV, NRSV
- **Languages:** English (multiple translations available)
- **Books:** Psalms, Proverbs, Gospels, Epistles, and more
- **Configuration:** Choose translation, book preferences
- **Best For:** Christian settings, churches, faith-based organizations

**Quran Verses (Islam)**
- **Content:** Verses from the Holy Quran
- **Translations:** Sahih International, Yusuf Ali, Pickthall
- **Languages:** Arabic with English translation
- **Display:** Arabic text with transliteration and translation
- **Best For:** Islamic centers, mosques, Muslim communities

**Hadith (Islam)**
- **Content:** Sayings and traditions of Prophet Muhammad (peace be upon him)
- **Collections:** Sahih Bukhari, Sahih Muslim
- **Languages:** Arabic with English translation
- **Authentication:** Verified authentic hadiths only
- **Best For:** Islamic education, mosques, Muslim communities

**Torah Readings (Judaism)**
- **Content:** Teachings from the Hebrew Bible
- **Languages:** Hebrew with English translation
- **Books:** Torah (Five Books of Moses), Prophets, Writings
- **Configuration:** Weekly parasha option
- **Best For:** Jewish community centers, synagogues, Jewish organizations

**Bhagavad Gita (Hinduism)**
- **Content:** Verses from the Bhagavad Gita
- **Languages:** Sanskrit with English translation and transliteration
- **Chapters:** All 18 chapters available
- **Themes:** Dharma, karma, yoga, devotion, wisdom
- **Best For:** Hindu temples, yoga studios, meditation centers

**Buddha Teachings (Buddhism)**
- **Content:** Quotes and teachings attributed to Buddha
- **Sources:** Dhammapada, sutras, traditional texts
- **Languages:** English (Pali source noted)
- **Themes:** Mindfulness, compassion, impermanence, enlightenment
- **Best For:** Buddhist temples, meditation centers, mindfulness spaces

**Gurbani (Sikhism)**
- **Content:** Verses from Guru Granth Sahib
- **Languages:** Gurmukhi with English translation and transliteration
- **Authors:** Various Sikh Gurus
- **Themes:** Oneness, service, equality, devotion
- **Best For:** Gurdwaras, Sikh community centers

**Bahá'í Writings**
- **Content:** Sacred texts from the Bahá'í Faith
- **Authors:** Bahá'u'lláh, 'Abdu'l-Bahá, The Báb
- **Languages:** English (translated from Persian and Arabic)
- **Themes:** Unity, peace, justice, spiritual growth
- **Best For:** Bahá'í centers, interfaith spaces

### Custom Content

**Custom RSS Feed**
- **Content:** Your own curated daily inspiration
- **Source:** Any valid RSS feed
- **Use Cases:** Organization-specific quotes, leadership messages, custom content
- **Configuration:** RSS feed URL, item selection rules
- **Best For:** Branded content, custom messaging

## Setup

### Step 1: Choose Content Source

**From Dashboard:**

1. Navigate to **Features** → **Daily Inspiration**
2. Click **Configure Inspiration**
3. Select **Content Source**

**Consider:**
- Your audience demographics
- Organizational values
- Space context (chapel vs. lobby)
- Inclusive vs. specific needs
- Multi-faith vs. single tradition

**Recommendations:**
- **Universal/Secular:** Inspirational Quotes, Philosophical Wisdom
- **Multi-Faith:** Rotate weekly or use general spiritual content
- **Specific Community:** Choose tradition that matches
- **Healthcare:** Inspirational Quotes (broadly inclusive)
- **Education:** Philosophical Wisdom or rotating traditions

### Step 2: Configure Display Settings

**Display Style:**

**Featured Card (Recommended):**
- Large, prominent display
- Full quote/verse
- Attribution and reference
- Suitable for main content area
- Size: 400×300 to 800×600

**Subtle Footer:**
- Bottom ticker or banner
- Abbreviated content
- Less prominent
- Suitable for supplementary content
- Size: 1920×150 or similar

**Sidebar Widget:**
- Side panel display
- Medium prominence
- Good for multi-content layouts
- Size: 300×400 to 400×600

**Position:**
- Top Center
- Bottom Center
- Bottom Left
- Bottom Right
- Sidebar Left
- Sidebar Right
- Custom

**Size:**
- Small (300×200)
- Medium (500×350) - Recommended
- Large (800×600)
- Custom dimensions

**Display Options:**
```javascript
{
  "displayStyle": "featured_card",
  "position": "bottom_center",
  "size": "medium",
  "showAuthor": true,
  "showReference": true,
  "backgroundColor": "#ffffff",
  "textColor": "#333333",
  "fontSize": "medium"
}
```

### Step 3: Set Refresh Rate

**Refresh Options:**

**Daily (Recommended):**
- New content each day at midnight
- Consistent daily inspiration
- Best for most use cases
- Cache duration: 24 hours

**Hourly:**
- New content every hour
- High variety
- Good for high-traffic areas
- Cache duration: 1 hour

**Every 30 Minutes:**
- Very frequent updates
- Maximum variety
- Best for waiting rooms
- Cache duration: 30 minutes

**Every 5 Minutes:**
- Near real-time updates
- Constant new content
- Special use cases only
- Cache duration: 5 minutes

**Weekly:**
- Same content all week
- Longer reflection time
- Meditation/contemplation spaces
- Cache duration: 1 week

**Performance Impact:**
```
Daily:       1 fetch/day    (minimal)
Hourly:      24 fetches/day (moderate)
30 Minutes:  48 fetches/day (high)
5 Minutes:   288 fetches/day (very high)
Weekly:      1 fetch/week   (minimal)
```

### Step 4: Customize Presentation

**Text Settings:**
- Font family (sans-serif recommended)
- Font size (18pt - 24pt for displays)
- Text color and background
- Line spacing
- Text alignment

**Attribution Settings:**
- Show author name: Yes/No
- Show reference (verse/source): Yes/No
- Attribution format:
  - `"Quote text" - Author`
  - `"Quote text" (Reference) - Author`
  - `"Quote text"` (no attribution)

**Language Settings:**
(For multi-language sources)
- Show original language: Yes/No
- Show transliteration: Yes/No
- Show translation: Yes/No
- Translation version preference

**Example (Bible Verse):**
```
Display:
┌────────────────────────────────────┐
│ "For I know the plans I have for   │
│  you, declares the LORD, plans to  │
│  prosper you and not to harm you,  │
│  plans to give you hope and a      │
│  future."                           │
│                                     │
│ - Jeremiah 29:11 (NIV)             │
└────────────────────────────────────┘
```

**Example (Quran Verse with Arabic):**
```
Display:
┌────────────────────────────────────┐
│ إِنَّ مَعَ الْعُسْرِ يُسْرًا       │
│ (Inna ma'al usri yusra)            │
│                                     │
│ "Indeed, with hardship comes ease."│
│                                     │
│ - Quran 94:6 (Sahih International) │
└────────────────────────────────────┘
```

### Step 5: Add to Layouts

**Dedicated Inspiration Display:**
```
Layout: "Daily Inspiration"
  Main Area (Fullscreen):
    - Daily Inspiration widget
    - Large, centered
    - Featured card style
    - High prominence
```

**Mixed Content Layout:**
```
Layout: "Lobby Information"
  Main Area (70%):
    - Announcements
    - Events calendar

  Sidebar (30%):
    - Daily Inspiration (top)
    - Weather (middle)
    - Clock (bottom)
```

**Footer Integration:**
```
Layout: "Store Display"
  Main Area (85%):
    - Product promotions
    - Marketing content

  Footer (15%):
    - Daily Inspiration ticker
    - Subtle, always visible
    - Non-intrusive
```

## Content Examples

### Inspirational Quote Example

```json
{
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "source": "Inspirational Quote",
  "category": "Motivation",
  "theme": "Passion & Purpose",
  "date": "2025-10-14"
}
```

**Display:**
```
"The only way to do great work is to love what you do."
- Steve Jobs
```

### Bible Verse Example

```json
{
  "text": "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
  "reference": "Joshua 1:9",
  "translation": "NIV",
  "testament": "Old Testament",
  "book": "Joshua",
  "chapter": 1,
  "verse": 9,
  "theme": "Courage & Faith",
  "date": "2025-10-14"
}
```

### Quran Verse Example

```json
{
  "arabic": "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
  "transliteration": "Wa man yattaqillaha yaj'al lahu makhraja",
  "translation": "And whoever is mindful of Allah, He will make a way out for them.",
  "reference": "Quran 65:2",
  "translation_source": "Sahih International",
  "surah": "At-Talaq",
  "ayah": 2,
  "theme": "Trust in Allah",
  "date": "2025-10-14"
}
```

### Buddha Teaching Example

```json
{
  "text": "Peace comes from within. Do not seek it without.",
  "author": "Buddha",
  "source": "Buddhist Teaching",
  "tradition": "Buddhism",
  "theme": "Inner Peace",
  "pali_source": "Dhammapada",
  "date": "2025-10-14"
}
```

## Best Practices

### Source Selection

**Know Your Audience:**
- Healthcare: Broadly inclusive (Inspirational Quotes)
- Faith-based org: Match organizational faith
- Multi-cultural: Philosophical Wisdom or rotating sources
- Education: Philosophical Wisdom for academic context
- Corporate: Inspirational Quotes for universal appeal

**Inclusivity Guidelines:**
- Use secular options in government buildings
- Multi-faith spaces benefit from rotating sources
- Honor specific traditions in dedicated spaces
- Consider all visitors, not just primary audience
- Consult with chaplains or religious leaders

**Cultural Sensitivity:**
- Respect religious practices and beliefs
- Use authentic translations and sources
- Provide context where needed
- Avoid appropriation or misuse
- Seek feedback from faith communities

### Display Recommendations

**Typography:**
- Serif fonts for sacred texts (traditional feel)
- Sans-serif for modern spaces
- Minimum 18pt for readability
- Maximum 32pt to avoid overwhelming
- Line spacing 1.5x for clarity

**Colors:**
- Neutral backgrounds (white, cream, light gray)
- Dark text for readability
- Avoid bright, distracting colors
- Consider sacred color associations
- Maintain high contrast

**Positioning:**
- Eye level when possible
- Not competing with primary content
- Respectful prominence (not too small)
- Clear visibility from viewing distance
- Consider space sacredness

**Duration:**
- Daily refresh recommended for most
- Hourly for high-traffic waiting areas
- Weekly for meditation/reflection spaces
- Match refresh rate to space usage

### Content Integrity

**Authentication:**
- All religious texts from verified sources
- Authentic translations only
- Proper attribution always shown
- Original language preserved (where applicable)
- Cultural context maintained

**Quality Standards:**
- No paraphrasing of sacred texts
- No mixing of sources inappropriately
- No altered quotations
- Proper citation format
- Respect for tradition

## Troubleshooting

### Content Not Updating

**Symptoms:**
- Same content shown multiple days
- Refresh doesn't work
- Stuck on old content

**Solutions:**

1. **Check Refresh Rate:**
   - Verify set to "Daily" or desired rate
   - Check last fetched timestamp
   - Confirm cache not stuck

2. **Clear Cache:**
   - Admin panel → Clear inspiration cache
   - Force refresh content
   - Restart display if needed

3. **Check Configuration:**
   - Source type selected
   - Configuration active
   - No errors in logs

### Display Not Showing

**Symptoms:**
- Blank area where inspiration should be
- Error message shown
- Content area empty

**Check:**

1. **Configuration Active:**
   - Navigate to Daily Inspiration settings
   - Verify "Active" toggle enabled
   - Check source selected

2. **Layout Assignment:**
   - Content area configured correctly
   - Inspiration widget added to layout
   - Layout assigned to display

3. **Source Availability:**
   - All sources should work
   - Check network connectivity
   - Verify no service outages

### Wrong Language/Translation

**Symptoms:**
- Wrong translation showing
- Language not as configured
- Missing original language

**Solutions:**

1. **Check Source Configuration:**
   - Verify translation preference set
   - Check language options selected
   - Confirm source supports language

2. **Re-configure:**
   - Edit inspiration settings
   - Select correct translation/language
   - Save and refresh

## Advanced Features

### Multi-Faith Rotation (Coming Soon)

**Planned Feature:**
- Rotate between multiple sources
- Weekly or monthly rotation
- Interfaith calendar integration
- Holiday-appropriate content

**Current Workaround:**
- Manually change source periodically
- Schedule-based content switching
- Multiple layouts for different traditions

### Custom Content Integration

**RSS Feed Option:**
- Use custom RSS feed as source
- Curate your own daily content
- Leadership messages
- Organization-specific inspiration
- Branded content delivery

**RSS Format:**
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Daily Inspiration</title>
    <item>
      <title>Today's Inspiration</title>
      <description>Your daily content here</description>
      <author>Author Name</author>
      <pubDate>Mon, 14 Oct 2025 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>
```

### Analytics (Coming Soon)

**Planned Metrics:**
- Content impressions
- Source popularity
- Engagement metrics
- Audience feedback

## API Reference

### Get Available Sources

```
GET /api/inspiration/sources
```

**Response:**
```json
{
  "sources": [
    {
      "type": "INSPIRATIONAL_QUOTE",
      "name": "Inspirational Quotes",
      "description": "Secular motivational quotes from great thinkers",
      "category": "spiritual"
    },
    {
      "type": "BIBLE_VERSE",
      "name": "Bible Verses",
      "description": "Christian scripture with multiple translations",
      "category": "religious"
    }
  ]
}
```

### Get Current Content

```
GET /api/inspiration/content/:storeId
```

**Response:**
```json
{
  "content": {
    "text": "Be the change you wish to see in the world.",
    "author": "Mahatma Gandhi",
    "source": "Inspirational Quote",
    "date": "2025-10-14",
    "fetchedAt": "2025-10-14T00:00:00Z"
  },
  "displayStyle": "featured_card",
  "position": "bottom_center",
  "size": "medium",
  "showAuthor": true,
  "showReference": false
}
```

### Configure Inspiration

```
POST /api/inspiration/config/:storeId
Content-Type: application/json

{
  "sourceType": "BIBLE_VERSE",
  "config": {
    "translation": "NIV",
    "books": ["Psalms", "Proverbs"]
  },
  "refreshRate": "DAILY",
  "displayStyle": "featured_card",
  "position": "bottom_center",
  "size": "medium",
  "showAuthor": true,
  "showReference": true,
  "isActive": true
}
```

## Content Sources Details

### Translation Options

**Bible Translations:**
- KJV (King James Version)
- NIV (New International Version)
- ESV (English Standard Version)
- NRSV (New Revised Standard Version)

**Quran Translations:**
- Sahih International
- Yusuf Ali
- Pickthall
- Muhsin Khan

**Other Texts:**
- Original language + English translation
- Transliteration for pronunciation
- Multiple translation options where available

## Next Steps

- **[Content Types](../features/content-types.md)** - Learn about all content types including QUOTES
- **[Layouts](../features/layouts.md)** - Design layouts with inspiration content
- **[Schedules](../workflows/schedules.md)** - Schedule different inspiration sources
- **[Display Setup](../workflows/display-setup.md)** - Configure displays
