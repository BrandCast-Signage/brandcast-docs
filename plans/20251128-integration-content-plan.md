# BrandCast Integration Content Plan
**Date:** 2025-11-28 (Revised)
**Reference:** GitHub Issue #2 (Canonical Feature List)

## Objective
Align the current documentation with the canonical feature set defined for the alpha release, incorporating clarified terminology and workflow.

## 1. Core Terminology & Workflow Clarification
*   **Integration:** A connection to an external service (e.g., Google Calendar, RSS Feeds). These power Content Sources.
*   **Library Import:** A special type of integration (Canva, Google Photos) that brings media *into the Media Library*. These are accessed via the Library UI, not as direct Content Source options. Direct Upload is also a Library Import.
*   **Content Type:** A classification layer (e.g., CALENDAR, TASKS, IMAGE) for Integrations/Library Imports. Used for organizing options in the Admin UI.
*   **Native Widget:** A content type (e.g., Clock, Countdown, Text) that is configured directly in the Layout Editor, without needing an external integration or Content Source.
*   **Content Source:** Configured instance of an Integration (e.g., "My Department Calendar" sourced from Google Calendar). Options are set here.
*   **Layout Area:** A designated space within a Layout where a Content Source (or Native Widget) is displayed.
*   **Display:** The physical screen showing the content.
*   **Schedules/Playlists:** Mechanisms for dynamically changing Layouts on a Display.

## 2. Deletions / Archives
The following pages should be removed or marked as deprecated:
*   `docs/integrations/gmail.md` (Explicitly excluded)
*   `docs/integrations/inventory.md` (If exists, implied exclusion)
*   `docs/integrations/scheduling.md` (If exists, implied exclusion, except for ZoomShift)

## 3. Content Type Categorization & Documentation Strategy
The following content types need proper distinction in documentation:

### Native Widgets (Configured Directly in Layout Area)
*   **Clock**: New doc needed, placed under a 'Content Types' or 'Features' section.
*   **Countdown**: New doc needed, placed under a 'Content Types' or 'Features' section.
*   **Text**: New doc needed, placed under a 'Content Types' or 'Features' section.

### Library Imports (Integrations populating Media Library)
*   **Image/Video**: Handled through the Media Library. Documentation should cover how Canva/Google Photos populate this.
*   `docs/integrations/canva.md`: Reinforce its role in populating the Media Library, not live embedding.
*   `docs/integrations/google-photos.md`: **Create this doc**, detailing its function as a Library Import.

### Integrations (Powering Content Sources)
*   **Calendar**: Google Calendar, Cozi Calendar (iCal sync), iCal / .ics
*   **Task List**: Google Tasks, Cozi Lists
*   **RSS Feed**
*   **Stock Ticker**, **Stock Chart**: Stock Market
*   **Slides**: Google Slides
*   **Quotes**: Refactor `daily-inspiration.md` to cover this.
*   **Dad Joke**: New doc needed.
*   **Social Embed**: Refactor `social-media-embeds.md` to clearly define this as an integration.
*   **Reviews**: Google Business Reviews
*   **Weather**
*   **ZoomShift**

## 4. Integration & Native Widget Gap Analysis

### Relocate to `docs/integrations/`
*   `docs/integrations/quotes.md` (Currently `docs/features/content-types/quotes.md`)
*   `docs/integrations/social-embed.md` (Currently `docs/features/content-types/social-embed.md`)

### Missing Integration Docs (Create in `docs/integrations/`)
*   `docs/integrations/google-photos.md` (Library Import focus)
*   `docs/integrations/cozi-lists.md`

### Missing Native Widget Docs (Create in `docs/integrations/`)
*   `docs/integrations/clock.md` (Native Widget)
*   `docs/integrations/countdown.md` (Native Widget)
*   `docs/integrations/text.md` (Native Widget)
*   `docs/integrations/dad-joke.md` (Content Type)

