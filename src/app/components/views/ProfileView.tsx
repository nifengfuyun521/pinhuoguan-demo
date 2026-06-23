import React from 'react';
import {
  Settings,
  Bell,
  ChevronRight,
  Gift,
  CreditCard,
  Heart,
  User,
  ShieldCheck,
  Zap,
  QrCode,
  Star,
  Award,
  Share2,
  ShoppingBag,
  Ticket,
  Users,
  Sparkles,
  Clock3,
  Shield,
  BookOpenText,
  CheckCircle2,
} from 'lucide-react';
import { toast } from 'sonner';

import { SocialCapitalView } from './SocialCapitalView';
import { EnergyView } from './EnergyView';
import { ConsultationView } from './ConsultationView';
import { FavoritesView } from './FavoritesView';
import { InviteView } from './InviteView';
import { ServiceView } from './ServiceView';
import { CoBuilderApplyView } from './CoBuilderApplyView';
import { CoCreationContentView } from './CoCreationContentView';
import { OrderListView } from './OrderListView';
import { TastingOfficerView } from './TastingOfficerView';

const Badge3D = ({ image, label }: { image: string; label: string }) => (
  <div className="flex flex-col items-center space-y-1 group cursor-pointer">
    <div className="relative w-10 h-10">
      <div className="w-full h-full">
        <div className="absolute inset-0 rounded-full border border-amber-200/30 shadow-[0_0_10px_rgba(251,191,36,0.2)] bg-stone-800 overflow-hidden flex items-center justify-center">
          <img src={image} alt={label} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30"></div>
        </div>
      </div>
    </div>
    <span className="text-[9px] text-stone-500 group-hover:text-amber-600 transition-colors font-serif">{label}</span>
  </div>
);

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <div className="text-[10px] tracking-[0.18em] text-stone-400">{eyebrow}</div>
        <h3 className="mt-1 text-lg font-serif text-stone-900">{title}</h3>
      </div>
      <p className="max-w-[10rem] text-right text-[10px] leading-relaxed text-stone-400">{desc}</p>
    </div>
  );
}

function SummaryPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5">
      <span className="text-[10px] text-stone-400">{label}</span>
      <span className="ml-2 text-[10px] font-medium text-stone-700">{value}</span>
    </div>
  );
}

function StatusTile({
  label,
  value,
  tone = 'neutral',
}: {
  label: string;
  value: string;
  tone?: 'neutral' | 'warm';
}) {
  const toneClass =
    tone === 'warm'
      ? 'border-amber-100 bg-amber-50/80 text-amber-800'
      : 'border-stone-200 bg-stone-50 text-stone-800';

  return (
    <div className={`rounded-xl border p-3 ${toneClass}`}>
      <div className="text-[10px] text-stone-400">{label}</div>
      <div className="mt-2 text-sm font-medium">{value}</div>
    </div>
  );
}

function QuickEntry({
  icon: Icon,
  label,
  value,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl border border-stone-200 bg-white p-4 text-left shadow-sm transition-colors hover:bg-stone-50"
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700">
          <Icon size={18} />
        </div>
        <ChevronRight size={16} className="text-stone-300" />
      </div>
      <div className="mt-5 text-sm font-medium text-stone-900">{label}</div>
      <div className="mt-1 text-[11px] leading-relaxed text-stone-500">{value}</div>
    </button>
  );
}

function ListItem({
  icon: Icon,
  label,
  desc,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-xl bg-white p-4 text-left shadow-sm transition-colors hover:bg-stone-50"
    >
      <div className="flex items-center space-x-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-50 text-stone-600">
          <Icon size={18} />
        </div>
        <div>
          <div className="text-sm font-medium text-stone-900">{label}</div>
          <div className="mt-0.5 text-[11px] text-stone-400">{desc}</div>
        </div>
      </div>
      <ChevronRight size={16} className="text-stone-300" />
    </button>
  );
}

function PlaceholderEntry({
  icon: Icon,
  label,
  desc,
  title,
  detail,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  title: string;
  detail: string;
}) {
  const handleClick = () => {
    toast(
      <div className="flex flex-col">
        <span className="font-serif font-medium text-stone-900">{title}</span>
        <span className="text-xs text-stone-500">{detail}</span>
      </div>
    );
  };

  return <ListItem icon={Icon} label={label} desc={desc} onClick={handleClick} />;
}

