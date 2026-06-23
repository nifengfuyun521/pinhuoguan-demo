import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Heart, ThumbsUp, User, Sparkles, Plus, Clock, Share2, BookOpen, ShieldCheck, Users, Target, ArrowRight, Leaf, Award, BookMarked, Camera, Star, ChevronRight, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MasterNoteDetail } from './MasterNoteDetail';
import { MasterProfileView } from './MasterProfileView';

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

const lifeNotes = [
  {
    id: 1,
    title: "午后的静谧时光",
    image: "https://images.unsplash.com/photo-1678092936199-eb64396aa37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    author: { name: "Lin", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" },
    likes: 128
  },
  {
    id: 2,
    title: "米其林三星的艺术",
    image: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    author: { name: "Chef Wang", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" },
    likes: 245
  },
  {
    id: 3,
    title: "当代艺术展打卡",
    image: "https://images.unsplash.com/photo-1723974591057-ccadada1f283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    author: { name: "Artist J", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" },
    likes: 56
  },
  {
    id: 4,
    title: "居家美学",
    image: "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    author: { name: "Design Pro", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60" },
    likes: 892
  }
];

export function CommunityView() {
  const [activeTab, setActiveTab] = useState<'master' | 'knowledge' | 'circles' | 'notes'>('master');
  const [selectedNote, setSelectedNote] = useState<typeof masterNotes[0] | null>(null);
  const [selectedMaster, setSelectedMaster] = useState<typeof mastersData[keyof typeof mastersData] | null>(null);
  const [previousView, setPreviousView] = useState<'list' | 'note'>('list');

  const handleShare = (title: string) => {
     toast.success(
        <div className="flex flex-col">
           <span className="font-serif font-medium">观点海报已生成</span>
           <span className="text-xs text-stone-500">包含您的专家见解与"{title}"，可保存分享</span>
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

  if (selectedMaster) {
    const masterNotesForProfile = masterNotes.filter(n => n.master.id === selectedMaster.id);
    return (
      <MasterProfileView
        master={selectedMaster}
        notes={masterNotesForProfile}
        onBack={handleBackFromMaster}
        onNoteClick={handleMasterNoteClick}
      />
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
        />
      </div>
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
             onClick={() => setActiveTab('knowledge')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'knowledge' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             真知
           </button>
           <button
             onClick={() => setActiveTab('circles')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'circles' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             圈子
           </button>
           <button
             onClick={() => setActiveTab('notes')}
             className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
               activeTab === 'notes' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'
             }`}
           >
             笔记
           </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 space-y-6">

        {/* Master Tab */}
        {activeTab === 'master' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <div className="mb-6 bg-gradient-to-r from-amber-50 to-stone-50 border border-amber-100 rounded-xl p-4 flex items-center justify-between">
                <div>
                   <div className="flex items-center space-x-2 mb-1">
                      <Star size={14} className="text-amber-700 fill-amber-700" />
                      <span className="text-xs font-bold text-stone-900">本周推荐主理人</span>
                   </div>
                   <p className="text-[10px] text-stone-500">三位用心做事的人，三家值得探访的店</p>
                </div>
                <button className="bg-stone-900 text-amber-100 text-[10px] px-3 py-1.5 rounded-full">
                   全部
                </button>
             </div>

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

        {/* Knowledge Tab */}
        {activeTab === 'knowledge' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <div className="mb-6 bg-gradient-to-r from-amber-50 to-stone-50 border border-amber-100 rounded-xl p-4 flex items-center justify-between">
                <div>
                   <div className="flex items-center space-x-2 mb-1">
                      <BookMarked size={14} className="text-amber-700" />
                      <span className="text-xs font-bold text-stone-900">本周真知 · 重点关注</span>
                   </div>
                   <p className="text-[10px] text-stone-500">家族信托视角下的艺术品配置策略</p>
                </div>
                <button className="bg-stone-900 text-amber-100 text-[10px] px-3 py-1.5 rounded-full">
                   阅读报告
                </button>
             </div>

             <div className="space-y-8">
              {knowledgeArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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

        {/* Notes Tab */}
        {activeTab === 'notes' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <div className="flex items-center justify-between mb-4 px-1">
               <h3 className="text-sm font-bold text-stone-900">圈层生活</h3>
               <button className="flex items-center text-[10px] bg-stone-900 text-amber-50 px-3 py-1.5 rounded-full space-x-1">
                  <Camera size={12} />
                  <span>发布笔记</span>
               </button>
             </div>
             <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3}}>
                <Masonry gutter="12px">
                   {lifeNotes.map(note => (
                      <div key={note.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 break-inside-avoid hover:shadow-md transition-shadow">
                         <img src={note.image} className="w-full object-cover" alt={note.title} />
                         <div className="p-3">
                            <h4 className="text-xs font-serif font-medium text-stone-900 mb-2 line-clamp-2">{note.title}</h4>
                            <div className="flex justify-between items-center">
                               <div className="flex items-center space-x-1.5">
                                  <div className="w-4 h-4 rounded-full overflow-hidden bg-stone-100">
                                     <img src={note.author.avatar} className="w-full h-full object-cover" alt={note.author.name} />
                                  </div>
                                  <span className="text-[10px] text-stone-500 truncate max-w-[60px]">{note.author.name}</span>
                               </div>
                               <div className="flex items-center text-stone-400 text-[10px]">
                                  <Heart size={10} className="mr-0.5" /> {note.likes}
                               </div>
                            </div>
                         </div>
                      </div>
                   ))}
                </Masonry>
             </ResponsiveMasonry>
          </motion.div>
        )}

      </div>
    </div>
  );
}
