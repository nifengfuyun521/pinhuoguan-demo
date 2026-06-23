import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Clock, Camera, MessageSquare, User, ChevronRight, Share2, Play } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface DinnerEventProps {
  onBack: () => void;
}

export function DinnerEvent({ onBack }: DinnerEventProps) {
  const [activeTab, setActiveTab] = useState<'invitation' | 'live' | 'recap'>('invitation');
  const [rsvpStatus, setRsvpStatus] = useState(false);

  const galleryImages = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560440021-33f9b8a41ddc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551632436-cbf8dd354ca8?q=80&w=800&auto=format&fit=crop"
  ];

  const comments = [
    { user: "林先生", avatar: "https://i.pravatar.cc/150?u=1", text: "这次晚宴不仅是味蕾的享受，更是心灵的洗礼。创始人的理念让我深受触动。" },
    { user: "Sarah Wu", avatar: "https://i.pravatar.cc/150?u=2", text: "黑金主题太高级了，现场的每一件展品都想带回家！期待品货官的未来。" },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-sans pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-950/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} className="text-stone-300" />
        </button>
        <span className="text-sm font-serif tracking-widest text-stone-200">六月品宴</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <Share2 size={18} className="text-stone-300" />
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1606659894125-40824878b6ce?q=80&w=1080&auto=format&fit=crop" 
          alt="Dinner Event" 
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/0 via-stone-950/50 to-stone-950"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-2 py-1 bg-amber-600/20 border border-amber-500/30 text-amber-400 text-[10px] tracking-widest uppercase rounded mb-3 inline-block">
              Member Dinner
            </span>
            <h1 className="text-3xl font-serif text-white mb-2">六月品宴 · 一席一会</h1>
            <p className="text-stone-400 text-sm tracking-wide">山隐私厨会员专场 · 余 8 席</p>
          </motion.div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 sticky top-[72px] z-30 bg-stone-950">
        {['invitation', 'live', 'recap'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`relative text-xs tracking-widest uppercase py-2 transition-colors ${
              activeTab === tab ? 'text-amber-400 font-medium' : 'text-stone-500 hover:text-stone-300'
            }`}
          >
            {tab === 'invitation' && '邀请函'}
            {tab === 'live' && '现场直击'}
            {tab === 'recap' && '精彩回顾'}
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-px bg-amber-400"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'invitation' && (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                <h2 className="text-xl font-serif text-amber-100 mb-6">诚挚邀约</h2>
                <p className="text-stone-300 text-sm leading-loose mb-8 font-light">
                  尊敬的会员：<br/><br/>
                  这个周六，我们在山隐私厨留下一席。以时令食材入席，
                  也以家人、礼物与生活美学为话题，慢慢吃一顿真正放松的饭。
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-3 text-stone-400">
                    <Calendar size={16} />
                    <span className="text-sm">2026年6月27日</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-stone-400">
                    <Clock size={16} />
                    <span className="text-sm">18:00 - 21:00</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-stone-400">
                    <MapPin size={16} />
                    <span className="text-sm">上海 · 山隐私厨</span>
                  </div>
                </div>

                {!rsvpStatus ? (
                  <button 
                    onClick={() => setRsvpStatus(true)}
                    className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-white rounded text-sm tracking-widest transition-colors"
                  >
                    确认出席
                  </button>
                ) : (
                  <div className="py-3 bg-white/5 text-amber-500 rounded text-sm tracking-widest border border-amber-500/20">
                    已确认 · 期待光临
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <p className="text-[10px] text-stone-600 uppercase tracking-[0.2em]">Invitation Code: PHG-2025-VIP</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'live' && (
            <motion.div
              key="live"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              {/* Founder Speech */}
              <div className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer bg-stone-900">
                 <img 
                    src="https://images.unsplash.com/photo-1515169067750-d51a73b0516c?q=80&w=800&auto=format&fit=crop" 
                    alt="Founder Speech"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-3">
                       <Play size={20} className="text-white fill-white ml-1" />
                    </div>
                    <h3 className="text-lg font-serif text-white">创始人致辞</h3>
                    <p className="text-xs text-stone-300 mt-1">内测计划发布 · 平台使用教学</p>
                 </div>
              </div>

              {/* Live Products */}
              <div>
                <h3 className="text-amber-500 text-xs tracking-widest uppercase mb-4 font-medium">现场展品</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/5">
                    <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 rounded object-cover" alt="Product" />
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm text-stone-200 font-medium">千年古树 · 普洱茶饼</h4>
                      <p className="text-xs text-stone-500 mt-1">现场品鉴特供</p>
                    </div>
                    <button className="px-3 py-1.5 bg-white/10 text-xs text-stone-300 rounded-full hover:bg-white/20">详情</button>
                  </div>
                  <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/5">
                    <img src="https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 rounded object-cover" alt="Product" />
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm text-stone-200 font-medium">和田玉 · 籽料手串</h4>
                      <p className="text-xs text-stone-500 mt-1">温润如脂 · 值得珍藏</p>
                    </div>
                    <button className="px-3 py-1.5 bg-white/10 text-xs text-stone-300 rounded-full hover:bg-white/20">详情</button>
                  </div>
                </div>
              </div>

              {/* Interactive */}
              <div className="bg-gradient-to-br from-amber-900/20 to-stone-900 border border-amber-500/20 rounded-2xl p-6 text-center">
                 <h3 className="text-lg font-serif text-amber-200 mb-2">此刻 · 共享</h3>
                 <p className="text-xs text-stone-400 mb-6">发布您的第一条动态，成为社区创始见证人</p>
                 <button className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-full flex items-center justify-center space-x-2 transition-colors">
                    <Camera size={18} />
                    <span className="text-sm tracking-wide">发布现场动态</span>
                 </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'recap' && (
            <motion.div
              key="recap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              {/* Gallery */}
              <div>
                 <h3 className="text-amber-500 text-xs tracking-widest uppercase mb-4 font-medium">光影记录</h3>
                 <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3}}>
                    <Masonry gutter="10px">
                      {galleryImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          style={{width: "100%", display: "block", borderRadius: "8px"}}
                          alt="Event Moment"
                          className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      ))}
                    </Masonry>
                 </ResponsiveMasonry>
              </div>

              {/* UGC */}
              <div>
                 <h3 className="text-amber-500 text-xs tracking-widest uppercase mb-4 font-medium">会员心声</h3>
                 <div className="space-y-4">
                    {comments.map((comment, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                         <div className="flex items-center space-x-3 mb-3">
                           <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-800">
                             <img src={comment.avatar} alt={comment.user} className="w-full h-full object-cover" />
                           </div>
                           <span className="text-sm text-stone-200 font-medium">{comment.user}</span>
                         </div>
                         <p className="text-xs text-stone-400 leading-relaxed">
                           "{comment.text}"
                         </p>
                      </div>
                    ))}
                 </div>
                 
                 <button className="w-full mt-4 py-3 border border-white/10 text-stone-400 text-xs tracking-widest rounded hover:bg-white/5 transition-colors">
                   查看更多动态
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
