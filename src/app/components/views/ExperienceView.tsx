import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  FileText,
  Gift,
  Heart,
  Image,
  MapPin,
  Navigation,
  Palette,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Users,
  Video,
} from 'lucide-react';
import { toast } from 'sonner';
import { CoCreationView } from './CoCreationView';
import { CharityView } from './CharityView';
import { OfflineExperienceView } from './OfflineExperienceView';

const nearbyStores = [
  {
    name: '山隐私厨',
    type: '精致餐饮',
    category: '餐饮',
    location: '西湖区 · 青芝坞 12 号',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjB3YXJtJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY0NTc0MDUwfDA&ixlib=rb-4.1.0&q=80&w=800',
    features: ['包厢可订', '家庭聚餐'],
    distance: '860m',
    privilege: '会员到店享招牌茶点 1 份',
    status: '营业中',
    action: '导航',
    rating: '4.9',
    saves: '328',
    openHours: '11:00 - 22:00',
    phone: '0571-8888 1212',
    benefitCode: 'PHG-DINE',
    story: '藏在青芝坞里的私厨小馆，主打低油低盐的杭帮家宴。适合家庭小聚、商务简餐和生日宴，包厢需要提前预约。',
    packages: [
      { title: '双人慢食晚餐', price: '¥398', original: '¥528', desc: '当季前菜 + 主厨热菜 3 道 + 甜品' },
      { title: '家庭包厢套餐', price: '¥998', original: '¥1,280', desc: '6 人以内，含茶点与包厢服务' },
    ],
    checkins: ['环境安静，适合带爸妈吃饭', '茶点确实好吃，会员权益很实在'],
  },
  {
    name: '栖白皮肤管理',
    type: '美业护理',
    category: '美业',
    location: '拱墅区 · 大兜路 68 号',
    image: 'https://images.unsplash.com/photo-1693578538512-fc66f318c833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBpbnRlcmlvcnxlbnwxfHx8fDE3ODE1MjgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['需预约', '女神护理'],
    distance: '1.2km',
    privilege: '基础护理项目会员 8.5 折',
    status: '可预约',
    action: '预约',
    rating: '4.8',
    saves: '216',
    openHours: '10:00 - 20:30',
    phone: '0571-8899 5678',
    benefitCode: 'PHG-SKIN',
    story: '以敏感肌护理和轻医美术后维稳为主，空间私密，护理师会先做肤况评估，再推荐项目。',
    packages: [
      { title: '基础补水修护', price: '¥338', original: '¥398', desc: '清洁 + 舒缓导入 + 保湿面膜' },
      { title: '熬夜急救护理', price: '¥498', original: '¥588', desc: '暗沉管理 + 肌底修护 + 头肩放松' },
    ],
    checkins: ['护理师不推销，体验很舒服', '预约制很好，不用等位'],
  },
  {
    name: '清山茶事',
    type: '茶空间',
    category: '茶空间',
    location: '西湖区 · 龙井路 88 号',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['主理人手记', '茶席体验'],
    distance: '2.4km',
    privilege: '双人茶席体验立减 ¥100',
    status: '今日可用',
    action: '核销',
    rating: '4.9',
    saves: '512',
    openHours: '10:00 - 19:00',
    phone: '0571-8877 3100',
    benefitCode: 'PHG-TEA',
    story: '主理人做茶器十年，店里既能喝茶，也能看器物。适合一个人静坐，也适合两三位朋友慢聊。',
    packages: [
      { title: '双人茶席体验', price: '¥198', original: '¥298', desc: '两款茶品鉴 + 茶点 + 主理人布席' },
      { title: '新手识茶课', price: '¥268', original: '¥368', desc: '茶类基础 + 器具选择 + 实操冲泡' },
    ],
    checkins: ['茶席很安静，拍照也好看', '主理人讲得很细，适合新手'],
  },
  {
    name: '麦乡面包坊',
    type: '手作烘焙',
    category: '烘焙',
    location: '上城区 · 南宋御街 91 号',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['亲子友好', '早餐补给'],
    distance: '3.1km',
    privilege: '满 ¥88 赠酸种小餐包',
    status: '营业中',
    action: '到店',
    rating: '4.7',
    saves: '189',
    openHours: '08:00 - 18:00',
    phone: '0571-8866 2244',
    benefitCode: 'PHG-BAKE',
    story: '只做天然酵母酸种和低糖面包，早上出炉最快。周末有亲子烘焙小课，适合家庭用户顺路打卡。',
    packages: [
      { title: '早餐补给袋', price: '¥68', original: '¥88', desc: '酸种切片 + 可颂 + 手冲咖啡' },
      { title: '亲子烘焙课', price: '¥198', original: '¥258', desc: '2 小时体验，作品可带走' },
    ],
    checkins: ['酸种面包很香，孩子也爱吃', '早上去最舒服，刚出炉'],
  },
];

