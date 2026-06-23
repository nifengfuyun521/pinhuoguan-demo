import React from 'react';
import { ArrowLeft, Heart, ShoppingBag, Star } from 'lucide-react';

interface FavoritesViewProps {
  onBack: () => void;
}

export function FavoritesView({ onBack }: FavoritesViewProps) {
  const items = [
    {
      id: 1,
      title: "宋 · 建窑兔毫盏",
      category: "古董珍玩",
      price: "询价",
      image: "https://images.unsplash.com/photo-1622947344865-a7fcf40e88e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwY2VyYW1pYyUyMHRlYSUyMGJvd2wlMjBibGFjayUyMGdsYXplJTIwYW50aXF1ZXxlbnwxfHx8fDE3NjQ1Njc4MzF8MA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 2,
      title: "京都 · 枯山水私邸",
      category: "隐世行旅",
      price: "3,200 能量/晚",
      image: "https://images.unsplash.com/photo-1762178907272-352af449161e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwaG91c2UlMjB6ZW4lMjBnYXJkZW4lMjBreW90b3xlbnwxfHx8fDE3NjQ1Njc4MzF8MA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 3,
      title: "黑川雅之 · 铸铁茶壶",
      category: "大师手作",
      price: "¥ 12,800",
      image: "https://images.unsplash.com/photo-1697206426375-b4c4cf67edd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0JTIwaXJvbiUyMHRlYXBvdCUyMGphcGFuZXNlJTIwYmxhY2t8ZW58MXx8fHwxNzY0NTY3ODMxfDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 4,
      title: "喀什米尔披肩",
      category: "限量定制",
      price: "8,500 能量",
      image: "https://images.unsplash.com/photo-1612364772483-917d887244e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXNobWVyZSUyMHNjYXJmJTIwc2hhd2wlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU2NzgzMXww&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-12">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-stone-200">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200 transition-colors">
          <ArrowLeft size={20} className="text-stone-600" />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-900">我的收藏</span>
      </div>

      <div className="p-6 grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="aspect-[4/5] relative">
               <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Heart size={14} className="text-red-500 fill-red-500" />
               </div>
            </div>
            <div className="p-3">
               <div className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">{item.category}</div>
               <h3 className="text-sm font-serif text-stone-900 mb-2 line-clamp-1">{item.title}</h3>
               <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-amber-700">{item.price}</span>
                  <button className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-colors">
                     <ShoppingBag size={12} />
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 mt-4 text-center">
         <p className="text-[10px] text-stone-400">已加载全部收藏好物</p>
      </div>
    </div>
  );
}