(() => {
  const annualUrl = 'https://www.sec.gov/Archives/edgar/data/2488/000000248826000018/amd-20251227.htm';
  const quarterUrl = 'https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results';
  const marketUrl = 'https://ir.amd.com/stock-data/stock-data';
  const priceUrl = 'https://ir.amd.com/stock-data/price-history';
  const stamp = '2026-11-04T02:20:00.000Z';

  const company = {
    id: 'amd', name: 'AMD', ticker: 'AMD', country: '美国', industryId: 'semiconductor', founded: '1969', listed: 'NASDAQ Global Select Market 上市',
    description: 'Advanced Micro Devices, Inc.（超威半导体）是一家无晶圆厂的高性能与自适应计算公司。它设计 CPU、GPU、AI 加速器、DPU、FPGA、自适应 SoC、网络产品与系统软件，把制造交给外部晶圆厂和封装测试伙伴。FY2025 收入 346.39 亿美元；FY2026 Q3 数据中心收入 85.46 亿美元，占单季收入约 63.9%。',
    products: '数据中心 EPYC CPU、Instinct AI GPU、Pensando DPU 与 AI NIC；Ryzen PC CPU/APU、Radeon GPU；游戏主机半定制 SoC；Xilinx FPGA、Versal 自适应 SoC 与嵌入式处理器；ROCm 开放式 AI 软件栈；Helios 机架级 AI 系统设计。',
    customers: '云服务商、AI 模型公司、企业数据中心、服务器 OEM/ODM、PC 厂商、游戏主机厂商、工业与通信设备企业、汽车及嵌入式客户。FY2025 没有单一客户贡献至少 10% 收入，但应收账款仍可能集中于少数大客户。',
    revenueSources: '主要通过销售处理器、AI 加速器、GPU、FPGA、嵌入式芯片和半定制 SoC 获得收入，也包括设计开发服务及少量知识产权许可。融资、借款和股票市值不属于营业收入。',
    businessModel: 'AMD 负责架构、芯片与软件设计，使用台积电等外部晶圆厂制造，再通过直销、OEM、分销商和合作伙伴销售。客户愿意购买，是因为 EPYC、Ryzen 和 Instinct 在性能、能耗、总拥有成本及开放软件生态方面提供替代选择。无晶圆厂模式降低固定资产负担，但把先进制程、封装和产能风险转移到供应链。',
    suppliers: '先进 CPU 与 GPU 的 7nm 及以下晶圆主要依赖台积电；较成熟制程使用 GlobalFoundries，部分可编程逻辑还使用 UMC 和三星。封装测试依赖 Tongfu、SPIL、KYEC 等伙伴，并依赖 HBM、基板、先进封装、网络和系统制造供应链。',
    downstream: '大型云与 AI 客户、服务器和 PC 厂商、分销渠道、Microsoft/Sony 等游戏主机客户，以及工业、通信、汽车和嵌入式设备制造商。客户资本开支、AI 投资回报和 PC/游戏周期会直接影响订单。',
    competitors: '数据中心 AI 加速器主要面对 NVIDIA 及云厂商自研 ASIC；服务器与客户端 CPU 主要面对 Intel 和 Arm 生态；GPU 面对 NVIDIA；FPGA 与自适应计算面对 Altera、Lattice 和 Microchip。客户自研芯片也是替代风险。',
    partners: '台积电及封装测试伙伴；云服务商、OEM/ODM、系统集成商和软件框架社区；OpenAI 的多年 GPU 部署合作；Sanmina 作为复杂 AI 系统制造优选伙伴。',
    technology: 'Zen CPU 架构、CDNA/Instinct AI GPU、RDNA 图形架构、Infinity Fabric 与 chiplet 小芯片设计、Xilinx FPGA/Versal 自适应计算、Pensando DPU/AI NIC，以及 ROCm 开放式训练与推理软件栈。',
    moat: '核心壁垒来自高性能 CPU 与 GPU 的组合、chiplet 系统设计、Xilinx 和 Pensando 扩展出的自适应计算与网络能力、长期 OEM/云客户关系，以及逐步完善的 ROCm。相较 NVIDIA，AMD 的软件生态与机架级部署规模仍是主要追赶点。',
    roadmap: 'Instinct MI450 系列与 Helios 机架级平台推动公司从单芯片走向全栈 AI 系统；EPYC Venice 扩大服务器 CPU 份额；Ryzen AI 发展端侧 AI PC；ROCm 持续改善框架、模型和推理支持。',
    strategy: '以数据中心 AI 为增长中心，将 CPU、GPU、网络、软件和系统设计组合成完整平台；同时用客户端、游戏和嵌入式业务分散周期风险。收购 ZT Systems 设计团队和多家软件/光互连团队，目的是缩短大型 AI 集群部署时间。',
    risks: 'ROCm 生态和开发者迁移速度不及 CUDA；台积电先进制程及先进封装集中；AI GPU 库存与采购承诺快速上升；美国出口管制造成 MI308 库存费用和中国收入不确定；NVIDIA、Intel、Arm 与客户自研芯片竞争；当前高估值要求多年高速增长。',
    lensOperations: '从单芯片扩展到全栈 AI 平台方向合理，数据中心规模已带来明显经营杠杆。但 FY2026 Q3 应收账款和存货快速增加，显示增长需要更多营运资金，供应和客户交付管理变得更重要。',
    lensEconomics: 'AMD 通过提高每瓦性能、降低服务器总拥有成本并提供第二供应来源创造价值。开放生态降低客户被单一平台锁定的风险，但 AMD 必须把更多价值投入软件研发和生态建设，短期利润率低于 NVIDIA。',
    lensInvestor: '收入和利润增长显著加速，但以 2026-11-03 收盘价计算的 GAAP TTM P/E 约 101 倍、P/S 约 17 倍，估值已包含较强的 AI GPU 份额提升预期。现金流需与利润同步改善才更有说服力。',
    lensCareer: '适合投入 3 至 5 年，尤其适合 CPU/GPU 架构、编译器与 ROCm、分布式训练、网络、FPGA、chiplet、AI 系统工程及医疗和工业加速计算方向。',
    lensIndustry: 'AMD 是全球少数能同时提供高端 x86 CPU、AI GPU、DPU、FPGA 和开放软件栈的公司，为云客户提供 NVIDIA 之外的重要选择，并将需求传导到台积电、HBM、先进封装和服务器供应链。',
    createdAt: stamp, updatedAt: stamp,
  };

  const financials = [];
  const add = (metric, value, unit, period, frequency, reportDate, sourceUrl, dataType = '原始数据 / Reported', currency = 'USD', notes = '') => {
    financials.push({ id: `amd-${metric.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${period.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`, companyId: 'amd', metric, value, unit, currency, frequency, period, reportDate, sourceUrl, dataType, notes, createdAt: stamp, updatedAt: stamp });
  };

  const annual = [
    ['FY2023','2024-01-30',{
      'Revenue':[22680,'USD million'],'Cost of Revenue':[12220,'USD million'],'Gross Profit':[10460,'USD million'],'Gross Margin':[46.1,'%'],'Operating Income':[401,'USD million'],'Operating Margin':[1.8,'%'],'Net Income':[854,'USD million'],'Net Profit Margin':[3.8,'%'],'EPS':[0.53,'USD/share'],'Diluted EPS':[0.53,'USD/share'],'R&D Expenses':[5872,'USD million'],'Operating Cash Flow':[1667,'USD million'],'Investing Cash Flow':[-1423,'USD million'],'Financing Cash Flow':[-1146,'USD million'],'Capital Expenditure':[546,'USD million'],'Free Cash Flow':[1121,'USD million'],'Stock Buybacks':[985,'USD million'],'Stock-based Compensation':[1384,'USD million']
    }],
    ['FY2024','2025-02-05',{
      'Revenue':[25785,'USD million'],'Cost of Revenue':[13060,'USD million'],'Gross Profit':[12725,'USD million'],'Gross Margin':[49.3,'%'],'Operating Income':[1900,'USD million'],'Operating Margin':[7.4,'%'],'Net Income':[1641,'USD million'],'Net Profit Margin':[6.4,'%'],'EPS':[1.01,'USD/share'],'Diluted EPS':[1.00,'USD/share'],'R&D Expenses':[6456,'USD million'],'Operating Cash Flow':[3041,'USD million'],'Investing Cash Flow':[-1101,'USD million'],'Financing Cash Flow':[-2062,'USD million'],'Capital Expenditure':[636,'USD million'],'Free Cash Flow':[2405,'USD million'],'Cash and Cash Equivalents':[3787,'USD million'],'Total Assets':[69226,'USD million'],'Total Liabilities':[11658,'USD million'],"Stockholders' Equity":[57568,'USD million'],'Total Debt':[1721,'USD million'],'Accounts Receivable':[6192,'USD million'],'Inventory':[5734,'USD million'],'Stock Buybacks':[862,'USD million'],'Stock-based Compensation':[1407,'USD million']
    }],
    ['FY2025','2026-02-03',{
      'Revenue':[34639,'USD million'],'Cost of Revenue':[17487,'USD million'],'Gross Profit':[17152,'USD million'],'Gross Margin':[49.5,'%'],'Operating Income':[3694,'USD million'],'Operating Margin':[10.7,'%'],'Net Income':[4335,'USD million'],'Net Profit Margin':[12.5,'%'],'EPS':[2.67,'USD/share'],'Diluted EPS':[2.65,'USD/share'],'R&D Expenses':[8091,'USD million'],'Operating Cash Flow':[7709,'USD million'],'Investing Cash Flow':[-5533,'USD million'],'Financing Cash Flow':[-431,'USD million'],'Capital Expenditure':[1012,'USD million'],'Free Cash Flow':[6697,'USD million'],'Cash and Cash Equivalents':[5539,'USD million'],'Total Assets':[76926,'USD million'],'Total Liabilities':[13927,'USD million'],"Stockholders' Equity":[62999,'USD million'],'Total Debt':[3222,'USD million'],'Accounts Receivable':[6315,'USD million'],'Inventory':[7920,'USD million'],'Shares Outstanding':[1630,'million shares'],'Stock Buybacks':[1316,'USD million'],'Dividends':[0,'USD million'],'Stock-based Compensation':[1638,'USD million'],'Debt Financing':[2441,'USD million'],'Equity Financing':[285,'USD million']
    }]
  ];
  for (const [period,reportDate,values] of annual) for (const [metric,[value,unit]] of Object.entries(values)) {
    const calculated = ['Gross Margin','Operating Margin','Net Profit Margin','Free Cash Flow','Total Liabilities'].includes(metric);
    const note = metric === 'Free Cash Flow' ? '计算口径：经营现金流减资本开支；AMD 的非 GAAP 自由现金流也采用经营现金流减资本开支的核心口径。' : metric === 'Total Liabilities' ? '计算值：总资产减股东权益。' : calculated ? '根据公司原始披露值计算。' : metric === 'Equity Financing' ? '员工股权计划售股现金流，不是面向公众的大规模增发。' : '';
    add(metric,value,unit,period,'年度',reportDate,annualUrl,calculated?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  const q3 = {
    'Revenue':[13377,'USD million'],'Cost of Revenue':[6167,'USD million'],'Gross Profit':[7210,'USD million'],'Gross Margin':[54.0,'%'],'Operating Income':[2832,'USD million'],'Operating Margin':[21.2,'%'],'Net Income':[2428,'USD million'],'Net Profit Margin':[18.2,'%'],'EPS':[1.48,'USD/share'],'Diluted EPS':[1.46,'USD/share'],'R&D Expenses':[2803,'USD million'],'Operating Cash Flow':[1202,'USD million'],'Investing Cash Flow':[-1243,'USD million'],'Financing Cash Flow':[2348,'USD million'],'Capital Expenditure':[648,'USD million'],'Free Cash Flow':[554,'USD million'],'Cash and Cash Equivalents':[7404,'USD million'],'Total Assets':[94812,'USD million'],'Total Liabilities':[26423,'USD million'],"Stockholders' Equity":[68389,'USD million'],'Total Debt':[7079,'USD million'],'Accounts Receivable':[9209,'USD million'],'Inventory':[11463,'USD million'],'Shares Outstanding':[1630,'million shares'],'Stock Buybacks':[0,'USD million'],'Dividends':[0,'USD million'],'Stock-based Compensation':[523,'USD million'],'Debt Financing':[4726,'USD million'],'Equity Financing':[5,'USD million']
  };
  for (const [metric,[value,unit]] of Object.entries(q3)) {
    const calculated = ['Operating Margin','Net Profit Margin','Free Cash Flow','Total Liabilities'].includes(metric);
    const note = metric === 'Free Cash Flow' ? '计算口径：1,202 - 648 = 554（百万美元），与公司披露的非 GAAP 自由现金流一致。' : metric === 'Total Liabilities' ? '计算值：94,812 - 68,389 = 26,423（百万美元）。' : metric === 'Shares Outstanding' ? '采用 AMD 投资者关系页面披露的约 16.3 亿股快照。' : metric === 'Equity Financing' ? '员工股权计划售股现金流；不是面向公众的大规模一级市场融资。' : calculated ? '根据公司原始披露值计算。' : '';
    add(metric,value,unit,'FY2026 Q3','季度','2026-11-03',quarterUrl,calculated?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  add('Share Price',466.84,'USD/share','2026-11-03 close','季度','2026-11-03',priceUrl,'外部市场数据 / Market','USD','NASDAQ 收盘价快照；二级市场交易不会直接给公司带来现金。');
  add('Market Capitalization',789950,'USD million','2026-11-03 close','季度','2026-11-03',marketUrl,'外部市场数据 / Market','USD','外部市场快照；市值不是公司资产，也不是融资收入。');
  add('P/E',101.3,'x','TTM as of 2026-11-03','季度','2026-11-04',quarterUrl,'计算数据 / Calculated','N/A','计算：466.84 美元股价 ÷ 约 4.61 美元 TTM GAAP 稀释 EPS。');
  add('P/S',17.4,'x','TTM as of 2026-09-26','季度','2026-11-04',quarterUrl,'计算数据 / Calculated','N/A','计算：约 7,899.5 亿美元市值 ÷ 454.36 亿美元 TTM 收入。');

  const journal = {
    id:'amd-research-2026-11-04', date:'2026-11-04', companyId:'amd', type:'首次研究', title:'AMD 首次研究：FY2026 Q3 数据中心增长与现金流压力',
    discovery:'1. FY2026 Q3 收入 133.77 亿美元，同比增长 45%；数据中心收入 85.46 亿美元，同比增长 97%，成为绝对增长引擎。\n2. GAAP 营业利润率由上年同期 14% 提升至约 21%，收入增长开始明显转化为利润。\n3. 单季净利润 24.28 亿美元，但经营现金流仅 12.02 亿美元，主要因为应收账款增加 19.28 亿、存货增加 29.95 亿。\n4. 截至季度末存货 114.63 亿美元、应收账款 92.09 亿美元，分别较年初增加约 45% 和 46%，增长正在占用现金。\n5. AMD 已从 CPU/GPU 芯片供应商转向 CPU、GPU、网络、软件和机架系统组成的 AI 平台，但 ROCm 与 CUDA 的生态差距仍决定其长期份额。',
    thoughts:'公司视角：全栈化与 Helios 路线合理，数据中心规模带来经营杠杆；但营运资金和供应承诺必须更严格管理。\n经济学视角：AMD 通过性能功耗比、开放生态和第二供应来源为客户创造价值，同时以较低平台锁定换取市场份额。\n投资者视角：增长和利润率改善很强，但约 101 倍 TTM GAAP P/E 已定价较高预期，现金流转化是验证估值的关键。\n求职者视角：适合 CPU/GPU、ROCm、编译器、网络、FPGA、chiplet 和系统工程方向，技术跨度广。\n产业视角：AMD 是 NVIDIA 之外最完整的 AI 计算平台挑战者之一，对台积电、HBM、封装和服务器产业链具有重要拉动作用。\n\n个人思考：不能只看 97% 的数据中心收入增长。应同时检查应收账款、存货和经营现金流，判断增长是否真正变成现金。\n\n待研究问题：\n1. FY2026 Q4 170 亿美元收入指引能否兑现，毛利率能否维持？\n2. Helios 和 MI450 的收入中有多少来自 GPU、网络和系统级产品？\n3. ROCm 在训练和推理主流框架中的迁移成本还剩多少？\n4. 114.63 亿美元存货中，多少属于为 MI450 和 EPYC Venice 提前备货？\n5. 下一家公司研究 Broadcom，比较定制 AI ASIC 与通用 GPU 的经济性。',
    sources:`${annualUrl}\n${quarterUrl}\n${marketUrl}\n${priceUrl}`, createdAt:stamp, updatedAt:stamp
  };

  const base = window.YHH_RESEARCH_SEED || {version:0,companies:[],financials:[],journals:[]};
  base.version = Math.max(Number(base.version)||0,4);
  base.companies = [...(base.companies||[]).filter(x=>x.id!=='amd'),company];
  base.financials = [...(base.financials||[]).filter(x=>x.companyId!=='amd'),...financials];
  base.journals = [...(base.journals||[]).filter(x=>x.id!==journal.id),journal];
  window.YHH_RESEARCH_SEED = base;
})();
