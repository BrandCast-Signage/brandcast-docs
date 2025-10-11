---
title: Multi Store Management
---

# Multi Store Management

Manage multiple retail locations, franchises, or branches from a single BrandCast account.

## Overview

Multi-store management allows you to:

- Manage unlimited store locations from one account
- Share content across all locations
- Create location-specific content
- Control user access per store
- Set timezone and location settings for each store
- Centralize brand consistency while allowing local customization

## Creating Stores

### Adding a New Store

1. Navigate to **Stores** in the main menu
2. Click **Add Store**
3. Enter store information:
   - **Name**: Store name or identifier
   - **Code**: Unique code for this location
   - **Address**: Full physical address
   - **City, State, ZIP**: Location details
   - **Timezone**: Local timezone for this store
   - **Phone**: Store contact number
   - **Email**: Store contact email
4. Click **Create Store**

Your new store is now available in the store selector.

### Store Codes

Each store requires a unique code (e.g., "NYC01", "DOWNTOWN", "MAIN"):

**Recommendations:**
- Keep it short (4-10 characters)
- Use consistent format across all stores
- Include location identifier
- Use uppercase for consistency

**Examples:**
- Geographic: `NYC-01`, `LA-WEST`, `CHI-LOOP`
- Numeric: `STORE-001`, `LOC-042`
- Regional: `EAST-01`, `CENTRAL-05`
- Franchise: `SMITH-MAIN`, `JONES-01`

### Store Settings

Configure each store individually:

**Location Information:**
- Physical address (for directions, local weather)
- Phone and email (for customer contact)
- Timezone (affects schedules and time-based content)

**Operational Settings:**
- Business hours
- Store hours display
- Special closures
- Holiday schedules

**Technical Settings:**
- Google Cloud Storage bucket (optional, for isolation)
- Metadata (custom fields for your needs)

## Managing Multiple Stores

### Viewing All Stores

1. Go to **Stores**
2. See list of all stores with:
   - Store name and code
   - Location (city, state)
   - Active/inactive status
   - Number of displays
   - User count
   - Created date

### Switching Between Stores

**Store Selector:**
- Located in top navigation
- Click to see all stores
- Select store to view/manage
- Recently viewed stores appear first

**Keyboard Shortcut:**
- Press `Ctrl+K` (Windows/Linux) or `Cmd+K` (Mac)
- Type store name or code
- Press Enter to switch

### Filtering and Searching

**Filter stores by:**
- Status (Active/Inactive)
- Region or state
- Number of displays
- Creation date

**Search:**
- Search by store name
- Search by store code
- Search by city or address

## Store-Specific vs. Shared Content

### Shared Content

Content available to all stores in your account:

**What can be shared:**
- Brand assets (logos, colors, fonts)
- Corporate messaging
- Universal promotions
- Template layouts
- Standard media library items

**Benefits:**
- Centralized brand control
- Consistent messaging across locations
- Efficient content management
- Single update affects all stores

**Creating Shared Content:**
1. When uploading media or creating layouts
2. Set **Source Type** to "Shared"
3. Content appears in all stores
4. Managed centrally

### Store-Specific Content

Content only available to specific store(s):

**What can be store-specific:**
- Local promotions
- Location-specific media
- Store manager photos
- Regional campaigns
- Local event announcements

**Benefits:**
- Local customization
- Relevant messaging per location
- Regional marketing flexibility
- Store autonomy

**Creating Store-Specific Content:**
1. Switch to the target store
2. Upload media or create layout
3. Set **Source Type** to "Store Specific"
4. Content only visible in that store

### Content Strategy

**Recommended Mix:**

**Corporate-Controlled (Shared):**
- 60-70% of content
- Brand assets and standards
- National promotions
- Core messaging

**Store-Controlled (Store-Specific):**
- 30-40% of content
- Local events
- Store-specific promotions
- Community involvement
- Staff recognition

## User Access Across Stores

### Assigning Users to Stores

Users can have different access levels for different stores:

**Scenarios:**

**Regional Manager:**
- Admin access to stores in their region
- Viewer access to other regions
- Account-level access for reporting

**Store Manager:**
- Admin access to their store only
- No access to other stores
- Focused on their location

**Corporate Marketing:**
- Manager access to all stores
- Create shared content
- Cannot modify store settings

**Configuration:**
1. Go to **Settings** → **Users**
2. Click on user
3. Under **Store Access**, add stores:
   - Select store
   - Choose role for that store
   - Click **Add**
4. Repeat for each store

See [User Management](./user-management.md) for detailed role information.

### Primary Store

Each user has one primary store (default view on login):

