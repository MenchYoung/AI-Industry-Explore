(() => {
  const annualUrl='https://static.cninfo.com.cn/finalpage/2026-03-13/1225007336.PDF';
  const halfUrl='https://static.cninfo.com.cn/finalpage/2026-08-08/1225464969.PDF';
  const quarterUrl='https://static.cninfo.com.cn/finalpage/2026-10-24/1225620944.PDF';
  const priceUrl='https://stockanalysis.com/quote/sha/688256/';
  const stamp='2026-11-09T01:13:00.000Z';
  const company={
    id:'cambricon',name:'寒武纪',ticker:'688256.SH',country:'中国',industryId:'semiconductor',founded:'2016',listed:'上海证券交易所科创板',
    description:'中科寒武纪科技股份有限公司是中国无晶圆厂 AI 计算芯片与基础软件公司，设计云端、边缘端智能芯片、板卡和智能整机，并提供配套系统软件。它与 NVIDIA 一样把芯片、板卡和软件栈组合成计算平台，但规模、生态与全球供应链地位仍有明显差距。',
    products:'云端智能芯片与加速卡、智能整机、边缘智能芯片及板卡、终端智能处理器 IP，以及 BANG 编程语言、编译器、驱动、数学库、集群与模型适配软件。2025 年云端产品线收入 64.77 亿元，占总收入约 99.7%。',
    customers:'大模型算法公司、服务器厂商、互联网与金融机构、运营商、能源、教育及其他需要国产 AI 训练和推理算力的企业与公共部门。2025 年前五大客户收入占比 88.66%，客户集中度高。',
    revenueSources:'主要通过直销云端 AI 芯片、板卡和智能整机取得收入，少量来自边缘产品、IP 授权及软件。2025 年直销占比 99.13%，境内收入接近 100%；融资和政府补助不计入营业收入。',
    businessModel:'公司先投入高额研发形成处理器架构、芯片和基础软件，再把芯片、板卡或整机销售给客户。客户愿意购买，是因为需要可规模部署的国产训练/推理算力、软硬件适配和供应保障。盈利取决于产品性能与易用性、供应链成本、规模效应、存货管理和客户回款。',
    suppliers:'采用 Fabless（无晶圆厂）模式，上游包括晶圆代工、先进封装与测试、HBM/存储、基板、板卡制造、EDA 和 IP 供应商。2025 年第一大供应商占采购额 55.34%，供应集中；2026 Q3 预付款增至 30.44 亿元，显示战略备货和产能锁定。',
    downstream:'下游是服务器厂商、大模型企业、互联网、金融、运营商、能源、教育和智算中心。客户部署规模扩张带来芯片与板卡收入，但项目集中、验收和回款节奏会让季度现金流波动。',
    competitors:'全球主要面对 NVIDIA 与 AMD，中国市场还面对华为昇腾、海光信息、摩尔线程、沐曦、壁仞等；开放架构和云厂自研 ASIC 也是替代路径。竞争不只看芯片峰值算力，还看编译器、框架适配、集群稳定性和开发者生态。',
    partners:'服务器与整机厂、晶圆代工和封测厂、存储及板卡供应商、主流 AI 框架与开源模型社区、高校科研机构、运营商和行业解决方案伙伴。',
    technology:'核心技术包括智能处理器微架构与指令集、SoC 设计、7nm 等先进工艺物理设计、芯片验证、封装量产测试、BANG 编程语言、编译器、数学库、模型与集群软件。2025 年累计获授权专利 1,734 项。',
    moat:'护城河来自自主指令集与微架构、芯片和系统软件协同、国产 AI 算力规模部署经验、模型适配速度与高密度研发团队。弱点是开发者生态和供应链控制力显著小于 NVIDIA，客户与供应商又高度集中。',
    roadmap:'继续研发面向大模型训练、语言与多模态推理的新一代智能处理器微架构与指令集，并扩展集群软件、数学库和主流模型适配；以云端产品为主轴，强化国产智算中心的软硬件一体化能力。',
    strategy:'抓住中国 AI 算力需求和国产替代窗口，以云端芯片为主扩大规模部署，同时用基础软件提高易用性。2026 年大幅增加存货、预付款和应付票据以保障供应，但这把需求预测、减值和现金转换风险推到资产负债表。',
    risks:'2026 Q3 存货 116.65 亿元，占总资产 52.2%，前三季度计提资产减值 5.02 亿元；前五大客户与供应商高度集中；先进制程、封装和存储供应受外部限制；软件生态弱于 NVIDIA；市值约 5,049 亿元、TTM P/E 约 122 倍，估值对增长不及预期高度敏感。',
    lensOperations:'Q3 2026 单季收入 35.31 亿元，同比增长 104.47%；按累计报表差额计算，毛利率约 58.7%、营业利润率约 39.8%。前三季度收入 95.26 亿元、归母净利润 37.15 亿元，但自由现金流约 -5.60 亿元，库存和预付采购吸收大量现金。',
    lensEconomics:'寒武纪通过把研发形成的架构、芯片与软件平台转化为国产算力设备创造价值；价值在公司、代工封测、存储、服务器厂与行业客户之间分配。规模扩大能摊薄研发，但备货和供应保障要求会占用资本。',
    lensInvestor:'2025 年首次全年盈利，2026 前三季度继续高速增长；然而利润增长并未完全转成自由现金流，存货和应付票据激增。2026-11-06 TTM P/E 约 122 倍、P/S 约 44 倍，高估值要求收入、毛利和库存周转同时兑现。',
    lensCareer:'适合芯片架构、SoC、编译器、算子库、模型优化、分布式训练、集群软件、板卡与供应链工程人才。能直接参与国产 AI 计算平台商业化，但交付节奏、供应链约束和大客户项目压力较高。',
    lensIndustry:'寒武纪是中国 AI 加速芯片和软件平台的重要上市公司，是观察国产替代商业化、先进供应链约束和软件生态建设的关键样本。它与 NVIDIA 在云端训练/推理和系统软件层面直接竞争。',
    segments:{period:'FY2025',currency:'CNY',unit:'CNY million',sourceUrl:annualUrl,items:[{name:'云端产品线',en:'Cloud products',value:6476.855},{name:'边缘产品线',en:'Edge products',value:3.394},{name:'IP 授权及软件',en:'IP licensing and software',value:2.289},{name:'其他',en:'Other',value:14.658}],history:[{period:'FY2023',items:[{name:'总收入',value:709.387}]},{period:'FY2024',items:[{name:'总收入',value:1174.464}]},{period:'FY2025',items:[{name:'总收入',value:6497.196}]}]},createdAt:stamp,updatedAt:stamp
  };
  const financials=[];
  const add=(metric,value,unit,period,frequency,reportDate,sourceUrl,dataType='原始数据 / Reported',currency='CNY',notes='')=>financials.push({id:`cambricon-${metric.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${period.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,companyId:'cambricon',metric,value,unit,currency,frequency,period,reportDate,sourceUrl,dataType,notes,createdAt:stamp,updatedAt:stamp});
  const annual=[
    ['FY2023','2024-04-29',{'Revenue':[709.387,'CNY million'],'Net Income':[-848.440,'CNY million'],'Net Profit Margin':[-119.6,'%'],'EPS':[-2.07,'CNY/share'],'Diluted EPS':[-2.07,'CNY/share'],'Operating Cash Flow':[-595.535,'CNY million']}],
    ['FY2024','2025-04-18',{'Revenue':[1174.464,'CNY million'],'Cost of Revenue':[508.410,'CNY million'],'Gross Profit':[666.055,'CNY million'],'Gross Margin':[56.7,'%'],'Operating Income':[-455.745,'CNY million'],'Operating Margin':[-38.8,'%'],'Net Income':[-452.339,'CNY million'],'Net Profit Margin':[-38.5,'%'],'EPS':[-1.09,'CNY/share'],'Diluted EPS':[-1.09,'CNY/share'],'R&D Expenses':[1215.874,'CNY million'],'Operating Cash Flow':[-1617.960,'CNY million'],'Investing Cash Flow':[-411.652,'CNY million'],'Financing Cash Flow':[47.891,'CNY million'],'Capital Expenditure':[366.049,'CNY million'],'Free Cash Flow':[-1984.010,'CNY million']}],
    ['FY2025','2026-03-13',{'Revenue':[6497.196,'CNY million'],'Cost of Revenue':[2913.883,'CNY million'],'Gross Profit':[3583.313,'CNY million'],'Gross Margin':[55.2,'%'],'Operating Income':[2061.390,'CNY million'],'Operating Margin':[31.7,'%'],'Net Income':[2059.229,'CNY million'],'Net Profit Margin':[31.7,'%'],'EPS':[4.93,'CNY/share'],'Diluted EPS':[4.88,'CNY/share'],'R&D Expenses':[1350.805,'CNY million'],'Operating Cash Flow':[-498.398,'CNY million'],'Investing Cash Flow':[-4530.306,'CNY million'],'Financing Cash Flow':[3985.964,'CNY million'],'Capital Expenditure':[568.698,'CNY million'],'Free Cash Flow':[-1067.096,'CNY million'],'Cash and Cash Equivalents':[1317.359,'CNY million'],'Total Assets':[13437.714,'CNY million'],'Total Liabilities':[1594.460,'CNY million'],"Stockholders' Equity":[11843.254,'CNY million'],'Total Debt':[0,'CNY million'],'Accounts Receivable':[670.643,'CNY million'],'Inventory':[4943.533,'CNY million'],'Shares Outstanding':[421.685,'million shares'],'Stock-based Compensation':[238.726,'CNY million'],'Dividends':[632.473,'CNY million'],'Stock Buybacks':[20.062,'CNY million'],'Equity Financing':[3985.964,'CNY million']}]
  ];
  for(const [period,reportDate,values] of annual) for(const [metric,[value,unit]] of Object.entries(values)){
    const calc=['Gross Profit','Gross Margin','Operating Margin','Net Profit Margin','Total Liabilities','Free Cash Flow'].includes(metric); let note=calc?'根据年度报告披露值计算。':'';
    if(metric==='Capital Expenditure') note='口径：合并现金流量表购建固定资产、无形资产和其他长期资产支付的现金。';
    if(metric==='Free Cash Flow') note='计算：经营现金流减资本开支。';
    if(metric==='Dividends') note='2025 年利润分配方案现金红利，2026 年实施；资本公积转增股本不是现金分红。';
    if(metric==='Equity Financing') note='主要来自 2025 年向特定对象发行股票；融资不是营业收入。';
    if(metric==='Total Debt') note='年末无短期借款、长期借款或应付债券；不含租赁负债。';
    add(metric,value,unit,period,'年度',reportDate,annualUrl,calc?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'CNY',note);
  }
  const q3={'Revenue':[3530.828,'CNY million'],'Cost of Revenue':[1458.429,'CNY million'],'Gross Profit':[2072.400,'CNY million'],'Gross Margin':[58.7,'%'],'Operating Income':[1406.885,'CNY million'],'Operating Margin':[39.8,'%'],'Net Income':[1403.611,'CNY million'],'Net Profit Margin':[39.8,'%'],'EPS':[2.23,'CNY/share'],'Diluted EPS':[2.21,'CNY/share'],'R&D Expenses':[522.586,'CNY million'],'Cash and Cash Equivalents':[555.383,'CNY million'],'Total Assets':[22364.229,'CNY million'],'Total Liabilities':[7236.498,'CNY million'],"Stockholders' Equity":[15127.731,'CNY million'],'Total Debt':[0,'CNY million'],'Accounts Receivable':[938.188,'CNY million'],'Inventory':[11664.659,'CNY million'],'Shares Outstanding':[628.854,'million shares']};
  for(const [metric,[value,unit]] of Object.entries(q3)){
    const derived=['Cost of Revenue','Gross Profit','Gross Margin','Operating Income','Operating Margin','Net Profit Margin'].includes(metric); let note=derived?'计算：2026 年前三季度累计值减 2026 年上半年累计值；利润率再除以 Q3 单季收入。':'';
    if(metric==='Total Debt') note='期末无短期借款、长期借款或应付债券；不含租赁负债。';
    add(metric,value,unit,'Q3 2026','季度','2026-10-24',quarterUrl,derived?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'CNY',note);
  }
  const ytd={'Revenue':[9526.402,'CNY million'],'Operating Cash Flow':[227.637,'CNY million'],'Investing Cash Flow':[61.398,'CNY million'],'Financing Cash Flow':[-662.756,'CNY million'],'Capital Expenditure':[788.131,'CNY million'],'Free Cash Flow':[-560.495,'CNY million'],'R&D Expenses':[1225.053,'CNY million'],'Dividends':[632.473,'CNY million'],'Equity Financing':[29.523,'CNY million'],'Debt Financing':[0,'CNY million']};
  for(const [metric,[value,unit]] of Object.entries(ytd)){
    const calc=metric==='Free Cash Flow'; let note='';
    if(metric==='Capital Expenditure') note='口径：前三季度购建固定资产、无形资产和其他长期资产支付的现金。';
    if(metric==='Free Cash Flow') note='计算：经营现金流 227.637 - 资本开支 788.131 = -560.495 百万元。';
    if(metric==='Equity Financing') note='前三季度吸收投资收到的现金；属于一级市场融资，不是收入。';
    if(metric==='Debt Financing') note='取得借款与偿还债务金额相同，净债务融资为 0。';
    add(metric,value,unit,'YTD Q3 2026','累计季度','2026-10-24',quarterUrl,calc?'计算数据 / Calculated':'原始数据 / Reported','CNY',note);
  }
  add('Share Price',802.90,'CNY/share','2026-11-06 close','市场快照','2026-11-09',priceUrl,'外部市场数据 / Market','CNY','上交所收盘价；二级市场交易不会直接给公司带来现金。');
  add('Market Capitalization',504907,'CNY million','2026-11-06 close','市场快照','2026-11-09',priceUrl,'外部市场数据 / Market','CNY','市值约 5049.07 亿元；市值不是公司资产。');
  add('P/E',122.1,'x','TTM / 2026-11-06','市场快照','2026-11-09',priceUrl,'外部市场数据 / Market','N/A','基于 TTM 盈利；高倍数代表市场计入强增长预期。');
  add('P/S',44.2,'x','TTM / 2026-11-06','市场快照','2026-11-09',priceUrl,'计算数据 / Calculated','N/A','5049.07 亿元市值 ÷ 约 114.2 亿元 TTM 收入。');
  const journal={id:'cambricon-research-2026-11-09',date:'2026-11-09',companyId:'cambricon',type:'首次研究',title:'寒武纪首次研究：高速盈利增长与巨额备货之间的现金流考验',
    discovery:'1. Q3 2026 单季收入 35.31 亿元，同比增长 104.47%；按累计报表差额计算，单季毛利率约 58.7%、营业利润率约 39.8%。\n2. 2025 年收入 64.97 亿元、同比增长 453.21%，首次实现全年盈利；2026 前三季度收入已达 95.26 亿元、归母净利润 37.15 亿元。\n3. 利润没有完全转成现金：前三季度经营现金流 2.28 亿元，扣除 7.88 亿元资本开支后，自由现金流约 -5.60 亿元。\n4. 存货从 2025 年末 49.44 亿元增至 Q3 的 116.65 亿元，占总资产约 52.2%；预付款 30.44 亿元，应付票据 49.66 亿元，说明公司正在大规模锁定供应和备货。\n5. 2026 前三季度资产减值损失 5.02 亿元，存货扩张同时放大跌价风险。寒武纪的下一阶段不能只看收入，还要看库存周转、现金回款和供应链承诺。',
    thoughts:'公司视角：在国产算力需求强劲时提前备货有战略合理性，可以保障交付；但存货和预付款增长远快于收入，必须提高需求预测、库存周转和质量控制。\n经济学视角：寒武纪用研发形成芯片与软件平台，再通过代工、封装和服务器伙伴把设计转化为算力设备。规模扩大能摊薄研发，但也把大量价值和现金分配给上游制造与存储供应商。\n投资者视角：盈利增长非常快，但约 122 倍 TTM P/E、44 倍 P/S 已包含高预期。自由现金流为负、存货占比过半和客户集中意味着利润质量要通过未来回款和去库存验证。\n求职者视角：适合想进入 AI 芯片架构、编译器、模型优化、集群软件和国产供应链的人；业务高速增长提供实践机会，也意味着交付和性能压力较高。\n产业视角：寒武纪是中国 AI 加速芯片商业化的重要样本，直接受益于国产替代，同时受制于先进制造、存储和软件生态。\n\n个人思考：寒武纪已经从“研发投入能否带来收入”进入“高速收入能否转化为现金”的阶段。利润表显示规模效应，资产负债表则提示库存和供应链风险，两者必须一起看。\n\n结论速览：\n- 公司靠什么赚钱：销售云端 AI 芯片、板卡、智能整机及配套软件，云端产品贡献绝大多数收入。\n- 近年财务变化：2023-2025 收入从 7.09 亿增至 64.97 亿元，2025 首次盈利；2026 前三季度收入 95.26 亿元、净利 37.15 亿元，但自由现金流为负。\n- 三个关键指标：Q3 单季毛利率约 58.7%；Q3 末存货 116.65 亿元；YTD 自由现金流约 -5.60 亿元。\n- 三个风险：存货跌价与供应承诺；客户和供应商集中；高估值及软件生态/先进供应限制。\n- 最关键变量：巨额备货能否在未来 12 个月转化为客户交付、回款和正自由现金流。\n- 投资者启示：不要只看净利润增速，应持续比较库存周转、经营现金流、减值和完全摊薄后的每股现金流。\n- 求职者启示：技术与商业化机会稀缺，选择团队时应关注产品量产、软件适配和客户交付能力。\n\n待研究问题：\n1. 116.65 亿元存货中原材料、在产品和库存商品分别占多少，库龄如何？\n2. 预付采购和应付票据对应哪些供应环节，是否存在不可取消采购承诺？\n3. 前五大客户收入占比能否下降，应收账款和回款周期如何变化？\n4. 研发费用率下降是规模效应还是投入节奏变化？\n5. 下一家公司研究海光信息，比较 CPU/DCU 模式与寒武纪纯 AI 加速平台的财务结构。',
    sources:`${annualUrl}\n${halfUrl}\n${quarterUrl}\n${priceUrl}`,createdAt:stamp,updatedAt:stamp};
  const base=window.YHH_RESEARCH_SEED||{version:0,companies:[],financials:[],journals:[]}; base.version=Math.max(Number(base.version)||0,9); base.companies=[...(base.companies||[]).filter(x=>x.id!=='cambricon'),company]; base.financials=[...(base.financials||[]).filter(x=>x.companyId!=='cambricon'),...financials]; base.journals=[...(base.journals||[]).filter(x=>x.id!==journal.id),journal]; window.YHH_RESEARCH_SEED=base;
})();