### Updates Needed (Existing Docs)
*   `docs/integrations/canva.md`: Update to clearly state it's a "Library Import".
*   `docs/integrations/google-business-reviews.md`: Refactor for workflow.
*   **All existing integration docs**: Refactor to `[Integration] -> [Content Source]` workflow.

## 5. Execution Plan (Revised)
1.  **Revert & Relocate**:
    *   Move `docs/features/content-types/quotes.md` back to `docs/integrations/quotes.md`.
    *   Move `docs/features/content-types/social-embed.md` back to `docs/integrations/social-embed.md`.
    *   Remove `docs/features/content-types/` directory.
2.  **Draft Missing Docs**: Create skeleton files for `clock.md`, `countdown.md`, `text.md`, `dad-joke.md`, `google-photos.md`, `cozi-lists.md` in `docs/integrations/`.
3.  **Refactor Existing Docs**: Update all integration docs to follow the new workflow structure.
4.  **Update `sidebars.ts`**: Reflect all changes.
5.  **Review**: Perform a final review against Issue #2.

## 6. Knowledge Tracking & Engineering Questions

| Feature / Doc | Status | Knowledge Gaps / Questions for Engineering |
| :--- | :--- | :--- |
| **Core Terminology** | ✅ Known | None. Definitions provided in Issue #2. |
| **Deletions** | ✅ Known | `gmail.md`, `inventory.md` confirmed for removal. |
| **Google Tasks** | ✅ Known | Consolidating existing docs. |
| **Google Slides** | ✅ Known | Consolidating existing docs. |
| **Clock Widget** | ⚠️ Partial | What specific styling options (analog/digital, 12/24h, fonts) are available in the Layout Editor? |
| **Countdown Widget** | ⚠️ Partial | What happens when countdown hits zero? (Message? Hide?) What formats are supported? |
| **Text Widget** | ⚠️ Partial | Is this rich text (bold/italic) or plain text? Does it support dynamic variables (e.g. "Welcome [Company]")? |
| **Dad Joke** | ⚠️ Partial | Is there a source selection (PG/PG-13)? Is it just a toggle? Frequency of updates? |
| **Quotes** | ⚠️ Partial | Formerly "Daily Inspiration". What categories/sources are available? |
| **Cozi Lists** | ❌ Unknown | We have `cozi-calendar` info, but need details on `cozi-lists`. How does authentication differ? |
| **Google Photos** | ❌ Unknown | "Library Import" workflow specifics. Does it sync albums? Does it auto-update? |
| **Social Embed** | ⚠️ Partial | Refactoring existing, but need to confirm which platforms are *actually* supported in Alpha (Issue #2 says "Social Embed" generally). |
| **ZoomShift** | ❌ Unknown | BrandCast exclusive. Need setup flow and configuration options. |

## 5. Execution Plan
1.  **Prune**: Delete `docs/integrations/gmail.md`. Check for and delete `inventory.md` and generic `scheduling.md`.
2.  **Consolidate**: Merge `tasks.md` content into `google-tasks.md`. Merge `slideshow-integration.md` content into `google-slides.md`. Delete the redundant files.
3.  **Refactor & Relocate**:
    *   Rename `daily-inspiration.md` to `quotes.md` and move to `docs/features/content-types/`.
    *   Rename `social-media-embeds.md` to `social-embed.md` and move to `docs/features/content-types/`.
4.  **Create New Docs**: Draft the missing guides for `google-photos.md`, `cozi-lists.md`, and the Native Widgets/Content Types (`clock.md`, `countdown.md`, `dad-joke.md`, `text.md`). Ensure these are placed in appropriate `docs/features/content-types/` or similar structure.
5.  **Update Existing Docs**: Specifically update `canva.md` and `google-business-reviews.md` per the requirements.
6.  **Sidebar Updates**: Ensure `sidebars.ts` is updated for all moves and new docs.
7.  **Review**: Perform a final review against Issue #2's canonical lists and terminology.