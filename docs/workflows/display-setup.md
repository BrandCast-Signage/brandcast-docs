---
title: Display Setup & Pairing
---

# Display Setup & Pairing

This guide covers how to connect your physical screens (TVs, Tablets, Monitors) to your BrandCast account.

BrandCast uses a **secure pairing code** system. You do not need to type your username/password on the TV. Instead, the TV generates a code, and you authorize it from your laptop.

## Prerequisites
*   **Hardware:** A supported device (Amazon Fire TV, Android TV, iPad, or Raspberry Pi) connected to the internet.
*   **Software:** The BrandCast Player app installed (or a modern browser open to `player.brandcast.app`).
*   **Admin Access:** You must be logged into [app.brandcast.app](https://app.brandcast.app) on your computer.

## The Pairing Process

### Step 1: Launch the Player (On Your TV)
1.  Open the **BrandCast App** on your device.
2.  The app will check for internet connectivity.
3.  Once connected, it will display a **6-character Pairing Code** (e.g., `BC-K9L2`) in large text.

:::info Note
The code is valid for 15 minutes. If it expires, simply refresh the app or page to generate a new one.
:::

### Step 2: Authorize the Display (On Your Laptop)
1.  Log in to your **BrandCast Dashboard**.
2.  Navigate to **Displays** in the left sidebar.
3.  Click the **Pair New Display** button (top right).
4.  You will see the **Pairing Screen**:
    *   **Pairing Code:** Enter the code exactly as shown on your TV (case-insensitive).
    *   **Display Name:** Give it a descriptive name (e.g., "Main Lobby TV", "Kitchen KDS").
5.  Click **Pair Display**.

### Step 3: Verification
*   **On Laptop:** You will see a "Success" message and be redirected to your display list.
*   **On TV:** The screen will immediately update. It will typically show a "Default" layout or a "Ready to Cast" message until you assign specific content.

## Post-Pairing Configuration

Once paired, you can manage the display's settings:

1.  Click on the display name in the **Displays** list.
2.  **Settings Available:**
    *   **Active Layout:** Choose what content to show.
    *   **Orientation:** Force Landscape or Portrait mode.
    *   **Reboot Device:** (Supported hardware only) Remotely restart the app.
    *   **Screenshot:** Request a live screenshot to verify content.

## Troubleshooting Pairing

### "Invalid Code" Error
*   Double-check the characters. `0` (Zero) and `O` (Letter O) can look similar.
*   Ensure you are entering the code in the *Admin Dashboard*, not trying to log in on the TV.

### "Code Expired" Error
*   The code is only valid for a short window for security.
*   **Fix:** Refresh the browser/app on the TV to generate a new code.

### TV Says "Offline"
*   Check the TV's Wi-Fi connection.
*   If using a corporate network, ensure `*.brandcast.app` is whitelisted in your firewall.