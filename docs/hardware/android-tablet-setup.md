# Android Tablet Setup Guide

Turn your Android tablet into a professional digital signage display. Android tablets offer flexibility across price points and manufacturers, with options ranging from $100-400.

## What You'll Need

- **Hardware:** Android tablet (see compatibility below)
- **Time:** 20-30 minutes for initial setup
- **Skill Level:** Intermediate (varies by manufacturer)
- **Accessories:** USB-C or Micro-USB charging cable, optional wall mount

## Compatibility Check

### OS Requirements

- **Android 9.0 (Pie) or newer** required
- **Minimum specs:** 2GB RAM, 16GB storage

### Tested Brands

BrandCast has been tested on the following Android tablet brands:

- ✅ **Samsung Galaxy Tab** series
- ✅ **Lenovo Tab** series
- ✅ **Google Pixel Tablet**
- ✅ **ASUS ZenPad** series
- ✅ **Amazon Fire Tablets** (see [Fire Tablet guide](./fire-tablet-setup.md) for Fire-specific instructions)

**Note:** Android tablets vary significantly by manufacturer. Settings locations may differ from this guide.

### How to Check Your Model

1. Go to **Settings** → **About tablet** (or **About device**)
2. Look for **Android version**
3. Check **RAM** and **Storage** specifications
4. Verify Android version is 9.0 or newer

**Not Sure?** Email us your tablet model at support@brandcast.app and we'll confirm compatibility.

---

## Important: Kiosk Mode Challenges on Android

**Android tablet kiosk mode varies significantly by manufacturer.** Unlike iPads (with built-in Guided Access) or Fire Tablets (with launcher control), Android tablets require third-party solutions or Android Enterprise configuration.

### Kiosk Mode Options

**Option A: Third-Party Kiosk App (RECOMMENDED for most users)**
- Use apps like **Fully Kiosk Browser** or **Kiosk Browser Lockdown**
- Easiest for single-device setups
- $15-30 one-time license per device
- Works on most Android tablets

**Option B: Android Enterprise (for business-managed devices)**
- Requires Android Enterprise enrollment
- Best for multi-device deployments (5+ tablets)
- More complex setup, IT knowledge recommended
- Free but requires Google Workspace or MDM solution

**Option C: Manual Configuration (NOT RECOMMENDED)**
- No true kiosk mode, relies on hiding apps
- Not secure for public-facing displays
- Easy for users to exit BrandCast app

**This guide covers Option A (Third-Party Kiosk App) using Fully Kiosk Browser as the recommended solution.**

---

## Step 1: Initial Tablet Setup

### For Brand New Tablets

1. **Power on** your Android tablet
2. **Connect to WiFi** - Select your network and enter password
3. **Sign in with Google account** - Or skip if using for business only
4. **Complete initial setup** - Skip optional services (Assistant, backups)

### Skip Lock Screen Ads (Some Manufacturers)

Some budget Android tablets show ads on the lock screen:

1. Check **Settings** → **Display** → **Lock screen**
2. Look for options to disable ads or promotions
3. May require one-time payment (varies by manufacturer)

---

## Step 2: Download BrandCast App

### From Google Play Store (Coming Soon)

Once BrandCast is available on Google Play:

1. Open **Google Play Store**
2. Search for **"BrandCast Digital Signage"**
3. Tap **Install**
4. Wait for download to complete

### Via APK (Alpha Testing)

During alpha testing:

1. **Open Chrome browser** on your tablet
2. Navigate to: **https://help.brandcast.app/downloads**
3. Tap **Download BrandCast APK for Android**
4. When prompted, tap **OK** to allow download
5. Open **Settings** → **Security** → **Install unknown apps**
6. Find **Chrome** in the list
7. Toggle **Allow from this source** to ON
8. Go to **Downloads** folder (usually in **Files** app)
9. Tap **BrandCast.apk** → **Install**
10. Tap **Open** when installation completes

---

## Step 3: Install Fully Kiosk Browser (Recommended)

**Fully Kiosk Browser** is a third-party app that locks your tablet into kiosk mode.

### Install Fully Kiosk Browser

1. Open **Google Play Store**
2. Search for **"Fully Kiosk Browser"**
3. Tap **Install**
4. Open the app when installation completes

### Purchase License (Required for Full Features)

