---
title: Android Setup (BYOD)
---

# Android Setup (BYOD)

Bring Your Own Device (BYOD) allows you to use consumer hardware you already own. BrandCast supports any device running **Android 10** or newer.

## Supported Devices
*   **Tablets:** Samsung Galaxy Tab A/S series, Lenovo Tab, Google Pixel Tablet.
*   **TV Sticks:** Chromecast with Google TV, NVIDIA Shield, Xiaomi Mi Box.
*   **Commercial Android:** Sony, Philips, or Sharp displays with Android SoC.

## Installation Guide

### 1. Prepare the Device
*   **Factory Reset (Recommended):** Start fresh to avoid background apps slowing down your signage.
*   **Google Account:** Sign in with a Google Account to access the Play Store.
*   **Developer Options:** Go to **Settings > About Tablet**. Tap **Build Number** 7 times to enable Developer Options. Go to **Developer Options** and enable **Stay Awake** (this prevents sleep while charging).

### 2. Install the BrandCast Player
1.  Open the **Google Play Store**.
2.  Search for **"BrandCast Player"**.
3.  Tap **Install**.

*Alternative (Sideload):* Download the APK directly from `brandcast.app/downloads` if your device doesn't have the Play Store.

### 3. Grant Permissions
Open the app. You will be asked to grant:
*   **Overlay Permission:** Allows BrandCast to display over other apps (crucial for auto-start).
*   **Boot Permission:** Allows the app to launch automatically when the device turns on.

### 4. Pair the Display
1.  The app will show a 6-character **Pairing Code**.
2.  Log in to your Dashboard on a computer.
3.  Go to **Displays > Pair New Display**.
4.  Enter the code.

## Kiosk Mode (Locking the Screen)
Unlike our Managed Devices, standard Android prevents apps from completely locking the device (preventing "Home" button clicks) without complex setup.

**Recommendation:**
If you need true Kiosk Mode (where users cannot exit the app), we recommend using a 3rd-party Kiosk Launcher like **Fully Kiosk Browser** or **KioWare**, and setting BrandCast as the startup URL.
