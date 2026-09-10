const CATEGORIES = [
  "CPU", "Motherboard", "Memory", "GPU", "Storage", "Cooler", "PSU", "Case", "Fan", "OS", "Other"
];

const PARTS = [
  { id:"cpu-9950x3d", category:"CPU", name:"AMD Ryzen 9 9950X3D", price:699, power:170, socket:"AM5", tags:["amd","am5","gaming","workstation","high end","best"] },
  { id:"cpu-9800x3d", category:"CPU", name:"AMD Ryzen 7 9800X3D", price:479, power:120, socket:"AM5", tags:["amd","am5","gaming","x3d"] },
  { id:"cpu-285k", category:"CPU", name:"Intel Core Ultra 9 285K", price:589, power:250, socket:"LGA1851", tags:["intel","lga1851","high end","productivity"] },
  { id:"cpu-9995wx", category:"CPU", name:"AMD Ryzen Threadripper PRO 9995WX", price:11699, power:350, socket:"sTR5", tags:["amd","str5","threadripper","workstation","96 core","god tier"] },

  { id:"mb-glacial", category:"Motherboard", name:"ASUS ROG Crosshair X870E Glacial", price:999, power:55, socket:"AM5", memoryType:"DDR5", formFactor:"E-ATX", tags:["white","am5","x870e","screen","premium","wifi"] },
  { id:"mb-eagle-ice", category:"Motherboard", name:"Gigabyte B850 Eagle ICE", price:199, power:35, socket:"AM5", memoryType:"DDR5", formFactor:"ATX", tags:["white","ice","am5","b850","budget"] },
  { id:"mb-z890-white", category:"Motherboard", name:"ASRock Z890 Steel Legend WiFi", price:289, power:40, socket:"LGA1851", memoryType:"DDR5", formFactor:"ATX", tags:["white","intel","z890","wifi"] },
  { id:"mb-wrx90", category:"Motherboard", name:"ASUS Pro WS WRX90E-SAGE SE", price:1299, power:85, socket:"sTR5", memoryType:"DDR5", formFactor:"E-ATX", tags:["black","threadripper","workstation","wrx90","ecc"] },

  { id:"ram-32-white", category:"Memory", name:"G.Skill Trident Z5 Royal Neo 32GB (2×16GB) DDR5-6000", price:159, power:10, memoryType:"DDR5", capacityGB:32, modules:2, color:"white/gold", tags:["white","gold","32gb","ddr5","6000","rgb","expo"] },
  { id:"ram-64-white", category:"Memory", name:"Corsair Dominator Titanium RGB 64GB (2×32GB) DDR5-6000 White", price:269, power:14, memoryType:"DDR5", capacityGB:64, modules:2, color:"white", tags:["white","64gb","ddr5","6000","rgb"] },
  { id:"ram-96-white", category:"Memory", name:"G.Skill Trident Z5 Royal Neo 96GB (2×48GB) DDR5-6000 Silver", price:399, power:16, memoryType:"DDR5", capacityGB:96, modules:2, color:"silver", tags:["silver","white build","96gb","ddr5","6000","rgb"] },
  { id:"ram-128-white", category:"Memory", name:"v-color Manta XFinity RGB 128GB (2×64GB) DDR5 White", price:549, power:18, memoryType:"DDR5", capacityGB:128, modules:2, color:"white", tags:["white","128gb","ddr5","rgb"] },
  { id:"ram-256-black", category:"Memory", name:"256GB DDR5 Kit (4×64GB)", price:1099, power:34, memoryType:"DDR5", capacityGB:256, modules:4, color:"black", tags:["black","256gb","ddr5","workstation"] },
  { id:"ram-16-ddr4", category:"Memory", name:"Crucial 16GB (2×8GB) DDR4-3200", price:39, power:6, memoryType:"DDR4", capacityGB:16, modules:2, color:"black", tags:["cheap","16gb","ddr4","3200"] },

  { id:"gpu-5090-white", category:"GPU", name:"ASUS ROG Astral GeForce RTX 5090 White 32GB", price:3299, power:575, tags:["white","rtx 5090","32gb","gaming","creator","flagship"] },
  { id:"gpu-5090-matrix", category:"GPU", name:"ASUS ROG Matrix Platinum GeForce RTX 5090 30th Anniversary", price:6999, power:800, tags:["collector","matrix","rtx 5090","32gb","limited","premium"] },
  { id:"gpu-5080-white", category:"GPU", name:"Gigabyte AERO GeForce RTX 5080 OC 16GB", price:1499, power:360, tags:["white","rtx 5080","16gb","gaming"] },
  { id:"gpu-p600", category:"GPU", name:"NVIDIA Quadro P600 2GB", price:61, power:40, tags:["cheap","low profile","old","2gb"] },

  { id:"ssd-990pro-4", category:"Storage", name:"Samsung 990 PRO 4TB NVMe SSD", price:349, power:9, capacityGB:4000, tags:["4tb","nvme","m.2","fast"] },
  { id:"ssd-8tb", category:"Storage", name:"8TB PCIe 5.0 NVMe SSD", price:999, power:14, capacityGB:8000, tags:["8tb","nvme","m.2","pcie 5","fast"] },
  { id:"ssd-2tb", category:"Storage", name:"WD_BLACK SN850X 2TB NVMe SSD", price:149, power:8, capacityGB:2000, tags:["2tb","nvme","m.2","gaming"] },
  { id:"hdd-160", category:"Storage", name:"Western Digital AV-GP 160GB HDD", price:24, power:6, capacityGB:160, tags:["160gb","hdd","cheap","sata"] },

  { id:"cooler-360-white", category:"Cooler", name:"Lian Li HydroShift LCD 360S White", price:239, power:20, tags:["white","360mm","aio","lcd","rgb"] },
  { id:"cooler-air-white", category:"Cooler", name:"Thermalright Peerless Assassin 120 SE ARGB White", price:39, power:6, tags:["white","air cooler","cheap","argb"] },
  { id:"cooler-wrx90", category:"Cooler", name:"Noctua NH-U14S TR5-SP6", price:129, power:4, socket:"sTR5", tags:["threadripper","air cooler","tr5"] },

  { id:"psu-1000-white", category:"PSU", name:"Corsair RM1000x SHIFT White 1000W", price:209, power:0, wattage:1000, tags:["white","1000w","fully modular","gold"] },
  { id:"psu-1200-white", category:"PSU", name:"be quiet! Dark Power 13 1200W", price:299, power:0, wattage:1200, tags:["1200w","titanium","modular"] },
  { id:"psu-1600", category:"PSU", name:"be quiet! Dark Power Pro 13 1600W", price:459, power:0, wattage:1600, tags:["1600w","titanium","12v-2x6","flagship"] },

  { id:"case-y70-snow", category:"Case", name:"HYTE Y70 Touch Infinite Snow White", price:379, power:12, formFactors:["Mini-ITX","Micro-ATX","ATX","E-ATX"], tags:["white","glass","screen","showcase","premium"] },
  { id:"case-o11-white", category:"Case", name:"Lian Li O11 Vision Compact White", price:149, power:0, formFactors:["Mini-ITX","Micro-ATX","ATX","E-ATX"], tags:["white","glass","showcase"] },
  { id:"case-dy470-white", category:"Case", name:"darkFlash DY470 White", price:109, power:0, formFactors:["Mini-ITX","Micro-ATX","ATX"], tags:["white","glass","budget"] },
  { id:"case-bvoguish", category:"Case", name:"BGears b-Voguish ATX Mid Tower", price:30, power:0, formFactors:["Mini-ITX","Micro-ATX","ATX"], tags:["black","cheap","glass"] },

  { id:"fan-tl-reverse", category:"Fan", name:"Lian Li UNI FAN TL Wireless Reverse 120mm White", price:39, power:6, tags:["white","reverse","rgb","120mm","intake"] },
  { id:"fan-tl-normal", category:"Fan", name:"Lian Li UNI FAN TL Wireless 120mm White", price:39, power:6, tags:["white","rgb","120mm","exhaust"] },
  { id:"fan-cheap", category:"Fan", name:"Scythe Slip Stream 120 PWM", price:3, power:3, tags:["cheap","black","120mm","pwm"] },

  { id:"os-win11pro", category:"OS", name:"Windows 11 Pro", price:199, power:0, tags:["windows","pro"] }
];

