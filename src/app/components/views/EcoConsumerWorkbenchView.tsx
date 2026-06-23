import React from 'react';
import {
  ArrowLeft,
  Users,
  Sparkles,
  MessageSquareText,
  BookOpenText,
  Clock3,
  ShieldAlert,
  WandSparkles,
  FileText,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Gift,
  CreditCard,
  Share2,
} from 'lucide-react';

interface EcoConsumerWorkbenchViewProps {
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

function TaskItem({
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

function AiToolCard({
  icon: Icon,
  title,
  desc,
  result,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  result: string;
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
        {result}
      </div>
    </button>
  );
}

function PaybackProgressChart() {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="text-[10px] tracking-[0.18em] text-amber-700">回本进度</div>
          <h2 className="mt-1 text-lg font-serif text-stone-900">已到账 ¥1,776</h2>
          <p className="mt-1 text-[11px] text-stone-500">投入 ¥1,980，距回本还差 ¥204</p>
        </div>
        <span className="rounded-full border border-amber-100 bg-amber-50 px-2.5 py-1 text-[10px] text-amber-700">89%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-stone-100">
        <div className="h-full w-[89%] rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-stone-900"></div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-stone-400">
        <span>买资格</span>
        <span>回本</span>
        <span>纯赚</span>
      </div>
    </div>
  );
}

function SalesFunnelChart() {
  const funnel = [
    { label: '海报曝光', value: '128', width: '100%' },
    { label: '链接点击', value: '64', width: '74%' },
    { label: '正在浏览', value: '18', width: '48%' },
    { label: '已下单', value: '2', width: '24%' },
  ];

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] tracking-[0.18em] text-stone-400">分享漏斗</div>
          <h2 className="mt-1 text-lg font-serif text-stone-900">售卡转化</h2>
        </div>
        <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] text-stone-500">2/5 已售</span>
      </div>
      <div className="space-y-3">
        {funnel.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-[10px] text-stone-500">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-stone-100">
              <div className="h-full rounded-full bg-stone-900" style={{ width: item.width }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JourneyChart() {
  const stages = ['听说', '算账', '拿卡', '首卖', '等待', '回本', '复购', '升级'];
  const activeIndex = 4;

  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-100/80 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] tracking-[0.18em] text-stone-400">旅程</div>
          <h2 className="mt-1 text-lg font-serif text-stone-900">当前处于等待成交期</h2>
        </div>
        <TrendingUp size={18} className="text-amber-700" />
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-[9px] h-0.5 bg-stone-200"></div>
        <div className="relative grid grid-cols-8 gap-1">
          {stages.map((stage, index) => {
            const done = index < activeIndex;
            const active = index === activeIndex;
            return (
              <div key={stage} className="text-center">
                <div
                  className={`mx-auto h-5 w-5 rounded-full border ${
                    active
                      ? 'border-amber-500 bg-amber-400 shadow-sm'
                      : done
                      ? 'border-stone-900 bg-stone-900'
                      : 'border-stone-300 bg-stone-100'
                  }`}
                ></div>
                <div className={`mt-2 text-[9px] ${active ? 'text-amber-700' : done ? 'text-stone-700' : 'text-stone-400'}`}>
                  {stage}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-stone-500">
        现在最重要的是让消费商看到“不是没人看”：实时展示点击、浏览和已售，缓解等待焦虑。
      </p>
    </div>
  );
}

export function EcoConsumerWorkbenchView({ onBack }: EcoConsumerWorkbenchViewProps) {
  const aiTools = [
    {
      icon: Sparkles,
      title: 'AI 算账器',
      desc: '把投入、卡数、单卡价格和复购收益算清楚。',
      result: '首次投入 ¥1,980，5 张卡卖完到账 ¥4,440，预计净赚 ¥2,460。',
    },
    {
      icon: WandSparkles,
      title: 'AI 分享文案',
      desc: '生成朋友版、亲戚版、同事版和社群版分享话术。',
      result: '建议使用“送你一张省钱年卡”的礼物姿态，降低推销感。',
    },
    {
      icon: ShieldAlert,
      title: 'AI 等待期提醒',
      desc: '识别分享后无人购买时的焦虑点，提示换文案或换渠道。',
      result: '当前有 18 人浏览未下单，建议发一版“自用也划算”的解释文案。',
    },
    {
      icon: TrendingUp,
      title: 'AI 复购建议',
      desc: '在售罄或接近回本时，提示复购和升级动作。',
      result: '再售 1 张即可回本，回本后建议展示“纯赚阶段”提醒。',
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
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-800">生态消费商工作台</span>
      </div>

      <div className="px-5 pt-5">
        <div className="relative overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-stone-100 to-stone-50 p-5 shadow-sm">
          <div className="absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full bg-amber-200/30 blur-3xl"></div>
          <div className="relative z-10">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <Users size={17} className="text-amber-700" />
                  <span className="text-[10px] tracking-[0.18em] text-amber-700">消费与渠道侧</span>
                </div>
                <h1 className="mt-2 text-3xl font-serif text-stone-900">生态消费商</h1>
                <p className="mt-1 max-w-[18rem] text-[11px] leading-relaxed text-stone-500">
                  从拿到会员卡、生成分享海报，到售卡回本、复购升级，用清晰数据降低卖卡焦虑。
                </p>
              </div>
              <div className="rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-[10px] text-amber-800">
                初级
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <MetricCard label="待售卡" value="3" note="剩余" />
              <MetricCard label="已到账" value="¥1,776" note="距回本 ¥204" />
              <MetricCard label="浏览中" value="18" note="待转化" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-7 px-5 py-6">
        <section className="space-y-3">
          <PaybackProgressChart />
          <SalesFunnelChart />
          <JourneyChart />
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-stone-400">今日</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">售卡任务</h2>
            </div>
            <span className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-[10px] text-amber-700">4 项</span>
          </div>
          <div className="space-y-3">
            <TaskItem icon={Share2} title="生成新一版分享海报" desc="当前朋友圈版已曝光 128 次，可换成朋友版话术继续发。" tag="可生成" />
            <TaskItem icon={MessageSquareText} title="跟进 18 位浏览未下单会员" desc="先解释“卖不掉自用也划算”，降低对方顾虑。" tag="待跟进" />
            <TaskItem icon={Clock3} title="等待期转化提醒" desc="已分享 6 小时，建议换一个渠道而不是重复刷屏。" tag="焦虑点" />
            <TaskItem icon={Gift} title="准备回本提醒" desc="再售 1 张即可回本，达成后触发仪式感提示。" tag="差 ¥204" />
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-amber-700">AI 助手</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">智能售卡工具</h2>
            </div>
            <span className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-[10px] text-stone-500">4 个能力</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {aiTools.map((tool) => (
              <AiToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <div className="text-[10px] tracking-[0.18em] text-stone-400">基础</div>
            <h2 className="mt-1 text-lg font-serif text-stone-900">赚钱工作区</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TaskItem icon={CreditCard} title="我的卡包" desc="5 张会员卡，2 张已售，3 张待赠送。" tag="3 待售" />
            <TaskItem icon={BookOpenText} title="真实案例" desc="查看售卡记录、到账记录和简短心得。" tag="案例" />
            <TaskItem icon={FileText} title="收益记录" desc="售卡到账、回本进度和结算日历。" tag="明细" />
            <TaskItem icon={CheckCircle2} title="升级进度" desc="距离领袖级还需完成 3 张售卡。" tag="3 张" />
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-stone-100/80 p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-stone-400">原则</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">旅程提示</h2>
            </div>
            <CheckCircle2 size={18} className="text-amber-700" />
          </div>
          <p className="text-[11px] leading-relaxed text-stone-500">
            当前最关键不是堆收益数字，而是让用户算清楚、敢分享、看见等待期数据，并在回本与售罄时及时推动复购。
          </p>
        </section>
      </div>
    </div>
  );
}
