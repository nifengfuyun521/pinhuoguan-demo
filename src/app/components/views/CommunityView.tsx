import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Heart, ThumbsUp, User, Sparkles, Plus, Clock, Share2, BookOpen, ShieldCheck, Users, Target, ArrowLeft, ArrowRight, Leaf, Award, BookMarked, Camera, Star, ChevronRight, MapPin, Search, Radio, PlayCircle } from 'lucide-react';
import { toast } from 'sonner';
import { MasterNoteDetail } from './MasterNoteDetail';
import { MasterProfileView } from './MasterProfileView';
import { ReviewNoteDetail } from './ReviewNoteDetail';
import { StoreProfileView } from './StoreProfileView';

const mastersData: Record<string, {
  id: string;
  name: string;
  title: string;
  avatar: string;
  cover: string;
  bio: string;
  storeName: string;
  storeId: string;
  location: string;
  specialties: string[];
  notesCount: number;
  followersCount: number;
  isFollowed: boolean;
}> = {
  qingshan: {
    id: 'qingshan',
    name: '陈清',
    title: '茶器主理人',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
    cover: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: '做茶器十年，从追求繁复到懂得留白。器为茶服务，茶为人服务，人要为自己的生活留一点余地。',
    storeName: '清山茶事',
    storeId: 'qingshan',
    location: '杭州市西湖区龙井路 88 号',
    specialties: ['手工茶器', '青瓷', '汝窑', '茶席设计'],
    notesCount: 12,
    followersCount: 1280,
    isFollowed: false
  },
  maixiang: {
    id: 'maixiang',
    name: '林小麦',
    title: '面包主理人',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60',
    cover: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: '蓝带毕业，放弃花式面包，只做酸种。相信好面包的味道是时间给的，不是糖给的。',
    storeName: '麦乡面包坊',
    storeId: 'maixiang',
    location: '上海市静安区愚园路 321 号',
    specialties: ['酸种面包', '欧式面包', '天然酵母', '手作烘焙'],
    notesCount: 8,
    followersCount: 2456,
    isFollowed: true
  },
  feifa: {
    id: 'feifa',
    name: '阿飞',
    title: '发型主理人',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
    cover: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: '十二年发型师，不办卡、不推销、不攀亲戚。只剪头发，把头发剪好，就是最大的真诚。',
    storeName: '飞发舍',
    storeId: 'feifa',
    location: '北京市朝阳区三里屯北街 42 号',
    specialties: ['男士理发', '经典剪裁', '油头', '自然风格'],
    notesCount: 6,
    followersCount: 3102,
    isFollowed: false
  }
};

const storesData: Record<string, {
  id: string;
  name: string;
  type: string;
  image: string;
  location: string;
  masterId: string;
}> = {
  qingshan: {
    id: 'qingshan',
    name: '清山茶事',
    type: '茶空间',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    location: '杭州市西湖区龙井路 88 号',
    masterId: 'qingshan'
  },
  maixiang: {
    id: 'maixiang',
    name: '麦乡面包坊',
    type: '手作烘焙',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    location: '上海市静安区愚园路 321 号',
    masterId: 'maixiang'
  },
  feifa: {
    id: 'feifa',
    name: '飞发舍',
    type: '美业护理',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    location: '北京市朝阳区三里屯北街 42 号',
    masterId: 'feifa'
  }
};

