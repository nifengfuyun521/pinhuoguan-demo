import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ShoppingCart, Gift, Star, Sparkles, ArrowRight, Quote } from 'lucide-react';
import { GiftConcierge } from '../store/GiftConcierge';
import { ProductDetail } from '../store/ProductDetail';

const categories = [
  "全部",
  "典藏佳酿",
  "抗衰逆龄",
  "功能膳食",
  "时令鲜果",
  "尊享礼盒",
  "茗茶雅道",
  "私密养护",
  "特膳调理",
  "物联科技",
  "空间能量",
];

const products = [
  {
    id: 5,
    title: "珍稀白松露精华油",
    subtitle: "晨曦中的森林馈赠",
    price: "¥1,680",
    category: "抗衰逆龄",
    image: "https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRydWZmbGUlMjBvaWwlMjBib3R0bGUlMjBsdXh1cnklMjBjb3NtZXRpYyUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY0NTczMjAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    tag: "回购王",
    isFeatured: true,
    selectionReason: "熬夜急救神器，第二天脸软软的，完全看不出倦容。味道很高级，用着就是享受。",
    qualityPoints: [
      "源自皮埃蒙特森林核心产区",
      "6小时鲜活萃取，保留98%活性",
      "0水0防腐，以油养肤"
    ],
    story: {
      title: "晨曦中的森林馈赠",
      content: "每一滴精华，都始于意大利北部清晨5点的薄雾中。寻松犬凭嗅觉定位深埋地下的白松露，采摘必须在日出前完成。这不是流水线上的工业品，而是大自然凝结的时光。",
      process: "为了留住白松露稍纵即逝的活性，我们放弃了高效的高温提取，坚持采用耗时3倍的低温油萃技术。配方师进行了108次肤感调试，才平衡了滋润度与吸收力，让它触肤即融，润而不腻。",
      moment: "结束了一天高强度的工作，卸妆洗脸后，滴两滴在掌心温热。闭上眼深呼吸，独特的森林泥土气息让人瞬间放松。轻轻按压上脸，感觉整个人都被温柔地包裹，这是属于你自己的治愈时刻。",
      curator: {
        name: "Elaine",
        title: "资深美妆买手",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1739667910465-78029d0bab1a?q=80&w=800&auto=format&fit=crop", caption: "如晨露般轻盈的质地" },
      { url: "https://images.unsplash.com/photo-1630079950532-5893d504da8c?q=80&w=800&auto=format&fit=crop", caption: "享受片刻的护肤仪式" },
      { url: "https://images.unsplash.com/photo-1464913898896-624cfa9c3d77?q=80&w=800&auto=format&fit=crop", caption: "源自阿尔巴森林的纯净" }
    ],
    specifications: [
      { label: "产地", value: "意大利皮埃蒙特" },
      { label: "核心成分", value: "白松露提取物、角鲨烷" },
      { label: "净含量", value: "30ml" },
      { label: "适用肤质", value: "全肤质适用" }
    ]
  },
  {
    id: 6,
    title: "6年根红参切片",
    subtitle: "守候六年的承诺",
    price: "¥560",
    category: "功能膳食",
    image: "https://images.unsplash.com/photo-1735815814303-0560d30455eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMHJlZCUyMGdpbnNlbmclMjByb290cyUyMHNsaWNlc3xlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    tag: "滋补",
    selectionReason: "感觉累的时候含一片，精神马上就回来了。送长辈也很合适，都知道是好东西。",
    qualityPoints: [
      "严选长白山6年足龄人参",
      "九蒸九晒传统古法炮制",
      "无糖渍工艺，参味纯正"
    ],
    story: {
      title: "守候六年的承诺",
      content: "人参生长六年，吸尽土地精华。我们坚持只用足龄参，哪怕成本高出30%。老药工说：'滋补的东西，骗不了身体。' 这一片，是对身体最诚恳的交代。",
      process: "传统九蒸九晒工艺极其考验耐心。每一次蒸晒都要精准把控火候和天气，历经整整45天，直到参片呈现出通透的琥珀色。我们坚持手工切片，剔除所有品相不佳的边角料，只保留参体最精华的中段。",
      moment: "下午三点，会议间隙感到疲惫时，含一片在口中。不需要繁琐的冲泡，淡淡的参香在唇齿间弥漫，元气慢慢回升。那一刻，仿佛重新找回了掌控生活的力量。",
      curator: {
        name: "老张",
        title: "中医世家传人",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1701933810995-3331d9ff463b?q=80&w=800&auto=format&fit=crop", caption: "通透琥珀色的切片" },
      { url: "https://images.unsplash.com/photo-1546637857-90b52f113e45?q=80&w=800&auto=format&fit=crop", caption: "简单的温水冲泡" },
      { url: "https://images.unsplash.com/photo-1662803370162-72886fde3e33?q=80&w=800&auto=format&fit=crop", caption: "办公室里的元气补给" }
    ],
    specifications: [
      { label: "原料产地", value: "吉林长白山" },
      { label: "配料", value: "6年根红参" },
      { label: "净含量", value: "50g (约25-30片)" },
      { label: "食用方法", value: "含服、泡茶、炖汤" }
    ]
  },
  {
    id: 1,
    title: "手作粗陶茶壶",
    subtitle: "指尖上的修行",
    price: "¥1,280",
    category: "茗茶雅道",
    image: "https://images.unsplash.com/photo-1584428885051-d80a38d86b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjB0ZWFwb3QlMjB3YWJpJTIwc2FiaXxlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    tag: "限量",
    selectionReason: "手感温润，出水断水都很利落。每一把都不一样，自用或待客都很显品味。",
    qualityPoints: [
      "原矿粗陶，透气性极佳",
      "柴烧1300度自然落灰",
      "大师亲手拉胚，孤品唯一"
    ],
    story: {
      title: "指尖上的修行",
      content: "李老师做壶三十年，常说'壶是土的魂'。这把壶经过72小时不间断柴烧，火焰在壶身留下了不可复制的吻痕。它不完美，但足够真实，像极了生活。",
      process: "从练泥到拉胚，全部由李老师亲手完成。柴烧过程中，需要守在窑炉旁，每隔十几分钟投一次柴，连续三天三夜不眠不休。一窑进去上百件，成品往往不足三十件。每一把留下的壶，都是火焰与泥土的幸存者。",
      moment: "窗外下着雨，屋里煮着茶。握着这把粗陶壶，拇指摩挲过表面微微的颗粒感，那是泥土的呼吸。倒出一杯热茶，看热气袅袅升起，心也跟着静了下来。这一刻，世界是安静的。",
      curator: {
        name: "李修远",
        title: "独立陶艺家",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1680210963123-cc25aafa7a47?q=80&w=800&auto=format&fit=crop", caption: "自然落灰的独特肌理" },
      { url: "https://images.unsplash.com/photo-1626994542321-a83f102c17c8?q=80&w=800&auto=format&fit=crop", caption: "匠人手作的温度" },
      { url: "https://images.unsplash.com/photo-1752862793633-43933bf06825?q=80&w=800&auto=format&fit=crop", caption: "静谧的品茶时光" }
    ],
    specifications: [
      { label: "材质", value: "天然原矿粗陶" },
      { label: "工艺", value: "传统柴烧" },
      { label: "容量", value: "220ml" },
      { label: "尺寸", value: "口径6cm 高8.5cm" }
    ]
  },
  {
    id: 7,
    title: "天然宠物SPA套装",
    subtitle: "给毛孩子的温柔呵护",
    price: "¥299",
    category: "特膳调理",
    image: "https://images.unsplash.com/photo-1583534778255-5d67d3dcf95d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0YWtpbmclMjBiYXRoJTIwYnViYmxlJTIwc3BhfGVufDF8fHx8MTc2NDU2NjQ4Nnww&ixlib=rb-4.1.0&q=80&w=600",
    tag: "新品",
    selectionReason: "温和植物配方，呵护毛孩子敏感肌肤。洗完香喷喷，抱起来更舒服。",
    qualityPoints: [
      "澳洲进口茶树精油",
      "pH值专为宠物皮肤调配",
      "食品级原料，舔舐无忧"
    ],
    story: {
      title: "给毛孩子的温柔呵护",
      content: "作为三只猫的铲屎官，我深知市面上太多洗护产品伤肤。这款配方我们调了48版，只为找到清洁与温和的平衡点。因为它们不仅仅是宠物，更是家人。",
      process: "为了确保绝对安全，我们拒绝了廉价的化学起泡剂，转而使用昂贵的氨基酸表活。每一批次产品都会先在团队成员自己的手上试用，确认无刺激后，才会给宠物使用。pH值被严格控制在6.5-7.5之间，完美贴合猫狗的皮肤环境。",
      moment: "阳光明媚的周末午后，给毛孩子来一场居家SPA。细腻的泡沫裹满全身，淡淡的植物清香取代了刺鼻的香精味。它不再抗拒洗澡，甚至享受地眯起了眼。洗完后抱在怀里，软乎乎香喷喷，是满满的幸福感。",
      curator: {
        name: "Sarah",
        title: "宠物行为训练师",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1637517566825-5751a931a82f?q=80&w=800&auto=format&fit=crop", caption: "绵密的植物泡沫" },
      { url: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=800&auto=format&fit=crop", caption: "享受洗澡的快乐时刻" },
      { url: "https://images.unsplash.com/photo-1632831561449-914349749765?q=80&w=800&auto=format&fit=crop", caption: "天然植物成分" }
    ],
    specifications: [
      { label: "主要成分", value: "茶树精油、燕麦提取物" },
      { label: "适用对象", value: "全犬种/全猫种" },
      { label: "净含量", value: "500ml" },
      { label: "保质期", value: "3年" }
    ]
  },
  {
    id: 8,
    title: "海南沉香 · 奇楠种",
    subtitle: "一两沉香一两金",
    price: "¥2,800",
    category: "空间能量",
    image: "https://images.unsplash.com/photo-1758903846845-e8ae224a5047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJuaW5nJTIwaW5jZW5zZSUyMHN0aWNrJTIwc21va2UlMjB6ZW58ZW58MXx8fHwxNzY0NTY2NDg2fDA&ixlib=rb-4.1.0&q=80&w=600",
    tag: "收藏级",
    selectionReason: "点燃一根，满室生香。那种穿透力的凉意和甜韵，是化学香精绝对无法模仿的。",
    qualityPoints: [
      "海南尖峰岭野生老料",
      "理香师手工制香",
      "不添加任何助燃剂"
    ],
    story: {
      title: "时间的凝结",
      content: "沉香的形成，是树木在受伤后自我疗愈的过程。这批香材源自海南尖峰岭，历经百年风雨，油脂丰盈，香韵层次极丰富。所谓'香气养性'，莫过于此。",
      process: "从选材到制香，我们遵循古法。剔除白木，只取结油饱满的部位，研磨成百目细粉。以天然楠木粘粉为合，经过无数次揉按，使香泥韧性达到最佳。阴干过程需避光通风，耗时月余，方能成香。",
      moment: "夜深人静时，在书房点一支沉香。看着青烟袅袅升起，那股清幽的甜凉之气瞬间让浮躁的心沉静下来。仿佛置身深山古刹，与天地同呼吸。这一刻，是灵魂的独处。",
      curator: {
        name: "清源",
        title: "香道师",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1515377905703-c4788e51af93?q=80&w=800&auto=format&fit=crop", caption: "静谧的香道空间" },
      { url: "https://images.unsplash.com/photo-1602607979324-b8e40861309e?q=80&w=800&auto=format&fit=crop", caption: "古法手工制香" },
      { url: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop", caption: "品香时刻" }
    ],
    specifications: [
      { label: "产地", value: "海南尖峰岭" },
      { label: "规格", value: "10g/管 (约40支)" },
      { label: "燃烧时间", value: "约30分钟/支" },
      { label: "香韵", value: "甜凉、花果香" }
    ]
  },
  {
    id: 9,
    title: "苏绣 · 双面绣团扇",
    subtitle: "摇曳生风的东方美学",
    price: "¥3,600",
    category: "空间能量",
    image: "https://images.unsplash.com/photo-1657470036063-c7e49da31393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNoaW5lc2UlMjBlbWJyb2lkZXJ5JTIwZmFuJTIwc2lsa3xlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    tag: "非遗",
    selectionReason: "每一针一线都是绣娘的心血。拿在手里，不仅是扇风的工具，更是一件可以把玩的艺术品。",
    qualityPoints: [
      "苏州绣娘手工刺绣",
      "传统双面绣技艺",
      "天然紫竹扇柄"
    ],
    story: {
      title: "指尖上的芭蕾",
      content: "苏绣之美，在于精细雅洁。这把团扇采用独特的双面绣技法，正反两面图案色泽完全一致，看不出任何针脚。绣娘需将一根丝线劈成1/16甚至1/32，方能表现花鸟的灵动。",
      process: "从画稿到上绷，从配线到刺绣，一把团扇需耗时近一个月。绣娘端坐绷架前，凝神静气，飞针走线。千万次的穿引，只为定格那一瞬的花开鸟鸣。这是机器永远无法替代的温度。",
      moment: "夏日午后，身着旗袍，手执团扇。轻轻摇曳间，微风拂面，丝线在光影下流转出细腻的光泽。不仅解了暑气，更添了几分娴静优雅的气韵。它是饰品，更是态度。",
      curator: {
        name: "婉容",
        title: "非遗推广人",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=800&auto=format&fit=crop", caption: "精湛的刺绣工艺" },
      { url: "https://images.unsplash.com/photo-1595581884638-42062a17d775?q=80&w=800&auto=format&fit=crop", caption: "优雅的古典韵味" },
      { url: "https://images.unsplash.com/photo-1566190815930-87f462b10558?q=80&w=800&auto=format&fit=crop", caption: "细节展示" }
    ],
    specifications: [
      { label: "产地", value: "苏州" },
      { label: "材质", value: "真丝、紫竹" },
      { label: "尺寸", value: "直径20cm 柄长12cm" },
      { label: "工艺", value: "苏绣双面绣" }
    ]
  },
  {
    id: 10,
    title: "黑金 · 鱼子酱面霜",
    subtitle: "逆转时光的深海奇迹",
    price: "¥2,400",
    category: "抗衰逆龄",
    image: "https://images.unsplash.com/photo-1543463573-35e4afd0ab43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWNlJTIwY3JlYW0lMjBqYXIlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    tag: "贵妇级",
    selectionReason: "用完一瓶，皮肤细腻度和光泽度提升肉眼可见。虽然贵，但效果对得起价格。",
    qualityPoints: [
      "里海鲟鱼子精华",
      "微囊封装技术",
      "24小时长效修护"
    ],
    story: {
      title: "深海的馈赠",
      content: "鱼子酱不仅是餐桌上的珍馐，更是肌肤的'软黄金'。我们选用里海珍稀鲟鱼子，富含多种氨基酸和微量元素。它能深入肌底，唤醒细胞活力，抚平岁月的痕迹。",
      process: "采用顶尖的微囊封装技术，将鱼子精华包裹在微小的胶囊中，直至触肤的一瞬间才释放活性。配合专利的导入系统，确保营养成分能真正被皮肤吸收，而非停留在表面。",
      moment: "睡前的护肤时光，是给自己最好的宠爱。取适量面霜，在掌心乳化。伴随着淡淡的高级香氛，轻轻按压面部。那一刻，仿佛能感受到肌肤在贪婪地喝水。第二天醒来，容光焕发，自信满满。",
      curator: {
        name: "Chloe",
        title: "护肤配方师",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop", caption: "奢华的质感" },
      { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", caption: "科技与自然的结合" },
      { url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop", caption: "肌肤的奢宠时刻" }
    ],
    specifications: [
      { label: "产地", value: "瑞士" },
      { label: "核心成分", value: "鲟鱼子提取物" },
      { label: "净含量", value: "50ml" },
      { label: "适用肤质", value: "干性/熟龄肌" }
    ]
  },
  {
    id: 11,
    title: "藏红花 · 特级头茬",
    subtitle: "来自雪域高原的红色金子",
    price: "¥199",
    category: "私密养护",
    image: "https://images.unsplash.com/photo-1656568866961-03e9dcc0fbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZmcm9uJTIwdGhyZWFkcyUyMG1hY3JvJTIwcmVkfGVufDF8fHx8MTc2NDU2NjQ4Nnww&ixlib=rb-4.1.0&q=80&w=600",
    tag: "滋补",
    selectionReason: "气色不好的时候，泡几根藏红花，坚持一段时间，脸色红润很多。送闺蜜也很贴心。",
    qualityPoints: [
      "伊朗进口特级头茬",
      "全红无黄根",
      "人工精心采摘"
    ],
    story: {
      title: "雪域的红色传奇",
      content: "藏红花，被誉为'花中黄金'。每一朵花只有三根雌蕊，大约150朵花才能产出1克干花丝。这不仅是滋补品，更是大自然最珍贵的馈赠。",
      process: "必须在日出前采摘，以避免阳光带走花丝的水分和香气。采摘后需立即剥离花丝，并在炭火上烘干，全程手工操作，任何一点疏忽都会影响品质。只有最顶级的全红花丝，才能入选我们的产品。",
      moment: "经期前后，或觉气血不足时，取三五根放入杯中。注入沸水，看着金黄色的丝线在水中舒展，汤色慢慢变黄。淡淡的香气袭来，喝下一口，暖宫暖胃，身心都舒畅了。",
      curator: {
        name: "卓玛",
        title: "高原选品官",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?q=80&w=800&auto=format&fit=crop", caption: "珍贵的红色花丝" },
      { url: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=800&auto=format&fit=crop", caption: "冲泡后的金黄汤色" },
      { url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop", caption: "健康养生之选" }
    ],
    specifications: [
      { label: "产地", value: "伊朗" },
      { label: "等级", value: "特级头茬" },
      { label: "净含量", value: "1g" },
      { label: "食用方法", value: "泡水、煮粥" }
    ]
  },
  {
    id: 12,
    title: "纯银 · 手工锤纹茶杯",
    subtitle: "银光流转间的茶香",
    price: "¥880",
    category: "茗茶雅道",
    image: "https://images.unsplash.com/photo-1701933810995-3331d9ff463b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1tZXJlZCUyMHNpbHZlciUyMGN1cCUyMHRlYXxlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    tag: "匠心",
    selectionReason: "银杯喝茶，口感真的很不一样，水会变得很软。锤纹在灯光下特别好看，爱不释手。",
    qualityPoints: [
      "999足银打造",
      "万次手工锤炼",
      "净化水质"
    ],
    story: {
      title: "锤炼出的光芒",
      content: "银，古人云'洁白无瑕'。银壶银杯煮水泡茶，能释放银离子，杀菌保鲜，软化水质。这只茶杯，历经数万次敲打，方显如水波般的锤纹。",
      process: "一片银板，在匠人的锤下，慢慢延展、成型。每一次落锤的力度和角度都要精准控制，才能形成疏密有致、深浅如一的纹理。这不仅是技艺的展示，更是心性的磨练。",
      moment: "与三五知己品茗，拿出这只银杯。茶汤注入，银光与茶色交相辉映。端起杯子，触手微凉，入口温润。茶香似乎比往日更浓郁了几分。这便是器物带来的美妙体验。",
      curator: {
        name: "林匠",
        title: "银饰工艺师",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      }
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1618414600699-7ca0562877a3?q=80&w=800&auto=format&fit=crop", caption: "精致的手工锤纹" },
      { url: "https://images.unsplash.com/photo-1610557898030-794341021eb8?q=80&w=800&auto=format&fit=crop", caption: "纯净的银质光泽" },
      { url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop", caption: "提升茶汤口感" }
    ],
    specifications: [
      { label: "材质", value: "999足银" },
      { label: "重量", value: "约40g" },
      { label: "容量", value: "50ml" },
      { label: "工艺", value: "手工锻打" }
    ]
  }
];

interface StoreViewProps {
  initialGiftConcierge?: boolean;
  initialProductId?: number;
}

export function StoreView({ initialGiftConcierge = false, initialProductId }: StoreViewProps) {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [showGiftConcierge, setShowGiftConcierge] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(
    initialProductId ? products.find((product) => product.id === initialProductId) ?? null : null
  );

  useEffect(() => {
    if (initialGiftConcierge) {
      setShowGiftConcierge(true);
    }
  }, [initialGiftConcierge]);

  useEffect(() => {
    if (initialProductId) {
      setSelectedProduct(products.find((product) => product.id === initialProductId) ?? null);
    }
  }, [initialProductId]);

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 11) return "早安，愿您开启充满质感的一天";
    if (hour < 14) return "午安，忙碌之余别忘休憩片刻";
    if (hour < 19) return "日落时分，把时间留给生活";
    return "夜深了，卸下疲惫回归本真";
  })();

  const filteredProducts = activeCategory === "全部" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const featuredProduct = filteredProducts.find(p => p.isFeatured);
  const otherProducts = filteredProducts.filter(p => p !== featuredProduct);

  return (
    <div className="min-h-screen bg-stone-50 pb-24 pt-12">
      <GiftConcierge isOpen={showGiftConcierge} onClose={() => setShowGiftConcierge(false)} />
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
      
      {/* Header */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-1">甄选品库</h2>
            <p className="text-xs text-stone-500 font-serif tracking-wide">{greeting}</p>
          </div>
          <button 
            onClick={() => setShowGiftConcierge(true)}
            className="group flex flex-col items-end"
          >
            <span className="text-[10px] text-stone-400 mb-1.5 group-hover:text-amber-800/70 transition-colors font-serif">送礼没灵感？</span>
            <div className="flex items-center space-x-2 bg-stone-900 text-stone-50 px-3.5 py-2 rounded-full text-xs shadow-sm group-hover:bg-stone-800 transition-all group-hover:shadow-md">
              <Sparkles size={13} />
              <span>AI 礼物管家</span>
            </div>
          </button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
          <input 
            type="text" 
            placeholder="搜索..." 
            className="w-full bg-white border-none rounded-lg py-3 pl-10 pr-4 text-sm text-stone-800 placeholder:text-stone-300 focus:ring-1 focus:ring-stone-200 shadow-sm"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-6 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-sm transition-colors relative ${
                  activeCategory === cat ? "text-stone-900 font-medium" : "text-stone-400"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-stone-900"
                  />
                )}
              </button>
            ))}
          </div>
          <button className="text-stone-400 pl-4 border-l border-stone-200">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Featured Hero */}
      {featuredProduct && activeCategory === "全部" && (
        <div className="px-6 mb-8">
          <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedProduct(featuredProduct)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img 
              src={featuredProduct.image} 
              alt={featuredProduct.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
            <div className="absolute top-4 left-4">
               <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full border border-white/10">
                  <Sparkles size={10} className="text-amber-300" />
                  <span>每日甄选</span>
               </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
               <div className="text-amber-200 text-xs font-serif mb-1 italic tracking-wide">{featuredProduct.subtitle}</div>
               <h3 className="text-2xl font-serif text-white mb-2">{featuredProduct.title}</h3>
               <p className="text-stone-300 text-xs line-clamp-2 font-light leading-relaxed mb-3">
                 “{featuredProduct.selectionReason}”
               </p>
               <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{featuredProduct.price}</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-stone-900 transition-colors">
                     <ArrowRight size={16} />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Grid */}
      <div className="px-6 grid grid-cols-2 gap-x-4 gap-y-8">
        {(activeCategory === "全部" ? otherProducts : filteredProducts).map((product) => (
          <motion.div 
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProduct(product)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] bg-stone-200 rounded-xl overflow-hidden mb-3 shadow-sm group-hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.tag && (
                <div className="absolute top-2 left-2 bg-stone-900/90 backdrop-blur-sm text-stone-50 text-[10px] px-2 py-0.5 rounded-sm font-serif">
                  {product.tag}
                </div>
              )}
            </div>
            
            <div className="mb-2">
               <h3 className="text-sm text-stone-900 font-serif font-medium mb-0.5 group-hover:text-amber-800 transition-colors">{product.title}</h3>
               <div className="text-[10px] text-stone-500 font-serif italic truncate">{product.subtitle}</div>
            </div>

            <div className="flex items-center justify-between mb-3">
               <span className="text-sm font-medium text-stone-900">{product.price}</span>
               <div className="flex text-amber-400">
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" className="opacity-50" />
               </div>
            </div>

            <div className="relative">
               <div className="absolute -top-1.5 left-2 text-stone-200">
                  <Quote size={12} fill="currentColor" />
               </div>
               <div className="bg-amber-50/50 p-2.5 rounded-lg text-[10px] text-stone-600 leading-relaxed border border-amber-100/50 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors">
                 <p className="line-clamp-2 indent-2 relative z-10">
                   {product.selectionReason}
                 </p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeCategory !== "全部" && filteredProducts.length === 0 && (
        <div className="mx-6 rounded-2xl border border-stone-100 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700">
            <Gift size={18} />
          </div>
          <h3 className="font-serif text-base text-stone-900">正在甄选{activeCategory}</h3>
          <p className="mt-1 text-xs leading-relaxed text-stone-500">
            该品类会优先补充适合家庭场景和节日礼赠的精品。
          </p>
        </div>
      )}
    </div>
  );
}
