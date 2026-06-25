import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Gem, Sparkles, Store, FileText, Building2, Heart, Gift,
  Calendar, CreditCard, Users, CheckCircle2, Radio, ChevronRight,
  Flame, Tag, TrendingUp, Crown, Star, UserPlus, Award,
  Settings, MessageCircle, HelpCircle, Home,
  Baby, User, Users2, Cat
} from 'lucide-react';

/* ── 数据 ── */

const bannerSlides = [
  {
    img: 'https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRydWZmbGUlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY0NTczMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: '珍稀白松露精华油',
    tag: '今日爆款',
    price: '¥1,680',
    saved: '省 ¥320',
  },
  {
    img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    title: '父亲节心意礼盒',
    tag: '限时特惠',
    price: '¥598',
    saved: '省 ¥100',
  },
];

const categoryEntries = [
  { icon: '🍵', label: '茶器' },
  { icon: '🧴', label: '个护' },
  { icon: '🍯', label: '滋补' },
  { icon: '👔', label: '服饰' },
  { icon: '🏠', label: '家居' },
  { icon: '🎁', label: '送礼' },
  { icon: '🐾', label: '毛孩子' },
  { icon: '👶', label: '儿童' },
];

type RankTab = 'hot' | 'value' | 'new';

const rankProducts: Record<RankTab, { name: string; price: string; saved: string; img: string; badge?: string }[]> = {
  hot: [
    { name: '明前龙井·头采', price: '¥888', saved: '省¥120', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'TOP1' },
    { name: '白松露精华油', price: '¥1,680', saved: '省¥320', img: 'https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'TOP2' },
    { name: '汝窑品茗杯', price: '¥368', saved: '省¥60', img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'TOP3' },
    { name: '沉香线香礼盒', price: '¥258', saved: '省¥40', img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '有机枸杞原浆', price: '¥198', saved: '省¥30', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  ],
  value: [
    { name: '有机枸杞原浆', price: '¥198', saved: '省¥80', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: '超值' },
    { name: '天然蜂蜜套装', price: '¥128', saved: '省¥60', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: '超值' },
    { name: '艾草养生贴', price: '¥68', saved: '省¥30', img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '手工皂礼盒', price: '¥88', saved: '省¥40', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '棉麻围巾', price: '¥158', saved: '省¥70', img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  ],
  new: [
    { name: '夏日冰丝凉席', price: '¥498', saved: '新品', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'NEW' },
    { name: '冷萃咖啡礼盒', price: '¥268', saved: '新品', img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'NEW' },
    { name: '驱蚊香薰蜡烛', price: '¥128', saved: '新品', img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '真丝眼罩', price: '¥168', saved: '新品', img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '便携茶具套装', price: '¥358', saved: '新品', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  ],
};

const personaCategories = [
  { icon: Heart, label: '长辈关怀', desc: '滋补养生', color: 'text-rose-600 bg-rose-50' },
  { icon: Baby, label: '宝贝成长', desc: '安心好物', color: 'text-sky-600 bg-sky-50' },
  { icon: Crown, label: '女神精致', desc: '品质之选', color: 'text-pink-600 bg-pink-50' },
  { icon: User, label: '男神格调', desc: '质感生活', color: 'text-amber-700 bg-amber-50' },
  { icon: Cat, label: '毛孩子', desc: '萌宠专属', color: 'text-orange-600 bg-orange-50' },
  { icon: Users2, label: '全家共享', desc: '一站备齐', color: 'text-emerald-600 bg-emerald-50' },
];

const goodMerchants = [
  { name: '清山茶事', tag: '茶器', desc: '核心产区·品鉴官严选', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  { name: '山隐私厨', tag: '餐饮', desc: '会员专享·本周特惠', img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  { name: '云隐汝窑', tag: '手作', desc: '匠心之作·限量发售', img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  { name: '本源农场', tag: '有机', desc: '产地直供·新鲜到家', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
];

const identityLevels = [
  { label: '普通用户', active: false },
  { label: '持卡会员', active: false },
  { label: '初级生态消费商', active: true },
  { label: '高级生态消费商', active: false },
  { label: '生态品鉴官', active: false },
  { label: '生态运营官', active: false },
  { label: '生态主跑官', active: false },
];

const familyProfileTags = [
  "三口之家",
  "一位长辈常住",
  "爸爸生日临近",
  "偏好健康与质感",
];

const ecosystemMoments = [
  { icon: Radio, title: '清山茶事正在直播', desc: '陈清主理人 · 品鉴官连线', view: 'live-stream', live: true },
  { icon: Sparkles, title: '明前龙井新茶到港', desc: '品鉴官严选 · 核心产区头采', view: 'store' },
  { icon: Store, title: '山隐私厨开放生日特权', desc: '会员专享 8.5 折', view: 'experience' },
  { icon: FileText, title: '沉香挑选手记更新', desc: '品鉴官共创 · 4.2k 阅读', view: 'community' },
  { icon: Heart, title: '六月品宴本周六开席', desc: '一席一会 · 余 8 位', view: 'dinner-event' },
];

/* ── 横向滚动 Hook ── */

function useHorizontalScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (!ref.current) return;
    const amount = ref.current.clientWidth * 0.7;
    ref.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };
  return { ref, scroll };
}

/* ── 主组件 ── */

export function HomeView({ onChangeView }: { onChangeView: (view: string) => void }) {
  const [rankTab, setRankTab] = useState<RankTab>('hot');
  const bannerScroll = useHorizontalScroll();
  const rankScroll = useHorizontalScroll();
  const merchantScroll = useHorizontalScroll();
  const personaScroll = useHorizontalScroll();

  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-stone-800">

      {/* ═══ 右侧悬浮快捷功能区 ═══ */}
      <div className="fixed right-3 top-[55%] z-50 -translate-y-1/2 flex flex-col gap-3">
        {[
          { icon: UserPlus, label: '完善画像', action: () => onChangeView('profile') },
          { icon: MessageCircle, label: '客服', action: () => {} },
          { icon: HelpCircle, label: '帮助', action: () => {} },
          { icon: Home, label: '回顶', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={item.action}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md ring-1 ring-stone-200/60 backdrop-blur transition-all hover:bg-amber-50 hover:shadow-lg"
              title={item.label}
            >
              <Icon size={16} className="text-stone-500 transition-colors group-hover:text-amber-700" />
            </button>
          );
        })}
      </div>

      {/* ═══ 首屏：Banner + 省钱感知 ═══ */}
      <div className="relative bg-gradient-to-b from-amber-50 to-stone-50">
        {/* 顶部搜索栏 */}
        <div className="flex items-center gap-3 px-4 pt-4 pb-2">
          <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-stone-200/60">
            <Settings size={14} className="text-stone-400" />
            <span className="text-xs text-stone-400">搜索好物、榜单、商家…</span>
          </div>
          <button
            onClick={() => onChangeView('profile')}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-stone-200/60"
          >
            <Crown size={16} className="text-amber-700" />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
        </div>

        {/* Banner 横向滑动 */}
        <div className="relative px-4 py-2">
          <div ref={bannerScroll.ref} className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide">
            {bannerSlides.map((slide, i) => (
              <div
                key={i}
                className="group relative min-w-[85%] snap-start overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <img src={slide.img} alt={slide.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
                  <div className="absolute left-4 top-3">
                    <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow">{slide.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">{slide.title}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm font-semibold text-amber-300">{slide.price}</span>
                        <span className="rounded-full bg-green-500/90 px-2 py-0.5 text-[10px] font-medium text-white">{slide.saved}</span>
                      </div>
                    </div>
                    <button className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-stone-900 shadow backdrop-blur">
                      立即抢
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 分类快捷入口 */}
        <div className="px-4 pb-4 pt-1">
          <div ref={personaScroll.ref} className="flex gap-4 overflow-x-auto scroll-smooth pb-1 scrollbar-hide">
            {categoryEntries.map((cat) => (
              <button
                key={cat.label}
                onClick={() => onChangeView('discovery')}
                className="flex min-w-[4rem] flex-col items-center gap-1.5"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-[10px] text-stone-600">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 榜单模块（横向滑动 + Tab 切换）═══ */}
      <section className="bg-white px-0 py-5">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-amber-700" />
            <h3 className="text-base font-medium text-stone-900">好物榜单</h3>
          </div>
          <button onClick={() => onChangeView('discovery')} className="text-[11px] text-stone-400 flex items-center">
            全部 <ChevronRight size={12} />
          </button>
        </div>

        {/* Tab 切换 */}
        <div className="flex gap-2 px-4 mb-3">
          {([
            { key: 'hot' as RankTab, label: '爆品榜', icon: Flame },
            { key: 'value' as RankTab, label: '实惠榜', icon: Tag },
            { key: 'new' as RankTab, label: '新品榜', icon: Sparkles },
          ]).map((tab) => {
            const Icon = tab.icon;
            const active = rankTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setRankTab(tab.key)}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-medium transition-all ${
                  active
                    ? 'bg-stone-900 text-amber-50 shadow'
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                <Icon size={12} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 商品卡片横向滑动 */}
        <div ref={rankScroll.ref} className="flex gap-3 overflow-x-auto scroll-smooth px-4 pb-2 scrollbar-hide">
          {rankProducts[rankTab].map((product, i) => (
            <button
              key={product.name + i}
              onClick={() => onChangeView('product-white-truffle')}
              className="group min-w-[130px] max-w-[130px] shrink-0 overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img src={product.img} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {product.badge && (
                  <span className="absolute left-2 top-2 rounded-md bg-red-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-2.5 text-left">
                <p className="line-clamp-1 text-[11px] font-medium text-stone-800">{product.name}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-amber-700">{product.price}</span>
                  <span className="text-[9px] text-green-600">{product.saved}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ═══ 身份体系入口（生态消费商）═══ */}
      <section className="px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => onChangeView('eco-consumer')}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-4 shadow-lg"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/15 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-400/10 blur-xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20">
                  <Gem size={16} className="text-amber-300" />
                </div>
                <div>
                  <p className="text-xs font-medium text-amber-200">我的生态身份</p>
                  <p className="text-[10px] text-stone-400">查看身份进度 · 升级路径</p>
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-1 text-[10px] text-amber-200">
                <Award size={11} />
                <span>去升级</span>
                <ArrowRight size={10} />
              </div>
            </div>

            {/* 身份进度条 */}
            <div className="mt-4 flex items-center gap-1">
              {identityLevels.map((level, i) => (
                <div key={level.label} className="flex flex-1 items-center">
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      i <= 2
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                        : 'bg-stone-700'
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-1.5 flex justify-between">
              <span className="text-[9px] text-amber-300">初级生态消费商</span>
              <span className="text-[9px] text-stone-500">距高级还差 3 个任务</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ 精选品类导购（用户画像维度）═══ */}
      <section className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-amber-700" />
            <h3 className="text-base font-medium text-stone-900">为TA而选</h3>
          </div>
          <button onClick={() => onChangeView('discovery')} className="text-[11px] text-stone-400 flex items-center">
            更多 <ChevronRight size={12} />
          </button>
        </div>
        <div ref={personaScroll.ref} className="flex gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-hide">
          {personaCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.label}
                onClick={() => onChangeView('discovery')}
                className="group flex min-w-[100px] flex-col items-center gap-2 rounded-2xl border border-stone-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${cat.color}`}>
                  <Icon size={20} />
                </div>
                <p className="text-[11px] font-medium text-stone-800">{cat.label}</p>
                <p className="text-[9px] text-stone-400">{cat.desc}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* ═══ 今日值得（主推商品 + 内容）═══ */}
      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[10px] font-medium tracking-[0.28em] text-amber-700">CURATED TODAY</p>
            <h3 className="mt-1 text-lg font-serif font-light text-stone-950">今日值得</h3>
          </div>
          <button onClick={() => onChangeView('discovery')} className="text-[11px] text-stone-400 flex items-center">
            更多 <ChevronRight size={12} />
          </button>
        </div>

        <div onClick={() => onChangeView('product-white-truffle')} className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-md shadow-stone-200/60 transition-all hover:-translate-y-0.5 hover:shadow-xl">
          <div className="relative aspect-[1.28] overflow-hidden bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRydWZmbGUlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY0NTczMjAwfDA&ixlib=rb-4.1.0&q=80&w=800"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent" />
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
      </section>

      {/* ═══ 好商家推荐（横向滑动）═══ */}
      <section className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-amber-700" />
            <h3 className="text-base font-medium text-stone-900">好商家推荐</h3>
          </div>
          <button onClick={() => onChangeView('store')} className="text-[11px] text-stone-400 flex items-center">
            全部 <ChevronRight size={12} />
          </button>
        </div>
        <div ref={merchantScroll.ref} className="flex gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-hide">
          {goodMerchants.map((m) => (
            <button
              key={m.name}
              onClick={() => onChangeView('store')}
              className="group min-w-[150px] max-w-[150px] shrink-0 overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-medium text-stone-700 backdrop-blur">{m.tag}</span>
              </div>
              <div className="p-3 text-left">
                <p className="text-[12px] font-medium text-stone-800">{m.name}</p>
                <p className="mt-0.5 text-[10px] text-stone-400">{m.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ═══ 家庭画像（上移，紧凑化）═══ */}
      <section className="px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-stone-100 bg-[#fbfaf7] p-4 shadow-sm"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-100/45 blur-3xl" />
          <div className="relative z-10">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Users size={15} className="text-amber-700" />
                <span className="text-[10px] font-medium tracking-[0.22em] text-amber-800">FAMILY PROFILE</span>
              </div>
              <div className="rounded-full border border-amber-100 bg-white px-2.5 py-0.5 text-[10px] text-amber-800 shadow-sm">
                72%
              </div>
            </div>
            <h3 className="text-base font-serif font-light text-stone-950">家的偏好，已经有轮廓</h3>
            <div className="mt-2 mb-3 h-1.5 overflow-hidden rounded-full bg-stone-100">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-amber-400 to-stone-700" />
            </div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {familyProfileTags.map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-stone-100 bg-white px-2.5 py-0.5 text-[10px] text-stone-600">
                  <CheckCircle2 size={10} className="mr-1 text-amber-700" />
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => onChangeView('profile')}
              className="flex w-full items-center justify-between rounded-xl bg-stone-900 px-3 py-2.5 text-left text-[11px] text-amber-50 transition-colors hover:bg-stone-800"
            >
              <span>完善家庭画像，让推荐更懂你</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ═══ 生态今日 ═══ */}
      <section className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[10px] font-medium tracking-[0.28em] text-amber-700">ECO MOMENTS</p>
            <h3 className="mt-1 text-lg font-serif font-light text-stone-950">生态今日</h3>
          </div>
        </div>

        <div className="rounded-2xl border border-white/80 bg-white/65 p-3 shadow-sm backdrop-blur">
          {ecosystemMoments.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={() => onChangeView(item.view)}
                className="group flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-stone-50"
              >
                <div className="flex w-7 shrink-0 flex-col items-center">
                  <div className={`relative flex h-7 w-7 items-center justify-center rounded-full ${item.live ? 'bg-stone-950 text-amber-100' : 'bg-amber-100 text-amber-800'}`}>
                    {item.live && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-red-400/30" />
                    )}
                    <Icon size={13} />
                  </div>
                  {index < ecosystemMoments.length - 1 && <div className="mt-1.5 h-4 w-px bg-stone-200" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] font-medium text-stone-900">{item.title}</p>
                    {item.live && (
                      <span className="rounded-full bg-red-50 px-1.5 py-0.5 text-[8px] font-medium text-red-600 ring-1 ring-red-100">
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[10px] text-stone-500">{item.desc}</p>
                </div>
                <ArrowRight size={12} className="text-stone-300 transition-colors group-hover:text-amber-700" />
              </button>
            );
          })}
        </div>
      </section>

      {/* ═══ 体验券 & 品宴（下移）═══ */}
      <section className="px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onChangeView('experience')}
            className="rounded-2xl border border-white/70 bg-white/70 p-3 text-left shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            <CreditCard size={15} className="mb-2 text-amber-700" />
            <p className="text-[12px] font-medium text-stone-900">体验券将到期</p>
            <p className="mt-0.5 text-[10px] leading-relaxed text-stone-500">山隐私厨 · 周末可用</p>
          </button>
          <button
            onClick={() => onChangeView('dinner-event')}
            className="rounded-2xl border border-white/70 bg-white/70 p-3 text-left shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            <Calendar size={15} className="mb-2 text-amber-700" />
            <p className="text-[12px] font-medium text-stone-900">六月品宴</p>
            <p className="mt-0.5 text-[10px] leading-relaxed text-stone-500">本周六开席 · 余 8 位</p>
          </button>
        </div>
      </section>

      {/* ═══ AI 礼物建议（下移）═══ */}
      <section className="px-4 py-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-amber-100 bg-[#fff7ed] text-stone-900 shadow-lg shadow-amber-100/30"
        >
          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Birthday flowers"
            className="absolute inset-y-0 right-0 h-full w-2/3 object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ec] via-[#fff1dc]/95 to-[#f1d7b3]/55" />
          <div className="relative p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex items-center rounded-full border border-amber-200/80 bg-white/70 px-2.5 py-0.5 text-[10px] tracking-[0.18em] text-amber-800 backdrop-blur">
                <Gift size={11} className="mr-1" />
                生日关怀
              </div>
              <span className="font-serif text-2xl text-amber-700">7</span>
            </div>
            <p className="mb-1 text-[11px] text-amber-800">爸爸生日还有 7 天</p>
            <h4 className="max-w-[14rem] text-lg font-serif font-light leading-snug text-stone-950">
              把心意慢慢备好，等那天只陪他好好过。
            </h4>
            <button
              onClick={() => onChangeView('gift-concierge')}
              className="mt-4 inline-flex items-center rounded-full bg-stone-900 px-3.5 py-2 text-[11px] font-medium text-amber-50 transition-colors hover:bg-stone-800"
            >
              看 AI 礼物建议
              <ArrowRight size={12} className="ml-1.5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ═══ 生态共建 ═══ */}
      <section className="px-4 py-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => onChangeView('co-creation-content')}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-stone-950 text-amber-50 shadow-xl shadow-stone-200"
        >
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative z-10 flex items-center justify-between p-5">
            <div>
              <div className="mb-1.5 flex items-center space-x-2">
                <Gem size={13} className="text-amber-300" />
                <span className="text-[11px] font-medium tracking-wider text-amber-100">生态共建</span>
              </div>
              <h3 className="mb-1 text-base font-serif text-white">把你的品味，变成生态的一部分</h3>
              <p className="text-[11px] leading-relaxed text-stone-400">分享真实体验、参与内容共创</p>
            </div>
            <div className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition-all group-hover:bg-amber-100 group-hover:text-stone-950">
              <ArrowRight size={15} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ 底部：入驻 & 品牌信息（最后）═══ */}
      <section className="px-4 py-6">
        <div className="space-y-4 pb-4">
          <div className="px-4 py-3 text-center">
            <p className="mb-2 font-serif text-base font-light text-stone-900">
              品你所想，爱你所爱
            </p>
            <p className="text-[10px] leading-relaxed text-stone-500">
              品货官是一个以"内循环生态"为底层逻辑的会员制消费平台。<br />
              我们为家庭用户严选真正解决问题的好产品，<br />
              让消费更省心、更值得、更有温度。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onChangeView('merchant-apply')}
              className="group rounded-2xl border border-stone-100 bg-white p-3 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-sm ring-1 ring-amber-100">
                <Building2 size={16} />
              </div>
              <h4 className="mb-0.5 text-[11px] font-medium text-stone-800">商家入驻</h4>
              <p className="text-[9px] text-stone-400">线下优质商家合作</p>
            </button>
            <button
              onClick={() => onChangeView('supplier-apply')}
              className="group rounded-2xl border border-stone-100 bg-white p-3 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-stone-100 text-stone-700 shadow-sm ring-1 ring-stone-200">
                <Store size={16} />
              </div>
              <h4 className="mb-0.5 text-[11px] font-medium text-stone-800">工厂/供应链合作</h4>
              <p className="text-[9px] text-stone-400">源头工厂直供对接</p>
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-[9px] tracking-wider text-stone-300">
              品货官 · 让消费回归信任与品质
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