let build = JSON.parse(localStorage.getItem("customPCBuild") || "[]");
let activeCategory = "All";

const els = {
  searchForm: document.querySelector("#searchForm"),
  searchInput: document.querySelector("#searchInput"),
  results: document.querySelector("#results"),
  smartNote: document.querySelector("#smartNote"),
  clearSearch: document.querySelector("#clearSearch"),
  categoryTabs: document.querySelector("#categoryTabs"),
  catalogGrid: document.querySelector("#catalogGrid"),
  buildList: document.querySelector("#buildList"),
  totalPrice: document.querySelector("#totalPrice"),
  totalPower: document.querySelector("#totalPower"),
  buildTier: document.querySelector("#buildTier"),
  compatibility: document.querySelector("#compatibility"),
  resetBuild: document.querySelector("#resetBuild"),
  copyBuild: document.querySelector("#copyBuild"),
  downloadBuild: document.querySelector("#downloadBuild"),
  demoButton: document.querySelector("#demoButton"),
  themeButton: document.querySelector("#themeButton"),
  manualDialog: document.querySelector("#manualDialog"),
  manualForm: document.querySelector("#manualForm"),
  manualCategory: document.querySelector("#manualCategory"),
  manualName: document.querySelector("#manualName"),
  manualPrice: document.querySelector("#manualPrice"),
  manualPower: document.querySelector("#manualPower"),
  manualSpecs: document.querySelector("#manualSpecs"),
  openManual: document.querySelector("#openManual"),
  closeManual: document.querySelector("#closeManual")
};

