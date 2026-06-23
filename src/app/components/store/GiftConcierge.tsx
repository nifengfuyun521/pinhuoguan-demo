import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Heart, Sparkles, ChevronRight, Send } from 'lucide-react';

interface GiftConciergeProps {
  isOpen: boolean;
  onClose: () => void;
}

const relationships = [
  { id: 'elder', label: '长辈', icon: '🧓', desc: '送长辈' },
  { id: 'partner', label: '伴侣', icon: '💑', desc: '送爱人' },
  { id: 'friend', label: '好友', icon: '🍵', desc: '送朋友' },
  { id: 'kid', label: '孩子', icon: '🧸', desc: '送孩子' },
  { id: 'pet', label: '毛孩', icon: '🐾', desc: '送萌宠' },
  { id: 'self', label: '自己', icon: '🧘', desc: '送自己' },
];

const wishes = [
  { id: 'health', label: '安康', desc: '身体健康' },
  { id: 'peace', label: '清静', desc: '轻松自在' },
  { id: 'joy', label: '开心', desc: '每天开心' },
  { id: 'success', label: '顺利', desc: '工作顺利' },
];

const recommendations: Record<string, any> = {
  'elder-health': {
    title: "古树普洱礼盒",
    price: "¥2,680",
    image: "https://images.unsplash.com/photo-1755685068178-4b57210ddcd4?q=80&w=600&auto=format&fit=crop",
    reason: "经典耐喝，长辈都喜欢。养胃，平时喝正好。",
    poem: "茶烟轻扬落花风，松柏长青岁月同。"
  },
  'kid-joy': {
    title: "益智木作拼图",
    price: "¥380",
    image: "https://images.unsplash.com/photo-1587654780291-39c940483713?q=80&w=600&auto=format&fit=crop",
    reason: "天然木质，安全无毒。培养孩子的专注力，一起玩更有趣。",
    poem: "童心无忌天地宽，且将新火试新茶。"
  },
  'pet-health': {
    title: "天然宠物SPA套装",
    price: "¥299",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop",
    reason: "温和植物配方，呵护毛孩子敏感肌肤。洗完香喷喷，抱起来更舒服。",
    poem: "相伴无言情更深，岁月长情共朝昏。"
  },
  'friend-peace': {
    title: "宋风影青香炉",
    price: "¥860",
    image: "https://images.unsplash.com/photo-1762553395050-ec394919a6ea?q=80&w=600&auto=format&fit=crop",
    reason: "朋友间的小礼物，很有质感。放在家里点个香，很放松。",
    poem: "与君初相识，犹如故人归。"
  },
  'default': {
    title: "手作羊脂玉瓷杯",
    price: "¥420",
    image: "https://images.unsplash.com/photo-1762631203805-88841687ab4d?q=80&w=600&auto=format&fit=crop",
    reason: "手感温润，喝水喝茶都好用。很实用的礼物。",
    poem: "莫道茶杯小，壶中日月长。"
  }
};