const masterNotes = [
  {
    id: 1,
    title: '做茶器十年，我终于懂了"留白"的意思',
    cover: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt: '从景德镇到宜兴，从手拉坯到气窑，十年里我做坏了三千多把壶。直到那天在山里看见一片云飘过，突然懂了。',
    master: mastersData.qingshan,
    products: [
      {
        id: 101,
        name: '云隐 · 手工汝窑茶壶',
        image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&auto=format&fit=crop&q=60',
        price: 680,
        originalPrice: 880,
        tag: '主理人推荐'
      },
      {
        id: 102,
        name: '素月 · 青瓷品茗杯',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&auto=format&fit=crop&q=60',
        price: 198
      },
      {
        id: 103,
        name: '云隐茶席套组',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=60',
        price: 1280,
        tag: '限量'
      }
    ],
    content: {
      source: '2014年第一次去景德镇，蹲在老厂门口看师傅们拉坯，一看就是一整天。那时候觉得做茶器就是"做得越精致越好"，雕花、描金、堆釉，什么复杂上什么。一把壶能做一个月，拿来跟人比谁的工细。',
      heart: '后来开了自己的工作室，慢慢发现一个奇怪的事：越是雕花繁复的壶，买回去的人越是摆在架子上看；反而是那些素面、简单的壶，天天拿在手里用。有位老茶客跟我说："小陈啊，茶器是配角，茶才是主角。器太抢戏，茶就累了。"这句话我想了三年。',
      encounter: '去年春天在莫干山住了一个月，每天早上看云从山坳里慢慢飘出来，不急不缓，该有的都有，多一点都不要。那天回来做了这把"云隐"，没有雕花，没有铭文，就是素素的一把壶，出水的时候声音都比以前轻了。现在我的工作室里，素器占了七成。我终于懂了，留白不是空，是给生活留余地。'
    },
    likes: 328,
    comments: 42,
    liked: false,
    date: '3天前'
  },
  {
    id: 2,
    title: '我们的面包，发酵时间比你的工作日还长',
    cover: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt: '很多人问我为什么不做甜面包、不做网红款。因为我相信，好面包的味道，是时间给的，不是糖给的。',
    master: mastersData.maixiang,
    products: [
      {
        id: 201,
        name: '经典乡村酸种面包',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&auto=format&fit=crop&q=60',
        price: 58,
        tag: '招牌'
      },
      {
        id: 202,
        name: '全麦核桃欧包',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=60',
        price: 48
      }
    ],
    content: {
      source: '六年前从法国蓝带回来的时候，我也做过各种各样的花式面包。可颂、丹麦、泡芙，什么好看做什么。开店第一年，跟着网红趋势走，什么火做什么，销量倒是不错，但就是觉得……累。',
      heart: '后来我奶奶来店里，拿了一片我们的招牌可颂，吃了一口说："挺香的，就是不像面包。"那句话像一根刺扎在我心里。我奶奶做了四十年馒头，她知道什么是"面"的味道。我突然意识到，我们走得太远，忘了面包本来的样子。',
      encounter: '现在我们店里只做酸种面包。一个面团，从起种到出炉，要整整三天。慢吗？真的慢。但是每天早上六点半，第一批出炉的时候，门口总有人在等。有人说吃了我们的面包，胃里不反酸了。有人说找到了小时候外婆家馒头的味道。我想，这就够了。好东西，值得等。'
    },
    likes: 512,
    comments: 86,
    liked: true,
    date: '1周前'
  },
  {
    id: 3,
    title: '开一家不办卡的理发店，我是不是疯了',
    cover: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt: '同行都说我傻，不办卡怎么锁客？但我偏想试试——如果手艺够好，人家自然会来；如果手艺不好，办了卡也是冤家。',
    master: mastersData.feifa,
    products: [],
    content: {
      source: '做了十二年发型师，前八年在连锁店里，每个月考核的不是剪了多少个好头，是卖了多少张卡、多少支发膜。做得好的"业绩冠军"，剪发手艺一塌糊涂，但架不住人家会销售。我越来越觉得，我不是手艺人，是推销员。',
      heart: '出来自己开店那天，我跟合伙人说：不办卡、不推销、不跟客人攀亲戚。人家来是剪头发的，不是来听你上课的。剪完了，觉得好下次来，觉得不好扭头就走，谁也不欠谁。合伙人说我疯了，这样肯定开不下去。',
      encounter: '现在店开了三年，老客占八成。有人从上海特意坐高铁过来剪，有人带全家来。我们不办卡，但人家来得比办卡的还勤。我越来越相信一件事：最好的"锁客"，是把人家头发剪好。简单的道理，绕了十二年才真正懂。'
    },
    likes: 756,
    comments: 128,
    liked: false,
    date: '2周前'
  }
];

const connoisseursData: Record<string, {
  id: string;
  name: string;
  title: string;
  avatar: string;
  cover: string;
  level: string;
  verified: boolean;
  bio: string;
  specialties: string[];
  reviewsCount: number;
  followersCount: number;
  isFollowed: boolean;
}> = {
  chawu: {
    id: 'chawu',
    name: '茶悟先生',
    title: '资深茶器品鉴师',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
    cover: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    level: '首席品鉴官',
    verified: true,
    bio: '茶器二十年，上手过的茶器比见过的人还多。从不迷信名家，只相信自己的手和舌头。',
    specialties: ['紫砂', '青瓷', '汝窑', '茶席美学'],
    reviewsCount: 86,
    followersCount: 5680,
    isFollowed: false
  },
  mianshi: {
    id: 'mianshi',
    name: '面食研究所',
    title: '烘焙美食博主',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60',
    cover: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    level: '认证品鉴官',
    verified: true,
    bio: '吃遍全球 300+ 家面包店，用体重换经验。好面包会说话，前提是你得会听。',
    specialties: ['酸种面包', '可颂', '甜点', '咖啡搭配'],
    reviewsCount: 124,
    followersCount: 12300,
    isFollowed: true
  }
};

