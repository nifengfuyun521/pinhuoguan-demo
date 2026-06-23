import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MessageSquare, Heart, Eye, CheckCircle2, PenTool, Image as ImageIcon, MoreHorizontal, Share2, X, FileText, Camera, ShieldCheck } from 'lucide-react';

interface CoCreationContentViewProps {
  onBack: () => void;
}

export function CoCreationContentView({ onBack }: CoCreationContentViewProps) {
  const [activeTab, setActiveTab] = useState<'reviews' | 'notes'>('reviews');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const reviews = [
    {
      id: 1,
      title: "Eames Lounge Chair：坐在云端思考的艺术",
      subtitle: "Herman Miller · 经典舒适",
      excerpt: "不仅是一把椅子，更是一个让思维沉淀的容器。皮革的触感随着时间愈发温润，如同老友般的陪伴。",
      image: "https://images.unsplash.com/photo-1651275666236-8ecf57b4c66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsb3VuZ2UlMjBjaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc2NDU2OTk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 128,
      comments: 32,
      views: 2405,
      status: 'certified', // certified = +50 points
      date: '2天前'
    },
    {
      id: 2,
      title: "Leica M11：捕捉城市光影的灵魂",
      subtitle: "Leica · 摄影美学",
      excerpt: "旁轴取景的仪式感，让我重新审视观察世界的方式。快门的每一次起落，都是对当下的致敬。",
      image: "https://images.unsplash.com/photo-1554998872-7a9f249a0e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWljYSUyMGNhbWVyYSUyMGNsYXNzaWN8ZW58MXx8fHwxNzY0NTY5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 89,
      comments: 15,
      views: 1890,
      status: 'pending',
      date: '1周前'
    }
  ];

  const notes = [
    {
      id: 3,
      title: "山野Glamping：逃离喧嚣的48小时",
      excerpt: "在莫干山的深处，找回了久违的内心的宁静。清晨的露水和夜晚的篝火，是最好的疗愈。",
      image: "https://images.unsplash.com/photo-1759421754364-2310e30f2bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnbGFtcGluZyUyMHRlbnQlMjBmb3Jlc3R8ZW58MXx8fHwxNzY0NTcwMDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 342,
      comments: 56,
      views: 5600,
      status: 'featured', // featured = +200 points
      date: '昨天'
    },
    {
      id: 4,
      title: "一人食 Omakase：孤独的美食仪式",
      excerpt: "不需要迁就他人的口味，专注于食材本身的味道。主厨的每一道出品，都像是在进行一场无声的对话。",
      image: "https://images.unsplash.com/photo-1763943431214-275e64002f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwc3VzaGklMjBvbWFrYXNlfGVufDF8fHx8MTc2NDU3MDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 156,
      comments: 24,
      views: 3200,
      status: 'certified',
      date: '3天前'
    }
  ];

  const content = activeTab === 'reviews' ? reviews : notes;

  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors -ml-2">
              <ArrowLeft size={20} className="text-stone-900" />
            </button>
            <span className="ml-2 text-sm font-serif font-medium text-stone-900">我的内容共建</span>
          </div>
          <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
             <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-6 space-x-8">
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'reviews' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            严选评测
            {activeTab === 'reviews' && (
              <motion.div layoutId="activeCoContentTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('notes')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'notes' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            生活笔记
            {activeTab === 'notes' && (
              <motion.div layoutId="activeCoContentTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
            )}
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {content.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={item.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 group"
          >
            {/* Image Section */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-3 right-3">
                 {item.status === 'certified' && (
                    <div className="bg-amber-500/90 backdrop-blur text-white text-[10px] px-2 py-1 rounded-full flex items-center shadow-sm">
                       <CheckCircle2 size={10} className="mr-1" />
                       认证 +50
                    </div>
                 )}
                 {item.status === 'featured' && (
                    <div className="bg-stone-900/90 backdrop-blur text-amber-300 text-[10px] px-2 py-1 rounded-full flex items-center shadow-sm border border-amber-500/30">
                       <CheckCircle2 size={10} className="mr-1" />
                       精选 +200
                    </div>
                 )}
                 {item.status === 'pending' && (
                    <div className="bg-black/50 backdrop-blur text-white text-[10px] px-2 py-1 rounded-full flex items-center">
                       审核中
                    </div>
                 )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-base font-serif font-medium text-stone-900 leading-snug pr-4">{item.title}</h3>
                 <span className="text-[10px] text-stone-400 whitespace-nowrap mt-1">{item.date}</span>
              </div>
              
              {'subtitle' in item && (
                 <p className="text-xs text-amber-700/80 mb-2 font-medium">{(item as any).subtitle}</p>
              )}
              
              <p className="text-xs text-stone-500 leading-relaxed mb-4 line-clamp-2">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-stone-50 pt-4 mt-2">
                 <div className="flex space-x-4">
                    <div className="flex items-center text-[10px] text-stone-400">
                       <Eye size={12} className="mr-1" /> {item.views}
                    </div>
                    <div className="flex items-center text-[10px] text-stone-400">
                       <Heart size={12} className="mr-1" /> {item.likes}
                    </div>
                    <div className="flex items-center text-[10px] text-stone-400">
                       <MessageSquare size={12} className="mr-1" /> {item.comments}
                    </div>
                 </div>
                 <button className="text-stone-400 hover:text-stone-900 transition-colors">
                    <Share2 size={14} />
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-6 z-50">
         <button 
           onClick={() => setShowCreateModal(true)}
           className="w-14 h-14 bg-stone-900 text-white rounded-full shadow-lg shadow-stone-900/30 flex items-center justify-center hover:bg-stone-800 transition-transform hover:scale-105 active:scale-95"
         >
            <PenTool size={24} />
         </button>
      </div>

      {/* Creation Guidelines Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-stone-900/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-stone-100 rounded-2xl p-6 w-full max-w-sm relative overflow-hidden shadow-2xl"
            >
               <button 
                 onClick={() => setShowCreateModal(false)}
                 className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
               >
                 <X size={24} />
               </button>
               
               <div className="flex flex-col items-center mb-6">
                 <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-amber-500/20">
                    <PenTool size={24} className="text-white" />
                 </div>
                 <h3 className="text-xl font-serif text-stone-900">深度内容创作</h3>
                 <p className="text-xs text-stone-500 mt-1">分享即投资 · 信用资产沉淀</p>
               </div>

               <div className="space-y-4 mb-8">
                 <div className="flex items-start space-x-3">
                    <FileText size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="text-sm font-medium text-stone-900">有深度的体验</h4>
                       <p className="text-[10px] text-stone-500 leading-relaxed">
                         拒绝泛泛而谈。需包含300字以上真实体验，解决真实场景痛点（如无敏家居、茶器养护）。
                       </p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-3">
                    <Camera size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="text-sm font-medium text-stone-900">有审美的视觉</h4>
                       <p className="text-[10px] text-stone-500 leading-relaxed">
                         图片需体现产品质感与生活美学。优质图文将获得「精选」标记。
                       </p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-3">
                    <ShieldCheck size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="text-sm font-medium text-stone-900">价值认证回报</h4>
                       <p className="text-[10px] text-stone-500 leading-relaxed">
                         审核通过后，将获得 <span className="text-amber-600 font-bold">生态贡献值 +50</span>；<br/>
                         入选「真知区」额外奖励 <span className="text-amber-600 font-bold">+200</span>。
                       </p>
                    </div>
                 </div>
               </div>

               <button 
                 onClick={() => setShowCreateModal(false)}
                 className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium tracking-widest rounded-xl transition-colors"
               >
                 开始创作
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
