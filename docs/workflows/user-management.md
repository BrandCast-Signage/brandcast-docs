---
title: User Management
---

# User Management

Manage team members and control access to your BrandCast account and stores.

## Overview

User management in BrandCast allows you to:

- Add team members to your account
- Assign roles and permissions
- Control access to specific stores
- Track user activity
- Manage invitations
- Deactivate users when needed

## User Roles

BrandCast uses a role-based access control system. Each user is assigned a role that determines their permissions.

### Account-Level Roles

These roles apply to your entire account:

**ACCOUNT_ADMIN**
- Full account control
- Manage billing and subscription
- Add/remove users
- Access all stores
- Modify account settings
- View all content and displays

**ACCOUNT_MANAGER**
- Manage content across all stores
- Create and edit layouts
- Configure displays
- Add integrations
- Upload media
- Cannot modify billing or add users

**ACCOUNT_VIEWER**
- View-only access to all stores
- See displays and content
- Cannot create or edit anything
- Useful for stakeholders and executives

**ACCOUNT_USER**
- Basic access across account
- View displays and content
- Limited editing capabilities
- Cannot access account settings

### Store-Level Roles

These roles are assigned per store for granular control:

**ADMIN**
- Full control of assigned store(s)
- Manage users for the store
- Create/edit layouts and content
- Configure displays
- Access all store features

**MANAGER**
- Create and manage content
- Edit layouts and displays
- Upload media
- Configure integrations
- Cannot add users or change store settings

**VIEWER**
- View-only access to store
- See displays and schedules
- Cannot create or edit content
- Useful for franchisees or partners

**DISPLAY_OPERATOR**
- Limited access for display management only
- Register displays
- View display status
- Cannot edit layouts or content
- Useful for on-site staff

### Specialized Roles

**STORE_LIBRARIAN**
- Manage media library for specific store(s)
- Upload, tag, and organize media
- Cannot create layouts or manage displays
- Focused on content organization

**BRAND_LIBRARIAN**
- Manage shared brand assets
- Control brand-level media library
- Ensure brand consistency
- Cannot access individual stores

**MARKETING**
- Create marketing content and campaigns
- Manage promotional layouts
- Access media library
- Limited display management

## Adding Users

### Inviting Team Members

1. Navigate to **Settings** → **Users**
2. Click **Invite User**
3. Enter user information:
   - **Email**: User's email address
   - **Name**: Full name
   - **Role**: Select appropriate role
   - **Stores**: Choose which stores they can access
4. Click **Send Invitation**

The user receives an email invitation with a secure link to create their account.

### Invitation Process

**What happens:**
1. You send invitation with email and role
2. User receives email with secure link (expires in 7 days)
3. User clicks link and creates password
4. User completes profile
5. User gains access based on assigned role

**Invitation expires:**
- Default: 7 days
- Can be resent if expired
- Only one active invitation per email

### Accepting Invitations

As the invited user:

1. Check your email for invitation from BrandCast
2. Click **Accept Invitation**
3. Create a secure password (minimum 8 characters)
4. Complete your profile:
   - Upload avatar (optional)
   - Set display name
   - Configure timezone
5. Click **Complete Setup**

You're now logged in with the role assigned by the administrator.

## Managing Existing Users

### Viewing All Users

1. Go to **Settings** → **Users**
2. See list of all users with:
   - Name and email
   - Role(s)
   - Store access
   - Last login
   - Status (Active/Inactive)

### Filtering Users

Use filters to find users:
- **By Role**: Filter by role type
- **By Store**: See who has access to specific stores
- **By Status**: Active or inactive users
- **Search**: Search by name or email

### Editing User Details

1. Click on user name
2. Update information:
   - **Name**: Change display name
   - **Email**: Update email address (requires verification)
   - **Role**: Change role assignment
   - **Stores**: Add or remove store access
3. Click **Save Changes**

Changes take effect immediately.

### Managing Store Access

Control which stores users can access:

**Adding Store Access:**
1. Go to user profile
2. Click **Add Store**
3. Select store from dropdown
4. Choose role for that store
5. Click **Add**

**Removing Store Access:**
1. Go to user profile
2. Find store in **Store Access** section
3. Click **Remove**
4. Confirm removal

**Changing Store Role:**
1. Find store in user's **Store Access**
2. Change role from dropdown
3. Click **Update**

### Changing User Roles

**Important**: Changing roles affects permissions immediately.

1. Go to user profile
2. Under **Role**, select new role
3. Review permission changes shown
4. Click **Update Role**
5. Confirm change

