---
title: Roles and Permissions
---

# Roles and Permissions

Learn about BrandCast's role-based access control system.

## Overview

BrandCast uses roles to control what users can access and modify. Each user is assigned one or more roles that determine their permissions.

## Role Types

### Account-Level Roles

Apply to your entire account across all stores:

**ACCOUNT_ADMIN**
- Full account control
- Manage billing and subscription
- Add/remove users
- Access all stores
- Modify account settings

**ACCOUNT_MANAGER**
- Manage content across all stores
- Create and edit layouts
- Configure displays
- Add integrations
- Cannot modify billing or add users

**ACCOUNT_VIEWER**
- View-only access to all stores
- See displays and content
- Cannot create or edit anything
- Useful for stakeholders

### Store-Level Roles

Apply to specific stores for granular control:

**ADMIN**
- Full control of assigned store(s)
- Manage users for the store
- Create/edit layouts and content
- Configure displays

**MANAGER**
- Create and manage content
- Edit layouts and displays
- Upload media
- Configure integrations
- Cannot add users

**VIEWER**
- View-only access to store
- See displays and schedules
- Cannot create or edit content

**DISPLAY_OPERATOR**
- Limited access for display management
- Register displays
- View display status
- Cannot edit layouts or content

## Role Assignment

### Assigning Roles to Users

When inviting a user:

1. Go to **Settings** → **Users** → **Invite User**
2. Enter email and name
3. Select role:
   - Choose account-level role for full access
   - OR choose specific stores and roles per store
4. Click **Send Invitation**

### Changing User Roles

1. Go to **Settings** → **Users**
2. Click on user name
3. Update role selection
4. Click **Save Changes**

Changes take effect immediately.

## Permission Matrix

| Action | Account Admin | Account Manager | Manager | Viewer | Display Operator |
|--------|--------------|----------------|---------|--------|-----------------|
| Manage billing | ✅ | ❌ | ❌ | ❌ | ❌ |
| Add/remove users | ✅ | ❌ | ❌ | ❌ | ❌ |
| Create layouts | ✅ | ✅ | ✅ | ❌ | ❌ |
| Upload media | ✅ | ✅ | ✅ | ❌ | ❌ |
| Configure displays | ✅ | ✅ | ✅ | ❌ | ✅ |
| Register displays | ✅ | ✅ | ✅ | ❌ | ✅ |
| View content | ✅ | ✅ | ✅ | ✅ | ✅ |
| View analytics | ✅ | ✅ | ✅ | ✅ | ❌ |

## Multi-Store Permissions

Users can have different roles in different stores:

**Example:**
- User A: Admin for Store 1, Manager for Store 2, Viewer for Store 3
- User B: Manager for all stores (Account Manager role)
- User C: Display Operator for Store 1 only

### Setting Store-Specific Roles

1. Go to user profile
2. Under **Store Access**, click **Add Store**
3. Select store and role
4. Click **Add**
5. Repeat for additional stores

## Best Practices

### Principle of Least Privilege

Give users the minimum access needed:
- Start with Viewer role
- Upgrade as responsibilities increase
- Review permissions regularly

### Common Setups

**Small Business (1-3 stores):**
- Owner: Account Admin
- Manager: Account Manager
- Staff: Display Operator

**Multi-Location Retail:**
- Corporate: Account Admin
- Regional Managers: Admin for their region
- Store Managers: Manager for their store
- Staff: Display Operator

**Franchise Model:**
- Franchisor: Account Admin
- Franchisees: Admin for their store only
- Corporate Marketing: Account Manager

## Security

### Access Reviews

- Review user list monthly
- Deactivate unused accounts
- Verify role assignments quarterly
- Audit Admin access semi-annually

### Account Protection

- Use strong passwords (minimum 8 characters)
- Enable two-factor authentication for Admins
- Never share account credentials
- Log out after each session

## Next Steps

- **[User Management](./user-management.md)** - Add and manage team members
- **[Multi-Store Management](./multi-store-management.md)** - Manage multiple locations
- **[Display Setup](./display-setup.md)** - Configure displays with proper permissions
