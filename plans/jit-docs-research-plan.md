# Research Plan: JIT (Just-In-Time) Documentation Strategy

**Date:** November 29, 2025
**Project:** BrandCast & FamilyCast
**Objective:** Evaluate architectural solutions to transition from standalone documentation sites to embedded, context-aware application help.

## 1. The Problem Statement
Current documentation exists in silos (`help.brandcast.app`). Users experiencing friction in the app must:
1. Context switch (open new tab).
2. Search for the feature they are using.
3. Parse long-form content for specific answers.
4. Return to the app to execute.

**Goal:** Reduce "Time to Value" by delivering specific answers directly in the UI.

## 2. Solution Landscape

### Option A: The "Headless" Approach (Content-as-a-Service)
Move content from Docusaurus Markdown files into a Headless CMS (e.g., Sanity, Contentful, Strapi).
*   **Pros:** 
    *   Single Source of Truth (SSoT).
    *   Content can be queried via API for both the public site and the app.
    *   Granular content modeling (e.g., specific field descriptions).
*   **Cons:** 
    *   High migration effort (breaking markdown into structured data).
    *   Loss of "Docs-as-Code" workflow (Git versioning, PR reviews).

### Option B: The "Embedded MDX" Approach (Hybrid)
Keep the Git-based Markdown workflow but expose the content to the app.
*   **Mechanism:** 
    *   Treat the `docs` folder as a package or submodule.
    *   Use a bundler (Webpack/Vite) to load MDX files as React components within the main app.
    *   Map specific MDX files to specific App Routes.
*   **Pros:**
    *   Retains current workflow and tooling.
    *   Developers can easily "import" help content.
*   **Cons:**
    *   Increases app bundle size if not lazy-loaded correctly.
    *   Requires strict mapping governance.

### Option C: The "Overlay" Approach (Digital Adoption Platforms)
Use 3rd party tools (Pendo, WalkMe, Intercom).
*   **Pros:** No engineering effort required for content updates.
*   **Cons:** Expensive; UI often feels "bolted on"; limited support for complex, long-form content; data privacy concerns.

## 3. Handling Long-Form Content
We cannot jam a 2,000-word article into a tooltip. We need **Progressive Disclosure**.

1.  **Micro-Copy (Level 1):** Tooltips and field labels.
2.  **The "Context Drawer" (Level 2):** A slide-out panel (right side) that loads the relevant documentation "chunk." 
    *   *Solution:* Tag specific sections of existing markdown files with IDs (e.g., `<!-- seed: setup-step-1 -->`). The app parses and displays only that section.
3.  **Full Article (Level 3):** "Read full guide" link at the bottom of the drawer that opens the external docs site.

## 4. Multimedia Handling
Embedded docs cannot be heavy.

*   **Video:** No local hosting in the app bundle. Use dedicated hosting (Mux, Cloudflare Stream, or YouTube unlisted) and embed via lightweight players.
*   **Images:** 
    *   Must use a CDN (Cloudinary or standard Cloudflare R2 bucket).
    *   **Crucial:** Images must be lazy-loaded. They should not download until the user opens the "Help Drawer."
*   **Diagrams:** Shift from PNGs to Mermaid.js (code-based). The app can render these dynamically, saving bandwidth and allowing them to match the app's theme (Dark/Light mode) automatically.

## 5. Recommendation for PoC
**Proceed with Option B (Embedded MDX/Markdown).**
1.  It leverages our existing robust repositories.
2.  It keeps the "Technical Writer" workflow in Git.
3.  It allows us to share components between the Docs Site and the App.

## Next Steps
1.  Engineering to test importing an MDX file from `brandcast-docs` into the main App repo.
2.  Design to mock up a "Help Drawer" component.
