import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Sparkles, Store, FileText, Building2, Heart, Gift,
  Calendar, CreditCard, Users, Radio, ChevronRight,
  Flame, Tag, TrendingUp, Crown, UserPlus, Zap,
  Share2, Medal, HandHeart,
  Coins, BadgeCheck, Trophy,
  ArrowUp, Search
} from 'lucide-react';

/* ── Mock 数据 ── */

const userInfo = {
  name: 'Lawren',
  level: '高级品鉴官',
  levelIcon: '●',
  progress: { current: 842, total: 1000 },
  savedThisMonth: 680,
  contribution: 842,
  coupons: 3,
};

const identityLevels = [
  { label: '普通用户', short: '用户' },
  { label: '持卡会员', short: '会员' },
  { label: '初级消费商', short: '初级' },
  { label: '高级消费商', short: '高级' },
  { label: '生态品鉴官', short: '品鉴官' },
  { label: '生态运营官', short: '运营官' },
  { label: '生态主跑官', short: '主跑官' },
];

const currentLevelIndex = 4; // 高级品鉴官 = index 4

type RankTab = 'hot' | 'value' | 'peer';

const rankProducts: Record<RankTab, { name: string; price: string; saved: string; contribution: number; img: string; badge?: string }[]> = {
  hot: [
    { name: '明前龙井·头采', price: '¥888', saved: '省¥120', contribution: 80, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'TOP1' },
    { name: '白松露精华油', price: '¥1,680', saved: '省¥320', contribution: 150, img: 'https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'TOP2' },
    { name: '汝窑品茗杯', price: '¥368', saved: '省¥60', contribution: 30, img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: 'TOP3' },
    { name: '沉香线香礼盒', price: '¥258', saved: '省¥40', contribution: 20, img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '有机枸杞原浆', price: '¥198', saved: '省¥30', contribution: 15, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  ],
  value: [
    { name: '有机枸杞原浆', price: '¥198', saved: '省¥80', contribution: 20, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: '超值' },
    { name: '天然蜂蜜套装', price: '¥128', saved: '省¥60', contribution: 15, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: '超值' },
    { name: '艾草养生贴', price: '¥68', saved: '省¥30', contribution: 8, img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '手工皂礼盒', price: '¥88', saved: '省¥40', contribution: 10, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '棉麻围巾', price: '¥158', saved: '省¥70', contribution: 18, img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  ],
  peer: [
    { name: '白松露精华油', price: '¥1,680', saved: '省¥320', contribution: 150, img: 'https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: '同级热购' },
    { name: '父亲节心意礼盒', price: '¥598', saved: '省¥100', contribution: 50, img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: '同级热购' },
    { name: '汝窑品茗杯', price: '¥368', saved: '省¥60', contribution: 30, img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300', badge: '同级热购' },
    { name: '冷萃咖啡礼盒', price: '¥268', saved: '省¥50', contribution: 25, img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
    { name: '真丝眼罩', price: '¥168', saved: '省¥35', contribution: 15, img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=300' },
  ],
};

const featuredProducts = [
  { name: '白松露精华油', originalPrice: '¥2,000', price: '¥1,680', contribution: 150, img: 'https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400', tag: '品鉴官推荐' },
  { name: '明前龙井·头采', originalPrice: '¥1,008', price: '¥888', contribution: 80, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400', tag: '品鉴官推荐' },
  { name: '父亲节心意礼盒', originalPrice: '¥698', price: '¥598', contribution: 50, img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400', tag: '限时特惠' },
  { name: '汝窑品茗杯', originalPrice: '¥428', price: '¥368', contribution: 30, img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400', tag: '品鉴官推荐' },
  { name: '沉香线香礼盒', originalPrice: '¥298', price: '¥258', contribution: 20, img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400' },
  { name: '冷萃咖啡礼盒', originalPrice: '¥318', price: '¥268', contribution: 25, img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400' },
];

const ecoMomentsData = [
  { icon: Radio, title: '清山茶事正在直播', desc: '陈清主理人 · 品鉴官连线', contribution: '观看可获5贡献度', live: true },
  { icon: Sparkles, title: '明前龙井新茶到港', desc: '品鉴官严选 · 核心产区头采', contribution: '品鉴官可优先试用' },
  { icon: Store, title: '六月品宴本周六开席', desc: '一席一会 · 余 8 位', contribution: '参与可获20贡献度' },
  { icon: Heart, title: '沉香挑选手记更新', desc: '品鉴官共创 · 4.2k 阅读', contribution: '互动可获10贡献度' },
  { icon: FileText, title: '公益·老兵关怀计划', desc: '已帮扶 128 位退伍军人', contribution: '公益贡献可获勋章' },
];

/* ── 主组件 ── */

export function HomeView({ onChangeView }: { onChangeView: (view: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [rankTab, setRankTab] = useState<RankTab>('hot');
  const [showIdentityPanel, setShowIdentityPanel] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const contributionToNext = userInfo.progress.total - userInfo.progress.current;

  return (
    <div className="min-h-screen bg-stone-50 pb-28 font-sans text-stone-800">

      {/* ═══ 全局悬浮：分享三件套 + 家庭画像 ═══ */}
      <div className="fixed right-3 top-[45%] z-50 -translate-y-1/2 flex flex-col gap-2.5">
        {[
          { icon: Share2, label: '分享产品', action: () => {} },
          { icon: Store, label: '分享商户', action: () => {} },
          { icon: UserPlus, label: '邀请好友', action: () => {} },
          { icon: Users, label: '家庭画像', action: () => onChangeView('profile') },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={item.action}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md ring-1 ring-stone-200/60 backdrop-blur transition-all hover:bg-amber-50 hover:shadow-lg hover:scale-110"
              title={item.label}
            >
              <Icon size={14} className="text-stone-500 transition-colors group-hover:text-amber-700" />
            </button>
          );
        })}
      </div>

      {/* ═══ 顶部固定栏：搜索框 + 身份胶囊（两段式收缩）═══ */}
      <div
        className={`sticky top-0 z-40 bg-stone-50 transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div
          className={`overflow-hidden transition-all duration-300 ${
            scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
          }`}
        >
          {/* 搜索框 */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-stone-200/60">
              <Search size={14} className="text-stone-400 shrink-0" />
              <span className="text-xs text-stone-400">搜索好物 / 商家 / 品鉴官</span>
            </div>
          </div>
        </div>

        {/* 身份胶囊 */}
        <div
          onClick={() => setShowIdentityPanel(!showIdentityPanel)}
          className={`cursor-pointer transition-all duration-300 ${
            scrolled
              ? 'flex items-center justify-between px-4 py-2'
              : 'px-4 pb-4'
          }`}
        >
          {scrolled ? (
            /* 收缩态 */
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white text-[10px] font-bold">
                  {userInfo.levelIcon}
                </div>
                <span className="text-[11px] font-medium text-stone-800">{userInfo.level}</span>
              </div>
              <Search size={16} className="text-stone-400" />
            </div>
          ) : (
            /* 展开态 */
            <div className="rounded-2xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold text-sm">
                    {userInfo.levelIcon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-100">{userInfo.level}</p>
                    <div className="mt-1 flex items-center gap-1.5">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-stone-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                          style={{ width: `${(userInfo.progress.current / userInfo.progress.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-amber-300">{userInfo.progress.current}/{userInfo.progress.total}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-stone-500" />
              </div>
              <div className="mt-3 flex items-center gap-4">
                <span className="text-[10px] text-stone-400">本月已省 <span className="text-amber-300 font-medium">¥{userInfo.savedThisMonth}</span></span>
                <span className="text-[10px] text-stone-400">贡献度 <span className="text-amber-300 font-medium">{userInfo.contribution}</span></span>
                <span className="text-[10px] text-stone-400">消费券 <span className="text-amber-300 font-medium">{userInfo.coupons}张</span></span>
              </div>
            </div>
          )}
        </div>

        {/* 身份详情面板（展开） */}
        {showIdentityPanel && !scrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 pb-4 overflow-hidden"
          >
            <div className="rounded-2xl border border-amber-200/60 bg-amber-50/80 p-4">
              <p className="text-[11px] font-medium text-stone-800 mb-3">升级路径</p>
              <div className="flex items-center gap-1 mb-3">
                {identityLevels.map((level, i) => (
                  <div key={level.label} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className={`h-1.5 w-full rounded-full ${
                        i <= currentLevelIndex
                          ? 'bg-gradient-to-r from-amber-400 to-amber-600'
                          : 'bg-stone-200'
                      }`}
                    />
                    <span className={`text-[8px] whitespace-nowrap ${i <= currentLevelIndex ? 'text-amber-800 font-medium' : 'text-stone-400'}`}>
                      {level.short}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-stone-500">
                还差 <span className="font-semibold text-amber-700">{contributionToNext}</span> 贡献度升级为生态运营官
              </p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-full bg-stone-900 px-3 py-1.5 text-[10px] text-amber-50">查看完整路径</button>
                <button className="rounded-full border border-stone-300 px-3 py-1.5 text-[10px] text-stone-600">生成海报</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ═══ 第一屏：欢迎 + 省钱 + 排行榜 + 主推 + 身份行动卡 ═══ */}
      <div className="space-y-5 pb-4">

        {/* 欢迎语 + 省钱摘要 */}
        <section className="px-4 pt-3">
          <p className="text-sm font-medium text-stone-800">
            早安 {userInfo.name}，本月已省 <span className="text-amber-700 font-semibold">¥{userInfo.savedThisMonth}</span>
          </p>
          <p className="mt-0.5 text-[11px] text-stone-500">
            贡献度可抵扣消费 · 1贡献度 = ¥1
          </p>
        </section>

        {/* 排行榜 */}
        <section className="px-0">
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-amber-700" />
              <h3 className="text-base font-medium text-stone-900">好物榜单</h3>
            </div>
            <button onClick={() => onChangeView('discovery')} className="text-[11px] text-stone-400 flex items-center">
              全部 <ChevronRight size={12} />
            </button>
          </div>

          <div className="flex gap-2 px-4 mb-3">
            {([
              { key: 'hot' as RankTab, label: '爆品榜', icon: Flame },
              { key: 'value' as RankTab, label: '实惠榜', icon: Tag },
              { key: 'peer' as RankTab, label: '同级推荐', icon: Users },
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

          {rankTab === 'peer' && (
            <p className="px-4 mb-2 text-[10px] text-stone-400">和你一样的{userInfo.level}都在买</p>
          )}

          <div className="flex gap-3 overflow-x-auto scroll-smooth px-4 pb-2 scrollbar-hide">
            {rankProducts[rankTab].map((product, i) => (
              <button
                key={product.name + i}
                onClick={() => onChangeView('product-white-truffle')}
                className="group min-w-[140px] max-w-[140px] shrink-0 overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
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
                  <div className="mt-1.5 rounded-md bg-amber-50 px-1.5 py-0.5 text-[9px] text-amber-700 font-medium text-center">
                    +{product.contribution} 贡献度
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 主推商品（横向滚动） */}
        <section className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-medium text-stone-900">主推好物</h3>
            <button className="text-[11px] text-stone-400 flex items-center">
              更多 <ChevronRight size={12} />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-hide">
            {featuredProducts.map((product, i) => (
              <button
                key={product.name + i}
                onClick={() => onChangeView('product-white-truffle')}
                className="group min-w-[160px] max-w-[160px] shrink-0 overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img src={product.img} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {product.tag && (
                    <span className="absolute left-2 top-2 rounded-full bg-amber-500/90 px-2 py-0.5 text-[9px] font-medium text-white shadow">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-2.5 text-left">
                  <p className="line-clamp-1 text-[11px] font-medium text-stone-800">{product.name}</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-[10px] text-stone-400 line-through">{product.originalPrice}</span>
                    <span className="text-[12px] font-semibold text-amber-700">{product.price}</span>
                  </div>
                  <div className="mt-1.5 rounded-md bg-amber-50 px-1.5 py-0.5 text-[9px] text-amber-700 font-medium text-center">
                    +{product.contribution} 贡献度
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 身份行动卡片（穿插在商品中） */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-4 shadow-lg">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap size={14} className="text-white" />
                  <span className="text-[11px] font-semibold text-white">升级加速</span>
                </div>
                <p className="text-sm font-medium text-white">
                  还差 <span className="font-bold">{contributionToNext}</span> 贡献度升级
                </p>
                <p className="mt-1 text-[10px] text-amber-100">购买任意商品可加速升级</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                <ArrowUp size={18} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══ 第二屏：个人化区域 ═══ */}
      <div className="space-y-4 px-4 py-6">

        {/* 今日为你留意 */}
        <section>
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-[10px] font-medium tracking-[0.28em] text-amber-700">TODAY CARE</p>
              <h3 className="mt-1 text-lg font-serif font-light text-stone-950">今日为你留意</h3>
            </div>
            <span className="rounded-full border border-amber-200/70 bg-amber-50/70 px-2.5 py-0.5 text-[10px] text-amber-800">
              3 条新提醒
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-100 bg-[#fff7ed] shadow-lg shadow-amber-100/30">
            <img
              src="https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Birthday flowers"
              className="absolute inset-y-0 right-0 h-full w-2/3 object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ec] via-[#fff1dc]/95 to-[#f1d7b3]/55" />
            <div className="relative p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex items-center rounded-full border border-amber-200/80 bg-white/70 px-2.5 py-0.5 text-[10px] tracking-[0.18em] text-amber-800 backdrop-blur">
                  <Gift size={11} className="mr-1" />
                  生日关怀
                </div>
                <span className="font-serif text-2xl text-amber-700">7</span>
              </div>
              <p className="mb-1 text-[11px] text-amber-800">爸爸生日还有 7 天</p>
              <h4 className="text-lg font-serif font-light leading-snug text-stone-950">
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
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
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

        {/* 我的省钱 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Coins size={16} className="text-amber-700" />
            <h3 className="text-base font-medium text-stone-900">我的省钱</h3>
          </div>
          <div className="rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-amber-50 p-3">
                <p className="text-[10px] text-stone-500">本月已省</p>
                <p className="mt-1 text-lg font-semibold text-amber-700">¥{userInfo.savedThisMonth}</p>
              </div>
              <div className="rounded-xl bg-stone-50 p-3">
                <p className="text-[10px] text-stone-500">贡献度可抵</p>
                <p className="mt-1 text-lg font-semibold text-stone-800">¥{userInfo.contribution}</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-3">
                <p className="text-[10px] text-stone-500">消费券</p>
                <p className="mt-1 text-lg font-semibold text-amber-700">{userInfo.coupons}张</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-full bg-stone-100 py-1.5 text-[10px] text-stone-600 hover:bg-stone-200">查看优惠券</button>
              <button className="flex-1 rounded-full bg-stone-100 py-1.5 text-[10px] text-stone-600 hover:bg-stone-200">贡献度兑换</button>
            </div>
          </div>
        </section>

        {/* 分享卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-4 shadow-lg"
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/15 blur-xl" />
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Share2 size={14} className="text-amber-300" />
                <span className="text-[11px] font-medium text-amber-200">邀请有礼</span>
              </div>
              <p className="text-sm font-medium text-white">分享年卡可获 200 贡献度</p>
              <p className="mt-1 text-[10px] text-stone-400">够你升一级了</p>
            </div>
            <button className="rounded-full bg-amber-500 px-3 py-1.5 text-[10px] font-medium text-white shadow">
              立即分享
            </button>
          </div>
        </motion.div>

        {/* 身份任务卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/80 p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Trophy size={14} className="text-amber-700" />
                <span className="text-[11px] font-medium text-amber-800">本周任务</span>
              </div>
              <p className="text-sm font-medium text-stone-900">完成 3 个任务即可升级</p>
              <p className="mt-1 text-[10px] text-stone-500">已完工 2/3 · 还差 1 个</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <BadgeCheck size={18} className="text-amber-700" />
            </div>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-amber-200">
            <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-amber-500 to-amber-700" />
          </div>
        </motion.div>
      </div>

      {/* ═══ 第三屏：生态动态 + 公益 ═══ */}
      <div className="space-y-4 px-4 py-4">

        {/* 生态今日 */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[10px] font-medium tracking-[0.28em] text-amber-700">ECO MOMENTS</p>
              <h3 className="mt-1 text-lg font-serif font-light text-stone-950">生态今日</h3>
            </div>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/65 p-3 shadow-sm backdrop-blur">
            {ecoMomentsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  onClick={() => onChangeView('live-stream')}
                  className="group flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-stone-50"
                >
                  <div className="flex w-7 shrink-0 flex-col items-center">
                    <div className={`relative flex h-7 w-7 items-center justify-center rounded-full ${item.live ? 'bg-stone-950 text-amber-100' : 'bg-amber-100 text-amber-800'}`}>
                      {item.live && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-red-400/30" />
                      )}
                      <Icon size={13} />
                    </div>
                    {index < ecoMomentsData.length - 1 && <div className="mt-1.5 h-4 w-px bg-stone-200" />}
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
                    <p className="mt-0.5 text-[9px] text-amber-600 font-medium">{item.contribution}</p>
                  </div>
                  <ArrowRight size={12} className="text-stone-300 transition-colors group-hover:text-amber-700" />
                </button>
              );
            })}
          </div>
        </section>

        {/* 公益入口 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => onChangeView('charity')}
          className="relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 p-4 shadow-lg"
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <HandHeart size={14} className="text-emerald-200" />
                <span className="text-[11px] font-medium text-emerald-100">公益贡献</span>
              </div>
              <p className="text-sm font-medium text-white">公益贡献可获勋章</p>
              <p className="mt-1 text-[10px] text-emerald-200">每笔消费都可参与公益 · 已有 128 人获得勋章</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/50">
              <Medal size={18} className="text-emerald-200" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══ 底部身份链 ═══ */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Crown size={16} className="text-amber-700" />
            <h3 className="text-base font-medium text-stone-900">身份晋升路径</h3>
          </div>
          <button className="text-[11px] text-amber-700 flex items-center font-medium">
            展开完整路径 <ChevronRight size={12} />
          </button>
        </div>

        <div className="rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
          {/* 身份链 */}
          <div className="flex items-center gap-1">
            {identityLevels.map((level, i) => {
              const isActive = i <= currentLevelIndex;
              const isCurrent = i === currentLevelIndex;
              return (
                <div key={level.label} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className={`h-2 w-full rounded-full ${
                      isActive
                        ? isCurrent
                          ? 'bg-gradient-to-r from-amber-400 to-amber-600 ring-2 ring-amber-300'
                          : 'bg-gradient-to-r from-amber-400 to-amber-500'
                        : 'bg-stone-200'
                    }`}
                  />
                  <span className={`text-[8px] whitespace-nowrap ${isActive ? 'text-amber-800 font-medium' : 'text-stone-400'}`}>
                    {level.short}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 进度条 */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-2 overflow-hidden rounded-full bg-stone-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                style={{ width: `${(userInfo.progress.current / userInfo.progress.total) * 100}%` }}
              />
            </div>
            <span className="text-[11px] font-medium text-amber-700 whitespace-nowrap">
              {userInfo.progress.current} / {userInfo.progress.total}
            </span>
          </div>
          <p className="mt-2 text-[10px] text-stone-500">
            当前：<span className="font-semibold text-stone-800">{userInfo.level}</span> · 还差 {contributionToNext} 贡献度升级
          </p>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-full bg-stone-900 py-2 text-[11px] font-medium text-amber-50 hover:bg-stone-800">
              查看升级任务
            </button>
            <button className="rounded-full border border-stone-200 px-4 py-2 text-[11px] text-stone-600 hover:bg-stone-50">
              生成海报
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 底部品牌信息 ═══ */}
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