# BrandCast Documentation Project

## Project Overview
This repository (`brandcast-docs`) contains the source code and content for the public-facing user documentation of **BrandCast**, a B2B digital signage platform. The site is built using [Docusaurus](https://docusaurus.io/) and is published at [help.brandcast.app](https://help.brandcast.app).

**Key Technologies:**
*   **Framework:** Docusaurus (v3.9.1)
*   **Language:** TypeScript / React
*   **Content:** Markdown / MDX
*   **Styling:** CSS Modules (`src/css/custom.css`)
*   **Hosting:** Cloudflare Pages
*   **Work Management:** GitHub Issues

## Workflow & Collaboration

### Content Ingestion
*   **Source of Truth:** Work is assigned via GitHub Issues.
    *   **Technical Details:** Provided by the Engineering team (feature specs, technical summaries).
    *   **Media Assets:** Provided by the Marketing team (screenshots, videos, diagrams).
*   **Tooling:** Use the `gh` CLI to manage this workflow.
    *   `gh issue list`: View current tasks.
    *   `gh issue view <id>`: specific details and context.
    *   `gh issue comment`: Communicate questions or updates.

### Deployment
*   **Infrastructure:** The site is hosted on Cloudflare.
*   **Automation:** Deployment is fully automated. Pushing commits to the `main` branch of the remote origin triggers a re-build and deploy workflow.
*   **Status:** Proven and stable. No manual deployment steps are required.

## Content Strategy & Guidelines

### Core Documentation Tenant: Enable Users (Not Just Document Features)
Our primary goal is to empower users to achieve their objectives. Every piece of documentation must be crafted with a specific **persona** in mind, guiding them through a clear **Customer User Journey (CUJ)**. Documentation is successful when it enables a user to perform a task, solve a problem, or achieve a business goal, not merely when it describes a feature.

### Target Audience: The "Pragmatic Proprietor" (SMB Owner)
Our primary user is a small-to-medium business owner (e.g., cafe owner, dental practice manager, retail store operator).
*   **Technical Proficiency:** Low to Moderate. They are not IT experts. They want "plug-and-play."
*   **Values:** Reliability, ease of use, time-saving features, and clear ROI.
*   **Pain Points:** Complex setups, hardware glitches, time-consuming content creation.

### Tone & Style
*   **Accessible:** Avoid jargon. Use "screen" instead of "display endpoint," "playlist" instead of "content sequence."
*   **Action-Oriented:** Focus on *how* to achieve a business goal (e.g., "Drive sales with a lunch special") rather than just describing a feature.
*   **Visual:** Leverage the multimedia assets provided by Marketing. Users prefer seeing a screenshot to reading a paragraph.
*   **Reassuring:** Emphasize stability and simplicity to counter their fear of technical issues.

### Diagramming Standard
*   **Tool:** Use **Mermaid.js** for all flowcharts, sequence diagrams, and state charts.
*   **Why:** Keeps diagrams editable as code, version-controlled, and consistent with the site theme.
*   **Style:** Use standard Docusaurus mermaid blocks (` ```mermaid `).

### Documentation Structure
*   `docs/`: Core content.
    *   `getting-started/`: Critical for the "plug-and-play" experience.
    *   `features/`: Explain *benefits* first, then functionality.
    *   `workflows/`: End-to-end guides for common tasks.
    *   `integrations/`: Instructions for connecting tools like Google Slides/Cozi.
    *   `troubleshooting/`: Plain English solutions to common problems.
*   `plans/`: **Internal Use Only.** Contains strategic content plans, delta analyses, and migration strategies. These files are NOT published to the site.
*   `src/`: Custom React components and styles.
*   `static/`: Static assets (images, diagrams).

## Development Guide

### Prerequisites
*   Node.js (>=20.0)
*   npm
*   `gh` CLI tool

### Key Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies. |
| `npm start` | Start local dev server (`http://localhost:3002`). |
| `npm run build` | Build static site to `build/`. |
| `gh issue list` | Check for new content assignments. |

### Contribution Flow
1.  **Pick up Issue:** Check GitHub Issues for new assignments.
2.  **Gather Context:** Review engineering notes and marketing assets attached to the issue.
3.  **Draft Content:** Write Markdown/MDX in the appropriate `docs/` subdirectory.
4.  **Test:** Preview locally with `npm start`.
5.  **Ship:** Commit and push to `main` to trigger the Cloudflare deploy.
6.  **Close:** Update and close the GitHub Issue.