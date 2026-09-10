const CATEGORIES = ["CPU","Motherboard","Memory","GPU","Storage","Cooler","PSU","Case","Fan","OS","Other"];

const PARTS = [
  {id:"cpu-9950x3d",category:"CPU",name:"AMD Ryzen 9 9950X3D",price:699,power:170,socket:"AM5",tags:["amd","am5","gaming","creator","high end","best"]},
  {id:"cpu-9800x3d",category:"CPU",name:"AMD Ryzen 7 9800X3D",price:479,power:120,socket:"AM5",tags:["amd","am5","gaming","x3d"]},
  {id:"cpu-285k",category:"CPU",name:"Intel Core Ultra 9 285K",price:589,power:250,socket:"LGA1851",tags:["intel","lga1851","high end","productivity"]},
  {id:"cpu-9995wx",category:"CPU",name:"AMD Ryzen Threadripper PRO 9995WX",price:11699,power:350,socket:"sTR5",tags:["amd","str5","threadripper","workstation","96 core","god tier"]},

  {id:"mb-glacial",category:"Motherboard",name:"ASUS ROG Crosshair X870E Glacial",price:999,power:55,socket:"AM5",memoryType:"DDR5",formFactor:"E-ATX",tags:["white","am5","x870e","screen","premium","wifi"]},
  {id:"mb-eagle-ice",category:"Motherboard",name:"Gigabyte B850 Eagle ICE",price:199,power:35,socket:"AM5",memoryType:"DDR5",formFactor:"ATX",tags:["white","ice","am5","b850","budget"]},
  {id:"mb-z890-white",category:"Motherboard",name:"ASRock Z890 Steel Legend WiFi",price:289,power:40,socket:"LGA1851",memoryType:"DDR5",formFactor:"ATX",tags:["white","intel","z890","wifi"]},
  {id:"mb-wrx90",category:"Motherboard",name:"ASUS Pro WS WRX90E-SAGE SE",price:1299,power:85,socket:"sTR5",memoryType:"DDR5",formFactor:"E-ATX",tags:["black","threadripper","workstation","wrx90","ecc"]},

  {id:"ram-32-royal",category:"Memory",name:"G.Skill Trident Z5 Royal Neo 32GB (2×16GB) DDR5-6000",price:159,power:10,memoryType:"DDR5",capacityGB:32,modules:2,color:"white/gold",tags:["white","gold","32gb","ddr5","6000","rgb","expo"]},
  {id:"ram-64-dom",category:"Memory",name:"Corsair Dominator Titanium RGB 64GB (2×32GB) DDR5-6000 White",price:269,power:14,memoryType:"DDR5",capacityGB:64,modules:2,color:"white",tags:["white","64gb","ddr5","6000","rgb"]},
  {id:"ram-96-royal",category:"Memory",name:"G.Skill Trident Z5 Royal Neo 96GB (2×48GB) DDR5-6000 Silver",price:399,power:16,memoryType:"DDR5",capacityGB:96,modules:2,color:"silver",tags:["silver","white build","96gb","ddr5","6000","rgb"]},
  {id:"ram-128-vcolor",category:"Memory",name:"v-color Manta XFinity RGB 128GB (2×64GB) DDR5 White",price:549,power:18,memoryType:"DDR5",capacityGB:128,modules:2,color:"white",tags:["white","128gb","ddr5","rgb"]},
  {id:"ram-256-black",category:"Memory",name:"256GB DDR5 Kit (4×64GB)",price:1099,power:34,memoryType:"DDR5",capacityGB:256,modules:4,color:"black",tags:["black","256gb","ddr5","workstation"]},
  {id:"ram-16-ddr4",category:"Memory",name:"Crucial 16GB (2×8GB) DDR4-3200",price:39,power:6,memoryType:"DDR4",capacityGB:16,modules:2,color:"black",tags:["cheap","16gb","ddr4","3200"]},

  {id:"gpu-5090-white",category:"GPU",name:"ASUS ROG Astral GeForce RTX 5090 White 32GB",price:3299,power:575,tags:["white","rtx 5090","32gb","gaming","creator","flagship"]},
  {id:"gpu-5090-matrix",category:"GPU",name:"ASUS ROG Matrix Platinum GeForce RTX 5090 30th Anniversary",price:6999,power:800,tags:["collector","matrix","rtx 5090","32gb","limited","premium"]},
  {id:"gpu-5080-white",category:"GPU",name:"Gigabyte AERO GeForce RTX 5080 OC 16GB",price:1499,power:360,tags:["white","rtx 5080","16gb","gaming"]},
  {id:"gpu-p600",category:"GPU",name:"NVIDIA Quadro P600 2GB",price:61,power:40,tags:["cheap","low profile","old","2gb"]},

  {id:"ssd-990pro-4",category:"Storage",name:"Samsung 990 PRO 4TB NVMe SSD",price:349,power:9,capacityGB:4000,tags:["4tb","nvme","m.2","fast"]},
  {id:"ssd-8tb",category:"Storage",name:"8TB PCIe 5.0 NVMe SSD",price:999,power:14,capacityGB:8000,tags:["8tb","nvme","m.2","pcie 5","fast"]},
  {id:"ssd-2tb",category:"Storage",name:"WD_BLACK SN850X 2TB NVMe SSD",price:149,power:8,capacityGB:2000,tags:["2tb","nvme","m.2","gaming"]},
  {id:"hdd-160",category:"Storage",name:"Western Digital AV-GP 160GB HDD",price:24,power:6,capacityGB:160,tags:["160gb","hdd","cheap","sata"]},

  {id:"cooler-360-white",category:"Cooler",name:"Lian Li HydroShift LCD 360S White",price:239,power:20,tags:["white","360mm","aio","lcd","rgb"]},
  {id:"cooler-air-white",category:"Cooler",name:"Thermalright Peerless Assassin 120 SE ARGB White",price:39,power:6,tags:["white","air cooler","cheap","argb"]},
  {id:"cooler-wrx90",category:"Cooler",name:"Noctua NH-U14S TR5-SP6",price:129,power:4,socket:"sTR5",tags:["threadripper","air cooler","tr5"]},

  {id:"psu-1000-white",category:"PSU",name:"Corsair RM1000x SHIFT White 1000W",price:209,power:0,wattage:1000,tags:["white","1000w","fully modular","gold"]},
  {id:"psu-1200",category:"PSU",name:"be quiet! Dark Power 13 1200W",price:299,power:0,wattage:1200,tags:["1200w","titanium","modular"]},
  {id:"psu-1600",category:"PSU",name:"be quiet! Dark Power Pro 13 1600W",price:459,power:0,wattage:1600,tags:["1600w","titanium","12v-2x6","flagship"]},

  {id:"case-y70-snow",category:"Case",name:"HYTE Y70 Touch Infinite Snow White",price:379,power:12,formFactors:["Mini-ITX","Micro-ATX","ATX","E-ATX"],tags:["white","glass","screen","showcase","premium"]},
  {id:"case-o11-white",category:"Case",name:"Lian Li O11 Vision Compact White",price:149,power:0,formFactors:["Mini-ITX","Micro-ATX","ATX","E-ATX"],tags:["white","glass","showcase"]},
  {id:"case-dy470-white",category:"Case",name:"darkFlash DY470 White",price:109,power:0,formFactors:["Mini-ITX","Micro-ATX","ATX"],tags:["white","glass","budget"]},
  {id:"case-bvoguish",category:"Case",name:"BGears b-Voguish ATX Mid Tower",price:30,power:0,formFactors:["Mini-ITX","Micro-ATX","ATX"],tags:["black","cheap","glass"]},

  {id:"fan-tl-reverse",category:"Fan",name:"Lian Li UNI FAN TL Wireless Reverse 120mm White",price:39,power:6,tags:["white","reverse","rgb","120mm","intake"]},
  {id:"fan-tl-normal",category:"Fan",name:"Lian Li UNI FAN TL Wireless 120mm White",price:39,power:6,tags:["white","rgb","120mm","exhaust"]},
  {id:"fan-cheap",category:"Fan",name:"Scythe Slip Stream 120 PWM",price:3,power:3,tags:["cheap","black","120mm","pwm"]},

  {id:"os-win11pro",category:"OS",name:"Windows 11 Pro",price:199,power:0,tags:["windows","pro"]}
];

