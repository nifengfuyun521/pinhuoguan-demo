import React from 'react';
import { ArrowLeft, Phone, MessageCircle, Clock, MapPin, Star } from 'lucide-react';

interface ServiceViewProps {
  onBack: () => void;
}

export function ServiceView({ onBack }: ServiceViewProps) {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Image */}
      <div className="h-64 relative">
         <img 
           src="https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGNvbmNpZXJnZSUyMGRlc2slMjBhc2lhbiUyMHdvbWFufGVufDF8fHx8MTc2NDU2Nzk5N3ww&ixlib=rb-4.1.0&q=80&w=800" 
           alt="Eva Service" 
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
         <button onClick={onBack} className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors">
            <ArrowLeft size={20} className="text-white" />
         </button>
      </div>

      {/* Profile Card */}
      <div className="px-6 -mt-10 relative z-10">
         <div className="bg-white rounded-xl shadow-xl p-6 text-center border border-stone-100">
            <div className="w-20 h-20 rounded-full bg-stone-100 mx-auto -mt-16 mb-3 border-4 border-white shadow-md overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1675387404357-096f658a53f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZmVtYWxlJTIwcHJvZmVzc2lvbmFsJTIwbWFuYWdlciUyMHBvcnRyYWl0JTIwZWxlZ2FudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDU2Nzk5M3ww&ixlib=rb-4.1.0&q=80&w=200" 
                 alt="Eva" 
                 className="w-full h-full object-cover"
               />
            </div>
            <h2 className="text-xl font-serif text-stone-900 mb-1">Eva Zhang</h2>
            <p className="text-xs text-amber-600 uppercase tracking-wider font-medium mb-4">资深生活管家 · Senior Concierge</p>
            
            <div className="flex justify-center space-x-4 mb-2">
               <button className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Phone size={18} />
               </button>
               <button className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <MessageCircle size={18} />
               </button>
            </div>
         </div>
      </div>

      {/* Details */}
      <div className="p-6 space-y-6">
         <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0">
               <Clock size={20} className="text-stone-400" />
            </div>
            <div>
               <h3 className="text-sm font-medium text-stone-900">服务时间</h3>
               <p className="text-xs text-stone-500 mt-1">24小时全天候响应，平均回复时间 &lt; 5分钟</p>
            </div>
         </div>

         <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0">
               <MapPin size={20} className="text-stone-400" />
            </div>
            <div>
               <h3 className="text-sm font-medium text-stone-900">服务范围</h3>
               <p className="text-xs text-stone-500 mt-1">全球高端行程定制、稀缺资产代购、私人宴会策划</p>
            </div>
         </div>

         <div className="bg-amber-50 rounded-xl p-4 mt-4">
            <div className="flex items-center space-x-2 mb-2">
               <Star size={14} className="text-amber-500 fill-amber-500" />
               <span className="text-xs font-bold text-amber-800">管家寄语</span>
            </div>
            <p className="text-xs text-amber-900/80 leading-relaxed italic font-serif">
               "致力于为您打理好生活中的每一个细节，让您有更多时间享受人生的高光时刻。"
            </p>
         </div>
      </div>
    </div>
  );
}