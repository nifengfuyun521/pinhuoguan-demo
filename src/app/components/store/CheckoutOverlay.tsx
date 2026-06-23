import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, CreditCard, Check, ShieldCheck, ChevronRight, Loader2 } from 'lucide-react';

interface CheckoutOverlayProps {
  product: any;
  onClose: () => void;
}

export function CheckoutOverlay({ product, onClose }: CheckoutOverlayProps) {
  const [step, setStep] = useState<'confirm' | 'payment' | 'success'>('confirm');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="bg-stone-50 w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-white">
          <h3 className="font-serif text-stone-900 text-lg">
            {step === 'success' ? '下单成功' : '确认订单'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
            <X size={20} className="text-stone-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {step === 'confirm' && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Address Card */}
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2 text-stone-900 font-medium">
                      <MapPin size={16} />
                      <span>配送至</span>
                    </div>
                    <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">默认</span>
                  </div>
                  <div className="pl-6">
                    <p className="text-stone-800 font-medium">王先生 <span className="text-stone-400 text-sm font-normal ml-2">138****8888</span></p>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">浙江省 杭州市 西湖区 灵隐街道<br/>青芝坞 88号 (品货官·杭州会馆)</p>
                  </div>
                  <div className="mt-3 pl-6 flex items-center text-[10px] text-stone-400">
                    <ShieldCheck size={12} className="mr-1 text-green-600" />
                    顺丰包邮 · 破损包赔
                  </div>
                </div>

                {/* Product Summary */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-stone-200 rounded-lg overflow-hidden shrink-0 border border-stone-100">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-stone-900 font-medium">{product.title}</h4>
                      <p className="text-xs text-stone-500 mt-1">{product.category} · 现货</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-serif text-lg text-stone-900">{product.price}</span>
                      <span className="text-xs text-stone-400">x 1</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-stone-900">支付方式</h4>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-stone-400 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#07C160] rounded flex items-center justify-center text-white">
                          <CreditCard size={16} />
                        </div>
                        <span className="text-sm text-stone-700">微信支付</span>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-stone-900 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-stone-900"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between p-3 bg-white border border-stone-100 rounded-lg opacity-60 cursor-not-allowed">
                       <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#1677FF] rounded flex items-center justify-center text-white">
                          <CreditCard size={16} />
                        </div>
                        <span className="text-sm text-stone-700">支付宝</span>
                      </div>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2">下单成功</h3>
                <p className="text-stone-500 text-sm mb-8 px-8">
                  感谢信任。客服会在10分钟内确认订单并安排发货。
                </p>
                
                <div className="w-full bg-white border border-stone-100 rounded-xl p-4 mb-6 text-left">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-500">订单编号</span>
                    <span className="font-mono text-stone-900">ORD-2025-1201-X99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">实付金额</span>
                    <span className="font-serif text-stone-900">{product.price}</span>
                  </div>
                </div>

                <button 
                  onClick={onClose}
                  className="w-full py-3 bg-stone-100 text-stone-900 rounded-lg font-medium hover:bg-stone-200 transition-colors"
                >
                  返回商城
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Action */}
        {step === 'confirm' && (
          <div className="p-4 bg-white border-t border-stone-200 pb-safe">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-stone-500">合计</span>
              <div className="text-right">
                <span className="text-xs text-red-800 mr-1">会员价</span>
                <span className="text-2xl font-serif text-stone-900">{product.price}</span>
              </div>
            </div>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-stone-900 text-stone-50 py-3.5 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-stone-800 active:scale-[0.98] transition-all"
            >
              {isProcessing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>安全支付中...</span>
                </>
              ) : (
                <>
                  <span>确认支付</span>
                  <ChevronRight size={16} />
                </>
              )}
            </button>
            <div className="mt-3 text-center">
              <p className="text-[10px] text-stone-400 flex items-center justify-center">
                <ShieldCheck size={10} className="mr-1" />
                正品保证 · 售后无忧
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
