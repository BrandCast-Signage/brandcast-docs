# Computer & TV HDMI Setup Guide

Turn any computer, laptop, smart TV, or HDMI streaming device into a professional digital signage display using a web browser. This is the most flexible BYOD option.

## What You'll Need

- **Hardware:** Computer, laptop, smart TV, or HDMI streaming device (see compatibility below)
- **Time:** 20-30 minutes for initial setup
- **Skill Level:** Intermediate
- **Accessories:** Keyboard/mouse for initial setup (can be removed after configuration)

## Compatibility Check

### Supported Devices

BrandCast supports browser-based display on:

- ✅ **Desktop Computers** (Windows 10+, macOS 10.14+, Linux)
- ✅ **Laptops** (Windows 10+, macOS 10.14+, Linux)
- ✅ **Smart TVs** (with built-in web browser: Samsung, LG, Sony, etc.)
- ✅ **HDMI Streaming Sticks**
  - Amazon Fire TV Stick (2nd gen or newer)
  - Roku Streaming Stick (3rd gen or newer)
  - Google Chromecast with Google TV
- ✅ **HDMI Streaming Boxes**
  - Apple TV (4th gen or newer)
  - Roku Ultra/Express
  - NVIDIA Shield TV
  - Amazon Fire TV Cube

### Browser Requirements

- **Chrome/Chromium 90+** (recommended)
- **Firefox 88+**
- **Safari 14+** (macOS/iOS)
- **Edge 90+** (Windows)

**Internet Connection:** 10 Mbps+ recommended for smooth video playback

---

## Use Cases

### Best For:
- **Back-office displays** (kitchen displays, warehouse dashboards)
- **Corporate lobby displays** (receptionist monitors, visitor information)
- **Employee break rooms** (internal communications, announcements)
- **Conference rooms** (meeting room displays, schedule boards)
- **Retail back-of-house** (inventory screens, employee messaging)

### Not Recommended For:
- ❌ Customer-facing retail (use dedicated tablets/Pi for better reliability)
- ❌ 24/7 high-traffic areas (computers require more maintenance than dedicated devices)
- ❌ Outdoor displays (computers not weatherproof)

---

## Setup Instructions by Device Type

### Option 1: Desktop/Laptop Computer

#### Step 1: Prepare the Computer

**For New Setups:**
1. **Install OS** if needed (Windows 10+, macOS 10.14+, Ubuntu 20.04+)
2. **Connect to network** via WiFi or Ethernet (Ethernet recommended for reliability)
3. **Update OS** to latest version
4. **Install Chrome browser** from https://google.com/chrome

