import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Share2, MessageCircle, MapPin, Star, ChevronRight, Send, User, Navigation, Calendar, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  tag?: string;
}

interface MasterNote {
  id: number;
  title: string;
  cover: string;
  content: {
    source: string;
    heart: string;
    encounter: string;
  };
  master: {
    name: string;
    title: string;
    avatar: string;
    storeName: string;
    storeId: string;
  };
  products?: Product[];
  likes: number;
  comments: number;
  liked: boolean;
  images?: string[];
}

interface MasterNoteDetailProps {
  note: MasterNote;
  onBack: () => void;
  onMasterClick?: (masterId: string) => void;
  onStoreClick?: (storeId: string) => void;
  onProductClick?: (productId: number) => void;
}

export function MasterNoteDetail({ note, onBack, onMasterClick, onStoreClick, onProductClick }: MasterNoteDetailProps) {
  const [liked, setLiked] = useState(note.liked);
  const [likeCount, setLikeCount] = useState(note.likes);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: { name: '林小姐', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60' },
      content: '去店里体验过，主理人真的很用心，每一件器物都有故事。',
      time: '2天前'
    },
    {
      id: 2,
      user: { name: '阿凯', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60' },
      content: '想问下主理人，店里的茶器都是自己设计的吗？',
      time: '1天前'
    }
  ]);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
      toast.success('已表达品味认同');
    }
  };

  const handleShare = () => {
    toast.success(
      <div className="flex flex-col">
        <span className="font-serif font-medium">分享链接已复制</span>
        <span className="text-xs text-stone-500">可分享给同频的朋友</span>
      </div>
    );
  };

  const handleSubmitComment = () => {
    if (!commentText.trim()) return;
    const newComment = {
      id: comments.length + 1,
      user: { name: '我', avatar: '' },
      content: commentText,
      time: '刚刚'
    };
    setComments([newComment, ...comments]);
    setCommentText('');
    toast.success('品味对话已发布');
  };

  const handleMasterClick = () => {
    if (onMasterClick) {
      onMasterClick(note.master.storeId);
    }
  };

  const handleStoreClick = () => {
    if (onStoreClick) {
      onStoreClick(note.master.storeId);
    } else {
      toast.info('即将跳转到店铺页面');
    }
  };

  const handleProductClick = (productId: number) => {
    if (onProductClick) {
      onProductClick(productId);
    } else {
      toast.info('即将跳转到商品详情');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-stone-50 pb-24"
    >
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-md mx-auto flex items-center justify-between px-4 h-14">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-sm font-medium text-stone-900">主理人手记</span>
          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="pt-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={note.cover}
            alt={note.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-[10px] px-2 py-0.5 bg-amber-500/20 backdrop-blur-sm text-amber-200 rounded-full border border-amber-400/30">
                主理人手记
              </span>
            </div>
            <h1 className="text-xl font-serif font-medium leading-snug">{note.title}</h1>
          </div>
        </div>
      </div>

      {/* Master Info */}
      <div className="px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
          <div className="flex items-center">
            <div
              onClick={handleMasterClick}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img src={note.master.avatar} className="w-full h-full object-cover" alt={note.master.name} />
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <div
                onClick={handleMasterClick}
                className="flex items-center space-x-1.5 cursor-pointer hover:opacity-80 transition-opacity w-fit"
              >
                <span className="text-sm font-medium text-stone-900">{note.master.name}</span>
                <Star size={12} className="text-amber-500 fill-amber-500" />
                <ChevronRight size={12} className="text-stone-300" />
              </div>
              <p className="text-xs text-stone-500 mt-0.5">{note.master.title}</p>
            </div>
            <button className="px-4 py-1.5 bg-stone-900 text-amber-50 text-xs font-medium rounded-full hover:bg-stone-800 transition-colors">
              品味认同
            </button>
          </div>
          <div
            onClick={handleStoreClick}
            className="mt-3 pt-3 border-t border-stone-50 flex items-center justify-between cursor-pointer group hover:bg-stone-50/50 -mx-4 px-4 py-2 -mb-2 rounded-b-xl transition-colors"
          >
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-stone-400" />
              <span className="text-xs text-stone-600">{note.master.storeName}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] text-stone-400">查看店铺</span>
              <ChevronRight size={16} className="text-stone-300 group-hover:text-stone-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6">
        {/* 何源 */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-1 h-4 bg-amber-500 rounded-full" />
            <h3 className="text-sm font-serif font-medium text-stone-900">何源</h3>
            <span className="text-[10px] text-stone-400">Origin</span>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            {note.content.source}
          </p>
        </div>

        {/* 何心 */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-1 h-4 bg-amber-500 rounded-full" />
            <h3 className="text-sm font-serif font-medium text-stone-900">何心</h3>
            <span className="text-[10px] text-stone-400">Heart</span>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            {note.content.heart}
          </p>
        </div>

        {/* 何遇 */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-1 h-4 bg-amber-500 rounded-full" />
            <h3 className="text-sm font-serif font-medium text-stone-900">何遇</h3>
            <span className="text-[10px] text-stone-400">Encounter</span>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            {note.content.encounter}
          </p>
        </div>
      </div>

      {/* Related Products */}
      {note.products && note.products.length > 0 && (
        <div className="mx-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={16} className="text-stone-600" />
              <h3 className="text-sm font-medium text-stone-900">手记同款好物</h3>
            </div>
            <button className="text-xs text-stone-400 hover:text-stone-600 flex items-center space-x-0.5">
              <span>全部</span>
              <ChevronRight size={12} />
            </button>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {note.products.map((product) => (
              <motion.div
                key={product.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleProductClick(product.id)}
                className="flex-shrink-0 w-32 bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  {product.tag && (
                    <span className="absolute top-2 left-2 text-[9px] px-1.5 py-0.5 bg-amber-500 text-white rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-2.5">
                  <h4 className="text-[11px] text-stone-900 font-medium line-clamp-2 leading-snug mb-1.5">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-sm font-semibold text-stone-900">¥{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-[10px] text-stone-400 line-through">¥{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Store Actions */}
      <div className="mx-6 mb-8">
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-xl p-5 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-8 -mt-8"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-stone-400 mb-1">探访店铺</p>
                <p className="text-base font-serif font-medium">{note.master.storeName}</p>
              </div>
              <button
                onClick={handleStoreClick}
                className="px-4 py-2 bg-white text-stone-900 text-xs font-medium rounded-full hover:bg-amber-50 transition-colors"
              >
                进入店铺
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleStoreClick}
                className="flex-1 py-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center space-x-1.5 text-xs text-stone-200 hover:bg-white/20 transition-colors"
              >
                <Navigation size={14} />
                <span>导航到店</span>
              </button>
              <button className="flex-1 py-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center space-x-1.5 text-xs text-stone-200 hover:bg-white/20 transition-colors">
                <Calendar size={14} />
                <span>预约到店</span>
              </button>
              <button className="flex-1 py-2.5 bg-amber-500/20 border border-amber-400/30 rounded-lg flex items-center justify-center space-x-1.5 text-xs text-amber-200 hover:bg-amber-500/30 transition-colors">
                <Star size={14} />
                <span>会员特权</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments / 品味对话 */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MessageCircle size={16} className="text-stone-600" />
            <h3 className="text-sm font-medium text-stone-900">品味对话</h3>
            <span className="text-xs text-stone-400">({comments.length})</span>
          </div>
        </div>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-100 flex-shrink-0">
                {comment.user.avatar ? (
                  <img src={comment.user.avatar} className="w-full h-full object-cover" alt={comment.user.name} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400">
                    <User size={14} />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-900">{comment.user.name}</span>
                  <span className="text-[10px] text-stone-400">{comment.time}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmitComment()}
              placeholder="想问主理人什么…"
              className="w-full px-4 py-2.5 bg-stone-50 rounded-full text-xs text-stone-900 placeholder-stone-400 border border-stone-100 focus:outline-none focus:border-amber-300 transition-colors"
            />
          </div>
          <button
            onClick={handleLike}
            className={`flex flex-col items-center justify-center w-10 h-10 ${
              liked ? 'text-rose-500' : 'text-stone-400'
            }`}
          >
            <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={handleSubmitComment}
            className="w-10 h-10 bg-stone-900 text-amber-50 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
        <div className="h-safe bg-white" />
      </div>
    </motion.div>
  );
}