**Setting Primary Store:**
1. Go to user profile
2. Find **Store Access** section
3. Click **Set as Primary** next to desired store

Users automatically see their primary store when logging in.

## Layouts and Templates

### Sharing Layouts Across Stores

**Method 1: Duplicate Layout**
1. Create layout in one store
2. Click **Duplicate to Stores**
3. Select target stores
4. Layouts copied with all settings

**Method 2: Save as Template**
1. Create layout in any store
2. Click **Save as Template**
3. Mark as "Shared"
4. Other stores can use template
5. Each store customizes as needed

**Method 3: Account-Level Templates**
1. Create layouts with shared content only
2. Make available account-wide
3. Stores apply and customize
4. Central updates don't override local changes

### Store-Specific Layouts

Some layouts should remain unique to each store:

**Examples:**
- Store hours display (different per location)
- Local employee schedules
- Store-specific promotions
- Regional weather
- Local events calendar

**Best Practice:**
- Start with shared template
- Customize for store
- Mark as store-specific
- Prevents accidental overwrite from central updates

## Displays Across Stores

### Display Management

Each store manages its own displays:

**Centralized View:**
1. Go to **Displays** → **All Stores**
2. See all displays across all locations
3. Filter by store
4. See online/offline status
5. Monitor display health

**Per-Store View:**
1. Switch to specific store
2. Go to **Displays**
3. See only that store's displays
4. Manage registrations
5. Assign layouts

### Display Naming Convention

Use consistent naming across stores:

**Recommended Format:**
```
[STORE-CODE]-[LOCATION]-[PURPOSE]
```

**Examples:**
- `NYC01-FRONT-CUSTOMER` - Front counter customer display
- `NYC01-BREAK-EMPLOYEE` - Break room employee display
- `LA-WEST-CHECKOUT-01` - Checkout display #1
- `CHI-LOOP-LOBBY-MAIN` - Main lobby display

**Benefits:**
- Easy identification in central dashboard
- Clear purpose
- Scalable naming system
- Searchable by store code

## Integrations Per Store

### Store-Level Integrations

Some integrations are specific to each store:

**Location-Specific:**
- Weather (different location per store)
- ZoomShift schedules (per-location staffing)
- Local calendars (store events)
- Regional RSS feeds

**Setup:**
1. Switch to store
2. Go to **Content Sources** → **Add Integration**
3. Configure for that store
4. Integration only affects that store

### Shared Integrations

Some integrations can be shared:

**Account-Level:**
- Stock market data (same for all)
- Corporate calendar (company events)
- Brand news RSS feeds
- Inspirational quotes

**Setup:**
1. Create integration in any store
2. Set as "Shared"
3. Available to all stores
4. Centrally managed

## Schedules and Playlists

### Store-Specific Schedules

Each store can have unique operating schedules:

**Why:**
- Different business hours per location
- Regional holidays
- Store-specific events
- Time zone differences

**Setup:**
1. Switch to store
2. Create schedule
3. Set time rules (adjusted for store timezone)
4. Assign to store displays

**Example:**
- **NYC Store**: 9 AM - 9 PM ET (promotional content during hours)
- **LA Store**: 9 AM - 9 PM PT (same content, different timezone)
- **TX Store**: 10 AM - 8 PM CT (different hours, different schedule)

### Shared Playlists

Create once, deploy everywhere:

1. Create playlist with shared layouts
2. Make available to all stores
3. Each store can:
   - Use as-is
   - Customize with local content
   - Adjust timing/duration
   - Add store-specific layouts

## Multi-Store Workflows

### Corporate to Store Communication

**Scenario**: Push new promotional campaign to all stores

**Workflow:**
1. Corporate creates new promotional layout
2. Save as shared template
3. Add to shared playlist
4. Notify store managers
5. Stores deploy to their displays
6. Track adoption across stores

### Store to Corporate Reporting

**Scenario**: Store manager requests new content

**Workflow:**
1. Store manager identifies need
2. Submits request via internal process
3. Corporate creates shared content
4. Makes available to requesting store(s)
5. Store manager deploys

### Regional Campaigns

**Scenario**: Run promotion in specific region only

**Workflow:**
1. Identify stores in region
2. Create shared content for region
3. Assign to regional stores only
4. Use store-specific source type
5. Deploy to region displays
6. Track performance per store

## Best Practices

### Organizational Structure

**Franchise Model:**
- Corporate: Account Admin, manages shared assets
- Franchisees: Admin for their store(s) only
- Regional Managers: Admin for multiple stores in region
- Corporate Marketing: Marketing role across all stores