export function GiftConcierge({ isOpen, onClose }: GiftConciergeProps) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<{ who?: string; wish?: string }>({});

  const handleSelectWho = (id: string) => {
    setSelections({ ...selections, who: id });
    setStep(2);
  };

  const handleSelectWish = (id: string) => {
    const newSelections = { ...selections, wish: id };
    setSelections(newSelections);
    setStep(3);
  };

  const getRecommendation = () => {
    const key = `${selections.who}-${selections.wish}`;
    return recommendations[key] || recommendations['default'];
  };

  const reset = () => {
    setStep(1);
    setSelections({});
  };

  const recommendation = step === 3 ? getRecommendation() : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[10%] bottom-[10%] md:inset-x-auto md:w-[480px] md:left-1/2 md:-translate-x-1/2 bg-stone-50 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative h-32 bg-stone-900 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 opacity-20">
                <img 
                   src="https://images.unsplash.com/photo-1689259103820-a375e5a30e00?q=80&w=600&auto=format&fit=crop" 
                   className="w-full h-full object-cover" 
                   alt="bg"
                />
              </div>
              <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-white">
                <X size={24} />
              </button>
              <div className="text-center z-10">
                <div className="w-12 h-12 bg-red-800 rounded-full mx-auto mb-2 flex items-center justify-center text-stone-100 border-2 border-stone-700">
                  <Gift size={20} />
                </div>
                <h2 className="text-xl font-serif text-stone-100 tracking-widest">礼物助手</h2>
                <p className="text-xs text-stone-400 mt-1">帮你挑份好礼物</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-serif text-stone-800">要送给谁？</h3>
                    <div className="h-0.5 w-8 bg-red-800/30 mx-auto mt-2"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {relationships.map((rel) => (
                      <button
                        key={rel.id}
                        onClick={() => handleSelectWho(rel.id)}
                        className="flex flex-col items-center justify-center p-4 bg-white border border-stone-100 rounded-xl hover:border-stone-300 hover:shadow-md transition-all group"
                      >
                        <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{rel.icon}</span>
                        <span className="text-stone-900 font-medium mb-1 text-sm">{rel.label}</span>
                        <span className="text-[10px] text-stone-400">{rel.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <button onClick={() => setStep(1)} className="text-xs text-stone-400 flex items-center mb-4">
                    ← 返回
                  </button>
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-serif text-stone-800">希望礼物带去什么祝福？</h3>
                    <div className="h-0.5 w-8 bg-red-800/30 mx-auto mt-2"></div>
                  </div>
                  <div className="space-y-3">
                    {wishes.map((wish) => (
                      <button
                        key={wish.id}
                        onClick={() => handleSelectWish(wish.id)}
                        className="w-full flex items-center justify-between p-4 bg-white border border-stone-100 rounded-xl hover:border-stone-300 hover:shadow-md transition-all text-left group"
                      >
                        <span className="text-stone-900 font-medium text-lg font-serif">{wish.label}</span>
                        <span className="text-xs text-stone-400 group-hover:text-stone-600">{wish.desc}</span>
                        <ChevronRight size={16} className="text-stone-300 group-hover:text-stone-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && recommendation && (
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="bg-stone-100/50 p-6 rounded-t-2xl border border-stone-200 text-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-red-800/20"></div>
                      <p className="text-xs text-stone-500 mb-2 font-serif">送给 · {relationships.find(r => r.id === selections.who)?.label}</p>
                      <h3 className="text-xl font-serif text-stone-900 mb-4 leading-relaxed">
                         “{recommendation.poem}”
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed px-4">
                        {recommendation.reason}
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-b-2xl border-x border-b border-stone-200 shadow-sm flex gap-4">
                      <div className="w-24 h-24 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                        <img src={recommendation.image} className="w-full h-full object-cover" alt="product" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="inline-block px-2 py-0.5 bg-red-50 text-red-800 text-[10px] rounded mb-1 self-start">推荐</span>
                        <h4 className="font-medium text-stone-900 mb-1">{recommendation.title}</h4>
                        <p className="text-lg font-serif text-stone-900">{recommendation.price}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                       <div className="flex items-center justify-between text-xs text-stone-500 mb-3 px-2">
                          <span>包含服务</span>
                       </div>
                       <div className="flex gap-2">
                          <div className="flex-1 bg-stone-100 py-3 rounded-lg flex flex-col items-center justify-center text-xs text-stone-600">
                            <Heart size={14} className="mb-1 text-red-800/60"/>
                            <span>礼品包装</span>
                          </div>
                          <div className="flex-1 bg-stone-100 py-3 rounded-lg flex flex-col items-center justify-center text-xs text-stone-600">
                            <Sparkles size={14} className="mb-1 text-red-800/60"/>
                            <span>手写贺卡</span>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                     <button onClick={reset} className="flex-1 py-3 border border-stone-300 rounded-full text-stone-600 text-sm">
                       重新选
                     </button>
                     <button className="flex-[2] py-3 bg-stone-900 text-stone-50 rounded-full text-sm flex items-center justify-center shadow-lg hover:bg-stone-800">
                       <Send size={14} className="mr-2" /> 
                       选这个
                     </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