export function ProfileView() {
  const [showSocialCapital, setShowSocialCapital] = React.useState(false);
  const [showEnergy, setShowEnergy] = React.useState(false);
  const [showConsultations, setShowConsultations] = React.useState(false);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [showInvite, setShowInvite] = React.useState(false);
  const [showService, setShowService] = React.useState(false);
  const [showCoBuilderApply, setShowCoBuilderApply] = React.useState(false);
  const [showCoCreationContent, setShowCoCreationContent] = React.useState(false);
  const [showOrders, setShowOrders] = React.useState(false);
  const [showTastingOfficer, setShowTastingOfficer] = React.useState(false);
  const [autoScan, setAutoScan] = React.useState(false);

  const handleSharePoster = () => {
    toast.success(
      <div className="flex flex-col">
        <span className="font-serif font-medium">价值海报已生成</span>
        <span className="text-xs text-stone-500">包含您的身份徽章与品货主张，可保存分享</span>
      </div>
    );
  };

  const handleIdentityCode = () => {
    setAutoScan(true);
    setShowEnergy(true);
  };

  const handleRightsHint = () => {
    toast(
      <div className="flex flex-col">
        <span className="font-serif font-medium text-stone-900">会员权益说明</span>
        <span className="text-xs text-stone-500">当前会员身份已覆盖线下核销、活动验真、专属服务与家庭协同权益。</span>
      </div>
    );
  };

  if (showSocialCapital) {
    return <SocialCapitalView onBack={() => setShowSocialCapital(false)} />;
  }

  if (showCoCreationContent) {
    return <CoCreationContentView onBack={() => setShowCoCreationContent(false)} />;
  }

  if (showOrders) {
    return <OrderListView onBack={() => setShowOrders(false)} />;
  }

  if (showTastingOfficer) {
    return <TastingOfficerView onBack={() => setShowTastingOfficer(false)} />;
  }

  if (showEnergy) {
    return (
      <EnergyView
        onBack={() => {
          setShowEnergy(false);
          setAutoScan(false);
        }}
        onNavigateToStore={() => {}}
        autoScan={autoScan}
      />
    );
  }

  if (showConsultations) {
    return <ConsultationView onBack={() => setShowConsultations(false)} />;
  }

  if (showFavorites) {
    return <FavoritesView onBack={() => setShowFavorites(false)} />;
  }

  if (showInvite) {
    return <InviteView onBack={() => setShowInvite(false)} />;
  }

  if (showService) {
    return <ServiceView onBack={() => setShowService(false)} />;
  }

  if (showCoBuilderApply) {
    return <CoBuilderApplyView onBack={() => setShowCoBuilderApply(false)} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <div className="h-48 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-stone-700 rounded-full translate-y-1/2 -translate-x-1/3 opacity-20"></div>

        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center text-stone-400">
          <button
            onClick={() =>
              toast(
                <div className="flex flex-col">
                  <span className="font-serif font-medium text-stone-900">设置与隐私</span>
                  <span className="text-xs text-stone-500">后续可在这里统一管理家庭授权、订阅和账户设置。</span>
                </div>
              )
            }
          >
            <Settings size={20} />
          </button>
          <div className="flex items-center space-x-4">
            <button onClick={handleSharePoster}>
              <Share2 size={20} />
            </button>
            <button
              onClick={() =>
                toast(
                  <div className="flex flex-col">
                    <span className="font-serif font-medium text-stone-900">消息提醒</span>
                    <span className="text-xs text-stone-500">家庭提醒、权益到期、角色任务后续都会从这里汇总。</span>
                  </div>
                )
              }
            >
              <Bell size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-20">
        <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-amber-50 rounded-full opacity-50 blur-xl"></div>

          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-stone-200 border-2 border-amber-100 shadow-md overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1734669578513-cdd2b4c35ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMG1hbiUyMHBvcnRyYWl0JTIwbHV4dXJ5JTIwYXJ0aXN0aWMlMjB3YXJtJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY0NTcyNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-xl font-serif text-stone-900">Lawren</h2>
                    <div
                      onClick={() => setShowTastingOfficer(true)}
                      className="px-[10px] py-[4px] bg-stone-900 rounded-full flex items-center space-x-1 shadow-sm border border-stone-800 cursor-pointer hover:bg-stone-800 transition-colors"
                    >
                      <ShieldCheck size={10} className="text-amber-300" />
                      <span className="text-[10px] font-medium text-amber-100 tracking-wide font-serif">高级品鉴官</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-stone-400">
                  <span>ID: 88001</span>
                  <span className="h-3 w-px bg-stone-200"></span>
                  <span>2025.12.01 加入</span>
                  <span className="h-3 w-px bg-stone-200"></span>
                  <span>年度会员有效期至 2026.12.01</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50/80 via-white to-stone-50 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] tracking-[0.18em] text-amber-700/80">身份与会员状态</div>
                  <div className="mt-2 text-base font-serif text-stone-900">先完成日常消费与权益使用，再逐步长出生态身份</div>
                  <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
                    会员身份负责连接消费、权益与家庭协同，品鉴官等能力在此基础上逐步叠加，不打断原有生活路径。
                  </p>
                </div>
                <button
                  onClick={handleIdentityCode}
                  className="shrink-0 rounded-full border border-amber-200 bg-white/90 px-3 py-2 text-[11px] font-medium text-stone-800 shadow-sm transition-colors hover:bg-white"
                >
                  出示身份码
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <SummaryPill label="当前身份" value="年度会员 / 高级品鉴官" />
                <SummaryPill label="可用权益" value="3项待使用" />
                <SummaryPill label="家庭状态" value="2位成员已加入" />
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleIdentityCode}
                  className="flex-1 rounded-xl bg-stone-900 px-4 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
                >
                  立即出示身份码
                </button>
                <button
                  onClick={handleRightsHint}
                  className="flex-1 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
                >
                  查看会员权益
                </button>
              </div>
            </div>

            <div className="mb-1 mt-5 border-t border-dashed border-stone-100 pt-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center text-[10px] uppercase tracking-widest text-stone-400">
                  <Award size={10} className="mr-1" />
                  身份徽章
                </span>
                <span className="text-[10px] text-stone-300">查看全部</span>
              </div>
              <div className="flex items-center space-x-6 px-2">
                <Badge3D
                  label="汝窑共建"
                  image="https://images.unsplash.com/photo-1622258699373-89e5c8437b4e?q=80&w=200&auto=format&fit=crop"
                />
                <Badge3D
                  label="山村守护"
                  image="https://images.unsplash.com/photo-1651391647095-2cea9fe0970d?q=80&w=200&auto=format&fit=crop"
                />
                <Badge3D
                  label="意见领袖"
                  image="https://images.unsplash.com/photo-1651902217786-a0169b02078f?q=80&w=200&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-8">
        <section>
          <SectionHeader
            eyebrow="权益"
            title="我的权益"
            desc="优先看到最该现在处理和马上可以使用的权益。"
          />
          <div className="rounded-2xl bg-gradient-to-br from-white via-stone-50 to-amber-50/70 border border-amber-100 p-5 shadow-sm">
            <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50/90 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <Clock3 size={14} className="text-amber-700" />
                    <span className="text-[10px] tracking-[0.18em] text-amber-700">优先处理</span>
                  </div>
                  <h4 className="mt-2 text-base font-serif text-stone-900">芳疗体验券将在 3 天后失效</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
                    这张券可用于线下体验服务，建议优先核销，避免权益已获得却没有被真正使用。
                  </p>
                </div>
                <button
                  onClick={handleIdentityCode}
                  className="shrink-0 rounded-full border border-amber-200 bg-white px-3 py-2 text-[11px] font-medium text-stone-800 shadow-sm transition-colors hover:bg-white"
                >
                  现在去用
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <Sparkles size={14} className="text-amber-600" />
                  <span className="text-[10px] tracking-[0.18em] text-amber-700/80">权益总览</span>
                </div>
                <h4 className="mt-3 text-lg font-serif text-stone-900">本周有 3 项权益可立即使用</h4>
                <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
                  折扣、体验、活动通行与专属服务会优先按可用性排序，避免权益分散在不同入口里。
                </p>
              </div>
              <button
                onClick={handleIdentityCode}
                className="rounded-full border border-amber-200 bg-white px-3 py-2 text-[11px] font-medium text-stone-800 shadow-sm transition-colors hover:bg-white"
              >
                去核销
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-xl bg-white/80 p-3">
                <div className="text-[10px] text-stone-400">当前权益</div>
                <div className="mt-2 text-base font-serif text-stone-900">3 项</div>
              </div>
              <div className="rounded-xl bg-white/80 p-3">
                <div className="text-[10px] text-stone-400">即将到期</div>
                <div className="mt-2 text-base font-serif text-stone-900">1 项</div>
              </div>
              <div className="rounded-xl bg-white/80 p-3">
                <div className="text-[10px] text-stone-400">本月已用</div>
                <div className="mt-2 text-base font-serif text-stone-900">5 次</div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <PlaceholderEntry
                icon={Clock3}
                label="即将到期"
                desc="芳疗体验券将在 3 天后失效"
                title="即将到期权益"
                detail="即将到期权益会按时间排序提醒，避免遗漏已获得但尚未使用的服务机会。"
              />
              <ListItem icon={Ticket} label="线下权益" desc="2家特权商户待到店，1张芳疗体验券可用" onClick={handleIdentityCode} />
              <ListItem icon={Gift} label="邀请与赠礼" desc="1张活动席位可转赠好友" onClick={() => setShowInvite(true)} />
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="资产"
            title="我的生活资产"
            desc="看我已经发生过什么、还在推进什么。"
          />
          <div className="grid grid-cols-2 gap-3">
            <QuickEntry icon={ShoppingBag} label="订单与售后" value="3个进行中，1个待评价" onClick={() => setShowOrders(true)} />
            <QuickEntry icon={Heart} label="收藏与清单" value="12件好物，2份送礼灵感" onClick={() => setShowFavorites(true)} />
          </div>

          <div className="mt-3 space-y-3">
            <ListItem icon={CreditCard} label="咨询记录" desc="2个进行中，继续跟进需求" onClick={() => setShowConsultations(true)} />
            <PlaceholderEntry
              icon={Gift}
              label="活动记录"
              desc="冬至茶会待出示，1场已报名"
              title="活动记录"
              detail="你已报名 1 场线下活动，后续可在这里查看通行码、同行人和转赠状态。"
            />
            <ListItem icon={Zap} label="节省记录" desc="本月累计回流 680，查看能量与兑换" onClick={() => setShowEnergy(true)} />
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="家庭"
            title="家庭账户"
            desc="先看到当前协同状态，再进入成员、采购和共享设置。"
          />
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <Users size={14} className="text-stone-700" />
                  <span className="text-[10px] tracking-[0.18em] text-stone-400">家庭协同</span>
                </div>
                <h4 className="mt-3 text-lg font-serif text-stone-900">家人可以一起使用，也各自保留边界</h4>
                <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
                  家庭账户支持共享必要权益和采购协同，但家庭成员的可见范围、授权和退出路径都应清楚可控。
                </p>
              </div>
              <div className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-[10px] text-amber-700">
                家庭运行中
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <StatusTile label="成员状态" value="1位待确认" tone="warm" />
              <StatusTile label="本周采购" value="2 单协同中" />
              <StatusTile label="权益共享" value="已使用 1 次" />
            </div>

            <div className="mt-4 space-y-3">
              <PlaceholderEntry
                icon={Users}
                label="家庭成员"
                desc="2位已加入，1位待接受邀请"
                title="家庭成员"
                detail="当前已有 2 位家庭成员加入，1 位待确认，后续可在这里管理邀请状态、子卡与成员关系。"
              />
              <PlaceholderEntry
                icon={ShoppingBag}
                label="家庭采购"
                desc="本周 2 单待协同，常购清单已生成"
                title="家庭采购"
                detail="家庭常购与补货任务会沉淀在这里，方便伴侣或家人协同完成采购。"
              />
              <PlaceholderEntry
                icon={Ticket}
                label="家庭权益"
                desc="1项共享中，查看使用记录与剩余次数"
                title="家庭权益"
                detail="这里会展示可共享给家人的权益范围、已使用记录与剩余可用次数。"
              />
              <PlaceholderEntry
                icon={Shield}
                label="共享设置"
                desc="调整授权范围、隐私边界与退出机制"
                title="共享设置"
                detail="家庭共享将支持调整可见范围、撤回授权与退出协同，避免过度暴露个人记录。"
              />
            </div>
          </div>
        </section>

        <section className="pb-2">
          <SectionHeader
            eyebrow="工作台"
            title="角色工作台"
            desc="只保留当前最相关的能力入口和待办，不再把它做成第二个首页。"
          />
          <div className="space-y-3">
            <ListItem icon={Star} label="品鉴官成长" desc="查看等级进度、特权与待完成事项" onClick={() => setShowTastingOfficer(true)} />
            <ListItem icon={BookOpenText} label="内容共建" desc="4篇已发布，继续沉淀你的品味档案" onClick={() => setShowCoCreationContent(true)} />
            <ListItem icon={Award} label="共建者申请" desc="资格已达标，进入下一阶段审核" onClick={() => setShowCoBuilderApply(true)} />
            <ListItem icon={User} label="专属客服" desc="Eva 正在跟进你的服务与权益使用" onClick={() => setShowService(true)} />
            <button
              onClick={() => setShowSocialCapital(true)}
              className="flex w-full items-center justify-between rounded-xl border border-dashed border-stone-200 bg-stone-50/80 p-4 text-left transition-colors hover:bg-stone-50"
            >
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-900">生态贡献值稳定增长中</div>
                  <div className="mt-0.5 text-[11px] text-stone-400">842 分，距下一等级还差 158，优先看成长进度而不是收益刺激</div>
                </div>
              </div>
              <ChevronRight size={16} className="text-stone-300" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
