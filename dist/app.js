(() => {
  const data = ATLAS_DATA;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const nodes = Object.values(data.nodes);
  const byId = id => data.nodes[id];

  const sectorColor = id => data.sectors.find(s => s.id === id)?.color || "#c8ff74";
  const sectorName = id => data.sectors.find(s => s.id === id)?.name || id;
  const escapeHtml = value => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));

  function renderMap() {
    $("#macroGrid").innerHTML = data.sectors.map(sector => {
      const sectorNodes = sector.items.map(byId).filter(Boolean);
      return `<article class="sector-card" style="--sector:${sector.color}">
        <div class="sector-index"><span>${sector.order} / ${sector.en}</span><span>${String(sectorNodes.length).padStart(2,"0")} NODES</span></div>
        <h3>${sector.name}</h3>
        <p class="sector-thesis">${sector.thesis}</p>
        <p class="sector-desc">${sector.description}</p>
        <div class="node-list">${sectorNodes.map(node => `<button class="node-btn" data-node="${node.id}"><i>${node.icon}</i>${node.name}</button>`).join("")}</div>
        <span class="sector-flow">INPUT → TRANSFORM → VALUE</span>
      </article>`;
    }).join("");
    $("#nodeCount").textContent = nodes.length;
    $("#linkCount").textContent = data.links.length;
  }

  function relatedLinks(id) {
    return data.links.filter(([a,b]) => a === id || b === id).slice(0, 6);
  }

  function openNode(id) {
    const node = byId(id);
    if (!node) return;
    const path = node.path || [sectorName(node.sector), node.name];
    const related = relatedLinks(id);
    $("#drawerContent").innerHTML = `
      <p class="detail-breadcrumb">${path.map(escapeHtml).join(" &nbsp;→&nbsp; ")}</p>
      <header class="detail-head">
        <div><p class="eyebrow"><span></span> ${node.en}</p><h2>${node.name}</h2><p>${node.oneLiner}</p></div>
        <div class="detail-icon">${node.icon}</div>
      </header>
      <div class="answer-grid">
        <div class="answer"><small>01 / 解决什么问题</small><h3>${node.oneLiner}</h3><p>${node.why}</p></div>
        <div class="answer"><small>02 / 规模与重要性</small><h3>它在经济中的位置</h3><p>${node.scale}</p></div>
        <div class="answer"><small>03 / 钱从哪里赚</small><h3>价值捕获方式</h3><p>${node.profit}</p></div>
        <div class="answer"><small>04 / 中国的位置</small><h3>全球分工坐标</h3><p>${node.china}</p></div>
      </div>
      <section class="detail-block"><small>VALUE CHAIN / 产业链</small><h3>价值如何一步步被创造</h3><div class="chain">${node.chain.map(([label,value]) => `<div class="chain-step"><b>${label}</b><span>${value}</span></div>`).join("")}</div></section>
      <section class="detail-block"><small>COST STRUCTURE / 主要成本</small><h3>什么决定利润的厚度</h3><div class="cost-tags">${node.costs.map(x => `<span>${x}</span>`).join("")}</div></section>
      <section class="detail-block"><small>LEADING PLAYERS / 龙头样本</small><h3>谁在定义产业边界</h3><div class="leader-tags">${node.leaders.map(x => `<span>${x}</span>`).join("")}</div></section>
      ${related.length ? `<section class="detail-block"><small>CONNECTIONS / 产业关联</small><h3>它把影响传向哪里</h3><div class="network-list">${related.map(([a,b,label]) => `<button class="network-edge node-btn" data-node="${a===id?b:a}"><b>${byId(a).name}</b><i>${label} →</i><b>${byId(b).name}</b></button>`).join("")}</div></section>` : ""}
      <section class="detail-block"><small>NEXT DECADE / 未来十年</small><div class="future-box"><b>结构趋势</b><p>${node.trend}</p></div><div class="future-box"><b>AI 改变量</b><p>${node.ai}</p></div></section>`;
    $("#detailDrawer").classList.add("open");
    $("#detailDrawer").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    $("#detailDrawer").classList.remove("open");
    $("#detailDrawer").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function setMode(mode) {
    $$(".mode-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
    $$(".view").forEach(view => view.classList.toggle("active", view.dataset.view === mode));
    window.scrollTo({top: 0, behavior: "smooth"});
    if (mode === "trend" && !$("#trendResult").innerHTML) renderTrend(data.trends[0]);
    if (mode === "daily") renderDaily();
  }

  function renderTrendChips() {
    $("#trendChips").innerHTML = data.trends.map(t => `<button class="trend-chip" data-trend="${t.id}">${t.name}</button>`).join("");
  }

  function fitPath(path, size = 5) {
    const out = path.slice(0, size);
    while (out.length < size) out.push("影响继续扩散");
    return out;
  }

  function renderTrend(trend) {
    $("#trendInput").value = trend.name;
    $("#trendResult").innerHTML = `<div class="trend-summary"><h2>${trend.name} · 影响地图</h2><p>${trend.summary}</p></div>
      <div class="impact-paths">${trend.paths.map((path,i) => `<div class="impact-row"><span class="impact-no">0${i+1}</span>${fitPath(path).map(step => `<div class="impact-step">${step}</div>`).join("")}</div>`).join("")}</div>
      <div class="impact-nodes">${trend.impacts.map(id => `<button class="node-btn" data-node="${id}" style="--sector:${sectorColor(byId(id).sector)}"><i>${byId(id).icon}</i>${byId(id).name}</button>`).join("")}</div>`;
  }

  function runTrend() {
    const q = $("#trendInput").value.trim().toLowerCase();
    const match = data.trends.find(t => t.name.toLowerCase().includes(q) || t.aliases.some(a => q.includes(a.toLowerCase()) || a.toLowerCase().includes(q)));
    if (match) renderTrend(match);
    else {
      $("#trendResult").innerHTML = `<div class="empty-state"><b>暂未找到“${escapeHtml(q)}”的静态推演模型</b><br /><br />首版已内置 AI、能源转型、人口老龄化与城市化。请选择一个相近趋势继续探索。</div>`;
    }
  }

  function dailyNode() {
    const now = new Date();
    const seed = Number(`${now.getFullYear()}${String(now.getMonth()+1).padStart(2,"0")}${String(now.getDate()).padStart(2,"0")}`);
    const deepNodes = nodes.filter(n => n.parent);
    return deepNodes[seed % deepNodes.length] || nodes[seed % nodes.length];
  }

  function renderDaily() {
    const node = dailyNode();
    const date = new Intl.DateTimeFormat("zh-CN", {year:"numeric",month:"2-digit",day:"2-digit",weekday:"long"}).format(new Date());
    $("#dailyCard").innerHTML = `<div class="daily-visual"><span class="daily-date">${date} · DAILY NODE</span><div class="daily-ring"><span class="daily-glyph">${node.icon}</span></div></div>
      <div class="daily-info"><p class="eyebrow"><span></span> TODAY'S INDUSTRY</p><h1>今天认识：<span>${node.name}</span></h1><p class="reason">${node.know}</p><p class="explain">${node.oneLiner} ${node.why}</p><div class="daily-meta"><span>所属<br />${sectorName(node.sector)}</span><span>价值链入口<br />${node.chain[0][1]}</span><span>未来变量<br />${node.ai}</span></div><div style="margin-top:28px"><button class="primary-action" data-node="${node.id}">打开完整认知卡 <span>→</span></button></div></div>`;
  }

  function searchableText(n) { return [n.name,n.en,n.oneLiner,n.why,n.scale,n.profit,n.china,n.trend,n.ai,...n.leaders,...n.costs].join(" ").toLowerCase(); }
  function renderSearch(query = "") {
    const q = query.trim().toLowerCase();
    const results = (q ? nodes.filter(n => searchableText(n).includes(q)) : nodes).slice(0, 10);
    $("#searchResults").innerHTML = results.length ? results.map(n => `<button class="search-item" data-node="${n.id}"><span class="glyph">${n.icon}</span><span><b>${n.name}</b><small>${n.oneLiner}</small></span><span>${sectorName(n.sector)} ↗</span></button>`).join("") : `<div class="empty-state">没有匹配节点，试试“电力”“AI”或“材料”。</div>`;
  }

  function openSearch() { renderSearch(); $("#searchDialog").showModal(); setTimeout(() => $("#globalSearch").focus(), 30); }
  function closeSearch() { $("#searchDialog").close(); }

  renderMap(); renderTrendChips(); renderDaily();
  document.addEventListener("click", e => {
    const node = e.target.closest("[data-node]"); if (node) { if ($("#searchDialog").open) closeSearch(); openNode(node.dataset.node); return; }
    const mode = e.target.closest("[data-mode]"); if (mode) setMode(mode.dataset.mode);
    const trend = e.target.closest("[data-trend]"); if (trend) renderTrend(data.trends.find(t => t.id === trend.dataset.trend));
    if (e.target.closest("[data-close-drawer]")) closeDrawer();
  });
  $("#startExplore").addEventListener("click", () => $("#atlas").scrollIntoView({behavior:"smooth"}));
  $("#searchTrigger").addEventListener("click", openSearch);
  $("#closeSearch").addEventListener("click", closeSearch);
  $("#globalSearch").addEventListener("input", e => renderSearch(e.target.value));
  $("#runTrend").addEventListener("click", runTrend);
  $("#trendInput").addEventListener("keydown", e => { if (e.key === "Enter") runTrend(); });
  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
    if (e.key === "Escape") closeDrawer();
  });
})();
