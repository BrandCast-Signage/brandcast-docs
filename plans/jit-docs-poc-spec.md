# Technical Specification: JIT Documentation "Context Drawer" PoC

**Date:** November 29, 2025
**Project:** BrandCast (Internal Admin Tooling)
**Status:** Draft

## 1. Objective
Validate the technical feasibility of rendering standard BrandCast documentation (MDX files) directly within the BrandCast Admin Application using a "Context Drawer" UI pattern.

## 2. Architectural Approach: "Shared Content Package"

Instead of the App fetching live Markdown from GitHub (latency/rate-limit issues), we will treat the documentation repository as an **internal NPM package**.

### 2.1 Workflow
1.  **Source:** Content lives in `brandcast-docs/docs`.
2.  **Build Step:** We add a build script to `brandcast-docs` that exports specific directories as a library.
    *   *Alternative:* For the PoC, we will simulate this by using a Git Submodule in the App repo pointing to `brandcast-docs`.
3.  **Consumption:** The App imports files like:
    ```javascript
    import QuickStart from '@brandcast/docs/getting-started/quick-start.mdx';
    ```
4.  **Bundling:** The App's bundler (Webpack/Vite) uses an MDX loader to compile this content into React components at build time.

## 3. Component Specification

### 3.1 `ContextDrawer` (Container)
A UI shell that slides in from the right side of the screen.
*   **Props:**
    *   `isOpen`: boolean
    *   `contentId`: string (e.g., `'display-setup'`)
    *   `onClose`: function
*   **Behavior:**
    *   Overlay backdrop (semi-transparent).
    *   Clicking outside closes the drawer.
    *   "Expand" button to open the content in a full new tab (`help.brandcast.app/...`).

### 3.2 `HelpRouter` (Logic)
A mapping object or switch statement that connects App Routes to Doc Paths.
*   **Example Map:**
    ```json
    {
      "/admin/screens/new": "docs/workflows/display-setup.md",
      "/admin/media": "docs/features/media-library.md"
    }
    ```

## 4. Technical Challenges & Solutions (Risk Assessment)

| Challenge | Proposed Solution |
| :--- | :--- |
| **CSS Conflicts** | Docs use Docusaurus CSS; App uses (presumably) Tailwind/MUI. **Fix:** Wrap the Drawer content in a CSS Module or Shadow DOM (if drastic) to isolate styles. Use `prose` (Tailwind Typography) for clean defaults. |
| **Relative Links** | Docs links like `[Text](../intro.md)` will break in the App. **Fix:** Create a custom MDX Link component that intercepts clicks. If it's internal, try to route within the Drawer; otherwise, open in new tab. |
| **Image Paths** | Relative images (`./img/foo.png`) won't resolve relative to the App's bundle. **Fix:** Update the Webpack/Vite config to resolve aliases or move all JIT-critical images to a CDN URL. |
| **Heavy Bundle** | Importing all docs will bloat the app. **Fix:** Use **Dynamic Imports** (`React.lazy`). Content is only fetched when the Drawer opens. |

## 5. Proof of Concept (PoC) Steps

1.  **Setup:** Create a fresh React + Vite sandbox.
2.  **Ingest:** Copy the `docs/` folder from `brandcast-docs` into the sandbox `src/` (simulating the submodule).
3.  **Config:** Configure `@mdx-js/rollup` (for Vite) to handle `.md` and `.mdx` files.
4.  **Code:** Build a simple `<ContextDrawer />` component that dynamically loads `getting-started/quick-start.md` when a button is clicked.
5.  **Verify:**
    *   Does text render?
    *   Do images load?
    *   Does the Mermaid diagram render? (May require a specific Mermaid React component wrapper).

## 6. Success Criteria
*   [ ] A button click opens the Drawer.
*   [ ] The `quick-start.md` content renders inside the Drawer with readable styling.
*   [ ] Application performance (initial load) is not effectively impacted (lazy loading works).