const experienceChannels = [
  {
    title: '雅集活动',
    subtitle: '茶事、私宴、音乐会',
    image: 'https://images.unsplash.com/photo-1559484379-68a6d9c90c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdGVhJTIwY2VyZW1vbnklMjB6ZW4lMjBhZXN0aGV0aWMlMjByYWlufGVufDF8fHx8MTc2NDU2NjU5N3ww&ixlib=rb-4.1.0&q=80&w=600',
    icon: Calendar,
    module: 'offline-events',
  },
  {
    title: '专属空间',
    subtitle: '城市客厅与静谧书房',
    image: 'https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsb3VuZ2UlMjBpbnRlcmlvciUyMHdhcm0lMjBsaWdodGluZyUyMGNvbWZvcnRhYmxlfGVufDF8fHx8MTc2NDU2NjY3OHww&ixlib=rb-4.1.0&q=80&w=800',
    icon: Sparkles,
    module: 'offline-exclusive',
  },
  {
    title: '定制工坊',
    subtitle: '为礼物加入个人印记',
    image: 'https://images.unsplash.com/photo-1679453082486-bba97700b72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcnRpc2FuJTIwY3JhZnRzbWFuc2hpcCUyMHdvcmtzaG9wJTIwZGV0YWlsJTIwZGFyayUyMG1vb2R5JTIwZWxlZ2FudCUyMGdvbGQlMjBsZWF0aGVyJTIwd29vZHxlbnwxfHx8fDE3NjQ1NzM5OTN8MA&ixlib=rb-4.1.0&q=80&w=800',
    icon: Palette,
    module: 'workshop',
  },
  {
    title: '公益共建',
    subtitle: '让消费价值继续流动',
    image: 'https://images.unsplash.com/photo-1758599668360-48ba8ba71b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwcGxhbnRpbmclMjB0cmVlcyUyMG5hdHVyZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjQ1NjY1OTd8MA&ixlib=rb-4.1.0&q=80&w=800',
    icon: Heart,
    module: 'charity',
  },
] as const;

const categories = ['全部', '餐饮', '美业', '茶空间', '烘焙'] as const;

type NearbyStore = (typeof nearbyStores)[number];
type ActiveModule = 'menu' | 'workshop' | 'charity' | 'offline-events' | 'offline-exclusive' | 'nearby-list' | 'merchant-build';

function HeaderBar({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between px-4">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 hover:bg-stone-100"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="font-serif text-sm font-medium text-stone-900">{title}</span>
        <div className="w-10" />
      </div>
    </div>
  );
}

