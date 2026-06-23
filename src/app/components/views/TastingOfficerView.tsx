import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Star, Award, Zap, ChevronRight, Check } from 'lucide-react';

interface TastingOfficerViewProps {
  onBack: () => void;
}

export function TastingOfficerView({ onBack }: TastingOfficerViewProps) {
  const stages = [
    {
      title: '基础品鉴官',
      subtitle: 'ECO-NODE',
      desc: '完成基础门槛并具备推荐试用资格的基础生态节点。',
      benefits: [
        '会员卡推荐权限与分成',
        '平台新品优先试用资格',
        '基础推荐收益自然顺延',
        '专属生态数据看板'
      ],
      icon: <Award className="w-5 h-5 text-stone-500" />,
      theme: {
        bg: 'bg-white',
        border: 'border-stone-200',
        textTitle: 'text-stone-800',
        textSubtitle: 'text-stone-400',
        iconBg: 'bg-stone-50 border-stone-100',
        checkIcon: 'text-stone-300',
        checkBg: 'bg-stone-100'
      },
      active: false
    },
    {
      title: '高级品鉴官',
      subtitle: 'KEY INFLUENCER',
      desc: '具备组织能力、区域影响力或供应链资源识别能力的高贡献节点。',
      benefits: [
        '优先参与商品品类共创',
        '供应链及商家引荐特权',
        '异业资源深度共建权限',
        '圈层社群组织管理赋能'
      ],
      icon: <Star className="w-5 h-5 text-amber-200 fill-amber-200" />,
      theme: {
        bg: 'bg-stone-900',
        border: 'border-amber-500/30',
        textTitle: 'text-amber-50',
        textSubtitle: 'text-amber-500/60',
        iconBg: 'bg-white/10 border-white/20',
        checkIcon: 'text-amber-400',
        checkBg: 'bg-amber-900/30'
      },
      active: true // User's current stage
    },
    {
      title: '品牌共创型品鉴官',
      subtitle: 'TOP PARTNER',
      desc: '生态顶层角色，具备稳定资源、供应链理解与品牌操盘潜力。',
      benefits: [
        '开启专项独立品牌孵化流程',
        '获取平台直接注资入股机会',
        '升级为独立商业品牌操盘手',
        '专享高阶商业对赌备忘特权'
      ],
      icon: <Zap className="w-5 h-5 text-amber-700 fill-amber-700" />,
      theme: {
        bg: 'bg-gradient-to-br from-amber-100 to-amber-50',
        border: 'border-amber-200',
        textTitle: 'text-amber-950',
        textSubtitle: 'text-amber-700/60',
        iconBg: 'bg-white/50 border-amber-200',
        checkIcon: 'text-amber-600',
        checkBg: 'bg-amber-200/50'
      },
      active: false
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-24 font-sans">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md px-4 py-4 flex items-center border-b border-stone-200">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-200/50 hover:bg-stone-200 transition-colors text-stone-600">
          <ArrowLeft size={20} />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-800">品鉴官体系</span>
      </div>

      {/* Hero Section */}
      <div className="px-6 pt-10 pb-8 relative overflow-hidden bg-stone-900 rounded-b-3xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-stone-800 rounded-full blur-2xl -ml-20 -mb-20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
               <ShieldCheck size={18} className="text-amber-400" />
               <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-medium">当前身份</span>
            </div>
            <div className="text-[10px] text-stone-500 font-serif tracking-widest">
               LV.4 / ECO-MEMBER
            </div>
          </div>
          
          <h1 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-50 to-amber-200 tracking-tight mb-3">
            高级品鉴官
          </h1>

          <div className="mb-4 bg-stone-800/50 rounded-xl p-3 border border-stone-700/50 backdrop-blur-sm max-w-sm">
             <div className="flex justify-between items-end mb-2">
                <div>
                   <span className="text-[10px] text-stone-400 block mb-0.5">当前生态贡献值</span>
                   <span className="text-sm font-serif text-amber-100 font-medium">842 <span className="text-[10px] text-stone-500">/ 1000</span></span>
                </div>
                <span className="text-[10px] text-amber-500/80 font-medium">距 品牌共创型品鉴官 还差 158</span>
             </div>
             <div className="w-full h-1 bg-stone-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-[84.2%] rounded-full"></div>
             </div>
          </div>
          
          <p className="text-xs text-stone-400 leading-relaxed max-w-[280px]">
            您已展现出卓越的组织影响力，成为连接平台与用户的核心价值节点。
          </p>
        </motion.div>
      </div>

      {/* Stages List */}
      <div className="px-6 py-8 space-y-6">
        <div className="flex items-center justify-between mb-6">
           <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center">
              <span className="w-1 h-3 bg-amber-500 mr-2 rounded-full"></span>
              成长阶段与权益
           </h3>
           <span className="text-[10px] text-stone-400">滑动查看升级特权</span>
        </div>
        
        {stages.map((stage, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative rounded-2xl p-6 border ${stage.theme.bg} ${stage.theme.border} ${stage.active ? 'shadow-xl shadow-amber-900/5 ring-1 ring-amber-500/20 scale-[1.02]' : 'shadow-sm'}`}
          >
            {/* Active Badge */}
            {stage.active && (
               <div className="absolute -top-3 right-4 bg-amber-500 text-stone-950 text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center tracking-widest uppercase">
                  CURRENT
               </div>
            )}
            
            {/* Card Header */}
            <div className="flex items-start space-x-4 mb-5 relative z-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${stage.theme.iconBg} shadow-inner`}>
                {stage.icon}
              </div>
              <div className="flex-1 pt-1">
                 <div className={`text-[10px] uppercase tracking-widest font-bold mb-0.5 ${stage.theme.textSubtitle}`}>
                    {stage.subtitle}
                 </div>
                 <h4 className={`text-xl font-serif tracking-wide ${stage.theme.textTitle}`}>
                    {stage.title}
                 </h4>
              </div>
            </div>

            {/* Description */}
            <p className={`text-[11px] leading-relaxed mb-5 ${stage.theme.textSubtitle} border-b border-dashed ${stage.theme.border} pb-4`}>
               {stage.desc}
            </p>

            {/* Benefits List */}
            <div className="space-y-3 relative z-10">
               <div className={`text-[10px] uppercase tracking-widest font-semibold ${stage.theme.textTitle} opacity-80 mb-2`}>
                 核心特权
               </div>
               
               {stage.benefits.map((benefit, bIdx) => (
                 <div key={bIdx} className="flex items-center space-x-3 group">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${stage.theme.checkBg}`}>
                       <Check size={12} className={stage.theme.checkIcon} strokeWidth={3} />
                    </div>
                    <span className={`text-[13px] tracking-wide font-medium ${stage.theme.textTitle} group-hover:opacity-100 opacity-90 transition-opacity`}>
                       {benefit}
                    </span>
                 </div>
               ))}
            </div>
            
            {/* Overlay Gradient for active card */}
            {stage.active && (
               <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none rounded-2xl" />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="px-6 mt-2 mb-6">
         <button className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-amber-50 text-xs tracking-widest rounded-2xl transition-all shadow-lg flex items-center justify-center group active:scale-95">
            查看升级考核指标 
            <ChevronRight size={14} className="ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
         </button>
      </div>
    </div>
  );
}