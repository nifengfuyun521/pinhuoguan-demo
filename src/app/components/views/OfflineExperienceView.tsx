import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, Tent, Music, Zap, Calendar, MapPin, Sparkles, Armchair, BookOpen, Flower2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { StoreProfileView } from './StoreProfileView';

interface OfflineExperienceViewProps {
  onBack: () => void;
  initialTab?: 'events' | 'exclusive' | 'stores';
}

export function OfflineExperienceView({ onBack, initialTab = 'exclusive' }: OfflineExperienceViewProps) {
  const [offlineTab, setOfflineTab] = useState<'events' | 'exclusive' | 'stores'>(initialTab);
  const [selectedStore, setSelectedStore] = useState<any>(null);

  if (selectedStore) {
    return (
      <StoreProfileView
        store={selectedStore}
        onBack={() => setSelectedStore(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-24 z-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors">
             <ArrowRight size={20} className="rotate-180 text-stone-900" />
          </button>
          <span className="font-serif font-medium text-stone-900">线下体验</span>
          <div className="w-8"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex px-6 space-x-6">
          <button 
            onClick={() => setOfflineTab('exclusive')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              offlineTab === 'exclusive' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            专属空间
            {offlineTab === 'exclusive' && (
              <motion.div layoutId="activeOfflineTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
            )}
          </button>
          <button 
            onClick={() => setOfflineTab('events')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              offlineTab === 'events' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            雅集活动
            {offlineTab === 'events' && (
              <motion.div layoutId="activeOfflineTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
            )}
          </button>
          <button 
            onClick={() => setOfflineTab('stores')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              offlineTab === 'stores' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            周边异业
            {offlineTab === 'stores' && (
              <motion.div layoutId="activeOfflineTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
            )}
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {offlineTab === 'events' && (
          /* Events List */
          [
            {
              title: "宋韵茶事 · 听雨",
              date: "10月24日 14:00",
              location: "杭州 · 湖畔居",
              image: "https://images.unsplash.com/photo-1559484379-68a6d9c90c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdGVhJTIwY2VyZW1vbnklMjB6ZW4lMjBhZXN0aGV0aWMlMjByYWlufGVufDF8fHx8MTc2NDU2NjU5N3ww&ixlib=rb-4.1.0&q=80&w=600",
              icon: Leaf,
              tags: ["茶道", "雅集"],
              energy: 50
            },
            {
              title: "林间私宴 · 秋收",
              date: "10月28日 18:00",
              location: "莫干山 · 隐世山居",
              image: "https://images.unsplash.com/photo-1646781652500-40015cee4917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZm9yZXN0JTIwZGluaW5nJTIwbHV4dXJ5JTIwYmFucXVldHxlbnwxfHx8fDE3NjQ1NjY1OTd8MA&ixlib=rb-4.1.0&q=80&w=600",
              icon: Tent,
              tags: ["美食", "社交"],
              energy: 80
            },
            {
              title: "古琴雅集 · 赏音",
              date: "11月05日 15:00",
              location: "上海 · 朵云书院",
              image: "https://images.unsplash.com/photo-1763058389604-e407ce6bd702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNoaW5lc2UlMjBpbnN0cnVtZW50JTIwZ3VxaW4lMjB6aXRoZXJ8ZW58MXx8fHwxNzY0NTY2NTk3fDA&ixlib=rb-4.1.0&q=80&w=600",
              icon: Music,
              tags: ["音乐", "文化"],
              energy: 60
            }
          ].map((event, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 group"
            >
              <div className="aspect-video relative overflow-hidden">
                 <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute top-3 left-3 flex space-x-2">
                    {event.tags.map((tag, ti) => (
                      <span key={ti} className="bg-white/90 backdrop-blur-sm text-[10px] px-2 py-0.5 rounded-full text-stone-800 font-medium">{tag}</span>
                    ))}
                 </div>
                 <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-sm text-[10px] text-amber-300 px-2 py-1 rounded-full flex items-center border border-amber-500/20">
                    <Zap size={10} className="mr-1 fill-amber-300" />
                    签到 +{event.energy} 能量
                 </div>
              </div>
              <div className="p-5">
                 <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-serif text-stone-900">{event.title}</h4>
                    <event.icon size={18} className="text-stone-400" />
                 </div>
                 <div className="flex items-center text-xs text-stone-500 space-x-4 mb-4">
                    <span className="flex items-center"><Calendar size={12} className="mr-1"/> {event.date}</span>
                    <span className="flex items-center"><MapPin size={12} className="mr-1"/> {event.location}</span>
                 </div>
                 <button className="w-full py-2.5 bg-stone-900 text-white text-xs tracking-widest rounded-lg hover:bg-stone-800 transition-colors">
                    立即报名
                 </button>
              </div>
            </motion.div>
          ))
        )}

        {offlineTab === 'exclusive' && (
          <div className="space-y-8">
            <div className="bg-stone-900 text-amber-50 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={120} />
              </div>
              <h3 className="text-xl font-serif mb-2 relative z-10">专属体验空间</h3>
              <p className="text-sm text-stone-300 leading-relaxed relative z-10">
                不仅仅是空间，更是品货官的精神栖息地。<br/>
                我们为您提供真实的五感体验与不可替代的情绪价值。
              </p>
            </div>

            {[
              {
                title: "品货官 · 城市客厅",
                subtitle: "链接人与人的温暖场域",
                description: "位于城市中心的私密会客厅，为您提供商务洽谈、老友小聚的完美空间。这里有最懂您的管家，和最舒适的沙发。",
                image: "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsb3VuZ2UlMjBpbnRlcmlvciUyMHdhcm0lMjBsaWdodGluZyUyMGNvbWZvcnRhYmxlfGVufDF8fHx8MTc2NDU2NjY3OHww&ixlib=rb-4.1.0&q=80&w=800",
                icon: Armchair,
                features: ["会员专享", "私人管家", "定制茶歇"]
              },
              {
                title: "品货官 · 静谧书房",
                subtitle: "独处时刻，照见内心",
                description: "闹市中的避世所。这里没有喧嚣，只有书香与墨韵。提供珍本阅读与冥想空间，让您在快节奏中找回内心的平静。",
                image: "https://images.unsplash.com/photo-1657639398998-f1a0463c859f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwdGVhJTIwcm9vbSUyMGN0dWR5JTIwbHV4dXJ5JTIwcXVpZXR8ZW58MXx8fHwxNzY0NTY2Njc5fDA&ixlib=rb-4.1.0&q=80&w=800",
                icon: BookOpen,
                features: ["珍本藏书", "静音空间", "冥想室"]
              },
              {
                title: "品货官 · 疗愈花园",
                subtitle: "在自然呼吸中重获能量",
                description: "室内垂直森林与自然光影的完美结合。提供园艺手作、精油疗愈等体验，让五感在自然中得到彻底的放松。",
                image: "https://images.unsplash.com/photo-1753552502151-93914d36ecf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBtZWRpdGF0aW9uJTIwcm9vbSUyMGluZG9vciUyMGdhcmRlbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc2NDU2NjY3OHww&ixlib=rb-4.1.0&q=80&w=800",
                icon: Flower2,
                features: ["植物疗愈", "香氛定制", "自然工坊"]
              }
            ].map((space, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100"
              >
                <div className="h-48 relative">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      <space.icon size={18} className="text-amber-300" />
                      <h4 className="text-lg font-serif font-medium">{space.title}</h4>
                    </div>
                    <p className="text-xs text-stone-200 opacity-90">{space.subtitle}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {space.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {space.features.map((feature, fi) => (
                      <span key={fi} className="text-[10px] px-2 py-1 bg-stone-50 text-stone-500 border border-stone-100 rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => toast.success(`已为您预约${space.title}体验`)}
                    className="w-full py-2.5 border border-stone-900 text-stone-900 text-xs tracking-widest rounded-lg hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <CheckCircle2 size={14} className="mr-2" />
                    预约专属体验
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {offlineTab === 'stores' && (
          <div className="space-y-6">
            {/* Map Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full h-48 bg-stone-200 rounded-2xl overflow-hidden shadow-sm border border-stone-200 cursor-pointer"
              onClick={() => toast.success("正在打开完整地图...")}
            >
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MXx8fHwxNzY0NTY2NTk4fDA&ixlib=rb-4.1.0&q=80&w=800" 
                alt="Map Preview" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex flex-col justify-end p-5">
                <div className="flex items-center space-x-2 text-white">
                  <MapPin size={18} className="text-amber-400" />
                  <span className="font-medium text-sm font-serif">附近发现 12 家合作商户</span>
                </div>
                <p className="text-xs text-stone-300 mt-1">距离您当前位置 5km 范围内</p>
              </div>
              <button 
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-stone-900 shadow-sm flex items-center"
              >
                查看地图 <ArrowRight size={12} className="ml-1" />
              </button>
            </motion.div>

            {/* Stores List */}
            <div className="space-y-6">
              {[
                {
                  name: "安缦水疗 Aman Spa",
                  type: "身心奢护",
                  location: "北京 · 颐和安缦",
                  image: "https://images.unsplash.com/photo-1693578538512-fc66f318c833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBpbnRlcmlvcnxlbnwxfHx8fDE3ODE1MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  features: ["东方古法", "私密庭院"],
                  distance: "1.2km",
                  privilege: "高级品鉴官享基础项目 8.5 折"
                },
                {
                  name: "荣府宴",
                  type: "米其林星级",
                  location: "上海 · 恒隆广场",
                  image: "https://images.unsplash.com/photo-1754547252699-07bf218643db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NjQ1NjY1OTd8MA&ixlib=rb-4.1.0&q=80&w=800",
                  features: ["非遗美食", "私密包厢"],
                  distance: "2.8km",
                  privilege: "就餐赠送主厨特制隐藏甜点"
                },
                {
                  name: "隐庐高尔夫俱乐部",
                  type: "高端运动",
                  location: "深圳 · 麓山",
                  image: "https://images.unsplash.com/photo-1592937238247-cd0090e02f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xmJTIwY291cnNlfGVufDF8fHx8MTc4MTUyODI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  features: ["18洞标准", "山地景观"],
                  distance: "8.5km",
                  privilege: "每月1次免果岭费特权"
                }
              ].map((store, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  onClick={() => setSelectedStore(store)}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md border border-stone-100 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={store.image} alt={store.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-stone-900 rounded-sm shadow-sm">
                      {store.distance}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-16 text-white">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-[10px] text-amber-300 mb-1.5 font-medium tracking-wider uppercase flex items-center">
                                  <span className="w-1 h-1 rounded-full bg-amber-300 mr-1.5"></span>
                                  {store.type}
                                </p>
                                <h4 className="text-2xl font-serif font-medium leading-tight">{store.name}</h4>
                            </div>
                            <div className="bg-stone-900/80 backdrop-blur-md border border-amber-500/30 rounded-full px-3 py-1 text-[10px] text-amber-100 flex items-center shadow-lg">
                                <Sparkles size={12} className="mr-1.5 text-amber-400" />
                                特权商户
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-xs text-stone-500 mb-4">
                        <MapPin size={14} className="mr-2 text-stone-400" />
                        {store.location}
                    </div>
                    <div className="bg-amber-50/50 border border-amber-100/50 rounded-lg p-3 mb-5">
                        <p className="text-xs text-amber-900 flex items-center font-medium">
                            <span className="bg-amber-800 text-white text-[9px] px-1.5 py-0.5 rounded mr-2">专属</span>
                            {store.privilege}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                          {store.features.map((feature, fi) => (
                              <span key={fi} className="bg-stone-50 border border-stone-100 text-stone-500 text-[10px] px-3 py-1 rounded-full">
                                {feature}
                              </span>
                          ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toast.success("正在导航...");
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-900 text-stone-900 hover:text-white transition-all duration-300 group-hover:scale-110"
                      >
                          <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