function money(n) {
  return new Intl.NumberFormat("en-US", { style:"currency", currency:"USD", maximumFractionDigits:0 }).format(n || 0);
}

function normalize(text="") {
  return text.toLowerCase().replace(/×/g,"x").replace(/[^a-z0-9.+\- ]/g," ").replace(/\s+/g," ").trim();
}

function searchable(part) {
  return normalize([
    part.category, part.name, part.socket, part.memoryType, part.color,
    part.capacityGB ? `${part.capacityGB}gb` : "",
    part.wattage ? `${part.wattage}w` : "",
    ...(part.tags || [])
  ].filter(Boolean).join(" "));
}

function tokenScore(part, tokens) {
  const hay = searchable(part);
  let score = 0;
  for (const token of tokens) {
    if (!token) continue;
    if (hay.includes(token)) score += token.length > 4 ? 3 : 2;
    if (normalize(part.name).includes(token)) score += 2;
  }
  return score;
}

function parseIntent(raw) {
  const q = normalize(raw);
  const memoryMatch = q.match(/(\d+(?:\.\d+)?)\s*(gb|gigs?|tb)\b/);
  const wattMatch = q.match(/(\d{3,4})\s*w\b/);
  const moduleMatch = q.match(/(\d+)\s*x\s*(\d+)\s*(gb|g)/);
  const intent = {
    query: q,
    memoryGB: null,
    wattage: wattMatch ? Number(wattMatch[1]) : null,
    memoryType: q.includes("ddr5") ? "DDR5" : q.includes("ddr4") ? "DDR4" : null,
    color: q.includes("white") ? "white" : q.includes("black") ? "black" : q.includes("gold") ? "gold" : null,
    likelyCategory: null
  };

  if (memoryMatch && (q.includes("ram") || q.includes("memory") || q.includes("ddr") || q.includes("gigs") || q.includes("gb"))) {
    intent.memoryGB = Number(memoryMatch[1]) * (memoryMatch[2] === "tb" ? 1024 : 1);
  }
  if (moduleMatch) intent.memoryGB = Number(moduleMatch[1]) * Number(moduleMatch[2]);

  if (/\b(cpu|processor|ryzen|threadripper|intel core)\b/.test(q)) intent.likelyCategory = "CPU";
  else if (/\b(motherboard|mobo|b850|x870|z890|wrx90)\b/.test(q)) intent.likelyCategory = "Motherboard";
  else if (/\b(ram|memory|ddr4|ddr5|gigs)\b/.test(q)) intent.likelyCategory = "Memory";
  else if (/\b(gpu|graphics|rtx|radeon|quadro)\b/.test(q)) intent.likelyCategory = "GPU";
  else if (/\b(ssd|storage|nvme|hdd|hard drive|m\.2)\b/.test(q)) intent.likelyCategory = "Storage";
  else if (/\b(psu|power supply|\d{3,4}w)\b/.test(q)) intent.likelyCategory = "PSU";
  else if (/\b(case|tower|chassis)\b/.test(q)) intent.likelyCategory = "Case";
  else if (/\b(fan|fans)\b/.test(q)) intent.likelyCategory = "Fan";
  else if (/\b(cooler|aio|liquid cooling|air cooler)\b/.test(q)) intent.likelyCategory = "Cooler";

  return intent;
}

