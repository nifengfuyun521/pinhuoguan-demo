import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  MessageCircle,
  Share2,
  User,
  ChevronRight,
  ShoppingBag,
  ShoppingCart,
  Star,
  ThumbsUp,
  Award,
} from "lucide-react";

import { CheckoutOverlay } from "./CheckoutOverlay";
import { ShareOverlay } from "./ShareOverlay";

interface ProductDetailProps {
  product: any;
  onClose: () => void;
}

export function ProductDetail({
  product,
  onClose,
}: ProductDetailProps) {
  const [showCheckout, setShowCheckout] = React.useState(false);
  const [showShare, setShowShare] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'details' | 'value'>('details');

  if (!product) return null;

  // Mock Value Certifications
  const certifications = [
    {
      user: "林先生",
      level: "Lv.4",
      avatar: "https://i.pravatar.cc/150?u=1",
      tags: ["#解决办公久坐", "#场景契合"],
      content: "这把椅子完全改变了我的午休体验。不同于普通的人体工学椅，它的支撑感非常微妙，就像有一双手托着你的腰。",
      helpful: 328
    },
    {
      user: "Sarah Wu",
      level: "Lv.3",
      avatar: "https://i.pravatar.cc/150?u=2",
      tags: ["#东方美学", "#材质细腻"],
      content: "实物的质感比图片更好。放在茶室里，那种静谧的气场一下就出来了。",
      helpful: 156
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
      }}
      className="fixed inset-0 z-[60] bg-stone-50 flex flex-col"
    >
      <AnimatePresence>
        {showCheckout && (
          <CheckoutOverlay
            product={product}
            onClose={() => setShowCheckout(false)}
          />
        )}
        {showShare && (
          <ShareOverlay
            product={product}
            onClose={() => setShowShare(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <button
          onClick={onClose}
          className="w-10 h-10 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/20 transition-colors"
        >
          <X size={20} />
        </button>
        <div className="flex space-x-2">
          <button 
            onClick={() => setShowShare(true)}
            className="w-10 h-10 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/20 transition-colors"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-[45vh] relative shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-stone-50 via-stone-50/60 to-transparent"></div>
        <div className="absolute bottom-8 left-6 right-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-0.5 bg-stone-900/10 backdrop-blur-sm border border-stone-900/10 text-[10px] rounded text-stone-900 font-medium uppercase tracking-wider">
              {product.category || "精选"}
            </span>
            {product.tag && (
              <span className="px-2 py-0.5 bg-amber-900/10 backdrop-blur-sm border border-amber-900/10 text-[10px] rounded text-amber-900 font-medium uppercase tracking-wider">
                {product.tag}
              </span>
            )}
          </div>
          <h2 className="text-3xl font-serif text-stone-900 mb-2">
            {product.title}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-stone-50 relative px-6 pb-8">
        {/* Price & Status */}
        <div className="flex items-end justify-between mb-6 pb-6 border-b border-stone-200">
          <div>
            <p className="text-xs text-amber-800 mb-1 font-medium tracking-wide">
              高级品鉴官专享价
            </p>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-serif text-stone-900">
                {product.price}
              </span>
              <span className="text-xs text-stone-400 line-through">
                原价 ¥
                {parseInt(product.price.replace(/\D/g, "")) *
                  1.2}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            <span className="text-xs text-stone-500">
              仅剩 3 件
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 mb-8 border-b border-stone-100">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'details' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            商品详情
            {activeTab === 'details' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('value')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'value' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            价值认证
            {activeTab === 'value' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
              />
            )}
          </button>
        </div>

        {/* Product Details Tab */}
        {activeTab === 'details' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10 mb-12"
          >
            {/* 1. Selection Reason */}
            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/50 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              <h3 className="text-xs font-bold text-amber-900/70 uppercase tracking-widest mb-4 relative z-10">
                品货官甄选理由
              </h3>
              <p className="text-sm text-amber-950 leading-relaxed font-serif italic relative z-10">
                "{product.selectionReason}"
              </p>
            </div>

            {/* 2. Quality Points */}
            {product.qualityPoints && (
              <div>
                <h3 className="text-lg font-serif text-stone-900 mb-4">
                  品质亮点
                </h3>
                <ul className="space-y-4">
                  {product.qualityPoints.map(
                    (point: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-stone-100"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 shrink-0"></div>
                        <span className="text-sm text-stone-700 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* 3. Behind the Story */}
            {product.story && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-serif text-stone-900">
                    背后的故事
                  </h3>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                  {/* Story Header */}
                  <div className="p-6 pb-2">
                    <h4 className="text-lg font-medium text-stone-900 mb-4 font-serif">
                      {product.story.title}
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed text-justify mb-6">
                      {product.story.content}
                    </p>
                  </div>

                  {/* Curator */}
                  {product.story.curator && (
                    <div className="px-6 pb-6 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden shrink-0 border-2 border-white shadow-sm">
                        <img
                          src={product.story.curator.avatar}
                          className="w-full h-full object-cover"
                          alt="Curator"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">
                          {product.story.curator.name}
                        </p>
                        <p className="text-[10px] text-stone-500 uppercase tracking-wider">
                          {product.story.curator.title}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Detail Image in Story */}
                  <div className="h-64 bg-stone-200 relative group overflow-hidden">
                    <img
                      src={product.image}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt="Detail"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500"></div>
                  </div>

                  {/* Process & Moment */}
                  {(product.story.process ||
                    product.story.moment) && (
                    <div className="p-6 space-y-6 bg-stone-50/50">
                      {product.story.process && (
                        <div>
                          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">
                            CRAFTSMANSHIP
                          </span>
                          <h5 className="text-sm font-bold text-stone-900 mb-2">
                            匠心工艺
                          </h5>
                          <p className="text-sm text-stone-600 leading-relaxed text-justify">
                            {product.story.process}
                          </p>
                        </div>
                      )}
                      {product.story.moment && (
                        <div>
                          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">
                            MOMENT
                          </span>
                          <h5 className="text-sm font-bold text-stone-900 mb-2">
                            推荐场景
                          </h5>
                          <div className="pl-4 border-l-2 border-stone-300">
                            <p className="text-sm text-stone-600 leading-relaxed text-justify italic font-serif">
                              "{product.story.moment}"
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. Product Details Gallery (Moved Here) */}
            {product.gallery && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif text-stone-900">
                    商品细节图
                  </h3>
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest">
                    DETAILS
                  </span>
                </div>
                <div className="space-y-8">
                  {product.gallery.map(
                    (item: any, index: number) => (
                      <div key={index} className="group">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-stone-100">
                          <img
                            src={item.url}
                            alt={item.caption}
                            className="w-full h-auto object-cover block"
                          />
                        </div>
                        <div className="mt-3 flex items-center justify-center">
                          <span className="h-px w-8 bg-stone-200"></span>
                          <p className="mx-3 text-xs text-stone-500 font-serif italic">
                            {item.caption}
                          </p>
                          <span className="h-px w-8 bg-stone-200"></span>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* 5. Specifications */}
            {product.specifications && (
              <div className="mb-12">
                <h3 className="text-lg font-serif text-stone-900 mb-4">
                  产品详细参数
                </h3>
                <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
                  {product.specifications.map(
                    (spec: any, index: number) => (
                      <div
                        key={index}
                        className={`flex justify-between py-3 px-4 ${
                          index !==
                          product.specifications.length - 1
                            ? "border-b border-stone-100"
                            : ""
                        }`}
                      >
                        <span className="text-sm text-stone-500">
                          {spec.label}
                        </span>
                        <span className="text-sm text-stone-900 font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Value Certification Tab */}
        {activeTab === 'value' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
             <div className="flex items-center justify-between mb-6">
               <div>
                 <h3 className="text-lg font-serif text-stone-900">价值认证</h3>
                 <p className="text-[10px] text-stone-500">SOCIAL CAPITAL</p>
               </div>
               <button className="text-xs text-amber-700 font-medium border border-amber-200 bg-amber-50 px-3 py-1.5 rounded-full">
                 发布认证 +50 生态贡献值
               </button>
             </div>

             <div className="space-y-4">
               {certifications.map((cert, idx) => (
                 <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-stone-100 relative overflow-hidden">
                    {/* Top Row */}
                    <div className="flex justify-between items-start mb-3">
                       <div className="flex items-center space-x-2">
                          <img src={cert.avatar} className="w-8 h-8 rounded-full bg-stone-200" alt={cert.user} />
                          <div>
                             <div className="flex items-center space-x-1">
                               <span className="text-sm font-medium text-stone-900">{cert.user}</span>
                               <span className="text-[10px] bg-stone-900 text-amber-400 px-1.5 py-0.5 rounded flex items-center">
                                 <Award size={8} className="mr-0.5" /> {cert.level}
                               </span>
                             </div>
                          </div>
                       </div>
                       <div className="flex items-center text-stone-400 text-xs">
                          <ThumbsUp size={14} className="mr-1" />
                          <span>{cert.helpful} 认可</span>
                       </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                       {cert.tags.map((tag, i) => (
                         <span key={i} className="text-[10px] text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-100">
                           {tag}
                         </span>
                       ))}
                    </div>

                    {/* Content */}
                    <p className="text-sm text-stone-600 leading-relaxed mb-3">
                      "{cert.content}"
                    </p>
                 </div>
               ))}
             </div>
             
             <div className="mt-4 text-center">
               <button className="text-xs text-stone-400 hover:text-stone-600 flex items-center justify-center w-full py-2">
                 查看全部 128 条认证 <ChevronRight size={14} />
               </button>
             </div>
          </motion.div>
        )}
      </div>

      {/* Action Bar */}
      <div className="bg-white border-t border-stone-200 px-4 py-3 pb-safe z-20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-4 pl-2 pr-1">
             <button className="flex flex-col items-center justify-center text-stone-400 hover:text-amber-600 transition-colors">
               <MessageCircle size={20} className="mb-1" />
               <span className="text-[10px]">客服</span>
             </button>
             <button className="flex flex-col items-center justify-center text-stone-400 hover:text-amber-600 transition-colors">
               <ShoppingCart size={20} className="mb-1" />
               <span className="text-[10px]">购物车</span>
             </button>
          </div>
          
          <div className="flex-1 flex space-x-2">
            <button
              onClick={() => window.alert("已加入购物车")}
              className="flex-1 bg-stone-100 text-stone-800 rounded-full py-2.5 flex items-center justify-center font-medium hover:bg-stone-200 transition-colors"
            >
              <span className="text-sm tracking-wider">加入购物车</span>
            </button>
            <button
              onClick={() => setShowCheckout(true)}
              className="flex-1 bg-stone-900 text-amber-50 rounded-full py-2.5 flex items-center justify-center font-medium hover:bg-stone-800 transition-colors shadow-lg"
            >
              <span className="text-sm tracking-wider">立即购买</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}