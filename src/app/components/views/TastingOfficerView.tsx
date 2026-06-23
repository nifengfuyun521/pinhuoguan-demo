import React from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Star,
  Award,
  Zap,
  MessageSquareText,
  PenTool,
  SlidersHorizontal,
  Store,
  Handshake,
  UsersRound,
  Clock3,
  ChevronRight,
  CheckCircle2,
  PackageCheck,
  FileSearch,
  UserRoundCheck,
} from 'lucide-react';

interface TastingOfficerViewProps {
  onBack: () => void;
  initialView?: 'workbench' | 'growth';
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-3">
      <div className="text-[10px] text-stone-500">{label}</div>
      <div className="mt-1 text-lg font-serif text-stone-900">{value}</div>
    </div>
  );
}

function TaskItem({
  icon: Icon,
  title,
  desc,
  tag,
  urgent = false,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  tag: string;
  urgent?: boolean;
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl border border-stone-200 bg-stone-100/80 p-4 text-left shadow-sm transition-colors hover:bg-stone-100">
      <div className="flex items-center space-x-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${urgent ? 'bg-amber-100 text-amber-700' : 'bg-white text-stone-700'}`}>
          <Icon size={18} />
        </div>
        <div>
          <div className="text-sm font-medium text-stone-900">{title}</div>
          <div className="mt-0.5 text-[11px] leading-relaxed text-stone-500">{desc}</div>
        </div>
      </div>
      <div className="ml-3 flex items-center space-x-2">
        <span className={`rounded-full px-2 py-1 text-[10px] ${urgent ? 'bg-amber-100 text-amber-800' : 'bg-white text-stone-500'}`}>
          {tag}
        </span>
        <ChevronRight size={15} className="text-stone-300" />
      </div>
    </button>
  );
}

function CapabilityCard({
  icon: Icon,
  title,
  desc,
  count,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  count: string;
}) {
  return (
    <button className="rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-100 to-amber-50/40 p-4 text-left shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-100 bg-white/70 text-amber-700">
          <Icon size={18} />
        </div>
        <span className="rounded-full bg-white/80 px-2 py-1 text-[10px] text-stone-500">{count}</span>
      </div>
      <div className="text-sm font-medium text-stone-900">{title}</div>
      <div className="mt-1 text-[11px] leading-relaxed text-stone-500">{desc}</div>
    </button>
  );
}

function PrivilegeCard({
  icon: Icon,
  title,
  benefit,
  metric,
  progress,
  action,
}: {
  icon: React.ElementType;
  title: string;
  benefit: string;
  metric: string;
  progress: string;
  action: string;
}) {
  return (
    <button className="w-full rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-100 via-amber-50/50 to-stone-50 p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-100 bg-amber-100/70 text-amber-800">
            <Icon size={19} />
          </div>
          <div>
            <div className="text-sm font-medium text-stone-900">{title}</div>
            <div className="mt-0.5 text-[10px] tracking-[0.16em] text-amber-700">{benefit}</div>
          </div>
        </div>
        <span className="rounded-full border border-stone-200 bg-white/70 px-2.5 py-1 text-[10px] text-stone-600">{metric}</span>
      </div>

      <div className="mb-4 rounded-2xl border border-white/70 bg-white/55 p-3">
        <div className="flex items-center justify-between text-[11px] text-stone-500">
          <span>{progress}</span>
          <ChevronRight size={13} className="text-stone-300" />
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px]">
        <span className="text-stone-500">{action}</span>
        <span className="font-medium text-amber-800">去处理</span>
      </div>
    </button>
  );
}

