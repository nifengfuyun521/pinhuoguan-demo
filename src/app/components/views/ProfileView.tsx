import React from 'react';
import {
  Settings,
  Bell,
  ChevronRight,
  Gift,
  Heart,
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
  MessageSquare,
  Bookmark,
  PenTool,
  MapPin,
  GripVertical,
  ArrowUp,
  ArrowDown,
  Check,
  HelpCircle,
  FileText,
  UserCheck,
  Store,
  X,
  RefreshCw,
  CalendarDays,
} from 'lucide-react';
import { toast } from 'sonner';

import { EnergyView } from './EnergyView';
import { ConsultationView } from './ConsultationView';
import { FavoritesView } from './FavoritesView';
import { InviteView } from './InviteView';
import { ServiceView } from './ServiceView';
import { CoBuilderApplyView } from './CoBuilderApplyView';
import { CoCreationContentView } from './CoCreationContentView';
import { OrderListView } from './OrderListView';
import { TastingOfficerView } from './TastingOfficerView';
import { MyContentView } from './MyContentView';

function SectionHeader({
  eyebrow,
  title,
  onEdit,
  isEditMode,
  canMoveUp,
  canMoveDown,
  onMoveUp,
  onMoveDown,
}: {
  eyebrow: string;
  title: string;
  onEdit?: () => void;
  isEditMode?: boolean;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <div className="text-[10px] tracking-[0.18em] text-stone-400">{eyebrow}</div>
        <h3 className="mt-1 text-lg font-serif text-stone-900">{title}</h3>
      </div>
      {isEditMode ? (
        <div className="flex items-center space-x-1">
          <button
            onClick={onMoveUp}
            disabled={!canMoveUp}
            className={`p-1.5 rounded-lg ${canMoveUp ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 cursor-not-allowed'}`}
          >
            <ArrowUp size={14} />
          </button>
          <button
            onClick={onMoveDown}
            disabled={!canMoveDown}
            className={`p-1.5 rounded-lg ${canMoveDown ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 cursor-not-allowed'}`}
          >
            <ArrowDown size={14} />
          </button>
          <GripVertical size={16} className="text-stone-300 ml-1" />
        </div>
      ) : null}
    </div>
  );
}

function QuickGridItem({
  icon: Icon,
  label,
  badge,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  badge?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-sm transition-colors hover:bg-stone-50 relative"
    >
      {badge && (
        <div className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-amber-500 text-white text-[9px] flex items-center justify-center">
          {badge}
        </div>
      )}
      <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-700 mb-2">
        <Icon size={18} />
      </div>
      <div className="text-xs font-medium text-stone-900">{label}</div>
    </button>
  );
}

function ListItem({
  icon: Icon,
  label,
  desc,
  onClick,
  rightSlot,
}: {
  icon: React.ElementType;
  label: string;
  desc?: string;
  onClick?: () => void;
  rightSlot?: React.ReactNode;
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
          {desc && <div className="mt-0.5 text-[11px] text-stone-400">{desc}</div>}
        </div>
      </div>
      {rightSlot || <ChevronRight size={16} className="text-stone-300" />}
    </button>
  );
}

