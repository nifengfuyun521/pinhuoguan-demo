import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Gem, Sparkles, Store, FileText, Building2, Heart, Gift, Calendar, CreditCard, Users, CheckCircle2, Radio } from 'lucide-react';

const familyProfileTags = [
  "三口之家",
  "一位长辈常住",
  "爸爸生日临近",
  "偏好健康与质感",
];

const ecosystemMoments = [
  { icon: Radio, title: '清山茶事正在直播', desc: '陈清主理人 · 品鉴官连线 · 云隐汝窑壶讲解', view: 'live-stream', live: true },
  { icon: Sparkles, title: '明前龙井新茶到港', desc: '品鉴官严选 · 核心产区头采', view: 'store' },
  { icon: Store, title: '山隐私厨开放生日特权', desc: '会员专享 8.5 折 · 已认证', view: 'experience' },
  { icon: FileText, title: '沉香挑选手记更新', desc: '品鉴官共创 · 4.2k 阅读', view: 'community' },
  { icon: Heart, title: '六月品宴本周六开席', desc: '一席一会 · 余 8 位', view: 'dinner-event' },
];

export function HomeView({ onChangeView }: { onChangeView: (view: string) => void }) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-stone-800">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1755685068178-4b57210ddcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjB0ZWElMjBjZXJlbW9ueSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjQ0OTc2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Zen Tea Ceremony" 
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-50"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-2 text-xs font-medium tracking-[0.3em] text-stone-700 uppercase">品货官</h2>
            <h1 className="mb-4 text-4xl font-serif font-light text-stone-900 leading-tight">
              生活<br/>即是修行
            </h1>
            <p className="mb-8 text-sm text-stone-600 tracking-wide opacity-90 max-w-xs mx-auto font-serif">
              在喧嚣中寻得一隅宁静<br/>于万物间照见本真自我
            </p>

            
            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 5, 0] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
              className="mt-12"
            >
              <div className="w-0.5 h-12 bg-stone-400/50 mx-auto rounded-full overflow-hidden">
                <div className="w-full h-1/2 bg-stone-800 animate-movedown"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 space-y-10 overflow-hidden bg-white px-5 py-10">
        <div className="pointer-events-none absolute right-[-34%] top-10 h-64 w-64 rounded-full bg-amber-50/35 blur-3xl"></div>
        <div className="pointer-events-none absolute right-[-48%] top-[38rem] h-96 w-96 rounded-full bg-stone-100/60 blur-3xl"></div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative space-y-4"
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium tracking-[0.28em] text-amber-700">TODAY CARE</p>
              <h3 className="mt-2 text-2xl font-serif font-light text-stone-950">今日为你留意</h3>
            </div>
            <span className="rounded-full border border-amber-200/70 bg-amber-50/70 px-3 py-1 text-[10px] text-amber-800">
              3 条新提醒
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-[#fff7ed] text-stone-900 shadow-xl shadow-amber-100/45">
            <img
              src="https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Birthday flowers"
              className="absolute inset-y-0 right-0 h-full w-2/3 object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ec] via-[#fff1dc]/95 to-[#f1d7b3]/55"></div>
            <div className="absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-rose-200/30 blur-2xl"></div>
            <div className="relative p-6">
              <div className="mb-10 flex items-center justify-between">
                <div className="inline-flex items-center rounded-full border border-amber-200/80 bg-white/70 px-3 py-1 text-[10px] tracking-[0.18em] text-amber-800 backdrop-blur">
                  <Gift size={12} className="mr-1.5" />
                  生日关怀
                </div>
                <span className="font-serif text-3xl text-amber-700">7</span>
              </div>

              <p className="mb-2 text-xs text-amber-800">爸爸生日还有 7 天</p>
              <h4 className="max-w-[15rem] text-2xl font-serif font-light leading-snug text-stone-950">
                把心意慢慢备好，等那天只陪他好好过。
              </h4>
              <p className="mt-4 max-w-[17rem] text-xs leading-relaxed text-stone-600">
                已根据家庭画像准备了滋补、茶席和有仪式感的小件，适合体面表达，也不显得用力过猛。
              </p>

              <button
                onClick={() => onChangeView('gift-concierge')}
                className="mt-7 inline-flex items-center rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-amber-50 transition-colors hover:bg-stone-800"
              >
                看 AI 礼物建议
                <ArrowRight size={13} className="ml-2" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onChangeView('experience')}
              className="rounded-2xl border border-white/70 bg-white/70 p-4 text-left shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <CreditCard size={16} className="mb-3 text-amber-700" />
              <p className="text-sm font-medium text-stone-900">体验券将到期</p>
              <p className="mt-1 text-[10px] leading-relaxed text-stone-500">山隐私厨 · 周末可用</p>
            </button>
            <button
              onClick={() => onChangeView('dinner-event')}
              className="rounded-2xl border border-white/70 bg-white/70 p-4 text-left shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <Calendar size={16} className="mb-3 text-amber-700" />
              <p className="text-sm font-medium text-stone-900">六月品宴</p>
              <p className="mt-1 text-[10px] leading-relaxed text-stone-500">本周六开席 · 余 8 位</p>
            </button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-stone-100 bg-[#fbfaf7] p-5 shadow-sm"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-100/45 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-stone-200/35 blur-2xl"></div>
          <div className="mb-5 flex items-start justify-between">
            <div className="relative z-10">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-amber-700" />
                <span className="text-[10px] font-medium tracking-[0.22em] text-amber-800">FAMILY PROFILE</span>
              </div>
              <h3 className="mt-2 text-xl font-serif font-light text-stone-950">家的偏好，已经有轮廓</h3>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">
                继续补充家人关系、生日和常购偏好，AI 会把送礼、补货与权益提醒变得更稳。
              </p>
            </div>
            <div className="relative z-10 rounded-full border border-amber-100 bg-white px-3 py-1 text-[10px] text-amber-800 shadow-sm">
              72%
            </div>
          </div>

          <div className="relative z-10 mb-4 h-1.5 overflow-hidden rounded-full bg-stone-100">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-amber-400 to-stone-700"></div>
          </div>

          <div className="relative z-10 mb-4 flex flex-wrap gap-2">
            {familyProfileTags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full border border-stone-100 bg-white px-3 py-1 text-[10px] text-stone-700">
                <CheckCircle2 size={11} className="mr-1 text-amber-700" />
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onChangeView('profile')}
            className="relative z-10 flex w-full items-center justify-between rounded-2xl bg-stone-900 px-4 py-3 text-left text-xs text-amber-50 transition-colors hover:bg-stone-800"
          >
            <span>完善家庭画像，让首页更像你的家</span>
            <ArrowRight size={14} />
          </button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative space-y-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium tracking-[0.28em] text-amber-700">CURATED TODAY</p>
              <h3 className="mt-2 text-2xl font-serif font-light text-stone-950">今日值得</h3>
            </div>
            <span className="text-[10px] text-stone-400">内容与好物各一</span>
          </div>

          <div onClick={() => onChangeView('product-white-truffle')} className="group cursor-pointer overflow-hidden rounded-[2rem] border border-stone-100 bg-white shadow-md shadow-stone-200/60 transition-all hover:-translate-y-0.5 hover:shadow-xl">
            <div className="relative aspect-[1.28] overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRydWZmbGUlMjBvaWwlMjBib3R0bGUlMjBjb3NtZXRpYyUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY0NTczMjAwfDA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Product"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-medium text-amber-800 backdrop-blur">今日主推 · 回购王</span>
                  <h4 className="mt-3 text-2xl font-serif font-light leading-snug text-white">珍稀白松露精华油</h4>
                </div>
                <span className="shrink-0 rounded-full bg-stone-950/70 px-3 py-1 text-sm font-medium text-white backdrop-blur">¥1,680</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-stone-500">抗衰逆龄 · 晨曦中的森林馈赠</p>
              <p className="mt-3 text-[12px] leading-relaxed text-stone-700">
                为什么值得：适合爸爸生日礼，有质感，也回应日常护理与气色状态的真实需求。
              </p>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-amber-50 px-4 py-3 text-[11px] text-stone-600">
                <span>品鉴官严选 · 适合送礼</span>
                <span className="inline-flex items-center font-medium text-amber-800">
                  去品库看看
                  <ArrowRight size={10} className="ml-1" />
                </span>
              </div>
            </div>
          </div>

          <div
            onClick={() => onChangeView('discovery')}
            className="group cursor-pointer rounded-[1.5rem] border border-stone-100 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex gap-3">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1589163045730-40797c5cdc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGNoaW5lc2UlMjBmZW5nJTIwc2h1aSUyMHplbiUyMGJhbGFuY2VkJTIwYnJpZ2h0fGVufDF8fHx8MTc2NDU3Mzg0OHww&ixlib=rb-4.1.0&q=80&w=240"
                  alt="Topic"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1 py-1">
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[9px] font-medium text-stone-500">补充阅读 · 堪舆私教</span>
                <h4 className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-stone-900">
                  顺势而居：现代豪宅的风水能量场构建
                </h4>
                <p className="mt-1 line-clamp-1 text-[10px] text-stone-500">把空间能量讲成可理解的居住方法。</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-3 text-[10px] text-stone-400">
              <span>研习 20min</span>
              <span className="inline-flex items-center text-amber-700">
                阅读手记
                <ArrowRight size={10} className="ml-1" />
              </span>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative space-y-4"
        >
          <div>
            <p className="text-[10px] font-medium tracking-[0.28em] text-amber-700">ECO MOMENTS</p>
            <h3 className="mt-2 text-2xl font-serif font-light text-stone-950">生态今日</h3>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/65 p-4 shadow-sm backdrop-blur">
            {ecosystemMoments.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  onClick={() => onChangeView(item.view)}
                  className="group flex w-full items-center gap-4 rounded-2xl px-2 py-3 text-left transition-colors hover:bg-stone-50"
                >
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <div className={`relative flex h-8 w-8 items-center justify-center rounded-full ${item.live ? 'bg-stone-950 text-amber-100' : 'bg-amber-100 text-amber-800'}`}>
                      {item.live && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-red-400/30" />
                      )}
                      <Icon size={14} />
                    </div>
                    {index < ecosystemMoments.length - 1 && <div className="mt-2 h-5 w-px bg-stone-200"></div>}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-stone-900">{item.title}</p>
                      {item.live && (
                        <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-medium text-red-600 ring-1 ring-red-100">
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[10px] text-stone-500">{item.desc}</p>
                  </div>
                  <ArrowRight size={13} className="text-stone-300 transition-colors group-hover:text-amber-700" />
                </button>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => onChangeView('co-creation-content')}
          className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-stone-950 text-amber-50 shadow-xl shadow-stone-200"
        >
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-500/20 blur-3xl"></div>
          <div className="absolute -left-16 bottom-0 h-28 w-28 rounded-full bg-white/5 blur-2xl"></div>
          <div className="relative z-10 flex items-center justify-between p-6">
            <div>
              <div className="mb-2 flex items-center space-x-2">
                <Gem size={14} className="text-amber-300" />
                <span className="text-xs font-medium tracking-wider text-amber-100">生态共建</span>
              </div>
              <h3 className="mb-1 text-lg font-serif text-white">把你的品味，变成生态的一部分</h3>
              <p className="text-xs leading-relaxed text-stone-400">分享真实体验、参与内容共创，帮助更多家庭做出安心选择。</p>
            </div>
            <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition-all group-hover:bg-amber-100 group-hover:text-stone-950">
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.section>
        
        <div className="space-y-6 pb-4 pt-4">
          <div className="px-4 py-4 text-center">
            <p className="mb-3 font-serif text-lg font-light text-stone-900">
              品你所想，爱你所爱
            </p>
            <p className="text-[11px] leading-relaxed text-stone-500">
              品货官是一个以"内循环生态"为底层逻辑的会员制消费平台。<br/>
              我们为家庭用户严选真正解决问题的好产品，<br/>
              让消费更省心、更值得、更有温度。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onChangeView('merchant-apply')}
              className="group rounded-2xl border border-stone-100 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-sm ring-1 ring-amber-100">
                <Building2 size={18} />
              </div>
              <h4 className="mb-1 text-xs font-medium text-stone-800">商家入驻</h4>
              <p className="text-[9px] text-stone-400">线下优质商家合作</p>
            </button>
            <button
              onClick={() => onChangeView('supplier-apply')}
              className="group rounded-2xl border border-stone-100 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-700 shadow-sm ring-1 ring-stone-200">
                <Store size={18} />
              </div>
              <h4 className="mb-1 text-xs font-medium text-stone-800">工厂/供应链合作</h4>
              <p className="text-[9px] text-stone-400">源头工厂直供对接</p>
            </button>
          </div>

          <div className="text-center pt-4">
            <p className="text-[9px] tracking-wider text-stone-300">
              品货官 · 让消费回归信任与品质
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