const STORAGE_KEY = "customPCWorkspace.v2";
const LEGACY_KEY = "customPCBuild";
const SINGLETON_CATEGORIES = new Set(["CPU","Motherboard","GPU","Cooler","PSU","Case","OS"]);
let activeCategory = "All";
let state = loadWorkspace();

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
  manualDialog: document.querySelector("#manualDialog"),
  manualForm: document.querySelector("#manualForm"),
  manualCategory: document.querySelector("#manualCategory"),
  manualName: document.querySelector("#manualName"),
  manualPrice: document.querySelector("#manualPrice"),
  manualPower: document.querySelector("#manualPower"),
  manualSpecs: document.querySelector("#manualSpecs"),
  openManual: document.querySelector("#openManual"),
  closeManual: document.querySelector("#closeManual"),
  newBuildButton: document.querySelector("#newBuildButton"),
  saveBuildButton: document.querySelector("#saveBuildButton"),
  publishBuildButton: document.querySelector("#publishBuildButton"),
  publishBuildButtonAside: document.querySelector("#publishBuildButtonAside"),
  buildNameInput: document.querySelector("#buildNameInput"),
  saveStatus: document.querySelector("#saveStatus"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  closeSettings: document.querySelector("#closeSettings"),
  settingsNewBuild: document.querySelector("#settingsNewBuild"),
  buildLibrary: document.querySelector("#buildLibrary"),
  shareDialog: document.querySelector("#shareDialog"),
  shareLink: document.querySelector("#shareLink"),
  closeShare: document.querySelector("#closeShare"),
  copyShareLink: document.querySelector("#copyShareLink"),
  toast: document.querySelector("#toast")
};

