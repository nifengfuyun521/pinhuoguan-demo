import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Zap, QrCode, RefreshCw, ArrowRight, Utensils, Coffee, Ticket, Sparkles, Leaf, ChevronRight, Gift, HeartHandshake } from 'lucide-react';

interface EnergyViewProps {
  onBack: () => void;
  onNavigateToStore: () => void;
  autoScan?: boolean;
}

export function EnergyView({ onBack, onNavigateToStore, autoScan = false }: EnergyViewProps) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [showSyncSuccess, setShowSyncSuccess] = useState(false);
  const [showDonationSuccess, setShowDonationSuccess] = useState(false);
  const [energy, setEnergy] = useState(1240);
  const [contributionScore, setContributionScore] = useState(30); // Hidden credit score

  const handleSync = () => {
    if (isSyncing || showSyncSuccess) return;
    
    setIsSyncing(true);
    // Simulate API call: User spent 1000 RMB at a partner restaurant
    setTimeout(() => {
      setIsSyncing(false);
      setShowSyncSuccess(true);
      setEnergy(prev => prev + 1000);
      setContributionScore(prev => prev + 15); // Increase hidden credit
    }, 2000);
  };

  const handleDonate = () => {
    if (energy < 500) return;
    setEnergy(prev => prev - 500);
    setShowDonationSuccess(true);
    setTimeout(() => setShowDonationSuccess(false), 3000);
  };

  useEffect(() => {
    if (autoScan) {
      handleSync();
    }
  }, [autoScan]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 pb-20 font-sans">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-950/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} className="text-stone-300" />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-200">我的能量</span>
      </div>

      {/* Hero - Energy Visualization */}
      <div className="p-6 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 text-center py-8">
          <div className="flex items-center justify-center space-x-2 mb-2 opacity-70">
            <Zap size={16} className="text-amber-400 fill-amber-400" />
            <span className="text-xs tracking-widest uppercase text-amber-300">Current Energy</span>
          </div>
          <motion.h1 
            key={energy}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-400 font-medium tracking-tight mb-2"
          >
            {energy.toLocaleString()}
          </motion.h1>
          <p className="text-[10px] text-stone-400">活跃度动能 · 消费即挖矿</p>
        </div>

        {/* Action: Cross-industry Sync */}
        <div className="mt-6 bg-stone-900/50 rounded-2xl p-1 border border-white/10 backdrop-blur-md">
           <button 
             onClick={handleSync}
             disabled={isSyncing || showSyncSuccess}
             className="w-full relative overflow-hidden h-16 rounded-xl flex items-center justify-center group"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-stone-900/40 group-hover:opacity-100 opacity-50 transition-opacity"></div>
             
             {isSyncing ? (
                <div className="flex items-center space-x-3 text-amber-200">
                  <RefreshCw size={18} className="animate-spin" />
                  <span className="text-xs tracking-widest">正在识别消费账单...</span>
                </div>
             ) : showSyncSuccess ? (
                <div className="flex items-center space-x-3 text-green-300">
                   <Sparkles size={18} />
                   <span className="text-xs tracking-widest">入账成功 · 能量已到账</span>
                </div>
             ) : (
                <div className="flex items-center space-x-3 text-amber-200">
                  <QrCode size={18} />
                  <span className="text-xs tracking-widest">扫描账单 · 激活消费奖励</span>
                </div>
             )}
           </button>
        </div>

        {/* Feedback: Contribution Badge (The "Credit Score" Logic) */}
        <AnimatePresence>
           {showSyncSuccess && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="mt-4 bg-gradient-to-r from-amber-900/20 to-stone-900 border border-amber-500/20 rounded-xl p-4 flex items-center justify-between"
             >
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                      <Leaf size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm text-amber-100 font-medium">获得「生态贡献」标记</h4>
                      <p className="text-[10px] text-stone-400">您的消费为生态注入了活力，共建信用 +15</p>
                   </div>
                </div>
                <div className="text-right">
                   <span className="text-[10px] text-amber-500/80 block mb-1">共建者进度</span>
                   <div className="w-16 h-1 bg-stone-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "30%" }}
                        animate={{ width: `${contributionScore}%` }}
                        className="h-full bg-amber-500"
                      ></motion.div>
                   </div>
                </div>
             </motion.div>
           )}
        </AnimatePresence>
      </div>

      {/* AI Recommendation Context (Post-Sync) */}
      <AnimatePresence>
        {showSyncSuccess && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 mb-8 overflow-hidden"
          >
             <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl p-5 border border-amber-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                   <div>
                     <div className="flex items-center space-x-2 mb-2">
                        <span className="text-[10px] text-amber-300 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">AI 智能管家</span>
                        <span className="text-[10px] text-stone-500">Just for you</span>
                     </div>
                     <h3 className="text-sm text-white font-medium leading-relaxed">
                        检测到您在「荣府宴」的消费。<br/>
                        为您匹配到同源美学生活方案。
                     </h3>
                   </div>
                   <div className="bg-stone-950 p-2.5 rounded-lg border border-white/5">
                     <Utensils size={18} className="text-stone-400" />
                   </div>
                </div>

                {/* Recommendation Cards */}
                <div className="space-y-3 relative z-10">
                  {/* Item 1: Sake */}
                  <div 
                    onClick={onNavigateToStore}
                    className="flex items-center p-3 bg-stone-950/60 rounded-lg cursor-pointer hover:bg-stone-950 transition-colors border border-white/5"
                  >
                     <img 
                       src="https://images.unsplash.com/photo-1568563582396-4e82e98c4c6d?q=80&w=200&auto=format&fit=crop" 
                       className="w-14 h-14 rounded object-cover"
                       alt="Sake"
                     />
                     <div className="ml-3 flex-1">
                        <div className="flex justify-between items-start">
                          <div className="text-sm text-stone-200 font-serif">十四代 · 纯米大吟酿</div>
                          <span className="text-[10px] bg-amber-900/30 text-amber-300 px-1.5 rounded">私享折扣</span>
                        </div>
                        <p className="text-[10px] text-stone-500 mt-1 line-clamp-1">与今日主厨推荐菜系完美契合的清酒。</p>
                     </div>
                     <ChevronRight size={14} className="text-stone-600 ml-2" />
                  </div>

                  {/* Item 2: Decor */}
                  <div 
                    onClick={onNavigateToStore}
                    className="flex items-center p-3 bg-stone-950/60 rounded-lg cursor-pointer hover:bg-stone-950 transition-colors border border-white/5"
                  >
                     <img 
                       src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=200&auto=format&fit=crop" 
                       className="w-14 h-14 rounded object-cover"
                       alt="Decor"
                     />
                     <div className="ml-3 flex-1">
                        <div className="flex justify-between items-start">
                          <div className="text-sm text-stone-200 font-serif">侘寂风 · 粗陶花器</div>
                          <span className="text-[10px] bg-amber-900/30 text-amber-300 px-1.5 rounded">能量兑换</span>
                        </div>
                        <p className="text-[10px] text-stone-500 mt-1 line-clamp-1">延续餐厅空间的静谧美学体验。</p>
                     </div>
                     <ChevronRight size={14} className="text-stone-600 ml-2" />
                  </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Charity & Co-creation */}
      <div className="px-6 mb-8">
         <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">能量公益</h3>
            <span className="text-[10px] text-amber-400">Eco-system Co-creation</span>
         </div>
         
         <div className="bg-stone-900 rounded-xl overflow-hidden border border-white/10 relative group">
            <div className="h-32 relative">
               <img 
                 src="https://images.unsplash.com/photo-1719985968746-20cfb5634cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcnVyYWwlMjBjbGFzc3Jvb20lMjB0cmFkaXRpb25hbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQ1NzAyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                 alt="Charity"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
               <div className="absolute bottom-3 left-4">
                  <h4 className="text-sm font-serif text-amber-100">乡村国学角计划</h4>
                  <p className="text-[10px] text-stone-300">贵州 · 黔东南</p>
               </div>
            </div>
            
            <div className="p-4">
               <div className="flex justify-between text-[10px] text-stone-400 mb-1">
                  <span>募集进度</span>
                  <span className="text-amber-500">84,200 / 100,000</span>
               </div>
               <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden mb-4">
                  <div className="w-[84%] h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
               </div>
               
               <div className="flex items-center justify-between">
                  <div className="flex items-center text-[10px] text-stone-500">
                     <Leaf size={12} className="mr-1 text-amber-600" />
                     捐赠可获「荣誉守护人」勋章
                  </div>
                  <button 
                    onClick={handleDonate}
                    disabled={energy < 500}
                    className="px-4 py-1.5 bg-amber-900/30 hover:bg-amber-700 border border-amber-500/30 rounded-full text-[10px] text-amber-100 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     <HeartHandshake size={12} className="mr-1" /> 
                     捐赠 500 能量
                  </button>
               </div>
            </div>

            <AnimatePresence>
               {showDonationSuccess && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   className="absolute inset-0 z-20 bg-stone-900/95 flex flex-col items-center justify-center text-center p-6"
                 >
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-amber-900/50">
                       <HeartHandshake size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-serif text-amber-100 mb-1">感谢您的善意</h3>
                    <p className="text-xs text-stone-400">您的能量已化作知识的微光。</p>
                 </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>

      {/* Immediate Rights (Energy Exchange) */}
      <div className="px-6 py-2">
         <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">即时权益兑换</h3>
            <span className="text-[10px] text-amber-400">Energy Rewards</span>
         </div>
         <div className="space-y-4">
            {[
              { title: "匠人体验课", cost: 2000, desc: "景德镇陶瓷手作体验券", icon: Ticket, img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=200&auto=format&fit=crop" },
              { title: "黑金下午茶", cost: 1500, desc: "宝格丽酒店双人下午茶", icon: Coffee, img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=200&auto=format&fit=crop" },
            ].map((item, idx) => (
              <div key={idx} className="flex bg-white/5 rounded-xl overflow-hidden border border-white/5 group hover:border-amber-500/30 transition-colors">
                 <div className="w-24 relative">
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt={item.title} />
                 </div>
                 <div className="flex-1 p-4">
                    <h4 className="text-sm text-stone-200 font-medium mb-1">{item.title}</h4>
                    <p className="text-[10px] text-stone-500 mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                       <span className="text-xs text-amber-400 font-medium flex items-center">
                         <Zap size={10} className="mr-1 fill-amber-400" /> {item.cost}
                       </span>
                       <button className="px-3 py-1 bg-white/10 hover:bg-amber-600 hover:text-white rounded-full text-[10px] text-stone-300 transition-colors flex items-center">
                         <Gift size={10} className="mr-1" /> 兑换
                       </button>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