function StoreCard({ store, onSelect, compact = false }: { store: NearbyStore; onSelect: (store: NearbyStore) => void; compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => onSelect(store)}
      className={compact ? 'group cursor-pointer overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm' : 'w-72 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm'}
    >
      <div className={compact ? 'relative h-40 overflow-hidden' : 'relative h-36 overflow-hidden'}>
        <img
          src={store.image}
          alt={store.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-stone-900 shadow-sm backdrop-blur-md">
          {store.distance}
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="mb-1 text-[10px] text-amber-300">{store.type} · {store.status}</p>
          <h4 className="font-serif text-xl leading-tight">{store.name}</h4>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center text-[11px] text-stone-500">
          <MapPin size={13} className="mr-1.5 shrink-0 text-stone-400" />
          <span className="truncate">{store.location}</span>
        </div>
        <div className="mb-4 rounded-lg border border-amber-100 bg-amber-50/70 p-3">
          <p className="text-xs font-medium leading-relaxed text-amber-900">
            <span className="mr-2 rounded bg-amber-800 px-1.5 py-0.5 text-[9px] text-white">权益</span>
            {store.privilege}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {store.features.slice(0, 2).map((feature) => (
              <span key={feature} className="rounded-full bg-stone-50 px-2 py-1 text-[10px] text-stone-500">
                {feature}
              </span>
            ))}
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation();
              toast.success(`正在为您打开${store.action}`);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-amber-50"
          >
            <Navigation size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function NearbyBenefitsView({ onBack, onSelectStore }: { onBack: () => void; onSelectStore: (store: NearbyStore) => void }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('全部');
  const visibleStores = activeCategory === '全部'
    ? nearbyStores
    : nearbyStores.filter((store) => store.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900">
      <HeaderBar title="附近权益" onBack={onBack} />

      <div className="p-6 space-y-6">
        <div className="relative h-52 overflow-hidden rounded-2xl bg-stone-900">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MXx8fHwxNzY0NTY2NTk4fDA&ixlib=rb-4.1.0&q=80&w=800"
            alt="附近权益地图"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent" />
          <div className="absolute left-5 right-5 top-4 flex items-center justify-between">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium text-stone-800 shadow-sm backdrop-blur-md">
              杭州 · 西湖 5km
            </span>
            <button
              onClick={() => toast.success('正在重新定位')}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-stone-800 shadow-sm backdrop-blur-md"
            >
              <Navigation size={15} />
            </button>
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <h2 className="font-serif text-2xl">12 项权益可用</h2>
            <p className="mt-1 text-xs text-stone-200">最近 860m · 4 家今日可核销 · 2 张券即将到期</p>
          </div>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 scrollbar-hide">
          <div className="inline-flex min-w-max rounded-full bg-stone-200/60 p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === category ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {visibleStores.map((store) => (
            <StoreCard key={store.name} store={store} onSelect={onSelectStore} compact />
          ))}
        </div>
      </div>
    </div>
  );
}