function uid(prefix="build") {
  if (crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function makeBuild(name) {
  const now = new Date().toISOString();
  return {id:uid(),name:name||"Untitled Build",parts:[],createdAt:now,updatedAt:now,publishedAt:null};
}

function loadWorkspace() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");
    if (saved && Array.isArray(saved.builds) && saved.builds.length) return saved;
  } catch {}

  let migratedParts = [];
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY)||"[]");
    if (Array.isArray(legacy)) migratedParts = legacy;
  } catch {}

  const first = makeBuild(migratedParts.length ? "My Build" : "Untitled Build");
  first.parts = migratedParts;
  return {activeId:first.id,builds:[first]};
}

function persist(message="Saved locally") {
  const current = activeBuild();
  if (current) current.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  if (els.saveStatus) {
    els.saveStatus.textContent = message;
    els.saveStatus.classList.add("flash");
    setTimeout(()=>els.saveStatus.classList.remove("flash"),500);
  }
}

function activeBuild() {
  let current = state.builds.find(b=>b.id===state.activeId);
  if (!current) {
    current = state.builds[0] || makeBuild();
    if (!state.builds.length) state.builds.push(current);
    state.activeId = current.id;
  }
  return current;
}

function money(n) {
  return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(Number(n)||0);
}

function normalize(text="") {
  return String(text).toLowerCase().replace(/×/g,"x").replace(/[^a-z0-9.+\- ]/g," ").replace(/\s+/g," ").trim();
}

function searchable(part) {
  return normalize([part.category,part.name,part.socket,part.memoryType,part.color,part.capacityGB?`${part.capacityGB}gb`:"",part.wattage?`${part.wattage}w`:"",...(part.tags||[])].filter(Boolean).join(" "));
}

function parseIntent(raw) {
  const q = normalize(raw);
  const capacity = q.match(/(\d+(?:\.\d+)?)\s*(tb|gb|gigs?)\b/);
  const watt = q.match(/(\d{3,4})\s*w\b/);
  return {
    query:q,
    memoryGB:capacity && /(ram|memory|ddr|gigs?)/.test(q) ? Number(capacity[1])*(capacity[2]==="tb"?1024:1) : null,
    storageGB:capacity && /(ssd|storage|nvme|hdd|m\.?2)/.test(q) ? Number(capacity[1])*(capacity[2]==="tb"?1000:1) : null,
    wattage:watt?Number(watt[1]):null,
    memoryType:q.includes("ddr5")?"DDR5":q.includes("ddr4")?"DDR4":null,
    color:q.includes("white")?"white":q.includes("black")?"black":q.includes("gold")?"gold":null,
    likelyCategory:/\b(cpu|processor|ryzen|threadripper|intel core)\b/.test(q)?"CPU":/\b(motherboard|mobo|b850|x870|z890|wrx90)\b/.test(q)?"Motherboard":/\b(ram|memory|ddr4|ddr5|gigs?)\b/.test(q)?"Memory":/\b(gpu|graphics|rtx|radeon|quadro)\b/.test(q)?"GPU":/\b(ssd|storage|nvme|hdd|hard drive|m\.?2)\b/.test(q)?"Storage":/\b(psu|power supply|\d{3,4}w)\b/.test(q)?"PSU":/\b(case|tower|chassis)\b/.test(q)?"Case":/\b(fan|fans)\b/.test(q)?"Fan":/\b(cooler|aio|liquid cooling|air cooler)\b/.test(q)?"Cooler":null
  };
}

