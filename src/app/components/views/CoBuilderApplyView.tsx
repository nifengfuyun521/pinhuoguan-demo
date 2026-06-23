import { ArrowLeft, ShieldCheck, Sparkles, CheckCircle, ArrowRight, Briefcase, Users, Gem, Rocket } from 'lucide-react';
import { Button } from '../ui/button';

interface CoBuilderApplyViewProps {
  onBack: () => void;
}

export function CoBuilderApplyView({ onBack }: CoBuilderApplyViewProps) {
  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-40">
      {/* Header */}
      <div className="bg-stone-900 text-white p-6 pt-12 pb-16 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-stone-700 rounded-full translate-y-1/2 -translate-x-1/3 opacity-20"></div>
        
        <div className="relative z-10">
          <button 
            onClick={onBack}
            className="mb-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex items-center space-x-2 mb-2">
             <Sparkles size={16} className="text-amber-400" />
             <span className="text-amber-200 text-xs font-medium tracking-wider uppercase">Limited Access</span>
          </div>
          <h1 className="text-3xl font-serif mb-2">共建者计划</h1>
          <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
            不仅是身份的象征，更是生活方式创业的起点。依托平台供应链与流量，开启您的商业版图。
          </p>
        </div>
      </div>

      {/* Qualification Status */}
      <div className="px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-amber-100/50">
           <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-serif text-stone-900">合伙人资格审核</h2>
              <div className="px-3 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-medium flex items-center space-x-1">
                 <CheckCircle size={12} />
                 <span>已达标</span>
              </div>
           </div>
           
           <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                 <span className="text-stone-500">社交资本 (影响力)</span>
                 <div className="flex items-center space-x-2">
                    <span className="text-stone-900 font-medium">842</span>
                    <span className="text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">目标 800</span>
                 </div>
              </div>
              <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                 <div className="h-full bg-amber-500 w-full rounded-full"></div>
              </div>
              
              <div className="flex items-center justify-between text-sm mt-4">
                 <span className="text-stone-500">活跃动能 (执行力)</span>
                 <div className="flex items-center space-x-2">
                    <span className="text-stone-900 font-medium">1,240</span>
                    <span className="text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">目标 1,000</span>
                 </div>
              </div>
              <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                 <div className="h-full bg-amber-500 w-full rounded-full"></div>
              </div>
           </div>
        </div>
      </div>

      {/* Entrepreneurial Support */}
      <div className="px-6 mt-8">
         <h3 className="text-lg font-serif text-stone-900 mb-4">创业扶持权益</h3>
         <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
               <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <Rocket size={16} className="text-blue-600" />
               </div>
               <div className="font-medium text-stone-900 text-sm mb-1">品牌孵化</div>
               <div className="text-xs text-stone-500">0成本创立个人生活品牌，共享平台供应链。</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
               <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mb-3">
                  <Gem size={16} className="text-amber-600" />
               </div>
               <div className="font-medium text-stone-900 text-sm mb-1">流量注资</div>
               <div className="text-xs text-stone-500">平台为您的优选内容提供精准高净值流量。</div>
            </div>
             <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
               <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mb-3">
                  <Users size={16} className="text-purple-600" />
               </div>
               <div className="font-medium text-stone-900 text-sm mb-1">高端人脉</div>
               <div className="text-xs text-stone-500">进入核心共建者社群，链接顶级商业资源。</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
               <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mb-3">
                  <Briefcase size={16} className="text-green-600" />
               </div>
               <div className="font-medium text-stone-900 text-sm mb-1">经营分红</div>
               <div className="text-xs text-stone-500">获得平台季度经营利润分配及期权激励。</div>
            </div>
         </div>
      </div>

      {/* Action - Fixed above Bottom Nav */}
      <div className="fixed bottom-24 left-6 right-6 z-30">
         <Button className="w-full bg-stone-900 text-amber-50 hover:bg-stone-800 h-12 rounded-xl font-medium text-base flex items-center justify-center space-x-2 shadow-xl shadow-stone-900/20">
            <span>申请开启共创事业</span>
            <ArrowRight size={16} />
         </Button>
      </div>
    </div>
  );
}
