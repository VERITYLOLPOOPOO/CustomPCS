# Custom PCs

A sleek white-and-gold PC builder that lets you search for hardware in plain English, assemble multiple builds, save them locally, export them, and share them.

## What it does

- Search phrases like `256GB DDR5 white`, `best AM5 CPU`, `8TB SSD`, or `1600W PSU`.
- Parses unusual RAM targets and suggests a practical stick layout when possible.
- Includes a sample local parts library so the site works instantly without an API.
- Lets you add rare/collector/custom parts manually with your own price and specs.
- Replaces single-slot components automatically (CPU, motherboard, GPU, cooler, PSU, case, OS).
- Allows multiple RAM, storage, and fan entries.
- Checks CPU socket, memory generation, motherboard/case form factor, and rough PSU headroom.
- Supports multiple named builds. Click **New Build** at any time and switch between previous builds in **Settings → Builds**.
- Auto-saves the workspace to browser local storage so current and previous builds survive reloads on the same device.
- Lets you duplicate, delete, reopen, export, and publish any saved build from the build library.
- **Save file** uses the browser's Save File picker when available, so you can choose Desktop or another folder. Browsers without that API fall back to a normal download.
- **Publish** creates a self-contained share link with the build data encoded in the URL. Anyone opening the link gets a local copy without needing an account or backend database.
- Includes a ridiculous preloaded dream-build demo.
- Uses a white + champagne-gold visual direction and a responsive layout.

## Run it

No build tools are required. Open `index.html` locally, or serve the repository as a static site.

For GitHub Pages: open the repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Important

The included catalog is a demo dataset, not a live marketplace feed. Prices and model details can change. Compatibility hints are intentionally conservative and should not replace checking the exact motherboard QVL/BIOS support, case dimensions, cooler clearance, GPU connectors, and PSU requirements before buying hardware.

The current publishing system is deliberately backend-free: build data lives in the share URL itself. That makes it easy to host on GitHub Pages, but it is not a public searchable community feed yet.

## Good next upgrades

A real product/price API, accounts with cloud sync, a searchable public build gallery, comments/likes, import of `.custompc.json` files, detailed physical-clearance checks, and build-to-build comparison would fit naturally on top of this version.
