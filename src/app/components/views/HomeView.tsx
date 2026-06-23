import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, Gem, Sparkles, Store, FileText, Building2, Heart, Gift, Calendar, CreditCard, Bell } from 'lucide-react';

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
        {/* 2. Care Reminders */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
           <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif text-stone-900 flex items-center">
                 <span className="mr-2 w-1 h-4 bg-amber-600 rounded-full"></span>
                 为你留意
              </h3>
           </div>
           
           <div className="flex space-x-3 overflow-x-auto pb-1 -mx-6 px-6 scrollbar-hide">
              <div onClick={() => onChangeView('store')} className="shrink-0 w-56 bg-stone-50 p-4 rounded-xl border border-stone-200 cursor-pointer hover:shadow-sm hover:border-stone-300 transition-all group">
                 <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                       <Gift size={16} className="text-amber-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <p className="text-xs font-medium text-stone-800 mb-0.5">妈妈生日还有7天</p>
                       <p className="text-[10px] text-stone-500 mb-2">去看看为她精选的礼物</p>
                       <span className="inline-flex items-center text-[10px] text-amber-700 font-medium">
                          挑选礼物 <ArrowRight size={10} className="ml-1" />
                       </span>
                    </div>
                 </div>
              </div>

              <div onClick={() => onChangeView('experience')} className="shrink-0 w-56 bg-stone-50 p-4 rounded-xl border border-stone-200 cursor-pointer hover:shadow-sm hover:border-stone-300 transition-all group">
                 <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                       <CreditCard size={16} className="text-amber-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <p className="text-xs font-medium text-stone-800 mb-0.5">2张体验券即将到期</p>
                       <p className="text-[10px] text-stone-500 mb-2">山隐私厨 · 周末可用</p>
                       <span className="inline-flex items-center text-[10px] text-amber-700 font-medium">
                          查看权益 <ArrowRight size={10} className="ml-1" />
                       </span>
                    </div>
                 </div>
              </div>

              <div onClick={() => onChangeView('dinner-event')} className="shrink-0 w-56 bg-stone-50 p-4 rounded-xl border border-stone-200 cursor-pointer hover:shadow-sm hover:border-stone-300 transition-all group">
                 <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                       <Calendar size={16} className="text-amber-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <p className="text-xs font-medium text-stone-800 mb-0.5">6月品宴本周六开席</p>
                       <p className="text-[10px] text-stone-500 mb-2">一席一会 · 余8位</p>
                       <span className="inline-flex items-center text-[10px] text-amber-700 font-medium">
                          立即报名 <ArrowRight size={10} className="ml-1" />
                       </span>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* 3. Today's Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
           <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif text-stone-900 flex items-center">
                 <span className="mr-2 w-1 h-4 bg-amber-600 rounded-full"></span>
                 今日亮点
              </h3>
              <span className="text-[10px] text-stone-400">每日精选 · 不贪多</span>
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

           {/* Two Products */}
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

        {/* 4. Ecosystem Updates */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
           <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif text-stone-900 flex items-center">
                 <span className="mr-2 w-1 h-4 bg-teal-600 rounded-full"></span>
                 生态动态
              </h3>
           </div>
           
           <div className="flex space-x-3 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
              <div onClick={() => onChangeView('store')} className="shrink-0 w-36 bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden cursor-pointer group">
                 <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBwcm9kdWN0JTIwdGVhJTIwY2VyYW1pY3xlbnwxfHx8fDE3NjQ1NzQwMDB8MA&ixlib=rb-4.1.0&q=80&w=400" 
                       alt="今日上新"
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-teal-600 text-white text-[9px] px-2 py-0.5 rounded-full flex items-center">
                       <Sparkles size={9} className="mr-1" /> 今日上新
                    </div>
                 </div>
                 <div className="p-3">
                    <h4 className="text-xs font-medium text-stone-900 mb-1">2026明前龙井新茶到港</h4>
                    <p className="text-[10px] text-stone-500">品鉴官严选 · 核心产区头采</p>
                 </div>
              </div>

              <div onClick={() => onChangeView('experience')} className="shrink-0 w-36 bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden cursor-pointer group">
                 <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjB3YXJtJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY0NTc0MDUwfDA&ixlib=rb-4.1.0&q=80&w=400" 
                       alt="新入驻商家"
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-amber-600 text-white text-[9px] px-2 py-0.5 rounded-full flex items-center">
                       <Store size={9} className="mr-1" /> 新入驻
                    </div>
                 </div>
                 <div className="p-3">
                    <h4 className="text-xs font-medium text-stone-900 mb-1">山隐·私厨料理</h4>
                    <p className="text-[10px] text-stone-500">会员专享8.5折 · 已认证</p>
                 </div>
              </div>

              <div onClick={() => onChangeView('community')} className="shrink-0 w-36 bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden cursor-pointer group">
                 <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwd3JpdGluZyUyMGNhbGxpZ3JhcGh5fGVufDF8fHx8MTc2NDU3NDEwMHww&ixlib=rb-4.1.0&q=80&w=400" 
                       alt="精选内容"
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-stone-800 text-white text-[9px] px-2 py-0.5 rounded-full flex items-center">
                       <FileText size={9} className="mr-1" /> 精选
                    </div>
                 </div>
                 <div className="p-3">
                    <h4 className="text-xs font-medium text-stone-900 mb-1">如何挑选一支好的沉香</h4>
                    <p className="text-[10px] text-stone-500">品鉴官手记 · 4.2k阅读</p>
                 </div>
              </div>

              <div onClick={() => onChangeView('dinner-event')} className="shrink-0 w-36 bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden cursor-pointer group">
                 <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjBwYXJ0eSUyMGNhbmRsZSUyMGxpZ2h0fGVufDF8fHx8MTc2NDU3NDE1MHww&ixlib=rb-4.1.0&q=80&w=400" 
                       alt="活动动态"
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-rose-600 text-white text-[9px] px-2 py-0.5 rounded-full flex items-center">
                       <Heart size={9} className="mr-1" /> 活动
                    </div>
                 </div>
                 <div className="p-3">
                    <h4 className="text-xs font-medium text-stone-900 mb-1">6月品宴·一席一会</h4>
                    <p className="text-[10px] text-stone-500">余位8席 · 本周六</p>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* 5. Co-Creation (Banner) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => onChangeView('co-builder-apply')}
          className="relative rounded-xl overflow-hidden bg-stone-900 cursor-pointer group"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
           <div className="p-6 flex items-center justify-between relative z-10">
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
        
        {/* Footer: Ecosystem Info */}
        <div className="pt-10 pb-4 space-y-6">
           <div className="text-center px-4">
              <p className="text-xs text-stone-500 font-serif leading-relaxed mb-3">
                 品你所想，爱你所爱
              </p>
              <p className="text-[10px] text-stone-400 leading-relaxed">
                 品货官是一个以"内循环生态"为底层逻辑的会员制消费平台。<br/>
                 我们为家庭用户严选真正解决问题的好产品，<br/>
                 让消费更省心、更值得、更有温度。
              </p>
           </div>

           <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl border border-stone-100 text-center cursor-pointer hover:border-stone-200 hover:shadow-sm transition-all group">
                 <Building2 size={18} className="mx-auto mb-2 text-stone-400 group-hover:text-amber-600 transition-colors" />
                 <h4 className="text-xs font-medium text-stone-800 mb-1">商家入驻</h4>
                 <p className="text-[9px] text-stone-400">线下优质商家合作</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-100 text-center cursor-pointer hover:border-stone-200 hover:shadow-sm transition-all group">
                 <Store size={18} className="mx-auto mb-2 text-stone-400 group-hover:text-amber-600 transition-colors" />
                 <h4 className="text-xs font-medium text-stone-800 mb-1">工厂/供应链合作</h4>
                 <p className="text-[9px] text-stone-400">源头工厂直供对接</p>
              </div>
           </div>

           <div className="text-center pt-4">
              <p className="text-[9px] text-stone-300 tracking-wider">
                 品货官 · 让消费回归信任与品质
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}