function memoryPlan(targetGB, type="DDR5") {
  if (!targetGB || targetGB <= 0) return null;
  const common = type === "DDR4" ? [4,8,16,32] : [8,16,24,32,48,64];
  const possibilities = [];
  for (let sticks=1; sticks<=8; sticks++) {
    for (const size of common) {
      const total = sticks * size;
      possibilities.push({ sticks, size, total, delta: Math.abs(total-targetGB) });
    }
  }
  possibilities.sort((a,b) => a.delta-b.delta || a.sticks-b.sticks || b.size-a.size);
  const exact = possibilities.find(p => p.total === targetGB);
  const best = exact || possibilities[0];
  if (!best) return null;
  return { ...best, exact: best.total === targetGB, type };
}

function smartSearch(raw) {
  const intent = parseIntent(raw);
  const tokens = intent.query.split(" ").filter(t => t.length > 1 && !["the","for","with","and","some","get","me"].includes(t));

  let scored = PARTS.map(part => {
    let score = tokenScore(part, tokens);
    if (intent.likelyCategory && part.category === intent.likelyCategory) score += 6;
    if (intent.memoryType && part.memoryType === intent.memoryType) score += 5;
    if (intent.color && searchable(part).includes(intent.color)) score += 4;
    if (intent.memoryGB && part.capacityGB) {
      const distance = Math.abs(part.capacityGB - intent.memoryGB);
      if (distance === 0) score += 12;
      else if (distance <= 32) score += 6;
      else if (distance <= 128) score += 2;
    }
    if (intent.wattage && part.wattage) {
      const distance = Math.abs(part.wattage-intent.wattage);
      if (distance === 0) score += 12;
      else if (distance <= 200) score += 4;
    }
    if (/\bcheap|cheapest|dirt cheap|budget\b/.test(intent.query)) score += Math.max(0, 6 - part.price/100);
    if (/\bbest|flagship|god|premium\b/.test(intent.query) && (part.tags||[]).some(t => ["best","flagship","god tier","premium","high end"].includes(t))) score += 6;
    return { part, score };
  }).filter(x => x.score > 0);

  scored.sort((a,b) => b.score-a.score || a.part.price-b.part.price);
  return { intent, results: scored.slice(0,8).map(x => x.part) };
}