const reviewNotes = [
  {
    id: 101,
    title: '实测清山茶事「云隐」汝窑壶：680元值不值？',
    cover: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=800&auto=format&fit=crop&q=60',
    excerpt: '上手用了整整一个月，从泥料、釉色、出水、手感四个维度，说说这把壶到底值不值得入手。',
    connoisseur: connoisseursData.chawu,
    product: {
      name: '云隐 · 手工汝窑茶壶',
      brand: '清山茶事',
      price: 680,
      image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&auto=format&fit=crop&q=60'
    },
    overallScore: 8.5,
    dimensions: [
      { name: '泥料质地', score: 8.5, label: '天青釉色温润，开片自然' },
      { name: '工艺水准', score: 9.0, label: '手工拉坯，器型周正' },
      { name: '使用体验', score: 8.0, label: '出水流畅，断水利落' },
      { name: '性价比', score: 8.5, label: '同价位品质领先' }
    ],
    pros: [
      '釉色温润，开片细腻',
      '出水流畅，手感舒适',
      '价格亲民，入门首选'
    ],
    cons: [
      '容量略小，适合独饮',
      '壶盖缝隙稍大'
    ],
    conclusion: '作为入门级手工汝窑壶，云隐的表现超出预期。680元的价格能买到这个品质的手拉坯汝窑，性价比相当不错。适合刚开始接触茶器、想拥有一把真正手工壶的朋友。',
    content: '拿到这把壶的时候，第一感觉是"轻"。不是那种偷工减料的轻，是胎壁薄得恰到好处的轻。天青釉色在阳光下会泛出一点淡粉，这是汝窑最迷人的地方。\n\n说泥料。这个价位的汝窑，很多是注浆坯，但这把确实是手拉的——看壶嘴和壶身的连接处，有明显的手工接痕，不完美，但这就是手工的温度。釉面的开片是自然形成的，养了一个月，已经开始出现淡淡的金丝铁线纹路。\n\n说出水。这是我最在意的一点。很多壶长得好看，但出水歪歪扭扭。云隐的出水很稳，柱状出水，收水的时候也不会流口水。壶把的设计很贴手，泡一下午茶，手腕不酸。\n\n唯一的小遗憾是容量，150ml左右，适合一个人喝。两个人的话就有点不够用了。不过独饮的时候，这个大小正合适。',
    likes: 456,
    comments: 78,
    liked: false,
    date: '2天前',
    usefulCount: 312
  },
  {
    id: 102,
    title: '魔都酸种面包测评Top5：麦乡能排第几？',
    cover: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&auto=format&fit=crop&q=60',
    excerpt: '跑遍上海 27 家酸种面包店，从酸香度、咀嚼感、外壳脆度、内部组织四个维度，给你一份真实测评。',
    connoisseur: connoisseursData.mianshi,
    product: {
      name: '经典乡村酸种面包',
      brand: '麦乡面包坊',
      price: 58,
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&auto=format&fit=crop&q=60'
    },
    overallScore: 9.2,
    dimensions: [
      { name: '酸香度', score: 9.0, label: '自然发酵的果香与麦香平衡' },
      { name: '外壳脆度', score: 9.5, label: '外壳焦脆，切开有咔嚓声' },
      { name: '内部组织', score: 9.0, label: '气孔均匀，蜂窝状组织漂亮' },
      { name: '咀嚼感', score: 9.5, label: '有嚼劲但不费牙' }
    ],
    pros: [
      '发酵风味层次丰富',
      '外壳酥脆，内里柔软',
      '用料扎实，无添加'
    ],
    cons: [
      '价格偏高',
      '需要排队，晚了买不到'
    ],
    conclusion: '麦乡的乡村酸种面包是我今年吃到的最好的酸种之一。三天的慢发酵带来的风味复杂度，是那种"吃完一口还想再吃一口"的好吃。58元的价格不便宜，但绝对值。',
    content: '测评了 27 家店，麦乡的乡村酸种是唯一一家我连续三天都去买的。\n\n先说外壳。好的酸种面包，外壳应该是脆的，但不是硬的。麦乡的外壳厚度刚刚好，大概 2-3 毫米，切开的时候能听到"咔嚓"一声，那是烤得刚好的标志。\n\n再说内部组织。切开的瞬间，你能闻到一股酸酸的、带着点果香的麦香味。气孔大小不一但分布均匀，这是自然发酵的标志，不是用泡打粉发出来的那种均匀的大孔。\n\n最后说口感。第一口咬下去，外壳脆，然后里面是软的、有嚼劲的。嚼着嚼着，麦香味会慢慢出来，还有一点点淡淡的酸，不是那种让人皱眉的酸，是让人胃口大开的酸。\n\n唯一的缺点是贵，而且真的要早去。我上次周末 9 点到，已经排了 20 多个人。',
    likes: 892,
    comments: 156,
    liked: true,
    date: '5天前',
    usefulCount: 624
  }
];

