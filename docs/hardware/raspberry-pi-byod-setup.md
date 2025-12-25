# Raspberry Pi BYOD Setup Guide

:::caution Community Supported Platform
**Raspberry Pi** is a Community Supported platform. For critical business deployments, we strongly recommend our [Managed Hardware](./managed-android-setup.md) or the [Android Ecosystem](./android-tablet-setup.md) for better reliability and ease of use.
:::

Turn your existing Raspberry Pi into a professional digital signage display. This guide is for customers who **already own** Raspberry Pi hardware and want to use it with BrandCast.

**Looking for a complete kit?** See our [Raspberry Pi Complete Kit Guide](#) for pre-configured, plug-and-play displays.

## What You'll Need

- **Hardware:** Raspberry Pi 4 or Pi 5 (see compatibility below)
- **Accessories:** Power supply (3A+), microSD card (16GB+), HDMI cable, case (recommended)
- **Time:** 30-45 minutes for initial setup
- **Skill Level:** Intermediate to Advanced
- **Tools:** Computer for flashing microSD card

## Compatibility Check

### Supported Models

- ✅ **Raspberry Pi 5** (4GB or 8GB) - RECOMMENDED
- ✅ **Raspberry Pi 4 Model B** (2GB, 4GB, or 8GB) - RECOMMENDED
- ⚠️ **Raspberry Pi 4 Model B** (1GB) - Minimum, may have performance issues with video
- ❌ **Raspberry Pi 3** - NOT SUPPORTED (insufficient performance)
- ❌ **Raspberry Pi Zero** - NOT SUPPORTED (insufficient performance)

### Required Accessories

**Power Supply:**
- **Pi 5:** Official 27W USB-C power supply (5.1V/5A)
- **Pi 4:** Official 15W USB-C power supply (5.1V/3A) or higher
- ⚠️ **Important:** Underpowered supplies cause instability and corruption

**microSD Card:**
- **16GB minimum**, 32GB recommended
- Class 10 or UHS-I speed rating
- SanDisk, Samsung, or Kingston recommended brands

**Display Connection:**
- **HDMI cable** (Micro-HDMI to HDMI for Pi 4/5)
- Verify your TV/monitor has HDMI input

**Optional but Recommended:**
- **Case:** Protects Pi from dust and damage ($5-15)
- **Heatsink or fan:** Keeps Pi cool during video playback ($3-10)

---

## When to Use BYOD vs. Complete Kit

### Use BYOD Raspberry Pi When:
- ✅ You already own Pi 4 or Pi 5 hardware
- ✅ You're comfortable with tech (flashing SD cards, SSH, etc.)
- ✅ You want maximum cost savings
- ✅ You don't mind troubleshooting if issues arise

### Use Complete Kit When:
- ✅ You want plug-and-play setup (5 minutes vs 45 minutes)
- ✅ You want warranty support on all hardware
- ✅ You prefer pre-configured, tested hardware
- ✅ You're deploying multiple displays simultaneously

---

## Step 1: Download BrandCast OS Image

### Download the Image

1. Go to **https://help.brandcast.app/downloads**
2. Click **Download BrandCast OS for Raspberry Pi**
3. Download the `.img.xz` file (approximately 2GB)
4. Save to your computer

**What is BrandCast OS?**
- Custom Raspberry Pi OS image pre-configured for digital signage
- Includes BrandCast display software
- Auto-boots to BrandCast on startup
- Based on Raspberry Pi OS Lite (headless, no desktop)

---

## Step 2: Flash microSD Card

### Install Raspberry Pi Imager

1. Download **Raspberry Pi Imager** from https://www.raspberrypi.com/software/
2. Install on your computer (Windows, Mac, or Linux)
3. Launch Raspberry Pi Imager

### Flash the Image

1. **Insert microSD card** into your computer (use adapter if needed)
2. In Raspberry Pi Imager:
   - Click **Choose OS** → **Use custom** → Select the BrandCast OS `.img.xz` file
   - Click **Choose Storage** → Select your microSD card
   - Click **Write**
3. Wait for write and verification to complete (5-10 minutes)
4. Click **Continue** when done

**⚠️ WARNING:** This will erase all data on the microSD card!

---

## Step 3: Initial Configuration (Headless Setup)

### Option A: WiFi Configuration (No Keyboard/Monitor Needed)

**Before removing the microSD card from your computer:**

1. The microSD card will have a `boot` partition visible
2. Create a file named `wpa_supplicant.conf` in the `boot` partition
3. Add your WiFi credentials:

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="YOUR_WIFI_NETWORK_NAME"
    psk="YOUR_WIFI_PASSWORD"
    key_mgmt=WPA-PSK
}
```

4. Replace `YOUR_WIFI_NETWORK_NAME` and `YOUR_WIFI_PASSWORD` with your actual WiFi credentials
5. Save the file
6. Eject the microSD card safely

### Option B: Ethernet Configuration (Wired Connection)

1. Simply connect an Ethernet cable to your Pi
2. No additional configuration needed
3. Pi will automatically connect via DHCP

### Option C: HDMI + Keyboard Setup

1. Connect HDMI cable, keyboard, and power to Pi
2. Boot Pi and follow on-screen setup wizard
3. Configure WiFi or Ethernet manually
4. Once connected, you can use headless method going forward

---

## Step 4: Boot Raspberry Pi

1. **Insert microSD card** into Raspberry Pi
2. **Connect HDMI cable** to your TV/monitor
3. **Connect power supply** - Pi will boot automatically
4. **Wait 2-3 minutes** for first boot (longer than normal)

### First Boot Process

On first boot, BrandCast OS will:
1. Expand filesystem to use full microSD card
2. Connect to WiFi (if configured)
3. Display BrandCast setup screen

---

## Step 5: Activate Your Display

### On-Screen Activation

1. The Pi will display a **BrandCast Activation Screen**
2. Note the **activation code** shown on screen (e.g., `ABC-123-XYZ`)
3. On your computer or phone, go to **https://app.brandcast.app**
4. Sign in to your BrandCast account
5. Go to **Displays** → **Add New Display**
6. Enter the **activation code** from the screen
7. Name your display (e.g., "Front Lobby Display")
8. Click **Activate**

### Verify Connection

Within 30 seconds, your Raspberry Pi display should:
- Show "Connected" message
- Start displaying assigned content
- If no content assigned yet, show placeholder

---

## Step 6: Configure Display Settings

### Access Display Settings

**Option A: Via Web Dashboard (RECOMMENDED)**
1. Go to https://app.brandcast.app
2. Navigate to **Displays**
3. Click on your Raspberry Pi display
4. Click **Settings**

**Option B: Via SSH (Advanced)**
1. Find your Pi's IP address (check router or use `hostname -I` via HDMI)
2. SSH into Pi: `ssh brandcast@[IP_ADDRESS]`
3. Default password: `brandcast` (change this!)
4. Edit config: `sudo nano /boot/brandcast-config.txt`

### Display Resolution and Rotation

**Via Dashboard:**
1. **Settings** → **Display** → **Resolution**
2. Select resolution (1920x1080, 1280x720, etc.)
3. **Rotation:** 0° (landscape), 90°, 180°, 270° (portrait)
4. Click **Save**

**Via SSH (Advanced):**
1. Edit `/boot/config.txt`
2. Add or modify:
   ```
   hdmi_group=2
   hdmi_mode=82    # 1920x1080 60Hz
   display_rotate=1  # 0=0°, 1=90°, 2=180°, 3=270°
   ```
3. Reboot: `sudo reboot`

### Overscan Adjustment (For TVs)

Some TVs crop the image edges (overscan). To fix:

**Via SSH:**
1. Edit `/boot/config.txt`
2. Add:
   ```
   disable_overscan=1
   ```
3. Or adjust manually:
   ```
   overscan_left=24
   overscan_right=24
   overscan_top=24
   overscan_bottom=24
   ```
4. Reboot: `sudo reboot`

---

## Step 7: Remote Management (Optional but Recommended)

### Enable SSH Access

SSH is enabled by default on BrandCast OS for troubleshooting.

**To connect:**
```bash
ssh brandcast@[PI_IP_ADDRESS]
```

**Default credentials:**
- Username: `brandcast`
- Password: `brandcast`

**⚠️ IMPORTANT:** Change the default password immediately:
```bash
passwd
```

### Change Hostname (Optional)

To identify your Pi easily on the network:
```bash
sudo raspi-config
```
- Navigate to **System Options** → **Hostname**
- Enter a unique name (e.g., `brandcast-lobby`)
- Reboot

---

## Troubleshooting

### No Display Output / Black Screen

**Solution:**
1. Check HDMI cable is securely connected
2. Try a different HDMI port on your TV/monitor
3. Verify power supply is sufficient (3A+ for Pi 4, 5A for Pi 5)
4. Check microSD card is properly inserted
5. Try re-flashing the microSD card

### Display Shows "No Signal"

**Solution:**
1. Some monitors don't detect Pi quickly - wait 30 seconds
2. Power on monitor BEFORE powering Pi
3. Edit `/boot/config.txt` via computer:
   ```
   hdmi_force_hotplug=1
   hdmi_drive=2
   ```
4. Re-insert microSD and reboot Pi

### WiFi Not Connecting

**Solution:**
1. Verify `wpa_supplicant.conf` file has correct WiFi credentials
2. Check WiFi network is 2.4GHz (Pi 4 supports 2.4 & 5GHz, Pi 3 only 2.4GHz)
3. Ensure WiFi password is correct (case-sensitive)
4. Try Ethernet connection temporarily to debug

### Activation Code Not Working

**Solution:**
1. Verify code is entered exactly as shown (case-sensitive)
2. Check Pi is connected to internet (look for "Connected" indicator)
3. Try generating new code: Restart Pi
4. If still failing, use manual activation via SSH

### Content Not Loading / Blank Screen After Activation

**Solution:**
1. Verify display has content assigned in admin dashboard
2. Check WiFi/Ethernet connection (ping 8.8.8.8)
3. Restart Pi: `sudo reboot`
4. Check logs via SSH: `journalctl -u brandcast-display`

### Pi Overheating / Throttling

**Solution:**
1. Add heatsink to CPU chip
2. Use case with built-in fan
3. Ensure adequate ventilation (don't enclose in tight space)
4. Check temperature: `vcgencmd measure_temp` (should be &lt;80°C)

### microSD Card Corruption

**Solution:**
1. Pi 4/5 are sensitive to power loss during writes
2. Use quality power supply (official Raspberry Pi brand recommended)
3. Use high-quality microSD card (SanDisk, Samsung)
4. Consider adding UPS for critical displays

---

## Advanced Configuration

### Auto-Update Settings

BrandCast OS automatically checks for updates nightly.

**To disable auto-updates:**
```bash
sudo systemctl disable brandcast-updater
```

**To manually update:**
```bash
sudo brandcast-update
```

### Performance Tuning

**For video-heavy content:**
1. Increase GPU memory:
   ```bash
   sudo nano /boot/config.txt
   ```
2. Add:
   ```
   gpu_mem=256
   ```
3. Reboot

**For lower power consumption:**
1. Reduce GPU memory to 128MB
2. Disable HDMI when not in use (advanced, requires scripting)

### Backup microSD Card

**To create backup image:**
1. Remove microSD from Pi
2. Insert into computer
3. Use **Win32 Disk Imager** (Windows) or **dd** (Linux/Mac):
   ```bash
   sudo dd if=/dev/sdX of=brandcast-backup.img bs=4M status=progress
   ```
4. Store backup safely

---

## Next Steps

✅ **Raspberry Pi is set up!** Now configure your content:

1. **[Upload Content](../features/media-library.md)** - Add images, videos, and more
2. **[Create Layouts](../features/layouts.md)** - Design how content appears
3. **[Assign to Display](../workflows/content-association.md)** - Push content to your Pi

---

## Still Stuck?

**Get help:**
- 📧 Email: support@brandcast.app (4-hour response time)
- 📖 Docs: https://help.brandcast.app
- 💬 Live chat: Available in your admin dashboard
- 🐛 Report bugs: GitHub Issues (for technical users)

**Business Hours:** Monday-Friday, 9am-5pm ET

---

**Setup time:** ~30-45 minutes | **Difficulty:** ⭐⭐⭐ Advanced | **Cost:** $35-75 (Pi) + $10-30 (accessories)