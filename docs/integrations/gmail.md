---
title: Gmail Integration
---

# Gmail Integration

:::caution Third-Party Verification In Progress
The Gmail integration is currently undergoing third-party security verification required by Google. While the feature is built and ready, we cannot enable it for customers until Google completes their OAuth app verification process.

**Expected Timeline:** We've submitted our application for verification and expect approval within 4-8 weeks.

**Want to be notified?** Email hello@brandcast.app to get on the waitlist for early access once verification is complete.
:::

Display AI-generated actionable items from your Gmail inbox on your digital displays. Perfect for staying on top of important emails without constant inbox checking.

## Overview

The Gmail integration uses AI to scan your recent emails and extract actionable items - things that need your attention, responses, or action. It displays these items prioritized by urgency, helping teams stay organized.

**What It Shows:**
- Actionable items from recent emails (deadlines, required actions, notifications)
- Priority levels (HIGH, MEDIUM, LOW)
- Sender information (privacy-aware)
- Unread email count

**What It Doesn't Show:**
- Full email content
- Personal/sensitive information (redacted by AI)
- Email bodies or attachments

---

## Setup

### Step 1: Connect Gmail

1. Go to **Settings** → **Integrations**
2. Click **Gmail**
3. Click **Connect Gmail**
4. Sign in with your Google account
5. Allow BrandCast to access Gmail (read-only)

**Permissions Required:**
- `gmail.readonly` - Read emails only (never sends or modifies)

### Step 2: Configure Email Summary

**Labels to Include:**
- Default: INBOX
- Add custom labels: Work, Important, etc.
- Exclude: SPAM, TRASH

**Privacy Level:**
- **Low** - Show sender names and subjects
- **Medium** - Show sender names only (default)
- **High** - Show initials only

**Refresh Interval:**
- 15 minutes (default)
- 30 minutes
- 1 hour

**Max Items to Display:**
- 5 items (compact)
- 10 items (default)
- 20 items (detailed)

---

## How It Works

### AI Processing

1. **Fetches recent emails** (last 50 by default)
2. **AI analyzes emails** for actionable content
3. **Extracts items** (deadlines, tasks, notifications)
4. **Prioritizes** by urgency (HIGH/MEDIUM/LOW)
5. **Redacts sensitive info** (emails, phones, SSN, credit cards)
6. **Displays clean summary** on your screen

### Privacy & Security

**What Gets Redacted:**
- Email addresses
- Phone numbers
- Social Security numbers
- Credit card numbers
- Personal identifiers

**Data Storage:**
- OAuth tokens stored securely
- Email content NOT stored
- AI summaries cached for 15 minutes
- No email forwarding or sending

**Who Can See:**
- Only users with access to the display
- Not suitable for public displays with sensitive emails
- Best for office/team environments

---

## Use Cases

**Office Reception:**
- Display urgent vendor emails
- Show client communication needing response
- Track important deadlines

**Team Displays:**
- Shared team inbox summaries
- Project-related email updates
- Meeting requests and RSVPs

**Personal Office:**
- Stay on top of important emails
- Never miss deadlines
- Reduce inbox anxiety

---

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| **Max Emails** | How many recent emails to analyze | 50 |
| **Max Items** | How many actionable items to display | 10 |
| **Privacy Level** | Sender name display (low/medium/high) | medium |
| **Labels** | Gmail labels to include | INBOX |
| **Exclude Labels** | Labels to skip | SPAM, TRASH |
| **Refresh Interval** | How often to update (minutes) | 15 |

---

## Example Display

```
Gmail Summary - Last updated 2 minutes ago

🔴 HIGH PRIORITY
- Meeting RSVP due Friday (from J.Smith)
- Contract signature needed (from Legal)

🟡 MEDIUM
- Package delivery Monday (from Shipping)
- Team lunch reminder (from A.Jones)

🟢 LOW
- Newsletter: Monthly updates (from Company)
- New feature announcement (from Product)

📧 12 unread emails
```

---

## Troubleshooting

**No items showing:**
- Check Gmail connection status
- Verify labels are correct
- Ensure emails in timeframe (last 50)

**Too many items:**
- Reduce "Max Items" setting
- Adjust labels to focus on specific folders
- Use label exclusions

**Privacy concerns:**
- Increase privacy level to "High"
- Use label filtering to exclude sensitive folders
- Consider separate display account for sensitive emails

**Items not updating:**
- Check refresh interval setting
- Verify OAuth token hasn't expired
- Reconnect Gmail if needed

---

## Limitations

- **Gmail only** - No Outlook, Yahoo, or other providers yet
- **Read-only** - Cannot send, delete, or modify emails
- **AI dependent** - Summary quality depends on AI availability
- **English only** - Best results with English emails
- **Recent emails** - Analyzes last 50 emails only

---

## Related Integrations

- **[Google Calendar](./google-calendar.md)** - Sync calendar events
- **[Google Tasks](./google-tasks.md)** - Display task lists
- **[Google Docs](./google-docs.md)** - Show documents

---

## Privacy Notice

Gmail integration uses AI (Vertex AI) to process email content. Email content is:
- Processed securely
- Not stored long-term
- Privacy-filtered before display
- Never shared with third parties

For sensitive emails, use label filtering to exclude confidential folders.
