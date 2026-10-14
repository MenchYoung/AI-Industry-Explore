const ATLAS_DATA = {
  meta: { version: "0.1.0", updatedAt: "2026-10-14", locale: "zh-CN" },
  sectors: [
    {
      id: "primary", order: "01", name: "第一产业", en: "PRIMARY", thesis: "从自然中获取生存所需", color: "#a8e06c",
      description: "土地、水与生命构成经济活动的起点。它提供食物和基础原料，也最先感知气候变化。",
      items: ["agriculture", "forestry", "livestock", "fishery"]
    },
    {
      id: "secondary", order: "02", name: "第二产业", en: "SECONDARY", thesis: "把资源转化成可用之物", color: "#ff8c61",
      description: "能源、机器和工程把自然资源变成材料、产品与基础设施，是生产力被放大的现场。",
      items: ["mining", "manufacturing", "utilities", "construction", "aluminum", "semiconductor", "battery", "new-energy"]
    },
    {
      id: "tertiary", order: "03", name: "第三产业", en: "TERTIARY", thesis: "组织人与信息的流动", color: "#72c7ff",
      description: "服务业让资金、商品、知识与健康更高效地流动，并连接生产者与最终需求。",
      items: ["finance", "logistics", "information", "healthcare", "education", "consumer"]
    }
  ],
  nodes: {
    agriculture: {
      id: "agriculture", sector: "primary", name: "农业", en: "AGRICULTURE", icon: "禾", parent: null,
      oneLiner: "把阳光、土地和水转化为稳定食物供给。", why: "所有复杂经济活动都建立在稳定热量供给之上；粮食安全也直接影响物价与社会稳定。",
      scale: "基础性极强、利润率通常不高，但牵动土地、化肥、种业、机械、贸易与食品加工。",
      costs: ["土地与水", "种子化肥", "人工与机械", "天气风险"], profit: "规模经营、提高单产、农产品加工、品牌溢价与供应链效率。",
      leaders: ["先正达", "拜耳作物科学", "中粮集团"], china: "既是全球重要农业生产国，也是大豆等品类的重要进口市场。",
      trend: "精准农业、抗逆种子、节水灌溉与供应链韧性将成为核心变量。", ai: "遥感识别病虫害，预测产量与价格，并自动优化灌溉和施肥。",
      chain: [["上游", "种子 / 化肥 / 农机"], ["生产", "种植 / 采收"], ["下游", "贸易 / 食品加工 / 零售"]], know: "你的每一餐都连接着天气、能源、全球贸易和国家安全。"
    },
    forestry: { id:"forestry", sector:"primary", name:"林业", en:"FORESTRY", icon:"林", parent:null, oneLiner:"管理可再生的木材与生态资源。", why:"建筑、包装、纸品与生态系统都需要可持续森林。", scale:"连接土地经营、木材加工、纸浆造纸与碳汇。", costs:["育林周期","土地","采运","生态合规"], profit:"林地经营、木材加工、特种纸和生态服务。", leaders:["国际纸业","金光集团","玖龙纸业"], china:"是纸品生产与消费大国，对进口木浆依赖较高。", trend:"循环包装、认证林业和碳汇价值上升。", ai:"用卫星与视觉模型监测火情、病害和非法采伐。", chain:[["上游","育苗 / 林地"],["生产","采伐 / 制浆"],["下游","板材 / 纸品 / 家居"]], know:"一只纸箱背后，是多年生长周期与全球木浆贸易。" },
    livestock: { id:"livestock", sector:"primary", name:"畜牧业", en:"LIVESTOCK", icon:"牧", parent:null, oneLiner:"把饲料转化为肉、蛋、奶与动物原料。", why:"提供高质量蛋白，是居民消费升级的重要组成。", scale:"上接粮食与饲料，下接屠宰、食品和冷链。", costs:["饲料","种源","防疫","养殖设施"], profit:"育种效率、规模养殖、食品加工与品牌渠道。", leaders:["牧原股份","伊利股份","JBS"], china:"是全球最大的猪肉生产与消费市场之一。", trend:"生物安全、低碳饲料与替代蛋白并行发展。", ai:"监测动物健康、优化饲喂并预测疫病风险。", chain:[["上游","育种 / 饲料"],["生产","养殖 / 防疫"],["下游","屠宰 / 乳品 / 零售"]], know:"肉蛋奶价格会把玉米、大豆、能源与疾病风险传导到你的餐桌。" },
    fishery: { id:"fishery", sector:"primary", name:"渔业", en:"FISHERY", icon:"渔", parent:null, oneLiner:"从水域获得并养殖水生蛋白。", why:"为大量人口提供高效蛋白，并连接沿海经济。", scale:"捕捞与养殖并存，冷链和饲料决定商业半径。", costs:["苗种饲料","水域","船舶能源","冷链"], profit:"高效养殖、深加工、冷链与品牌水产。", leaders:["Mowi","Cooke","国联水产"], china:"水产养殖规模居全球前列，完整覆盖育苗、养殖与加工。", trend:"深远海养殖、可追溯供应链和替代鱼粉。", ai:"识别鱼群行为、自动投喂并监测水质。", chain:[["上游","苗种 / 饲料 / 装备"],["生产","捕捞 / 养殖"],["下游","加工 / 冷链 / 餐饮"]], know:"一条鱼的价格同时由海洋生态、饲料和冷链能力决定。" },
    mining: { id:"mining", sector:"secondary", name:"采矿业", en:"MINING", icon:"矿", parent:null, oneLiner:"从地壳中获得现代社会所需的物质底座。", why:"没有矿产，就没有建筑、机器、芯片、电池与电网。", scale:"资本密集、周期长、资源禀赋决定性强，是多数制造业的成本起点。", costs:["资源获取","采选设备","能源","环保与运输"], profit:"低成本优质资源、规模化开采、价格周期与长期供货合同。", leaders:["必和必拓","力拓","紫金矿业"], china:"消费多种工业金属，并在冶炼加工环节拥有显著产业能力。", trend:"矿石品位下降、关键矿产安全与绿色采矿提高资本门槛。", ai:"辅助勘探、矿山调度、无人运输与设备预测维护。", chain:[["上游","勘探 / 矿权 / 装备"],["生产","采掘 / 选矿"],["下游","冶炼 / 材料 / 制造"]], know:"手机、电动车和城市天际线，最终都要向地壳索取原料。" },
    manufacturing: { id:"manufacturing", sector:"secondary", name:"制造业", en:"MANUFACTURING", icon:"造", parent:null, oneLiner:"用工程、机器与组织把材料变成产品。", why:"它把知识固化为可复制的物品，决定一个经济体的生产能力。", scale:"覆盖材料、设备与终端产品，连接研发、能源、物流和全球贸易。", costs:["原材料","设备折旧","人工","能源与良率"], profit:"工艺壁垒、规模效应、品牌、供应链效率与售后服务。", leaders:["西门子","丰田","海尔智家"], china:"拥有门类齐全、配套密集的制造体系，是全球制造与出口的重要力量。", trend:"自动化、柔性生产、供应链区域化和低碳制造。", ai:"生成设计、视觉质检、排产优化、数字孪生与机器人协作。", chain:[["上游","材料 / 零部件 / 设备"],["生产","设计 / 加工 / 装配"],["下游","渠道 / 售后 / 回收"]], know:"制造业是把抽象技术变成现实生活的那座桥。" },
    utilities: { id:"utilities", sector:"secondary", name:"电力燃气水", en:"UTILITIES", icon:"能", parent:null, oneLiner:"让能源与水像血液一样持续抵达城市。", why:"几乎所有生产和生活都依赖稳定、可负担的基础供应。", scale:"重资产、强监管、现金流相对稳定，决定全社会的运行下限。", costs:["燃料或电源","电网管网","维护","融资"], profit:"受监管回报、发售电价差、容量服务与运营效率。", leaders:["国家电网","中国华能","NextEra Energy"], china:"建设了全球规模领先的电力系统与可再生能源装机。", trend:"电气化、储能、智能电网和分布式能源。", ai:"预测负荷与新能源出力，优化调度并提前发现故障。", chain:[["上游","能源 / 设备"],["生产","发电 / 净化"],["下游","电网管网 / 用户"]], know:"停电一小时，足以让数字经济重新认识物理世界。" },
    construction: { id:"construction", sector:"secondary", name:"建筑业", en:"CONSTRUCTION", icon:"筑", parent:null, oneLiner:"把资本、材料与劳动固定成空间和基础设施。", why:"住房、工厂、道路与公共设施塑造人的生活和生产半径。", scale:"投资额大、产业链长，对钢铁、水泥、机械和金融有强拉动。", costs:["土地","材料","人工","融资"], profit:"项目管理、工程技术、周转效率与资产运营。", leaders:["中国建筑","万喜集团","霍克蒂夫"], china:"拥有超大规模的建筑市场和完整工程承包能力。", trend:"城市更新、绿色建筑、模块化施工与存量运营。", ai:"辅助设计、预算审查、工期推演与现场安全监测。", chain:[["上游","土地 / 建材 / 设备"],["生产","设计 / 施工"],["下游","运营 / 物业 / 更新"]], know:"城市不是背景，它本身就是几十年周期的巨大产品。" },
    aluminum: { id:"aluminum", sector:"secondary", name:"铝产业", en:"ALUMINUM", icon:"Al", parent:"manufacturing", path:["第二产业","制造业","有色金属","铝产业"], oneLiner:"用轻、耐腐蚀、可循环的金属支撑现代工业。", why:"交通工具需要减重，建筑需要耐久，电网需要导电，包装需要阻隔。", scale:"大宗基础材料，需求横跨建筑、交通、电力、包装与消费电子。", costs:["铝土矿与氧化铝","电力","碳阳极","物流"], profit:"低电价与一体化资源、工艺效率、高端合金和深加工认证。", leaders:["中国铝业","宏桥集团","力拓铝业","海德鲁"], china:"在电解铝和加工材环节产能规模突出，也是全球需求的关键来源。", trend:"再生铝占比提升，汽车轻量化与电网投资拉动高性能材料。", ai:"优化电解槽控制、预测能耗与缺陷，并加速合金配方研发。", chain:[["上游资源","铝土矿 → 氧化铝"],["中游生产","电解铝 → 铝加工"],["下游应用","汽车 / 光伏 / 电网 / 包装"]], know:"它藏在易拉罐、电网和新能源汽车里，是能源转型的隐形骨架。" },
    semiconductor: { id:"semiconductor", sector:"secondary", name:"半导体", en:"SEMICONDUCTOR", icon:"芯", parent:"manufacturing", path:["第二产业","制造业","电子信息","半导体"], oneLiner:"让计算、感知、通信与控制可以被嵌入万物。", why:"芯片是数字世界进入物理世界的接口。", scale:"研发与资本高度密集，价值链全球分工，影响几乎所有现代设备。", costs:["研发人才","晶圆厂设备","材料","良率与折旧"], profit:"架构与IP、先进工艺、稀缺设备、规模制造和长期客户认证。", leaders:["英伟达","台积电","三星电子","中芯国际"], china:"是全球重要的电子终端市场，并持续加强设计、制造、设备与材料能力。", trend:"AI算力、先进封装、成熟制程韧性与边缘智能共同增长。", ai:"既扩大算力需求，也用于芯片设计、工艺控制和良率提升。", chain:[["上游","EDA / 设备 / 材料"],["中游","设计 → 制造 → 封测"],["下游","云计算 / 汽车 / 消费电子"]], know:"任何“智能”，最终都必须落在一块真实的硅片上。" },
    battery: { id:"battery", sector:"secondary", name:"动力电池", en:"BATTERY", icon:"电", parent:"manufacturing", path:["第二产业","制造业","新能源装备","动力电池"], oneLiner:"把不同时刻产生和使用的能量连接起来。", why:"移动设备、电动车与波动性新能源都需要储能。", scale:"材料成本占比高，技术迭代快，与汽车和电力系统深度耦合。", costs:["正负极材料","电芯制造","良率","安全与研发"], profit:"材料体系、制造效率、规模供货、系统集成和回收闭环。", leaders:["宁德时代","比亚迪","LG新能源","松下能源"], china:"在电池材料、电芯制造与整车配套方面形成了密集产业链。", trend:"快充、长寿命、储能电池、固态路线与回收体系。", ai:"发现新材料、优化电池管理系统并预测寿命与热失控。", chain:[["上游资源","锂 / 镍 / 石墨 / 铜"],["中游生产","材料 → 电芯 → 电池包"],["下游应用","电动车 / 储能 / 消费电子"]], know:"能源转型的难点不是发出一度电，而是在需要时拿到它。" },
    "new-energy": { id:"new-energy", sector:"secondary", name:"新能源", en:"NEW ENERGY", icon:"新", parent:"utilities", path:["第二产业","电力燃气水","能源转型","新能源"], oneLiner:"用可再生方式生产电力，并重构能源系统。", why:"降低化石能源依赖与排放，同时满足持续增长的电力需求。", scale:"横跨发电设备、电网、储能、关键矿产和终端电气化。", costs:["设备","土地与资源","融资","并网与消纳"], profit:"低度电成本、优质资源区位、设备效率、长期电力合同。", leaders:["隆基绿能","金风科技","NextEra Energy","维斯塔斯"], china:"在光伏、风电设备与相关供应链中拥有显著制造规模。", trend:"风光储协同、绿氢、虚拟电厂与跨区域电网。", ai:"预测风光出力、优化交易与运维，让分散能源协同运行。", chain:[["上游","硅料 / 金属 / 设备"],["中游","组件 / 风机 / 电站"],["下游","电网 / 储能 / 电气化"]], know:"它不仅替换一种电源，还会重新分配矿产、制造和地缘价值。" },
    finance: { id:"finance", sector:"tertiary", name:"金融", en:"FINANCE", icon:"融", parent:null, oneLiner:"把今天的储蓄配置给明天的生产与消费。", why:"跨时间配置资金、分散风险，并为交易提供信用。", scale:"渗透所有产业，是经济的资本定价与风险传导系统。", costs:["资金成本","信用损失","技术合规","获客"], profit:"利差、手续费、资产管理费、风险定价与交易服务。", leaders:["摩根大通","工商银行","伯克希尔·哈撒韦"], china:"拥有大型银行体系、活跃资本市场和快速发展的数字支付基础设施。", trend:"利率周期、直接融资、财富管理与数字资产基础设施。", ai:"反欺诈、信贷评估、投研辅助与高度个性化服务。", chain:[["上游","储蓄 / 数据 / 信用"],["中游","银行 / 证券 / 保险"],["下游","企业融资 / 居民财富"]], know:"金融不生产实物，却决定谁能提前使用未来的钱。" },
    logistics: { id:"logistics", sector:"tertiary", name:"物流", en:"LOGISTICS", icon:"流", parent:null, oneLiner:"让商品在正确时间抵达正确地点。", why:"生产与消费分布在不同空间，没有物流就没有大规模分工。", scale:"连接贸易、电商和制造，油价、人工、载具利用率决定盈利。", costs:["燃料","车辆与仓库","人工","空载与时效"], profit:"网络密度、装载率、仓配一体化和高附加值时效服务。", leaders:["UPS","马士基","顺丰控股","京东物流"], china:"拥有高密度快递网络、港口体系和庞大的制造物流需求。", trend:"自动驾驶、机器人仓库、供应链可视化与区域化贸易。", ai:"动态规划路线、预测库存、自动分拣与异常识别。", chain:[["上游","载具 / 仓库 / 能源"],["中游","运输 / 仓储 / 调度"],["下游","制造 / 商贸 / 消费者"]], know:"你买到的不是一件商品，而是商品加上一条被精密组织的路径。" },
    information: { id:"information", sector:"tertiary", name:"信息服务", en:"INFORMATION", icon:"数", parent:null, oneLiner:"把数据转化为连接、决策与自动化。", why:"降低复制、搜索、沟通和协作成本。", scale:"边际复制成本低，平台网络效应强，已成为全产业的效率层。", costs:["人才研发","算力","获客","内容与合规"], profit:"订阅、广告、交易佣金、云资源和增值服务。", leaders:["微软","谷歌","腾讯","阿里巴巴"], china:"拥有超大数字消费市场、平台生态与完善通信基础设施。", trend:"AI原生软件、智能体、数据治理与算力基础设施。", ai:"从辅助工具走向可执行任务的生产要素，并重塑软件交互。", chain:[["上游","芯片 / 网络 / 数据"],["中游","云 / 软件 / 平台"],["下游","企业与个人场景"]], know:"软件看似轻盈，但背后站着芯片、电力、光纤和人的注意力。" },
    healthcare: { id:"healthcare", sector:"tertiary", name:"医疗", en:"HEALTHCARE", icon:"医", parent:null, oneLiner:"延长健康寿命，修复人的功能与尊严。", why:"疾病风险不可避免，健康也是个人生产力与福祉的基础。", scale:"需求刚性、专业壁垒高，支付体系与人口结构影响极大。", costs:["专业人才","研发与设备","合规","服务场所"], profit:"创新药械、诊疗服务、规模网络、支付与运营效率。", leaders:["强生","罗氏","迈瑞医疗","恒瑞医药"], china:"需求体量大，医疗器械、创新药与数字医疗能力持续发展。", trend:"老龄化、精准医疗、慢病管理与支付控费并存。", ai:"辅助影像与诊断、药物发现、病历结构化和运营调度。", chain:[["上游","药物研发 / 器械"],["中游","医院 / 药房 / 保险"],["下游","预防 / 治疗 / 康复"]], know:"医疗产业的特殊之处，是需求最刚性时，人的议价能力往往最低。" },
    education: { id:"education", sector:"tertiary", name:"教育", en:"EDUCATION", icon:"知", parent:null, oneLiner:"把经验与知识跨代复制，形成新的能力。", why:"人类无法仅靠本能进入复杂社会，教育决定技能与机会。", scale:"与人口、就业和公共财政紧密相关，效果往往跨多年显现。", costs:["教师","内容研发","场地平台","获客"], profit:"优质内容、品牌信任、规模交付与就业结果。", leaders:["新东方","Coursera","培生集团"], china:"拥有大规模教育体系与强烈的技能提升需求，行业受公共政策深刻影响。", trend:"终身学习、职业教育、AI个性化辅导与能力认证。", ai:"提供低成本一对一讲解、即时反馈和自适应学习路径。", chain:[["上游","知识 / 师资 / 内容"],["中游","学校 / 平台 / 培训"],["下游","人才 / 就业 / 创新"]], know:"教育是少数能改变一个人未来收入曲线形状的产业。" },
    consumer: { id:"consumer", sector:"tertiary", name:"消费服务", en:"CONSUMER", icon:"消", parent:null, oneLiner:"把商品、体验与便利送到最终需求者。", why:"经济生产最终要回到人的吃、穿、住、行、娱乐与连接。", scale:"场景分散、竞争激烈，收入预期与人口结构直接影响需求。", costs:["商品或食材","租金人工","流量","履约"], profit:"品牌、选址、复购、供应链与体验差异化。", leaders:["沃尔玛","美团","星巴克","携程集团"], china:"拥有庞大、多层次的消费市场和高度数字化的本地生活生态。", trend:"体验消费、即时零售、性价比与银发服务。", ai:"理解需求、动态定价、自动客服和门店经营优化。", chain:[["上游","品牌 / 商品 / 内容"],["中游","平台 / 门店 / 履约"],["下游","消费者 / 会员关系"]], know:"消费不是经济的末端，而是反向定义整条供应链的起点。" }
  },
  links: [
    ["mining","aluminum","提供铝土矿"],["utilities","aluminum","电力决定成本"],["aluminum","new-energy","支撑光伏与电网"],
    ["mining","battery","提供锂镍铜"],["battery","new-energy","平衡风光波动"],["semiconductor","information","提供算力"],
    ["utilities","information","数据中心用电"],["information","finance","降低交易与风控成本"],["logistics","consumer","扩大消费半径"],
    ["agriculture","consumer","进入食品消费"],["agriculture","livestock","提供饲料"],["manufacturing","logistics","产生供应链需求"],
    ["construction","aluminum","建筑用材"],["education","information","数字化交付"],["healthcare","information","医疗数字化"],
    ["new-energy","battery","扩大储能需求"],["finance","construction","提供长期资本"],["semiconductor","manufacturing","提升自动化"]
  ],
  quantitative: {
    macro: {
      year: 2024,
      gdp: { value: "$111.7万亿", raw: 111.6694, unit: "万亿美元" },
      shares: [
        { label: "第一产业增加值", value: 4.1, color: "#a8e06c" },
        { label: "第二产业增加值", value: 25.4, color: "#ff8c61" },
        { label: "其中：制造业", value: 14.9, color: "#ffc06b" },
        { label: "第三产业增加值", value: 63.3, color: "#72c7ff" }
      ],
      note: "增加值占 GDP 比重；产业增加值之和与 GDP 的差额主要来自产品税减补贴等项目。",
      source: "world-bank"
    },
    signals: [
      { node:"new-energy", value:"4.443", unit:"TW", label:"全球可再生能源装机", year:"2024", delta:"+15.1%", source:"irena" },
      { node:"semiconductor", value:"630.5", unit:"十亿美元", label:"全球半导体销售额", year:"2024", delta:"历史新高", source:"sia" },
      { node:"logistics", value:"24.43", unit:"万亿美元", label:"全球货物贸易额", year:"2024", delta:"+2.0%", source:"wto" },
      { node:"healthcare", value:"9.8", unit:"万亿美元", label:"全球卫生支出", year:"2022", delta:"占 GDP 9.9%", source:"who" },
      { node:"battery", value:"17+", unit:"百万辆", label:"全球电动车销量", year:"2024", delta:"+25%", source:"iea-ev" },
      { node:"aluminum", value:"72", unit:"百万吨", label:"全球原铝产量", year:"2024", delta:"中国约 43Mt", source:"nrcan" }
    ],
    nodes: {
      agriculture: [
        { value:"4.1%", label:"全球 GDP 占比", year:"2024", source:"world-bank" },
        { value:"约 $4.6T", label:"全球增加值（按占比推算）", year:"2024", source:"world-bank" }
      ],
      manufacturing: [
        { value:"14.9%", label:"全球 GDP 占比", year:"2024", source:"world-bank" },
        { value:"约 $16.6T", label:"全球增加值（按占比推算）", year:"2024", source:"world-bank" }
      ],
      utilities: [
        { value:"+4.3%", label:"全球电力需求增速", year:"2024", source:"iea-power" },
        { value:"+1,080 TWh", label:"全球用电量年度增量", year:"2024", source:"iea-power" }
      ],
      aluminum: [
        { value:"72 Mt", label:"全球原铝产量", year:"2024", source:"nrcan" },
        { value:"43 Mt", label:"中国原铝产量", year:"2024", source:"nrcan" }
      ],
      semiconductor: [
        { value:"$630.5B", label:"全球销售额（修订值）", year:"2024", source:"sia" },
        { value:"$212.6B", label:"逻辑芯片销售额", year:"2024", source:"sia" }
      ],
      battery: [
        { value:"17M+", label:"全球电动车销量", year:"2024", source:"iea-ev" },
        { value:"20%+", label:"全球新车销量占比", year:"2024", source:"iea-ev" }
      ],
      "new-energy": [
        { value:"4.443 TW", label:"全球可再生能源装机", year:"2024", source:"irena" },
        { value:"46.2%", label:"全球总装机容量占比", year:"2024", source:"irena" }
      ],
      logistics: [
        { value:"$24.43T", label:"全球货物贸易额", year:"2024", source:"wto" },
        { value:"+2.0%", label:"货物贸易额同比增长", year:"2024", source:"wto" }
      ],
      healthcare: [
        { value:"$9.8T", label:"全球卫生支出", year:"2022", source:"who" },
        { value:"9.9%", label:"全球 GDP 占比", year:"2022", source:"who" }
      ]
    }
  },
  sources: {
    "world-bank": { name:"世界银行 WDI", url:"https://wdi.worldbank.org/table/4.2", note:"2024 年全球 GDP 与增加值结构" },
    irena: { name:"IRENA", url:"https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2025/Jul/IRENA_DAT_Renewable_energy_highlights_2025.pdf", note:"Renewable energy highlights 2025（修订数据）" },
    sia: { name:"SIA / WSTS", url:"https://www.semiconductors.org/global-semiconductor-sales-increase-19-1-in-2024-double-digit-growth-projected-in-2025/", note:"2024 全球半导体销售" },
    wto: { name:"WTO", url:"https://www.wto.org/english/res_e/booksp_e/anrep_e/ar25_chap1_e.pdf", note:"WTO Annual Report 2025" },
    who: { name:"WHO", url:"https://iris.who.int/bitstream/handle/10665/379750/9789240104495-eng.pdf", note:"Global spending on health" },
    "iea-ev": { name:"IEA", url:"https://www.iea.org/reports/global-ev-outlook-2025/trends-in-electric-car-markets-2", note:"Global EV Outlook 2025" },
    "iea-power": { name:"IEA", url:"https://www.iea.org/reports/global-energy-review-2025/electricity", note:"Global Energy Review 2025" },
    nrcan: { name:"Natural Resources Canada", url:"https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/aluminum-facts", note:"Aluminum facts 2024" }
  },
  trends: [
    { id:"ai", name:"AI 快速发展", aliases:["ai","人工智能","算力"], summary:"AI首先拉动算力基础设施，然后通过软件与自动化向各产业扩散。", paths:[
      ["AI 模型规模增长","算力需求上升","半导体与服务器扩产","数据中心用电增加","电力与新能源投资"],
      ["智能体能力提升","软件从工具变成执行者","信息服务商业模式变化","金融与教育率先重构"],
      ["机器视觉与预测优化","制造良率提高","物流调度效率提升","单位成本下降"]], impacts:["semiconductor","information","utilities","new-energy","finance","education","manufacturing","logistics"] },
    { id:"energy", name:"全球能源转型", aliases:["能源转型","新能源","低碳","碳中和"], summary:"能源系统从持续燃烧燃料，转向先制造设备、再依靠自然流量发电。", paths:[
      ["减排与能源安全","风光装机增长","电网灵活性要求上升","储能需求增加","锂铜铝需求上升"],
      ["终端电气化","电动车与热泵普及","化石燃料需求结构变化","制造业重新布局"],
      ["绿色电力溢价","高耗能产业迁移","再生铝与低碳材料受益"]], impacts:["new-energy","battery","aluminum","mining","utilities","manufacturing"] },
    { id:"aging", name:"人口老龄化", aliases:["人口老龄化","老龄化","银发"], summary:"劳动人口、消费结构与财政支出会同时变化，服务业的组织方式被迫重写。", paths:[
      ["老年人口占比上升","慢病与照护需求增加","医疗与康复服务扩容","支付体系承压"],
      ["劳动力增速放缓","工资与自动化回报上升","机器人和软件替代重复劳动"],
      ["家庭结构变化","银发消费增长","适老住房、金融与教育服务出现新需求"]], impacts:["healthcare","finance","consumer","information","manufacturing","education"] },
    { id:"urban", name:"新型城市化", aliases:["城市化","城镇化","城市更新"], summary:"人口与生产要素继续向高效率空间集中，但重心从增量建设转向存量更新。", paths:[
      ["人口集聚","住房与公共设施需求","建筑与材料需求","金融提供长期资本"],
      ["城市密度提升","即时消费与物流网络增密","单位履约成本下降"],
      ["老旧基础设施更新","电网与节能改造","铜铝与智能设备需求"]], impacts:["construction","aluminum","finance","logistics","consumer","utilities"] }
  ]
};
