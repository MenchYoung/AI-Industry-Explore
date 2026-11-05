(() => {
  const annualUrl = 'https://www.sec.gov/Archives/edgar/data/1730168/000173016825000121/avgo-20251102.htm';
  const quarterUrl = 'https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial';
  const quarter10qUrl = 'https://www.sec.gov/Archives/edgar/data/1730168/000173016826000080/avgo-20260802.htm';
  const priceUrl = 'https://stockanalysis.com/stocks/avgo/history/';
  const marketUrl = 'https://stockanalysis.com/stocks/avgo/market-cap/';
  const stamp = '2026-11-05T01:10:00.000Z';

  const company = {
    id: 'broadcom', name: 'Broadcom', ticker: 'AVGO', country: '美国', industryId: 'semiconductor', founded: '1961（技术传承；Broadcom Corporation 创立于 1991，现集团于 2016 年形成）', listed: 'NASDAQ Global Select Market 上市',
    description: 'Broadcom Inc.（博通）是一家以定制 AI 加速器、高速网络芯片和基础设施软件为核心的全球技术公司。它与 NVIDIA 的相似点是服务 AI 数据中心计算与互连；不同点是 Broadcom 主要为少数超大客户共同设计定制 XPU/ASIC，并经营 VMware、主机与安全软件。FY2026 Q3 收入 295.91 亿美元，其中半导体解决方案占 70%，AI 半导体收入 167 亿美元。',
    products: '定制 AI XPU/ASIC、以太网交换芯片与 Tomahawk/Jericho 网络、光互连与网络接口、无线射频/FBAR、宽带、存储连接和工业芯片；VMware Cloud Foundation 私有云、主机软件、网络与终端安全、企业软件。',
    customers: '大型云服务商和 AI 模型公司、服务器及网络设备 OEM、智能手机和宽带设备厂商、分销商，以及大型企业、金融机构、政府和关键行业的软件客户。FY2025 一个半导体分销客户占收入 32%，前五大最终客户合计约占 40%。',
    revenueSources: '半导体产品、模块、交换机、子系统和定制 AI 机架销售；IP 许可；基础设施软件订阅、产品许可、支持与专业服务。借款、增发和二级市场市值不属于营业收入。',
    businessModel: '半导体业务通过多年共同设计，为超大规模客户提供定制加速器与网络平台，并主要外包晶圆制造、封装和测试；软件业务通过订阅、许可和支持合同产生高毛利、经常性收入。客户愿意购买，是因为 Broadcom 能把定制计算、互连、系统级 IP 和大规模交付结合起来，并用 VMware 等软件管理关键 IT 环境。',
    suppliers: '公司采用以外包为主的制造模式。FY2025 外部代工晶圆约 95% 来自台积电；封装测试伙伴包括 TSMC、ASE、Foxconn、Amkor 和 SPIL。部分 FBAR 滤波器与 InP 光器件在自有工厂生产，因此既有代工集中风险，也有单一自有工厂风险。',
    downstream: '云服务商、AI 模型与互联网平台、网络和服务器 OEM、消费电子厂商、运营商、工业客户，以及使用 VMware 私有云、主机和安全软件的企业与政府客户。其 AI 收入取决于少数客户的定制芯片部署节奏、数据中心融资和电力建设。',
    competitors: 'AI 计算面对 NVIDIA、AMD、Marvell 及客户内部 ASIC 团队；以太网与网络面对 NVIDIA、Cisco、Marvell 等；无线与连接面对 Qualcomm、Skyworks、Qorvo 等；基础设施软件面对 Microsoft、Oracle、IBM、Red Hat、Nutanix、云服务商与开源方案。',
    partners: '台积电与先进封装测试伙伴；云服务商和超大规模客户的共同设计团队；服务器、交换机和光模块生态；企业软件渠道与系统集成商。客户既是合作伙伴，也可能扩大自研团队成为竞争者。',
    technology: '定制 XPU/ASIC 与 SerDes IP、Tomahawk/Jericho 以太网交换、光互连、CPO/高速连接、FBAR 射频、存储连接，以及 VMware Cloud Foundation 的计算、网络、存储、管理和安全软件。',
    moat: '护城河来自领先 SerDes 和网络芯片、定制 ASIC 的系统级共同设计能力、长期超大客户关系、先进工艺与交付规模，以及收购积累的基础设施软件安装基础。高客户集中使这种深度绑定同时成为风险。',
    roadmap: '继续提高定制 AI XPU 算力与能效，推动 800G/1.6T 以太网、光互连和机架级系统；同时用 VMware Cloud Foundation 扩大私有云与企业 AI 平台。管理层预计 FY2026 Q4 AI 半导体收入 217 亿美元、同比增长 236%。',
    strategy: '把“定制计算 + 以太网互连 + 私有云软件”组合成 AI 基础设施平台，并通过高现金流偿债、派息和回购。与 NVIDIA 的通用 GPU 平台不同，Broadcom 更像超大客户的定制芯片与网络共同设计者。',
    risks: '客户集中和大额订单时点波动；FY2025 外包晶圆约 95% 来自台积电；AI 客户可能增加内部设计或转向其他平台；VMware 许可、定价和产品收缩可能影响客户接受度；截至 FY2026 Q3 总债务约 594 亿美元；出口管制、并购整合、网络安全和高估值风险。',
    lensOperations: '定制 XPU、网络与软件组合在 FY2026 Q3 形成强经营杠杆，GAAP 营业利润率升至约 54%。但应收账款和存货较 FY2025 年末分别增长约 92% 和 99%，显示高速交付显著占用营运资金。',
    lensEconomics: 'Broadcom 帮助少数大客户把通用 GPU 工作负载转化为更低单位成本的定制芯片，并通过以太网扩大集群规模；价值在客户、代工厂、内存/封装供应商和 Broadcom 之间分配。软件业务提供高毛利与现金流缓冲。',
    lensInvestor: 'FY2026 Q3 收入、净利润和自由现金流均创纪录，但约 41.5 倍 TTM GAAP P/E 和约 17.4 倍 P/S 已包含很强的 AI 定制芯片增长预期。需要同时跟踪客户集中、债务和现金流，而不能只看 AI 收入。',
    lensCareer: '适合投入 3 至 5 年，尤其是 ASIC/SoC、SerDes、以太网交换、光互连、芯片验证、云基础设施、虚拟化和企业安全方向。岗位往往贴近超大客户真实部署，但组织受并购整合与效率导向影响较大。',
    lensIndustry: 'Broadcom 是定制 AI ASIC 和以太网互连的核心平台公司，为大型云客户提供 NVIDIA GPU 之外的专用计算路径，并将需求传导到台积电、先进封装、HBM、光模块和数据中心网络。',
    segments: {
      period: 'FY2025', currency: 'USD', unit: 'USD million', sourceUrl: annualUrl,
      items: [
        { name: '半导体解决方案', en: 'Semiconductor Solutions', value: 36858 },
        { name: '基础设施软件', en: 'Infrastructure Software', value: 27029 }
      ],
      history: [
        { period: 'FY2023', items: [{ name: '半导体解决方案', value: 28182 }, { name: '基础设施软件', value: 7637 }] },
        { period: 'FY2024', items: [{ name: '半导体解决方案', value: 30096 }, { name: '基础设施软件', value: 21478 }] },
        { period: 'FY2025', items: [{ name: '半导体解决方案', value: 36858 }, { name: '基础设施软件', value: 27029 }] }
      ]
    },
    createdAt: stamp, updatedAt: stamp,
  };

  const financials = [];
  const add = (metric, value, unit, period, frequency, reportDate, sourceUrl, dataType = '原始数据 / Reported', currency = 'USD', notes = '') => {
    financials.push({ id: `avgo-${metric.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${period.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`, companyId: 'broadcom', metric, value, unit, currency, frequency, period, reportDate, sourceUrl, dataType, notes, createdAt: stamp, updatedAt: stamp });
  };

  const annual = [
    ['FY2023','2023-12-14',{
      'Revenue':[35819,'USD million'],'Cost of Revenue':[11129,'USD million'],'Gross Profit':[24690,'USD million'],'Gross Margin':[68.9,'%'],'Operating Income':[16207,'USD million'],'Operating Margin':[45.2,'%'],'Net Income':[14082,'USD million'],'Net Profit Margin':[39.3,'%'],'EPS':[3.39,'USD/share'],'Diluted EPS':[3.30,'USD/share'],'R&D Expenses':[5253,'USD million'],'Operating Cash Flow':[18085,'USD million'],'Investing Cash Flow':[-689,'USD million'],'Financing Cash Flow':[-15623,'USD million'],'Capital Expenditure':[452,'USD million'],'Free Cash Flow':[17633,'USD million'],'Stock Buybacks':[5824,'USD million'],'Dividends':[7645,'USD million'],'Stock-based Compensation':[2171,'USD million']
    }],
    ['FY2024','2024-12-20',{
      'Revenue':[51574,'USD million'],'Cost of Revenue':[19065,'USD million'],'Gross Profit':[32509,'USD million'],'Gross Margin':[63.0,'%'],'Operating Income':[13463,'USD million'],'Operating Margin':[26.1,'%'],'Net Income':[5895,'USD million'],'Net Profit Margin':[11.4,'%'],'EPS':[1.27,'USD/share'],'Diluted EPS':[1.23,'USD/share'],'R&D Expenses':[9310,'USD million'],'Operating Cash Flow':[19962,'USD million'],'Investing Cash Flow':[-23070,'USD million'],'Financing Cash Flow':[-1733,'USD million'],'Capital Expenditure':[548,'USD million'],'Free Cash Flow':[19414,'USD million'],'Cash and Cash Equivalents':[9348,'USD million'],'Total Assets':[165645,'USD million'],'Total Liabilities':[97967,'USD million'],"Stockholders' Equity":[67678,'USD million'],'Total Debt':[67566,'USD million'],'Accounts Receivable':[4416,'USD million'],'Inventory':[1760,'USD million'],'Shares Outstanding':[4686,'million shares'],'Stock Buybacks':[7176,'USD million'],'Dividends':[9814,'USD million'],'Stock-based Compensation':[5741,'USD million'],'Debt Financing':[39954,'USD million'],'Equity Financing':[190,'USD million']
    }],
    ['FY2025','2025-12-18',{
      'Revenue':[63887,'USD million'],'Cost of Revenue':[20593,'USD million'],'Gross Profit':[43294,'USD million'],'Gross Margin':[67.8,'%'],'Operating Income':[25484,'USD million'],'Operating Margin':[39.9,'%'],'Net Income':[23126,'USD million'],'Net Profit Margin':[36.2,'%'],'EPS':[4.91,'USD/share'],'Diluted EPS':[4.77,'USD/share'],'R&D Expenses':[10977,'USD million'],'Operating Cash Flow':[27537,'USD million'],'Investing Cash Flow':[-580,'USD million'],'Financing Cash Flow':[-20127,'USD million'],'Capital Expenditure':[623,'USD million'],'Free Cash Flow':[26914,'USD million'],'Cash and Cash Equivalents':[16178,'USD million'],'Total Assets':[171092,'USD million'],'Total Liabilities':[89800,'USD million'],"Stockholders' Equity":[81292,'USD million'],'Total Debt':[65136,'USD million'],'Accounts Receivable':[7145,'USD million'],'Inventory':[2270,'USD million'],'Shares Outstanding':[4741,'million shares'],'Stock Buybacks':[2450,'USD million'],'Dividends':[11142,'USD million'],'Stock-based Compensation':[7568,'USD million'],'Debt Financing':[15666,'USD million'],'Equity Financing':[221,'USD million']
    }]
  ];
  for (const [period,reportDate,values] of annual) for (const [metric,[value,unit]] of Object.entries(values)) {
    const calculated = ['Gross Margin','Operating Margin','Net Profit Margin','Free Cash Flow','Total Debt'].includes(metric);
    const note = metric === 'Free Cash Flow' ? '计算口径：经营现金流减资本开支。' : metric === 'Total Debt' ? '计算值：资产负债表短期债务加长期债务。' : calculated ? '根据公司 GAAP 原始披露值计算。' : metric === 'Equity Financing' ? '员工股票计划发行现金流，不等于面向公众的大规模增发。' : '';
    add(metric,value,unit,period,'年度',reportDate,annualUrl,calculated?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  const q3 = {
    'Revenue':[29591,'USD million'],'Cost of Revenue':[9135,'USD million'],'Gross Profit':[20456,'USD million'],'Gross Margin':[69.1,'%'],'Operating Income':[15955,'USD million'],'Operating Margin':[53.9,'%'],'Net Income':[13088,'USD million'],'Net Profit Margin':[44.2,'%'],'EPS':[2.75,'USD/share'],'Diluted EPS':[2.68,'USD/share'],'R&D Expenses':[2895,'USD million'],'Operating Cash Flow':[14197,'USD million'],'Investing Cash Flow':[-1113,'USD million'],'Financing Cash Flow':[-8737,'USD million'],'Capital Expenditure':[532,'USD million'],'Free Cash Flow':[13665,'USD million'],'Cash and Cash Equivalents':[23975,'USD million'],'Total Assets':[188148,'USD million'],'Total Liabilities':[88458,'USD million'],"Stockholders' Equity":[99690,'USD million'],'Total Debt':[59419,'USD million'],'Accounts Receivable':[13707,'USD million'],'Inventory':[4523,'USD million'],'Shares Outstanding':[4774,'million shares'],'Stock Buybacks':[0,'USD million'],'Dividends':[3103,'USD million'],'Dividends Per Share':[0.65,'USD/share'],'Stock-based Compensation':[2019,'USD million'],'Debt Financing':[0,'USD million'],'Equity Financing':[0,'USD million']
  };
  for (const [metric,[value,unit]] of Object.entries(q3)) {
    const calculated = ['Gross Margin','Operating Margin','Net Profit Margin','Free Cash Flow','Total Debt'].includes(metric);
    const note = metric === 'Free Cash Flow' ? '计算口径：14,197 - 532 = 13,665（百万美元），与公司披露值一致。' : metric === 'Total Debt' ? '计算值：2,252 短期债务 + 57,167 长期债务 = 59,419（百万美元）。' : metric === 'Shares Outstanding' ? '10-Q 披露 2026-08-28 流通股 4,773,629,865 股，取约 47.74 亿股。' : metric === 'Debt Financing' ? '本季度没有新增长期借款；偿还债务 56.28 亿美元。' : calculated ? '根据公司 GAAP 原始披露值计算。' : '';
    add(metric,value,unit,'FY2026 Q3','季度','2026-09-02',metric === 'Shares Outstanding' ? quarter10qUrl : quarterUrl,calculated?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  add('Share Price',325.63,'USD/share','2026-11-04 close','季度','2026-11-05',priceUrl,'外部市场数据 / Market','USD','NASDAQ 收盘价快照；二级市场交易不会直接给公司带来现金。');
  add('Market Capitalization',1550000,'USD million','2026-11-04 close','季度','2026-11-05',marketUrl,'外部市场数据 / Market','USD','外部市场快照约 1.55 万亿美元；市值不是公司资产，也不是营业收入。');
  add('P/E',41.5,'x','TTM as of 2026-08-02','季度','2026-11-05',quarterUrl,'计算数据 / Calculated','N/A','计算：325.63 美元股价 ÷ 约 7.84 美元 TTM GAAP 稀释 EPS。');
  add('P/S',17.4,'x','TTM as of 2026-08-02','季度','2026-11-05',quarterUrl,'计算数据 / Calculated','N/A','计算：约 1.55 万亿美元市值 ÷ 891.04 亿美元 TTM 收入。');

  const journal = {
    id:'broadcom-research-2026-11-05', date:'2026-11-05', companyId:'broadcom', type:'首次研究', title:'Broadcom 首次研究：定制 AI XPU、以太网与 VMware 的现金机器',
    discovery:'1. FY2026 Q3 收入 295.91 亿美元，同比增长 86%；AI 半导体收入 167 亿美元，同比增长 221%，已占单季总收入约 56%。\n2. 半导体解决方案收入 208.39 亿美元，同比增长 127%；基础设施软件收入 87.52 亿美元，同比增长 29%，硬件增长与软件高毛利共同抬升利润率。\n3. GAAP 毛利率约 69.1%、营业利润率约 53.9%，分别高于 FY2025 的 67.8% 和 39.9%，规模效应非常明显。\n4. 单季净利润 130.88 亿美元、经营现金流 141.97 亿美元、自由现金流 136.65 亿美元，利润已经充分转化为现金；但应收账款和存货较 FY2025 年末分别增加约 92% 和 99%。\n5. Broadcom 与 NVIDIA 的竞争不是简单的 GPU 对 GPU：Broadcom 用定制 XPU、以太网网络和客户共同设计争夺超大规模 AI 负载，同时用 VMware 软件提供利润与现金流缓冲。',
    thoughts:'公司视角：定制计算、网络和私有云软件的组合战略有效，FY2026 Q3 经营杠杆很强；但客户、代工和交付集中度需要持续管理。\n经济学视角：定制 XPU 通过针对固定工作负载优化性能和功耗，降低大客户单位算力成本；Broadcom 依靠共同设计、IP 和交付能力获取价值，软件业务增强议价权。\n投资者视角：盈利和现金流质量很强，但约 41.5 倍 TTM GAAP P/E 已要求 AI 收入长期高速增长。债务仍高，客户集中会放大任何订单延迟。\n求职者视角：适合 ASIC、SerDes、以太网、光互连、云基础设施和虚拟化方向；能接近真实大规模系统，但需要适应强执行和效率导向文化。\n产业视角：Broadcom 是“定制 AI 芯片 + 以太网互连”路径的核心公司，是 NVIDIA 通用 GPU 平台之外最重要的替代与补充之一。\n\n个人思考：定制 ASIC 不一定完全替代 GPU。GPU 擅长快速变化和通用工作负载，ASIC 在稳定、规模巨大的负载上更经济；真正需要观察的是工作负载成熟度和客户规模。\n\n待研究问题：\n1. Q4 预计 217 亿美元 AI 半导体收入中，XPU 与网络各占多少？\n2. 约 594 亿美元债务的期限结构、利率和偿债节奏如何？\n3. 应收账款和存货翻倍是提前备货，还是客户验收与回款周期变长？\n4. VMware 订阅和许可模式能否维持高增长，同时降低客户流失风险？\n5. 下一家公司研究 Marvell Technology，比较其定制 ASIC、光互连和数据中心业务与 Broadcom 的规模及盈利差距。',
    sources:`${annualUrl}\n${quarterUrl}\n${quarter10qUrl}\n${priceUrl}\n${marketUrl}`, createdAt:stamp, updatedAt:stamp
  };

  const base = window.YHH_RESEARCH_SEED || {version:0,companies:[],financials:[],journals:[]};
  base.version = Math.max(Number(base.version)||0,5);
  base.companies = [...(base.companies||[]).filter(x=>x.id!=='broadcom'),company];
  base.financials = [...(base.financials||[]).filter(x=>x.companyId!=='broadcom'),...financials];
  base.journals = [...(base.journals||[]).filter(x=>x.id!==journal.id),journal];
  window.YHH_RESEARCH_SEED = base;
})();
