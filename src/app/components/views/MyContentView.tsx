import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MessageSquare, Heart, Eye, CheckCircle2, Bookmark, ThumbsUp, PenTool, MoreHorizontal, Share2, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface MyContentViewProps {
  onBack: () => void;
}

const tabs = [
  { id: 'notes', label: '手记', icon: PenTool },
  { id: 'questions', label: '追问', icon: MessageSquare },
  { id: 'favorites', label: '收藏', icon: Bookmark },
  { id: 'following', label: '认同', icon: ThumbsUp },
];

const myNotes = [
  {
    id: 1,
    title: '山野Glamping：逃离喧嚣的48小时',
    excerpt: '在莫干山的深处，找回了久违的内心的宁静。清晨的露水和夜晚的篝火，是最好的疗愈。',
    image: 'https://images.unsplash.com/photo-1759421754364-2310e30f2bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    likes: 342,
    comments: 56,
    views: 5600,
    status: 'featured',
    date: '昨天',
    type: '生活笔记',
  },
  {
    id: 2,
    title: 'Eames Lounge Chair：坐在云端思考的艺术',
    excerpt: '不仅是一把椅子，更是一个让思维沉淀的容器。皮革的触感随着时间愈发温润，如同老友般的陪伴。',
    image: 'https://images.unsplash.com/photo-1651275666236-8ecf57b4c66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    likes: 128,
    comments: 32,
    views: 2405,
    status: 'certified',
    date: '2天前',
    type: '严选评测',
  },
  {
    id: 3,
    title: '一人食 Omakase：孤独的美食仪式',
    excerpt: '不需要迁就他人的口味，专注于食材本身的味道。主厨的每一道出品，都像是在进行一场无声的对话。',
    image: 'https://images.unsplash.com/photo-1763943431214-275e64002f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    likes: 156,
    comments: 24,
    views: 3200,
    status: 'certified',
    date: '3天前',
    type: '生活笔记',
  },
  {
    id: 4,
    title: 'Leica M11：捕捉城市光影的灵魂',
    excerpt: '旁轴取景的仪式感，让我重新审视观察世界的方式。快门的每一次起落，都是对当下的致敬。',
    image: 'https://images.unsplash.com/photo-1554998872-7a9f249a0e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    likes: 89,
    comments: 15,
    views: 1890,
    status: 'pending',
    date: '1周前',
    type: '严选评测',
  },
];

const myQuestions = [
  {
    id: 1,
    question: '云隐汝窑壶适合泡什么茶？',
    answer: '云隐壶胎薄，散热快，适合泡绿茶、白茶和轻发酵的乌龙茶，能更好地展现茶香的清鲜。',
    answerer: '茶悟先生',
    answererTitle: '资深茶器品鉴师',
    answererAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60',
    date: '3天前',
    status: 'replied',
  },
  {
    id: 2,
    question: '酸种面包可以冷冻保存吗？',
    answer: '可以。切好后用保鲜膜包好冷冻，吃的时候拿出来室温解冻，然后用烤箱或吐司机复烤3-5分钟，口感几乎和新鲜的一样。',
    answerer: '林小麦',
    answererTitle: '面包主理人',
    answererAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60',
    date: '5天前',
    status: 'replied',
  },
  {
    id: 3,
    question: '飞发舍需要提前预约吗？',
    answer: null,
    answerer: null,
    answererTitle: null,
    answererAvatar: null,
    date: '1天前',
    status: 'pending',
  },
];

const myFavorites = [
  {
    id: 1,
    title: '云隐 · 手工汝窑茶壶',
    price: 680,
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=300&auto=format&fit=crop&q=60',
    type: '商品',
    date: '收藏于3天前',
  },
  {
    id: 2,
    title: '做茶器十年，我终于懂了"留白"的意思',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&auto=format&fit=crop&q=60',
    type: '手记',
    date: '收藏于1周前',
  },
  {
    id: 3,
    title: '经典乡村酸种面包',
    price: 58,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&auto=format&fit=crop&q=60',
    type: '商品',
    date: '收藏于2周前',
  },
  {
    id: 4,
    title: '魔都酸种面包测评Top5：麦乡能排第几？',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&auto=format&fit=crop&q=60',
    type: '评测',
    date: '收藏于2周前',
  },
  {
    id: 5,
    title: '素月 · 青瓷品茗杯',
    price: 198,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300&auto=format&fit=crop&q=60',
    type: '商品',
    date: '收藏于1个月前',
  },
];

const myFollowing = [
  {
    id: 1,
    name: '茶悟先生',
    title: '资深茶器品鉴师',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60',
    level: '首席品鉴官',
    notesCount: 86,
    isFollowing: true,
  },
  {
    id: 2,
    name: '陈清',
    title: '茶器主理人',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
    storeName: '清山茶事',
    notesCount: 12,
    isFollowing: true,
  },
  {
    id: 3,
    name: '林小麦',
    title: '面包主理人',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60',
    storeName: '麦乡面包坊',
    notesCount: 8,
    isFollowing: true,
  },
  {
    id: 4,
    name: '面食研究所',
    title: '烘焙美食博主',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60',
    level: '认证品鉴官',
    notesCount: 124,
    isFollowing: false,
  },
  {
    id: 5,
    name: '阿飞',
    title: '发型主理人',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60',
    storeName: '飞发舍',
    notesCount: 6,
    isFollowing: true,
  },
];

