---
title: Common Issues
---

# Common Issues

General troubleshooting guide for common BrandCast problems and solutions.

## Quick Diagnosis

### "My display isn't working"

**Start here:**
1. Is the display powered on and browser open?
2. Is the display showing online in your dashboard?
3. Is there a layout assigned to the display?
4. Is the layout published (not draft)?

**See:** [Display Problems](./display-problems.md) for detailed display troubleshooting

---

### "My content isn't showing"

**Check these:**
1. Is the content source active?
2. Is content assigned to a layout area?
3. Is the layout assigned to a display?
4. Has the content been published?

**See:** [Content Problems](./content-problems.md) for detailed content troubleshooting

---

### "My integration isn't updating"

**Verify:**
1. Is the integration connected and authorized?
2. Has the API rate limit been exceeded?
3. Is the refresh interval set appropriately?
4. Are credentials still valid?

**See:** [Integration Problems](./integration-problems.md) for detailed integration troubleshooting

---

## Login and Authentication

### Can't Log In

**Symptoms:**
- "Invalid email or password" error
- Login page redirects back to itself
- Account locked message
- Email not recognized

**Common Causes:**

**Wrong Email or Password:**
1. Verify email address spelling
2. Check for typos (common: .com vs .net)
3. Try password reset
4. Check if caps lock is on

**Account Not Activated:**
1. Check email for activation link
2. Resend activation email
3. Check spam/junk folder
4. Contact support if no email received

**Account Locked:**
- Too many failed login attempts (5+)
- Locked for 30 minutes
- Wait or contact support for unlock

**Browser Issues:**
1. Clear browser cache and cookies
2. Try incognito/private mode
3. Try different browser
4. Disable browser extensions

**Solutions:**

**Password Reset:**
1. Go to login page
2. Click **Forgot Password?**
3. Enter your email
4. Check email for reset link (expires in 1 hour)
5. Create new password
6. Log in with new password

**Resend Activation:**
1. Go to login page
2. Click **Resend Activation Email**
3. Enter your email
4. Check email inbox
5. Click activation link
6. Complete account setup

**Account Locked:**
- Wait 30 minutes for automatic unlock
- OR contact support@brandcast.app for immediate unlock
- Provide: Email address, approximate lockout time

---

### Two-Factor Authentication (2FA) Issues

**Can't Access 2FA Code:**

**Lost Phone/Authenticator App:**
1. Click **Use Recovery Code** on 2FA prompt
2. Enter one of your saved recovery codes
3. Log in successfully
4. Go to **Settings** → **Security**
5. Disable and re-enable 2FA with new device
6. Save new recovery codes

**Recovery Codes Lost:**
- Contact support@brandcast.app with:
  - Account email
  - Last successful login date
  - IP address (if known)
  - Verification of account ownership

**Authenticator Code Not Working:**
1. Check device time is synchronized
2. Wait for next code (codes refresh every 30 seconds)
3. Try code from different authenticator (if set up on multiple devices)
4. Use recovery code instead

---

## Account Access

### Wrong Account or Store Showing

**Symptoms:**
- See different stores than expected
- Missing content or displays
- Different user role than expected

**Common Causes:**

**Multiple Accounts:**
- You may have multiple BrandCast accounts
- Check which email you used to log in
- Verify account name in top-right corner

**Store Access Changed:**
- Your administrator may have changed your store access
- Check **Store Access** in your profile
- Contact admin to request access

**Wrong Primary Store:**
- Your primary store determines default view
- Switch to correct store using store selector
- Update primary store in profile settings

**Solutions:**

**Switch Accounts:**
1. Log out
2. Log in with correct email address
3. Verify you see expected stores

**Check Store Access:**
1. Click your name (top-right)
2. Go to **Profile**
3. View **Store Access** section
4. See which stores you have access to
5. Contact admin if stores are missing

**Change Primary Store:**
1. Go to **Profile** → **Store Access**
2. Find desired primary store
3. Click **Set as Primary**
4. Refresh page to see new default

