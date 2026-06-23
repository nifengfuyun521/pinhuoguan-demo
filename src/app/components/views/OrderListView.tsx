import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Package, Truck, CheckCircle, Clock, ChevronRight, ShoppingBag } from 'lucide-react';

interface OrderListViewProps {
  onBack: () => void;
}

const orders = [
  {
    id: "ORD-20251201-8801",
    date: "2025-12-01 14:23",
    status: "pending_payment",
    total: "¥1,680",
    items: [
      {
        name: "珍稀白松露精华油",
        image: "https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRydWZmbGUlMjBvaWwlMjBib3R0bGUlMjBsdXh1cnklMjBjb3NtZXRpYyUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY0NTczMjAwfDA&ixlib=rb-4.1.0&q=80&w=200",
        count: 1
      }
    ]
  },
  {
    id: "ORD-20251128-7632",
    date: "2025-11-28 09:15",
    status: "shipping",
    total: "¥3,600",
    items: [
      {
        name: "苏绣 · 双面绣团扇",
        image: "https://images.unsplash.com/photo-1657470036063-c7e49da31393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNoaW5lc2UlMjBlbWJyb2lkZXJ5JTIwZmFuJTIwc2lsa3xlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=200",
        count: 1
      }
    ]
  },
  {
    id: "ORD-20251115-5521",
    date: "2025-11-15 18:30",
    status: "completed",
    total: "¥560",
    items: [
      {
        name: "6年根红参切片",
        image: "https://images.unsplash.com/photo-1735815814303-0560d30455eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMHJlZCUyMGdpbnNlbmclMjByb290cyUyMHNsaWNlc3xlbnwxfHx8fDE3NjQ1NjY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=200",
        count: 2
      }
    ]
  }
];

const statusMap: Record<string, { label: string, color: string, icon: any }> = {
  pending_payment: { label: "待付款", color: "text-amber-600", icon: Clock },
  shipping: { label: "运输中", color: "text-blue-600", icon: Truck },
  completed: { label: "已完成", color: "text-green-600", icon: CheckCircle },
};

export function OrderListView({ onBack }: OrderListViewProps) {
  const [activeTab, setActiveTab] = React.useState('all');

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(o => o.status === activeTab);

  return (
    <div className="min-h-screen bg-stone-50 pb-safe">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-20 border-b border-stone-100 shadow-sm">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-serif text-stone-900">我的订单</h1>
        <div className="w-10"></div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between px-6 bg-white border-b border-stone-100 overflow-x-auto hide-scrollbar">
        {[
          { id: 'all', label: '全部' },
          { id: 'pending_payment', label: '待付款' },
          { id: 'shipping', label: '待收货' },
          { id: 'completed', label: '已完成' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 text-sm font-medium relative whitespace-nowrap transition-colors px-2 ${
              activeTab === tab.id ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeOrderTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
              />
            )}
          </button>
        ))}
      </div>

      {/* Order List */}
      <div className="p-6 space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400">
             <ShoppingBag size={48} strokeWidth={1} className="mb-4 opacity-50" />
             <p className="text-sm">暂无相关订单</p>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const StatusIcon = statusMap[order.status].icon;
            return (
              <div key={order.id} className="bg-white rounded-xl p-5 shadow-sm border border-stone-100">
                {/* Order Header */}
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-stone-50">
                   <span className="text-xs text-stone-400 font-mono">{order.date}</span>
                   <div className={`flex items-center space-x-1 text-xs font-medium ${statusMap[order.status].color}`}>
                      <StatusIcon size={12} />
                      <span>{statusMap[order.status].label}</span>
                   </div>
                </div>

                {/* Order Items */}
                <div className="space-y-3 mb-4">
                   {order.items.map((item, idx) => (
                     <div key={idx} className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                           <h4 className="text-sm text-stone-900 font-serif line-clamp-2">{item.name}</h4>
                           <p className="text-xs text-stone-500 mt-1">x{item.count}</p>
                        </div>
                     </div>
                   ))}
                </div>

                {/* Order Footer */}
                <div className="flex items-center justify-between pt-2">
                   <div className="text-sm text-stone-900">
                      <span className="text-xs text-stone-500 mr-2">实付</span>
                      <span className="font-medium font-serif">{order.total}</span>
                   </div>
                   <div className="flex space-x-2">
                      {order.status === 'pending_payment' && (
                        <button className="px-3 py-1.5 bg-stone-900 text-stone-50 text-xs rounded-full hover:bg-stone-800 transition-colors">
                           立即支付
                        </button>
                      )}
                      {order.status === 'shipping' && (
                        <button className="px-3 py-1.5 border border-stone-200 text-stone-600 text-xs rounded-full hover:bg-stone-50 transition-colors">
                           查看物流
                        </button>
                      )}
                      {order.status === 'completed' && (
                        <button className="px-3 py-1.5 border border-stone-200 text-stone-600 text-xs rounded-full hover:bg-stone-50 transition-colors">
                           申请售后
                        </button>
                      )}
                      <button className="px-3 py-1.5 text-stone-400 text-xs hover:text-stone-600 transition-colors">
                         详情
                      </button>
                   </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}