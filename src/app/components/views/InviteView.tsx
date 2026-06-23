import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Share2, ShieldCheck, Crown, Ticket, Gift } from 'lucide-react';

interface InviteViewProps {
  onBack: () => void;
}

export function InviteView({ onBack }: InviteViewProps) {
  const [copied, setCopied] = useState(false);
  const inviteCode = "VIP-8888";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareableEvents = [
    {
      id: 1,
      title: "枯山水·大师工坊",
      date: "12.24",
      type: "线下体验",
      quota: 2,
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "云端·爵士私享会",
      date: "12.31",
      type: "虚拟入场券",
      quota: 5,
      image: "https://images.unsplash.com/photo-1514525253440-b393452de239?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-sans flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-stone-950/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} className="text-stone-300" />
        </button>
        <span className="ml-4 text-sm font-serif tracking-widest text-stone-200">圈层礼遇</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-12">
        {/* Section 1: Club Invitation */}
        <div className="px-6 py-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10 text-center">
               <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full mb-4 shadow-lg shadow-amber-500/20">
                  <Crown size={24} className="text-stone-900" />
               </div>
               <h2 className="text-xl font-serif text-amber-100 mb-1">「同契会馆」引荐权</h2>
               <p className="text-xs text-stone-400 mb-6 max-w-xs mx-auto leading-relaxed">
                 您拥有的不仅是邀请码，更是甄选同路人的权力。<br/>
                 <span className="text-amber-600/80">受邀人完成首单且留存30天，您将获赠高额生态贡献值。</span>
               </p>

               <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4 backdrop-blur-sm">
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-2">专属邀请码</div>
                  <div className="flex items-center justify-between bg-stone-900 rounded-lg p-3 border border-amber-500/20 group cursor-pointer" onClick={handleCopy}>
                      <span className="font-mono text-xl text-amber-400 tracking-widest">{inviteCode}</span>
                      <div className="flex items-center space-x-2">
                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-stone-500 group-hover:text-amber-400 transition-colors" />}
                      </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] text-stone-500">
                     <span>本月剩余名额</span>
                     <span className="text-amber-500">2 / 5</span>
                  </div>
               </div>

               <button className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center text-xs tracking-wide shadow-lg shadow-amber-900/30">
                 <Share2 size={14} className="mr-2" /> 生成尊享邀请函
               </button>
            </div>
        </div>

        {/* Section 2: Experience Sharing */}
        <div className="px-6 pt-4">
           <div className="flex items-center space-x-2 mb-4">
              <Gift size={16} className="text-amber-500" />
              <h3 className="text-sm font-serif text-stone-200">体验赠予权</h3>
           </div>
           <p className="text-[10px] text-stone-500 mb-4 leading-relaxed">
              下列稀缺体验不公开发售。您可以将您的专属名额赠予好友，使其成为体验者，而您成为资源的分配者。
           </p>

           <div className="space-y-3">
              {shareableEvents.map((event) => (
                <div key={event.id} className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center space-x-4">
                   <div className="w-16 h-16 rounded-lg bg-stone-800 overflow-hidden flex-shrink-0 relative">
                      <img 
                        src={event.id === 1 ? "https://images.unsplash.com/photo-1672758688320-685bb6b36846?q=80&w=400&auto=format&fit=crop" : "https://images.unsplash.com/photo-1755592636734-a7183f469f85?q=80&w=400&auto=format&fit=crop"} 
                        alt={event.title} 
                        className="w-full h-full object-cover opacity-80" 
                      />
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                         <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-stone-300 border border-white/5">{event.type}</span>
                         <span className="text-[10px] text-stone-500">{event.date}</span>
                      </div>
                      <h4 className="text-sm text-stone-200 font-serif truncate">{event.title}</h4>
                      <div className="text-[10px] text-amber-500/80 mt-1 flex items-center">
                         <Ticket size={10} className="mr-1" />
                         剩余 {event.quota} 个赠予名额
                      </div>
                   </div>
                   <button className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-stone-950 transition-colors text-stone-400">
                      <Share2 size={14} />
                   </button>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}