**Role Changes:**
- Downgrading (Admin → Manager): User immediately loses elevated permissions
- Upgrading (Viewer → Admin): User immediately gains new permissions
- Changes apply to active sessions (user may need to refresh)

## User Permissions

### What Each Role Can Do

**Account Admin:**
- ✅ Manage billing and subscription
- ✅ Add/remove users
- ✅ Manage all stores
- ✅ Create/edit layouts
- ✅ Upload media
- ✅ Configure integrations
- ✅ Register displays
- ✅ View analytics
- ✅ Modify account settings

**Account Manager:**
- ❌ Manage billing
- ❌ Add/remove users
- ✅ Manage all stores
- ✅ Create/edit layouts
- ✅ Upload media
- ✅ Configure integrations
- ✅ Register displays
- ✅ View analytics
- ❌ Modify account settings

**Manager (Store-Level):**
- ❌ Manage billing
- ❌ Add/remove users
- ✅ Manage assigned stores only
- ✅ Create/edit layouts
- ✅ Upload media
- ✅ Configure integrations
- ✅ Register displays
- ✅ View store analytics
- ❌ Modify account settings

**Viewer:**
- ❌ All write operations
- ✅ View displays
- ✅ View layouts
- ✅ View media library
- ✅ View schedules
- ✅ View analytics (read-only)

**Display Operator:**
- ❌ Create/edit layouts
- ❌ Upload media
- ✅ Register displays
- ✅ View display status
- ✅ Manage display assignments
- ✅ View assigned layouts

### Permission Inheritance

**Store-level roles inherit from account-level:**
- Account Admin has Admin rights in all stores
- Account Manager has Manager rights in all stores
- Store-specific roles only apply to assigned stores

**Example:**
- User A: Account Admin → Admin access to Store 1, Store 2, Store 3
- User B: Manager for Store 1 → Manager access to Store 1 only
- User C: Viewer for Store 2 → View-only access to Store 2 only

## Deactivating Users

### When to Deactivate

Deactivate users when:
- Employee leaves the company
- Contractor finishes project
- Seasonal employee's season ends
- Account compromise suspected
- User no longer needs access

**Deactivate vs. Delete:**
- **Deactivate**: Preserves user data and history, can be reactivated
- **Delete**: Permanently removes user (not recommended)

### How to Deactivate

1. Go to **Settings** → **Users**
2. Click on user to deactivate
3. Click **Deactivate User**
4. Confirm deactivation
5. Optional: Enter reason for audit log

**What happens:**
- User immediately loses access
- Active sessions are terminated
- User cannot log in
- User data preserved (created content, audit logs)
- Can be reactivated later

### Reactivating Users

1. Go to **Settings** → **Users**
2. Filter by **Status** → **Inactive**
3. Click on user to reactivate
4. Click **Reactivate User**
5. Update role/store access if needed
6. Click **Confirm**

User regains access with previous permissions (or updated ones).

## Multi-Store User Management

### Setting Up Multi-Store Access

For users who need access to multiple stores:

1. Go to user profile
2. Under **Store Access**, click **Add Store**
3. For each store:
   - Select store
   - Choose role for that store
   - Click **Add**
4. Repeat for all stores

**Example:**
- **User**: Jane Doe
- **Store 1**: Admin (full access)
- **Store 2**: Manager (content management)
- **Store 3**: Viewer (view only)

### Primary Store

Each user can have one primary store:

1. Go to user profile
2. Under **Store Access**, find store
3. Click **Set as Primary**

Primary store is the default view when user logs in.

### Role Differences Across Stores

Users can have different roles in different stores:

**Scenario:**
- Regional Manager for downtown location (Admin)
- Viewer for suburban locations (oversight only)
- Manager for flagship store (content creation)

Set different roles per store to match responsibilities.

## Best Practices

### Role Assignment

**Principle of Least Privilege:**
- Give users minimum access needed for their job
- Start with Viewer role, upgrade as needed
- Review permissions regularly

**Common Setups:**

**Small Business (1-3 stores):**
- Owner: Account Admin
- Manager: Account Manager
- Staff: Display Operator

**Multi-Location Retail (4+ stores):**
- Corporate: Account Admin
- Regional Managers: Admin for their region's stores
- Store Managers: Manager for their store only
- Staff: Display Operator for their store

**Franchise Model:**
- Franchisor: Account Admin, Brand Librarian
- Franchisees: Admin for their store only
- Corporate Marketing: Marketing role across all stores

### Security

**Password Requirements:**
- Minimum 8 characters
- Mix of letters, numbers, symbols
- Not previously compromised (checked against breach databases)
- Changed every 90 days (optional enforcement)