function memoryPlan(targetGB,type="DDR5") {
  if (!targetGB) return null;
  const sizes = type==="DDR4"?[4,8,16,32]:[8,16,24,32,48,64];
  const plans = [];
  for (let sticks=1;sticks<=8;sticks++) for (const size of sizes) plans.push({sticks,size,total:sticks*size,delta:Math.abs(sticks*size-targetGB)});
  plans.sort((a,b)=>a.delta-b.delta||a.sticks-b.sticks||b.size-a.size);
  return {...plans[0],exact:plans[0].total===targetGB,type};
}

function tokenScore(part,tokens,intent) {
  const hay = searchable(part);
  let score = 0;
  for (const token of tokens) {
    if (hay.includes(token)) score += token.length>4?4:2;
    if (normalize(part.name).includes(token)) score += 3;
  }
  if (intent.likelyCategory && part.category===intent.likelyCategory) score += 8;
  if (intent.memoryType && part.memoryType===intent.memoryType) score += 5;
  if (intent.color && hay.includes(intent.color)) score += 4;
  if (intent.memoryGB && part.capacityGB) score += Math.max(0,6-Math.abs(part.capacityGB-intent.memoryGB)/32);
  if (intent.storageGB && part.capacityGB) score += Math.max(0,6-Math.abs(part.capacityGB-intent.storageGB)/1000);
  if (intent.wattage && part.wattage) score += Math.max(0,6-Math.abs(part.wattage-intent.wattage)/100);
  if (intent.query.includes("best")||intent.query.includes("high end")) if ((part.tags||[]).some(t=>["best","flagship","high end","premium","god tier"].includes(t))) score += 5;
  if (intent.query.includes("cheap")||intent.query.includes("budget")) {
    score += Math.max(0,5-(part.price||0)/200);
    if ((part.tags||[]).includes("cheap")) score += 5;
  }
  return score;
}

function smartSearch(raw) {
  const intent = parseIntent(raw);
  const tokens = intent.query.split(" ").filter(t=>t.length>1 && !["the","for","with","and","some","get","me","of"].includes(t));
  const ranked = PARTS.map(part=>({part,score:tokenScore(part,tokens,intent)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.part.price-b.part.price).slice(0,8).map(x=>x.part);

  if (intent.memoryGB) {
    const plan = memoryPlan(intent.memoryGB,intent.memoryType||"DDR5");
    const exactText = plan.exact ? `${plan.sticks} × ${plan.size}GB = ${plan.total}GB` : `Closest simple stick plan: ${plan.sticks} × ${plan.size}GB = ${plan.total}GB`;
    els.smartNote.hidden = false;
    els.smartNote.innerHTML = `<strong>RAM planner:</strong> ${escapeHTML(exactText)}. <span>Motherboard slot and capacity limits still matter.</span>`;
  } else els.smartNote.hidden = true;
  return ranked;
}

function escapeHTML(value="") {
  return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch]));
}

function partMeta(part) {
  const bits=[];
  if (part.socket) bits.push(part.socket);
  if (part.memoryType) bits.push(part.memoryType);
  if (part.capacityGB) bits.push(part.capacityGB>=1000?`${part.capacityGB/1000}TB`:`${part.capacityGB}GB`);
  if (part.wattage) bits.push(`${part.wattage}W`);
  if (part.formFactor) bits.push(part.formFactor);
  if (part.color) bits.push(part.color);
  return bits.join(" · ") || (part.tags||[]).slice(0,3).join(" · ");
}

function partCard(part) {
  return `<article class="part-card"><div class="part-card-top"><span class="part-category">${escapeHTML(part.category)}</span><span class="part-price">${money(part.price)}</span></div><h3>${escapeHTML(part.name)}</h3><p>${escapeHTML(partMeta(part))}</p><div class="part-card-bottom"><span>${Number(part.power)||0} W est.</span><button class="add-button" type="button" data-add-part="${escapeHTML(part.id)}">Add</button></div></article>`;
}

