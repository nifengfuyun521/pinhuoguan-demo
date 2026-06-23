import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Heart, Sparkles, ChevronRight, Send, Users, SlidersHorizontal } from 'lucide-react';

interface GiftConciergeProps {
  isOpen: boolean;
  onClose: () => void;
}

const familyProfile = [
  { label: '家庭画像', value: '三口之家 + 一位长辈常住' },
  { label: '近期需求', value: '妈妈生日、长辈滋补、周末到访' },
  { label: '消费偏好', value: '重视质感、健康、可长期使用' },
];

const relationships = [
  { id: 'mother', label: '妈妈', desc: '生日礼物', profile: '偏爱温和护肤和有仪式感的小物' },
  { id: 'elder', label: '长辈', desc: '日常关怀', profile: '更看重健康、体面和使用简单' },
  { id: 'partner', label: '伴侣', desc: '惊喜表达', profile: '喜欢精致但不浮夸的质感礼' },
  { id: 'friend', label: '好友', desc: '轻礼往来', profile: '适合不造成负担的小而美礼物' },
  { id: 'kid', label: '孩子', desc: '成长陪伴', profile: '安全、有趣、能一起参与更好' },
  { id: 'self', label: '自己', desc: '犒赏自己', profile: '适合提升生活质感的长期用品' },
];

const needs = [
  { id: 'birthday', label: '生日', desc: '要有仪式感，也要实用' },
  { id: 'health', label: '健康', desc: '滋补调理、少踩坑' },
  { id: 'visit', label: '拜访', desc: '体面、不张扬、拿得出手' },
  { id: 'comfort', label: '舒缓', desc: '让对方放松下来' },
];

const recommendations: Record<string, any> = {
  'mother-birthday': {
    title: '珍稀白松露精华油',
    price: '¥1,680',
    category: '抗衰逆龄',
    image: 'https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    reason: '妈妈生日临近，画像里显示她偏爱温和护肤和仪式感；这件礼物既有质感，也不会显得过度浮夸。',
    match: '匹配妈妈生日、抗衰护肤、年度会员偏好',
  },
  'elder-health': {
    title: '6年根红参切片',
    price: '¥560',
    category: '功能膳食',
    image: 'https://images.unsplash.com/photo-1735815814303-0560d30455eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    reason: '家庭画像里长辈常住，近期也有滋补需求；红参切片使用简单，适合日常关怀，不像保健品那样有压力。',
    match: '匹配长辈滋补、日常关怀、低决策成本',
  },
  'elder-visit': {
    title: '手作粗陶茶壶',
    price: '¥1,280',
    category: '茗茶雅道',
    image: 'https://images.unsplash.com/photo-1584428885051-d80a38d86b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    reason: '拜访长辈时，茶器比单纯吃喝更耐用，也更能体现心意；适合喜欢慢生活和待客场景的家庭。',
    match: '匹配拜访场景、长辈茶饮习惯、长期使用',
  },
  'friend-comfort': {
    title: '海南沉香 · 奇楠种',
    price: '¥2,800',
    category: '空间能量',
    image: 'https://images.unsplash.com/photo-1758903846845-e8ae224a5047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    reason: '好友轻礼不宜太功利，沉香更像一种情绪照顾；适合工作压力大、需要放松空间的人。',
    match: '匹配舒缓需求、空间疗愈、朋友关系',
  },
  default: {
    title: '纯银 · 手工锤纹茶杯',
    price: '¥880',
    category: '茗茶雅道',
    image: 'https://images.unsplash.com/photo-1701933810995-3331d9ff463b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    reason: '根据家庭画像，这类长期可用、有质感、不过度私人的礼物最稳妥，适合多数关系和场景。',
    match: '匹配家庭质感偏好、可长期使用、送礼安全感',
  },
};