**Two-Factor Authentication:**
- Recommended for all Admin roles
- Required for Account Admin (Enterprise plans)
- Enable in **Account Settings** → **Security**

**Access Reviews:**
- Review user list monthly
- Deactivate unused accounts
- Verify role assignments quarterly
- Audit Admin access semi-annually

**Security Incidents:**
- Deactivate compromised accounts immediately
- Force password reset if needed
- Review audit logs for suspicious activity
- Contact support for assistance

### Onboarding New Users

**Checklist for adding new team members:**

1. ✅ Determine appropriate role
2. ✅ Identify which stores they need access to
3. ✅ Send invitation with correct role
4. ✅ Provide onboarding documentation
5. ✅ Schedule training session (if needed)
6. ✅ Add to internal team directory
7. ✅ Verify they can log in successfully
8. ✅ Review permissions with user

### Offboarding Users

**Checklist for removing team members:**

1. ✅ Deactivate user account
2. ✅ Document reason for audit log
3. ✅ Review content created by user
4. ✅ Reassign ownership of critical content
5. ✅ Update team documentation
6. ✅ Notify team of access changes
7. ✅ Preserve audit logs for compliance

## Audit Logs

### Viewing User Activity

Track user actions for security and compliance:

1. Go to **Settings** → **Audit Logs**
2. Filter by:
   - User
   - Action type
   - Date range
   - Store
3. View detailed activity log

**Events Logged:**
- User login/logout
- Content creation/editing
- Layout changes
- Display configuration
- User management actions
- Permission changes
- Failed login attempts

### Audit Log Retention

- **Standard Plans**: 90 days
- **Professional Plans**: 1 year
- **Enterprise Plans**: 2 years or custom

Export logs for long-term retention if needed.

## Troubleshooting

### User Can't Log In

**Check:**
1. Account is active (not deactivated)
2. Email address is correct
3. Password reset if forgotten
4. No account lockout (too many failed attempts)
5. Browser cookies enabled

**Solutions:**
- Send password reset email
- Verify email address on account
- Reactivate if deactivated
- Clear lockout after verification
- Try different browser

### User Has Wrong Permissions

**Check:**
1. Verify assigned role
2. Check store access list
3. Confirm role for specific store
4. Review recent permission changes

**Solutions:**
- Update role assignment
- Add missing store access
- Check for conflicting role assignments
- Have user log out and log back in

### Invitation Not Received

**Check:**
1. Email address spelled correctly
2. Check spam/junk folder
3. Verify invitation hasn't expired
4. Corporate email filters blocking

**Solutions:**
- Resend invitation
- Use different email address
- Contact IT to whitelist brandcast.app emails
- Send from different admin account

### User Sees Different Stores Than Expected

**Check:**
1. Review **Store Access** in user profile
2. Verify primary store setting
3. Check if user has account-level role (sees all stores)
4. Confirm store assignments

**Solutions:**
- Add missing store access
- Remove incorrect store access
- Update primary store
- Change from account role to store-specific roles

## Account Ownership Transfer

### Transferring Account Ownership

For changing account ownership (e.g., selling business, ownership change):

1. Go to **Settings** → **Account**
2. Click **Transfer Ownership**
3. Enter new owner's email
4. Confirm transfer
5. New owner receives email with acceptance link
6. New owner accepts transfer
7. Ownership transfers, previous owner becomes Admin

**Requirements:**
- Must be current Account Admin
- New owner must have email address
- Transfer requires acceptance from new owner
- Transfer logged in audit trail

**What transfers:**
- Account ownership and billing responsibility
- All stores, content, and displays
- Subscription and payment methods
- User accounts and permissions
- Audit logs and history

## API Access (Enterprise)

Enterprise plans can create API keys for programmatic access:

1. Go to **Settings** → **API Keys**
2. Click **Generate API Key**
3. Name the key (e.g., "Production Integration")
4. Set permissions (read-only or read-write)
5. Copy key immediately (shown once only)
6. Store securely

**API Key Management:**
- Rotate keys every 90 days
- Revoke unused keys
- Use separate keys for different integrations
- Monitor API usage

## Next Steps

- **[Multi-Store Management](./multi-store-management.md)** - Manage multiple locations
- **[Display Setup](./display-setup.md)** - Set up displays with proper permissions
- **[Content Association](./content-association.md)** - Assign content based on roles
- **[Quick Start Guide](../getting-started/quick-start.md)** - Onboard new team members
- **[Troubleshooting](../troubleshooting/common-issues.md)** - Fix user access issues