function partCard(part, compact=false) {
  const specs = [];
  if (part.socket) specs.push(part.socket);
  if (part.memoryType) specs.push(part.memoryType);
  if (part.capacityGB) specs.push(part.capacityGB >= 1000 ? `${part.capacityGB/1000}TB` : `${part.capacityGB}GB`);
  if (part.modules) specs.push(`${part.modules} sticks`);
  if (part.wattage) specs.push(`${part.wattage}W`);
  if (part.formFactor) specs.push(part.formFactor);
  if (part.color) specs.push(part.color);
  if (!specs.length) specs.push(...(part.tags||[]).slice(0,3));

  return `
    <article class="part-card">
      <div>
        <div class="part-topline"><span class="part-category">${escapeHTML(part.category)}</span></div>
        <div class="part-name">${escapeHTML(part.name)}</div>
        <div class="part-meta">${specs.slice(0,4).map(s => `<span>${escapeHTML(String(s))}</span>`).join("")}</div>
      </div>
      <div class="part-actions">
        <div class="part-price">${money(part.price)}</div>
        <button class="add-button" type="button" data-add="${escapeHTML(part.id)}">Add</button>
      </div>
    </article>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));
}

function renderSearch(raw="") {
  const query = raw.trim();
  if (!query) {
    els.results.innerHTML = `<div class="empty-state">Try a search above. You can be specific, vague, cheap, ridiculous — whatever.</div>`;
    els.smartNote.hidden = true;
    return;
  }

  const { intent, results } = smartSearch(query);
  let note = "";
  if (intent.memoryGB) {
    const plan = memoryPlan(intent.memoryGB, intent.memoryType || "DDR5");
    if (plan) {
      note = plan.exact
        ? `For ${intent.memoryGB}GB ${plan.type}, a clean module layout is ${plan.sticks}×${plan.size}GB. Check your motherboard's slot count and supported capacity before buying.`
        : `${intent.memoryGB}GB is an unusual exact RAM target. A nearby standard layout is ${plan.sticks}×${plan.size}GB = ${plan.total}GB ${plan.type}.`;
    }
  }
  if (note) {
    els.smartNote.textContent = note;
    els.smartNote.hidden = false;
  } else {
    els.smartNote.hidden = true;
  }

  els.results.innerHTML = results.length
    ? results.map(partCard).join("")
    : `<div class="empty-state">Nothing in the sample library matched that. Add it manually and keep building.</div>`;
}

function renderTabs() {
  const all = ["All", ...CATEGORIES];
  els.categoryTabs.innerHTML = all.map(cat => `<button type="button" class="${cat===activeCategory?"active":""}" data-category="${cat}">${cat}</button>`).join("");
}

function renderCatalog() {
  const items = activeCategory === "All" ? PARTS : PARTS.filter(p => p.category === activeCategory);
  els.catalogGrid.innerHTML = items.map(p => partCard(p,true)).join("");
}

function addPart(part) {
  const singleSlot = ["CPU","Motherboard","GPU","Cooler","PSU","Case","OS"];
  if (singleSlot.includes(part.category)) build = build.filter(p => p.category !== part.category);
  build.push({ ...part, instanceId: `${part.id}-${Date.now()}-${Math.random().toString(36).slice(2,7)}` });
  saveAndRender();
  toast(`${part.name} added`);
}

function removePart(instanceId) {
  build = build.filter(p => p.instanceId !== instanceId);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("customPCBuild", JSON.stringify(build));
  renderBuild();
}

function buildTier(total) {
  if (!build.length) return ["No parts yet", "Add something to start"];
  if (total < 350) return ["Dirt-cheap gremlin", "Maximum FPS-per-dollar chaos"];
  if (total < 900) return ["Budget battlestation", "Cheap, useful, upgradeable"];
  if (total < 1800) return ["Sweet-spot build", "Strong without getting silly"];
  if (total < 4000) return ["High-end machine", "Very little compromise"];
  if (total < 10000) return ["Enthusiast monster", "We have left normal territory"];
  return ["GOD BUILD", "Financially irresponsible. Technically magnificent."];
}