function renderSearch(raw="") {
  if (!raw.trim()) {
    els.results.innerHTML = `<div class="empty-state"><strong>Type anything.</strong><span>Try a capacity, color, model, socket, or budget word.</span></div>`;
    els.smartNote.hidden = true;
    return;
  }
  const matches = smartSearch(raw);
  els.results.innerHTML = matches.length ? `<div class="result-grid">${matches.map(partCard).join("")}</div>` : `<div class="empty-state"><strong>No built-in match.</strong><span>Add the exact part manually and it can still live in your build.</span><button class="secondary-button compact" type="button" data-open-manual>＋ Add custom part</button></div>`;
}

function renderCategories() {
  const cats=["All",...CATEGORIES];
  els.categoryTabs.innerHTML = cats.map(cat=>`<button type="button" class="${cat===activeCategory?"active":""}" data-category="${cat}">${cat}</button>`).join("");
  const visible=activeCategory==="All"?PARTS:PARTS.filter(p=>p.category===activeCategory);
  els.catalogGrid.innerHTML=visible.map(partCard).join("");
}

function addPart(part) {
  const build=activeBuild();
  const item={...part,instanceId:uid("part")};
  if (SINGLETON_CATEGORIES.has(part.category)) {
    const existing=build.parts.findIndex(p=>p.category===part.category);
    if (existing>=0) build.parts.splice(existing,1,item); else build.parts.push(item);
  } else build.parts.push(item);
  persist();
  renderAll();
  toast(`${part.name} added`);
}

function removePart(instanceId) {
  const build=activeBuild();
  build.parts=build.parts.filter(p=>p.instanceId!==instanceId);
  persist();
  renderAll();
}

function estimateTier(total) {
  if (!total) return ["No parts yet","Add something to start"];
  if (total<500) return ["Budget gremlin","Maximum value, minimum dignity."];
  if (total<1500) return ["Solid machine","Balanced and sensible. Suspicious."];
  if (total<3500) return ["High-end build","Very fast. Wallet is concerned."];
  if (total<8000) return ["Enthusiast monster","Completely unnecessary. Excellent."];
  return ["Final boss PC","The budget has left the chat."];
}

function checkCompatibility(parts) {
  const cpu=parts.find(p=>p.category==="CPU");
  const mb=parts.find(p=>p.category==="Motherboard");
  const memories=parts.filter(p=>p.category==="Memory");
  const pcCase=parts.find(p=>p.category==="Case");
  const psu=parts.find(p=>p.category==="PSU");
  const totalDraw=parts.reduce((n,p)=>n+(Number(p.power)||0),0);
  const issues=[];
  const notes=[];
  if (cpu&&mb&&cpu.socket&&mb.socket&&cpu.socket!==mb.socket) issues.push(`CPU socket ${cpu.socket} does not match motherboard ${mb.socket}.`); else if (cpu&&mb) notes.push(`CPU and motherboard socket match (${cpu.socket||"unknown"}).`);
  for (const ram of memories) if (mb?.memoryType&&ram.memoryType&&mb.memoryType!==ram.memoryType) issues.push(`${ram.name} is ${ram.memoryType}, but the motherboard is ${mb.memoryType}.`);
  if (pcCase&&mb?.formFactor&&Array.isArray(pcCase.formFactors)&&!pcCase.formFactors.includes(mb.formFactor)) issues.push(`${pcCase.name} does not list ${mb.formFactor} support.`);
  if (psu?.wattage) {
    const recommended=Math.ceil((totalDraw*1.25)/50)*50;
    if (psu.wattage<recommended) issues.push(`PSU headroom looks tight. Estimated target is about ${recommended}W.`); else notes.push(`PSU has useful headroom over the estimated ${totalDraw}W draw.`);
  } else if (totalDraw>0) notes.push("Add a PSU to check power headroom.");
  if (issues.length) return {type:"bad",title:"Check compatibility",text:issues.join(" ")};
  if (cpu&&mb) return {type:"good",title:"Looking compatible",text:notes.join(" ")||"No obvious conflicts found in the stored specs."};
  return {type:"neutral",title:"Compatibility",text:"Add a CPU and motherboard to begin checking."};
}