**For Existing Computers:**
1. **Back up important files** (you'll be dedicating this computer to digital signage)
2. **Remove unnecessary software** to improve performance
3. **Disable automatic updates** during business hours (Settings → Windows Update → Active Hours)

#### Step 2: Configure Browser for Kiosk Mode

**Windows - Chrome Kiosk Mode:**

1. **Create a kiosk shortcut:**
   - Right-click on Desktop → New → Shortcut
   - Enter this target:
     ```
     "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --app=https://app.brandcast.app --no-first-run --disable-session-crashed-bubble --disable-infobars
     ```
   - Name it "BrandCast Kiosk"

2. **Configure auto-start:**
   - Press `Win + R`, type `shell:startup`, press Enter
   - Copy the "BrandCast Kiosk" shortcut to this folder
   - Chrome will now launch in kiosk mode on boot

**macOS - Chrome Kiosk Mode:**

1. **Create a launch script:**
   - Open **Terminal**
   - Run:
     ```bash
     nano ~/launch-brandcast.sh
     ```
   - Add this content:
     ```bash
     #!/bin/bash
     /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk --app=https://app.brandcast.app --no-first-run --disable-session-crashed-bubble
     ```
   - Press `Ctrl + X`, then `Y`, then Enter to save

2. **Make it executable:**
   ```bash
   chmod +x ~/launch-brandcast.sh
   ```

3. **Configure auto-start:**
   - Open **System Preferences** → **Users & Groups**
   - Click your username → **Login Items**
   - Click `+` and add the `launch-brandcast.sh` script

**Linux - Chrome Kiosk Mode:**

1. **Install Chrome:**
   ```bash
   wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
   sudo dpkg -i google-chrome-stable_current_amd64.deb
   ```

2. **Create autostart entry:**
   ```bash
   mkdir -p ~/.config/autostart
   nano ~/.config/autostart/brandcast.desktop
   ```

3. **Add this content:**
   ```ini
   [Desktop Entry]
   Type=Application
   Name=BrandCast Kiosk
   Exec=google-chrome --kiosk --app=https://app.brandcast.app --no-first-run --disable-session-crashed-bubble
   Terminal=false
   ```

#### Step 3: Disable Power Management

**Windows:**
1. Go to **Settings** → **System** → **Power & Sleep**
2. Set **Screen** to "Never"
3. Set **Sleep** to "Never"
4. Go to **Additional power settings** → **Change plan settings** → **Put the computer to sleep**: "Never"

**macOS:**
1. Go to **System Preferences** → **Energy Saver**
2. Set **Turn display off after** to "Never"
3. Uncheck **Put hard disks to sleep when possible**
4. Check **Prevent computer from sleeping automatically when display is off**

**Linux:**
1. Install `xscreensaver`:
   ```bash
   sudo apt install xscreensaver
   ```
2. Run `xscreensaver-demo`
3. Set **Mode** to "Disable Screen Saver"

#### Step 4: Sign In to BrandCast

1. **Restart the computer** (kiosk mode will auto-launch)
2. **Sign in** with your BrandCast account credentials
3. **Select your display** from the list
4. **Allow permissions** when prompted (fullscreen, notifications)

---

### Option 2: Smart TV (Built-in Browser)

Most modern smart TVs have built-in web browsers. The exact steps vary by manufacturer.

#### Samsung Smart TV

1. **Open Internet Browser** (press Smart Hub button → Apps → Internet)
2. **Navigate to** https://app.brandcast.app
3. **Sign in** with your BrandCast account
4. **Enable fullscreen** (varies by model, usually Settings → Picture → Picture Size → Screen Fit)
5. **Disable sleep timer** (Settings → General → System Manager → Time → Sleep Timer → Off)

#### LG Smart TV (webOS)

1. **Open Web Browser** (press Home button → Apps → Web Browser)
2. **Navigate to** https://app.brandcast.app
3. **Sign in** with your BrandCast account
4. **Enable fullscreen** (Settings → Picture → Aspect Ratio → Just Scan)
5. **Disable sleep timer** (Settings → Time → Timers → Auto Off → Off)

#### Sony Smart TV (Android TV)

1. **Open Chrome/Browser** (Home → Apps → Chrome)
2. **Navigate to** https://app.brandcast.app
3. **Sign in** with your BrandCast account
4. **Enable fullscreen** (press Select button while on page, choose "Request Desktop Site")

**Limitations of Smart TVs:**
- ⚠️ No auto-start (requires manual launch after power cycle)
- ⚠️ Browsers may be outdated or limited
- ⚠️ Performance varies widely by model
- ⚠️ **Recommendation:** Use HDMI streaming stick instead for better reliability

---

### Option 3: Amazon Fire TV Stick

Fire TV Stick is one of the best HDMI streaming options for browser-based digital signage.

#### Step 1: Initial Setup

1. **Plug Fire TV Stick** into HDMI port on TV/monitor
2. **Connect power** via USB (use included adapter, not TV USB port)
3. **Follow on-screen setup** to connect to WiFi
4. **Sign in** with Amazon account (or skip for business use)

#### Step 2: Install Silk Browser

1. Press **Home** button on Fire TV remote
2. Go to **Find** → **Search**
3. Type "**Silk Browser**"
4. Select **Amazon Silk Browser** → **Download**
5. Wait for installation

#### Step 3: Configure BrandCast

1. **Open Silk Browser**
2. **Navigate to** https://app.brandcast.app
3. **Sign in** with your BrandCast account
4. **Select your display** from the list
5. **Press Select button** on remote → Choose "Request Desktop Site"
6. **Press Menu button** (three lines) → **Settings** → **Fullscreen Browsing** → Enable

#### Step 4: Auto-Launch on Boot (Advanced)

Unfortunately, Fire TV doesn't support auto-launching apps on boot without third-party tools. Options:

**Option A: Manual Launch** (simplest)
- Open Silk Browser and navigate to BrandCast after each power cycle
- Best for displays that stay on 24/7

**Option B: Kiosk Launcher App** (requires sideloading)
- Install "Fully Kiosk Browser" from APK ($15 license)
- Configure auto-start to https://app.brandcast.app
- More complex setup, better reliability

---

### Option 4: Roku Streaming Stick/Box

Roku devices have limited browser support. You'll need a workaround.

#### Step 1: Initial Setup

1. **Plug Roku** into HDMI port on TV/monitor
2. **Connect power** and follow on-screen setup
3. **Connect to WiFi**

#### Step 2: Use Screen Mirroring (Workaround)

Roku doesn't have a built-in browser, so you'll need to mirror from another device:

1. **On Roku:** Settings → System → Screen Mirroring → Screen Mirroring Mode → "Always Allow"
2. **On Windows PC:** Press `Win + K` → Select your Roku → Mirror screen
3. **On macOS:** Control Center → Screen Mirroring → Select Roku
4. **Open BrandCast** on mirroring device

**Limitation:** Requires a computer to stay on and mirroring. Not ideal for dedicated signage.

**Recommendation:** Use Fire TV Stick, Chromecast, or dedicated computer instead.

---

### Option 5: Google Chromecast with Google TV

Chromecast with Google TV (NOT the older Chromecast) has a full Android TV interface.

#### Step 1: Initial Setup

1. **Plug Chromecast** into HDMI port
2. **Connect power** via USB
3. **Follow on-screen setup** with Google TV remote
4. **Connect to WiFi** and sign in with Google account

#### Step 2: Install Chrome Browser

1. Press **Home** button
2. Go to **Apps** → **Search for apps**
3. Type "**Chrome**" or "**Browser**"
4. Install **Google Chrome** (or alternative like Puffin TV Browser)

#### Step 3: Configure BrandCast

1. **Open Chrome**
2. **Navigate to** https://app.brandcast.app
3. **Sign in** with your BrandCast account
4. **Select your display**
5. **Enable fullscreen** (press Select on remote → Settings → Request Desktop Site)

#### Step 4: Disable Sleep

1. Go to **Settings** → **Display & Sound** → **Screen Saver**
2. Set to "Never"
3. Go to **Settings** → **Device Preferences** → **Screen Saver** → **When to Start** → "Never"

---

### Option 6: Apple TV (4K or HD)

Apple TV doesn't have a web browser by default. You'll need to use AirPlay mirroring.

#### Setup with AirPlay Mirroring

1. **On Apple TV:** Settings → AirPlay and HomeKit → AirPlay → "Everyone on Network"
2. **On Mac:** Control Center → Screen Mirroring → Select Apple TV
3. **On Mac:** Open Safari → Navigate to https://app.brandcast.app
4. **Sign in** and select display

**Limitation:** Requires a Mac to stay on and mirroring. Not ideal for dedicated signage.

**Recommendation:** Use Fire TV Stick, Chromecast, or dedicated computer instead.

---

## Advanced Configuration

### Hide Mouse Cursor (Windows)

1. Download and install "AutoHideMouseCursor" (free)
2. Configure to hide cursor after 1 second of inactivity

### Hide Mouse Cursor (macOS)

1. Download "Cursorcerer" (free)
2. Set cursor to transparent

### Hide Mouse Cursor (Linux)

```bash
sudo apt install unclutter
unclutter -idle 1 &
```

Add to `~/.config/autostart/unclutter.desktop`:
```ini
[Desktop Entry]
Type=Application
Name=Unclutter
Exec=unclutter -idle 1
Terminal=false
```

### Disable Keyboard Inputs (Kiosk Security)

**Windows:** Use software like "KeyFreeze" to disable keyboard when not needed

**macOS:** Use "Keyboard Cleaner" app to lock keyboard

**Linux:** Use `xinput` to disable input devices:
```bash
xinput list  # Find keyboard device ID
xinput disable <device-id>
```

### Remote Management (VNC/TeamViewer)

For remote access to manage displays:

**Windows/macOS:**
- Install **TeamViewer** or **AnyDesk** for remote support
- Configure unattended access

**Linux:**
- Install **TightVNC** or **x11vnc** for remote desktop access

---

## Troubleshooting

### Browser Exits Fullscreen Mode

**Solution:**
- Make sure you used the `--kiosk` flag in Chrome shortcut
- Press `F11` to manually enter fullscreen if needed
- Check that no browser extensions are interfering

### Computer Goes to Sleep

**Solution:**
- Verify power settings (Step 3 above)
- On laptops: Close lid settings should be "Do nothing" when plugged in
- Check BIOS settings for power management (advanced)

### Display Turns Off After Inactivity

**Solution:**
- Windows: Control Panel → Hardware and Sound → Power Options → Change plan settings → Turn off display: Never
- macOS: System Preferences → Energy Saver → Turn display off after: Never

### Content Doesn't Load / Slow Performance

**Solution:**
- Check internet speed (run speedtest.net, need 10+ Mbps)
- Close unnecessary background apps
- Clear browser cache: Settings → Privacy → Clear Browsing Data
- Upgrade RAM if computer has < 4GB

### HDMI Stick Overheats

**Solution:**
- Use an HDMI extender cable to move stick away from TV (improves airflow)
- Ensure stick is not covered or in enclosed space
- Consider USB-powered cooling fan for Fire TV Stick

### Keyboard/Mouse Not Working After Setup

**Solution:**
- Bluetooth keyboard/mouse may have disconnected - re-pair in device settings
- Check batteries in wireless keyboard/mouse
- Use wired USB keyboard/mouse for troubleshooting

---

## Mounting & Installation

### Desktop Computer Setup

**Placement Tips:**
- Mount computer behind display or in nearby cabinet/closet
- Use long HDMI cable (up to 50 feet for standard HDMI, 100+ feet for active cables)
- Consider fanless/silent PCs for customer-facing areas
- Use cable management to hide wires

### HDMI Stick Installation

**Best Practices:**
- Use HDMI extender cable (included with most Fire TV Sticks) for better WiFi reception
- Mount stick on back of TV with adhesive velcro strips
- Route power cable cleanly along TV edge with cable clips
- Label which HDMI input is used (e.g., "HDMI 2 - BrandCast")

### TV/Monitor Mounting

**Wall Mounting:**
- Use VESA-compatible TV wall mount (size depends on TV)
- Hire professional installer for TVs > 50 inches
- Ensure wall can support weight (drywall anchors or studs)

**Ceiling Mounting:**
- Use ceiling TV mount with adjustable tilt
- Common in restaurants, waiting rooms, retail back-of-house

---

## Cost Comparison

| Device Type | Hardware Cost | Setup Difficulty | Reliability | Best For |
|-------------|---------------|------------------|-------------|----------|
| **Desktop PC** | $200-500 (or free if existing) | Medium | High | Back-office, employee areas |
| **Laptop** | $300-700 (or free if existing) | Easy | Medium | Temporary displays, mobile setups |
| **Fire TV Stick** | $30-50 | Easy | High | Customer-facing, 24/7 use |
| **Chromecast w/ Google TV** | $50 | Easy | High | Customer-facing, 24/7 use |
| **Roku** | $30-100 | Hard (limited browser) | Low | Not recommended |
| **Apple TV** | $130-180 | Hard (requires Mac) | Low | Not recommended |
| **Smart TV Browser** | $0 (if TV exists) | Medium | Low-Medium | Budget option, limited use |

**Best Value:** Fire TV Stick 4K ($50) + existing TV/monitor

---

## Next Steps

✅ **Display is set up!** Now configure your content:

1. **[Upload Content](../features/media-library.md)** - Add images, videos, and more
2. **[Create Layouts](../features/layouts.md)** - Design how content appears
3. **[Assign to Display](../workflows/content-association.md)** - Push content to your display

---

## Still Stuck?

**Get help:**
- 📧 Email: support@brandcast.app (4-hour response time)
- 📖 Docs: https://help.brandcast.app
- 💬 Live chat: Available in your admin dashboard

**Business Hours:** Monday-Friday, 9am-5pm ET

---

**Setup time:** ~20-30 minutes | **Difficulty:** ⭐⭐ Intermediate | **Cost:** $0-500 depending on device
