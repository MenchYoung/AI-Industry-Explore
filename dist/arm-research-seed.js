(() => {
  const annualUrl = 'https://www.sec.gov/Archives/edgar/data/1973239/000197323926000097/arm-20260331.htm';
  const quarterUrl = 'https://investors.arm.com/static-files/0b5baa2e-fc47-4d05-b724-e49de7bd4356';
  const resultsUrl = 'https://investors.arm.com/financials/quarterly-annual-results';
  const priceUrl = 'https://finance.yahoo.com/quote/ARM/';
  const stamp = '2026-11-08T01:03:00.000Z';

  const company = {
    id:'arm', name:'安谋控股', ticker:'ARM', country:'英国', industryId:'semiconductor', founded:'1990', listed:'NASDAQ Global Select Market（ADS）',
    description:'Arm Holdings plc 是一家以处理器架构和芯片设计知识产权（IP）为核心的计算平台公司。它通常不自建晶圆厂，而是把 CPU、GPU、系统 IP、计算子系统和开发工具授权给芯片设计公司，再从客户出货的芯片中收取版税。2026 年公司进一步进入 Arm AGI CPU 成品芯片，商业模式开始从“纯 IP”向“IP + 生产芯片”扩展。',
    products:'Armv9 架构、Cortex CPU、Neoverse 数据中心 CPU、Mali/Immortalis GPU、Ethos NPU、Total Design 与计算子系统（CSS）、开发工具和支持服务，以及正在推进的 Arm AGI CPU。',
    customers:'智能手机和消费电子芯片设计商、汽车与物联网芯片公司、云服务商和超大规模数据中心、自研芯片企业、设备厂商。客户包括 Arm China 体系和 SoftBank 关联方；Q2 FY2027 关联方收入 4.24 亿美元，占收入约 29%。',
    revenueSources:'两条主线：一是许可及其他收入，客户为获得架构/IP/计算子系统的使用和设计权支付费用；二是版税收入，客户芯片出货后通常按每颗芯片或售价比例付费。Q2 FY2027 许可及其他收入 7.73 亿美元，版税 6.70 亿美元。融资不计入收入。',
    businessModel:'Arm 先投入大量研发形成可复用的计算 IP，再把同一套技术授权给多家芯片公司。客户愿意付费，因为采用成熟架构能缩短芯片开发周期、降低兼容性风险，并接入庞大的软件与开发者生态。高复用使 GAAP 毛利率长期约 97%，但研发和股票薪酬占比很高。',
    suppliers:'传统 IP 模式的关键上游是工程人才、EDA 工具、验证与软件生态；进入成品芯片后，还将依赖晶圆代工、先进封装、存储和基板供应商。Q2 资产负债表没有单列存货，说明截至报告期末仍以 IP 模式为主。',
    downstream:'下游覆盖芯片设计公司、智能手机和 PC 厂商、汽车与物联网设备商，以及 AWS、Google、Microsoft 等自研云芯片和服务器平台。数据中心版税在 Q2 FY2027 同比翻倍，显示 Arm 在云服务器中的经济价值提升。',
    competitors:'CPU 架构/IP 面对 x86（Intel、AMD）、RISC-V 和客户自研架构；数据中心面对 Intel、AMD 与 NVIDIA；移动端面对其他 IP 和客户自研；进入 AGI CPU 成品后还可能与现有 Arm 被许可方形成渠道冲突。',
    partners:'芯片设计客户、晶圆代工和封装伙伴、EDA 厂商、操作系统与编译器社区、云服务商、OEM，以及围绕 Arm Total Design/CSS 的生态伙伴。SoftBank 是控股股东，也是重要关联方。',
    technology:'核心技术是低功耗 CPU 架构、微架构与系统 IP，Armv9、Neoverse、CSS、GPU/NPU 和软件工具共同构成平台。壁垒来自长期兼容性、广泛芯片覆盖、超过 3,000 万开发者的软件生态、客户验证经验，以及版税随终端出货扩张的网络效应。',
    moat:'Arm 的护城河不是晶圆厂，而是“架构标准 + 可复用 IP + 软件生态”。一旦芯片和软件围绕 Arm 设计，迁移成本较高。不过 RISC-V 的开放生态、x86 在服务器中的既有优势，以及大客户自研能力都可能削弱定价权。',
    roadmap:'Armv9 和 CSS 提高每颗芯片的 IP 价值；Neoverse 扩张云与 AI 基础设施份额；Arm AGI CPU 已获得采购订单，首批商业交付计划在 FY2027 Q4。公司不再披露部分传统许可 KPI，反映业务正向生产芯片延伸。',
    strategy:'在移动和嵌入式版税基础上，提高 Armv9/CSS 渗透率，扩大数据中心、汽车和 PC；同时通过 AGI CPU 把价值捕获从架构/IP 延伸到成品芯片。增长潜力更大，但会提高资本投入、供应链风险并考验与被许可方的关系。',
    risks:'估值极高；SoftBank 控制和关联交易；Arm China 回款与治理；客户集中和版税报告依赖；RISC-V/x86/自研替代；Q2 单季 SBC 3.76 亿美元、接近 GAAP 营业利润的 1.9 倍；进入生产芯片可能增加库存、采购承诺和渠道冲突。',
    lensOperations:'Q2 FY2027 收入 14.43 亿美元，同比增长 27%，许可收入增长 50%、版税增长 8%。GAAP 营业利润 2.01 亿美元、利润率 13.9%，与上年 14.4% 接近；净利润却下降 45%，主要因上年含 1.31 亿美元业务处置收益，说明需区分经营表现与一次性项目。',
    lensEconomics:'Arm 把一次研发成果授权给众多客户，边际复制成本低，因此毛利率极高；价值由 Arm、芯片设计商、晶圆制造商和终端平台共同分配。版税把 Arm 的收入与客户出货量和芯片价值绑定，CSS/Armv9 的目标是提高每颗芯片的价值份额。',
    lensInvestor:'收入与数据中心渗透增长强劲，现金多于有息债务，但 2026-11-06 市值约 1,868 亿美元，TTM P/E 约 200.7 倍、P/S 约 34.2 倍。高估值要求版税、许可和 AGI CPU 同时兑现，任何增速或利润率不及预期都可能放大波动。',
    lensCareer:'适合 CPU/GPU/NPU 架构、编译器、性能优化、SoC、验证、数据中心平台和生态合作人才。能学习横跨移动、汽车、云和 AI 的平台思维；但公司向成品芯片扩张会带来组织与供应链执行压力。',
    lensIndustry:'Arm 是全球计算架构的重要基础设施。它不是 NVIDIA 的完全同类：NVIDIA销售芯片、系统和软件，Arm 主要销售计算 IP 与版税；但二者在数据中心 CPU、AI 系统控制点和软件生态上直接相遇。',
    segments:{period:'Q2 FY2027',currency:'USD',unit:'USD million',sourceUrl:quarterUrl,items:[{name:'许可及其他收入',en:'License and other revenue',value:773},{name:'版税收入',en:'Royalty revenue',value:670}],history:[{period:'FY2024',items:[{name:'总收入',value:3233}]},{period:'FY2025',items:[{name:'总收入',value:4007}]},{period:'FY2026',items:[{name:'总收入',value:4920}]}]},
    createdAt:stamp, updatedAt:stamp
  };

  const financials=[];
  const add=(metric,value,unit,period,frequency,reportDate,sourceUrl,dataType='原始数据 / Reported',currency='USD',notes='')=>financials.push({id:`arm-${metric.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${period.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,companyId:'arm',metric,value,unit,currency,frequency,period,reportDate,sourceUrl,dataType,notes,createdAt:stamp,updatedAt:stamp});

  const annual=[
    ['FY2024','2024-05-29',{'Revenue':[3233,'USD million'],'Cost of Revenue':[154,'USD million'],'Gross Profit':[3079,'USD million'],'Gross Margin':[95.2,'%'],'Operating Income':[111,'USD million'],'Operating Margin':[3.4,'%'],'Net Income':[306,'USD million'],'Net Profit Margin':[9.5,'%'],'EPS':[0.30,'USD/share'],'Diluted EPS':[0.29,'USD/share'],'R&D Expenses':[1979,'USD million'],'Operating Cash Flow':[1090,'USD million'],'Investing Cash Flow':[-516,'USD million'],'Financing Cash Flow':[-208,'USD million'],'Capital Expenditure':[92,'USD million'],'Free Cash Flow':[998,'USD million'],'Stock-based Compensation':[1037,'USD million']}],
    ['FY2025','2025-05-29',{'Revenue':[4007,'USD million'],'Cost of Revenue':[121,'USD million'],'Gross Profit':[3886,'USD million'],'Gross Margin':[97.0,'%'],'Operating Income':[831,'USD million'],'Operating Margin':[20.7,'%'],'Net Income':[792,'USD million'],'Net Profit Margin':[19.8,'%'],'EPS':[0.75,'USD/share'],'Diluted EPS':[0.75,'USD/share'],'R&D Expenses':[2071,'USD million'],'Operating Cash Flow':[397,'USD million'],'Investing Cash Flow':[-35,'USD million'],'Financing Cash Flow':[-202,'USD million'],'Capital Expenditure':[219,'USD million'],'Free Cash Flow':[178,'USD million'],'Stock-based Compensation':[820,'USD million']}],
    ['FY2026','2026-05-27',{'Revenue':[4920,'USD million'],'Cost of Revenue':[121,'USD million'],'Gross Profit':[4799,'USD million'],'Gross Margin':[97.5,'%'],'Operating Income':[900,'USD million'],'Operating Margin':[18.3,'%'],'Net Income':[904,'USD million'],'Net Profit Margin':[18.4,'%'],'EPS':[0.85,'USD/share'],'Diluted EPS':[0.85,'USD/share'],'R&D Expenses':[2776,'USD million'],'Operating Cash Flow':[1524,'USD million'],'Investing Cash Flow':[-325,'USD million'],'Financing Cash Flow':[-548,'USD million'],'Capital Expenditure':[545,'USD million'],'Free Cash Flow':[979,'USD million'],'Cash and Cash Equivalents':[2751,'USD million'],'Total Assets':[10703,'USD million'],'Total Liabilities':[2417,'USD million'],"Stockholders' Equity":[8286,'USD million'],'Total Debt':[0,'USD million'],'Accounts Receivable':[1300,'USD million'],'Shares Outstanding':[1064,'million shares'],'Stock-based Compensation':[1052,'USD million'],'Dividends':[0,'USD million']}]
  ];
  for(const [period,reportDate,values] of annual) for(const [metric,[value,unit]] of Object.entries(values)){
    const calc=['Gross Margin','Operating Margin','Net Profit Margin','Total Debt','Free Cash Flow'].includes(metric);
    let note=calc?'根据公司 GAAP 披露值计算。':'';
    if(metric==='Capital Expenditure') note='口径：现金流量表中购买物业及设备的现金支出。';
    if(metric==='Free Cash Flow') note=`计算：经营现金流减购买物业及设备；${period} 未进一步扣除无形资产购买和无形资产义务。`;
    if(metric==='Total Debt') note='公司未披露传统银行借款或债券；此处为借款口径，不含经营租赁和融资租赁负债。';
    add(metric,value,unit,period,'年度',reportDate,annualUrl,calc?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }

  const q2={'Revenue':[1443,'USD million'],'Cost of Revenue':[42,'USD million'],'Gross Profit':[1401,'USD million'],'Gross Margin':[97.1,'%'],'Operating Income':[201,'USD million'],'Operating Margin':[13.9,'%'],'Net Income':[130,'USD million'],'Net Profit Margin':[9.0,'%'],'EPS':[0.12,'USD/share'],'Diluted EPS':[0.12,'USD/share'],'R&D Expenses':[857,'USD million'],'Cash and Cash Equivalents':[3251,'USD million'],'Total Assets':[11414,'USD million'],'Total Liabilities':[2326,'USD million'],"Stockholders' Equity":[9088,'USD million'],'Total Debt':[0,'USD million'],'Accounts Receivable':[1086,'USD million'],'Shares Outstanding':[1070,'million shares'],'Stock-based Compensation':[376,'USD million']};
  for(const [metric,[value,unit]] of Object.entries(q2)){
    const calc=['Gross Margin','Operating Margin','Net Profit Margin','Total Debt'].includes(metric);
    let note=calc?'根据 Q2 FY2027 GAAP 披露值计算。':'';
    if(metric==='Total Debt') note='公司未披露传统银行借款或债券；此处为借款口径，不含经营租赁和融资租赁负债。';
    add(metric,value,unit,'Q2 FY2027','季度','2026-11-04',quarterUrl,calc?'计算数据 / Calculated':'原始数据 / Reported',unit==='%'?'N/A':'USD',note);
  }
  const ytd={'Operating Cash Flow':[1109,'USD million'],'Investing Cash Flow':[-164,'USD million'],'Financing Cash Flow':[-439,'USD million'],'Capital Expenditure':[269,'USD million'],'Free Cash Flow':[775,'USD million'],'Stock-based Compensation':[719,'USD million'],'Dividends':[0,'USD million']};
  for(const [metric,[value,unit]] of Object.entries(ytd)){
    let note=''; let type='原始数据 / Reported';
    if(metric==='Capital Expenditure') note='口径：六个月购买物业及设备的现金支出。';
    if(metric==='Free Cash Flow'){type='公司非GAAP计算 / Company non-GAAP';note='公司口径：经营现金流 1,109 - 物业设备 269 - 无形资产购买 16 - 无形资产义务付款 49 = 775（百万美元）。';}
    add(metric,value,unit,'H1 FY2027','累计季度','2026-11-04',quarterUrl,type,'USD',note);
  }
  add('Inventory','N/A','USD million','Q2 FY2027','季度','2026-11-04',quarterUrl,'不适用 / N/A','USD','资产负债表未单列存货；截至报告期仍以 IP 授权为主。进入成品芯片后需关注存货口径变化。');
  add('Share Price',174.62,'USD/share','2026-11-06 close','市场快照','2026-11-08',priceUrl,'外部市场数据 / Market','USD','NASDAQ 收盘价；二级市场交易不会直接给公司带来现金。');
  add('Market Capitalization',186843,'USD million','2026-11-06 close','市场快照','2026-11-08',priceUrl,'外部市场数据 / Market','USD','市值约 1,868.43 亿美元；市值不是资产。');
  add('P/E',200.7,'x','TTM / 2026-11-06','市场快照','2026-11-08',priceUrl,'外部市场数据 / Market','N/A','Yahoo Finance TTM P/E；高倍数意味着市场已计入很强增长预期。');
  add('P/S',34.2,'x','TTM revenue / 2026-11-06 market cap','市场快照','2026-11-08',priceUrl,'计算数据 / Calculated','N/A','TTM 收入 = FY2026 4,920 + H1 FY2027 2,732 - H1 FY2026 2,188 = 5,464 百万美元；186,843 ÷ 5,464 ≈ 34.2。');
  add('Stock Buybacks',0,'USD million','H1 FY2027','累计季度','2026-11-04',quarterUrl,'原始数据 / Reported','USD','现金流量表未列普通股回购；主要融资流出为代扣归属股份税款。');
  add('Equity Financing',40,'USD million','H1 FY2027','累计季度','2026-11-04',quarterUrl,'原始数据 / Reported','USD','员工购股计划流入；属于一级市场融资，不是营业收入。');
  add('Debt Financing',0,'USD million','H1 FY2027','累计季度','2026-11-04',quarterUrl,'原始数据 / Reported','USD','现金流量表未列借款发行或偿还。');

  const journal={
    id:'arm-research-2026-11-08',date:'2026-11-08',companyId:'arm',type:'首次研究',title:'Arm 首次研究：高毛利 IP 飞轮与成品芯片扩张的估值考验',
    discovery:'1. Q2 FY2027 收入 14.43 亿美元，同比增长 27%；许可及其他收入增长 50%，版税仅增长 8%，本季增长更依赖许可项目确认。\n2. GAAP 毛利率 97.1%，体现 IP 复制成本低；但 R&D 8.57 亿美元、占收入 59.4%，SBC 3.76 亿美元，GAAP 营业利润率仅 13.9%。\n3. Q2 净利润同比下降 45%，并不等于核心经营恶化：上年同期包含 1.31 亿美元业务处置收益。营业利润仍增长 23%，展示利润表项目分类的重要性。\n4. H1 FY2027 经营现金流 11.09 亿美元，公司口径自由现金流 7.75 亿美元；利润 4.00 亿美元低于现金流，主要因为 7.19 亿美元 SBC 是非现金费用，同时营运资本变化抵消一部分。\n5. 数据中心版税同比翻倍，Arm 架构在主要超大规模云厂商的服务器份额上升；但 AGI CPU 将公司从轻资产 IP 平台带入生产芯片，未来存货、采购承诺和资本强度都可能上升。',
    thoughts:'公司视角：继续提高 Armv9/CSS 的版税价值并扩张数据中心很合理；直接销售 AGI CPU 可以捕获更多价值，但也可能与被许可方竞争，需谨慎管理生态。\n经济学视角：Arm 用高额固定研发换取低边际复制成本，97% 毛利率是 IP 复用的结果。客户支付许可费以降低设计风险，再按芯片出货支付版税，Arm 与客户共同分享终端增长。\n投资者视角：收入增长和现金转换良好，但约 200.7 倍 TTM P/E、34.2 倍 TTM P/S 已反映强增长预期。需要把高 SBC、关联方收入和 AGI CPU 的新增资本风险纳入每股价值。\n求职者视角：适合希望从架构、编译器、验证和系统 IP 切入 AI 产业的人；Arm 覆盖移动到云的广泛场景。进入成品芯片后，供应链和产品工程岗位机会增加，执行压力也更高。\n产业视角：Arm 是芯片产业的“架构收费站”，与 NVIDIA 不同但会在 AI 数据中心 CPU、系统平台和开发者生态交汇。RISC-V 是长期开放替代压力。\n\n个人思考：高毛利并不自动等于高营业利润。Arm 把大量价值继续投入研发，并用 SBC 招募人才；因此应同时看 GAAP 营业利润率、SBC/收入和自由现金流，而不能只被 97% 毛利率吸引。\n\n结论速览：\n- 公司靠什么赚钱：授权 CPU/系统 IP 收取许可费，并按客户芯片出货收取版税。\n- 近年财务变化：FY2024-FY2026 收入从 32.33 亿增至 49.20 亿美元，营业利润率从 3.4% 升至 18.3%；Q2 FY2027 收入仍增 27%，但净利受上年一次性收益影响下降。\n- 三个关键指标：Q2 收入增长 27%；GAAP 营业利润率 13.9%；H1 公司口径 FCF 7.75 亿美元。\n- 三个风险：约 200.7 倍 TTM P/E 的估值风险；SoftBank/关联方与 Arm China 集中风险；AGI CPU 增加资本强度并可能与客户竞争。\n- 最关键变量：数据中心与 Armv9/CSS 能否持续提高版税，同时 AGI CPU 不破坏 IP 生态。\n- 投资者启示：区分许可和版税增长，扣除 SBC 观察每股现金创造，并用更低增长情景检验估值。\n- 求职者启示：Arm 是学习计算架构和生态的稀缺平台；团队选择应关注 Neoverse/CSS/AGI CPU 的资源与交付节奏。\n\n待研究问题：\n1. AGI CPU 的采购承诺、毛利率和客户结构会怎样改变资产负债表与现金流？\n2. Armv9/CSS 占比提升能否让版税增长重新超过许可增长？\n3. 关联方收入中有多少可持续，Arm China 应收账款和回款周期如何变化？\n4. SBC/收入能否下降，完全稀释股数是否继续上升？\n5. 下一家公司研究一家中国 AI 计算芯片企业，比较公开财报质量、研发强度和商业化进度。',
    sources:`${annualUrl}\n${quarterUrl}\n${resultsUrl}\n${priceUrl}`,createdAt:stamp,updatedAt:stamp
  };

  const base=window.YHH_RESEARCH_SEED||{version:0,companies:[],financials:[],journals:[]};
  base.version=Math.max(Number(base.version)||0,8);
  base.companies=[...(base.companies||[]).filter(x=>x.id!=='arm'),company];
  base.financials=[...(base.financials||[]).filter(x=>x.companyId!=='arm'),...financials];
  base.journals=[...(base.journals||[]).filter(x=>x.id!==journal.id),journal];
  window.YHH_RESEARCH_SEED=base;
})();
