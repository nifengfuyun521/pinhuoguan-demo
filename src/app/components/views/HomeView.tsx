import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, MessageCircle, Gem } from 'lucide-react';

export function HomeView({ onChangeView }: { onChangeView: (view: string) => void }) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-stone-800">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1755685068178-4b57210ddcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjB0ZWElMjBjZXJlbW9ueSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjQ0OTc2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Zen Tea Ceremony" 
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-50"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-2 text-xs font-medium tracking-[0.3em] text-stone-700 uppercase">品货官</h2>
            <h1 className="mb-4 text-4xl font-serif font-light text-stone-900 leading-tight">
              生活<br/>即是修行
            </h1>
            <p className="mb-8 text-sm text-stone-600 tracking-wide opacity-90 max-w-xs mx-auto font-serif">
              在喧嚣中寻得一隅宁静<br/>于万物间照见本真自我
            </p>

            
            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 5, 0] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
              className="mt-12"
            >
              <div className="w-0.5 h-12 bg-stone-400/50 mx-auto rounded-full overflow-hidden">
                <div className="w-full h-1/2 bg-stone-800 animate-movedown"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 py-12 relative z-10 space-y-8 bg-stone-50">
        {/* 2. Circle (Community) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
           <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif text-stone-900 flex items-center">
                 <span className="mr-2 w-1 h-4 bg-amber-500 rounded-full"></span>
                 圈层 · 真知
              </h3>
              <span onClick={() => onChangeView('discovery')} className="text-xs text-stone-400 cursor-pointer hover:text-stone-600">探索更多</span>
           </div>
           
           <div 
             onClick={() => onChangeView('discovery')}
             className="bg-white p-5 rounded-xl shadow-sm border border-stone-100 cursor-pointer hover:shadow-md transition-shadow group"
           >
              <div className="flex items-start space-x-4">
                 <div className="w-20 h-20 bg-stone-100 rounded-lg overflow-hidden shrink-0 relative">
                    <img 
                       src="https://images.unsplash.com/photo-1589163045730-40797c5cdc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGNoaW5lc2UlMjBmZW5nJTIwc2h1aSUyMHplbiUyMGJhbGFuY2VkJTIwYnJpZ2h0fGVufDF8fHx8MTc2NDU3Mzg0OHww&ixlib=rb-4.1.0&q=80&w=1080" 
                       alt="Topic" 
                       className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-amber-500 text-white text-[8px] px-1.5 py-0.5 rounded-bl-lg font-medium">
                       堪舆私教
                    </div>
                 </div>
                 <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-stone-900 mb-1 leading-relaxed group-hover:text-amber-800 transition-colors">
                       顺势而居：现代豪宅的风水能量场构建
                    </h4>
                    <p className="text-xs text-stone-500 mb-2 line-clamp-1">
                       并非迷信，而是环境科学。从选址格局到室内陈设，解析如何打造“藏风聚气”的顶层居住空间。
                    </p>
                    <div className="flex items-center space-x-4 text-[10px] text-stone-400">
                       <span className="flex items-center">研习 20min</span>
                       <span className="flex items-center"><User size={10} className="mr-1" /> 1280 喜欢</span>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* 3. Selection Market (Store) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
           <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif text-stone-900 flex items-center">
                 <span className="mr-2 w-1 h-4 bg-stone-800 rounded-full"></span>
                 甄选品库
              </h3>
              <span onClick={() => onChangeView('store')} className="text-xs text-stone-400 cursor-pointer hover:text-stone-600">进入品库</span>
           </div>

           <div className="grid grid-cols-2 gap-3">
              <div onClick={() => onChangeView('store')} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 cursor-pointer group">
                 <div className="aspect-square bg-stone-100 rounded-lg mb-3 overflow-hidden relative">
                    <img 
                       src="https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRydWZmbGUlMjBvaWwlMjBib3R0bGUlMjBsdXh1cnklMjBjb3NtZXRpYyUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY0NTczMjAwfDA&ixlib=rb-4.1.0&q=80&w=400" 
                       alt="Product" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-medium text-stone-900">
                       回购王
                    </div>
                 </div>
                 <div className="text-xs font-serif text-stone-900 truncate">珍稀白松露精华油</div>
                 <div className="text-[10px] text-stone-500 mt-0.5">晨曦中的森林馈赠</div>
                 <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-900">¥1,680</span>
                    <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                       <ArrowRight size={10} />
                    </div>
                 </div>
              </div>

              <div onClick={() => onChangeView('store')} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 cursor-pointer group">
                 <div className="aspect-square bg-stone-100 rounded-lg mb-3 overflow-hidden relative">
                    <img 
                       src="https://images.unsplash.com/photo-1735815814303-0560d30455eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMHJlZCUyMGdpbnNlbmclMjByb290cyUyMHNsaWNlc3xlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=400" 
                       alt="Product" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <div className="text-xs font-serif text-stone-900 truncate">6年根红参切片</div>
                 <div className="text-[10px] text-stone-500 mt-0.5">守候六年的承诺</div>
                 <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-900">¥560</span>
                    <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                       <ArrowRight size={10} />
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* 4. Co-Creation (Banner) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => onChangeView('profile')}
          className="relative rounded-xl overflow-hidden bg-stone-900 cursor-pointer group"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
           <div 
             onClick={(e) => { e.stopPropagation(); onChangeView('co-builder-apply'); }}
             className="p-6 flex items-center justify-between relative z-10 cursor-pointer"
           >
              <div>
                 <div className="flex items-center space-x-2 mb-2">
                    <Gem size={14} className="text-amber-400" />
                    <span className="text-xs font-medium text-amber-100 tracking-wider">内容共建计划</span>
                 </div>
                 <h3 className="text-lg font-serif text-white mb-1">成为「品货」合伙人</h3>
                 <p className="text-xs text-stone-400">分享真知灼见，赢取永久分红权益</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
                 <ArrowRight size={16} />
              </div>
           </div>
        </motion.div>
        
        {/* Footer Quote */}
        <div className="pt-8 pb-4 text-center">
           <p className="text-[10px] text-stone-400 tracking-[0.2em] uppercase font-serif">Less is More · Luxury is Quality</p>
        </div>
      </div>
    </div>
  );
}