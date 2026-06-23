import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, MapPin, ArrowRight, Palette } from 'lucide-react';
import { CoCreationView } from './CoCreationView';
import { CharityView } from './CharityView';
import { OfflineExperienceView } from './OfflineExperienceView';

export function ExperienceView() {
  const [activeModule, setActiveModule] = useState<'menu' | 'workshop' | 'charity' | 'offline'>('menu');

  // Handlers for returning from sub-views
  const handleBack = () => setActiveModule('menu');

  if (activeModule === 'charity') {
    return <CharityView onBack={handleBack} />;
  }

  if (activeModule === 'workshop') {
    return <CoCreationView onBack={handleBack} />;
  }

  if (activeModule === 'offline') {
    return <OfflineExperienceView onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-24 pt-16 px-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-stone-900">尊享体验</h2>
        <p className="mt-2 text-xs text-stone-500 tracking-widest uppercase">Exclusive Experiences</p>
      </div>

      {/* Main Menu Grid */}
      <div className="grid gap-6">
        {/* 1. Custom Workshop */}
        <motion.div 
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveModule('workshop')}
          className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group shadow-md"
        >
          <img 
            src="https://images.unsplash.com/photo-1679453082486-bba97700b72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcnRpc2FuJTIwY3JhZnRzbWFuc2hpcCUyMHdvcmtzaG9wJTIwZGV0YWlsJTIwZGFyayUyMG1vb2R5JTIwZWxlZ2FudCUyMGdvbGQlMjBsZWF0aGVyJTIwd29vZHxlbnwxfHx8fDE3NjQ1NzM5OTN8MA&ixlib=rb-4.1.0&q=80&w=800" 
            alt="Custom Workshop"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Palette size={16} className="text-amber-300" />
              <span className="text-[10px] uppercase tracking-widest opacity-80">Craftsmanship</span>
            </div>
            <h3 className="text-xl font-serif font-medium">定制工坊</h3>
            <p className="text-xs text-stone-200 mt-1 opacity-90">为您打造独一无二的专属礼遇</p>
          </div>
          <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <ArrowRight size={16} className="text-white" />
          </div>
        </motion.div>

        {/* 2. Public Welfare (Charity) */}
        <motion.div 
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveModule('charity')}
          className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group shadow-md"
        >
          <img 
            src="https://images.unsplash.com/photo-1758599668360-48ba8ba71b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwcGxhbnRpbmclMjB0cmVlcyUyMG5hdHVyZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjQ1NjY1OTd8MA&ixlib=rb-4.1.0&q=80&w=800" 
            alt="Public Welfare"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Heart size={16} className="text-amber-300" />
              <span className="text-[10px] uppercase tracking-widest opacity-80">Co-Creation</span>
            </div>
            <h3 className="text-xl font-serif font-medium">公益共建</h3>
            <p className="text-xs text-stone-200 mt-1 opacity-90">消费即挖矿，让价值温暖循环</p>
          </div>
          <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <ArrowRight size={16} className="text-white" />
          </div>
        </motion.div>

        {/* 3. Offline Experience */}
        <motion.div 
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveModule('offline')}
          className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group shadow-md"
        >
          <img 
            src="https://images.unsplash.com/photo-1760331339913-da9637154477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2NpYWwlMjBldmVudCUyMGdhdGhlcmluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY0NTY2NTk3fDA&ixlib=rb-4.1.0&q=80&w=800" 
            alt="Offline Experience"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin size={16} className="text-amber-300" />
              <span className="text-[10px] uppercase tracking-widest opacity-80">Events & Spaces</span>
            </div>
            <h3 className="text-xl font-serif font-medium">线下体验</h3>
            <p className="text-xs text-stone-200 mt-1 opacity-90">沉浸式美学空间与社交聚会</p>
          </div>
          <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <ArrowRight size={16} className="text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