function renderBuild() {
  const build=activeBuild();
  els.buildNameInput.value=build.name;
  const total=build.parts.reduce((n,p)=>n+(Number(p.price)||0),0);
  const draw=build.parts.reduce((n,p)=>n+(Number(p.power)||0),0);
  const tier=estimateTier(total);
  els.buildTier.innerHTML=`<span class="tier-dot"></span><div><strong>${escapeHTML(tier[0])}</strong><span>${escapeHTML(tier[1])}</span></div>`;
  els.totalPrice.textContent=money(total);
  els.totalPower.textContent=`${Math.round(draw)} W`;
  if (!build.parts.length) els.buildList.innerHTML=`<div class="empty-build"><span>✦</span><strong>Empty canvas</strong><small>Search or browse parts to start.</small></div>`;
  else els.buildList.innerHTML=build.parts.map(part=>`<div class="build-item"><div><span>${escapeHTML(part.category)}</span><strong>${escapeHTML(part.name)}</strong><small>${money(part.price)} · ${Number(part.power)||0} W</small></div><button type="button" class="remove-button" data-remove-part="${escapeHTML(part.instanceId)}" aria-label="Remove ${escapeHTML(part.name)}">×</button></div>`).join("");
  const compat=checkCompatibility(build.parts);
  els.compatibility.className=`compatibility-card ${compat.type}`;
  els.compatibility.innerHTML=`<strong>${escapeHTML(compat.title)}</strong><span>${escapeHTML(compat.text)}</span>`;
}

function buildStats(build) {
  const total=build.parts.reduce((n,p)=>n+(Number(p.price)||0),0);
  return `${build.parts.length} part${build.parts.length===1?"":"s"} · ${money(total)}`;
}