1. In Fully Kiosk Browser, tap the menu (☰) → **Register App**
2. Tap **Purchase License** ($14.90 one-time, as of 2024)
3. Complete purchase through Google Play
4. Restart Fully Kiosk Browser

**Why purchase?** The free version has ads and limited features. The paid license removes ads and unlocks full kiosk mode.

---

## Step 4: Configure Fully Kiosk Browser

### Set BrandCast as Home URL

1. Open **Fully Kiosk Browser**
2. Tap menu (☰) → **Settings**
3. Scroll to **Start URL**
4. Enter: **https://app.brandcast.app**
5. Tap **Save**

### Enable Kiosk Mode

1. In Settings, go to **Kiosk Mode** section
2. Enable the following:
   - ✅ **Kiosk Mode** (master toggle)
   - ✅ **Block Status Bar** (prevents swiping down)
   - ✅ **Block System Bar** (hides navigation buttons)
   - ✅ **Block External Apps**
   - ✅ **Block All Touches** for other apps
   - ✅ **Auto-Start on Boot**

### Set Device Administrator

To fully lock the tablet:

1. In Settings, go to **Device Admin & Motion Detection**
2. Tap **Enable Device Administrator**
3. Confirm when prompted
4. This allows Fully Kiosk to lock the device fully

**Important:** You'll need the lock code to exit kiosk mode later.

### Set Lock Code

1. In Settings, go to **Password/PIN**
2. Tap **Set PIN/Password**
3. Enter a 4-6 digit PIN (SAVE THIS SOMEWHERE SAFE!)
4. Re-enter to confirm

---

## Step 5: Configure Display Settings

### Disable Sleep Mode

1. Exit Fully Kiosk temporarily (enter PIN)
2. Go to device **Settings** → **Display**
3. Tap **Sleep** or **Screen timeout**
4. Select **30 minutes** or maximum available
5. **Note:** Many Android tablets don't allow "Never" sleep

**Workaround:** Fully Kiosk has a built-in screen wake feature:

1. In Fully Kiosk Settings → **Screensaver & Daydream**
2. Enable **Keep Screen On**
3. This keeps screen active even if device tries to sleep

### Disable Automatic Updates

To prevent interruptions:

1. Go to device **Settings** → **System** → **System update**
2. Disable **Automatic system updates**
3. Go to **Google Play Store** → Menu → **Settings** → **Auto-update apps**
4. Select **Don't auto-update apps**

---

## Step 6: Launch BrandCast in Kiosk Mode

### First-Time Setup

1. **Open Fully Kiosk Browser** (it should auto-load BrandCast)
2. **Sign in** to BrandCast with your account
3. **Select your display** from the list
4. **Allow permissions** when prompted

### Activate Kiosk Mode

1. Once BrandCast is loaded, press the **Power button** briefly
2. Fully Kiosk will activate kiosk mode automatically on wake
3. Verify you can't exit the app or access other apps

### Test Kiosk Mode

- Try pressing **Home button** - Should stay in Fully Kiosk
- Try pressing **Back button** - Should stay in Fully Kiosk
- Try swiping down from top - Status bar should be blocked

---

## Step 7: Exiting Kiosk Mode

### To Exit Kiosk Mode

1. **Tap the screen 5 times rapidly** in the same spot
2. A password prompt will appear
3. Enter your lock code/PIN
4. Tap **Exit Kiosk Mode**

**Alternative:** Long-press the Power button → **Restart** → Exit kiosk before it auto-starts