function checkCompatibility() {
  const cpu = build.find(p => p.category === "CPU");
  const mb = build.find(p => p.category === "Motherboard");
  const memories = build.filter(p => p.category === "Memory");
  const psu = build.find(p => p.category === "PSU");
  const pcCase = build.find(p => p.category === "Case");
  const draw = build.reduce((sum,p) => sum + (Number(p.power)||0), 0);
  const issues = [];
  const warnings = [];

  if (cpu && mb && cpu.socket && mb.socket && cpu.socket !== mb.socket) issues.push(`CPU is ${cpu.socket}, but motherboard is ${mb.socket}.`);
  if (mb && memories.length) {
    for (const mem of memories) if (mem.memoryType && mb.memoryType && mem.memoryType !== mb.memoryType) issues.push(`${mem.name} is ${mem.memoryType}, but the board uses ${mb.memoryType}.`);
  }
  if (mb && pcCase && mb.formFactor && Array.isArray(pcCase.formFactors) && !pcCase.formFactors.includes(mb.formFactor)) issues.push(`${mb.formFactor} motherboard may not fit this case.`);
  if (psu && psu.wattage) {
    const recommended = Math.ceil(draw * 1.25 / 50) * 50;
    if (psu.wattage < draw) issues.push(`Estimated draw (${draw}W) exceeds PSU rating (${psu.wattage}W).`);
    else if (psu.wattage < recommended) warnings.push(`PSU is close to estimated load. Around ${recommended}W gives ~25% headroom.`);
  } else if (draw > 0) warnings.push("No PSU selected yet.");

  if (issues.length) return { type:"bad", title:"Compatibility problem", message:issues.join(" ") };
  if (warnings.length) return { type:"warn", title:"Check before buying", message:warnings.join(" ") };
  if (cpu && mb) return { type:"good", title:"Looking compatible", message:"Core checks pass. Always confirm BIOS support, dimensions, connectors, and vendor QVLs before purchasing." };
  return { type:"neutral", title:"Compatibility", message:"Add a CPU and motherboard to begin checking." };
}

function renderBuild() {
  if (!build.length) {
    els.buildList.innerHTML = `<div class="empty-state">Your build is empty.</div>`;
  } else {
    els.buildList.innerHTML = build.map(p => `
      <div class="build-item">
        <span class="slot">${escapeHTML(p.category)}</span>
        <span class="name">${escapeHTML(p.name)}</span>
        <button class="remove-button" type="button" data-remove="${escapeHTML(p.instanceId)}" aria-label="Remove ${escapeHTML(p.name)}">×</button>
      </div>`).join("");
  }

  const total = build.reduce((sum,p) => sum + (Number(p.price)||0), 0);
  const power = build.reduce((sum,p) => sum + (Number(p.power)||0), 0);
  els.totalPrice.textContent = money(total);
  els.totalPower.textContent = `${Math.round(power)} W`;
  const [tier, subtitle] = buildTier(total);
  els.buildTier.innerHTML = `<span class="tier-dot"></span><div><strong>${tier}</strong><span>${subtitle}</span></div>`;

  const compat = checkCompatibility();
  els.compatibility.className = `compatibility-card ${compat.type}`;
  els.compatibility.innerHTML = `<strong>${escapeHTML(compat.title)}</strong><span>${escapeHTML(compat.message)}</span>`;
}

function buildText() {
  const total = build.reduce((sum,p)=>sum+(Number(p.price)||0),0);
  const power = build.reduce((sum,p)=>sum+(Number(p.power)||0),0);
  const lines = ["CUSTOM PCs BUILD", "", ...build.map(p => `${p.category}: ${p.name} — ${money(p.price)}`), "", `Estimated total: ${money(total)}`, `Estimated component draw: ${Math.round(power)} W`, "", "Compatibility hints are estimates; verify exact dimensions, BIOS support, connectors, and manufacturer limits before buying."];
  return lines.join("\n");
}

