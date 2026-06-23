import React from 'react';
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Factory, FileCheck, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

type PartnerType = 'merchant' | 'supplier';

interface PartnerApplyViewProps {
  type: PartnerType;
  onBack: () => void;
}

const configs = {
  merchant: {
    eyebrow: 'LOCAL PARTNER',
    title: '商家入驻申请',
    subtitle: '适合有线下服务能力、体验空间或本地口碑的优质商家。',
    icon: Building2,
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    valueTitle: '把好店，放进会员真实生活里',
    values: ['会员权益设计', '到店核销与预约', '活动共建与私域曝光'],
    flow: ['提交门店资料', '平台人工审核', '配置会员权益', '上线体验与核销'],
    cta: '提交商家入驻意向',
  },
  supplier: {
    eyebrow: 'SUPPLY PARTNER',
    title: '工厂 / 供应链合作',
    subtitle: '适合源头工厂、品牌方、产地资源与稳定交付能力的供应链伙伴。',
    icon: Factory,
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    valueTitle: '让真正解决问题的好产品，被看见',
    values: ['品鉴官共测', '家庭场景选品', '源头直供与品质背书'],
    flow: ['提交产品与资质', '选品初筛', '样品评测', '进入品库合作池'],
    cta: '提交供应链合作意向',
  },
} satisfies Record<PartnerType, {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: typeof Building2;
  heroImage: string;
  valueTitle: string;
  values: string[];
  flow: string[];
  cta: string;
}>;

export function PartnerApplyView({ type, onBack }: PartnerApplyViewProps) {
  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-white pb-12 font-sans text-stone-900">
      <div className="relative overflow-hidden bg-stone-950 pb-8 text-white">
        <img src={config.heroImage} alt={config.title} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/35 via-stone-950/70 to-stone-950"></div>

        <div className="relative z-10 px-5 pt-12">
          <button
            onClick={onBack}
            className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] tracking-[0.22em] text-amber-100 backdrop-blur">
            <Sparkles size={12} className="mr-1.5" />
            {config.eyebrow}
          </div>
          <h1 className="font-serif text-3xl font-light leading-tight">{config.title}</h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-300">{config.subtitle}</p>
        </div>
      </div>

      <div className="relative z-20 -mt-6 space-y-6 px-5">
        <section className="rounded-[2rem] border border-stone-100 bg-white p-5 shadow-xl shadow-stone-200/60">
          <div className="mb-4 flex items-start space-x-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Icon size={21} />
            </div>
            <div>
              <h2 className="font-serif text-xl text-stone-950">{config.valueTitle}</h2>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">平台会先做人工审核，确保合作方、商品或服务与会员家庭场景匹配。</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {config.values.map((value) => (
              <div key={value} className="rounded-2xl bg-stone-50 px-3 py-3 text-center">
                <CheckCircle2 size={14} className="mx-auto mb-2 text-amber-700" />
                <p className="text-[10px] leading-relaxed text-stone-600">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-stone-100 bg-[#fbfaf7] p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-serif text-lg text-stone-950">合作流程</h2>
            <span className="rounded-full bg-white px-3 py-1 text-[10px] text-stone-500 shadow-sm">人工审核</span>
          </div>

          <div className="space-y-3">
            {config.flow.map((step, index) => (
              <div key={step} className="flex items-center space-x-3 rounded-2xl bg-white p-3 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-xs font-medium text-amber-50">
                  {index + 1}
                </div>
                <span className="text-sm text-stone-700">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-950 p-5 text-amber-50">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h2 className="font-serif text-lg text-white">不会自动上架</h2>
              <p className="mt-0.5 text-xs text-stone-400">提交后由平台人工联系，确认资质、样品与合作边界。</p>
            </div>
          </div>

          <button className="flex w-full items-center justify-between rounded-2xl bg-amber-100 px-4 py-3 text-left text-sm font-medium text-stone-950 transition-colors hover:bg-white">
            <span>{config.cta}</span>
            <ArrowRight size={16} />
          </button>
        </section>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-stone-100 bg-white p-4 text-center shadow-sm">
            <FileCheck size={18} className="mx-auto mb-2 text-stone-400" />
            <p className="text-xs font-medium text-stone-800">资料预审</p>
            <p className="mt-1 text-[9px] text-stone-400">确认主体与资质</p>
          </div>
          <div className="rounded-2xl border border-stone-100 bg-white p-4 text-center shadow-sm">
            <MessageCircle size={18} className="mx-auto mb-2 text-stone-400" />
            <p className="text-xs font-medium text-stone-800">专人沟通</p>
            <p className="mt-1 text-[9px] text-stone-400">明确权益与合作方式</p>
          </div>
        </div>
      </div>
    </div>
  );
}
