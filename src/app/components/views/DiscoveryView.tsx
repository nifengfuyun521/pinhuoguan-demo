import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Heart, Share2 } from 'lucide-react';

interface DiscoveryViewProps {
  onBack?: () => void;
}

export function DiscoveryView({ onBack }: DiscoveryViewProps) {
  const articles = [
    {
      id: 1,
      category: '堪舆私教',
      title: '顺势而居：现代豪宅的风水能量场构建',
      excerpt: '从选址格局到室内陈设，解析如何把“空间能量”转译成可理解、可执行的家庭居住方法。',
      image: 'https://images.unsplash.com/photo-1589163045730-40797c5cdc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGNoaW5lc2UlMjBmZW5nJTIwc2h1aSUyMHplbiUyMGJhbGFuY2VkJTIwYnJpZ2h0fGVufDF8fHx8MTc2NDU3Mzg0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '20 min',
      likes: 1280
    },
    {
      id: 2,
      category: '器物',
      title: '对话匠人：李师傅的制壶之道',
      excerpt: '“泥土是有生命的，你敬它，它便还你以温润。”',
      image: 'https://images.unsplash.com/photo-1762553395050-ec394919a6ea?q=80&w=800&auto=format&fit=crop',
      readTime: '8 min',
      likes: 245
    },
    {
      id: 3,
      category: '茶道',
      title: '一期一会：茶席上的礼与敬',
      excerpt: '每一次相聚都是世间唯一，懂得珍惜当下的每一个瞬间。',
      image: 'https://images.unsplash.com/photo-1755685068178-4b57210ddcd4?q=80&w=800&auto=format&fit=crop',
      readTime: '6 min',
      likes: 189
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <div className="sticky top-0 z-40 border-b border-stone-100 bg-stone-50/90 px-4 py-4 backdrop-blur-md">
        <div className="flex items-center justify-between">
          {onBack ? (
            <button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-stone-100">
              <ArrowLeft size={20} className="text-stone-900" />
            </button>
          ) : (
            <div className="h-10 w-10" />
          )}
          <div className="text-center">
            <h2 className="font-serif text-lg text-stone-900">生活研习社</h2>
            <p className="mt-1 text-[10px] tracking-[0.22em] text-stone-400">EXPLORATION</p>
          </div>
          <div className="h-10 w-10" />
        </div>
      </div>

      <div className="space-y-6 p-4">
        {articles.map((article, index) => (
          <motion.div 
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-md ${
              index === 0 ? 'rounded-[2rem] border border-amber-100' : 'rounded-2xl border border-stone-100'
            }`}
          >
            <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[4/3]' : 'aspect-[16/9]'}`}>
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-800">{article.category}</span>
              </div>
            </div>
            
            <div className={index === 0 ? 'p-6' : 'p-5'}>
              <h3 className={`${index === 0 ? 'text-2xl' : 'text-xl'} mb-3 font-serif leading-snug text-stone-900 transition-colors group-hover:text-stone-600`}>
                {article.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              {index === 0 && (
                <div className="mb-4 rounded-2xl bg-amber-50 px-4 py-3 text-[11px] leading-relaxed text-stone-600">
                  为什么值得：它不把风水讲成玄学，而是回到动线、采光、收纳、家人作息这些真实生活因素。
                </div>
              )}
              
              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <div className="flex items-center text-stone-400 text-xs space-x-4">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center">
                    <Heart size={14} className="mr-1" />
                    {article.likes}
                  </div>
                </div>
                <button className="text-stone-400 hover:text-stone-600">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