function toast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  requestAnimationFrame(() => el.classList.add("show"));
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

function loadDemo() {
  const ids = ["cpu-9950x3d","mb-glacial","ram-128-white","gpu-5090-white","ssd-8tb","cooler-360-white","psu-1600","case-y70-snow","fan-tl-reverse","fan-tl-reverse","fan-tl-reverse","fan-tl-reverse","fan-tl-reverse","fan-tl-reverse","fan-tl-normal","fan-tl-normal","fan-tl-normal","fan-tl-normal","os-win11pro"];
  build = ids.map((id,i) => ({ ...PARTS.find(p=>p.id===id), instanceId:`demo-${i}-${Date.now()}` })).filter(Boolean);
  saveAndRender();
  document.querySelector("#summary").scrollIntoView({ behavior:"smooth", block:"start" });
  toast("Dream build loaded");
}

els.searchForm.addEventListener("submit", e => { e.preventDefault(); renderSearch(els.searchInput.value); });
els.searchInput.addEventListener("input", () => { if (els.searchInput.value.trim().length >= 3) renderSearch(els.searchInput.value); });
els.clearSearch.addEventListener("click", () => { els.searchInput.value=""; renderSearch(""); els.searchInput.focus(); });
document.querySelectorAll("[data-query]").forEach(btn => btn.addEventListener("click", () => { els.searchInput.value = btn.dataset.query; renderSearch(btn.dataset.query); }));

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const part = PARTS.find(p => p.id === add.dataset.add);
    if (part) addPart(part);
  }
  const remove = e.target.closest("[data-remove]");
  if (remove) removePart(remove.dataset.remove);
  const tab = e.target.closest("[data-category]");
  if (tab) {
    activeCategory = tab.dataset.category;
    renderTabs();
    renderCatalog();
  }
});

els.resetBuild.addEventListener("click", () => { build=[]; saveAndRender(); toast("Build reset"); });
els.copyBuild.addEventListener("click", async () => {
  if (!build.length) return toast("Add some parts first");
  try { await navigator.clipboard.writeText(buildText()); toast("Build copied"); }
  catch { toast("Could not access clipboard"); }
});
els.downloadBuild.addEventListener("click", () => {
  if (!build.length) return toast("Add some parts first");
  const blob = new Blob([buildText()], { type:"text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "custom-pc-build.txt"; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
els.demoButton.addEventListener("click", loadDemo);

CATEGORIES.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat; option.textContent = cat;
  els.manualCategory.appendChild(option);
});
els.openManual.addEventListener("click", () => els.manualDialog.showModal());
els.closeManual.addEventListener("click", () => els.manualDialog.close());
els.manualForm.addEventListener("submit", e => {
  e.preventDefault();
  const id = `custom-${Date.now()}`;
  const specs = els.manualSpecs.value.trim();
  const manual = {
    id,
    category:els.manualCategory.value,
    name:els.manualName.value.trim(),
    price:Number(els.manualPrice.value)||0,
    power:Number(els.manualPower.value)||0,
    tags: specs ? specs.split(/[,;]/).map(s=>s.trim()).filter(Boolean) : ["custom"]
  };
  const lower = normalize(specs);
  if (lower.includes("am5")) manual.socket = "AM5";
  if (lower.includes("str5")) manual.socket = "sTR5";
  if (lower.includes("lga1851")) manual.socket = "LGA1851";
  if (lower.includes("ddr5")) manual.memoryType = "DDR5";
  if (lower.includes("ddr4")) manual.memoryType = "DDR4";
  const watts = lower.match(/(\d{3,4})w/); if (manual.category === "PSU" && watts) manual.wattage = Number(watts[1]);
  PARTS.push(manual);
  addPart(manual);
  els.manualForm.reset();
  els.manualDialog.close();
  renderCatalog();
});

els.themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("customPCTheme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("customPCTheme") === "dark") document.body.classList.add("dark");

renderTabs();
renderCatalog();
renderBuild();
renderSearch("");