function formatDate(iso) {
  try { return new Intl.DateTimeFormat(undefined,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(new Date(iso)); } catch { return ""; }
}

function renderBuildLibrary() {
  const sorted=[...state.builds].sort((a,b)=>new Date(b.updatedAt)-new Date(a.updatedAt));
  els.buildLibrary.innerHTML=sorted.map(build=>{
    const active=build.id===state.activeId;
    return `<article class="library-card ${active?"active":""}"><div class="library-main"><div class="library-title-row"><h3>${escapeHTML(build.name)}</h3>${active?'<span class="active-pill">Open now</span>':""}</div><p>${escapeHTML(buildStats(build))}</p><small>Updated ${escapeHTML(formatDate(build.updatedAt))}${build.publishedAt?" · Published":""}</small></div><div class="library-actions"><button type="button" class="secondary-button compact" data-library-open="${build.id}">${active?"Return":"Open"}</button><button type="button" class="quiet-button" data-library-duplicate="${build.id}">Duplicate</button><button type="button" class="quiet-button" data-library-download="${build.id}">Save file</button><button type="button" class="quiet-button" data-library-publish="${build.id}">Publish</button><button type="button" class="quiet-button danger" data-library-delete="${build.id}">Delete</button></div></article>`;
  }).join("");
}

function renderAll() {
  renderBuild();
  renderCategories();
  renderBuildLibrary();
}

function createNewBuild() {
  const build=makeBuild(`Untitled Build ${state.builds.length+1}`);
  state.builds.push(build);
  state.activeId=build.id;
  persist("New build created");
  renderAll();
  if (els.settingsDialog.open) els.settingsDialog.close();
  document.querySelector("#builder")?.scrollIntoView({behavior:"smooth",block:"start"});
  setTimeout(()=>els.buildNameInput.select(),350);
}

function duplicateBuild(id) {
  const source=state.builds.find(b=>b.id===id);
  if (!source) return;
  const copy=makeBuild(`${source.name} Copy`);
  copy.parts=source.parts.map(part=>({...part,instanceId:uid("part")}));
  state.builds.push(copy);
  state.activeId=copy.id;
  persist("Build duplicated");
  renderAll();
  toast("Duplicated");
}

function openBuild(id) {
  if (!state.builds.some(b=>b.id===id)) return;
  state.activeId=id;
  persist("Build opened");
  renderAll();
  if (els.settingsDialog.open) els.settingsDialog.close();
  document.querySelector("#builder")?.scrollIntoView({behavior:"smooth",block:"start"});
}

function deleteBuild(id) {
  const target=state.builds.find(b=>b.id===id);
  if (!target) return;
  if (!confirm(`Delete "${target.name}" from this device?`)) return;
  state.builds=state.builds.filter(b=>b.id!==id);
  if (!state.builds.length) {
    const fresh=makeBuild();
    state.builds.push(fresh);
    state.activeId=fresh.id;
  } else if (state.activeId===id) state.activeId=state.builds[0].id;
  persist("Build deleted");
  renderAll();
}

function serializeBuild(build) {
  return {app:"Custom PCs",version:2,name:build.name,createdAt:build.createdAt,updatedAt:build.updatedAt,parts:build.parts.map(({instanceId,...part})=>part)};
}

function buildText(build) {
  return [`CUSTOM PCS — ${build.name}`,"",...build.parts.map((p,i)=>`${i+1}. [${p.category}] ${p.name} — ${money(p.price)} — ${Number(p.power)||0} W`),"",`Estimated total: ${money(build.parts.reduce((n,p)=>n+(Number(p.price)||0),0))}`,`Estimated draw: ${Math.round(build.parts.reduce((n,p)=>n+(Number(p.power)||0),0))} W`].join("\n");
}

function safeFilename(name) {
  return (name||"custom-pc-build").trim().replace(/[<>:"/\\|?*]+/g,"-").replace(/\s+/g," ").slice(0,80)||"custom-pc-build";
}

async function saveBuildFile(build=activeBuild()) {
  const text=JSON.stringify(serializeBuild(build),null,2);
  const filename=`${safeFilename(build.name)}.custompc.json`;
  if ("showSaveFilePicker" in window) {
    try {
      const handle=await window.showSaveFilePicker({suggestedName:filename,types:[{description:"Custom PCs build",accept:{"application/json":[".json"]}}]});
      const writable=await handle.createWritable();
      await writable.write(text);
      await writable.close();
      toast("Build saved to your computer");
      return;
    } catch (error) { if (error?.name==="AbortError") return; }
  }
  const blob=new Blob([text],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download=filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  toast("Build downloaded");
}

async function copyBuildText(build=activeBuild()) {
  const text=buildText(build);
  try { await navigator.clipboard.writeText(text); toast("Build copied"); }
  catch {
    const area=document.createElement("textarea");
    area.value=text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    toast("Build copied");
  }
}

function base64UrlEncode(text) {
  const bytes=new TextEncoder().encode(text);
  let binary="";
  bytes.forEach(b=>binary+=String.fromCharCode(b));
  return btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/," ").trim();
}

function base64UrlDecode(text) {
  let base64=text.replace(/-/g,"+").replace(/_/g,"/");
  while (base64.length%4) base64+="=";
  const binary=atob(base64);
  const bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function shareURLFor(build) {
  const payload=base64UrlEncode(JSON.stringify(serializeBuild(build)));
  const url=new URL(location.href);
  url.hash=`share=${payload}`;
  return url.toString();
}

async function publishBuild(build=activeBuild()) {
  build.publishedAt=new Date().toISOString();
  persist("Published");
  renderBuildLibrary();
  const link=shareURLFor(build);
  els.shareLink.value=link;
  els.shareDialog.showModal();
  try { await navigator.clipboard.writeText(link); toast("Share link copied"); } catch {}
}

function importSharedBuild() {
  if (!location.hash.startsWith("#share=")) return;
  try {
    const payload=location.hash.slice(7);
    const data=JSON.parse(base64UrlDecode(payload));
    if (!data||!Array.isArray(data.parts)) return;
    const sourceKey=`share:${payload.slice(0,80)}`;
    let existing=state.builds.find(b=>b.sourceKey===sourceKey);
    if (!existing) {
      existing=makeBuild(`${data.name||"Shared Build"} · Shared`);
      existing.parts=data.parts.map(part=>({...part,instanceId:uid("part")}));
      existing.sourceKey=sourceKey;
      state.builds.push(existing);
    }
    state.activeId=existing.id;
    persist("Shared build opened");
  } catch { toast("That share link could not be opened"); }
}

function openSettings() {
  renderBuildLibrary();
  els.settingsDialog.showModal();
}

function toast(message) {
  if (!els.toast) return;
  els.toast.textContent=message;
  els.toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>els.toast.classList.remove("show"),2200);
}

function loadDreamBuild() {
  const ids=["cpu-9950x3d","mb-glacial","ram-128-vcolor","gpu-5090-white","ssd-8tb","cooler-360-white","psu-1600","case-y70-snow"];
  const build=activeBuild();
  build.name="White + Gold Dream";
  build.parts=ids.map(id=>({...PARTS.find(p=>p.id===id),instanceId:uid("part")})).filter(Boolean);
  for (let i=0;i<6;i++) build.parts.push({...PARTS.find(p=>p.id==="fan-tl-reverse"),instanceId:uid("part")});
  for (let i=0;i<4;i++) build.parts.push({...PARTS.find(p=>p.id==="fan-tl-normal"),instanceId:uid("part")});
  persist("Dream build loaded");
  renderAll();
  document.querySelector("#builder")?.scrollIntoView({behavior:"smooth",block:"start"});
}

els.searchForm.addEventListener("submit",event=>{ event.preventDefault(); renderSearch(els.searchInput.value); });
els.searchInput.addEventListener("input",()=>{ if (els.searchInput.value.trim().length>=2) renderSearch(els.searchInput.value); });
els.clearSearch.addEventListener("click",()=>{ els.searchInput.value=""; renderSearch(""); els.searchInput.focus(); });

document.addEventListener("click",event=>{
  const chip=event.target.closest("[data-query]");
  if (chip) { els.searchInput.value=chip.dataset.query; renderSearch(chip.dataset.query); document.querySelector("#builder")?.scrollIntoView({behavior:"smooth",block:"start"}); return; }
  const add=event.target.closest("[data-add-part]");
  if (add) { const part=PARTS.find(p=>p.id===add.dataset.addPart); if (part) addPart(part); return; }
  if (event.target.closest("[data-open-manual]")) { els.manualDialog.showModal(); return; }
  const remove=event.target.closest("[data-remove-part]");
  if (remove) { removePart(remove.dataset.removePart); return; }
  const category=event.target.closest("[data-category]");
  if (category) { activeCategory=category.dataset.category; renderCategories(); return; }
  const open=event.target.closest("[data-library-open]");
  if (open) return openBuild(open.dataset.libraryOpen);
  const duplicate=event.target.closest("[data-library-duplicate]");
  if (duplicate) return duplicateBuild(duplicate.dataset.libraryDuplicate);
  const download=event.target.closest("[data-library-download]");
  if (download) { const build=state.builds.find(b=>b.id===download.dataset.libraryDownload); if (build) saveBuildFile(build); return; }
  const publish=event.target.closest("[data-library-publish]");
  if (publish) { const build=state.builds.find(b=>b.id===publish.dataset.libraryPublish); if (build) publishBuild(build); return; }
  const del=event.target.closest("[data-library-delete]");
  if (del) return deleteBuild(del.dataset.libraryDelete);
});

els.buildNameInput.addEventListener("input",()=>{ const build=activeBuild(); build.name=els.buildNameInput.value||"Untitled Build"; persist("Saved locally"); renderBuildLibrary(); });
els.newBuildButton.addEventListener("click",createNewBuild);
els.settingsNewBuild.addEventListener("click",createNewBuild);
els.settingsButton.addEventListener("click",openSettings);
els.closeSettings.addEventListener("click",()=>els.settingsDialog.close());
els.saveBuildButton.addEventListener("click",()=>{ persist("Build saved"); renderBuildLibrary(); toast("Build saved"); });
els.resetBuild.addEventListener("click",()=>{ if (!activeBuild().parts.length) return; if (!confirm("Clear every part from this build?")) return; activeBuild().parts=[]; persist("Parts cleared"); renderAll(); });
els.copyBuild.addEventListener("click",()=>copyBuildText());
els.downloadBuild.addEventListener("click",()=>saveBuildFile());
els.publishBuildButton.addEventListener("click",()=>publishBuild());
els.publishBuildButtonAside.addEventListener("click",()=>publishBuild());
els.demoButton.addEventListener("click",loadDreamBuild);
els.openManual.addEventListener("click",()=>els.manualDialog.showModal());
els.closeManual.addEventListener("click",()=>els.manualDialog.close());

els.manualForm.addEventListener("submit",event=>{
  event.preventDefault();
  const specs=els.manualSpecs.value.split(",").map(s=>s.trim()).filter(Boolean);
  const custom={id:uid("custom"),category:els.manualCategory.value,name:els.manualName.value.trim(),price:Number(els.manualPrice.value)||0,power:Number(els.manualPower.value)||0,tags:specs};
  addPart(custom);
  els.manualForm.reset();
  els.manualPrice.value=0;
  els.manualPower.value=0;
  els.manualDialog.close();
});

els.closeShare.addEventListener("click",()=>els.shareDialog.close());
els.copyShareLink.addEventListener("click",async()=>{
  try { await navigator.clipboard.writeText(els.shareLink.value); toast("Link copied"); }
  catch { els.shareLink.select(); document.execCommand("copy"); toast("Link copied"); }
});

for (const category of CATEGORIES) els.manualCategory.insertAdjacentHTML("beforeend",`<option value="${category}">${category}</option>`);

importSharedBuild();
renderSearch("");
renderAll();