**Forgot Your PIN?**
- Uninstall Fully Kiosk Browser from **Settings** → **Apps**
- Reinstall and reconfigure (you'll lose kiosk settings)

---

## Troubleshooting

### Kiosk Mode Not Working / Can Still Exit App

**Solution:**
1. Verify Fully Kiosk Browser has Device Administrator enabled
2. Check that all kiosk mode settings are enabled
3. Ensure you purchased the full license (free version is limited)
4. Restart tablet and try again

### Screen Still Sleeps

**Solution:**
1. In Fully Kiosk Settings → enable **Keep Screen On**
2. In device Settings → Display → Sleep → set to maximum time
3. Keep tablet plugged in (some tablets only allow "never sleep" when charging)

### Navigation Buttons Still Visible

**Solution:**
1. Enable **Block System Bar** in Fully Kiosk Settings
2. Enable **Immersive Mode** if available
3. Some tablets don't allow full hiding of navigation bar (Samsung, Google Pixel)

### BrandCast App Doesn't Load / Blank Screen

**Solution:**
1. Exit Fully Kiosk (5 taps → enter PIN)
2. Check WiFi connection
3. Try loading https://app.brandcast.app in Fully Kiosk browser
4. If still blank, check BrandCast admin panel to verify display has content assigned
5. Email support@brandcast.app if issue persists

### Automatic Updates Keep Interrupting

**Solution:**
1. Disable system updates (Settings → System → System update → OFF)
2. Disable Play Store auto-updates (Play Store → Settings → Don't auto-update)
3. Consider using Android Enterprise for better control (Option B)

### Battery Drains Quickly

**Solution:**
1. Reduce screen brightness (Settings → Display → Brightness)
2. Keep tablet plugged in during operation
3. Disable unnecessary background apps (Settings → Apps → Force stop unused apps)

---

## Manufacturer-Specific Notes

### Samsung Galaxy Tab Series

**Samsung Knox Warning:**
- Some Galaxy Tabs have Knox security that may interfere with kiosk apps
- If you see Knox warnings, they can usually be ignored
- Knox doesn't prevent Fully Kiosk from working

**Game Mode Battery Warning:**
- Samsung tablets may show "Game Mode" notifications
- Disable in Settings → Advanced features → Game Launcher

### Lenovo Tab Series

**Lenovo Productivity Mode:**
- Some Lenovo tablets have built-in kiosk mode
- Settings → Display → Kiosk Mode
- Can be used instead of Fully Kiosk (basic features only)

### Google Pixel Tablet

**Charging Dock Integration:**
- Pixel Tablet includes a charging dock/speaker
- Can be used as a countertop display
- Dock doesn't interfere with Fully Kiosk Browser

---

## Mounting Your Android Tablet

### Recommended Mounts

**Countertop Stands:**
- Universal tablet stand ($15-30)
- Adjustable viewing angle
- Weighted base for stability

**Wall Mounts:**
- VESA-compatible tablet wall mount ($20-50)
- Adhesive wall mount (damage-free, $15-30)

**Security Enclosures:**
- Lockable kiosk enclosure ($80-150)
- Tamper-resistant for public spaces
- Built-in cable management

**Search Tips:**
- Search for "[Your tablet model] wall mount" on Amazon
- Look for universal mounts sized for your screen (e.g., "10-inch tablet mount")

### Mounting Tips

- ✅ Mount near power outlet (USB-C or Micro-USB)
- ✅ Use cable management clips to hide charging cable
- ✅ Consider viewing height (eye level or counter height)
- ✅ Avoid direct sunlight (causes overheating)
- ✅ Test kiosk mode before permanent installation

---

## Alternative: Android Enterprise Setup

For businesses deploying 5+ tablets, Android Enterprise provides centralized management.

### Requirements

- Google Workspace account or third-party MDM solution
- Android 9.0+ tablets
- IT administrator knowledge

### Benefits

- Centralized kiosk mode configuration
- Remote device management
- No per-device kiosk app licenses needed
- More secure than third-party apps

### Setup Overview

1. Enroll tablets in Android Enterprise
2. Configure kiosk mode policy (single-app mode)
3. Deploy BrandCast app to all devices
4. Lock devices to BrandCast app

**Learn More:** [Android Enterprise Kiosk Mode Documentation](https://developers.google.com/android/work/requirements/lock-task)

**Need help with Android Enterprise?** Email support@brandcast.app

---

## Next Steps

✅ **Tablet is set up!** Now configure your content:

1. **[Upload Content](../features/media-library.md)** - Add images, videos, and more
2. **[Create Layouts](../features/layouts.md)** - Design how content appears
3. **[Assign to Display](../workflows/content-association.md)** - Push content to your tablet

---

## Still Stuck?

**Get help:**
- 📧 Email: support@brandcast.app (4-hour response time)
- 📖 Docs: https://help.brandcast.app
- 💬 Live chat: Available in your admin dashboard

**Business Hours:** Monday-Friday, 9am-5pm ET

---

**Setup time:** ~20-30 minutes | **Difficulty:** ⭐⭐ Intermediate | **Cost:** $100-400 (tablet) + $15-30 (Fully Kiosk license) + $20-50 (mount)
