// ===== 荣耀社区 - 选手数据 =====

const PLAYERS = [
  // === 嘉世 ===
  { id:"yexiu", name:"叶修", gameId:"一叶之秋 / 君莫笑", class:"战斗法师 / 散人", team:"嘉世→兴欣", teamShort:"嘉世", status:"退役", birthday:"5月29日", height:"178cm", blood:"AB型", weapon:"却邪 / 千机伞", role:"队长", debutSeason:1, avatar:"叶",
    bio:"荣耀网游第一人，被称为「荣耀教科书」。嘉世战队创始人之一，带队三连冠（S4-S6）。S8被嘉世驱逐后在兴欣网吧以「君莫笑」身份重新开始，S10带领兴欣夺冠后退役。",
    career:[{s:"S1-S3",d:"嘉世核心，创建战队"},{s:"S4-S6",d:"嘉世三连冠",h:true},{s:"S7",d:"嘉世状态下滑"},{s:"S8",d:"被嘉世驱逐，被迫退役"},{s:"S9",d:"创建兴欣战队"},{s:"S10",d:"兴欣夺冠，赛后退役",h:true}],
    relationships:[{name:"苏沐橙",desc:"最亲密的搭档，黄金组合"},{name:"黄少天",desc:"宿敌亦友"},{name:"喻文州",desc:"惺惺相惜的战术大师"},{name:"韩文清",desc:"十年老对手"},{name:"苏沐秋",desc:"已故挚友，千机伞创造者"},{name:"邱非",desc:"弟子"}],
    honors:["S4/S5/S6 总冠军（嘉世）","S10 总冠军（兴欣）","荣耀教科书","荣耀之神","四大战术大师之一"]
  },
  { id:"su_muqiu", name:"苏沐秋", gameId:"沐雨橙风 / 秋木苏 / 君莫笑", class:"枪系全精通", team:"嘉世", teamShort:"嘉世", status:"已故", birthday:"—", height:"—", blood:"—", weapon:"千机伞（创造者）", role:"—", debutSeason:1, avatar:"秋",
    bio:"叶修最亲密的挚友与搭档，千机伞的创造者。枪系全精通的天才，在与嘉世签约当天因车祸不幸去世。",
    career:[{s:"S1前",d:"与叶修共同研究荣耀，创造千机伞"}],
    relationships:[{name:"叶修",desc:"最亲密的挚友"},{name:"苏沐橙",desc:"妹妹"}],
    honors:["千机伞创造者"]
  },
  { id:"sunxiang", name:"孙翔", gameId:"一叶之秋", class:"战斗法师", team:"越云→嘉世→轮回", teamShort:"嘉世", status:"转会", birthday:"12月2日", height:"185cm", blood:"B型", weapon:"却邪", role:"—", debutSeason:7, avatar:"翔",
    bio:"第7赛季最佳新人，原狂剑士出身。从越云转会嘉世接替叶修的一叶之秋，后转会轮回。",
    career:[{s:"S7",d:"越云出道，最佳新人",h:true},{s:"S8",d:"转会嘉世"},{s:"S10",d:"转会轮回"}],
    relationships:[{name:"叶修",desc:"一叶之秋的前主人"}],
    honors:["S7 最佳新人"]
  },
  { id:"liuhao", name:"刘皓", gameId:"暗无天日", class:"魔剑士", team:"嘉世→雷霆→呼啸", teamShort:"嘉世", status:"转会", birthday:"5月12日", height:"180cm", blood:"A型", weapon:"—", role:"副队长", debutSeason:5, avatar:"皓",
    bio:"原嘉世副队长，后转会雷霆担任队长，再转会呼啸任副队长。",
    career:[{s:"S5-S8",d:"嘉世副队长"},{s:"S9",d:"转会雷霆，任队长"},{s:"S10",d:"转会呼啸，任副队长"}],
    relationships:[{name:"叶修",desc:"曾经队友，后关系恶化"}],
    honors:[]
  },
  { id:"sumu_cheng", name:"苏沐橙", gameId:"沐雨橙风", class:"枪炮师", team:"嘉世→兴欣", teamShort:"嘉世", status:"现役", birthday:"2月18日", height:"168cm", blood:"B型", weapon:"吞日", role:"队长（S11起）", debutSeason:3, avatar:"橙",
    bio:"首席枪炮师，黄金一代成员。苏沐秋的妹妹，叶修最亲密的搭档。S3出道加入嘉世，S10随兴欣夺冠，S11起担任兴欣队长。",
    career:[{s:"S3-S9",d:"嘉世，与叶修搭档"},{s:"S10",d:"转会兴欣，夺冠",h:true},{s:"S11起",d:"兴欣队长"}],
    relationships:[{name:"叶修",desc:"最亲密的搭档"},{name:"苏沐秋",desc:"已故哥哥"}],
    honors:["S10 总冠军","首席枪炮师","黄金一代"]
  },
  { id:"qiufei", name:"邱非", gameId:"战斗格式", class:"战斗法师", team:"新嘉世", teamShort:"嘉世", status:"现役", birthday:"9月21日", height:"176cm", blood:"A型", weapon:"—", role:"队长", debutSeason:11, avatar:"非",
    bio:"叶修弟子，新嘉世队长。嘉世训练营出身，S11起带领新嘉世征战。",
    career:[{s:"S11起",d:"新嘉世队长"}],
    relationships:[{name:"叶修",desc:"师父"}],
    honors:[]
  },
  // === 兴欣 ===
  { id:"fangrui", name:"方锐", gameId:"海无量（原鬼迷神疑）", class:"气功师（原盗贼）", team:"呼啸→兴欣", teamShort:"兴欣", status:"现役", birthday:"11月20日", height:"177cm", blood:"O型", weapon:"镜月", role:"副队长", debutSeason:5, avatar:"锐",
    bio:"蓝雨训练营出身，呼啸副队长（S5-S9），S10转会兴欣改打气功师。黄金右手、猥琐大师，操作风格独特，是兴欣的奇兵。",
    career:[{s:"S5-S9",d:"呼啸副队长"},{s:"S10",d:"转会兴欣，夺冠",h:true}],
    relationships:[{name:"叶修",desc:"队友"},{name:"林敬言",desc:"呼啸前队友"}],
    honors:["S10 总冠军","黄金右手","猥琐大师"]
  },
  { id:"tangrou", name:"唐柔", gameId:"寒烟柔", class:"战斗法师", team:"兴欣", teamShort:"兴欣", status:"现役", birthday:"4月13日", height:"169cm", blood:"A型", weapon:"火舞流炎", role:"队员", debutSeason:10, avatar:"柔",
    bio:"S10最佳新人，兴欣战队主力。性格坚韧好强，战斗风格凶猛。",
    career:[{s:"S10",d:"兴欣出道，最佳新人，夺冠",h:true}],
    relationships:[{name:"叶修",desc:"队长"}],
    honors:["S10 最佳新人","S10 总冠军"]
  },
  { id:"baorongxing", name:"包荣兴", gameId:"包子入侵", class:"流氓", team:"兴欣", teamShort:"兴欣", status:"现役", birthday:"2月11日", height:"188cm", blood:"O型", weapon:"—", role:"队员", debutSeason:10, avatar:"包",
    bio:"兴欣战队成员，性格单纯直率，打法不按常理出牌。",
    career:[{s:"S10",d:"兴欣，夺冠",h:true}],
    relationships:[{name:"叶修",desc:"队长"}],
    honors:["S10 总冠军"]
  },
  { id:"qiaoyifan", name:"乔一帆", gameId:"一寸灰（原灰月）", class:"阵鬼剑士（原刺客）", team:"微草→兴欣", teamShort:"兴欣", status:"现役", birthday:"10月7日", height:"174cm", blood:"B型", weapon:"雪纹", role:"队员", debutSeason:8, avatar:"乔",
    bio:"微草训练营出身，S8在微草出道但不受重用。转会兴欣后改打阵鬼剑士，找到自己的位置。",
    career:[{s:"S8",d:"微草出道（刺客）"},{s:"S9",d:"转会兴欣，转职阵鬼剑士"},{s:"S10",d:"兴欣夺冠",h:true}],
    relationships:[{name:"王杰希",desc:"微草时期队长"},{name:"叶修",desc:"兴欣队长"}],
    honors:["S10 总冠军"]
  },
  { id:"luoji", name:"罗辑", gameId:"昧光", class:"召唤师", team:"兴欣", teamShort:"兴欣", status:"现役", birthday:"9月14日", height:"172cm", blood:"B型", weapon:"—", role:"队员", debutSeason:10, avatar:"罗",
    bio:"数学天才，兴欣战队成员。将数学逻辑融入战斗操作。",
    career:[{s:"S10",d:"兴欣，夺冠",h:true}],
    relationships:[{name:"叶修",desc:"队长"}],
    honors:["S10 总冠军"]
  },
  { id:"mofan", name:"莫凡", gameId:"毁人不倦", class:"忍者", team:"兴欣", teamShort:"兴欣", status:"现役", birthday:"10月30日", height:"171cm", blood:"A型", weapon:"十六叶", role:"队员", debutSeason:10, avatar:"莫",
    bio:"兴欣战队成员，性格沉默寡言，擅长忍者暗杀流打法。",
    career:[{s:"S10",d:"兴欣，夺冠",h:true}],
    relationships:[{name:"叶修",desc:"队长"}],
    honors:["S10 总冠军"]
  },
  { id:"anwenyi", name:"安文逸", gameId:"小手冰凉", class:"牧师", team:"兴欣", teamShort:"兴欣", status:"现役", birthday:"1月3日", height:"178cm", blood:"A型", weapon:"光明之证", role:"队员", debutSeason:10, avatar:"安",
    bio:"兴欣战队牧师，治疗能力出色。",
    career:[{s:"S10",d:"兴欣，夺冠",h:true}],
    relationships:[{name:"叶修",desc:"队长"}],
    honors:["S10 总冠军"]
  },
  { id:"weichen", name:"魏琛", gameId:"迎风布阵（原索克萨尔）", class:"术士", team:"蓝雨→兴欣", teamShort:"兴欣", status:"退役", birthday:"9月28日", height:"175cm", blood:"AB型", weapon:"死亡之手", role:"队长（蓝雨初代）", debutSeason:1, avatar:"魏",
    bio:"蓝雨首任队长（S1-S2），后退役。S10复出加入兴欣，夺冠后转为公会成员。虽然年纪大、操作下滑，但经验丰富，是兴欣的「老大哥」。与喻文州是蓝雨两代术士传人。",
    career:[{s:"S1-S2",d:"蓝雨首任队长"},{s:"S10",d:"复出加入兴欣，夺冠",h:true}],
    relationships:[{name:"喻文州",desc:"蓝雨后辈/两代术士传人"},{name:"叶修",desc:"兴欣队长"},{name:"黄少天",desc:"蓝雨后辈"}],
    honors:["S10 总冠军","蓝雨首任队长"]
  },
  // === 蓝雨 ===
  { id:"yuwenzhou", name:"喻文州", gameId:"索克萨尔", class:"术士", team:"蓝雨", teamShort:"蓝雨", status:"现役", birthday:"2月10日", height:"178cm", blood:"O型", weapon:"灭神的诅咒", role:"队长（第三任）", debutSeason:4, avatar:"喻",
    bio:"四大战术大师之一，黄金一代成员。蓝雨第三任队长，S6带队夺冠。手速不快但战术精妙，以智取胜。",
    career:[{s:"S4起",d:"蓝雨出道"},{s:"S6",d:"蓝雨夺冠",h:true},{s:"S4-S10",d:"蓝雨队长"}],
    relationships:[{name:"黄少天",desc:"最佳搭档，蓝雨双子星"},{name:"叶修",desc:"惺惺相惜"},{name:"张新杰",desc:"战术大师同行"},{name:"肖时钦",desc:"战术大师同行"}],
    honors:["S6 总冠军","四大战术大师之一","黄金一代"]
  },
  { id:"huangshaotian", name:"黄少天", gameId:"夜雨声烦", class:"剑客", team:"蓝雨", teamShort:"蓝雨", status:"现役", birthday:"8月10日", height:"176cm", blood:"AB型", weapon:"冰雨", role:"副队长", debutSeason:4, avatar:"黄",
    bio:"剑圣，黄金一代成员。话痨属性闻名联盟，但操作实力顶尖。S6获MVP，与喻文州组成蓝雨双子星。",
    career:[{s:"S4起",d:"蓝雨出道"},{s:"S6",d:"蓝雨夺冠，获MVP",h:true}],
    relationships:[{name:"喻文州",desc:"最佳搭档，蓝雨双子星"},{name:"叶修",desc:"宿敌亦友"}],
    honors:["S6 总冠军","S6 MVP","剑圣","黄金一代"]
  },
  { id:"luhanwen", name:"卢瀚文", gameId:"流云", class:"剑客", team:"蓝雨", teamShort:"蓝雨", status:"现役", birthday:"11月30日", height:"—", blood:"O型", weapon:"焰影", role:"队员", debutSeason:9, avatar:"卢",
    bio:"联盟最年少选手，S9出道即获最佳新人。蓝雨新生代剑客。",
    career:[{s:"S9",d:"蓝雨出道，最佳新人",h:true}],
    relationships:[{name:"黄少天",desc:"前辈，同为剑客"},{name:"喻文州",desc:"队长"}],
    honors:["S9 最佳新人","最年少选手"]
  },
  // === 微草 ===
  { id:"wangjiexi", name:"王杰希", gameId:"王不留行", class:"魔道学者", team:"微草", teamShort:"微草", status:"现役", birthday:"7月6日", height:"181cm", blood:"O型", weapon:"灭绝星尘", role:"队长", debutSeason:3, avatar:"王",
    bio:"魔术师，打法变幻莫测。首位冲破新秀墙的选手，S5/S7带队夺冠。为培养新人高英杰不惜改变自己的打法。",
    career:[{s:"S3",d:"微草出道，首战屠神"},{s:"S5",d:"微草夺冠",h:true},{s:"S7",d:"微草夺冠，获MVP",h:true}],
    relationships:[{name:"高英杰",desc:"爱徒，悉心培养"},{name:"叶修",desc:"老对手"}],
    honors:["S5/S7 总冠军","S7 MVP","魔术师","首位冲破新秀墙"]
  },
  { id:"fangshiqian", name:"方士谦", gameId:"防风 / 冬虫夏草", class:"守护天使 / 牧师", team:"微草", teamShort:"微草", status:"退役", birthday:"11月9日", height:"183cm", blood:"AB型", weapon:"—", role:"副队长", debutSeason:2, avatar:"方",
    bio:"治疗之神，微草副队长。S5/S7随队夺冠，S7后退役。",
    career:[{s:"S2-S7",d:"微草副队长"},{s:"S5",d:"微草夺冠",h:true},{s:"S7",d:"微草夺冠，后退役",h:true}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:["S5/S7 总冠军","治疗之神"]
  },
  { id:"gaoyingjie", name:"高英杰", gameId:"木恩", class:"魔道学者", team:"微草", teamShort:"微草", status:"现役", birthday:"3月15日", height:"173cm", blood:"A型", weapon:"晨露", role:"队员", debutSeason:8, avatar:"高",
    bio:"王杰希的爱徒，微草新生代魔道学者。S8出道，被寄予厚望。",
    career:[{s:"S8起",d:"微草出道"}],
    relationships:[{name:"王杰希",desc:"师父"}],
    honors:[]
  },
  { id:"liuxiaobie", name:"刘小别", gameId:"飞刀剑", class:"剑客", team:"微草", teamShort:"微草", status:"现役", birthday:"9月12日", height:"177cm", blood:"O型", weapon:"追魂", role:"队员", debutSeason:7, avatar:"刘",
    bio:"手速达人，S7随微草夺冠。S8获单挑之王称号。",
    career:[{s:"S7",d:"微草夺冠",h:true},{s:"S8",d:"单挑之王",h:true}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:["S7 总冠军","S8 单挑之王","手速达人"]
  },
  { id:"xubin", name:"许斌", gameId:"独活", class:"骑士", team:"三零一→微草", teamShort:"微草", status:"现役", birthday:"6月24日", height:"176cm", blood:"B型", weapon:"叹息之壁", role:"副队长", debutSeason:6, avatar:"许",
    bio:"磨王、第一骑士。S6在三零一出道，S9转会微草任副队长。以防守著称，被称为「磨王」。",
    career:[{s:"S6-S8",d:"三零一"},{s:"S9起",d:"转会微草，任副队长"}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:["第一骑士","磨王"]
  },
  // === 霸图 ===
  { id:"hanwenqing", name:"韩文清", gameId:"大漠孤烟", class:"拳法家", team:"霸图", teamShort:"霸图", status:"现役", birthday:"3月31日", height:"183cm", blood:"A型", weapon:"烈焰红拳", role:"队长", debutSeason:1, avatar:"韩",
    bio:"拳皇，经历全部十个赛季的老将。S4获MVP并带队夺冠。打法刚猛，与叶修是十年老对手。",
    career:[{s:"S1-S3",d:"霸图核心"},{s:"S4",d:"霸图夺冠，获MVP",h:true},{s:"S5-S10",d:"霸图队长，老将坚守"}],
    relationships:[{name:"叶修",desc:"十年老对手"},{name:"张新杰",desc:"副队长，最佳搭档"},{name:"林敬言",desc:"队友"}],
    honors:["S4 总冠军","S4 MVP","拳皇","经历全部十赛季"]
  },
  { id:"zhangxinjie", name:"张新杰", gameId:"石不转", class:"牧师", team:"霸图", teamShort:"霸图", status:"现役", birthday:"1月11日", height:"177cm", blood:"O型", weapon:"逆光的十字星", role:"副队长", debutSeason:4, avatar:"张",
    bio:"四大战术大师之一，黄金一代成员。S4出道即夺冠并获最佳新人。治疗与战术兼备的顶级牧师。",
    career:[{s:"S4",d:"霸图出道，夺冠+最佳新人",h:true},{s:"S4-S10",d:"霸图副队长"}],
    relationships:[{name:"韩文清",desc:"队长，最佳搭档"},{name:"喻文州",desc:"战术大师同行"},{name:"叶修",desc:"战术大师同行"}],
    honors:["S4 总冠军","S4 最佳新人","四大战术大师之一","黄金一代"]
  },
  { id:"zhangjiale", name:"张佳乐", gameId:"百花缭乱", class:"弹药专家", team:"百花→霸图", teamShort:"霸图", status:"现役", birthday:"2月24日", height:"178cm", blood:"AB型", weapon:"猎寻", role:"队员", debutSeason:2, avatar:"乐",
    bio:"S5获MVP，四次亚军（S3/S5/S7/S9）。百花队长，S7后退役，S9复出加入霸图。荣耀最悲情的选手之一。",
    career:[{s:"S2-S7",d:"百花副队长→队长"},{s:"S5",d:"获MVP",h:true},{s:"S7",d:"退役"},{s:"S9",d:"复出加入霸图"}],
    relationships:[{name:"孙哲平",desc:"百花前搭档"},{name:"韩文清",desc:"霸图队长"}],
    honors:["S5 MVP","四次亚军（S3/S5/S7/S9）"]
  },
  { id:"linjingyan", name:"林敬言", gameId:"冷暗雷（原唐三打）", class:"流氓", team:"呼啸→霸图", teamShort:"霸图", status:"退役", birthday:"5月1日", height:"175cm", blood:"O型", weapon:"一夜八荒（原血祭绝魂）", role:"队员", debutSeason:2, avatar:"林",
    bio:"前第一流氓，呼啸队长。S9转会霸图，S10后退役。",
    career:[{s:"S2-S8",d:"呼啸队长"},{s:"S9",d:"转会霸图"},{s:"S10",d:"退役"}],
    relationships:[{name:"唐昊",desc:"百花后辈，曾以下克上"},{name:"韩文清",desc:"霸图队长"}],
    honors:["前第一流氓"]
  },
  // === 轮回 ===
  { id:"zhouzekai", name:"周泽楷", gameId:"一枪穿云", class:"神枪手", team:"轮回", teamShort:"轮回", status:"现役", birthday:"11月24日", height:"183cm", blood:"A型", weapon:"碎霜+荒火", role:"队长", debutSeason:5, avatar:"周",
    bio:"枪王，荣耀联盟第一大帅哥。继叶修之后的第二位「荣耀第一人」。S5出道获最佳新人，S8/S9带队夺冠并获MVP。性格内向话少，但场上实力碾压一切。",
    career:[{s:"S5",d:"轮回出道，最佳新人",h:true},{s:"S8",d:"轮回夺冠，获MVP",h:true},{s:"S9",d:"轮回卫冕，获MVP",h:true},{s:"S10",d:"轮回亚军"}],
    relationships:[{name:"江波涛",desc:"副队长，替他说话的人"},{name:"孙翔",desc:"S10转入队友"}],
    honors:["S8/S9 总冠军","S8/S9 MVP","S5 最佳新人","枪王","荣耀联盟第一帅哥"]
  },
  { id:"jiangbotao", name:"江波涛", gameId:"无浪", class:"魔剑士", team:"轮回", teamShort:"轮回", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"副队长", debutSeason:6, avatar:"江",
    bio:"轮回副队长，周泽楷的代言人。S6冬季转会窗从贺武转入轮回。",
    career:[{s:"S6冬",d:"从贺武转入轮回"},{s:"S8/S9",d:"随队夺冠",h:true}],
    relationships:[{name:"周泽楷",desc:"队长，替他发言"}],
    honors:["S8/S9 总冠军"]
  },
  // === 百花 ===
  { id:"yufeng", name:"于锋", gameId:"落花狼藉（原锋芒慧剑）", class:"狂剑士", team:"蓝雨→百花", teamShort:"百花", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长", debutSeason:6, avatar:"锋",
    bio:"S6在蓝雨出道即夺冠并获最佳新人。S8转会百花任队长。",
    career:[{s:"S6",d:"蓝雨出道，夺冠+最佳新人",h:true},{s:"S8起",d:"转会百花，任队长"}],
    relationships:[{name:"喻文州",desc:"蓝雨前队长"},{name:"黄少天",desc:"蓝雨前队友"}],
    honors:["S6 总冠军","S6 最佳新人"]
  },
  { id:"zouyuan", name:"邹远", gameId:"花繁似锦", class:"弹药专家", team:"百花", teamShort:"百花", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"副队长", debutSeason:7, avatar:"远",
    bio:"百花副队长。张佳乐退役后接任队长，于锋来后卸任队长改任副队长。",
    career:[{s:"S7",d:"百花出道"},{s:"S8",d:"接任队长"},{s:"S9",d:"于锋来后改任副队长"}],
    relationships:[{name:"张佳乐",desc:"百花前辈"},{name:"于锋",desc:"现任队长"}],
    honors:[]
  },
  { id:"sunzheping", name:"孙哲平", gameId:"落花狼藉 / 再睡一夏", class:"狂剑士", team:"百花→兴欣→义斩", teamShort:"百花", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长（百花初代）", debutSeason:2, avatar:"孙",
    bio:"百花首任队长。S5因手伤退役，S9短暂复出加入兴欣打挑战赛，S10加入义斩担任替补。",
    career:[{s:"S2-S5",d:"百花队长"},{s:"S5",d:"因手伤退役"},{s:"S9",d:"短暂复出加入兴欣"},{s:"S10",d:"加入义斩（替补）"}],
    relationships:[{name:"张佳乐",desc:"百花搭档"},{name:"叶修",desc:"兴欣时期队长"}],
    honors:[]
  },
  // === 呼啸 ===
  { id:"tanghao", name:"唐昊", gameId:"唐三打（原德里罗）", class:"流氓", team:"百花→呼啸", teamShort:"呼啸", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长", debutSeason:7, avatar:"唐",
    bio:"S7在百花出道，曾以下克上击败林敬言。S8以1000万转会呼啸任队长，S9带队进入四强。",
    career:[{s:"S7",d:"百花出道"},{s:"S8",d:"以1000万转会呼啸，任队长"},{s:"S9",d:"呼啸四强",h:true}],
    relationships:[{name:"林敬言",desc:"曾以下克上击败"},{name:"邹远",desc:"百花前队友"}],
    honors:["S9 四强"]
  },
  // === 雷霆 ===
  { id:"xiaoshiqin", name:"肖时钦", gameId:"生灵灭", class:"机械师", team:"雷霆", teamShort:"雷霆", status:"现役", birthday:"6月23日", height:"180cm", blood:"A型", weapon:"—", role:"队长", debutSeason:4, avatar:"肖",
    bio:"四大战术大师之一，黄金一代成员。雷霆队长，S9曾短暂转会嘉世，S10重回雷霆。",
    career:[{s:"S4",d:"雷霆出道"},{s:"S5起",d:"雷霆队长"},{s:"S9",d:"短暂转会嘉世"},{s:"S10",d:"重回雷霆"}],
    relationships:[{name:"喻文州",desc:"战术大师同行"},{name:"张新杰",desc:"战术大师同行"},{name:"叶修",desc:"战术大师同行"}],
    honors:["四大战术大师之一","黄金一代"]
  },
  // === 虚空 ===
  { id:"lixuan", name:"李轩", gameId:"逢山鬼泣", class:"鬼剑士（阵鬼）", team:"虚空", teamShort:"虚空", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"四轮天舞", role:"队长", debutSeason:4, avatar:"轩",
    bio:"第一阵鬼，黄金一代成员。虚空队长，与吴羽策组成最佳搭档（S8/S9）。",
    career:[{s:"S4起",d:"虚空队长"},{s:"S8/S9",d:"最佳搭档",h:true}],
    relationships:[{name:"吴羽策",desc:"最佳搭档"}],
    honors:["第一阵鬼","黄金一代","S8/S9 最佳搭档"]
  },
  { id:"wuyuce", name:"吴羽策", gameId:"鬼刻", class:"鬼剑士（阵斩双修）", team:"虚空", teamShort:"虚空", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"红莲天舞", role:"副队长", debutSeason:5, avatar:"吴",
    bio:"虚空副队长，阵斩双修的鬼剑士。与李轩组成最佳搭档。",
    career:[{s:"S5起",d:"虚空副队长"},{s:"S8/S9",d:"最佳搭档",h:true}],
    relationships:[{name:"李轩",desc:"队长，最佳搭档"}],
    honors:["S8/S9 最佳搭档"]
  },
  // === 烟雨 ===
  { id:"chuyunxiu", name:"楚云秀", gameId:"风城烟雨", class:"元素法师", team:"烟雨", teamShort:"烟雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长", debutSeason:4, avatar:"楚",
    bio:"联盟最强女选手，黄金一代成员。烟雨队长，S8带队进入四强。",
    career:[{s:"S4起",d:"烟雨队长"},{s:"S8",d:"烟雨四强",h:true}],
    relationships:[{name:"苏沐橙",desc:"联盟知名女选手"}],
    honors:["联盟最强女选手","黄金一代","S8 四强"]
  },
  { id:"lihua", name:"李华", gameId:"林暗草惊", class:"忍者", team:"烟雨", teamShort:"烟雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"副队长", debutSeason:7, avatar:"华",
    bio:"第一忍者，烟雨副队长。",
    career:[{s:"S7起",d:"烟雨副队长"}],
    relationships:[{name:"楚云秀",desc:"队长"}],
    honors:["第一忍者"]
  },
  // === 三零一 ===
  { id:"yangcong", name:"杨聪", gameId:"风景杀", class:"刺客", team:"三零一", teamShort:"三零一", status:"现役", birthday:"11月21日", height:"—", blood:"—", weapon:"缭影乱武", role:"队长", debutSeason:3, avatar:"聪",
    bio:"三零一队长，S3出道的老牌刺客选手。",
    career:[{s:"S3起",d:"三零一队长"}],
    relationships:[],
    honors:[]
  },
  // === 义斩 ===
  { id:"louguanning", name:"楼冠宁", gameId:"斩楼兰", class:"狂剑士", team:"义斩", teamShort:"义斩", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长", debutSeason:9, avatar:"楼",
    bio:"义斩队长，S9出道。",
    career:[{s:"S9起",d:"义斩队长"}],
    relationships:[],
    honors:[]
  },
  // === 皇风 ===
  { id:"tiansen", name:"田森", gameId:"扫地焚香", class:"驱魔师", team:"皇风", teamShort:"皇风", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长（第三任）", debutSeason:4, avatar:"田",
    bio:"第一驱魔师，黄金一代成员。皇风第三任队长，S8入选全明星。",
    career:[{s:"S4起",d:"皇风队长"},{s:"S8",d:"全明星",h:true}],
    relationships:[],
    honors:["第一驱魔师","黄金一代","S8 全明星"]
  },
  // === 神奇 ===
  { id:"heming", name:"贺铭", gameId:"鲁洛（原法不容情）", class:"元素法师", team:"嘉世→雷霆→神奇", teamShort:"神奇", status:"现役", birthday:"3月17日", height:"175cm", blood:"A型", weapon:"—", role:"队长", debutSeason:6, avatar:"贺",
    bio:"嘉世出身，经雷霆转会神奇，担任队长。",
    career:[{s:"S6-S8",d:"嘉世"},{s:"S9",d:"转会雷霆"},{s:"S10",d:"转会神奇，任队长"}],
    relationships:[],
    honors:[]
  },
  // === 特殊角色（非选手） ===
  { id:"yeqiu", name:"叶秋", gameId:"—", class:"—", team:"嘉世", teamShort:"嘉世", status:"—", birthday:"5月29日", height:"178cm", blood:"AB型", weapon:"—", role:"—", debutSeason:0, avatar:"秋",
    bio:"叶修的双胞胎弟弟，相貌与叶修一模一样。曾代替叶修出席嘉世的商业活动和公众场合，帮助叶修隐瞒身份。在叶修被嘉世驱逐后，叶秋也曾短暂出现在公众视野中。",
    career:[],
    relationships:[{name:"叶修",desc:"双胞胎哥哥"},{name:"苏沐橙",desc:"通过叶修认识"}],
    honors:[]
  },
  { id:"chenxi", name:"陈果", gameId:"—", class:"—", team:"兴欣", teamShort:"兴欣", status:"—", birthday:"—", height:"—", blood:"—", weapon:"—", role:"老板/经理", debutSeason:0, avatar:"果",
    bio:"兴欣网吧老板，兴欣战队的创建者和管理者。性格豪爽直率，在叶修最困难的时候收留了他，是兴欣战队背后的重要支撑。",
    career:[],
    relationships:[{name:"叶修",desc:"兴欣队长/网吧常客"},{name:"唐柔",desc:"兴欣队员/好友"}],
    honors:[]
  },
  { id:"taoxuan", name:"陶轩", gameId:"—", class:"—", team:"嘉世", teamShort:"嘉世", status:"—", birthday:"—", height:"—", blood:"—", weapon:"—", role:"老板", debutSeason:0, avatar:"陶",
    bio:"嘉世俱乐部老板，做出驱逐叶修决定的人。在叶修带领嘉世三连冠后，因商业利益考量将叶修踢出战队。",
    career:[],
    relationships:[{name:"叶修",desc:"被他驱逐的选手"},{name:"孙翔",desc:"他引进接替叶修"}],
    honors:[]
  },

  // ===== 以下为补充选手（原著配角） =====

  // 嘉世早期
  { id:"wuxuefeng", name:"吴雪峰", gameId:"气冲云水", class:"气功师", team:"嘉世", teamShort:"嘉世", status:"退役", birthday:"11月8日", height:"181cm", blood:"O型", weapon:"—", role:"副队长", debutSeason:1, avatar:"吴",
    bio:"嘉世首任副队长，叶修的早期搭档。S1-S3效力嘉世，S3后退役。",
    career:[{s:"S1-S3",d:"嘉世副队长"},{s:"S3",d:"S3后退役"}],
    relationships:[{name:"叶修",desc:"嘉世队长/搭档"}],
    honors:[]
  },
  { id:"xiaming", name:"夏茗", gameId:"苍天", class:"神枪手", team:"嘉世", teamShort:"嘉世", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:1, avatar:"茗",
    bio:"嘉世初代成员，电影版角色。神枪手选手。",
    career:[{s:"S1-S4",d:"嘉世队员"}],
    relationships:[{name:"叶修",desc:"嘉世队长"}],
    honors:[]
  },
  { id:"yinxiong", name:"殷雄", gameId:"织影", class:"牧师", team:"嘉世", teamShort:"嘉世", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:1, avatar:"殷",
    bio:"嘉世初代成员，电影版角色。牧师选手。",
    career:[{s:"S1-S4",d:"嘉世队员"}],
    relationships:[{name:"叶修",desc:"嘉世队长"}],
    honors:[]
  },
  { id:"qintianran", name:"秦天然", gameId:"法不容情", class:"元素法师", team:"嘉世", teamShort:"嘉世", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:1, avatar:"秦",
    bio:"嘉世初代成员，电影版角色。元素法师选手。",
    career:[{s:"S1-S6",d:"嘉世队员"}],
    relationships:[{name:"叶修",desc:"嘉世队长"}],
    honors:[]
  },
  { id:"xuemingkai", name:"薛明凯", gameId:"暗无天日", class:"魔剑士", team:"嘉世", teamShort:"嘉世", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:1, avatar:"薛",
    bio:"嘉世初代成员，电影版角色。魔剑士选手。",
    career:[{s:"S1-S7",d:"嘉世队员"}],
    relationships:[{name:"叶修",desc:"嘉世队长"}],
    honors:[]
  },
  { id:"wangze", name:"王泽", gameId:"火柴", class:"神枪手", team:"嘉世→神奇", teamShort:"嘉世", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"泽",
    bio:"嘉世出身，S10转会神奇。",
    career:[{s:"S7-S9",d:"嘉世"},{s:"S10",d:"转会神奇"}],
    relationships:[],
    honors:[]
  },
  { id:"shenjian", name:"申建", gameId:"连进", class:"拳法家", team:"嘉世→神奇", teamShort:"嘉世", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"申",
    bio:"嘉世出身，S10转会神奇。",
    career:[{s:"S8-S9",d:"嘉世"},{s:"S10",d:"转会神奇"}],
    relationships:[],
    honors:[]
  },
  { id:"guoyang", name:"郭阳", gameId:"气冲云水", class:"气功师", team:"嘉世→呼啸", teamShort:"嘉世", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"阳",
    bio:"嘉世出身，S9转会呼啸。",
    career:[{s:"S8",d:"嘉世"},{s:"S9-S10",d:"呼啸"}],
    relationships:[],
    honors:[]
  },
  { id:"zhangjiaxing", name:"张家兴", gameId:"织影", class:"牧师", team:"嘉世→雷霆", teamShort:"嘉世", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"张",
    bio:"嘉世出身，S10转会雷霆。",
    career:[{s:"S9",d:"嘉世"},{s:"S10",d:"雷霆"}],
    relationships:[],
    honors:[]
  },
  { id:"wenli", name:"闻理", gameId:"—", class:"—", team:"新嘉世", teamShort:"嘉世", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:11, avatar:"闻",
    bio:"嘉世训练营出身，新嘉世成员。",
    career:[{s:"S11起",d:"新嘉世"}],
    relationships:[{name:"邱非",desc:"新嘉世队长"}],
    honors:[]
  },

  // 蓝雨
  { id:"fangshijing", name:"方世镜", gameId:"索克萨尔", class:"术士", team:"蓝雨", teamShort:"蓝雨", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长（第二任）", debutSeason:0, avatar:"方",
    bio:"蓝雨第二任队长，接替魏琛。后退役。",
    career:[{s:"S2-S3",d:"蓝雨队长"}],
    relationships:[{name:"魏琛",desc:"前任队长"},{name:"喻文州",desc:"后任队长"}],
    honors:[]
  },
  { id:"zhengxuan", name:"郑轩", gameId:"枪淋弹雨", class:"弹药专家", team:"蓝雨", teamShort:"蓝雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"游离", role:"队员", debutSeason:4, avatar:"郑",
    bio:"蓝雨弹药专家，S4出道。蓝雨主力成员。",
    career:[{s:"S4起",d:"蓝雨队员"}],
    relationships:[{name:"喻文州",desc:"队长"},{name:"黄少天",desc:"队友"}],
    honors:[]
  },
  { id:"songxiao", name:"宋晓", gameId:"涛落沙明", class:"气功师", team:"蓝雨", teamShort:"蓝雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:5, avatar:"宋",
    bio:"蓝雨气功师，被称为「关键先生」。S5出道。",
    career:[{s:"S5起",d:"蓝雨队员"}],
    relationships:[{name:"喻文州",desc:"队长"}],
    honors:["关键先生"]
  },
  { id:"linfeng_lanyu", name:"林枫", gameId:"—", class:"盗贼", team:"蓝雨→呼啸", teamShort:"蓝雨", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"枫",
    bio:"蓝雨训练营出身，S7出道。S10转会呼啸。",
    career:[{s:"S7-S9",d:"蓝雨"},{s:"S10",d:"转会呼啸"}],
    relationships:[{name:"喻文州",desc:"蓝雨队长"}],
    honors:[]
  },
  { id:"xujingxi", name:"徐景熙", gameId:"灵魂语者", class:"守护天使", team:"蓝雨", teamShort:"蓝雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"徐",
    bio:"蓝雨守护天使，S7出道。",
    career:[{s:"S7起",d:"蓝雨队员"}],
    relationships:[{name:"喻文州",desc:"队长"}],
    honors:[]
  },
  { id:"liyuan", name:"李远", gameId:"八音符", class:"召唤师", team:"蓝雨", teamShort:"蓝雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"远",
    bio:"蓝雨召唤师，S8出道。",
    career:[{s:"S8起",d:"蓝雨队员"}],
    relationships:[{name:"喻文州",desc:"队长"}],
    honors:[]
  },

  // 微草
  { id:"linjie", name:"林杰", gameId:"王不留行", class:"魔道学者", team:"微草", teamShort:"微草", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"灭绝星辰", role:"队长（首任）", debutSeason:1, avatar:"杰",
    bio:"微草首任队长，S2后退役。王不留行的初代使用者。",
    career:[{s:"S1-S2",d:"微草队长"}],
    relationships:[{name:"王杰希",desc:"后任队长"}],
    honors:[]
  },
  { id:"dengfusheng", name:"邓复升", gameId:"独活", class:"骑士", team:"微草", teamShort:"微草", status:"退役", birthday:"2月20日", height:"177cm", blood:"A型", weapon:"—", role:"副队长", debutSeason:3, avatar:"邓",
    bio:"微草副队长，被称为「第一骑士」。S5/S7随队夺冠，S8后退役。",
    career:[{s:"S3-S8",d:"微草副队长"},{s:"S5",d:"冠军"},{s:"S7",d:"冠军"}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:["第一骑士","S5/S7 总冠军"]
  },
  { id:"liufei", name:"柳非", gameId:"叶下红", class:"神枪手", team:"微草", teamShort:"微草", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:6, avatar:"柳",
    bio:"微草神枪手，S6出道。",
    career:[{s:"S6起",d:"微草队员"}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:[]
  },
  { id:"zhouyebai", name:"周烨柏", gameId:"使君子", class:"鬼剑士", team:"微草", teamShort:"微草", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:6, avatar:"周",
    bio:"微草鬼剑士，S6出道。",
    career:[{s:"S6起",d:"微草队员"}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:[]
  },
  { id:"yuanbaiqing", name:"袁柏清", gameId:"冬虫夏草 / 防风", class:"牧师 / 守护天使", team:"微草", teamShort:"微草", status:"现役", birthday:"10月12日", height:"179cm", blood:"O型", weapon:"—", role:"队员", debutSeason:7, avatar:"袁",
    bio:"微草牧师/守护天使，S7出道。",
    career:[{s:"S7起",d:"微草队员"}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:[]
  },
  { id:"xiaoyun", name:"肖云", gameId:"大戟", class:"—", team:"微草", teamShort:"微草", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"肖",
    bio:"微草队员，S8出道。",
    career:[{s:"S8起",d:"微草队员"}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:[]
  },
  { id:"liji", name:"李济", gameId:"弹无痕", class:"神枪手", team:"微草", teamShort:"微草", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"济",
    bio:"微草神枪手。",
    career:[{s:"S10",d:"微草队员"}],
    relationships:[{name:"王杰希",desc:"队长"}],
    honors:[]
  },

  // 霸图
  { id:"liyibo", name:"李艺博", gameId:"—", class:"—", team:"霸图", teamShort:"霸图", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:1, avatar:"李",
    bio:"霸图初代成员，S4后退役。后成为知名解说嘉宾。",
    career:[{s:"S1-S4",d:"霸图队员"},{s:"S4后",d:"退役/成为解说"}],
    relationships:[{name:"韩文清",desc:"队长"}],
    honors:[]
  },
  { id:"jileng", name:"季冷", gameId:"季冷", class:"刺客", team:"霸图", teamShort:"霸图", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:1, avatar:"季",
    bio:"霸图初代刺客，S4后退役。",
    career:[{s:"S1-S4",d:"霸图队员"}],
    relationships:[{name:"韩文清",desc:"队长"}],
    honors:[]
  },
  { id:"baiyanfei", name:"白言飞", gameId:"罗塔", class:"元素法师", team:"霸图", teamShort:"霸图", status:"现役", birthday:"1月15日", height:"176cm", blood:"A型", weapon:"—", role:"队员", debutSeason:5, avatar:"白",
    bio:"霸图元素法师，S5出道。被称为「炮塔」。",
    career:[{s:"S5起",d:"霸图队员"}],
    relationships:[{name:"韩文清",desc:"队长"}],
    honors:["炮塔"]
  },
  { id:"jiashiming", name:"贾世明", gameId:"—", class:"拳法家", team:"霸图→皇风→虚空", teamShort:"霸图", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"贾",
    bio:"霸图出身，后转会皇风，再转会虚空。",
    career:[{s:"S5-S6",d:"霸图"},{s:"S6",d:"转会皇风"},{s:"S10",d:"转会虚空"}],
    relationships:[],
    honors:[]
  },
  { id:"zhouguangyi", name:"周光义", gameId:"季冷", class:"刺客", team:"霸图→百花", teamShort:"霸图", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:5, avatar:"周",
    bio:"霸图出身刺客，S9转会百花。",
    career:[{s:"S5-S8",d:"霸图"},{s:"S9起",d:"转会百花"}],
    relationships:[],
    honors:[]
  },
  { id:"wangchixuan", name:"王池轩", gameId:"—", class:"神枪手", team:"霸图", teamShort:"霸图", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"王",
    bio:"霸图神枪手。",
    career:[{s:"S7-S9",d:"霸图队员"}],
    relationships:[{name:"韩文清",desc:"队长"}],
    honors:[]
  },
  { id:"qinmuyun", name:"秦牧云", gameId:"零下九度", class:"神枪手", team:"霸图", teamShort:"霸图", status:"现役", birthday:"1月23日", height:"182cm", blood:"O型", weapon:"—", role:"队员", debutSeason:9, avatar:"秦",
    bio:"霸图神枪手，S9出道。",
    career:[{s:"S9起",d:"霸图队员"}],
    relationships:[{name:"韩文清",desc:"队长"}],
    honors:[]
  },
  { id:"songqiying", name:"宋奇英", gameId:"长河落日", class:"拳法家", team:"霸图", teamShort:"霸图", status:"现役", birthday:"8月24日", height:"173cm", blood:"A型", weapon:"—", role:"队员", debutSeason:10, avatar:"宋",
    bio:"霸图拳法家，S10出道。被称为韩文清的接班人。",
    career:[{s:"S10起",d:"霸图队员"}],
    relationships:[{name:"韩文清",desc:"前辈/队长"}],
    honors:["韩文清接班人"]
  },

  // 轮回
  { id:"duming", name:"杜明", gameId:"吴霜钩月", class:"剑客", team:"轮回", teamShort:"轮回", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"杜",
    bio:"轮回剑客。",
    career:[{s:"S7起",d:"轮回队员"}],
    relationships:[{name:"周泽楷",desc:"队长"}],
    honors:[]
  },
  { id:"fangminghua", name:"方明华", gameId:"笑歌自若", class:"牧师", team:"轮回", teamShort:"轮回", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"方",
    bio:"轮回牧师。",
    career:[{s:"S7起",d:"轮回队员"}],
    relationships:[{name:"周泽楷",desc:"队长"}],
    honors:[]
  },
  { id:"lvboyuan", name:"吕泊远", gameId:"云山乱", class:"柔道", team:"轮回", teamShort:"轮回", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"吕",
    bio:"轮回柔道选手。",
    career:[{s:"S7起",d:"轮回队员"}],
    relationships:[{name:"周泽楷",desc:"队长"}],
    honors:[]
  },
  { id:"wuqi", name:"吴启", gameId:"残忍静默", class:"刺客", team:"轮回", teamShort:"轮回", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"启",
    bio:"轮回刺客。",
    career:[{s:"S7起",d:"轮回队员"}],
    relationships:[{name:"周泽楷",desc:"队长"}],
    honors:[]
  },

  // 百花
  { id:"mochenchen", name:"莫楚辰", gameId:"傲风残花", class:"牧师", team:"百花", teamShort:"百花", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"莫",
    bio:"百花牧师。",
    career:[{s:"S8起",d:"百花队员"}],
    relationships:[{name:"于锋",desc:"队长"}],
    honors:[]
  },
  { id:"zengxinran", name:"曾信然", gameId:"德里罗", class:"流氓", team:"百花", teamShort:"百花", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"曾",
    bio:"百花流氓。",
    career:[{s:"S8起",d:"百花队员"}],
    relationships:[{name:"于锋",desc:"队长"}],
    honors:[]
  },
  { id:"zhangwei", name:"张伟", gameId:"森罗", class:"魔道学者", team:"百花", teamShort:"百花", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"伟",
    bio:"百花魔道学者。",
    career:[{s:"S8起",d:"百花队员"}],
    relationships:[{name:"于锋",desc:"队长"}],
    honors:[]
  },
  { id:"zhuxiaoping", name:"朱效平", gameId:"风刻", class:"召唤师", team:"百花", teamShort:"百花", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"朱",
    bio:"百花召唤师。",
    career:[{s:"S8起",d:"百花队员"}],
    relationships:[{name:"于锋",desc:"队长"}],
    honors:[]
  },

  // 雷霆
  { id:"fangxuecai", name:"方学才", gameId:"鬼魅才", class:"—", team:"雷霆", teamShort:"雷霆", status:"现役", birthday:"5月4日", height:"179cm", blood:"O型", weapon:"—", role:"副队长", debutSeason:5, avatar:"方",
    bio:"雷霆副队长，长期效力雷霆。",
    career:[{s:"S4起",d:"雷霆副队长"}],
    relationships:[{name:"肖时钦",desc:"队长"}],
    honors:[]
  },
  { id:"daiyanqi", name:"戴妍琦", gameId:"鸾辂音尘", class:"—", team:"雷霆", teamShort:"雷霆", status:"现役", birthday:"5月25日", height:"162cm", blood:"AB型", weapon:"—", role:"队员", debutSeason:8, avatar:"戴",
    bio:"雷霆队员，S8出道。联盟少有的女选手之一。",
    career:[{s:"S7起",d:"雷霆队员"}],
    relationships:[{name:"肖时钦",desc:"队长"}],
    honors:[]
  },
  { id:"zhangqi", name:"张奇", gameId:"—", class:"—", team:"雷霆", teamShort:"雷霆", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:9, avatar:"奇",
    bio:"雷霆队员，S9出道。",
    career:[{s:"S9起",d:"雷霆队员"}],
    relationships:[{name:"肖时钦",desc:"队长"}],
    honors:[]
  },
  { id:"luyining", name:"鲁奕宁", gameId:"欲盖弥彰", class:"神枪手", team:"烟雨→雷霆", teamShort:"雷霆", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"鲁",
    bio:"烟雨出身，S10转会雷霆。",
    career:[{s:"S9",d:"烟雨"},{s:"S10",d:"转会雷霆"}],
    relationships:[],
    honors:[]
  },
  { id:"chengtai", name:"程泰", gameId:"碎随风", class:"—", team:"雷霆", teamShort:"雷霆", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:0, avatar:"程",
    bio:"雷霆队员。",
    career:[{s:"S10",d:"雷霆队员"}],
    relationships:[{name:"肖时钦",desc:"队长"}],
    honors:[]
  },
  { id:"mijiuyuan", name:"米修远", gameId:"—", class:"—", team:"雷霆", teamShort:"雷霆", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:10, avatar:"米",
    bio:"雷霆队员，S10出道。",
    career:[{s:"S10起",d:"雷霆队员"}],
    relationships:[{name:"肖时钦",desc:"队长"}],
    honors:[]
  },

  // 虚空
  { id:"lixun", name:"李迅", gameId:"鬼灯萤火", class:"刺客", team:"虚空", teamShort:"虚空", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:5, avatar:"迅",
    bio:"虚空刺客。",
    career:[{s:"S5起",d:"虚空队员"}],
    relationships:[{name:"李轩",desc:"队长"}],
    honors:[]
  },
  { id:"gezhaolan", name:"葛兆蓝", gameId:"全透明", class:"弹药专家", team:"虚空", teamShort:"虚空", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:5, avatar:"葛",
    bio:"虚空弹药专家。",
    career:[{s:"S5起",d:"虚空队员"}],
    relationships:[{name:"李轩",desc:"队长"}],
    honors:[]
  },
  { id:"yanghaoxuan", name:"杨昊轩", gameId:"半透明", class:"枪炮师", team:"虚空", teamShort:"虚空", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:5, avatar:"杨",
    bio:"虚空枪炮师。",
    career:[{s:"S5起",d:"虚空队员"}],
    relationships:[{name:"李轩",desc:"队长"}],
    honors:[]
  },
  { id:"tanglisheng", name:"唐礼升", gameId:"守灵者", class:"守护天使", team:"虚空", teamShort:"虚空", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:5, avatar:"唐",
    bio:"虚空守护天使。",
    career:[{s:"S5起",d:"虚空队员"}],
    relationships:[{name:"李轩",desc:"队长"}],
    honors:[]
  },
  { id:"gaicaijie", name:"盖才捷", gameId:"青之驱", class:"驱魔师", team:"虚空", teamShort:"虚空", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:9, avatar:"盖",
    bio:"虚空驱魔师，S9出道。",
    career:[{s:"S9起",d:"虚空队员"}],
    relationships:[{name:"李轩",desc:"队长"}],
    honors:[]
  },

  // 烟雨
  { id:"shukexin", name:"舒可欣", gameId:"莫敢回手", class:"神枪手", team:"烟雨", teamShort:"烟雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:4, avatar:"欣",
    bio:"烟雨神枪手，舒可怡的姐妹。",
    career:[{s:"S4起",d:"烟雨队员"}],
    relationships:[{name:"楚云秀",desc:"队长"},{name:"舒可怡",desc:"姐妹/队友"}],
    honors:[]
  },
  { id:"shukexiyi", name:"舒可怡", gameId:"谁不低头", class:"神枪手", team:"烟雨", teamShort:"烟雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:4, avatar:"怡",
    bio:"烟雨神枪手，舒可欣的姐妹。",
    career:[{s:"S4起",d:"烟雨队员"}],
    relationships:[{name:"楚云秀",desc:"队长"},{name:"舒可欣",desc:"姐妹/队友"}],
    honors:[]
  },
  { id:"sunliang", name:"孙亮", gameId:"—", class:"拳法家", team:"烟雨", teamShort:"烟雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"亮",
    bio:"烟雨拳法家。",
    career:[{s:"S8起",d:"烟雨队员"}],
    relationships:[{name:"楚云秀",desc:"队长"}],
    honors:[]
  },
  { id:"baiqi", name:"白祁", gameId:"—", class:"—", team:"烟雨", teamShort:"烟雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"祁",
    bio:"烟雨队员。",
    career:[{s:"S8起",d:"烟雨队员"}],
    relationships:[{name:"楚云秀",desc:"队长"}],
    honors:[]
  },
  { id:"fengxiangming", name:"冯向明", gameId:"—", class:"—", team:"烟雨", teamShort:"烟雨", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:8, avatar:"冯",
    bio:"烟雨队员。",
    career:[{s:"S8起",d:"烟雨队员"}],
    relationships:[{name:"楚云秀",desc:"队长"}],
    honors:[]
  },

  // 三零一
  { id:"sunmingjin", name:"孙明进", gameId:"星辰剑 / 零零柒", class:"剑客 / 守护天使", team:"三零一", teamShort:"三零一", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:4, avatar:"孙",
    bio:"三零一队员，可切换剑客与守护天使。",
    career:[{s:"S3起",d:"三零一队员"}],
    relationships:[{name:"杨聪",desc:"队长"}],
    honors:[]
  },
  { id:"gaojie", name:"高杰", gameId:"—", class:"—", team:"三零一", teamShort:"三零一", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:4, avatar:"高",
    bio:"三零一队员。",
    career:[{s:"S4起",d:"三零一队员"}],
    relationships:[{name:"杨聪",desc:"队长"}],
    honors:[]
  },
  { id:"baishu", name:"白庶", gameId:"潮汐", class:"骑士", team:"三零一", teamShort:"三零一", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:7, avatar:"白",
    bio:"三零一骑士，S9接手许斌的角色。",
    career:[{s:"S7起",d:"三零一队员"}],
    relationships:[{name:"杨聪",desc:"队长"}],
    honors:[]
  },
  { id:"liyihui", name:"李亦辉", gameId:"搬山", class:"柔道", team:"微草→三零一", teamShort:"三零一", status:"转会", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:4, avatar:"李",
    bio:"微草出身柔道，S9前转会三零一。",
    career:[{s:"S4-S8",d:"微草"},{s:"S9起",d:"转会三零一"}],
    relationships:[],
    honors:[]
  },

  // 义斩
  { id:"zouyunhai", name:"邹云海", gameId:"前方隔海", class:"元素法师", team:"义斩", teamShort:"义斩", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:9, avatar:"邹",
    bio:"义斩元素法师。",
    career:[{s:"S9起",d:"义斩队员"}],
    relationships:[{name:"楼冠宁",desc:"队长"}],
    honors:[]
  },
  { id:"wenkebei", name:"文客北", gameId:"归去来兮", class:"战斗法师", team:"义斩", teamShort:"义斩", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:9, avatar:"文",
    bio:"义斩战斗法师。",
    career:[{s:"S9起",d:"义斩队员"}],
    relationships:[{name:"楼冠宁",desc:"队长"}],
    honors:[]
  },
  { id:"guxiye", name:"顾夕夜", gameId:"夜汐", class:"柔道", team:"义斩", teamShort:"义斩", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:9, avatar:"顾",
    bio:"义斩柔道选手。",
    career:[{s:"S9起",d:"义斩队员"}],
    relationships:[{name:"楼冠宁",desc:"队长"}],
    honors:[]
  },
  { id:"zhongyeli", name:"钟叶离", gameId:"千叶离若", class:"牧师", team:"义斩", teamShort:"义斩", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:9, avatar:"钟",
    bio:"义斩牧师。",
    career:[{s:"S9起",d:"义斩队员"}],
    relationships:[{name:"楼冠宁",desc:"队长"}],
    honors:[]
  },
  { id:"ningyuan", name:"宁远", gameId:"—", class:"气功师", team:"义斩", teamShort:"义斩", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:9, avatar:"宁",
    bio:"义斩气功师。",
    career:[{s:"S9起",d:"义斩队员"}],
    relationships:[{name:"楼冠宁",desc:"队长"}],
    honors:[]
  },

  // 皇风
  { id:"guomingyu", name:"郭明宇", gameId:"扫地焚香", class:"驱魔师", team:"皇风", teamShort:"皇风", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长（首任）", debutSeason:1, avatar:"郭",
    bio:"皇风首任队长，扫地焚香的初代使用者。S1亚军（被叶修嘉世击败）。",
    career:[{s:"S1",d:"皇风队长/S1亚军"}],
    relationships:[{name:"叶修",desc:"S1决赛对手"}],
    honors:["S1 亚军"]
  },
  { id:"lvliang", name:"吕良", gameId:"扫地焚香", class:"驱魔师", team:"皇风", teamShort:"皇风", status:"退役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长（第二任）", debutSeason:2, avatar:"吕",
    bio:"皇风第二任队长，扫地焚香的第二代使用者。",
    career:[{s:"S2-S3",d:"皇风队长"}],
    relationships:[],
    honors:[]
  },
  { id:"renjunchi", name:"任俊驰", gameId:"温柔天使", class:"守护天使", team:"皇风", teamShort:"皇风", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:1, avatar:"任",
    bio:"皇风守护天使，长期效力。",
    career:[{s:"S1起",d:"皇风队员"}],
    relationships:[{name:"田森",desc:"队长"}],
    honors:[]
  },

  // 神奇
  { id:"guoshao", name:"郭少", gameId:"贝克克", class:"枪炮师", team:"神奇", teamShort:"神奇", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队长（首任）", debutSeason:10, avatar:"郭",
    bio:"神奇首任队长，后让位给贺铭。",
    career:[{s:"S10",d:"神奇队长→让位"}],
    relationships:[{name:"贺铭",desc:"后任队长"}],
    honors:[]
  },
  { id:"xiangyuanwei", name:"向元纬", gameId:"哈里斯", class:"魔剑士", team:"神奇", teamShort:"神奇", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:10, avatar:"向",
    bio:"神奇魔剑士。",
    career:[{s:"S10",d:"神奇队员"}],
    relationships:[{name:"贺铭",desc:"队长"}],
    honors:[]
  },
  { id:"jiaxing", name:"贾兴", gameId:"傲天斗法", class:"战斗法师", team:"神奇", teamShort:"神奇", status:"现役", birthday:"—", height:"—", blood:"—", weapon:"—", role:"队员", debutSeason:10, avatar:"兴",
    bio:"神奇战斗法师。",
    career:[{s:"S10",d:"神奇队员"}],
    relationships:[{name:"贺铭",desc:"队长"}],
    honors:[]
  }
];

const TEAMS = [
  { id:"all", name:"全部" },
  { id:"嘉世", name:"嘉世" },
  { id:"兴欣", name:"兴欣" },
  { id:"蓝雨", name:"蓝雨" },
  { id:"微草", name:"微草" },
  { id:"霸图", name:"霸图" },
  { id:"轮回", name:"轮回" },
  { id:"百花", name:"百花" },
  { id:"呼啸", name:"呼啸" },
  { id:"雷霆", name:"雷霆" },
  { id:"虚空", name:"虚空" },
  { id:"烟雨", name:"烟雨" },
  { id:"三零一", name:"三零一" },
  { id:"义斩", name:"义斩" },
  { id:"皇风", name:"皇风" },
  { id:"神奇", name:"神奇" }
];
