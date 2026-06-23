import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  BadgeCheck,
  ChevronRight,
  Clock,
  Eye,
  Gift,
  Heart,
  MessageCircleQuestion,
  PackageCheck,
  Radio,
  Share2,
  ShoppingBag,
  Sparkles,
  ThumbsUp,
  Users,
} from 'lucide-react';

interface LiveStreamViewProps {
  onBack: () => void;
}

const liveComments = [
  { name: '茶悟先生', role: '品鉴官认证', text: '这个我试过，出水稳定，适合刚入门但想买一把长期用壶的人。' },
  { name: '林小姐', role: '会员追问', text: '一个人喝会不会太大？养壶需要注意什么？' },
  { name: '陈清', role: '主理人回应', text: '150ml 左右刚好独饮，两个人可以用作对泡。' },
];

const trustStats = [
  { label: '观看中', value: '1,284', icon: Eye },
  { label: '品币打赏', value: '8,920', icon: Gift },
  { label: '品鉴官互动', value: '23', icon: BadgeCheck },
];

export function LiveStreamView({ onBack }: LiveStreamViewProps) {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <div className="sticky top-0 z-40 flex h-14 items-center justify-between bg-stone-950/80 px-4 backdrop-blur-xl">
        <button
          aria-label="返回"
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
        >
          <ArrowLeft size={19} />
        </button>
        <div className="flex items-center rounded-full bg-red-500/15 px-3 py-1 text-[10px] font-medium text-red-100 ring-1 ring-red-400/30">
          <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          正在直播
        </div>
        <div className="flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] text-stone-200">
          <Eye size={12} className="mr-1" />
          1,284
        </div>
      </div>

      <div className="relative h-[56vh] min-h-[430px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="清山茶事直播"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-stone-950/10 to-stone-950" />
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <div className="rounded-full bg-stone-950/55 px-3 py-1.5 text-[10px] text-amber-100 backdrop-blur">
            新品发布 · 工艺展示 · 品鉴官对谈
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-950/50 backdrop-blur">
            <Share2 size={14} />
          </button>
        </div>

        <div className="absolute bottom-28 left-4 right-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 max-w-[82%] rounded-2xl bg-stone-950/45 p-3 text-left backdrop-blur-md"
          >
            <div className="mb-2 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=60"
                alt="陈清"
                className="mr-2 h-8 w-8 rounded-full object-cover ring-1 ring-amber-200/50"
              />
              <div>
                <p className="text-xs font-semibold text-white">陈清 · 清山茶事主理人</p>
                <p className="text-[9px] text-amber-100/80">源头讲解人 / 品味主理人</p>
              </div>
            </div>
            <h1 className="font-serif text-2xl leading-snug">云隐汝窑壶 · 直播品味发布会</h1>
            <p className="mt-2 text-xs leading-relaxed text-stone-200">
              从泥料、釉色到出水，现场拆解一把长期使用的入门手工壶。
            </p>
          </motion.div>

          <div className="flex items-center gap-2">
            <div className="rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-medium text-stone-950">
              茶悟先生连线中
            </div>
            <div className="rounded-full bg-white/12 px-3 py-1.5 text-[10px] text-stone-100 backdrop-blur">
              品鉴官见证
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/95 p-3 text-stone-900 shadow-2xl shadow-stone-950/40">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=160&auto=format&fit=crop&q=60"
                  alt="云隐汝窑壶"
                  className="mr-3 h-14 w-14 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-xs font-semibold">云隐 · 手工汝窑茶壶</p>
                  <p className="mt-1 text-[10px] text-stone-500">品鉴官专属价 · 限直播期间</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif text-lg text-amber-700">¥598</span>
                    <span className="text-[10px] text-stone-400 line-through">¥680</span>
                    <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] text-red-600">仅剩 18 件</span>
                  </div>
                </div>
              </div>
              <ChevronRight size={16} className="text-stone-300" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="rounded-full border border-stone-200 py-2 text-xs font-medium text-stone-700">
                加入心意清单
              </button>
              <button className="rounded-full bg-stone-950 py-2 text-xs font-medium text-amber-50">
                立即购买
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 px-4 pb-24 pt-5">
        <div className="grid grid-cols-3 gap-2">
          {trustStats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl bg-white/8 p-3 text-center ring-1 ring-white/10">
                <Icon size={15} className="mx-auto mb-1 text-amber-200" />
                <p className="font-serif text-lg text-white">{item.value}</p>
                <p className="text-[9px] text-stone-400">{item.label}</p>
              </div>
            );
          })}
        </div>

        <section className="rounded-[1.5rem] bg-white/8 p-4 ring-1 ring-white/10">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[0.24em] text-amber-200">TRUST LIVE</p>
              <h2 className="mt-1 font-serif text-lg">信任正在被看见</h2>
            </div>
            <Radio size={18} className="text-amber-200" />
          </div>
          <div className="space-y-3">
            {liveComments.map((comment) => (
              <div key={comment.name + comment.role} className="rounded-2xl bg-stone-900/80 p-3">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-xs font-medium text-white">{comment.name}</p>
                  <span className="rounded-full bg-amber-100/10 px-2 py-0.5 text-[9px] text-amber-100 ring-1 ring-amber-100/15">
                    {comment.role}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-stone-300">{comment.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-amber-100 p-4 text-stone-950">
            <Gift size={18} className="mb-3 text-amber-700" />
            <h3 className="text-sm font-semibold">品币打赏</h3>
            <p className="mt-1 text-[10px] leading-relaxed text-stone-600">
              不可现金购买，用于表达认可，沉淀到主理人档案。
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-stone-950">
            <MessageCircleQuestion size={18} className="mb-3 text-amber-700" />
            <h3 className="text-sm font-semibold">追问上墙</h3>
            <p className="mt-1 text-[10px] leading-relaxed text-stone-500">
              主理人和品鉴官共同回答，形成品味对话。
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-stone-950">
            <PackageCheck size={18} className="mb-3 text-amber-700" />
            <h3 className="text-sm font-semibold">直播价闭环</h3>
            <p className="mt-1 text-[10px] leading-relaxed text-stone-500">
              商品卡、库存、倒计时与购买在直播间完成。
            </p>
          </div>
          <div className="rounded-2xl bg-stone-800 p-4">
            <Clock size={18} className="mb-3 text-amber-200" />
            <h3 className="text-sm font-semibold text-white">回放沉淀</h3>
            <p className="mt-1 text-[10px] leading-relaxed text-stone-300">
              自动生成回放切片，变成圈层视频手记。
            </p>
          </div>
        </section>

        <div className="rounded-[1.5rem] border border-amber-100/20 bg-stone-900 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-stone-400">分享有礼</p>
              <p className="mt-1 text-sm font-medium">你已带来 6 位新观众</p>
            </div>
            <div className="rounded-full bg-amber-100 px-3 py-1 text-[10px] text-stone-950">贡献值 +18</div>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white/8 px-3 py-2 text-[10px] text-stone-300">
            <span className="flex items-center"><Users size={12} className="mr-1" /> 正在看 1,284 人</span>
            <span className="flex items-center"><ThumbsUp size={12} className="mr-1" /> 97% 认可</span>
            <span className="flex items-center"><ShoppingBag size={12} className="mr-1" /> 42 单成交</span>
          </div>
        </div>
      </div>
    </div>
  );
}
