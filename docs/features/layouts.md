---
title: Layouts & Zones
---

# Layouts & Zones

Layouts define the visual "blueprint" of your screen. They control where content appears, how it is layered, and the overall look and feel of your display.

## Core Concepts

### The Canvas
The canvas represents your physical screen. 
*   **Resolution:** Defaults to **1920x1080** (Full HD).
*   **Aspect Ratio:** Supports **16:9** (Landscape), **9:16** (Portrait), and **1:1** (Square). 
*   **Background:** You can set a solid background color or upload a brand image to sit behind your content zones.

### Zones (Areas)
Zones are the specific boxes on the screen that hold content.
*   **Layering (Z-Index):** Higher z-index zones appear on top of lower ones. Use this to put a "Logo" zone over a "Video" zone.
*   **Positioning:** Zones are placed using X/Y coordinates and Width/Height dimensions.
*   **Content Types:** Each zone is assigned a type (e.g., Image, Weather, Google Slides).

## Creating a Layout

There are three ways to create a layout:

1.  **The Layout Wizard (Recommended):** A step-by-step tool that asks for your content first and builds the layout for you. Ideal for simple, full-screen displays.
2.  **Templates:** Choose from pre-built multi-zone structures (e.g., "Sidebar with Ticker" or "Grid of 4").
3.  **Manual (From Scratch):** Drag and drop zones onto the canvas for complete creative control.

## Using the Layout Editor

### Global Settings
In the header of the editor, you can configure:
*   **Display Context:** Tell the system if the screen is for "Promotion," "Information," or "Internal Use."
*   **Viewing Distance:** Set to **Near**, **Medium**, or **Far**. This helps the system suggest appropriate font sizes and content density.
*   **Color Mode:** Toggle between **Light** and **Dark** themes.

### Managing Zones
*   **Add Zone:** Click **+ Add Area** to drop a new box onto the canvas.
*   **Move/Resize:** Drag the zone to move it; use the corners to resize.
*   **Content Assignment:** **Double-click** any zone to open the **Area Dialog**. This is where you choose what the zone actually shows (e.g., selecting a Google Slides integration).

## Best Practices for B2B

### The 3-Zone Rule
For most business displays, avoid clutter. A clean layout usually consists of:
1.  **Main Feature (70%):** Your primary message (Video or Slideshow).
2.  **Side/Bottom Utility (20%):** Secondary info like Weather, Clock, or News.
3.  **Branding (10%):** Your company logo and a QR code.

### Legibility & Distance
*   **Far Viewing (Shop Windows):** Use large fonts, high-contrast colors, and minimal text.
*   **Near Viewing (Checkout Counters):** You can include more detail, smaller text, and multiple items.

## Troubleshooting
*   **Content is Cut Off:** Ensure your zone aspect ratio matches your content aspect ratio (e.g., don't put a 16:9 video in a square zone).
*   **Zone is Missing:** Check the **Z-Index**. It might be hidden behind a larger, full-screen zone with a higher layer number.