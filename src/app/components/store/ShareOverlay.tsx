import React from 'react';
import { motion } from 'motion/react';
import { X, Share2, CheckCircle, Globe, Send } from 'lucide-react';

interface ShareOverlayProps {
  product: any;
  onClose: () => void;
}

export function ShareOverlay({ product, onClose }: ShareOverlayProps) {
  const [shared, setShared] = React.useState(false);

  const handleShare = () => {
    setShared(true);
    setTimeout(() => {
       // In a real app, this would trigger the native share sheet
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-sm bg-stone-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-20 text-stone-400 hover:text-white">
          <X size={20} />
        </button>

        {!shared ? (
          <div className="p-6">
            <div className="text-center mb-8">
              <h2 className="text-xl font-serif text-amber-100 mb-2">分享即投资</h2>
              <p className="text-xs text-stone-400 leading-relaxed">
                本次分享预计可获 <span className="text-amber-400 font-bold">50 生态贡献值</span><br/>
                并为您开启该产品的社交网络长期收益权限
              </p>
            </div>

            {/* The "Value Poster" Preview */}
            <div className="bg-stone-800 rounded-xl overflow-hidden mb-8 relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="aspect-[4/5] relative">
                 <img src={product.image} className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Share" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 
                 <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                   <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-stone-900 font-bold text-xs">
                        Lv.4
                      </div>
                      <span className="text-xs text-white font-medium">品货官 · 林先生</span>
                   </div>
                   <div className="mb-3">
                     <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                        #解决办公久坐疲劳
                     </span>
                   </div>
                   <p className="text-sm font-serif text-white italic leading-relaxed mb-4">
                     "{product.selectionReason}"
                   </p>
                   <div className="border-t border-white/20 pt-3 flex justify-between items-center">
                      <span className="text-[10px] text-stone-300 tracking-widest uppercase">PIN HUO GUAN</span>
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" className="w-10 h-10 bg-white p-0.5 rounded" alt="QR" />
                   </div>
                 </div>
               </div>
            </div>

            <button 
              onClick={handleShare}
              className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full flex items-center justify-center space-x-2 transition-colors font-medium tracking-wide"
            >
              <Send size={16} />
              <span>生成价值海报并分享</span>
            </button>
          </div>
        ) : (
          <div className="p-12 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400"
            >
              <CheckCircle size={40} />
            </motion.div>
            <h3 className="text-xl font-serif text-white mb-3">已接入价值网络</h3>
            <p className="text-sm text-stone-400 leading-relaxed mb-8">
              您的价值海报已生成。<br/>
              当好友通过海报完成互动，<br/>
              您将获得「生态贡献值」奖励并提升圈层影响力。
            </p>
            <button onClick={onClose} className="text-xs text-stone-500 hover:text-stone-300 uppercase tracking-widest">
              返回详情页
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
