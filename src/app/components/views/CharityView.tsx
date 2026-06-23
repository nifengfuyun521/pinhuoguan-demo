import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Heart, TreeDeciduous, BookOpen, Waves, Users, Zap, Share2, ArrowRight, Sparkles, Crown, Scroll, MessageCircle, BrickWall, Gift } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CharityViewProps {
  onBack: () => void;
}

export function CharityView({ onBack }: CharityViewProps) {
  // 模拟用户数据
  const userStats = {
    energy: 1280,
    projects: 12,
    badges: ["山村教育守护人", "海洋卫士"],
    soulImprints: 3 // 灵魂印记数量
  };

  const projects = [
    {
      id: 1,
      title: "乡村学校国学角",
      subtitle: "为孩子们建一座精神的避风港",
      location: "云南 · 怒江",
      image: "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwcmVhZGluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzY0NTY3MDM2fDA&ixlib=rb-4.1.0&q=80&w=800",
      icon: BookOpen,
      phase: "二期工程 · 墙体粉刷中",
      progress: 65, // percentage
      constructionStatus: {
        totalBricks: 5000,
        currentBricks: 3250,
        donors: 5620
      },
      wishes: [
        { id: 'w1', name: "一套《山海经》", cost: 120, claimer: null },
        { id: 'w2', name: "书法练习毛笔", cost: 50, claimer: null },
        { id: 'w3', name: "国学诵读机", cost: 300, claimer: null },
      ],
      echo: {
        type: "video",
        content: "小明同学收到毛笔后的试写视频",
        preview: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHdyaXRpbmclMjBjaGluZXNlfGVufDF8fHx8MTc2NDU2NzAzNnww&ixlib=rb-4.1.0&q=80&w=400"
      }
    },
    {
      id: 2,
      title: "万亩梭梭林计划",
      subtitle: "沙漠锁边行动，共筑绿色长城",
      location: "阿拉善 · 腾格里",
      image: "https://images.unsplash.com/photo-1647907812607-264ca3597333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGluZyUyMHRyZWVzJTIwZGVzZXJ0JTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjQ1NjcwMzZ8MA&ixlib=rb-4.1.0&q=80&w=800",
      icon: TreeDeciduous,
      phase: "春种阶段 · 树苗认养",
      progress: 78,
      constructionStatus: {
        totalBricks: 10000, // 这里的bricks代指树苗
        currentBricks: 7800,
        donors: 12456
      },
      wishes: [
        { id: 'w4', name: "一棵梭梭树苗", cost: 100, claimer: null },
        { id: 'w5', name: "护林员水壶", cost: 80, claimer: null },
      ],
      echo: {
        type: "image",
        content: "1024号林地的一场春雨",
        preview: "https://images.unsplash.com/photo-1515487442527-2e54063ba736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluJTIwZGVzZXJ0JTIwcGxhbnR8ZW58MXx8fHwxNzY0NTY3MDM2fDA&ixlib=rb-4.1.0&q=80&w=400"
      }
    }
  ];

  const handleBuild = (projectTitle: string) => {
    toast.success(
      <div className="flex flex-col">
        <span className="font-serif font-medium">添砖加瓦成功</span>
        <span className="text-xs text-stone-500">您捐赠的能量已化为{projectTitle}的一块基石</span>
      </div>
    );
  };

  const handleClaimWish = (wishName: string) => {
    toast(
      <div className="flex flex-col">
        <span className="font-serif font-medium text-amber-600">认领成功</span>
        <span className="text-xs text-stone-500">孩子们的{wishName}将因您而实现，请留意后续情感回响。</span>
      </div>,
      {
        icon: <Heart className="text-amber-500 fill-amber-500" size={18} />,
        duration: 4000
      }
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-24 pt-16 relative z-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors">
           <ArrowLeft size={20} className="text-stone-900" />
        </button>
        <span className="font-serif font-medium text-stone-900">公益共创</span>
        <button className="p-2 -mr-2 hover:bg-stone-100 rounded-full transition-colors">
           <Share2 size={18} className="text-stone-600" />
        </button>
      </div>

      {/* Hero Stats: 社交资本与灵魂印记 */}
      <div className="px-6 pt-8 pb-8">
        <div className="bg-stone-900 rounded-2xl p-6 text-stone-50 relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 p-6 opacity-10">
              <Crown size={140} />
           </div>
           <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-2 flex items-center">
                    <Sparkles size={12} className="mr-1 text-amber-400" />
                    我的价值身份
                  </p>
                  <div className="flex items-center space-x-2">
                     <h2 className="text-2xl font-serif font-medium text-amber-100">荣誉守护人</h2>
                     <span className="px-2 py-0.5 bg-amber-900/50 border border-amber-500/30 rounded text-[10px] text-amber-300">LV.3</span>
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-[10px] text-stone-400 mb-1">可用能量值</p>
                   <p className="text-xl font-serif text-amber-300">{userStats.energy}</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                 <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-stone-300 flex items-center">
                       <Scroll size={14} className="mr-1.5" />
                       我的灵魂印记
                    </span>
                    <span className="text-[10px] text-stone-500">永久记录于信用档案</span>
                 </div>
                 <div className="flex space-x-2">
                    {Array.from({ length: userStats.soulImprints }).map((_, i) => (
                       <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 p-[1px]">
                          <div className="w-full h-full rounded-full bg-stone-900 flex items-center justify-center">
                             <Crown size={14} className="text-amber-400" />
                          </div>
                       </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border border-dashed border-stone-600 flex items-center justify-center">
                       <span className="text-stone-600 text-xs">+</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="px-6 mb-6">
         <h3 className="text-lg font-serif text-stone-900 mb-4 flex items-center">
            公益共建
            <span className="ml-2 text-[10px] px-2 py-0.5 bg-stone-100 text-stone-500 rounded-full">让价值温暖循环</span>
         </h3>
         
         <div className="space-y-8">
            {projects.map((project, index) => (
               <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 group"
               >
                  {/* Project Image Header */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                     <ImageWithFallback 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                     
                     <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-xl font-serif font-medium mb-1">{project.title}</h4>
                        <p className="text-xs text-stone-300 flex items-center">
                           <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                           {project.phase}
                        </p>
                     </div>
                     <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full flex items-center border border-white/30">
                           <Users size={10} className="mr-1" />
                           {project.constructionStatus.donors.toLocaleString()} 人正在共建
                        </div>
                     </div>
                  </div>
                  
                  <div className="p-5">
                     {/* Construction Progress (Co-creation) */}
                     <div className="mb-6">
                        <div className="flex justify-between items-end mb-2">
                           <div className="text-xs text-stone-500">
                              已筹集 <span className="text-stone-900 font-medium">{project.constructionStatus.currentBricks}</span> / {project.constructionStatus.totalBricks} 建设单元
                           </div>
                           <div className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                              进度 {project.progress}%
                           </div>
                        </div>
                        <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden mb-3">
                           <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${project.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-stone-900 rounded-full" 
                           />
                        </div>
                        <button 
                           onClick={() => handleBuild(project.title)}
                           className="w-full py-2.5 border border-dashed border-stone-300 text-stone-600 rounded-lg text-xs hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50 transition-all flex items-center justify-center"
                        >
                           <BrickWall size={14} className="mr-2" />
                           添砖加瓦 (100能量/块)
                        </button>
                     </div>

                     {/* Micro Wishes (Direct Impact) */}
                     <div className="mb-6">
                        <h5 className="text-xs font-serif font-bold text-stone-900 mb-3 flex items-center">
                           <Gift size={12} className="mr-1.5 text-amber-500" />
                           认领微心愿 · 具体的爱
                        </h5>
                        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                           {project.wishes.map((wish) => (
                              <div key={wish.id} className="flex-shrink-0 w-32 bg-stone-50 border border-stone-100 rounded-xl p-3 flex flex-col justify-between hover:shadow-md transition-shadow">
                                 <div>
                                    <div className="text-xs font-medium text-stone-800 mb-1 line-clamp-1">{wish.name}</div>
                                    <div className="text-[10px] text-stone-400">需要 {wish.cost} 能量</div>
                                 </div>
                                 <button 
                                    onClick={() => handleClaimWish(wish.name)}
                                    className="mt-3 py-1.5 bg-stone-900 text-white text-[10px] rounded-md hover:bg-amber-600 transition-colors"
                                 >
                                    立即认领
                                 </button>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Echo (Emotional Feedback) */}
                     <div className="bg-amber-50/50 rounded-xl p-3 border border-amber-100/50 flex items-start space-x-3 cursor-pointer hover:bg-amber-50 transition-colors">
                        <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-stone-200 relative">
                           <ImageWithFallback src={project.echo.preview} alt="feedback" className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="w-4 h-4 rounded-full bg-white/90 flex items-center justify-center">
                                 <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-amber-600 border-b-[3px] border-b-transparent ml-0.5"></div>
                              </div>
                           </div>
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between items-start">
                              <span className="text-[10px] text-amber-800 font-medium px-1.5 py-0.5 bg-amber-100 rounded mb-1 inline-block">
                                 来自远方的回响
                              </span>
                              <span className="text-[10px] text-stone-400">2小时前</span>
                           </div>
                           <p className="text-xs text-stone-600 line-clamp-1">{project.echo.content}</p>
                        </div>
                     </div>

                  </div>
               </motion.div>
            ))}
         </div>
      </div>

      <div className="px-6 py-8 bg-stone-100">
         <div className="text-center">
            <p className="text-xs text-stone-400 mb-2">利他即利己</p>
            <p className="text-sm font-serif text-stone-600 italic">"既以为人己愈有，既以与人己愈多"</p>
            <div className="w-8 h-1 bg-stone-300 mx-auto mt-4 rounded-full"></div>
         </div>
      </div>
    </div>
  );
}