---

### Missing Features or Menu Items

**Symptoms:**
- Can't see certain menu items
- Features grayed out or disabled
- "Permission denied" errors

**Common Causes:**

**Insufficient Permissions:**
- Your role doesn't allow access to that feature
- Check your role: **Profile** → **Role**
- Contact admin to request role upgrade

**Feature Not in Your Plan:**
- Some features are plan-specific
- Check your subscription: **Settings** → **Billing**
- Upgrade plan if needed

**Store-Specific Access:**
- Feature may only be available in certain stores
- Switch to store that has feature enabled
- Contact admin to enable feature for your store

**Solutions:**

**Verify Your Role:**
1. Go to **Profile**
2. Check **Role** field
3. See [User Roles](../workflows/user-management.md#user-roles) for permission details
4. Request role change from admin if needed

**Check Subscription:**
1. Go to **Settings** → **Billing** (Account Admin only)
2. See current plan
3. Compare with [Pricing Page](https://brandcast.app/pricing)
4. Upgrade if feature requires higher plan

**Request Access:**
1. Contact your Account Admin
2. Specify which feature you need access to
3. Explain business justification
4. Admin can grant role or enable feature

---

## Browser and Connectivity

### Browser Compatibility

**Supported Browsers:**
- ✅ Chrome 90+ (recommended)
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+ (limited support)
- ❌ Internet Explorer (not supported)

**Browser Issues:**

**Site Not Loading:**
1. Clear browser cache: Ctrl+Shift+Delete (Windows/Linux) or Cmd+Shift+Delete (Mac)
2. Clear cookies for brandcast.app
3. Disable browser extensions temporarily
4. Try incognito/private mode
5. Update browser to latest version

**Layout Broken or Misaligned:**
1. Zoom should be at 100% (Ctrl+0 or Cmd+0)
2. Browser window size at least 1024px wide
3. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
4. Check browser compatibility

**Features Not Working:**
1. JavaScript must be enabled
2. Cookies must be enabled
3. Pop-up blocker may need exception for brandcast.app
4. Check browser console for errors (F12)

---

### Network and Connectivity

**Connection Problems:**

**Slow Loading:**
- Check internet speed (minimum 5 Mbps recommended)
- Test at [speedtest.net](https://speedtest.net)
- Close other bandwidth-heavy applications
- Try different network if available

**Intermittent Disconnections:**
- WiFi signal strength may be weak
- Move closer to router or use ethernet
- Check for network congestion
- Contact IT about network stability

**Firewall Blocking:**
BrandCast requires access to:
- `*.brandcast.app` (all subdomains)
- `*.googleapis.com` (for Google Cloud)
- Outbound HTTPS (port 443)
- WebSocket connections

If behind corporate firewall, ask IT to whitelist these domains.

**VPN Issues:**
- Some VPNs may interfere with BrandCast
- Try disabling VPN temporarily
- If VPN required, ensure WebSocket support
- Contact support for VPN compatibility

---

## Performance Issues

### Dashboard Slow or Laggy

**Symptoms:**
- Pages load slowly
- Clicks don't respond immediately
- Animations choppy
- Timeouts or errors

**Common Causes:**

**Too Many Tabs Open:**
- Close unused browser tabs
- Each tab uses memory
- BrandCast works best as primary tab

**Browser Cache Full:**
1. Clear browser cache
2. Close and reopen browser
3. Restart computer if issue persists

**Large Media Library:**
- Media library with 1000+ items may load slowly
- Use search and filters to narrow results
- Archive old media you're not using
- Consider organizing into folders (Enterprise)

**Slow Internet:**
- Test internet speed
- Minimum 5 Mbps recommended
- 10+ Mbps for better experience
- Upgrade connection if consistently slow

**Solutions:**

**Optimize Browser:**
1. Close unnecessary tabs and applications
2. Clear cache and cookies
3. Disable unused extensions
4. Update browser to latest version
5. Restart browser

**Reduce Data Load:**
1. Use date range filters
2. Filter by store if multi-store account
3. Search for specific items instead of browsing all
4. Archive old content regularly

**Check Connection:**
1. Run speed test
2. Use ethernet instead of WiFi if possible
3. Close bandwidth-heavy apps (video streaming, downloads)
4. Check for network congestion

---

## File Upload Issues

### Can't Upload Media

**Symptoms:**
- Upload fails or times out
- "File too large" error
- Unsupported format error
- Upload stuck at 0%

**Common Solutions:**

**File Size Limits:**
- Images: 25 MB maximum
- Videos: 500 MB maximum (Professional/Enterprise: 2 GB)
- Reduce file size if needed:
  - Images: Use compression tools (TinyPNG, ImageOptim)
  - Videos: Use compression tools (HandBrake, FFmpeg)

**Supported Formats:**
- Images: JPG, JPEG, PNG, GIF
- Videos: MP4, MOV, AVI (MP4 H.264 recommended)
- Not supported: BMP, TIFF, WebP, MKV, FLV

**File Name Issues:**
- Avoid special characters in file names
- Use only letters, numbers, hyphens, underscores
- Keep file names under 100 characters
- Don't use emojis or non-English characters

**Upload Process:**
1. Check file format is supported
2. Verify file size is within limits
3. Ensure stable internet connection
4. Wait for upload to complete (may take time for large files)
5. Don't close browser during upload

**Upload Stuck:**
1. Cancel upload
2. Refresh page
3. Clear browser cache
4. Try again with smaller batch (upload 5-10 at a time)
5. Try different browser

---

## Billing and Subscription

### Payment Failed

**Common Causes:**

**Card Declined:**
- Insufficient funds
- Card expired
- Card number incorrect
- Billing address doesn't match
- Bank fraud protection triggered

**Solutions:**

**Update Payment Method:**
1. Go to **Settings** → **Billing**
2. Click **Update Payment Method**
3. Enter new card details
4. Verify billing address matches card
5. Save and retry payment

**Retry Payment:**
1. Go to **Settings** → **Billing**
2. Find failed invoice
3. Click **Retry Payment**
4. Confirm payment method
5. Process payment

**Contact Bank:**
- Call bank if card repeatedly declined
- May need to approve charge
- Verify card has international payment enabled (if outside US)
- Ask about fraud protection hold

---

### Subscription Not Active

**Symptoms:**
- "Trial expired" message
- Features disabled
- Can't create new content
- Account access limited

**Common Causes:**

**Trial Expired:**
- 14-day trial has ended
- Need to add payment method
- Need to select paid plan

**Payment Failed:**
- Last payment didn't process
- Account suspended due to non-payment
- Grace period expired

**Subscription Canceled:**
- You or admin canceled subscription
- Cancellation took effect
- Account in read-only mode

**Solutions:**

**Activate Subscription:**
1. Go to **Settings** → **Billing**
2. Click **Choose Plan**
3. Select plan (Starter, Professional, Enterprise)
4. Enter payment details
5. Confirm subscription

**Resolve Failed Payment:**
1. Update payment method
2. Retry failed payment
3. Account reactivates immediately upon successful payment

**Reactivate Canceled Subscription:**
1. Go to **Settings** → **Billing**
2. Click **Reactivate Subscription**
3. Select plan
4. Confirm payment
5. Account restores full access

---

## Getting Help

### Before Contacting Support

**Gather Information:**

1. **Error Details:**
   - What were you trying to do?
   - What happened instead?
   - Error message (screenshot if possible)
   - When did it start happening?

2. **Account Information:**
   - Your email address
   - Store name/code
   - Account subscription plan

3. **Technical Details:**
   - Browser and version
   - Operating system
   - Internet speed
   - Screenshots or screen recording

4. **Troubleshooting Already Tried:**
   - List steps you've already attempted
   - Results of each attempt

---

### How to Contact Support

**Email Support:**
- Email: support@brandcast.app
- Response time: 24-48 hours (Standard)
- Response time: 4-8 hours (Professional/Enterprise)
- Include all information listed above

**Live Chat:**
- Available in dashboard (bottom-right corner)
- Available: Monday-Friday, 9 AM - 5 PM EST
- Instant responses during business hours
- Professional/Enterprise plans only

**Emergency Support:**
- Email: emergency@brandcast.app
- Critical issues only (displays down during business hours, data loss)
- Enterprise plans only
- 1-hour response time

**Knowledge Base:**
- Visit: [docs.brandcast.app](https://docs.brandcast.app)
- Search for solutions
- Step-by-step guides
- Video tutorials (coming soon)

---

### Community Resources

**BrandCast Community Forum:**
- Coming soon
- Ask questions
- Share solutions
- Connect with other users

**Feature Requests:**
- Email: feedback@brandcast.app
- Submit feature ideas
- Vote on proposed features
- See roadmap updates

**Bug Reports:**
- Email: bugs@brandcast.app
- Report issues
- Include reproduction steps
- Receive updates on fixes

---

## Troubleshooting Checklist

Before contacting support, try these steps:

**Level 1: Quick Fixes (5 minutes)**
- [ ] Refresh the page (Ctrl+R or Cmd+R)
- [ ] Log out and log back in
- [ ] Clear browser cache and cookies
- [ ] Try different browser
- [ ] Check internet connection

**Level 2: Common Solutions (15 minutes)**
- [ ] Check user role and permissions
- [ ] Verify subscription is active
- [ ] Review recent changes to account
- [ ] Check for error messages in browser console (F12)
- [ ] Try on different device

**Level 3: In-Depth Troubleshooting (30 minutes)**
- [ ] Review audit logs for recent changes
- [ ] Check specific troubleshooting guide (Display, Content, Integration)
- [ ] Contact support with detailed information
- [ ] Gather screenshots and error details

---

## Common Error Messages

### "Permission Denied"

**Cause:** Your user role doesn't allow this action

**Solution:**
1. Check your role in **Profile**
2. Contact admin to request permission
3. See [User Roles](../workflows/user-management.md#user-roles) for details

---

### "Session Expired"

**Cause:** You've been logged in too long (24 hours) or session invalidated

**Solution:**
1. Log out
2. Log back in
3. Continue working
4. Enable "Remember Me" to stay logged in longer

---

### "Network Error"

**Cause:** Lost connection to BrandCast servers

**Solution:**
1. Check internet connection
2. Refresh page
3. If problem persists, check [status.brandcast.app](https://status.brandcast.app) for outages
4. Contact support if only you are affected

---

### "Content Source Not Found"

**Cause:** Content source was deleted or you don't have access

**Solution:**
1. Verify content source still exists
2. Check if it's assigned to your store
3. Verify it's active (not disabled)
4. Contact admin if it should exist

---

### "Display Registration Failed"

**Cause:** Registration code expired, invalid, or display already registered

**Solution:**
1. Generate new registration code
2. Ensure display is active
3. Check code entered correctly (case-sensitive)
4. See [Display Problems](./display-problems.md#display-wont-register)

---

## Next Steps

**Specific Issue Types:**
- **[Display Problems](./display-problems.md)** - Display won't register, offline, not showing content
- **[Content Problems](./content-problems.md)** - Content not displaying, wrong content, update issues
- **[Integration Problems](./integration-problems.md)** - RSS, weather, calendar, scheduling integration issues

**Setup and Configuration:**
- **[Quick Start Guide](../getting-started/quick-start.md)** - Initial account setup
- **[Setup Checklist](../getting-started/setup-checklist.md)** - Production deployment checklist
- **[User Management](../workflows/user-management.md)** - Managing team access

**Feature Documentation:**
- **[Displays](../features/displays.md)** - Display management
- **[Content Library](../features/content-library.md)** - Content management
- **[Layouts](../features/layouts.md)** - Layout design
- **[Integrations](../features/integrations.md)** - Third-party integrations