export function TastingOfficerView({ onBack, initialView = 'workbench' }: TastingOfficerViewProps) {
  const [activeView, setActiveView] = React.useState<'workbench' | 'growth'>(initialView);

  const capabilities = [
    {
      icon: PackageCheck,
      title: '试用',
      desc: '查看可领取新品、进行中试用和试用周期。',
      count: '2 个',
    },
    {
      icon: MessageSquareText,
      title: '反馈',
      desc: '提交真实体验、适用边界和复购建议。',
      count: '1 待交',
    },
    {
      icon: PenTool,
      title: '内容',
      desc: '沉淀手记、测评和可被引用的品鉴观点。',
      count: '4 篇',
    },
    {
      icon: SlidersHorizontal,
      title: '选品',
      desc: '参与候选商品投票、共创清单和优先级建议。',
      count: '3 项',
    },
    {
      icon: Clock3,
      title: '审核进度',
      desc: '查看手记、选品建议和共建申请的处理状态。',
      count: '2 条',
    },
    {
      icon: UserRoundCheck,
      title: '品鉴档案',
      desc: '记录擅长品类、可信反馈和历史贡献。',
      count: '已完善',
    },
  ];

  const advancedPrivileges = [
    {
      icon: SlidersHorizontal,
      title: '品类共创',
      benefit: '优先参与商品品类共创',
      metric: '3 个项目',
      progress: '香插听雨系列二审中，白松露精华油已采纳 2 条建议',
      action: '查看可参与品类池与共创进度',
    },
    {
      icon: Store,
      title: '资源引荐',
      benefit: '供应链及商家引荐特权',
      metric: '2 条线索',
      progress: '山隐私厨待平台评估，红参源头工厂资料待补充',
      action: '提交商家 / 工厂线索',
    },
    {
      icon: Handshake,
      title: '异业共建',
      benefit: '异业资源深度共建权限',
      metric: '1 个机会',
      progress: '茶空间 x 香氛品鉴会进入合作方案确认',
      action: '查看共建机会与资源匹配',
    },
    {
      icon: UsersRound,
      title: '圈层赋能',
      benefit: '圈层社群组织管理赋能',
      metric: '28 人触达',
      progress: '本周可发起 1 场小型品鉴招募，待确认主题',
      action: '管理圈层活动与成员转化',
    },
  ];

  const stages = [
    {
      title: '基础品鉴官',
      subtitle: 'ECO-NODE',
      desc: '完成基础门槛并具备推荐试用资格的基础生态节点。',
      benefits: [
        '会员卡推荐权限与分成',
        '平台新品优先试用资格',
        '基础推荐收益自然顺延',
        '专属生态数据看板',
      ],
      icon: Award,
      active: false,
      cardClass: 'bg-white border-stone-200 text-stone-800',
      iconClass: 'bg-stone-50 border-stone-100 text-stone-500',
      mutedClass: 'text-stone-400',
      checkClass: 'bg-stone-100 text-stone-400',
    },
    {
      title: '高级品鉴官',
      subtitle: 'KEY INFLUENCER',
      desc: '具备组织能力、区域影响力或供应链资源识别能力的高贡献节点。',
      benefits: [
        '优先参与商品品类共创',
        '供应链及商家引荐特权',
        '异业资源深度共建权限',
        '圈层社群组织管理赋能',
      ],
      icon: Star,
      active: true,
      cardClass: 'bg-stone-900 border-amber-500/30 text-amber-50 shadow-xl shadow-amber-900/5 ring-1 ring-amber-500/20',
      iconClass: 'bg-white/10 border-white/20 text-amber-200',
      mutedClass: 'text-amber-500/70',
      checkClass: 'bg-amber-900/30 text-amber-400',
    },
    {
      title: '品牌共创型品鉴官',
      subtitle: 'TOP PARTNER',
      desc: '生态顶层角色，具备稳定资源、供应链理解与品牌操盘潜力。',
      benefits: [
        '开启专项独立品牌孵化流程',
        '获取平台直接注资入股机会',
        '升级为独立商业品牌操盘手',
        '专享高阶品牌共创特权',
      ],
      icon: Zap,
      active: false,
      cardClass: 'bg-gradient-to-br from-amber-100 to-amber-50 border-amber-200 text-amber-950',
      iconClass: 'bg-white/60 border-amber-200 text-amber-700',
      mutedClass: 'text-amber-700/70',
      checkClass: 'bg-amber-200/50 text-amber-700',
    },
  ];

  const handleBack = () => {
    if (activeView === 'growth' && initialView === 'workbench') {
      setActiveView('workbench');
      return;
    }

    onBack();
  };

  if (activeView === 'growth') {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-800 pb-24 font-sans">
        <div className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md px-4 py-4 flex items-center border-b border-stone-200">
          <button onClick={handleBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-200/60 hover:bg-stone-200 transition-colors text-stone-600">
            <ArrowLeft size={20} />
          </button>
          <span className="ml-4 text-sm font-serif tracking-widest text-stone-800">品鉴官升级路径</span>
        </div>

        <div className="px-6 pt-10 pb-8 relative overflow-hidden bg-stone-900 rounded-b-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-stone-800 rounded-full blur-2xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={18} className="text-amber-400" />
                <span className="text-[10px] tracking-widest text-amber-400/80 font-medium">当前身份</span>
              </div>
              <div className="text-[10px] text-stone-500 font-serif tracking-widest">LV.4 / ECO-MEMBER</div>
            </div>

            <h1 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-50 to-amber-200 tracking-tight mb-3">
              高级品鉴官
            </h1>

            <div className="mb-4 bg-stone-800/50 rounded-xl p-3 border border-stone-700/50 backdrop-blur-sm max-w-sm">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <span className="text-[10px] text-stone-400 block mb-0.5">当前生态贡献值</span>
                  <span className="text-sm font-serif text-amber-100 font-medium">842 <span className="text-[10px] text-stone-500">/ 1000</span></span>
                </div>
                <span className="text-[10px] text-amber-500/80 font-medium">距 品牌共创型品鉴官 还差 158</span>
              </div>
              <div className="w-full h-1 bg-stone-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-[84.2%] rounded-full"></div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-[280px]">
              您已展现出卓越的组织影响力，成为连接平台与用户的核心价值节点。
            </p>
          </div>
        </div>

        <div className="px-6 py-8 space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-bold text-stone-400 tracking-widest flex items-center">
              <span className="w-1 h-3 bg-amber-500 mr-2 rounded-full"></span>
              成长阶段与权益
            </h3>
            <span className="text-[10px] text-stone-400">查看升级特权</span>
          </div>

          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className={`relative rounded-2xl p-6 border shadow-sm ${stage.cardClass} ${stage.active ? 'scale-[1.02]' : ''}`}
              >
                {stage.active && (
                  <div className="absolute -top-3 right-4 bg-amber-500 text-stone-950 text-[10px] font-bold px-3 py-1 rounded-full shadow-md tracking-widest">
                    CURRENT
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-5 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-inner ${stage.iconClass}`}>
                    <Icon size={20} className={stage.active ? 'fill-current' : ''} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className={`text-[10px] tracking-widest font-bold mb-0.5 ${stage.mutedClass}`}>
                      {stage.subtitle}
                    </div>
                    <h4 className="text-xl font-serif tracking-wide">{stage.title}</h4>
                  </div>
                </div>

                <p className={`text-[11px] leading-relaxed mb-5 border-b border-dashed pb-4 ${stage.mutedClass}`}>
                  {stage.desc}
                </p>

                <div className="space-y-3 relative z-10">
                  <div className="text-[10px] tracking-widest font-semibold opacity-80 mb-2">核心特权</div>
                  {stage.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${stage.checkClass}`}>
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[13px] tracking-wide font-medium opacity-90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-6 mt-2 mb-6">
          <button
            onClick={() => setActiveView('workbench')}
            className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-amber-50 text-xs tracking-widest rounded-2xl transition-all shadow-lg flex items-center justify-center group active:scale-95"
          >
            返回品鉴工作台
            <ChevronRight size={14} className="ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-24 font-sans">
      <div className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md px-4 py-4 flex items-center border-b border-stone-200">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-200/60 hover:bg-stone-200 transition-colors text-stone-600">
          <ArrowLeft size={20} />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-800">品鉴工作台</span>
      </div>

      <div className="px-5 pt-5">
        <div className="relative overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-stone-100 to-stone-50 p-5 shadow-sm">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-amber-200/30 blur-3xl"></div>
          <div className="relative z-10">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={17} className="text-amber-700" />
                  <span className="text-[10px] tracking-[0.18em] text-amber-700">当前身份</span>
                </div>
                <h1 className="mt-2 text-3xl font-serif text-stone-900">高级品鉴官</h1>
                <p className="mt-1 max-w-[18rem] text-[11px] leading-relaxed text-stone-500">
                  除试用与反馈外，可参与品类共创、资源引荐、异业共建与圈层组织，是平台信任链路里的关键节点。
                </p>
              </div>
              <div className="rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-[10px] text-amber-800">
                LV.4
              </div>
            </div>

            <div className="mb-4 rounded-2xl border border-stone-200 bg-white/60 p-4">
              <div className="mb-2 flex items-end justify-between">
                <div>
                  <div className="text-[10px] text-stone-500">生态贡献值</div>
                  <div className="mt-1 text-2xl font-serif text-stone-900">842</div>
                </div>
                <div className="text-right text-[10px] text-stone-500">
                  距品牌共创型品鉴官还差 <span className="text-amber-700">158</span>
                </div>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
                <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-amber-300 to-amber-600"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <StatPill label="共创中" value="3" />
              <StatPill label="引荐中" value="2" />
              <StatPill label="圈层任务" value="1" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-6 space-y-7">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-stone-400">待办</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">今天需要处理</h2>
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] text-amber-700 border border-amber-100">4 项</span>
          </div>
          <div className="space-y-3">
            <TaskItem
              icon={MessageSquareText}
              title="提交白松露精华油试用反馈"
              desc="需要补充肤感、适用人群和复购建议。"
              tag="明天截止"
              urgent
            />
            <TaskItem
              icon={FileSearch}
              title="香插听雨系列选品审核中"
              desc="平台已进入二审，预计 24 小时内反馈。"
              tag="审核中"
            />
            <TaskItem
              icon={Store}
              title="补充红参源头工厂引荐资料"
              desc="需要完善资质、供货稳定性和可共创品类说明。"
              tag="待补充"
            />
            <TaskItem
              icon={UsersRound}
              title="确认本周圈层品鉴招募主题"
              desc="可从茶空间、香氛或家庭滋补三个方向中选择。"
              tag="可组织"
            />
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-amber-700">高级特权</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">高级品鉴官工作区</h2>
            </div>
            <span className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-[10px] text-stone-500">4 项开放</span>
          </div>
          <div className="space-y-3">
            {advancedPrivileges.map((item) => (
              <PrivilegeCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <div className="text-[10px] tracking-[0.18em] text-stone-400">能力</div>
            <h2 className="mt-1 text-lg font-serif text-stone-900">基础品鉴工作区</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {capabilities.map((item) => (
              <CapabilityCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-stone-100/80 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.18em] text-stone-400">成长</div>
              <h2 className="mt-1 text-lg font-serif text-stone-900">下一阶段</h2>
            </div>
            <Star size={18} className="text-amber-600 fill-amber-600" />
          </div>
          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
            <div className="text-sm font-medium text-stone-900">品牌共创型品鉴官</div>
            <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
              需要继续积累稳定反馈、选品判断和供应链理解。达标后可申请进入品牌孵化流程。
            </p>
            <div className="mt-4 flex items-center space-x-2 text-[11px] text-stone-500">
              <CheckCircle2 size={14} className="text-amber-700" />
              <span>当前已完成 84%，还差 158 贡献值</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