**Corporate Retail:**
- Corporate HQ: Account Admin
- Regional VPs: Admin for their region
- Store Managers: Manager for their store
- Staff: Display Operator for their location

**Multi-Brand:**
- Parent Company: Account Admin
- Brand Managers: Admin for their brand's stores
- Store Managers: Manager for individual stores
- Shared Services: Viewer across all brands

### Content Management

**Corporate Content (Shared):**
- Brand guidelines and assets
- National promotions
- Corporate messaging
- Standard templates
- Training materials

**Store Content (Store-Specific):**
- Local promotions
- Employee spotlights
- Community events
- Regional partnerships
- Store-specific pricing

### Naming Conventions

**Standardize naming across all stores:**

**Stores:**
- Use consistent format (e.g., `REGION-NUMBER`)
- Include location identifier
- Keep codes short and meaningful

**Displays:**
- Include store code prefix
- Describe location and purpose
- Use consistent separator (dash or underscore)

**Layouts:**
- Include version numbers for updates
- Indicate shared vs. store-specific
- Use descriptive names

**Media:**
- Include store code if store-specific
- Tag for easy searching
- Use consistent file naming

### Store Onboarding Checklist

When adding a new store:

1. ✅ Create store record with all details
2. ✅ Set timezone correctly
3. ✅ Add store manager as Admin for store
4. ✅ Copy shared layouts/templates to store
5. ✅ Set up store-specific integrations (weather, calendar)
6. ✅ Configure displays and registration codes
7. ✅ Upload store-specific media
8. ✅ Test displays and content
9. ✅ Train store manager on system
10. ✅ Document store-specific settings

### Store Offboarding

When closing a store:

1. ✅ Archive store (don't delete immediately)
2. ✅ Deactivate all store displays
3. ✅ Remove user access to store
4. ✅ Export store content for records
5. ✅ Move shared content to archive
6. ✅ Document closure date and reason
7. ✅ Preserve audit logs
8. ✅ Update billing (reduce seat count if applicable)

## Monitoring and Analytics

### Cross-Store Analytics

Track performance across all locations:

**Metrics to Monitor:**
- Display uptime per store
- Content freshness
- User activity per location
- Integration health
- Media library usage

**Accessing Analytics:**
1. Go to **Analytics** → **Multi-Store View**
2. Compare stores side-by-side
3. Filter by date range
4. Export reports

### Store Performance

Compare store performance:

**Key Indicators:**
- Display online percentage
- Average content age
- User engagement
- Support ticket volume
- Content update frequency

**Best Performers:**
- Identify top-performing stores
- Share best practices
- Recognize effective managers

**Underperformers:**
- Identify stores needing support
- Provide additional training
- Address technical issues

## Troubleshooting

### Content Not Showing in Store

**Check:**
1. Is content set as "Shared" or assigned to that store?
2. User has access to view that store?
3. Content source is active?
4. Store settings correct?

**Solutions:**
- Change source type to Shared
- Add store to content permissions
- Verify user store access
- Check store configuration

### User Can't See Certain Stores

**Check:**
1. User's store access list
2. User's role (account-level vs. store-level)
3. Store status (active/inactive)
4. User's primary store setting

**Solutions:**
- Add user to missing stores
- Update user role
- Activate store
- Set correct primary store

### Displays Showing Wrong Timezone

**Check:**
1. Store timezone setting
2. Display location
3. Browser timezone
4. Scheduled content timing

**Solutions:**
- Update store timezone
- Verify physical location
- Clear browser cache
- Adjust schedule rules

### Store Code Already Exists

**Problem:** Trying to use duplicate store code

**Solution:**
- Use unique code for each store
- Check existing store codes first
- Follow consistent naming convention
- Consider using sequential numbers

## Advanced: Store Groups

*Available in Enterprise plans*

Group stores by region, district, or other criteria:

**Creating Store Groups:**
1. Go to **Stores** → **Groups**
2. Click **Create Group**
3. Name group (e.g., "East Region", "Franchise A")
4. Add stores to group
5. Assign permissions to group

**Benefits:**
- Bulk operations on grouped stores
- Group-specific content
- Regional reporting
- Simplified management

**Use Cases:**
- Regional marketing campaigns
- District manager oversight
- Franchise management
- Brand segmentation

## Next Steps

- **[User Management](./user-management.md)** - Assign users to stores
- **[Display Setup](./display-setup.md)** - Configure displays per store
- **[Content Association](./content-association.md)** - Share content strategically
- **[Quick Start Guide](../getting-started/quick-start.md)** - Set up new stores quickly
- **[Troubleshooting](../troubleshooting/common-issues.md)** - Fix multi-store issues
