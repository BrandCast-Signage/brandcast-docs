# Plan: Hardware Strategy Documentation Update

**Date:** 2025-12-15
**Issue:** #5
**Status:** ✅ Complete
**Objective:** Align hardware documentation with the new "Density First" strategy, emphasizing a premium Managed Tier, a flexible Android BYOD Tier, and a Universal PWA Tier.

## Strategy Overview
The hardware support is being reorganized into three distinct tiers:

1.  **Tier 1: BrandCast Managed (Enterprise/Premium)**
    *   **Hardware:** Purpose-built, professional-grade Android signage hardware.
    *   **Focus:** Reliability, Zero-touch deployment, "It Just Works."
    *   **Marketing:** Highlighting the ease of scale and robust 24/7 performance.
    *   **Warranty:** 12-month replacement.
2.  **Tier 2: Android Ecosystem (BYOD)**
    *   **Hardware:** The vast ecosystem of Android devices (Tablets, HDMI sticks).
    *   **Examples:** Amazon Fire OS devices, generic Android TV boxes.
    *   **Exclusions:** Explicitly note that Google TV interfaces are currently not prioritized due to performance/ad-insertion issues.
    *   **Focus:** Flexibility, reusing existing assets, "Use what you have."
3.  **Tier 3: Universal Web Player (PWA)**
    *   **Hardware:** Any device with a modern browser.
    *   **Focus:** Instant deployment, zero-install, "Every screen is a BrandCast screen."
    *   **Positioning:** A production-ready tool for rapid expansion, temporary displays, and office dashboards.
    *   **Note:** Explain browser constraints (like auto-start) as minor trade-offs for universal compatibility.

**Note:** Raspberry Pi/Linux custom builds are moved to "Community Supported" status.

## Files Modified

### 1. Landing Page (`docs/hardware/index.md`)
*   **Action:** Complete rewrite.
*   **Status:** ✅ Complete

### 2. New Content: Managed Hardware (`docs/hardware/managed-android-setup.md`)
*   **Action:** Create new file.
*   **Status:** ✅ Complete

### 3. Update: Android BYOD (`docs/hardware/android-tablet-setup.md`)
*   **Action:** Refactor to be the "General Android" guide.
*   **Status:** ✅ Complete

### 4. Update: Web Player / PWA (`docs/hardware/web-player-setup.md`)
*   **Action:** Rename and complete rewrite.
*   **Status:** ✅ Complete

### 5. Update: Raspberry Pi (`docs/hardware/raspberry-pi-byod-setup.md`)
*   **Action:** Add "Community Supported" banner.
*   **Status:** ✅ Complete

## Execution History
1.  Created `docs/hardware/managed-android-setup.md` (Tier 1).
2.  Renamed `docs/hardware/computer-tv-hdmi-setup.md` to `docs/hardware/web-player-setup.md` and rewrote (Tier 3).
3.  Updated `docs/hardware/android-tablet-setup.md` (Tier 2).
4.  Rewrote `docs/hardware/index.md` (Landing).
5.  Added warning to `docs/hardware/raspberry-pi-byod-setup.md`.