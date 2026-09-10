# Custom PCs

A sleek white-and-gold PC builder that lets you search for hardware in plain English, assemble a build, and get quick compatibility hints.

## What it does

- Search phrases like `256GB DDR5 white`, `best AM5 CPU`, `8TB SSD`, or `1600W PSU`.
- Parses unusual RAM targets and suggests a practical stick layout when possible.
- Includes a sample local parts library so the site works instantly without an API.
- Lets you add rare/collector/custom parts manually with your own price and specs.
- Replaces single-slot components automatically (CPU, motherboard, GPU, cooler, PSU, case, OS).
- Allows multiple RAM, storage, and fan entries.
- Checks CPU socket, memory generation, motherboard/case form factor, and rough PSU headroom.
- Saves the current build in browser local storage.
- Copies or exports the finished build as a `.txt` file.
- Includes a ridiculous preloaded dream-build demo.
- Has a light/dark toggle; the default visual direction is white + champagne gold.

## Run it

No build tools are required. Open `index.html` locally, or serve the repository as a static site.

For GitHub Pages: open the repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Important

The included catalog is a demo dataset, not a live marketplace feed. Prices and model details can change. Compatibility hints are intentionally conservative and should not replace checking the exact motherboard QVL/BIOS support, case dimensions, cooler clearance, GPU connectors, and PSU requirements before buying hardware.

## Next upgrades

Good future additions would be a real product/price API, user accounts, shareable build URLs, more detailed physical-clearance checks, multiple saved builds, and a compare mode.