const knowledgeArticles = [
  {
    id: 3,
    type: '堪舆私教',
    title: '顺势而居：现代豪宅的风水能量场构建',
    excerpt: '并非迷信，而是环境科学。从选址格局到室内陈设，解析如何打造"藏风聚气"的顶层居住空间。',
    author: {
       name: '易居先生',
       title: '人居环境顾问',
       avatar: 'https://images.unsplash.com/photo-1568157967378-8102a47b15c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBhc2lhbiUyMG1hbiUyMHBvcnRyYWl0JTIwYXJjaGl0ZWN0JTIwd2lzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjQ1NzM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    image: 'https://images.unsplash.com/photo-1589163045730-40797c5cdc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGNoaW5lc2UlMjBmZW5nJTIwc2h1aSUyMHplbiUyMGJhbGFuY2VkJTIwYnJpZ2h0fGVufDF8fHx8MTc2NDU3Mzg0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '研习 20min',
    likes: 1280,
    verified: true
  },
  {
    id: 1,
    type: '私享研报',
    title: '书房里的隐形资产：宋代砚台的估值逻辑',
    excerpt: '不仅仅是文房四宝。从石质纹理到名家铭文，解析为何一方古砚能跑赢十年通胀。',
    author: {
       name: '齐白石·再传弟子',
       title: '文物鉴定专家',
       avatar: 'https://images.unsplash.com/photo-1725408118511-5d7bbcd866ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBhc2lhbiUyMGFyY2hpdGVjdCUyMHBvcnRyYWl0JTIwY29uZmlkZW50fGVufDF8fHx8MTc2NDU3MDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    image: 'https://images.unsplash.com/photo-1706977386801-b6d4f801dbde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGluZXNlJTIwY2FsbGlncmFwaHklMjBicnVzaCUyMGlua3N0b25lJTIwc3R1ZHklMjByb29tJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjQ1NzA3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '深度 12min',
    likes: 892,
    verified: true
  },
  {
    id: 2,
    type: '名医内参',
    title: '卧室微气候：喜马拉雅盐与负离子生态构建',
    excerpt: '拒绝过度装修。如何运用天然矿物材料，在主卧构建一个辅助呼吸系统修复的"微疗愈"场域。',
    author: {
       name: 'Dr. Chen',
       title: '环境医学博士',
       avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww'
    },
    image: 'https://images.unsplash.com/photo-1583417657209-d3dd44dc9c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWxsbmVzcyUyMHNwYSUyMHJvb20lMjBzdG9uZSUyMHdvb2QlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NzA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '专业 15min',
    likes: 645,
    verified: true
  }
];

const circles = [
  {
    id: 1,
    name: '可持续生活家',
    desc: '探索零废弃与自然共生的生活方式',
    members: 1240,
    image: 'https://images.unsplash.com/photo-1759393408703-5ad26d7432c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGxpdmluZyUyMGVjbyUyMGZyaWVuZGx5JTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2NDU3MDU1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    match: 98
  },
  {
    id: 2,
    name: '东方美学研究',
    desc: '重构传统文化在现代空间的应用',
    members: 890,
    image: 'https://images.unsplash.com/photo-1758383965749-6d074625de6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmllbnRhbCUyMGFlc3RoZXRpY3MlMjB6ZW4lMjBnYXJkZW58ZW58MXx8fHwxNzY0NTcwNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    match: 92
  }
];

const betaTests = [
  {
    id: 1,
    title: '宋韵香插 · 听雨系列',
    status: '招募中',
    quota: '剩余 3 席',
    desc: '诚邀资深香道爱好者参与体验，您的反馈将决定最终釉色配方。'
  }
];

function SectionIntro({
  icon: Icon,
  title,
  subtitle,
  action,
  onAction,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div className="mb-5 rounded-xl border border-stone-100 bg-white p-3.5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center space-x-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-amber-100">
            <Icon size={15} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
              <h3 className="text-sm font-bold leading-tight text-stone-900">{title}</h3>
            </div>
            <p className="mt-1 text-[10px] leading-relaxed text-stone-500">{subtitle}</p>
          </div>
        </div>
        {action && (
          <button
            onClick={onAction}
            className="shrink-0 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-[10px] font-medium text-stone-700"
          >
            {action}
          </button>
        )}
      </div>
    </div>
  );
}

function CommunityHeaderBar({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between px-4">
        <button
          aria-label="返回圈层"
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 hover:bg-stone-100"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="font-serif text-sm font-medium text-stone-900">{title}</span>
        <div className="w-10" />
      </div>
    </div>
  );
}

function MasterCollectionPage({
  onBack,
  onNoteClick,
  onMasterClick,
}: {
  onBack: () => void;
  onNoteClick: (note: typeof masterNotes[0]) => void;
  onMasterClick: (masterId: string) => void;
}) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900">
      <CommunityHeaderBar title="本周推荐主理人" onBack={onBack} />
      <div className="p-6 space-y-5">
        <div className="rounded-2xl bg-stone-900 p-5 text-amber-50">
          <p className="text-[10px] uppercase tracking-widest text-amber-300">Curated Masters</p>
          <h1 className="mt-2 font-serif text-2xl leading-snug">三位用心做事的人</h1>
          <p className="mt-2 text-xs leading-relaxed text-stone-300">从器物、食物到服务，把好店背后的人先讲清楚。</p>
        </div>

        {masterNotes.map((note) => (
          <button
            key={note.id}
            onClick={() => onNoteClick(note)}
            className="w-full overflow-hidden rounded-2xl border border-stone-100 bg-white text-left shadow-sm"
          >
            <div className="relative h-40 overflow-hidden">
              <img src={note.cover} alt={note.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[10px] text-amber-300">{note.master.title} · {note.master.storeName}</p>
                <h2 className="mt-1 font-serif text-lg leading-snug">{note.title}</h2>
              </div>
            </div>
            <div className="p-4">
              <div
                onClick={(event) => {
                  event.stopPropagation();
                  onMasterClick(note.master.storeId);
                }}
                className="mb-3 flex items-center"
              >
                <img src={note.master.avatar} alt={note.master.name} className="mr-2 h-8 w-8 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-stone-900">{note.master.name}</p>
                  <p className="text-[10px] text-stone-400">{note.master.storeName}</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-stone-500 line-clamp-2">{note.excerpt}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ReviewCollectionPage({
  onBack,
  onReviewClick,
}: {
  onBack: () => void;
  onReviewClick: (reviewId: number) => void;
}) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900">
      <CommunityHeaderBar title="品鉴官精选测评" onBack={onBack} />
      <div className="p-6 space-y-5">
        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <p className="text-[10px] uppercase tracking-widest text-amber-700">Trusted Reviews</p>
          <h1 className="mt-2 font-serif text-2xl leading-snug">把真实体验说透</h1>
          <p className="mt-2 text-xs leading-relaxed text-amber-950/75">围绕产品、门店和服务，给出可参考的体验结论。</p>
        </div>

        {reviewNotes.map((note) => (
          <button
            key={note.id}
            onClick={() => onReviewClick(note.id)}
            className="w-full rounded-2xl border border-stone-100 bg-white p-4 text-left shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center">
                <img src={note.connoisseur.avatar} alt={note.connoisseur.name} className="mr-2 h-8 w-8 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-stone-900">{note.connoisseur.name}</p>
                  <p className="text-[10px] text-stone-400">{note.connoisseur.title}</p>
                </div>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] text-amber-700 ring-1 ring-amber-100">{note.overallScore}分</span>
            </div>
            <div className="flex gap-3">
              <img src={note.cover} alt={note.title} className="h-24 w-24 shrink-0 rounded-xl object-cover" />
              <div className="min-w-0">
                <h2 className="font-serif text-base leading-snug text-stone-900 line-clamp-2">{note.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-stone-500 line-clamp-2">{note.excerpt}</p>
                <p className="mt-2 text-[10px] text-stone-400">{note.usefulCount} 人觉得有用</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function KnowledgeCollectionPage({
  onBack,
  onArticleClick,
}: {
  onBack: () => void;
  onArticleClick: (article: typeof knowledgeArticles[0]) => void;
}) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900">
      <CommunityHeaderBar title="本周真知" onBack={onBack} />
      <div className="p-6 space-y-5">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-100">
          <p className="text-[10px] uppercase tracking-widest text-amber-700">Knowledge Focus</p>
          <h1 className="mt-2 font-serif text-2xl leading-snug">本周重点关注</h1>
          <p className="mt-2 text-xs leading-relaxed text-stone-500">把生活方式、空间能量、审美资产和健康知识做成可阅读的专题。</p>
        </div>

        {knowledgeArticles.map((article) => (
          <button
            key={article.id}
            onClick={() => onArticleClick(article)}
            className="w-full overflow-hidden rounded-2xl border border-stone-100 bg-white text-left shadow-sm"
          >
            <div className="relative h-36 overflow-hidden">
              <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] text-stone-700">{article.type}</div>
            </div>
            <div className="p-4">
              <div className="mb-3 flex items-center">
                <img src={article.author.avatar} alt={article.author.name} className="mr-2 h-7 w-7 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-stone-900">{article.author.name}</p>
                  <p className="text-[10px] text-stone-400">{article.author.title}</p>
                </div>
              </div>
              <h2 className="font-serif text-lg leading-snug text-stone-900">{article.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-stone-500 line-clamp-2">{article.excerpt}</p>
              <p className="mt-3 text-[10px] text-stone-400">{article.readTime} · 真知认证</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function KnowledgeArticlePage({
  article,
  onBack,
}: {
  article: typeof knowledgeArticles[0];
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900">
      <CommunityHeaderBar title="真知详情" onBack={onBack} />
      <div className="space-y-6">
        <div className="relative h-64 overflow-hidden">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] text-amber-100 ring-1 ring-white/20">{article.type}</span>
            <h1 className="mt-3 font-serif text-2xl leading-snug">{article.title}</h1>
          </div>
        </div>
        <div className="px-6">
          <div className="mb-5 flex items-center">
            <img src={article.author.avatar} alt={article.author.name} className="mr-3 h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-bold text-stone-900">{article.author.name}</p>
              <p className="text-[10px] text-stone-400">{article.author.title} · {article.readTime}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
            <p className="text-sm leading-7 text-stone-600">{article.excerpt}</p>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              本专题从真实场景出发，拆解空间、器物、身体与家庭生活之间的关系。平台会持续邀请专业人士补充方法论，让用户在消费前先建立判断力。
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              后续可承接到商品、门店、活动与圈层讨论，让知识不只停留在阅读，而是成为更稳妥的生活选择。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CommunityView() {
  const [activeTab, setActiveTab] = useState<'master' | 'review' | 'knowledge' | 'live' | 'circles'>('master');
  const [selectedNote, setSelectedNote] = useState<typeof masterNotes[0] | null>(null);
  const [selectedReview, setSelectedReview] = useState<typeof reviewNotes[0] | null>(null);
  const [selectedKnowledge, setSelectedKnowledge] = useState<typeof knowledgeArticles[0] | null>(null);
  const [selectedMaster, setSelectedMaster] = useState<typeof mastersData[keyof typeof mastersData] | null>(null);
  const [selectedStore, setSelectedStore] = useState<typeof storesData[keyof typeof storesData] | null>(null);
  const [subPage, setSubPage] = useState<'masters' | 'reviews' | 'knowledge' | null>(null);
  const [previousView, setPreviousView] = useState<'list' | 'note'>('list');

  const handleShare = (title: string) => {
     toast.success(
        <div className="flex flex-col">
           <span className="font-serif font-medium">观点海报已生成</span>
           <span className="text-xs text-stone-500">包含您的专家见解与"{title}"，可保存分享</span>
        </div>
     );
  };

  const handlePublish = () => {
    toast.success(
      <div className="flex flex-col">
        <span className="font-serif font-medium">发布入口已打开</span>
        <span className="text-xs text-stone-500">可发布品鉴测评、主理人提问或圈层话题</span>
      </div>
    );
  };

  const handleMasterClick = (masterId: string) => {
    const master = mastersData[masterId];
    if (master) {
      setPreviousView(selectedNote ? 'note' : 'list');
      setSelectedMaster(master);
    }
  };

  const handleBackFromMaster = () => {
    setSelectedMaster(null);
  };

  const handleMasterNoteClick = (noteId: number) => {
    const note = masterNotes.find(n => n.id === noteId);
    if (note) {
      setSelectedNote(note);
    }
  };

  const handleReviewClick = (reviewId: number) => {
    const review = reviewNotes.find(n => n.id === reviewId);
    if (review) {
      setSelectedReview(review);
    }
  };

  const handleStoreClick = (storeId: string) => {
    const store = storesData[storeId];
    if (store) {
      setSelectedStore(store);
    } else {
      toast.info('店铺页面准备中');
    }
  };

  if (selectedKnowledge) {
    return (
      <KnowledgeArticlePage
        article={selectedKnowledge}
        onBack={() => setSelectedKnowledge(null)}
      />
    );
  }

  if (selectedStore) {
    return (
      <StoreProfileView
        store={selectedStore}
        onBack={() => setSelectedStore(null)}
        onMasterClick={() => handleMasterClick(selectedStore.masterId)}
      />
    );
  }

  if (selectedMaster) {
    const masterNotesForProfile = masterNotes.filter(n => n.master.id === selectedMaster.id);
    return (
      <MasterProfileView
        master={selectedMaster}
        notes={masterNotesForProfile}
        onBack={handleBackFromMaster}
        onNoteClick={handleMasterNoteClick}
        onStoreClick={handleStoreClick}
      />
    );
  }

  if (selectedReview) {
    return (
      <div className="min-h-screen bg-stone-50">
        <ReviewNoteDetail
          note={selectedReview}
          onBack={() => setSelectedReview(null)}
          onConnoisseurClick={(id) => toast.info('即将跳转到品鉴官主页')}
        />
      </div>
    );
  }

  if (selectedNote) {
    return (
      <div className="min-h-screen bg-stone-50">
        <MasterNoteDetail
          note={selectedNote}
          onBack={() => {
            setSelectedNote(null);
            if (previousView === 'note') {
              setSelectedMaster(selectedNote.master);
            }
          }}
          onMasterClick={handleMasterClick}
          onStoreClick={handleStoreClick}
        />
      </div>
    );
  }

  if (subPage === 'masters') {
    return (
      <MasterCollectionPage
        onBack={() => setSubPage(null)}
        onNoteClick={(note) => {
          setPreviousView('list');
          setSelectedNote(note);
        }}
        onMasterClick={handleMasterClick}
      />
    );
  }

  if (subPage === 'reviews') {
    return (
      <ReviewCollectionPage
        onBack={() => setSubPage(null)}
        onReviewClick={handleReviewClick}
      />
    );
  }

  if (subPage === 'knowledge') {
    return (
      <KnowledgeCollectionPage
        onBack={() => setSubPage(null)}
        onArticleClick={setSelectedKnowledge}
      />
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-24 pt-16">
      {/* Header & Main Tab Switch */}
      <div className="px-6 mb-6 flex items-center justify-between">
        <div>
           <div className="flex items-baseline space-x-2 mb-1">
              <h2 className="text-2xl font-serif text-stone-900">圈层</h2>
              <span className="text-[10px] text-amber-600 font-medium tracking-wider uppercase">Cluster</span>
           </div>
           <p className="text-[10px] text-stone-400">连接同频的灵魂与价值</p>
        </div>
        <button
          onClick={handlePublish}
          className="flex items-center rounded-full bg-stone-900 px-3 py-2 text-[10px] font-medium text-amber-50 shadow-sm"
        >
          <Camera size={13} className="mr-1.5" />
          发布
        </button>
      </div>

      {/* Scrollable Tabs */}
      <div className="px-6 mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex bg-stone-200/50 p-1 rounded-full inline-flex min-w-max">
           <button
             onClick={() => setActiveTab('master')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'master' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             主理人
           </button>
           <button
             onClick={() => setActiveTab('review')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'review' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             品鉴
           </button>
           <button
             onClick={() => setActiveTab('knowledge')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'knowledge' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             真知
           </button>
           <button
             onClick={() => setActiveTab('live')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'live' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             直播
           </button>
           <button
             onClick={() => setActiveTab('circles')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'circles' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             圈子
           </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 space-y-6">

        {/* Master Tab */}
        {activeTab === 'master' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <SectionIntro
               icon={Star}
               title="本周推荐主理人"
               subtitle="三位用心做事的人，三家值得探访的店"
               action="全部"
               onAction={() => setSubPage('masters')}
             />

             <div className="space-y-6">
              {masterNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedNote(note)}
                  className="group relative cursor-pointer"
                >
                  {/* Master Header */}
                  <div
                    className="flex items-center mb-3 px-1"
                    onClick={(e) => { e.stopPropagation(); handleMasterClick(note.master.storeId); }}
                  >
                     <div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200 mr-2.5 cursor-pointer hover:opacity-90 transition-opacity">
                        <img src={note.master.avatar} className="w-full h-full object-cover" alt={note.master.name} />
                     </div>
                     <div className="cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="text-xs font-bold text-stone-900 flex items-center">
                           {note.master.name}
                           <Star size={10} className="ml-1 text-amber-500 fill-amber-500" />
                        </div>
                        <div className="text-[10px] text-stone-400">{note.master.title} · {note.master.storeName}</div>
                     </div>
                     <div className="ml-auto">
                        <span className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
                           主理人手记
                        </span>
                     </div>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300 border border-stone-100">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={note.cover}
                        alt={note.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60"></div>
                    </div>

                    <div className="p-5 relative -mt-6 bg-white rounded-t-xl mx-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                      <h3 className="text-lg font-serif text-stone-900 mb-3 leading-snug group-hover:text-amber-800 transition-colors font-medium">
                        {note.title}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed mb-4 line-clamp-2 font-light">
                        {note.excerpt}
                      </p>

                      <div className="flex items-center justify-between border-t border-stone-50 pt-3">
                        <div className="flex items-center text-stone-400 text-[10px] space-x-4 uppercase tracking-wider">
                          <div className="flex items-center">
                            <MapPin size={12} className="mr-1.5" />
                            {note.master.storeName}
                          </div>
                          <div className="flex items-center">
                            <Heart size={12} className="mr-1.5" />
                            {note.likes}
                          </div>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleShare(note.title); }}
                          className="text-stone-400 hover:text-stone-900 transition-colors"
                        >
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Review Tab */}
        {activeTab === 'review' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <SectionIntro
               icon={Award}
               title="品鉴官精选测评"
               subtitle="真实体验，深度测评，不踩坑"
               action="全部"
               onAction={() => setSubPage('reviews')}
             />

             <div className="space-y-6">
              {reviewNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleReviewClick(note.id)}
                  className="group relative cursor-pointer"
                >
                  {/* Connoisseur Header */}
                  <div className="flex items-center mb-3 px-1">
                     <div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200 mr-2.5">
                        <img src={note.connoisseur.avatar} className="w-full h-full object-cover" alt={note.connoisseur.name} />
                     </div>
                     <div>
                        <div className="text-xs font-bold text-stone-900 flex items-center">
                           {note.connoisseur.name}
                           {note.connoisseur.verified && <Sparkles size={10} className="ml-1 text-amber-500 fill-amber-500" />}
                        </div>
                        <div className="text-[10px] text-stone-400">{note.connoisseur.title}</div>
                     </div>
                     <div className="ml-auto">
                        <span className="text-[10px] px-2 py-0.5 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 rounded-full border border-amber-200 flex items-center space-x-1">
                           <Star size={9} className="fill-amber-500 text-amber-500" />
                           <span>{note.overallScore}分</span>
                        </span>
                     </div>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300 border border-stone-100">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={note.cover}
                        alt={note.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60"></div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-base font-serif text-white leading-snug font-medium">
                          {note.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4 relative -mt-2 bg-white rounded-t-xl mx-2">
                      {/* Product Info */}
                      <div className="flex items-center mb-3 pb-3 border-b border-stone-50">
                         <div className="w-10 h-10 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
                           <img src={note.product.image} className="w-full h-full object-cover" alt="" />
                         </div>
                         <div className="ml-2 flex-1 min-w-0">
                           <p className="text-[11px] text-stone-500 truncate">{note.product.name}</p>
                           <p className="text-xs font-semibold text-stone-900">¥{note.product.price}</p>
                         </div>
                         <div className="text-right">
                            <div className="flex items-center text-[10px] text-stone-400">
                               <ThumbsUp size={10} className="mr-1" />
                               {note.usefulCount} 有用
                            </div>
                         </div>
                      </div>

                      <p className="text-xs text-stone-500 leading-relaxed mb-3 line-clamp-2 font-light">
                        {note.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-stone-400 text-[10px] space-x-4 uppercase tracking-wider">
                          <div className="flex items-center">
                            <Heart size={12} className="mr-1.5" />
                            {note.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageSquare size={12} className="mr-1.5" />
                            {note.comments}
                          </div>
                        </div>
                        <button className="text-stone-400 hover:text-stone-900 transition-colors">
                           <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Knowledge Tab */}
        {activeTab === 'knowledge' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <SectionIntro
               icon={BookMarked}
               title="本周真知 · 重点关注"
               subtitle="家族信托视角下的艺术品配置策略"
               action="阅读报告"
               onAction={() => setSubPage('knowledge')}
             />

             <div className="space-y-8">
              {knowledgeArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedKnowledge(article)}
                  className="group relative"
                >
                  {/* Author Header */}
                  <div className="flex items-center mb-3 px-1">
                     <div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200 mr-2.5">
                        <img src={article.author.avatar} className="w-full h-full object-cover" alt={article.author.name} />
                     </div>
                     <div>
                        <div className="text-xs font-bold text-stone-900 flex items-center">
                           {article.author.name}
                           <ShieldCheck size={10} className="ml-1 text-amber-600" />
                        </div>
                        <div className="text-[10px] text-stone-400">{article.author.title}</div>
                     </div>
                     <div className="ml-auto">
                        <span className="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-500 rounded-full border border-stone-200">
                           {article.type}
                        </span>
                     </div>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300 border border-stone-100">
                    <div className="relative aspect-[2/1] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60"></div>
                    </div>

                    <div className="p-5 relative -mt-6 bg-white rounded-t-xl mx-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                      <h3 className="text-lg font-serif text-stone-900 mb-3 leading-snug group-hover:text-amber-800 transition-colors font-medium">
                        {article.title}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed mb-4 line-clamp-2 font-light">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between border-t border-stone-50 pt-3">
                        <div className="flex items-center text-stone-400 text-[10px] space-x-4 uppercase tracking-wider">
                          <div className="flex items-center">
                            <Clock size={12} className="mr-1.5" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center">
                            <Award size={12} className="mr-1.5" />
                            真知认证
                          </div>
                        </div>
                        <button
                           onClick={() => handleShare(article.title)}
                           className="text-stone-400 hover:text-stone-900 transition-colors"
                        >
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Live Tab */}
        {activeTab === 'live' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <SectionIntro
               icon={Radio}
               title="直播 · 品味发布会"
               subtitle="主理人实时讲解，品鉴官见证背书，直播后沉淀为视频手记"
               action="回放"
               onAction={() => toast.info('直播回放将沉淀为圈层视频手记')}
             />

             <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl bg-stone-950 text-white shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="清山茶事直播"
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center rounded-full bg-red-500/15 px-3 py-1 text-[10px] text-red-100 ring-1 ring-red-400/30">
                    <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                    正在直播
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] text-amber-200">清山茶事 · 新品发布 / 品鉴官对谈</p>
                    <h3 className="mt-1 font-serif text-xl leading-snug">云隐汝窑壶直播品味发布会</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={mastersData.qingshan.avatar} alt="陈清" className="mr-2 h-8 w-8 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-semibold">陈清 · 品味主理人</p>
                        <p className="text-[10px] text-stone-400">茶悟先生连线见证中</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-stone-200">1,284 人看</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {['品鉴官背书', '追问上墙', '直播价闭环'].map((label) => (
                      <div key={label} className="rounded-xl bg-white/8 px-2 py-2 text-[10px] text-stone-200">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.22em] text-amber-700">REPLAY NOTE</p>
                    <h3 className="mt-1 font-serif text-lg text-stone-900">直播精华手记</h3>
                  </div>
                  <PlayCircle size={20} className="text-amber-700" />
                </div>
                <div className="space-y-3">
                  {[
                    { title: '如何判断一把汝窑壶的出水稳定性？', meta: '品鉴官评论切片 · 03:18' },
                    { title: '会员追问：独饮容量应该怎么选？', meta: '追问上墙 · 01:46' },
                    { title: '直播价商品卡：库存、倒计时与心意清单', meta: '交易闭环演示 · 02:22' },
                  ].map((item) => (
                    <button key={item.title} className="flex w-full items-center justify-between rounded-2xl bg-stone-50 px-3 py-3 text-left">
                      <div>
                        <p className="text-xs font-medium text-stone-900">{item.title}</p>
                        <p className="mt-1 text-[10px] text-stone-400">{item.meta}</p>
                      </div>
                      <ChevronRight size={14} className="text-stone-300" />
                    </button>
                  ))}
                </div>
              </div>
             </div>
          </motion.div>
        )}

        {/* Circles Tab */}
        {activeTab === 'circles' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             {/* Beta Tests Section */}
             <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                   <h3 className="text-sm font-bold text-stone-900">稀缺体验 · 新品内测</h3>
                   <span className="text-[10px] text-stone-400">Invite Only</span>
                </div>
                {betaTests.map(test => (
                   <div key={test.id} className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-xl p-5 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl -mr-8 -mt-8"></div>
                      <div className="relative z-10">
                         <div className="flex justify-between items-start mb-2">
                            <span className="text-xs bg-amber-600/20 text-amber-300 border border-amber-600/30 px-1.5 py-0.5 rounded">{test.status}</span>
                            <span className="text-[10px] text-stone-400 flex items-center"><Target size={10} className="mr-1"/> {test.quota}</span>
                         </div>
                         <h4 className="text-lg font-serif mb-1">{test.title}</h4>
                         <p className="text-xs text-stone-400 mb-4 leading-relaxed">{test.desc}</p>
                         <button className="w-full py-2 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg hover:bg-white transition-colors">
                            申请内测资格
                         </button>
                      </div>
                   </div>
                ))}
             </div>

             {/* Circles List */}
             <div>
                <div className="flex items-center justify-between mb-3">
                   <h3 className="text-sm font-bold text-stone-900">为您匹配的圈子</h3>
                   <span className="text-[10px] text-stone-400">基于您的消费与偏好</span>
                </div>
                <div className="space-y-4">
                   {circles.map((circle, i) => (
                      <div key={circle.id} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center space-x-4">
                         <div className="w-16 h-16 rounded-lg bg-stone-200 flex-shrink-0 overflow-hidden">
                            <img src={circle.image} className="w-full h-full object-cover" alt={circle.name} />
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                               <h4 className="text-sm font-medium text-stone-900 mb-0.5">{circle.name}</h4>
                               <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-100">契合度 {circle.match}%</span>
                            </div>
                            <p className="text-xs text-stone-500 line-clamp-1 mb-2">{circle.desc}</p>
                            <div className="flex items-center text-[10px] text-stone-400">
                               <Users size={10} className="mr-1" /> {circle.members} 位成员
                            </div>
                         </div>
                         <button className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors text-stone-400">
                            <Plus size={16} />
                         </button>
                      </div>
                   ))}
                </div>
             </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