export function MyContentView({ onBack }: MyContentViewProps) {
  const [activeTab, setActiveTab] = useState<string>('notes');

  const stats = {
    notes: myNotes.length,
    questions: myQuestions.length,
    favorites: myFavorites.length,
    following: myFollowing.length,
  };

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'featured':
        return (
          <div className="bg-stone-900/90 backdrop-blur text-amber-300 text-[10px] px-2 py-1 rounded-full flex items-center shadow-sm border border-amber-500/30">
            <CheckCircle2 size={10} className="mr-1" />
            精选
          </div>
        );
      case 'certified':
        return (
          <div className="bg-amber-500/90 backdrop-blur text-white text-[10px] px-2 py-1 rounded-full flex items-center shadow-sm">
            <CheckCircle2 size={10} className="mr-1" />
            认证
          </div>
        );
      case 'pending':
        return (
          <div className="bg-black/50 backdrop-blur text-white text-[10px] px-2 py-1 rounded-full flex items-center">
            审核中
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors -ml-2">
              <ArrowLeft size={20} className="text-stone-900" />
            </button>
            <span className="ml-2 text-sm font-serif font-medium text-stone-900">我的内容</span>
          </div>
          <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
             <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-4 space-x-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 pb-3 px-3 text-xs font-medium transition-colors relative whitespace-nowrap ${
                  isActive ? 'text-stone-900' : 'text-stone-400'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-amber-600' : 'text-stone-300'}`}>
                  {stats[tab.id as keyof typeof stats]}
                </span>
                {isActive && (
                  <motion.div layoutId="activeMyContentTab" className="absolute bottom-0 left-3 right-3 h-0.5 bg-stone-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <AnimatePresence mode="wait">
          {activeTab === 'notes' && (
            <motion.div
              key="notes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {myNotes.map((note, i) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={note.image} alt={note.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-3 right-3">
                      {renderStatusBadge(note.status)}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur text-stone-700 text-[10px] px-2 py-1 rounded-full">
                        {note.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-base font-serif font-medium text-stone-900 leading-snug pr-4">{note.title}</h3>
                       <span className="text-[10px] text-stone-400 whitespace-nowrap mt-1">{note.date}</span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed mb-4 line-clamp-2">
                      {note.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-stone-50 pt-3 mt-2">
                       <div className="flex space-x-4">
                          <div className="flex items-center text-[10px] text-stone-400">
                             <Eye size={12} className="mr-1" /> {note.views}
                          </div>
                          <div className="flex items-center text-[10px] text-stone-400">
                             <Heart size={12} className="mr-1" /> {note.likes}
                          </div>
                          <div className="flex items-center text-[10px] text-stone-400">
                             <MessageSquare size={12} className="mr-1" /> {note.comments}
                          </div>
                       </div>
                       <button className="text-stone-400 hover:text-stone-900 transition-colors">
                          <Share2 size={14} />
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {myQuestions.map((q, i) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-stone-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-sm font-medium text-stone-900 flex-1 pr-4">{q.question}</h4>
                    <span className="text-[10px] text-stone-400 whitespace-nowrap flex items-center">
                      <Clock size={10} className="mr-1" />
                      {q.date}
                    </span>
                  </div>
                  {q.status === 'replied' && q.answer && q.answerer && q.answererAvatar ? (
                    <div className="bg-stone-50 rounded-lg p-3 border border-stone-100">
                      <div className="flex items-center mb-2">
                        <img src={q.answererAvatar} alt="" className="w-6 h-6 rounded-full mr-2" />
                        <div>
                          <div className="text-xs font-medium text-stone-900">{q.answerer}</div>
                          <div className="text-[10px] text-stone-400">{q.answererTitle}</div>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">{q.answer}</p>
                    </div>
                  ) : (
                    <div className="flex items-center text-[11px] text-stone-400">
                      <Clock size={12} className="mr-1.5" />
                      等待回复中，预计 24 小时内回复
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'favorites' && (
            <motion.div
              key="favorites"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {myFavorites.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/90 backdrop-blur text-stone-600 text-[10px] px-2 py-0.5 rounded-full">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-xs font-medium text-stone-900 line-clamp-2 leading-snug mb-2">{item.title}</h4>
                    {'price' in item && (
                      <div className="text-sm font-serif text-amber-700 mb-1">¥{item.price}</div>
                    )}
                    <div className="text-[10px] text-stone-400">{item.date}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'following' && (
            <motion.div
              key="following"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              {myFollowing.map((person, i) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-stone-100 flex items-center space-x-3"
                >
                  <img src={person.avatar} alt="" className="w-12 h-12 rounded-full" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <h4 className="text-sm font-medium text-stone-900">{person.name}</h4>
                    </div>
                    <div className="text-[11px] text-stone-400 mt-0.5">
                      {'storeName' in person ? person.storeName : person.level}
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">
                      {person.notesCount} 篇内容
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      toast.info(person.isFollowing ? '已取消认同' : '已添加认同');
                    }}
                    className={`text-[11px] px-3 py-1.5 rounded-full transition-colors ${
                      person.isFollowing
                        ? 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        : 'bg-stone-900 text-amber-100 hover:bg-stone-800'
                    }`}
                  >
                    {person.isFollowing ? '已认同' : '+ 认同'}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
