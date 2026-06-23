import React from 'react';
import { ArrowLeft, PenTool, Hammer, Gem, ArrowRight } from 'lucide-react';

interface CoCreationViewProps {
  onBack: () => void;
}

export function CoCreationView({ onBack }: CoCreationViewProps) {
  const myCreations = [
    {
      id: 1,
      title: "「听松」系列 · 黑釉茶盏",
      status: "production", 
      progress: 85,
      partner: "景德镇 · 柴烧工作室",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
      tag: "全球限量 12 件"
    }
  ];

  const opportunities = [
    {
      id: 101,
      title: "与爱马仕前设计总监共创丝巾",
      desc: "参与 2026 春夏「花园」主题图样构思",
      quota: 3,
      icon: <PenTool size={20} />
    },
    {
      id: 102,
      title: "苏格兰单一麦芽威士忌包桶",
      desc: "定制您的专属酒标与风味轮廓",
      quota: 5,
      icon: <Gem size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-12">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-stone-200">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200 transition-colors">
          <ArrowLeft size={20} className="text-stone-600" />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-900">定制工坊</span>
      </div>

      <div className="p-6">
         {/* Hero Section */}
         <div className="bg-stone-900 rounded-2xl p-6 text-stone-50 mb-8 relative overflow-hidden shadow-2xl border border-stone-800">
            {/* Decorative Background */}
            <div className="absolute -right-6 -top-6 opacity-[0.03]">
               <Hammer size={200} className="rotate-12" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-6">
                  <div>
                     <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-900/60 to-stone-800 border border-amber-500/20 rounded text-[10px] text-amber-300 uppercase tracking-wider font-medium">
                           High-End Customization
                        </span>
                     </div>
                     <h2 className="text-2xl font-serif font-medium text-amber-50 leading-tight">
                        圈层图腾<br/>
                        <span className="text-amber-200/80 text-3xl">专属定制</span>
                     </h2>
                  </div>
                  
                  {/* Icon Ring */}
                  <div className="relative">
                     <div className="absolute inset-0 bg-amber-500 blur-xl opacity-20"></div>
                     <div className="w-12 h-12 rounded-full bg-gradient-to-b from-stone-800 to-stone-900 border border-stone-700 flex items-center justify-center shadow-inner relative z-10">
                        <Gem size={20} className="text-amber-400" />
                     </div>
                  </div>
               </div>

               <div className="space-y-5">
                  <p className="text-xs text-stone-400 leading-relaxed border-l border-amber-500/30 pl-3 opacity-90">
                     参与“联合定制”的经历，是您可以携带的终极谈资。<br/>
                     不仅仅是拥有，更是创造您的家族传承。
                  </p>
                  
                  {/* Mini Stats Dashboard */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 backdrop-blur-sm flex items-center justify-between">
                     <div className="flex items-center space-x-4">
                        <div>
                           <p className="text-[10px] text-stone-500">我的藏品</p>
                           <p className="text-lg font-serif text-amber-100 leading-none mt-0.5">1</p>
                        </div>
                        <div className="w-px h-6 bg-white/10"></div>
                        <div>
                           <p className="text-[10px] text-stone-500">共创权益</p>
                           <p className="text-lg font-serif text-amber-100 leading-none mt-0.5">LV.3</p>
                        </div>
                     </div>
                     <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <PenTool size={14} className="text-amber-400" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* My Creations */}
         <div className="mb-8">
            <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center">
               <span className="w-1 h-4 bg-amber-500 mr-2 rounded-full"></span>
               我的共创项目
            </h3>
            
            {myCreations.map((item) => (
               <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-stone-100">
                  <div className="h-40 relative">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                     <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] px-2 py-1 rounded">
                        {item.tag}
                     </div>
                  </div>
                  <div className="p-5">
                     <h4 className="text-base font-serif text-stone-900 mb-1">{item.title}</h4>
                     <p className="text-xs text-stone-500 mb-4">合作方：{item.partner}</p>
                     
                     <div className="mb-2 flex justify-between text-[10px] text-stone-500">
                        <span>制作进度</span>
                        <span className="text-amber-600 font-medium">{item.progress}%</span>
                     </div>
                     <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: `${item.progress}%` }}></div>
                     </div>
                     
                     <div className="mt-4 p-3 bg-stone-50 rounded-lg text-[10px] text-stone-600 italic border border-stone-100">
                        “这套茶盏的釉色配方，我有参与调整，加入了一点家乡的草木灰。”
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Open Opportunities */}
         <div>
            <div className="flex items-center justify-between mb-4">
               <h3 className="text-sm font-bold text-stone-900 flex items-center">
                  <span className="w-1 h-4 bg-stone-300 mr-2 rounded-full"></span>
                  开放共创名额
               </h3>
               <span className="text-[10px] text-stone-400">仅限 LV.3 以上</span>
            </div>

            <div className="space-y-3">
               {opportunities.map((opp) => (
                  <div key={opp.id} className="bg-white p-4 rounded-xl border border-stone-100 flex items-center justify-between group hover:border-amber-200 transition-colors cursor-pointer">
                     <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:text-amber-600 group-hover:bg-amber-50 transition-colors">
                           {opp.icon}
                        </div>
                        <div>
                           <h4 className="text-sm font-medium text-stone-900 group-hover:text-amber-800 transition-colors">{opp.title}</h4>
                           <p className="text-[10px] text-stone-500 mt-0.5">{opp.desc}</p>
                        </div>
                     </div>
                     <ArrowRight size={16} className="text-stone-300 group-hover:text-amber-500" />
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}