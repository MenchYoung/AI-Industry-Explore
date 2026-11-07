(() => {
  const annualUrl = 'https://www.intc.com/filings-reports/annual-reports/content/0000050863-26-000011/intc-20251227.htm';
  const quarterUrl = 'https://www.intc.com/filings-reports/all-sec-filings/content/0000050863-26-000191/intc-20260926.htm';
  const resultsUrl = 'https://www.intc.com/news-events/press-releases/detail/1786/intel-reports-third-quarter-2026-financial-results';
  const priceUrl = 'https://stockanalysis.com/stocks/intc/market-cap/';
  const stamp = '2026-11-07T12:41:00.000Z';

  const company = {
    id: 'intel', name: '英特尔', ticker: 'INTC', country: '美国', industryId: 'semiconductor', founded: '1968', listed: 'NASDAQ Global Select Market 上市',
    description: 'Intel Corporation（英特尔）是一家垂直整合半导体公司：既设计 x86 CPU、GPU、AI 加速器和网络产品，也经营晶圆制造与先进封装。与 NVIDIA 的无晶圆厂平台模式不同，Intel 同时承担产品研发和晶圆厂资本开支，因此资产更重、折旧更高、现金流波动也更大。',
    products: 'Core/Core Ultra 客户端处理器；Xeon 服务器 CPU；Intel GPU D 系列与 Gaudi AI 加速器；以太网、网络和边缘芯片；Intel Foundry 的晶圆制造、先进封装与代工服务；oneAPI、OpenVINO 和 oneDNN 软件。',
    customers: 'PC 整机厂、服务器 OEM/ODM、云服务商、企业与政府数据中心、通信和工业设备客户，以及寻求美国本土先进制程和封装能力的外部芯片设计公司。',
    revenueSources: '主要通过销售客户端和数据中心处理器、AI/网络芯片，以及向内部产品部门和外部客户提供晶圆制造与封装服务取得收入。内部代工收入会在合并报表中抵销，融资和政府补助不是营业收入。',
    businessModel: 'Intel 依靠 x86 兼容性、CPU 产品组合、软件生态和制造技术获得产品毛利；同时希望把昂贵晶圆厂的固定成本分摊给内部产品与外部代工客户。客户愿意付费，是因为现有软件兼容、企业级可靠性、供应保障和先进制造/封装能力。盈利关键是产品售价和产能利用率能否覆盖制造成本、折旧与高额研发。',
    suppliers: '关键上游包括 ASML 的 EUV/High-NA EUV 设备、Applied Materials、Lam Research、KLA、EDA/IP 供应商、化学品与硅片厂，以及部分外包给 TSMC 等代工厂的计算芯粒。设备交期、先进封装和基板供给会影响产能与库存。',
    downstream: '联想、惠普、戴尔等 PC OEM；云服务商和服务器厂商；企业、政府、通信、工业和汽车客户。2026 年 Xeon 需求强劲，但 PC 行业放缓，收入结构正在向数据中心倾斜。',
    competitors: '客户端和服务器 CPU 面对 AMD 与 Arm 生态；AI 加速器面对 NVIDIA、AMD 及云厂自研 ASIC；代工面对 TSMC、Samsung；先进封装面对 TSMC、Samsung 和 OSAT。Intel 也与 AMD 在 x86 生态和 oneDNN/PyTorch 优化上合作。',
    partners: 'ASML、Applied Materials、Lam Research 等设备伙伴；Oracle Cloud、SAP、Google 等平台伙伴；OEM/ODM 与开放软件生态；美国政府和地方政府提供制造激励；Brookfield/Apollo 等资本伙伴参与晶圆厂融资。',
    technology: '核心技术包括 x86 CPU 架构、Xeon 平台、Intel 18A/14A 制程、RibbonFET 全环绕栅极、PowerVia 背面供电、EMIB/Foveros 先进封装、GPU 与 AI 推理、oneAPI/OpenVINO 软件。2026 年 18A 已进入量产，14A PDK 0.9 已发布，量产目标指向 2028 年。',
    moat: '护城河来自庞大的 x86 软件兼容性、企业和云客户认证、全球制造与先进封装资产、CPU 与工艺共同优化经验，以及美国本土供应链地位。弱点是制造固定成本巨大、产品与制程执行曾多次延误，外部代工客户仍未形成规模。',
    roadmap: '客户端推进 Core Ultra Series 3；服务器推进 Diamond Rapids；AI 侧以 Xeon 编排、GPU D 系列推理和开放软件形成组合；制造侧扩大 18A 产能并推进 14A。管理层预计 2026 Q4 收入 150-160 亿美元、GAAP 毛利率约 37.1%。',
    strategy: '重振 x86 产品竞争力，同时将 Intel Foundry 建成美国本土先进制程和封装平台。公司通过削减费用、出售 Altera 控股权、调整晶圆厂合作结构和大规模增发补充资本，再把资金投向 18A/14A、Xeon 供给与 AI 产品。',
    risks: '2026 年前九个月净亏损 114.41 亿美元，受约 126.14 亿美元托管股份公允价值损失和 39 亿美元 Mobileye 商誉减值影响；Foundry 仍需重大外部客户验证；截至 Q3 总债务约 501 亿美元；2026 年公开增发约 211 百万股、净融资 226.17 亿美元造成稀释；制造资本密集、库存上升、PC 放缓、先进制程良率和地缘出口限制均可能压低回报。',
    lensOperations: 'Q3 2026 收入 165.13 亿美元，同比增长 21%；GAAP 毛利率升至 43.0%，营业利润率升至 15.3%。DCAI 收入 73 亿美元，同比增长 78%，而客户端业务下降 5%。经营改善明显，但全年利润仍被减值和衍生负债重估扰动。',
    lensEconomics: 'Intel 的价值创造分为两层：产品业务把 x86 兼容和算力转化为芯片收入；制造业务把极高固定成本的晶圆厂变成共享平台。产能利用率和良率上升时利润弹性很大，利用率不足时折旧和闲置成本会迅速侵蚀毛利。',
    lensInvestor: 'Q3 经营利润和现金流改善，但 2026 年前九个月 GAAP 净亏损与 Q3 单季盈利方向相反，说明必须区分经常经营和估值/减值项目。2026-11-06 市值约 2991 亿美元，按 2025 收入约 5.7 倍 P/S；由于 TTM GAAP 盈利受重大一次性项目扭曲，P/E 不具备稳定解释力。',
    lensCareer: '适合制造工艺、先进封装、CPU/GPU 架构、编译器、AI 推理、数据中心平台和供应链工程人才。能接触从晶体管到系统软件的全栈问题，但组织重组、资本纪律与产品路线调整会增加岗位波动。',
    lensIndustry: 'Intel 是少数同时拥有先进逻辑设计和美国本土大规模制造能力的公司。它并非 NVIDIA 的同构替代者，而是在 CPU、AI 推理、开放软件和晶圆代工四个层面竞争；其成败还影响美国先进制造供应链。',
    segments: {
      period: 'Q3 2026', currency: 'USD', unit: 'USD billion', sourceUrl: resultsUrl,
      items: [
        { name: '客户端计算与物理 AI', en: 'CCPG', value: 8.1 },
        { name: '数据中心与 AI', en: 'DCAI', value: 7.3 },
        { name: 'Intel Foundry（含内部交易）', en: 'Intel Foundry', value: 6.7 },
        { name: '其他', en: 'All Other', value: 0.7 },
        { name: '分部间抵销', en: 'Intersegment eliminations', value: -6.3 }
      ],
      history: [
        { period: 'FY2023', items: [{ name: '合并收入', value: 54.228 }] },
        { period: 'FY2024', items: [{ name: '合并收入', value: 53.101 }] },
        { period: 'FY2025', items: [{ name: '合并收入', value: 52.853 }] }
      ]
    }, createdAt: stamp, updatedAt: stamp
  };

  const financials = [];
  const add = (metric, value, unit, period, frequency, reportDate, sourceUrl, dataType = '原始数据 / Reported', currency = 'USD', notes = '') => {
    financials.push({ id:`intc-${metric.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${period.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`, companyId:'intel', metric, value, unit, currency, frequency, period, reportDate, sourceUrl, dataType, notes, createdAt:stamp, updatedAt:stamp });
  };

  const annual = [
    ['FY2023','2024-01-26',{'Revenue':[54228,'USD million'],'Cost of Revenue':[32517,'USD million'],'Gross Profit':[21711,'USD million'],'Gross Margin':[40.0,'%'],'Operating Income':[93,'USD million'],'Operating Margin':[0.2,'%'],'Net Income':[1689,'USD million'],'Net Profit Margin':[3.1,'%'],'EPS':[0.40,'USD/share'],'Diluted EPS':[0.40,'USD/share'],'R&D Expenses':[16046,'USD million'],'Operating Cash Flow':[11471,'USD million'],'Investing Cash Flow':[-24041,'USD million'],'Financing Cash Flow':[8505,'USD million'],'Capital Expenditure':[25750,'USD million'],'Free Cash Flow':[-14279,'USD million'],'Stock-based Compensation':[3229,'USD million'],'Dividends':[3088,'USD million']}],
    ['FY2024','2025-01-31',{'Revenue':[53101,'USD million'],'Cost of Revenue':[35756,'USD million'],'Gross Profit':[17345,'USD million'],'Gross Margin':[32.7,'%'],'Operating Income':[-11678,'USD million'],'Operating Margin':[-22.0,'%'],'Net Income':[-18756,'USD million'],'Net Profit Margin':[-35.3,'%'],'EPS':[-4.38,'USD/share'],'Diluted EPS':[-4.38,'USD/share'],'R&D Expenses':[16546,'USD million'],'Operating Cash Flow':[8288,'USD million'],'Investing Cash Flow':[-18256,'USD million'],'Financing Cash Flow':[11138,'USD million'],'Capital Expenditure':[25122,'USD million'],'Free Cash Flow':[-16834,'USD million'],'Cash and Cash Equivalents':[8249,'USD million'],'Total Assets':[196485,'USD million'],'Total Liabilities':[91453,'USD million'],"Stockholders' Equity":[105032,'USD million'],'Total Debt':[50011,'USD million'],'Accounts Receivable':[3478,'USD million'],'Inventory':[12198,'USD million'],'Shares Outstanding':[4330,'million shares'],'Stock-based Compensation':[3410,'USD million'],'Dividends':[1599,'USD million']}],
    ['FY2025','2026-01-23',{'Revenue':[52853,'USD million'],'Cost of Revenue':[34478,'USD million'],'Gross Profit':[18375,'USD million'],'Gross Margin':[34.8,'%'],'Operating Income':[-2214,'USD million'],'Operating Margin':[-4.2,'%'],'Net Income':[-267,'USD million'],'Net Profit Margin':[-0.5,'%'],'EPS':[-0.06,'USD/share'],'Diluted EPS':[-0.06,'USD/share'],'R&D Expenses':[13774,'USD million'],'Operating Cash Flow':[9697,'USD million'],'Investing Cash Flow':[-14821,'USD million'],'Financing Cash Flow':[11587,'USD million'],'Capital Expenditure':[17672,'USD million'],'Free Cash Flow':[-7975,'USD million'],'Cash and Cash Equivalents':[14265,'USD million'],'Total Assets':[211429,'USD million'],'Total Liabilities':[85069,'USD million'],"Stockholders' Equity":[126360,'USD million'],'Total Debt':[46585,'USD million'],'Accounts Receivable':[3839,'USD million'],'Inventory':[11618,'USD million'],'Shares Outstanding':[4994,'million shares'],'Stock-based Compensation':[2434,'USD million'],'Dividends':[0,'USD million'],'Equity Financing':[12706,'USD million'],'Debt Financing':[0,'USD million']}]
  ];
  for (const [period,reportDate,values] of annual) for (const [metric,[value,unit]] of Object.entries(values)) {
    const calc = ['Gross Margin','Operating Margin','Net Profit Margin','Total Liabilities','Total Debt','Free Cash Flow','Capital Expenditure'].includes(metric);
    let note = calc ? '根据公司 GAAP 披露值计算。' : '';
    if (metric === 'Capital Expenditure') note = '计算口径：现金流量表中投资活动与融资活动列示的物业、厂房和设备现金支出之和。';
    if (metric === 'Free Cash Flow') note = '计算口径：经营现金流减上述总资本开支；不是公司定义的 non-GAAP 调整后自由现金流。';
    if (metric === 'Net Income' && period === 'FY2025') note = 'Intel 股东应占净亏损；2025 年含 Altera 处置收益等一次性项目。';
    if (metric === 'Equity Financing') note = '主要为美国政府普通股、认股权证和托管股份相关净融资；融资不计入营业收入。';
    add(metric,value,unit,period,'年度',reportDate,annualUrl,calc?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  const q3 = {'Revenue':[16513,'USD million'],'Cost of Revenue':[9417,'USD million'],'Gross Profit':[7096,'USD million'],'Gross Margin':[43.0,'%'],'Operating Income':[2522,'USD million'],'Operating Margin':[15.3,'%'],'Net Income':[3320,'USD million'],'Net Profit Margin':[20.1,'%'],'EPS':[0.63,'USD/share'],'Diluted EPS':[0.60,'USD/share'],'R&D Expenses':[3490,'USD million'],'Cash and Cash Equivalents':[21846,'USD million'],'Total Assets':[228574,'USD million'],'Total Liabilities':[97018,'USD million'],"Stockholders' Equity":[131556,'USD million'],'Total Debt':[50134,'USD million'],'Accounts Receivable':[4093,'USD million'],'Inventory':[13068,'USD million'],'Shares Outstanding':[5310,'million shares'],'Stock-based Compensation':[586,'USD million']};
  for (const [metric,[value,unit]] of Object.entries(q3)) {
    const calc = ['Gross Margin','Operating Margin','Net Profit Margin','Total Liabilities','Total Debt'].includes(metric);
    let note = calc ? '根据 Q3 2026 GAAP 披露值计算。' : '';
    if (metric === 'Net Income') note = 'Intel 股东应占净利润；含衍生负债按市值重估收益等非经营项目。';
    if (metric === 'Total Debt') note = '计算：短期债务 38.17 亿美元 + 长期债务 463.17 亿美元。';
    add(metric,value,unit,'Q3 2026','季度','2026-10-30',quarterUrl,calc?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }
  const ytd = {'Operating Cash Flow':[13184,'USD million'],'Investing Cash Flow':[-20259,'USD million'],'Financing Cash Flow':[14761,'USD million'],'Capital Expenditure':[11834,'USD million'],'Free Cash Flow':[1350,'USD million'],'Equity Financing':[22617,'USD million'],'Debt Financing':[4000,'USD million']};
  for (const [metric,[value,unit]] of Object.entries(ytd)) {
    const calc = ['Capital Expenditure','Free Cash Flow','Debt Financing'].includes(metric);
    let note = '';
    if (metric === 'Capital Expenditure') note = '计算：投资活动 CapEx 102.16 亿美元 + 融资活动 CapEx 16.18 亿美元。';
    if (metric === 'Free Cash Flow') note = '计算：经营现金流 131.84 亿美元 - 总资本开支 118.34 亿美元 = 13.50 亿美元。';
    if (metric === 'Equity Financing') note = '公开增发约 2.11 亿股，净融资 226.17 亿美元；这是一级市场融资，不是收入。';
    if (metric === 'Debt Financing') note = '计算：发行定期债务 130 亿美元减偿还 90 亿美元。';
    add(metric,value,unit,'YTD Q3 2026','累计季度','2026-10-30',quarterUrl,calc?'计算数据 / Calculated':'原始数据 / Reported','USD',note);
  }
  add('Share Price',56.28,'USD/share','2026-11-06 close','市场快照','2026-11-07',priceUrl,'外部市场数据 / Market','USD','NASDAQ 收盘价；二级市场交易不会直接给公司带来现金。');
  add('Market Capitalization',299130,'USD million','2026-11-06 close','市场快照','2026-11-07',priceUrl,'外部市场数据 / Market','USD','市值约 2991.3 亿美元；市值不是资产。');
  add('P/E','N/A','x','2026-11-06','市场快照','2026-11-07',quarterUrl,'不适用 / N/A','N/A','TTM GAAP 盈利受 Mobileye 减值和托管股份公允价值大幅波动影响，简单 P/E 缺乏可比性。');
  add('P/S',5.7,'x','FY2025 revenue / 2026-11-06 market cap','市场快照','2026-11-07',priceUrl,'计算数据 / Calculated','N/A','2991.3 亿美元市值 ÷ FY2025 收入 528.53 亿美元。');
  add('Stock Buybacks',0,'USD million','YTD Q3 2026','累计季度','2026-10-30',quarterUrl,'原始数据 / Reported','USD','现金流量表未列示回购支出；公司优先把现金投向制造和资产负债表。');
  add('Dividends',0,'USD million','YTD Q3 2026','累计季度','2026-10-30',quarterUrl,'原始数据 / Reported','USD','Intel 自 2024 Q4 起暂停普通股股息。');

  const journal = {
    id:'intel-research-2026-11-07', date:'2026-11-07', companyId:'intel', type:'首次研究', title:'Intel 首次研究：产品复苏、重资产制造与股权融资之间的再平衡',
    discovery:'1. Q3 2026 收入 165.13 亿美元，同比增长 21%；GAAP 毛利率 43.0%，比上年提升 4.8 个百分点，营业利润率升至 15.3%。\n2. DCAI 收入 73 亿美元，同比增长 78%，是本季最强增长来源；客户端收入 81 亿美元、同比下降 5%，收入结构明显向服务器倾斜。\n3. 2026 年前九个月经营现金流 131.84 亿美元，按“OCF-全部 PP&E 现金支出”计算的自由现金流约 13.50 亿美元；利润和现金流差异主要来自 126.14 亿美元托管股份公允价值损失、39 亿美元 Mobileye 商誉减值、折旧和 SBC。\n4. 截至 Q3 现金 218.46 亿美元、短期投资 321.59 亿美元，但总债务约 501.34 亿美元；流动性增强主要依赖 226.17 亿美元公开增发净融资。\n5. Intel 的核心不是只卖 CPU，而是“产品 + 制造”双轮模式。Foundry 要成功，必须让 18A/14A 良率、产能利用率和外部客户规模共同改善。',
    thoughts:'公司视角：优先扩大 Xeon 供给、推进 18A/14A、控制费用并补充资本，方向合理；但产品、制造和资产负债表三条战线同时推进，执行难度极高。\n经济学视角：Intel 通过兼容性和制造规模创造价值。晶圆厂固定成本很高，良率与利用率每提高一点都可能带来较大利润弹性；反之则形成折旧和闲置成本拖累。\n投资者视角：Q3 经营指标强劲，但不能用单季净利润掩盖前九个月 114.41 亿美元亏损。大规模增发改善流动性，同时把未来收益分摊给更多股份；应关注每股自由现金流而非只看总收入。\n求职者视角：适合想学习芯片全栈、先进制造、封装、CPU/GPU、编译器和数据中心系统的人；但应预期重组、优先级变化和高交付压力。\n产业视角：Intel 是美国先进逻辑制造的重要支点，也是 x86 与开放 AI 软件生态的关键玩家。它与 NVIDIA 在 AI 推理和系统平台局部竞争，与 TSMC 在代工竞争。\n\n个人思考：理解 Intel 必须把“产品利润”和“制造投资”分开看。收入增长若不能带来毛利率、Foundry 外部收入和自由现金流同步改善，就可能只是高资本投入下的规模扩张。\n\n结论速览：\n- 公司靠什么赚钱：销售 CPU、AI/网络芯片，并提供晶圆制造与先进封装。\n- 近年财务变化：FY2024 巨额亏损，FY2025 接近盈亏平衡但经营仍亏；Q3 2026 收入和毛利显著复苏，YTD 自由现金流转正。\n- 三个关键指标：Q3 毛利率 43.0%；DCAI 收入同比 +78%；YTD 自由现金流约 13.50 亿美元。\n- 三个风险：18A/14A 良率和外部客户不足；约 501 亿美元债务与重资产投入；2026 大规模增发造成股权稀释。\n- 最关键变量：14A/18A 能否获得足够外部客户并提高晶圆厂利用率。\n- 投资者启示：把一次性估值损益、减值和融资剔除，持续比较经营利润、资本开支和完全稀释后的每股自由现金流。\n- 求职者启示：Intel 提供难得的设计制造一体化学习场景，但团队选择应关注路线稳定性和资源优先级。\n\n待研究问题：\n1. Q4 2026 毛利率为何指引回落至约 37.1%，是产品组合、产能成本还是 PC 放缓？\n2. 14A 外部客户何时转化为有约束力订单，未来资本开支与客户承诺如何匹配？\n3. Foundry 外部收入、内部抵销和分部亏损分别如何变化？\n4. 2026 增发后，完全稀释股数和每股自由现金流能否改善？\n5. 下一家公司研究 Arm Holdings，比较 IP 授权模式与 Intel 重资产模式的资本效率。',
    sources:`${annualUrl}\n${quarterUrl}\n${resultsUrl}\n${priceUrl}`, createdAt:stamp, updatedAt:stamp
  };

  const base = window.YHH_RESEARCH_SEED || {version:0,companies:[],financials:[],journals:[]};
  base.version = Math.max(Number(base.version)||0,7);
  base.companies = [...(base.companies||[]).filter(x=>x.id!=='intel'),company];
  base.financials = [...(base.financials||[]).filter(x=>x.companyId!=='intel'),...financials];
  base.journals = [...(base.journals||[]).filter(x=>x.id!==journal.id),journal];
  window.YHH_RESEARCH_SEED = base;
})();