function LocalMerchantDetailView({ store, onBack }: { store: NearbyStore; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900">
      <div className="relative h-72 overflow-hidden">
        <img src={store.image} alt={store.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/25" />
        <button
          onClick={onBack}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-sm backdrop-blur-md"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="mb-3 flex items-center space-x-2">
            <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-[10px] text-amber-100 ring-1 ring-amber-300/30">
              品货官合作店
            </span>
            <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] text-white ring-1 ring-white/20">
              {store.type}
            </span>
          </div>
          <h1 className="font-serif text-3xl leading-tight">{store.name}</h1>
          <p className="mt-2 flex items-center text-xs text-stone-200">
            <MapPin size={13} className="mr-1.5" />
            {store.location} · {store.distance}
          </p>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: '评分', value: store.rating, icon: Star },
            { label: '收藏', value: store.saves, icon: Heart },
            { label: '状态', value: store.status, icon: CheckCircle2 },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-stone-100 bg-white p-3 shadow-sm">
              <item.icon size={14} className="mb-2 text-amber-700" />
              <div className="font-serif text-lg text-stone-900">{item.value}</div>
              <div className="text-[10px] text-stone-400">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-amber-700">Member Benefit</p>
              <h2 className="mt-1 font-serif text-xl text-stone-900">当前可用权益</h2>
            </div>
            <div className="rounded-full bg-amber-800 px-3 py-1 text-[10px] text-white">{store.benefitCode}</div>
          </div>
          <p className="text-sm font-medium leading-relaxed text-amber-950">{store.privilege}</p>
          <button
            onClick={() => toast.success('已唤起会员码')}
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-stone-900 py-3 text-xs font-medium tracking-widest text-amber-50"
          >
            出示会员码核销
          </button>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-serif text-lg">权益套餐</h2>
            <span className="text-[10px] text-stone-400">会员价已计算</span>
          </div>
          <div className="space-y-3">
            {store.packages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-base text-stone-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-stone-500">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-lg text-stone-900">{item.price}</div>
                    <div className="text-[10px] text-stone-400 line-through">{item.original}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
          <h2 className="font-serif text-lg">门店说明</h2>
          <p className="mt-3 text-xs leading-relaxed text-stone-500">{store.story}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-stone-50 p-3">
              <Clock size={14} className="mb-2 text-stone-500" />
              <p className="text-stone-900">{store.openHours}</p>
              <p className="mt-0.5 text-[10px] text-stone-400">营业时间</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-3">
              <Phone size={14} className="mb-2 text-stone-500" />
              <p className="text-stone-900">{store.phone}</p>
              <p className="mt-0.5 text-[10px] text-stone-400">预约电话</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-lg">会员打卡</h2>
          <div className="space-y-3">
            {store.checkins.map((checkin, index) => (
              <div key={checkin} className="rounded-xl border border-stone-100 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-900">会员 {index + 1}</span>
                  <span className="text-[10px] text-stone-400">刚刚来过</span>
                </div>
                <p className="text-xs leading-relaxed text-stone-500">{checkin}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => toast.success('正在导航到店')}
            className="flex items-center justify-center rounded-xl bg-stone-900 py-3 text-xs font-medium text-amber-50"
          >
            <Navigation size={15} className="mr-2" />
            导航到店
          </button>
          <button
            onClick={() => toast.success('已为您发起预约咨询')}
            className="flex items-center justify-center rounded-xl border border-stone-200 bg-white py-3 text-xs font-medium text-stone-900"
          >
            <Calendar size={15} className="mr-2" />
            预约体验
          </button>
        </div>
      </div>
    </div>
  );
}

function MerchantBuildView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900">
      <HeaderBar title="商家权益共建" onBack={onBack} />

      <div className="p-6 space-y-6">
        <div className="rounded-2xl bg-stone-900 p-6 text-amber-50">
          <p className="text-[10px] uppercase tracking-widest text-amber-300">Local Partner</p>
          <h1 className="mt-2 font-serif text-2xl leading-snug">把公域客流沉淀成自己的会员资产</h1>
          <p className="mt-3 text-xs leading-relaxed text-stone-300">
            品货官为本地好店提供私域展示、会员权益承接、到店核销和内容种草，让商家在不增加投流压力的情况下获得稳定复购。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Users, title: '会员客流', desc: '触达附近高信任家庭用户' },
            { icon: Gift, title: '权益设计', desc: '将折扣变成可感知礼遇' },
            { icon: CreditCard, title: '核销工具', desc: '到店扫码，权益清晰记录' },
            { icon: Sparkles, title: '内容种草', desc: '商家故事进入圈层传播' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
              <item.icon size={18} className="mb-3 text-amber-700" />
              <h3 className="font-serif text-base">{item.title}</h3>
              <p className="mt-1 text-[10px] leading-relaxed text-stone-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-amber-700">Content Service</p>
              <h2 className="mt-1 font-serif text-xl text-stone-900">宣传内容与直播服务</h2>
              <p className="mt-2 text-xs leading-relaxed text-amber-950/75">
                商家提供已有图片、视频、套餐说明或活动信息后，平台可协助整理成门店页、权益卡、圈层笔记和活动推荐内容；符合条件的商家还可开通直播能力，用于新品讲解、到店体验和限时权益发放。
              </p>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-900 text-amber-100">
              <Radio size={20} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Image, title: '素材代整理', desc: '门店图、产品图、活动海报' },
              { icon: FileText, title: '内容包装', desc: '权益文案、门店故事、圈层笔记' },
              { icon: Video, title: '短视频共创', desc: '探店脚本、体验剪辑、主理人介绍' },
              { icon: Radio, title: '直播开通', desc: '直播间配置、预告分发、权益承接' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-amber-100 bg-white/70 p-3"
              >
                <item.icon size={16} className="mb-2 text-amber-700" />
                <h3 className="text-xs font-medium text-stone-900">{item.title}</h3>
                <p className="mt-1 text-[10px] leading-relaxed text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-stone-900 p-4 text-amber-50">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium">直播服务可开通</span>
              <span className="rounded-full bg-amber-400/15 px-2 py-1 text-[10px] text-amber-200">平台协助</span>
            </div>
            <p className="text-[10px] leading-relaxed text-stone-300">
              可用于新品发布、门店探访、会员专场和限时权益讲解；直播内容可同步沉淀为门店页素材、回放切片和后续圈层传播内容。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
          <h2 className="font-serif text-lg">合作流程</h2>
          <div className="mt-4 space-y-4">
            {[
              ['提交线索', '商家基础信息、品类、位置与可提供权益'],
              ['平台审核', '核验服务质量、履约能力与会员适配度'],
              ['配置权益', '生成店铺页、核销规则和首批体验券'],
              ['上线共建', '进入附近权益，并可被圈层内容推荐'],
            ].map(([title, desc], index) => (
              <div key={title} className="flex items-start">
                <div className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-900 text-[10px] text-amber-50">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-900">{title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-stone-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => toast.success('合作线索已记录，运营官将跟进')}
          className="flex w-full items-center justify-center rounded-xl bg-stone-900 py-3 text-xs font-medium tracking-widest text-amber-50"
        >
          提交合作线索
          <ChevronRight size={15} className="ml-1" />
        </button>
      </div>
    </div>
  );
}

export function ExperienceView() {
  const [activeModule, setActiveModule] = useState<ActiveModule>('menu');
  const [selectedStore, setSelectedStore] = useState<NearbyStore | null>(null);

  const handleBack = () => setActiveModule('menu');

  if (selectedStore) {
    return (
      <LocalMerchantDetailView
        store={selectedStore}
        onBack={() => setSelectedStore(null)}
      />
    );
  }

  if (activeModule === 'nearby-list') {
    return (
      <NearbyBenefitsView
        onBack={handleBack}
        onSelectStore={setSelectedStore}
      />
    );
  }

  if (activeModule === 'merchant-build') {
    return <MerchantBuildView onBack={handleBack} />;
  }

  if (activeModule === 'charity') {
    return <CharityView onBack={handleBack} />;
  }

  if (activeModule === 'workshop') {
    return <CoCreationView onBack={handleBack} />;
  }

  if (activeModule === 'offline-events') {
    return <OfflineExperienceView onBack={handleBack} initialTab="events" />;
  }

  if (activeModule === 'offline-exclusive') {
    return <OfflineExperienceView onBack={handleBack} initialTab="exclusive" />;
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-24 pt-16 text-stone-900">
      <div className="px-6 mb-6">
        <div className="flex items-baseline space-x-2 mb-1">
          <h2 className="text-2xl font-serif text-stone-900">体验</h2>
          <span className="text-[10px] text-amber-600 font-medium tracking-wider uppercase">Nearby Privileges</span>
        </div>
        <p className="text-[10px] text-stone-400">附近可用权益、合作商户与到店体验</p>
      </div>

      <div className="px-6 mb-5">
        <button
          onClick={() => setActiveModule('nearby-list')}
          className="relative h-48 w-full overflow-hidden rounded-2xl bg-stone-900 text-left shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MXx8fHwxNzY0NTY2NTk4fDA&ixlib=rb-4.1.0&q=80&w=800"
            alt="附近权益地图"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-transparent" />
          <div className="absolute left-5 right-5 top-4 flex items-center justify-between">
            <div className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium text-stone-800 shadow-sm backdrop-blur-md">
              杭州 · 西湖 5km
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-stone-800 shadow-sm backdrop-blur-md">
              <Search size={15} />
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin size={16} className="text-amber-300" />
              <span className="text-[10px] uppercase tracking-widest text-stone-200">Live Benefits</span>
            </div>
            <h3 className="text-2xl font-serif font-medium">附近发现 12 项权益</h3>
            <p className="mt-1 text-xs text-stone-200">4 家今日可用 · 2 张券即将到期 · 最近 860m</p>
          </div>
        </button>
      </div>

      <div className="px-6 mb-6 grid grid-cols-3 gap-2">
        {[
          { label: '可核销', value: '4', icon: CreditCard },
          { label: '营业中', value: '9', icon: Clock },
          { label: '特权店', value: '12', icon: ShieldCheck },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveModule('nearby-list')}
            className="rounded-xl border border-stone-100 bg-white p-3 text-left shadow-sm"
          >
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-700">
              <item.icon size={14} />
            </div>
            <div className="text-lg font-serif text-stone-900">{item.value}</div>
            <div className="text-[10px] text-stone-400">{item.label}</div>
          </button>
        ))}
      </div>

      <div className="mb-7">
        <div className="px-6 mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif text-stone-900">附近权益</h3>
            <p className="text-[10px] text-stone-400 mt-0.5">按距离优先，为会员露出可用价值</p>
          </div>
          <button
            onClick={() => setActiveModule('nearby-list')}
            className="flex items-center rounded-full bg-stone-900 px-3 py-1.5 text-[10px] text-amber-50"
          >
            全部 <ArrowRight size={12} className="ml-1" />
          </button>
        </div>

        <div className="flex space-x-3 overflow-x-auto pb-2 px-6 scrollbar-hide">
          {nearbyStores.map((store) => (
            <StoreCard key={store.name} store={store} onSelect={setSelectedStore} />
          ))}
        </div>
      </div>

      <div className="mb-7">
        <div className="px-6 mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif text-stone-900">更多体验</h3>
            <p className="text-[10px] text-stone-400 mt-0.5">活动、空间与共建内容横向浏览</p>
          </div>
          <span className="text-[10px] text-stone-400">左右滑动</span>
        </div>

        <div className="flex space-x-3 overflow-x-auto pb-2 px-6 scrollbar-hide">
          {experienceChannels.map((channel) => (
            <motion.div
              key={channel.title}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveModule(channel.module)}
              className="relative h-40 w-48 shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-stone-900 shadow-sm"
            >
              <img
                src={channel.image}
                alt={channel.title}
                className="absolute inset-0 h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/15 to-transparent" />
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-amber-200 backdrop-blur-md">
                  <channel.icon size={16} />
                </div>
                <ArrowRight size={15} className="text-white/75" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-serif text-lg">{channel.title}</h4>
                <p className="mt-1 text-[10px] leading-relaxed text-stone-200">{channel.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-6">
        <button
          onClick={() => setActiveModule('merchant-build')}
          className="w-full rounded-2xl border border-stone-100 bg-white p-4 text-left shadow-sm"
        >
          <div className="flex items-start space-x-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-amber-200">
              <Store size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-base text-stone-900">商家入驻与权益共建</h3>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">
                让本地好店获得稳定会员客流，也让会员卡在真实生活场景里被反复使用。
              </p>
            </div>
            <ArrowRight size={16} className="mt-1 text-stone-300" />
          </div>
        </button>
      </div>
    </div>
  );
}
