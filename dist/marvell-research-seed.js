(() => {
  const annualUrl = 'https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000011/mrvl-20260131.htm';
  const quarterUrl = 'https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000022/q227_8kx812026ex-991.htm';
  const quarter10qUrl = 'https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000025/mrvl-20260801.htm';
  const lumentumUrl = 'https://investor.marvell.com/news-events/press-releases/detail/1040/marvell-and-lumentum-to-combine-creating-a-category-leader-in-ai-connectivity';
  const priceUrl = 'https://stockanalysis.com/stocks/mrvl/history/';
  const marketUrl = 'https://stockanalysis.com/stocks/mrvl/market-cap/';
  const stamp = '2026-11-06T06:15:00.000Z';

  const company = {
    id: 'marvell', name: 'Marvell Technology', ticker: 'MRVL', country: '美国', industryId: 'semiconductor', founded: '1995', listed: 'NASDAQ Global Select Market 上市',
    description: 'Marvell Technology（迈威尔科技）是一家无晶圆厂数据基础设施半导体公司。它不以通用 GPU 为核心，而是为云客户共同设计定制 AI ASIC/XPU，并销售高速光电互连、SerDes、以太网交换、DPU、PCIe/CXL 和存储芯片。FY2026 收入 81.95 亿美元，其中数据中心占 74%；FY2027 Q2 数据中心占比进一步升至 79%。',
    products: '定制 AI ASIC/XPU 平台；PAM、coherent DSP、AEC、PCIe retimer、硅光和 CPO 等互连芯片；Teralynx/Prestera 以太网交换；UALink、PCIe/CXL 交换；OCTEON DPU；Fibre Channel 与 Bravera HDD/SSD 控制器；运营商和企业网络处理器。',
    customers: '超大规模云服务商、AI 系统与服务器厂商、网络和光模块设备商、存储设备厂商、电信运营商及企业网络客户。FY2026 一个直接客户占收入 14%，一个分销商占 37%，前十大客户合计占 82%。',
    revenueSources: '销售数据中心与通信基础设施芯片、定制 ASIC 和相关解决方案取得产品收入；融资、客户预付款、股票市值以及处置业务所得不属于营业收入。FY2026 数据中心收入 61.00 亿美元，通信及其他收入 20.94 亿美元。',
    businessModel: '公司负责芯片架构、模拟/混合信号、数字信号处理、SerDes、封装和固件设计，把晶圆制造、封装与测试外包。客户愿意付费，是因为 Marvell 能把定制计算和从芯片内到数据中心之间的高速连接共同优化，并承担先进节点芯片落地的复杂工程。利润来自产品售价减去代工、封装测试等成本，再扣除高额研发和销售管理费用。',
    suppliers: 'Marvell 没有自有晶圆厂，主要依赖第三方晶圆代工、封装和测试。公司披露大部分产品由台湾代工厂制造，其他来源位于中国、德国、韩国、新加坡和美国；多数产品在任一时点只有一个合格代工来源。',
    downstream: '云服务商和 AI 集群建设者、服务器和交换机 OEM、光模块厂商、存储系统厂商、运营商与企业网络客户。下游资本开支、机房电力和客户芯片导入节奏会直接影响收入与库存。',
    competitors: '定制计算面对 Broadcom、客户内部 ASIC 团队和其他定制芯片供应商；互连与交换面对 NVIDIA、Broadcom、Cisco 等；DPU 面对 NVIDIA、Intel 和 AMD；存储控制器面对专用芯片和客户自研方案。NVIDIA 同时是竞争者、生态伙伴和 20 亿美元可转换优先股投资者。',
    partners: '先进晶圆代工、封装测试、EDA 和 IP 供应商；超大规模云客户的共同设计团队；光模块、电缆、服务器和交换机生态。2026 年收购 Celestial AI 和 XConn，补充光子互连及 PCIe/CXL 交换技术。',
    technology: '核心技术包括 2nm/3nm 定制 ASIC 平台、224G SerDes、PAM/coherent DSP、硅光与 CPO、AEC、Teralynx 交换架构、UALink、PCIe/CXL、OCTEON DPU，以及先进封装和 chiplet 集成。',
    moat: '护城河来自高速 SerDes 和模拟混合信号 IP、跨计算与连接的系统级设计能力、先进节点 tape-out 经验、长期云客户共同设计关系，以及大量已经导入客户系统的产品。设计周期长、验证成本高，使成功项目具有较强黏性；但客户集中也放大单一项目得失。',
    roadmap: '推进 3nm 并开发 2nm 定制计算平台；把 224G SerDes、1.6T 光互连、CPO、UALink 与 PCIe/CXL 推向机架级 AI 系统。管理层在 FY2027 Q2 指引 FY2027 Q3 收入中点 31.5 亿美元；2026-11-02 又将初步范围收窄至中点上下 2%。',
    strategy: '从“数据基础设施芯片组合”升级为“定制计算 + 全距离互连”平台。Celestial AI 和 XConn 扩展 scale-up 能力；拟以全股票方式与 Lumentum 合并，进一步把激光器、光器件和连接芯片整合，但交易预计到 2028 年上半年才完成，仍需股东和监管批准。',
    risks: '前十大客户占 FY2026 收入 82%，设计项目得失会显著影响收入；多数先进产品单一代工来源且制造集中在台湾；截至 FY2027 Q2 商誉 138.74 亿美元，占总资产约一半；拟议 Lumentum 交易将使原 Marvell 股东仅持合并公司约 67%，存在巨大稀释、审批和整合风险；SBC、并购摊销与可变对价使 GAAP 和 non-GAAP 差异很大；AI 资本开支、出口限制和先进工艺成本也会影响利润。',
    lensOperations: 'FY2026 收入增长 42%，GAAP 营业利润由亏损转为 13.23 亿美元；FY2027 Q2 收入再增长 37%，营业利润率 16.8%。增长来自定制 AI、光电互连、存储和交换，但研发费用率仍高且单季 SBC 达 3.26 亿美元。',
    lensEconomics: 'Marvell 为客户把通用芯片不能经济覆盖的稳定大规模工作负载做成定制 ASIC，并用互连芯片解决算力集群的带宽与功耗瓶颈。价值分配给云客户、Marvell、代工与封装厂、光器件伙伴；客户规模越大，定制芯片的单位成本优势越明显。',
    lensInvestor: '增长和经营现金流改善明显，但 FY2026 净利润含 18.30 亿美元业务出售收益，不能把 32.6% 净利率视为可持续经营水平。2026-11-05 市值约 1,173 亿美元、P/S 约 12.4 倍；Lumentum 全股票交易令未来股数和每股价值成为核心风险。',
    lensCareer: '适合投入 3 至 5 年，特别是 ASIC/SoC、SerDes、DSP、硅光、CPO、先进封装、DPU、交换芯片和存储控制器方向。岗位能接触 AI 系统瓶颈和客户共同设计，但并购整合、项目周期与客户集中会提高组织变化和交付压力。',
    lensIndustry: 'Marvell 是 AI 数据中心中“定制计算 + 连接”的重要供应商，规模小于 NVIDIA 与 Broadcom，却覆盖光、电、交换和存储多个关键环节。它更像 AI 集群的定制芯片与高速数据通路提供者，而不是通用 GPU 平台。',
    segments: {
      period: 'FY2026', currency: 'USD', unit: 'USD million', sourceUrl: annualUrl,
      items: [
        { name: '数据中心', en: 'Data Center', value: 6100.3 },
        { name: '通信及其他', en: 'Communications and Other', value: 2094.3 }
      ],
      history: [
        { period: 'FY2024', items: [{ name: '数据中心', value: 2216.7 }, { name: '通信及其他', value: 3291.0 }] },
        { period: 'FY2025', items: [{ name: '数据中心', value: 4164.2 }, { name: '通信及其他', value: 1603.1 }] },
        { period: 'FY2026', items: [{ name: '数据中心', value: 6100.3 }, { name: '通信及其他', value: 2094.3 }] }
      ]
    },
    createdAt: stamp, updatedAt: stamp,
  };

  const financials = [];
  const add = (metric, value, unit, period, frequency, reportDate, sourceUrl, dataType = '原始数据 / Reported', currency = 'USD', notes = '') => {
    financials.push({ id: `mrvl-${metric.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${period.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`, companyId: 'marvell', metric, value, unit, currency, frequency, period, reportDate, sourceUrl, dataType, notes, createdAt: stamp, updatedAt: stamp });
  };

  const annual = [
    ['FY2024','2024-03-13',{
      'Revenue':[5507.7,'USD million'],'Cost of Revenue':[3214.1,'USD million'],'Gross Profit':[2293.6,'USD million'],'Gross Margin':[41.6,'%'],'Operating Income':[-567.7,'USD million'],'Operating Margin':[-10.3,'%'],'Net Income':[-933.4,'USD million'],'Net Profit Margin':[-16.9,'%'],'EPS':[-1.08,'USD/share'],'Diluted EPS':[-1.08,'USD/share'],'R&D Expenses':[1896.2,'USD million'],'Operating Cash Flow':[1370.5,'USD million'],'Investing Cash Flow':[-350.5,'USD million'],'Financing Cash Flow':[-980.2,'USD million'],'Capital Expenditure':[336.3,'USD million'],'Free Cash Flow':[1034.2,'USD million'],'Stock Buybacks':[150.0,'USD million'],'Dividends':[206.8,'USD million'],'Stock-based Compensation':[609.8,'USD million']
    }],
    ['FY2025','2025-03-12',{
      'Revenue':[5767.3,'USD million'],'Cost of Revenue':[3385.1,'USD million'],'Gross Profit':[2382.2,'USD million'],'Gross Margin':[41.3,'%'],'Operating Income':[-720.3,'USD million'],'Operating Margin':[-12.5,'%'],'Net Income':[-885.0,'USD million'],'Net Profit Margin':[-15.3,'%'],'EPS':[-1.02,'USD/share'],'Diluted EPS':[-1.02,'USD/share'],'R&D Expenses':[1950.4,'USD million'],'Operating Cash Flow':[1681.2,'USD million'],'Investing Cash Flow':[-300.7,'USD million'],'Financing Cash Flow':[-1383.0,'USD million'],'Capital Expenditure':[284.6,'USD million'],'Free Cash Flow':[1396.6,'USD million'],'Cash and Cash Equivalents':[948.3,'USD million'],'Total Assets':[20204.5,'USD million'],'Total Liabilities':[6777.5,'USD million'],"Stockholders' Equity":[13427.0,'USD million'],'Total Debt':[4063.8,'USD million'],'Accounts Receivable':[1028.4,'USD million'],'Inventory':[1029.7,'USD million'],'Shares Outstanding':[866.0,'million shares'],'Stock Buybacks':[725.0,'USD million'],'Dividends':[207.5,'USD million'],'Stock-based Compensation':[597.4,'USD million'],'Debt Financing':[0,'USD million'],'Equity Financing':[87.6,'USD million']
    }],
    ['FY2026','2026-03-11',{
      'Revenue':[8194.6,'USD million'],'Cost of Revenue':[4013.9,'USD million'],'Gross Profit':[4180.7,'USD million'],'Gross Margin':[51.0,'%'],'Operating Income':[1322.9,'USD million'],'Operating Margin':[16.1,'%'],'Net Income':[2670.1,'USD million'],'Net Profit Margin':[32.6,'%'],'EPS':[3.10,'USD/share'],'Diluted EPS':[3.07,'USD/share'],'R&D Expenses':[2075.2,'USD million'],'Operating Cash Flow':[1750.5,'USD million'],'Investing Cash Flow':[2097.8,'USD million'],'Financing Cash Flow':[-2157.8,'USD million'],'Capital Expenditure':[354.1,'USD million'],'Free Cash Flow':[1396.4,'USD million'],'Cash and Cash Equivalents':[2638.8,'USD million'],'Total Assets':[22285.3,'USD million'],'Total Liabilities':[7976.9,'USD million'],"Stockholders' Equity":[14308.4,'USD million'],'Total Debt':[4470.6,'USD million'],'Accounts Receivable':[2186.6,'USD million'],'Inventory':[1388.0,'USD million'],'Shares Outstanding':[847.3,'million shares'],'Stock Buybacks':[2040.1,'USD million'],'Dividends':[205.1,'USD million'],'Stock-based Compensation':[590.8,'USD million'],'Debt Financing':[1198.6,'USD million'],'Equity Financing':[78.7,'USD million']
    }]
  ];
  for (const [period,reportDate,values] of annual) for (const [metric,[value,unit]] of Object.entries(values)) {
    const calculated = ['Gross Margin','Operating Margin','Net Profit Margin','Free Cash Flow','Total Debt'].includes(metric);
    let note = calculated ? '根据公司 GAAP 原始披露值计算。' : '';
    if (metric === 'Free Cash Flow') note = '计算口径：经营现金流减购买物业和设备。';
    if (metric === 'Total Debt') note = '计算值：短期债务加长期债务。';
    if (period === 'FY2026' && metric === 'Net Income') note = '包含出售汽车以太网业务产生的约 18.30 亿美元税前收益，不代表持续经营的常态利润。';
    if (period === 'FY2026' && metric === 'Investing Cash Flow') note = '包含出售汽车以太网业务获得的 24.786 亿美元净现金；不是营业收入。';
    if (metric === 'Equity Financing') note = '员工股票计划现金流；不代表公开市场大规模增发。';
    add(metric,value,unit,period,'年度',reportDate,annualUrl,calculated?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  const q2 = {
    'Revenue':[2739.3,'USD million'],'Cost of Revenue':[1283.7,'USD million'],'Gross Profit':[1455.6,'USD million'],'Gross Margin':[53.1,'%'],'Operating Income':[459.7,'USD million'],'Operating Margin':[16.8,'%'],'Net Income':[308.0,'USD million'],'Net Profit Margin':[11.2,'%'],'EPS':[0.34,'USD/share'],'Diluted EPS':[0.33,'USD/share'],'R&D Expenses':[741.1,'USD million'],'Operating Cash Flow':[605.5,'USD million'],'Investing Cash Flow':[-130.3,'USD million'],'Financing Cash Flow':[-386.0,'USD million'],'Capital Expenditure':[126.7,'USD million'],'Free Cash Flow':[478.8,'USD million'],'Cash and Cash Equivalents':[3932.8,'USD million'],'Total Assets':[27554.6,'USD million'],'Total Liabilities':[9023.0,'USD million'],"Stockholders' Equity":[18531.6,'USD million'],'Total Debt':[4962.9,'USD million'],'Accounts Receivable':[2218.4,'USD million'],'Inventory':[1360.6,'USD million'],'Shares Outstanding':[876.9,'million shares'],'Stock Buybacks':[200.0,'USD million'],'Dividends':[53.9,'USD million'],'Dividends Per Share':[0.06,'USD/share'],'Stock-based Compensation':[326.2,'USD million'],'Debt Financing':[0,'USD million'],'Equity Financing':[0,'USD million']
  };
  for (const [metric,[value,unit]] of Object.entries(q2)) {
    const calculated = ['Gross Margin','Operating Margin','Net Profit Margin','Free Cash Flow','Total Debt'].includes(metric);
    let note = calculated ? '根据公司 GAAP 原始披露值计算。' : '';
    if (metric === 'Free Cash Flow') note = '计算口径：605.5 - 126.7 = 478.8（百万美元）。';
    if (metric === 'Total Debt') note = '计算值：期末无短期债务，长期债务 49.629 亿美元。';
    if (metric === 'Shares Outstanding') note = '10-Q 披露截至 2026-08-21 普通股流通股约 8.769 亿股。';
    if (metric === 'Equity Financing') note = 'Q2 单季为 0；FY2027 上半年 NVIDIA 以 20 亿美元认购可转换优先股，最多可转换约 2,177.8 万股普通股。';
    if (metric === 'Debt Financing') note = 'Q2 单季无新增借款；FY2027 上半年新增借款 9.989 亿美元并偿还 5 亿美元。';
    add(metric,value,unit,'FY2027 Q2','季度','2026-08-27',metric === 'Shares Outstanding' ? quarter10qUrl : quarterUrl,calculated?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  add('Equity Financing',2000.0,'USD million','FY2027 H1','季度','2026-08-28',quarter10qUrl,'原始数据 / Reported','USD','NVIDIA 认购 Series A 可转换优先股；这是融资，不是营业收入。');
  add('Share Price',133.55,'USD/share','2026-11-05 close','季度','2026-11-06',priceUrl,'外部市场数据 / Market','USD','NASDAQ 收盘价快照；二级市场价格波动不会直接给公司带来现金。');
  add('Market Capitalization',117260,'USD million','2026-11-05 close','季度','2026-11-06',marketUrl,'外部市场数据 / Market','USD','外部市场快照约 1,172.6 亿美元；市值不是公司资产，也不是营业收入。');
  add('P/E',44.87,'x','TTM as of 2026-08-01','季度','2026-11-06',marketUrl,'外部市场数据 / Market','N/A','外部市场 TTM P/E。TTM GAAP 利润仍包含出售汽车以太网业务收益，解读时需谨慎。');
  add('P/S',12.4,'x','TTM as of 2026-08-01','季度','2026-11-06',quarter10qUrl,'计算数据 / Calculated','N/A','计算：1,172.6 亿美元市值 ÷ 约 94.503 亿美元 TTM 收入。');

  const journal = {
    id:'marvell-research-2026-11-06', date:'2026-11-06', companyId:'marvell', type:'首次研究', title:'Marvell 首次研究：定制计算、全距离互连与并购稀释的双重变量',
    discovery:'1. FY2026 收入 81.95 亿美元，同比增长 42%；数据中心收入 61.00 亿美元、占 74%，两年内从 FY2024 的 40% 大幅提升。\n2. FY2027 Q2 收入 27.39 亿美元，同比增长 37%；数据中心收入 21.72 亿美元、同比增长 46%，占比升至 79%，增长来自定制 AI、光电互连、存储和交换。\n3. FY2026 GAAP 营业利润由 FY2025 亏损 7.20 亿美元改善至盈利 13.23 亿美元，但 26.70 亿美元净利润含出售汽车以太网业务的 18.30 亿美元税前收益，不能把净利润跃升全部视为经营改善。\n4. FY2027 Q2 经营现金流 6.06 亿美元，自由现金流约 4.79 亿美元，显著高于净利润 3.08 亿美元；原因包括 3.26 亿美元 SBC 和 2.15 亿美元并购无形资产摊销等非现金费用。\n5. 2026-11-02 宣布的 Lumentum 全股票交易将使原 Marvell 股东持有合并公司约 67%，交易规模和潜在稀释远大于普通补强型收购；这是未来每股价值最关键的新变量。',
    thoughts:'公司视角：聚焦定制计算与互连的战略与 AI 集群瓶颈高度一致，Celestial AI、XConn 和拟议 Lumentum 交易都在补强 scale-up/光互连；但同时推进多项并购会显著提高执行风险。\n经济学视角：Marvell 用定制 ASIC 降低稳定大规模工作负载的单位算力成本，用高速互连减少“芯片很快但数据搬不动”的系统损失；它获取的是系统工程与长期共同设计的价值。\n投资者视角：收入、毛利率、营业利润和现金流均改善，但 FY2026 净利润受业务出售收益抬高；约 12.4 倍 TTM P/S 已包含较高增长预期，Lumentum 交易的股数扩张和协同兑现需要重点审计。\n求职者视角：ASIC、SerDes、DSP、硅光、CPO、交换和 DPU 是高价值方向，能够接触 AI 基础设施真正瓶颈；同时要接受长设计周期、客户集中和并购整合带来的组织变化。\n产业视角：Marvell 不是 NVIDIA 的完整替代者，而是定制 XPU 与高速互连的关键补充和局部竞争者；它把需求传导给先进代工、封装、光器件和网络设备生态。\n\n个人思考：观察 Marvell 不能只看“AI 收入增长”。要把定制芯片项目的量产节奏、互连产品组合、SBC/并购摊销、客户集中和潜在股数放到同一张表里。\n\n结论速览：\n- 公司靠什么赚钱：出售定制 ASIC、光电互连、交换、DPU 和存储连接芯片。\n- 近年财务变化：FY2026 收入增长 42%，GAAP 营业利润转正；FY2027 Q2 收入再增长 37%，但净利润口径受一次性出售收益和并购会计影响。\n- 三个关键指标：数据中心收入占比 79%；FY2027 Q2 GAAP 毛利率 53.1%；Q2 自由现金流约 4.79 亿美元。\n- 三个风险：前十大客户占 82%；先进制造单一来源与台湾集中；Lumentum 全股票交易的稀释、审批和整合风险。\n- 最关键变量：定制计算与互连项目能否按期大规模量产，并让收入增速快于股数扩张。\n- 投资者启示：先剔除一次性收益，再比较每股自由现金流与完全稀释股数。\n- 求职者启示：适合进入高壁垒的连接与定制芯片岗位，但应选择产品路线清晰、并购整合影响较小的团队。\n\n待研究问题：\n1. FY2027 Q3 正式财报是否达到 31.5 亿美元收入中点，定制业务加速是否兑现？\n2. Lumentum 交易完成后的完全稀释股数、每股自由现金流和商誉将如何变化？\n3. FY2027 Q2 数据中心收入中，custom、electro-optics、storage 和 switching 各占多少？\n4. 20 亿美元 NVIDIA 优先股与客户合作的具体商业约束是什么？\n5. 下一家公司研究 Intel，比较自有晶圆厂、x86/AI 加速与 Marvell 无晶圆厂定制模式的资本强度和利润结构。',
    sources:`${annualUrl}\n${quarterUrl}\n${quarter10qUrl}\n${lumentumUrl}\n${priceUrl}\n${marketUrl}`, createdAt:stamp, updatedAt:stamp
  };

  const base = window.YHH_RESEARCH_SEED || {version:0,companies:[],financials:[],journals:[]};
  base.version = Math.max(Number(base.version)||0,6);
  base.companies = [...(base.companies||[]).filter(x=>x.id!=='marvell'),company];
  base.financials = [...(base.financials||[]).filter(x=>x.companyId!=='marvell'),...financials];
  base.journals = [...(base.journals||[]).filter(x=>x.id!==journal.id),journal];
  window.YHH_RESEARCH_SEED = base;
})();
