import React from 'react';
import { ArrowLeft, BookOpen, Coffee, Feather, Palette } from 'lucide-react';

interface AestheticsViewProps {
  onBack?: () => void;
  isEmbedded?: boolean;
}

export function AestheticsView({ onBack, isEmbedded = false }: AestheticsViewProps) {
  const articles = [
    {
      id: 1,
      category: "茶道 · 谈资",
      title: "岩茶的'骨法'与社交隐喻",
      desc: "如何在一盏茶的时间里，不着痕迹地展现你对'山场气'的独特见解。",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
      quote: "“茶汤里的岩骨花香，正如君子之交，淡而有致，久而弥坚。”",
      author: "茶人 · 隐山"
    },
    {
      id: 2,
      category: "器物 · 审美",
      title: "中古家具收藏入门：从昌迪加尔椅说起",
      desc: "不仅是椅子，更是建筑师勒·柯布西耶的现代主义宣言。读懂它，便读懂了那个时代的理想。",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
      quote: "“每一道岁月的划痕，都是物与人共同生活的证据。”",
      author: "策展人 · Xu"
    },
    {
      id: 3,
      category: "空间 · 哲学",
      title: "枯山水：留白是最高级的待客之道",
      desc: "在庭院中安放一块石头，不仅是造景，更是构建内心的秩序。",
      image: "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?q=80&w=800&auto=format&fit=crop",
      quote: "“无水之水，无山之山，方见天地之大。”",
      author: "造园师 · 青藤"
    }
  ];

  return (
    <div className={`min-h-screen bg-stone-50 font-sans ${isEmbedded ? '' : 'pb-12'}`}>
      {/* Header - Only show if not embedded */}
      {!isEmbedded && (
        <div className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-stone-200">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200 transition-colors">
            <ArrowLeft size={20} className="text-stone-600" />
          </button>
          <span className="ml-4 text-sm font-serif tracking-widest text-stone-900">美学专栏</span>
        </div>
      )}

      <div className={isEmbedded ? "py-2" : "p-6"}>
        <div className="mb-8 text-center">
           <h2 className="text-2xl font-serif text-stone-900 mb-2">生活美学专家</h2>
           <p className="text-xs text-stone-500 max-w-xs mx-auto">
             汲取深度谈资，构建精神角落。<br/>让每一次交谈都言之有物。
           </p>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-4 mb-4 no-scrollbar">
           <button className="flex-shrink-0 px-4 py-2 bg-stone-900 text-amber-50 text-xs rounded-full flex items-center">
              <Coffee size={14} className="mr-2" /> 茶道文化
           </button>
           <button className="flex-shrink-0 px-4 py-2 bg-white border border-stone-200 text-stone-600 text-xs rounded-full flex items-center">
              <Palette size={14} className="mr-2" /> 艺术收藏
           </button>
           <button className="flex-shrink-0 px-4 py-2 bg-white border border-stone-200 text-stone-600 text-xs rounded-full flex items-center">
              <Feather size={14} className="mr-2" /> 东方哲学
           </button>
        </div>

        <div className="space-y-6">
           {articles.map((item) => (
             <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 group cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded border border-white/10">
                      {item.category}
                   </div>
                </div>
                <div className="p-5">
                   <h3 className="text-lg font-serif text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">{item.title}</h3>
                   <p className="text-xs text-stone-500 leading-relaxed mb-4 line-clamp-2">
                      {item.desc}
                   </p>
                   
                   {/* Gold Sentence / Quote */}
                   <div className="bg-amber-50 p-3 rounded-lg border border-amber-100/50 relative">
                      <div className="absolute -top-2 -left-1 text-3xl text-amber-200 font-serif">“</div>
                      <p className="text-xs font-serif text-amber-900 italic relative z-10 px-2">
                         {item.quote}
                      </p>
                   </div>
                   
                   <div className="mt-4 flex items-center justify-between text-[10px] text-stone-400">
                      <div className="flex items-center">
                         <BookOpen size={12} className="mr-1" /> 5分钟阅读
                      </div>
                      <span>{item.author}</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}