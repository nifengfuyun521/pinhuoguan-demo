import React from 'react';
import { ArrowLeft, Clock, CheckCircle2, MessageSquare, ChevronRight } from 'lucide-react';

interface ConsultationViewProps {
  onBack: () => void;
}

export function ConsultationView({ onBack }: ConsultationViewProps) {
  const items = [
    {
      id: 1,
      title: "寻觅八八青饼（干仓）",
      date: "2025.12.01",
      status: "processing",
      desc: "需求：寻找一筒干仓存储的1988年孟海茶厂7542青饼，需附带专业仓储证明。",
      expert: "首席茶道顾问 · 陆羽"
    },
    {
      id: 2,
      title: "马尔代夫私人岛屿包岛策划",
      date: "2025.11.15",
      status: "completed",
      desc: "为家人生日定制的7天6晚私密假期，包含水上飞机接送与私人主厨服务。",
      expert: "高端旅行管家 · Sophia"
    },
    {
      id: 3,
      title: "祖母绿项链重制设计方案",
      date: "2025.10.22",
      status: "completed",
      desc: "将家族传承的哥伦比亚祖母绿主石重新镶嵌，希望融合Art Deco风格。",
      expert: "珠宝设计总监 · Elena"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-12">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-stone-200">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200 transition-colors">
          <ArrowLeft size={20} className="text-stone-600" />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-900">咨询记录</span>
      </div>

      <div className="p-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-base font-serif text-stone-900 font-medium mb-1 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-stone-400">
                   <span>{item.date}</span>
                   <span>·</span>
                   <span>{item.expert}</span>
                </div>
              </div>
              {item.status === 'processing' ? (
                <span className="flex items-center text-[10px] bg-amber-50 text-amber-600 px-2 py-1 rounded-full border border-amber-100 font-medium">
                  <Clock size={10} className="mr-1" /> 进行中
                </span>
              ) : (
                <span className="flex items-center text-[10px] bg-stone-100 text-stone-500 px-2 py-1 rounded-full font-medium">
                  <CheckCircle2 size={10} className="mr-1" /> 已完成
                </span>
              )}
            </div>
            
            <div className="bg-stone-50 p-3 rounded-lg mb-3">
               <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">{item.desc}</p>
            </div>

            <div className="flex justify-end">
               <button className="text-xs text-stone-500 hover:text-stone-900 flex items-center transition-colors">
                  查看详情 <ChevronRight size={12} className="ml-1" />
               </button>
            </div>
          </div>
        ))}

        <div className="pt-8 flex justify-center">
           <button className="flex items-center space-x-2 px-6 py-3 bg-stone-900 text-amber-50 rounded-full shadow-lg hover:bg-stone-800 transition-colors">
              <MessageSquare size={16} />
              <span className="text-xs font-medium tracking-wide">发起新咨询</span>
           </button>
        </div>
      </div>
    </div>
  );
}