export function GiftConcierge({ isOpen, onClose }: GiftConciergeProps) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<{ who?: string; need?: string }>({});

  const handleSelectWho = (id: string) => {
    setSelections({ ...selections, who: id });
    setStep(2);
  };

  const handleSelectNeed = (id: string) => {
    setSelections({ ...selections, need: id });
    setStep(3);
  };

  const getRecommendation = () => {
    const key = `${selections.who}-${selections.need}`;
    return recommendations[key] || recommendations.default;
  };

  const reset = () => {
    setStep(1);
    setSelections({});
  };

  const selectedPerson = relationships.find((item) => item.id === selections.who);
  const selectedNeed = needs.find((item) => item.id === selections.need);
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
            className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[7%] bottom-[7%] z-50 flex flex-col overflow-hidden rounded-2xl bg-stone-50 shadow-2xl md:inset-x-auto md:left-1/2 md:w-[480px] md:-translate-x-1/2"
          >
            <div className="relative h-36 shrink-0 bg-stone-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]"></div>
              <button onClick={onClose} className="absolute right-4 top-4 text-stone-400 hover:text-white">
                <X size={24} />
              </button>
              <div className="relative z-10 flex h-full items-center px-6">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-200/10 text-amber-100">
                  <Sparkles size={22} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-amber-200/80">AI GIFT CONCIERGE</div>
                  <h2 className="mt-1 text-2xl font-serif text-amber-50">AI 礼物管家</h2>
                  <p className="mt-1 text-xs text-stone-400">根据家庭画像与当下需求推荐</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                <div className="mb-3 flex items-center space-x-2">
                  <Users size={16} className="text-amber-700" />
                  <span className="text-xs font-medium text-stone-900">已读取家庭画像</span>
                </div>
                <div className="space-y-2">
                  {familyProfile.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-3 text-[11px]">
                      <span className="shrink-0 text-stone-500">{item.label}</span>
                      <span className="text-right leading-relaxed text-stone-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-serif text-stone-900">这次想送给谁？</h3>
                    <p className="mt-1 text-xs text-stone-500">AI 会结合关系、家庭画像和近期事件缩小选择范围。</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {relationships.map((rel) => (
                      <button
                        key={rel.id}
                        onClick={() => handleSelectWho(rel.id)}
                        className="rounded-2xl border border-stone-100 bg-white p-4 text-left shadow-sm transition-all hover:border-amber-100 hover:bg-amber-50/50"
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-serif text-base text-stone-900">{rel.label}</span>
                          <ChevronRight size={15} className="text-stone-300" />
                        </div>
                        <div className="text-[10px] text-amber-700">{rel.desc}</div>
                        <p className="mt-2 text-[11px] leading-relaxed text-stone-500">{rel.profile}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <button onClick={() => setStep(1)} className="text-xs text-stone-400">
                    ← 返回选择对象
                  </button>
                  <div>
                    <h3 className="text-lg font-serif text-stone-900">这次礼物解决什么需求？</h3>
                    <p className="mt-1 text-xs text-stone-500">
                      已选择：{selectedPerson?.label}。AI 会优先考虑真实场景，而不是只看价格。
                    </p>
                  </div>
                  <div className="space-y-3">
                    {needs.map((need) => (
                      <button
                        key={need.id}
                        onClick={() => handleSelectNeed(need.id)}
                        className="flex w-full items-center justify-between rounded-2xl border border-stone-100 bg-white p-4 text-left shadow-sm transition-all hover:border-amber-100 hover:bg-amber-50/50"
                      >
                        <div>
                          <div className="font-serif text-base text-stone-900">{need.label}</div>
                          <div className="mt-1 text-xs text-stone-500">{need.desc}</div>
                        </div>
                        <ChevronRight size={16} className="text-stone-300" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && recommendation && (
                <div className="flex min-h-full flex-col">
                  <div className="flex-1">
                    <div className="mb-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] tracking-[0.18em] text-amber-700">AI 推荐结果</div>
                          <h3 className="mt-1 text-xl font-serif text-stone-900">{recommendation.title}</h3>
                        </div>
                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] text-amber-800">{recommendation.category}</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                          <img src={recommendation.image} className="h-full w-full object-cover" alt="product" />
                        </div>
                        <div className="flex min-w-0 flex-col justify-center">
                          <div className="text-lg font-serif text-stone-900">{recommendation.price}</div>
                          <p className="mt-2 text-xs leading-relaxed text-stone-500">{recommendation.reason}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                      <div className="mb-2 flex items-center space-x-2">
                        <SlidersHorizontal size={15} className="text-amber-700" />
                        <span className="text-xs font-medium text-stone-900">AI 匹配依据</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-stone-600">{recommendation.match}</p>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                        <div className="rounded-xl bg-white/70 p-2 text-stone-600">对象：{selectedPerson?.label}</div>
                        <div className="rounded-xl bg-white/70 p-2 text-stone-600">需求：{selectedNeed?.label}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <div className="flex-1 rounded-xl bg-stone-100 py-3 text-center text-xs text-stone-600">
                        <Heart size={14} className="mx-auto mb-1 text-amber-700" />
                        礼品包装
                      </div>
                      <div className="flex-1 rounded-xl bg-stone-100 py-3 text-center text-xs text-stone-600">
                        <Gift size={14} className="mx-auto mb-1 text-amber-700" />
                        祝福卡片
                      </div>
                      <div className="flex-1 rounded-xl bg-stone-100 py-3 text-center text-xs text-stone-600">
                        <Sparkles size={14} className="mx-auto mb-1 text-amber-700" />
                        换礼建议
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button onClick={reset} className="flex-1 rounded-full border border-stone-300 py-3 text-sm text-stone-600">
                      重新选
                    </button>
                    <button className="flex-[2] rounded-full bg-stone-900 py-3 text-sm text-stone-50 shadow-lg hover:bg-stone-800 flex items-center justify-center">
                      <Send size={14} className="mr-2" />
                      加入送礼清单
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
