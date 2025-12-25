# Content Reboot Plan: BrandCast Documentation 2025

**Date:** December 25, 2025
**Status:** In Progress
**Objective:** Re-architect BrandCast documentation to align with 2025 SaaS best practices (Just-in-Time, Outcome-based, Visual-first) and accurately reflect the current application state.

## 1. Strategy: The "Happy Path" First
We are shifting from a feature-based structure (e.g., "The Library Screen") to an outcome-based structure (e.g., "How to Publish Your First Menu").

**The Core User Journey (CUJ):**
1.  **Sign Up & Pair:** User gets a screen on the wall.
2.  **Quick Start (Wizard):** User uploads 1 image and gets it on the screen immediately.
3.  **Advanced Management:** User creates a playlist with multiple layouts and schedules.

## 2. Phase 1: Critical User Journey (Immediate Priority)

### A. Getting Started
*   **`docs/getting-started/quick-start.md`**
    *   *Focus:* The "Wizard" flow (`LayoutCreationWizard`).
    *   *Steps:* Click "Add Layout" -> Upload Image -> Auto-create Layout -> Publish.
    *   *Why:* This is the fastest Time-To-Value.

### B. Hardware & Setup
*   **`docs/workflows/display-setup.md`**
    *   *Focus:* The `/pair` route.
    *   *Steps:* Launch App on TV -> Get Code -> Enter Code in Admin -> Success State.
    *   *Key UI:* `DevicePairingPage` (Inputs: Code, Name).

### C. Core Workflows
*   **`docs/workflows/playlists.md`**
    *   *Focus:* `PlaylistManagerBase`.
    *   *Steps:* Create Playlist -> Add Layout (Transition/Duration) -> Assign to Display.
    *   *Distinction:* Clarify that Playlists contain *Layouts*, not raw files.

## 3. Phase 2: Feature Deep Dives (Secondary)

### A. Content Library
*   **`docs/features/content-library.md`**
    *   *Focus:* `LibraryManager`.
    *   *Details:* Upload Types (Image/Video), Tags, Integrations (Canva/Google), Deduplication.

### B. Layout Engine
*   **`docs/features/layouts.md`**
    *   *Focus:* `LayoutManager`.
    *   *Details:* Zones, Aspect Ratios, Resolution, "Full Page" mode vs Multi-zone.

## 4. Execution Tasks

- [ ] Create `plans/20251225-content-reboot-plan.md` (This file)
- [ ] Refactor `docs/getting-started/quick-start.md` to use the Wizard flow.
- [ ] Rewrite `docs/workflows/display-setup.md` with accurate pairing UI steps.
- [ ] Rewrite `docs/workflows/playlists.md` to reflect the "Layout-first" architecture.
- [ ] Archive outdated "feature" pages that don't map to the new IA.

## 5. Verification
- Validate against the "Archaeology" findings from `codebase_investigator`.
- Ensure all H2 headers are "RAG-ready" (semantic and distinct).
