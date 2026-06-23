import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Diamond, TrendingUp, Users, Award, Lock, Star, Zap, FileCheck, Share2, HelpCircle, X, MessageSquare, ShoppingBag } from 'lucide-react';

interface SocialCapitalViewProps {
  onBack: () => void;
}

export function SocialCapitalView({ onBack }: SocialCapitalViewProps) {
  const [showRules, setShowRules] = React.useState(false);

  const benefits = [
    { 
      title: "新品投票权", 
      desc: "决定下季度引入的茶器品牌", 
      required: 500, 
      icon: <Award size={20} />,
      status: 'unlocked'
    },
    { 
      title: "内测资格", 
      desc: "优先体验高定护肤系列", 
      required: 1200, 
      icon: <Zap size={20} />,
      status: 'locked' 
    },
    { 
      title: "私享晚宴", 
      desc: "年度品鉴晚宴受邀资格", 
      required: 3000, 
      icon: <Diamond size={20} />,
      status: 'locked' 
    },
    { 
      title: "合伙人权益", 
      desc: "参与平台未来异业合作分红", 
      required: 10000, 
      icon: <Users size={20} />,
      status: 'locked' 
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 pb-24 font-sans">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-950/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} className="text-stone-300" />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-200">我的社交资本</span>
      </div>

      {/* Hero - Asset Visualization */}
      <div className="p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center py-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-2 opacity-70">
            <Diamond size={16} className="text-amber-400" />
            <span className="text-xs tracking-widest uppercase text-amber-400">当前生态贡献值</span>
            <button onClick={() => setShowRules(true)} className="text-amber-400/60 hover:text-amber-400 transition-colors">
               <HelpCircle size={14} />
            </button>
          </div>
          <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 font-medium tracking-tight mb-2">
            842
          </h1>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-[10px] tracking-wide">
            <TrendingUp size={12} className="mr-1" />
            本周新增 +128
          </div>
        </motion.div>

        {/* Reputation System (New Feature) */}
        <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-1 border border-white/10 mb-6">
           <div className="bg-stone-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center space-x-2">
                    <Star size={16} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-stone-200">圈层声望</span>
                 </div>
                 <span className="text-[10px] text-stone-500">仅对同契会馆成员可见</span>
              </div>
              
              <div className="flex items-center space-x-3 mb-3">
                 <div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-3/4 rounded-full"></div>
                 </div>
                 <span className="text-xs text-amber-400 font-medium">高级品鉴官</span>
              </div>
              <p className="text-[10px] text-stone-400 leading-relaxed">
                 您在「茶文化」板块的深度分享获得了 32 位成员的共鸣，正在形成影响力。
              </p>
           </div>
        </div>

        {/* Asset Composition Chart (Simplified Visual) */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
          <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">资产构成来源</h3>
          <div className="flex items-end space-x-4 h-32">
            {/* Bar 1: Personal Contribution */}
            <div className="flex-1 flex flex-col justify-end group">
              <div className="mb-2 text-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-amber-300">60%</div>
              <div className="w-full bg-stone-800 rounded-t-lg relative overflow-hidden h-[60%]">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-amber-700/40"></div>
              </div>
              <span className="text-[10px] text-stone-500 text-center mt-2">价值认证</span>
            </div>
            
            {/* Bar 2: Network Value (The Pipeline) */}
            <div className="flex-1 flex flex-col justify-end group">
               <div className="mb-2 text-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-amber-300">40%</div>
               <div className="w-full bg-stone-800 rounded-t-lg relative overflow-hidden h-[40%]">
                 <div className="absolute inset-0 bg-gradient-to-t from-amber-600 to-amber-400 animate-pulse"></div>
               </div>
               <span className="text-[10px] text-amber-400 text-center mt-2 font-medium">社交网络</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rights & Benefits */}
      <div className="px-6 py-4">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">权益兑换</h3>
        <div className="space-y-3">
          {benefits.map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${item.status === 'unlocked' ? 'bg-amber-900/10 border-amber-500/30' : 'bg-white/5 border-white/5'} flex items-center justify-between`}>
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.status === 'unlocked' ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-500'}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-medium ${item.status === 'unlocked' ? 'text-amber-100' : 'text-stone-400'}`}>{item.title}</h4>
                  <p className="text-[10px] text-stone-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
              <div className="text-right">
                 {item.status === 'locked' ? (
                   <div className="flex flex-col items-end">
                     <Lock size={14} className="text-stone-600 mb-1" />
                     <span className="text-[10px] text-stone-600">需 {item.required}</span>
                   </div>
                 ) : (
                   <span className="text-[10px] px-2 py-1 bg-amber-500/20 text-amber-400 rounded border border-amber-500/20">已拥有</span>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-950 via-stone-950 to-transparent z-30">
         <div className="flex space-x-3 max-w-md mx-auto">
            <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-stone-300 text-xs tracking-widest transition-colors flex items-center justify-center">
              <FileCheck size={14} className="mr-2" />
              导出信用凭证
            </button>
            <button className="flex-1 py-3 bg-amber-700 hover:bg-amber-600 shadow-lg shadow-amber-900/20 rounded-full text-white text-xs tracking-widest transition-colors flex items-center justify-center">
              <Share2 size={14} className="mr-2" />
              拓展社交网络
            </button>
         </div>
      </div>

      <AnimatePresence>
        {showRules && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-6 w-full max-w-sm relative overflow-hidden"
            >
               <button 
                 onClick={() => setShowRules(false)}
                 className="absolute top-4 right-4 text-stone-500 hover:text-stone-300"
               >
                 <X size={20} />
               </button>
               
               <h3 className="text-xl font-serif text-amber-100 mb-6 flex items-center">
                 <Diamond size={20} className="mr-2 text-amber-500" />
                 生态贡献值获取攻略
               </h3>

               <div className="space-y-4">
                 <div className="flex items-start space-x-4 p-3 bg-stone-800/50 rounded-xl border border-stone-700/50">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-500">
                       <ShoppingBag size={18} />
                    </div>
                    <div>
                       <h4 className="text-sm font-medium text-amber-100 mb-1">消费即挖矿</h4>
                       <p className="text-[10px] text-stone-400 leading-relaxed">
                          购买“品货官”严选商品，获得等额生态贡献值。<br/>
                          <span className="text-amber-500/80">1 RMB = 1 生态贡献值</span>
                       </p>
                    </div>
                 </div>

                 <div className="flex items-start space-x-4 p-3 bg-stone-800/50 rounded-xl border border-stone-700/50">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-500">
                       <MessageSquare size={18} />
                    </div>
                    <div>
                       <h4 className="text-sm font-medium text-amber-100 mb-1">内容共建</h4>
                       <p className="text-[10px] text-stone-400 leading-relaxed">
                          发布优质商品评测或生活方式笔记。<br/>
                          <span className="text-amber-500/80">发布认证 +50 / 精选 +200</span>
                       </p>
                    </div>
                 </div>

                 <div className="flex items-start space-x-4 p-3 bg-stone-800/50 rounded-xl border border-stone-700/50">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-500">
                       <Share2 size={18} />
                    </div>
                    <div>
                       <h4 className="text-sm font-medium text-amber-100 mb-1">社交资本</h4>
                       <p className="text-[10px] text-stone-400 leading-relaxed">
                          分享商品或邀请好友加入同契会馆。<br/>
                          <span className="text-amber-500/80">有效分享 +50 / 邀请成功 +500</span>
                       </p>
                    </div>
                 </div>
               </div>

               <button 
                 onClick={() => setShowRules(false)}
                 className="w-full mt-6 py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium tracking-widest rounded-xl transition-colors"
               >
                 我知道了
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}