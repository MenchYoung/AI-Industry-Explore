(() => {
  const annualUrl = 'https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm';
  const quarterUrl = 'https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm';
  const quarterPdf = 'https://investor.nvidia.com/files/doc_financials/2027/NVDA-2027-Q2-10Q-Final-including-exhibits.pdf';
  const marketUrl = 'https://pro.stockalarm.io/quote/NVDA/metric/marketCap';
  const priceUrl = 'https://www.investing.com/equities/nvidia-corp';
  const stamp = '2026-11-02T15:50:00.000Z';

  const company = {
    id: 'nvidia',
    name: 'NVIDIA',
    ticker: 'NVDA',
    country: '美国',
    industryId: 'semiconductor',
    founded: '1993',
    listed: 'NASDAQ 上市',
    description: 'NVIDIA Corporation（英伟达）是一家美国无晶圆厂半导体与 AI 基础设施公司。公司从游戏图形处理器起步，现已发展为覆盖 GPU、CPU、DPU、高速网络、机架级系统和 AI 软件的全栈计算平台。FY2026 数据中心收入为 1,937.37 亿美元，占总收入约 89.7%。',
    products: '数据中心 GPU 与加速器；Grace CPU；BlueField DPU；NVLink、InfiniBand 与以太网网络；DGX、GB200/GB300 等机架级系统；CUDA、CUDA-X、NVIDIA AI Enterprise、行业模型与开发工具；GeForce/RTX 游戏与专业可视化产品；DRIVE 与 Jetson 物理 AI 平台。',
    customers: '大型云服务商、AI 模型公司、Neocloud 数据中心、OEM/ODM、系统集成商、企业、政府与科研机构、汽车制造商和游戏玩家。FY2026 两名直接客户分别贡献总收入的 22% 和 14%，客户集中度较高。',
    revenueSources: '主要来自硬件及系统销售，尤其是数据中心计算与网络平台；另有游戏、专业可视化、汽车、软件许可与支持服务收入。融资、借款和股票市值均不属于营业收入。',
    businessModel: '以 CUDA 软件生态吸引并锁定开发者，再销售从芯片到整机架的高性能计算平台。客户愿意付费，是因为软硬件协同可以缩短训练与推理时间、降低能耗和每个 AI token 的成本。公司采用无晶圆厂模式，将制造与封装交给供应商，因此资产相对较轻、毛利率高，但供应链依赖明显。',
    suppliers: '晶圆代工主要依赖台积电和三星；同时依赖先进封装、HBM 高带宽内存、基板、服务器、电源、液冷和网络零部件供应商。供应不足会限制收入，采购承诺过高则可能形成存货减值和现金占用。',
    downstream: '云服务商、AI 模型实验室、企业数据中心、公共部门、汽车与机器人公司，以及通过 OEM、ODM、分销商和系统集成商触达的最终用户。客户的电力、土地、融资和数据中心建设速度会影响 NVIDIA 的交付与收入确认。',
    competitors: 'AMD、Intel、Huawei，以及 Google、Amazon、Microsoft、Alibaba 等云厂商自研的 AI 加速器和 ASIC。最大客户同时可能成为替代者，是长期竞争风险。',
    partners: '主要云平台、服务器制造商、系统集成商、软件平台、模型开发者，以及医疗、金融、制造、汽车和机器人行业伙伴。合作扩大生态和销售渠道，但也增加对少数平台客户的依赖。',
    technology: 'CUDA 并行计算平台、GPU 架构、NVLink、InfiniBand/Ethernet 网络、GPU/CPU/DPU 协同设计、机架级液冷系统，以及针对训练、推理和物理 AI 的软件栈。',
    moat: '护城河不是单颗 GPU，而是 CUDA 开发者生态、芯片与网络协同、机架级部署经验、供应链规模和年度产品迭代的组合。竞争者不仅要做出芯片，还要让现有 AI 软件低成本迁移并稳定运行。',
    roadmap: 'Hopper → Blackwell → Blackwell Ultra → Vera Rubin。路线重点从单芯片性能转向整套 AI 工厂效率，并降低每个推理 token 的成本。快速迭代创造升级需求，也可能引发旧产品库存、良率和供应转换风险。',
    strategy: '由芯片供应商扩展为数据中心规模的 AI 基础设施平台，并进入企业智能体、主权 AI、医疗生命科学、机器人与自动驾驶等物理 AI 市场。FY2027 继续扩大研发、计算基础设施、供应保障和生态投资。',
    risks: '大型客户集中及客户自研芯片；美国出口管制与中国市场受限；台积电、先进封装和 HBM 供应依赖；年度产品转换造成良率、库存和采购承诺风险；AI 数据中心的电力、融资及回报不及预期；高估值要求长期维持高增长。',
    lensOperations: '全栈 AI 工厂与年度迭代战略有效，收入和营业利润高速增长。但系统复杂度、客户融资支持、供应承诺及投资组合快速扩大，需要更严格的营运资金和风险管理。',
    lensEconomics: 'NVIDIA 通过降低计算时间、能耗和每个 token 成本创造价值，并凭借生态锁定与供给稀缺性取得产业链中很高的利润份额。价值最终仍取决于客户能否用 AI 获得收入或节省成本。',
    lensInvestor: '长期盈利能力和现金创造能力很强，但约 4.93 万亿美元市值已包含多年高增长预期。当前 GAAP 利润受到股票投资收益抬高，估值判断应使用正常化经营利润和现金流，不应只看一个 P/E。',
    lensCareer: '适合投入 3 至 5 年，尤其适合 CUDA、系统软件、高速网络、芯片系统、医疗 AI、机器人与数据中心基础设施方向。技术密度、跨学科协作和工作节奏都较高。',
    lensIndustry: '处于全球 AI 算力平台核心位置，其需求会向晶圆、HBM、先进封装、光网络、液冷、电力和数据中心建设传导。它既是产业增长受益者，也是资本开支周期的重要放大器。',
    createdAt: stamp,
    updatedAt: stamp,
  };

  const financials = [];
  const add = (metric, value, unit, period, frequency, reportDate, sourceUrl, dataType = '原始数据 / Reported', currency = 'USD', notes = '') => {
    financials.push({
      id: `nvda-${metric.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${period.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      companyId: 'nvidia', metric, value, unit, currency, frequency, period,
      reportDate, sourceUrl, dataType, notes, createdAt: stamp, updatedAt: stamp,
    });
  };

  const annual = [
    ['FY2024', '2024-02-21', {
      'Revenue': [60922, 'USD million'], 'Cost of Revenue': [16621, 'USD million'], 'Gross Profit': [44301, 'USD million'],
      'Gross Margin': [72.7, '%'], 'Operating Income': [32972, 'USD million'], 'Operating Margin': [54.1, '%'],
      'Net Income': [29760, 'USD million'], 'Net Profit Margin': [48.8, '%'], 'EPS': [1.21, 'USD/share'],
      'Diluted EPS': [1.19, 'USD/share'], 'R&D Expenses': [8675, 'USD million'],
      'Operating Cash Flow': [28090, 'USD million'], 'Investing Cash Flow': [-10566, 'USD million'],
      'Financing Cash Flow': [-13633, 'USD million'], 'Capital Expenditure': [1069, 'USD million'],
      'Free Cash Flow': [26947, 'USD million'], 'Cash and Cash Equivalents': [7280, 'USD million'],
      'Total Assets': [65728, 'USD million'], 'Total Liabilities': [22750, 'USD million'],
      "Stockholders' Equity": [42978, 'USD million'], 'Total Debt': [8459, 'USD million'],
      'Accounts Receivable': [9999, 'USD million'], 'Inventory': [5282, 'USD million'],
    }],
    ['FY2025', '2025-02-26', {
      'Revenue': [130497, 'USD million'], 'Cost of Revenue': [32639, 'USD million'], 'Gross Profit': [97858, 'USD million'],
      'Gross Margin': [75.0, '%'], 'Operating Income': [81453, 'USD million'], 'Operating Margin': [62.4, '%'],
      'Net Income': [72880, 'USD million'], 'Net Profit Margin': [55.8, '%'], 'EPS': [2.97, 'USD/share'],
      'Diluted EPS': [2.94, 'USD/share'], 'R&D Expenses': [12914, 'USD million'],
      'Operating Cash Flow': [64089, 'USD million'], 'Investing Cash Flow': [-20421, 'USD million'],
      'Financing Cash Flow': [-42359, 'USD million'], 'Capital Expenditure': [3236, 'USD million'],
      'Free Cash Flow': [60724, 'USD million'], 'Cash and Cash Equivalents': [8589, 'USD million'],
      'Total Assets': [111601, 'USD million'], 'Total Liabilities': [32274, 'USD million'],
      "Stockholders' Equity": [79327, 'USD million'], 'Total Debt': [8463, 'USD million'],
      'Accounts Receivable': [23065, 'USD million'], 'Inventory': [10080, 'USD million'],
    }],
    ['FY2026', '2026-02-25', {
      'Revenue': [215938, 'USD million'], 'Cost of Revenue': [62475, 'USD million'], 'Gross Profit': [153463, 'USD million'],
      'Gross Margin': [71.1, '%'], 'Operating Income': [130387, 'USD million'], 'Operating Margin': [60.4, '%'],
      'Net Income': [120067, 'USD million'], 'Net Profit Margin': [55.6, '%'], 'EPS': [4.93, 'USD/share'],
      'Diluted EPS': [4.90, 'USD/share'], 'R&D Expenses': [18497, 'USD million'],
      'Operating Cash Flow': [102718, 'USD million'], 'Investing Cash Flow': [-52228, 'USD million'],
      'Financing Cash Flow': [-48474, 'USD million'], 'Capital Expenditure': [6042, 'USD million'],
      'Free Cash Flow': [96575, 'USD million'], 'Cash and Cash Equivalents': [10605, 'USD million'],
      'Total Assets': [206803, 'USD million'], 'Total Liabilities': [49510, 'USD million'],
      "Stockholders' Equity": [157293, 'USD million'], 'Total Debt': [8468, 'USD million'],
      'Accounts Receivable': [38466, 'USD million'], 'Inventory': [21403, 'USD million'],
      'Stock Buybacks': [40086, 'USD million'], 'Dividends': [974, 'USD million'],
      'Stock-based Compensation': [6386, 'USD million'],
    }],
  ];

  for (const [period, reportDate, values] of annual) {
    for (const [metric, [value, unit]] of Object.entries(values)) {
      const calculated = ['Gross Margin', 'Operating Margin', 'Net Profit Margin', 'Free Cash Flow'].includes(metric);
      const note = metric === 'Free Cash Flow'
        ? '计算口径：经营现金流减购买固定资产及无形资产，再减相关本金付款。'
        : calculated ? '根据公司原始披露值计算。' : '';
      add(metric, value, unit, period, '年度', reportDate, annualUrl, calculated ? '计算数据 / Calculated' : '原始数据 / Reported', unit === '%' ? 'N/A' : 'USD', note);
    }
  }

  const q2Values = {
    'Revenue': [96221, 'USD million'], 'Cost of Revenue': [24079, 'USD million'], 'Gross Profit': [72142, 'USD million'],
    'Gross Margin': [75.0, '%'], 'Operating Income': [63734, 'USD million'], 'Operating Margin': [66.2, '%'],
    'Net Income': [59688, 'USD million'], 'Net Profit Margin': [62.0, '%'], 'EPS': [2.47, 'USD/share'],
    'Diluted EPS': [2.46, 'USD/share'], 'R&D Expenses': [7054, 'USD million'],
    'Operating Cash Flow': [24077, 'USD million'], 'Investing Cash Flow': [-8695, 'USD million'],
    'Financing Cash Flow': [-6176, 'USD million'], 'Capital Expenditure': [2677, 'USD million'],
    'Free Cash Flow': [21341, 'USD million'], 'Cash and Cash Equivalents': [22443, 'USD million'],
    'Total Assets': [320272, 'USD million'], 'Total Liabilities': [91288, 'USD million'],
    "Stockholders' Equity": [228984, 'USD million'], 'Total Debt': [33366, 'USD million'],
    'Accounts Receivable': [63059, 'USD million'], 'Inventory': [31575, 'USD million'],
    'Stock Buybacks': [19732, 'USD million'], 'Dividends': [6047, 'USD million'],
    'Dividends Per Share': [0.25, 'USD/share'], 'Stock-based Compensation': [2027, 'USD million'],
    'Debt Financing': [24896, 'USD million'],
  };
  for (const [metric, [value, unit]] of Object.entries(q2Values)) {
    const calculated = ['Operating Margin', 'Net Profit Margin', 'Free Cash Flow'].includes(metric);
    const note = metric === 'Free Cash Flow'
      ? '计算口径：24,077 - 2,677 - 59 = 21,341（百万美元）。'
      : calculated ? '根据公司原始披露值计算。' : '';
    add(metric, value, unit, 'FY2027 Q2', '季度', '2026-08-26', quarterUrl, calculated ? '计算数据 / Calculated' : '原始数据 / Reported', unit === '%' ? 'N/A' : 'USD', note);
  }

  add('Shares Outstanding', 24100, 'million shares', '2026-08-21', '季度', '2026-08-27', quarterPdf, '原始数据 / Reported', 'N/A', '10-Q 封面披露约 241 亿股。');
  add('Market Capitalization', 4930000, 'USD million', '2026-11-02', '季度', '2026-11-02', marketUrl, '外部市场数据 / Market', 'USD', '二级市场市值，不是公司资产，也不是融资收入。');
  add('Share Price', 204.64, 'USD/share', '2026-11-02', '季度', '2026-11-02', priceUrl, '外部市场数据 / Market', 'USD', '2026-11-02 市场价格快照。');
  add('P/E', 25.6, 'x', 'TTM as of 2026-11-02', '季度', '2026-11-02', marketUrl, '计算数据 / Calculated', 'N/A', '约数：市值除以最近四季 GAAP 净利润。投资收益抬高净利润，正常化经营口径的估值会更高。');
  add('Equity Financing', 0, 'USD million', 'FY2027 H1', '季度', '2026-08-26', quarterUrl, '原始数据 / Reported', 'USD', '没有重大公开增发；员工股票计划与并购发行不等同于面向公众的一级市场股权融资。');

  const journal = {
    id: 'nvidia-research-2026-11-02',
    date: '2026-11-02',
    companyId: 'nvidia',
    type: '财报阅读',
    title: 'NVIDIA 持续研究：FY2027 Q2 与利润现金转化',
    discovery: '1. FY2027 Q2 收入 962.21 亿美元，同比增长 106%，数据中心仍是绝对核心。\n2. Q2 毛利率恢复至 75.0%，FY2026 H20 费用和 Blackwell 系统转型压力阶段性缓解。\n3. FY2027 上半年净利润 1,180.10 亿美元，但经营现金流只有 744.21 亿美元；股票投资收益、应收账款和存货解释了主要差额。\n4. 半年内总债务由 84.68 亿增至 333.66 亿美元，同时公司大规模回购、派息及投资，资本配置明显变复杂。\n5. 客户集中、自研芯片与出口管制是最可能改变高速增长路径的三类风险。',
    thoughts: '公司视角：全栈 AI 工厂战略合理，但供应承诺和营运资金管理的重要性上升。\n经济学视角：公司通过降低计算时间、能耗和每个 token 成本创造价值，并凭借生态取得较高利润份额。\n投资者视角：盈利能力很强，但约 4.93 万亿美元市值要求未来多年持续高增长；GAAP 利润还受到投资收益影响。\n求职者视角：适合投入 3 至 5 年，尤其是 CUDA、系统软件、网络、芯片系统、医疗 AI 与机器人方向。\n产业视角：处于 AI 算力平台核心，并向晶圆、HBM、封装、网络、电力和数据中心建设传导需求。\n\n个人思考：最难的问题不是“AI 是否增长”，而是“增长能持续多久、正常化经营利润是多少”。不能把股票投资收益当作芯片业务利润，也不能忽视应收账款和存货对现金的占用。\n\n待研究问题：\n1. 下一季应收账款增速能否回落，经营现金流能否重新接近净利润？\n2. 333.66 亿美元债务的期限、利率与具体用途是什么？\n3. Vera Rubin 放量后，毛利率能否维持在 74%-75%？\n4. 云厂商自研 ASIC 会替代多少 GPU，又会带来多少网络需求？\n5. 下一家公司建议研究台积电，追踪 NVIDIA 需求如何转化为代工收入、资本开支和现金流。',
    sources: `${annualUrl}\n${quarterUrl}\n${quarterPdf}\n${marketUrl}\n${priceUrl}`,
    createdAt: stamp,
    updatedAt: stamp,
  };

  window.YHH_RESEARCH_SEED = { version: 3, companies: [company], financials, journals: [journal] };
})();