function WorkspaceCard({
  icon: Icon,
  title,
  status,
  badge,
  tone = 'default',
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  status: string;
  badge?: string;
  tone?: 'default' | 'warm' | 'dark' | 'soft';
  onClick: () => void;
}) {
  const bgClass =
    tone === 'dark'
      ? 'bg-stone-900 text-stone-50'
      : tone === 'soft'
      ? 'bg-gradient-to-br from-amber-50 via-stone-100 to-stone-50 border-amber-100'
      : tone === 'warm'
      ? 'bg-gradient-to-br from-amber-50 to-white border-amber-100'
      : 'bg-white';
  const iconBgClass =
    tone === 'dark' ? 'bg-white/10 text-amber-300' : tone === 'soft' ? 'bg-white/70 text-amber-700 border border-amber-100' : 'bg-amber-50 text-amber-700';

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl p-4 text-left shadow-sm border border-stone-100 transition-all hover:shadow-md ${bgClass}`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgClass}`}>
          <Icon size={18} />
        </div>
        {badge && (
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
            tone === 'dark' ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-700'
          }`}>
            {badge}
          </span>
        )}
      </div>
      <div className={`mt-3 text-sm font-medium ${tone === 'dark' ? 'text-white' : 'text-stone-900'}`}>
        {title}
      </div>
      <div className={`mt-1 text-[11px] ${tone === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>
        {status}
      </div>
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
  desc?: string;
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

function IdentityCodeOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[90] bg-stone-950/50 backdrop-blur-sm flex justify-center">
      <div className="relative h-[100dvh] w-full max-w-md bg-stone-50 p-5 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-amber-700">会员身份码</div>
            <h3 className="mt-1 text-xl font-serif text-stone-900">Lawren 的一通卡</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-500 shadow-sm">
            <X size={18} />
          </button>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-sm font-medium text-stone-900">年度会员 / 高级品鉴官</div>
              <div className="text-[11px] text-stone-400 mt-1">ID 88001 · 动态码 01:58 后刷新</div>
            </div>
            <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[10px] text-amber-700">
              可核销
            </div>
          </div>

          <div className="mx-auto my-4 w-44 h-44 rounded-3xl bg-stone-900 p-3.5 shadow-inner">
            <div className="grid grid-cols-7 gap-1 h-full">
              {Array.from({ length: 49 }).map((_, index) => {
                const active = [0, 1, 2, 7, 14, 35, 42, 43, 44, 4, 10, 12, 16, 18, 20, 22, 24, 29, 31, 33, 37, 39, 46, 48].includes(index);
                return (
                  <div
                    key={index}
                    className={`rounded-[3px] ${active ? 'bg-amber-100' : 'bg-stone-800'}`}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="rounded-xl bg-stone-50 p-2.5 text-center">
              <div className="text-[10px] text-stone-400">可用权益</div>
              <div className="mt-1 text-sm font-serif text-stone-900">3 项</div>
            </div>
            <div className="rounded-xl bg-stone-50 p-2.5 text-center">
              <div className="text-[10px] text-stone-400">家庭成员</div>
              <div className="mt-1 text-sm font-serif text-stone-900">2 位</div>
            </div>
            <div className="rounded-xl bg-amber-50 p-2.5 text-center border border-amber-100">
              <div className="text-[10px] text-amber-600">即将到期</div>
              <div className="mt-1 text-sm font-serif text-amber-800">1 项</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => toast.success('身份码已刷新')}
              className="flex-1 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 flex items-center justify-center space-x-2"
            >
              <RefreshCw size={15} />
              <span>刷新</span>
            </button>
            <button
              onClick={() => toast.success('会员 ID 已复制')}
              className="flex-1 rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700"
            >
              复制 ID
            </button>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-amber-50/80 border border-amber-100 p-3">
          <div className="flex items-start space-x-3">
            <ShieldCheck size={18} className="text-amber-700 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-stone-900">仅展示核销所需信息</div>
              <div className="mt-1 text-[11px] leading-relaxed text-stone-500">
                商家扫码用于线下核销、活动验真和会员识别，不展示家庭共享与消费隐私。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitsCenterOverlay({ onClose, onUseCode }: { onClose: () => void; onUseCode: () => void }) {
  return (
    <div className="absolute inset-0 z-[80] bg-stone-50 overflow-y-auto">
      <div className="sticky top-0 z-10 bg-stone-50/95 backdrop-blur border-b border-stone-100 px-5 py-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] tracking-[0.2em] text-amber-700">我的权益</div>
          <h3 className="mt-1 text-xl font-serif text-stone-900">本周 3 项可用</h3>
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-500 shadow-sm">
          <X size={18} />
        </button>
      </div>

      <div className="p-5 space-y-5 pb-10">
        <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-stone-50 border border-amber-100 p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <Clock3 size={15} className="text-amber-700" />
                <span className="text-[10px] tracking-[0.18em] text-amber-700">优先处理</span>
              </div>
              <h4 className="mt-2 text-lg font-serif text-stone-900">芳疗体验券将在 3 天后失效</h4>
              <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
                可用于合作空间的单次芳疗体验，建议优先核销。
              </p>
            </div>
            <button
              onClick={onUseCode}
              className="shrink-0 rounded-full bg-stone-900 px-4 py-2 text-[11px] font-medium text-stone-50"
            >
              去使用
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-2xl bg-white p-4 text-center shadow-sm border border-stone-100">
            <div className="text-[10px] text-stone-400">当前权益</div>
            <div className="mt-2 text-xl font-serif text-stone-900">3</div>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center shadow-sm border border-stone-100">
            <div className="text-[10px] text-stone-400">即将到期</div>
            <div className="mt-2 text-xl font-serif text-amber-700">1</div>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center shadow-sm border border-stone-100">
            <div className="text-[10px] text-stone-400">本月已用</div>
            <div className="mt-2 text-xl font-serif text-stone-900">5</div>
          </div>
        </div>

        <div className="space-y-3">
          <ListItem
            icon={Ticket}
            label="线下商户权益"
            desc="2家特权商户可用，最近 1.2km"
            onClick={onUseCode}
            rightSlot={<span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-2 py-1">可核销</span>}
          />
          <ListItem
            icon={CalendarDays}
            label="活动通行权益"
            desc="冬至茶会席位 1 张，可转赠"
            onClick={() => toast.success('已进入活动权益')}
          />
          <ListItem
            icon={Sparkles}
            label="专属服务权益"
            desc="1次芳疗体验券，3天后失效"
            onClick={onUseCode}
            rightSlot={<span className="text-[10px] text-amber-700">优先</span>}
          />
          <ListItem
            icon={Users}
            label="家庭共享权益"
            desc="1项已共享给家人，剩余 2 次"
            onClick={() => toast.success('家庭权益将在家庭账户中展开')}
          />
        </div>
      </div>
    </div>
  );
}

type SortableModuleKey = 'life' | 'family' | 'workbench' | 'settings';

const MODULE_ORDER_KEY = 'phg_profile_module_order_v2';

const defaultModuleOrder: SortableModuleKey[] = ['workbench', 'life', 'family', 'settings'];

const moduleLabels: Record<SortableModuleKey, { eyebrow: string; title: string }> = {
  life: { eyebrow: '生活', title: '我的生活' },
  family: { eyebrow: '家庭', title: '家庭与关系' },
  workbench: { eyebrow: '工作台', title: '角色工作台' },
  settings: { eyebrow: '其他', title: '设置与帮助' },
};

export function ProfileView() {
  const [showEnergy, setShowEnergy] = React.useState(false);
  const [showConsultations, setShowConsultations] = React.useState(false);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [showInvite, setShowInvite] = React.useState(false);
  const [showService, setShowService] = React.useState(false);
  const [showCoBuilderApply, setShowCoBuilderApply] = React.useState(false);
  const [showCoCreationContent, setShowCoCreationContent] = React.useState(false);
  const [showOrders, setShowOrders] = React.useState(false);
  const [showTastingOfficer, setShowTastingOfficer] = React.useState(false);
  const [tastingOfficerInitialView, setTastingOfficerInitialView] = React.useState<'workbench' | 'growth'>('workbench');
  const [showMyContent, setShowMyContent] = React.useState(false);
  const [showIdentityCode, setShowIdentityCode] = React.useState(false);
  const [showBenefitsCenter, setShowBenefitsCenter] = React.useState(false);
  const [autoScan, setAutoScan] = React.useState(false);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [moduleOrder, setModuleOrder] = React.useState<SortableModuleKey[]>(() => {
    try {
      const saved = localStorage.getItem(MODULE_ORDER_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === defaultModuleOrder.length) {
          return parsed;
        }
      }
    } catch {}
    return defaultModuleOrder;
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(MODULE_ORDER_KEY, JSON.stringify(moduleOrder));
    } catch {}
  }, [moduleOrder]);

  const moveModule = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...moduleOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;
    [newOrder[index], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[index]];
    setModuleOrder(newOrder);
  };

  const resetOrder = () => {
    setModuleOrder(defaultModuleOrder);
    toast.success('已恢复默认排序');
  };

  const handleSharePoster = () => {
    toast.success(
      <div className="flex flex-col">
        <span className="font-serif font-medium">价值海报已生成</span>
        <span className="text-xs text-stone-500">包含您的会员身份与品货主张，可保存分享</span>
      </div>
    );
  };

  const handleIdentityCode = () => {
    setShowBenefitsCenter(false);
    setShowIdentityCode(true);
  };

  const handleRightsHint = () => {
    setShowIdentityCode(false);
    setShowBenefitsCenter(true);
  };

  if (showCoCreationContent) return <CoCreationContentView onBack={() => setShowCoCreationContent(false)} />;
  if (showOrders) return <OrderListView onBack={() => setShowOrders(false)} />;
  if (showTastingOfficer) {
    return (
      <TastingOfficerView
        initialView={tastingOfficerInitialView}
        onBack={() => setShowTastingOfficer(false)}
      />
    );
  }
  if (showMyContent) return <MyContentView onBack={() => setShowMyContent(false)} />;
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
  if (showConsultations) return <ConsultationView onBack={() => setShowConsultations(false)} />;
  if (showFavorites) return <FavoritesView onBack={() => setShowFavorites(false)} />;
  if (showInvite) return <InviteView onBack={() => setShowInvite(false)} />;
  if (showService) return <ServiceView onBack={() => setShowService(false)} />;
  if (showCoBuilderApply) return <CoBuilderApplyView onBack={() => setShowCoBuilderApply(false)} />;

  const renderSortableModule = (key: SortableModuleKey, index: number) => {
    const label = moduleLabels[key];
    const canMoveUp = index > 0;
    const canMoveDown = index < moduleOrder.length - 1;

    switch (key) {

      case 'life':
        return (
          <section key={key}>
            <SectionHeader
              eyebrow={label.eyebrow}
              title={label.title}
              isEditMode={isEditMode}
              canMoveUp={canMoveUp}
              canMoveDown={canMoveDown}
              onMoveUp={() => moveModule(index, 'up')}
              onMoveDown={() => moveModule(index, 'down')}
            />
            <div className="grid grid-cols-4 gap-2 mb-3">
              <QuickGridItem icon={ShoppingBag} label="订单" badge="3" onClick={() => setShowOrders(true)} />
              <QuickGridItem icon={Heart} label="收藏" onClick={() => setShowFavorites(true)} />
              <QuickGridItem icon={MapPin} label="打卡" badge="新" onClick={handleIdentityCode} />
              <QuickGridItem icon={Gift} label="送礼" onClick={() => setShowInvite(true)} />
            </div>
            <div className="space-y-2">
              <ListItem
                icon={BookOpenText}
                label="我的内容"
                desc="4篇手记 · 8个追问 · 12个收藏"
                onClick={() => setShowMyContent(true)}
              />
              <ListItem
                icon={Zap}
                label="节省记录"
                desc="本月累计回流 ¥680"
                onClick={() => setShowEnergy(true)}
              />
              <ListItem
                icon={MessageSquare}
                label="咨询记录"
                desc="2个进行中"
                onClick={() => setShowConsultations(true)}
              />
            </div>
          </section>
        );

      case 'family':
        return (
          <section key={key}>
            <SectionHeader
              eyebrow={label.eyebrow}
              title={label.title}
              isEditMode={isEditMode}
              canMoveUp={canMoveUp}
              canMoveDown={canMoveDown}
              onMoveUp={() => moveModule(index, 'up')}
              onMoveDown={() => moveModule(index, 'down')}
            />
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm mb-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <Users size={14} className="text-stone-700" />
                    <span className="text-[10px] tracking-[0.18em] text-stone-400">家庭协同</span>
                  </div>
                  <h4 className="mt-2 text-base font-serif text-stone-900">2位家人已加入</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
                    家人可以一起使用，也各自保留边界
                  </p>
                </div>
                <div className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-[10px] text-amber-700 shrink-0">
                  运行中
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-stone-50 p-3">
                  <div className="text-[10px] text-stone-400">成员</div>
                  <div className="mt-1 text-sm font-medium text-stone-900">2位</div>
                </div>
                <div className="rounded-xl bg-stone-50 p-3">
                  <div className="text-[10px] text-stone-400">本周协同</div>
                  <div className="mt-1 text-sm font-medium text-stone-900">2单</div>
                </div>
                <div className="rounded-xl bg-amber-50 p-3 border border-amber-100">
                  <div className="text-[10px] text-amber-600">待确认</div>
                  <div className="mt-1 text-sm font-medium text-amber-800">1位</div>
                </div>
              </div>
            </div>
            <ListItem icon={UserCheck} label="邀请好友" desc="邀请好友加入，共享品质生活" onClick={() => setShowInvite(true)} />
          </section>
        );

      case 'workbench':
        return (
          <section key={key}>
            <SectionHeader
              eyebrow={label.eyebrow}
              title={label.title}
              isEditMode={isEditMode}
              canMoveUp={canMoveUp}
              canMoveDown={canMoveDown}
              onMoveUp={() => moveModule(index, 'up')}
              onMoveDown={() => moveModule(index, 'down')}
            />
            <div className="space-y-3">
              <WorkspaceCard
                icon={Star}
                title="品鉴工作台"
                status="试用、反馈、内容、选品与审核进度"
                badge="高级品鉴官"
                tone="soft"
                onClick={() => {
                  setTastingOfficerInitialView('workbench');
                  setShowTastingOfficer(true);
                }}
              />
              <div className="grid grid-cols-2 gap-3">
                <WorkspaceCard
                  icon={PenTool}
                  title="内容共建"
                  status="4篇已发布"
                  onClick={() => setShowCoCreationContent(true)}
                />
                <WorkspaceCard
                  icon={Award}
                  title="共建者申请"
                  status="资格审核中"
                  badge="待处理"
                  tone="warm"
                  onClick={() => setShowCoBuilderApply(true)}
                />
              </div>
              <ListItem icon={Store} label="商家工作台" desc="商家入驻后可在这里管理核销与店铺" onClick={() => {
                toast.info('商家工作台将在您入驻商家后开放');
              }} />
            </div>
          </section>
        );

      case 'settings':
        return (
          <section key={key} className="pb-2">
            <SectionHeader
              eyebrow={label.eyebrow}
              title={label.title}
              isEditMode={isEditMode}
              canMoveUp={canMoveUp}
              canMoveDown={canMoveDown}
              onMoveUp={() => moveModule(index, 'up')}
              onMoveDown={() => moveModule(index, 'down')}
            />
            <div className="space-y-2">
              <ListItem
                icon={Settings}
                label="设置与隐私"
                desc="账户、通知、家庭授权管理"
                onClick={() => toast.info('设置功能开发中')}
              />
              <ListItem icon={HelpCircle} label="帮助与客服" desc="Eva 正在为您服务" onClick={() => setShowService(true)} />
              <ListItem icon={FileText} label="规则与协议" desc="会员协议、隐私政策" onClick={() => toast.info('规则文档开发中')} />
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      <div className="h-36 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-stone-700 rounded-full translate-y-1/2 -translate-x-1/3 opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-center text-stone-400">
          <div className="w-10"></div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                if (isEditMode) {
                  setIsEditMode(false);
                  toast.success('排序已保存');
                } else {
                  setIsEditMode(true);
                }
              }}
              className="text-sm flex items-center space-x-1 px-3 py-1.5 rounded-full hover:bg-stone-800 transition-colors"
            >
              {isEditMode ? (
                <>
                  <Check size={14} className="text-amber-300" />
                  <span className="text-amber-100">完成</span>
                </>
              ) : (
                <span className="text-stone-300">编辑排序</span>
              )}
            </button>
            <button onClick={handleSharePoster}>
              <Share2 size={18} />
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
              <Bell size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-12">
        {/* 身份模块 - 固定在顶部，不可排序 */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden mb-7">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-amber-50 rounded-full opacity-50 blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-stone-200 border-2 border-amber-100 shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1734669578513-cdd2b4c35ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-xl font-serif text-stone-900">Lawren</h2>
                    <div
                      onClick={() => {
                        setTastingOfficerInitialView('growth');
                        setShowTastingOfficer(true);
                      }}
                      className="px-[10px] py-[4px] bg-stone-900 rounded-full flex items-center space-x-1 shadow-sm border border-stone-800 cursor-pointer hover:bg-stone-800 transition-colors"
                    >
                      <ShieldCheck size={10} className="text-amber-300" />
                      <span className="text-[10px] font-medium text-amber-100 tracking-wide font-serif">高级品鉴官</span>
                    </div>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-stone-400">
                    <span>ID: 88001</span>
                    <span className="h-3 w-px bg-stone-200"></span>
                    <span>年度会员至 2026.12.01</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-stone-950 p-5 mb-4 text-stone-50 shadow-xl border border-stone-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.25),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-[10px] tracking-[0.24em] text-amber-200/80">PINHUOGUAN BLACK</div>
                      <div className="mt-2 text-2xl font-serif text-amber-50">年度尊享会员</div>
                    </div>
                    <div className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[10px] text-amber-100">
                      No. 88001
                    </div>
                  </div>

                  <div className="mb-5 grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-[10px] text-stone-400">有效期</div>
                      <div className="mt-1 text-xs text-stone-100">2026.12.01</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-400">专属管家</div>
                      <div className="mt-1 text-xs text-stone-100">Eva</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-400">权益余额</div>
                      <div className="mt-1 text-xs text-amber-100">3 项可用</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="rounded-xl bg-white/10 p-2.5 text-center">
                      <div className="text-[10px] text-stone-400">线下权益</div>
                      <div className="mt-1 text-sm font-serif text-amber-50">2 家</div>
                    </div>
                    <div className="rounded-xl bg-white/10 p-2.5 text-center">
                      <div className="text-[10px] text-stone-400">专属服务</div>
                      <div className="mt-1 text-sm font-serif text-amber-50">1 次</div>
                    </div>
                    <div className="rounded-xl bg-amber-300/10 p-2.5 text-center border border-amber-300/20">
                      <div className="text-[10px] text-amber-200">即将到期</div>
                      <div className="mt-1 text-sm font-serif text-amber-50">3 天</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleIdentityCode}
                      className="flex-1 rounded-xl bg-amber-100 px-4 py-3 text-sm font-medium text-stone-950 transition-colors hover:bg-amber-50 flex items-center justify-center space-x-2"
                    >
                      <Zap size={16} />
                      <span>出示身份码</span>
                    </button>
                    <button
                      onClick={handleRightsHint}
                      className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-white/15 flex items-center justify-center space-x-2"
                    >
                      <Ticket size={16} />
                      <span>我的权益</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[10px] tracking-[0.18em] text-stone-400">生态贡献值</div>
                    <div className="mt-1 text-sm text-stone-600">身份成长状态</div>
                  </div>
                  <button
                    onClick={() => {
                      setTastingOfficerInitialView('growth');
                      setShowTastingOfficer(true);
                    }}
                    className="text-[10px] text-amber-700 flex items-center"
                  >
                    成长路径 <ChevronRight size={12} />
                  </button>
                </div>
                <div className="flex items-end justify-between mb-2">
                  <div className="text-2xl font-serif text-stone-900">842</div>
                  <div className="text-[10px] text-stone-400">距下一等级还差 158</div>
                </div>
                <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-300 to-amber-600 rounded-full" style={{ width: '84%' }}></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 可排序模块 */}
        <div className="space-y-7">
          {moduleOrder.map((key, index) => renderSortableModule(key, index))}

          {isEditMode && (
            <button
              onClick={resetOrder}
              className="w-full py-3 text-center text-xs text-stone-400 hover:text-stone-600 transition-colors"
            >
              恢复默认排序
            </button>
          )}
        </div>
      </div>
      {showIdentityCode && <IdentityCodeOverlay onClose={() => setShowIdentityCode(false)} />}
      {showBenefitsCenter && (
        <BenefitsCenterOverlay
          onClose={() => setShowBenefitsCenter(false)}
          onUseCode={handleIdentityCode}
        />
      )}
    </div>
  );
}
