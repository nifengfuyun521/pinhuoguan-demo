import React from 'react';
import {
  ArrowLeft,
  Store,
  Sparkles,
  QrCode,
  Ticket,
  Users,
  BarChart3,
  Megaphone,
  MessageSquareText,
  WandSparkles,
  CalendarDays,
  ChevronRight,
  CheckCircle2,
  Clock3,
  TrendingUp,
} from 'lucide-react';

interface MerchantWorkbenchViewProps {
  onBack: () => void;
}

function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-3">
      <div className="text-[10px] text-stone-500">{label}</div>
      <div className="mt-1 text-xl font-serif text-stone-900">{value}</div>
      <div className="mt-1 text-[10px] text-amber-700">{note}</div>
    </div>
  );
}

function WorkbenchItem({
  icon: Icon,
  title,
  desc,
  tag,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl border border-stone-200 bg-white p-4 text-left shadow-sm transition-colors hover:bg-stone-50">
      <div className="flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-700">
          <Icon size={18} />
        </div>
        <div>
          <div className="text-sm font-medium text-stone-900">{title}</div>
          <div className="mt-0.5 text-[11px] leading-relaxed text-stone-500">{desc}</div>
        </div>
      </div>
      <div className="ml-3 flex items-center space-x-2">
        <span className="rounded-full bg-stone-100 px-2 py-1 text-[10px] text-stone-500">{tag}</span>
        <ChevronRight size={15} className="text-stone-300" />
      </div>
    </button>
  );
}

function AiCard({
  icon: Icon,
  title,
  desc,
  output,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  output: string;
}) {
  return (
    <button className="rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-100 via-amber-50/50 to-stone-50 p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-100 bg-amber-100/70 text-amber-800">
          <Icon size={19} />
        </div>
        <span className="rounded-full border border-amber-100 bg-white/70 px-2.5 py-1 text-[10px] text-amber-800">AI</span>
      </div>
      <div className="text-sm font-medium text-stone-900">{title}</div>
      <div className="mt-1 text-[11px] leading-relaxed text-stone-500">{desc}</div>
      <div className="mt-4 rounded-2xl border border-white/70 bg-white/60 p-3 text-[11px] leading-relaxed text-stone-600">
        {output}
      </div>
    </button>
  );
}

export function MerchantWorkbenchView({ onBack }: MerchantWorkbenchViewProps) {
  const aiTools = [
    {
      icon: Sparkles,
      title: 'AI 经营参谋',
      desc: '根据核销、收藏、到店和复购数据，给出今日经营建议。',
      output: '建议本周主推「双人茶席」，搭配即将到期权益提醒，可提升周末核销。',
    },
    {
      icon: WandSparkles,
      title: 'AI 内容生成',
      desc: '把门店亮点、套餐和活动自动整理成圈层笔记或权益文案。',
      output: '已生成 3 条适合圈层传播的短文案，可用于门店页和活动招募。',
    },
    {
      icon: Users,
      title: 'AI 会员洞察',
      desc: '识别高意向会员、沉睡会员和适合复购的人群。',
      output: '有 18 位会员近 30 天收藏但未到店，建议发起一次私享邀约。',
    },
    {
      icon: Megaphone,
      title: 'AI 活动策划',
      desc: '根据季节、库存和会员偏好生成小型体验活动方案。',
      output: '推荐主题：「夏夜茶香小席」，预计触达 42 人，建议开放 8 席。',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-800">
      <div className="sticky top-0 z-40 flex items-center border-b border-stone-200 bg-stone-50/90 px-4 py-4 backdrop-blur-md">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200/60 text-stone-600 transition-colors hover:bg-stone-200"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-800">商家工作台</span>
      </div>

      <div className="px-5 pt-5">
        <div className="relative overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-stone-100 to-stone-50 p-5 shadow-sm">
          <div className="absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full bg-amber-200/30 blur-3xl"></div>
          <div className="relative z-10">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <Store size={17} className="text-amber-700" />
                  <span className="text-[10px] tracking-[0.18em] text-amber-700">本地好店经营台</span>
                </div>
                <h1 className="mt-2 text-3xl font-serif text-stone-900">山隐私厨</h1>
                <p className="mt-1 max-w-[18rem] text-[11px] leading-relaxed text-stone-500">
                  管理会员权益、到店核销、活动发布与 AI 经营建议，让线下好店更轻地承接品货官会员。
                </p>
              </div>
              <div className="rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-[10px] text-amber-800">
                已认证
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <MetricCard label="今日核销" value="12" note="+18%" />
              <MetricCard label="待到店" value="8" note="本周" />
              <MetricCard label="AI 建议" value="4" note="可处理" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-7 px-5 py-6">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-stone-400">今日</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">需要处理</h2>
            </div>
            <span className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-[10px] text-amber-700">3 项</span>
          </div>
          <div className="space-y-3">
            <WorkbenchItem icon={QrCode} title="到店核销" desc="2 张体验券待确认，扫码后自动同步会员权益。" tag="待处理" />
            <WorkbenchItem icon={Ticket} title="权益库存" desc="山隐双人茶席剩余 8 份，可设置本周可用时段。" tag="可配置" />
            <WorkbenchItem icon={Clock3} title="活动报名" desc="6 月品宴已有 6 人报名，剩余 2 席待确认。" tag="余 2 席" />
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-amber-700">AI 助手</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">智能经营工具</h2>
            </div>
            <span className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-[10px] text-stone-500">4 个能力</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {aiTools.map((tool) => (
              <AiCard key={tool.title} {...tool} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <div className="text-[10px] tracking-[0.18em] text-stone-400">运营</div>
            <h2 className="mt-1 text-lg font-serif text-stone-900">基础经营模块</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <WorkbenchItem icon={BarChart3} title="经营数据" desc="核销、收藏、复购和活动转化。" tag="看板" />
            <WorkbenchItem icon={MessageSquareText} title="评价总结" desc="AI 汇总会员评价与改进建议。" tag="AI" />
            <WorkbenchItem icon={CalendarDays} title="活动排期" desc="配置私享会、品宴和预约时段。" tag="排期" />
            <WorkbenchItem icon={CheckCircle2} title="认证资料" desc="门店资质、权益规则和服务承诺。" tag="已完善" />
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-stone-100/80 p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-stone-400">趋势</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">本周经营提示</h2>
            </div>
            <TrendingUp size={18} className="text-amber-700" />
          </div>
          <p className="text-[11px] leading-relaxed text-stone-500">
            周五至周日到店意愿更高，建议把「会员专享茶席」权益开放到 8 席，并让 AI 生成一版圈层招募文案。
          </p>
        </section>
      </div>
    </div>
  );
}
