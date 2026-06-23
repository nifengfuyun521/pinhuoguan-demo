import React from 'react';
import { motion } from 'motion/react';
import { Clock, Heart, Share2 } from 'lucide-react';

export function DiscoveryView() {
  const articles = [
    {
      id: 1,
      category: '修身',
      title: '晨间静坐：找回失落的专注力',
      excerpt: '在每日的忙碌开始之前，给自己十五 minutes 的空白。',
      image: 'https://images.unsplash.com/photo-1762631203805-88841687ab4d?q=80&w=800&auto=format&fit=crop',
      readTime: '5 min',
      likes: 128
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
    <div className="min-h-screen bg-stone-50 pb-24 pt-16 px-4">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-serif text-stone-900">生活研习社</h2>
        <p className="mt-2 text-xs text-stone-500 tracking-widest">EXPLORATION</p>
      </div>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <motion.div 
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold tracking-widest text-stone-800 uppercase">{article.category}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-serif text-stone-900 mb-3 leading-snug group-hover:text-stone-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              
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
