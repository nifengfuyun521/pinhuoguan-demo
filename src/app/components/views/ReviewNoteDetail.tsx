import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Share2, MessageCircle, Star, ChevronRight, Send, User, Sparkles, ThumbsUp, Award } from 'lucide-react';
import { toast } from 'sonner';

interface Connoisseur {
  id: string;
  name: string;
  title: string;
  avatar: string;
  level: string;
  verified: boolean;
}

interface ReviewDimension {
  name: string;
  score: number;
  label: string;
}

interface ReviewNote {
  id: number;
  title: string;
  cover: string;
  excerpt: string;
  connoisseur: Connoisseur;
  product: {
    name: string;
    brand: string;
    price: number;
    image: string;
  };
  overallScore: number;
  dimensions: ReviewDimension[];
  pros: string[];
  cons: string[];
  conclusion: string;
  content: string;
  likes: number;
  comments: number;
  liked: boolean;
  date: string;
  usefulCount: number;
}

interface ReviewNoteDetailProps {
  note: ReviewNote;
  onBack: () => void;
  onConnoisseurClick?: (connoisseurId: string) => void;
  onProductClick?: () => void;
}

export function ReviewNoteDetail({ note, onBack, onConnoisseurClick, onProductClick }: ReviewNoteDetailProps) {
  const [liked, setLiked] = useState(note.liked);
  const [likeCount, setLikeCount] = useState(note.likes);
  const [useful, setUseful] = useState(false);
  const [usefulCount, setUsefulCount] = useState(note.usefulCount);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: { name: '茶客小张', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60' },
      content: '品鉴得太专业了！正好想入手这款，看了这篇决定买了',
      time: '3小时前',
      likes: 24
    },
    {
      id: 2,
      user: { name: '器物爱好者', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60' },
      content: '想问下博主，这个价位还有其他推荐吗？',
      time: '5小时前',
      likes: 8
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

  const handleUseful = () => {
    if (useful) {
      setUseful(false);
      setUsefulCount(usefulCount - 1);
    } else {
      setUseful(true);
      setUsefulCount(usefulCount + 1);
      toast.success('感谢反馈，对您有帮助是我们最大的动力');
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
      time: '刚刚',
      likes: 0
    };
    setComments([newComment, ...comments]);
    setCommentText('');
    toast.success('评论已发布');
  };

  const handleConnoisseurClick = () => {
    if (onConnoisseurClick) {
      onConnoisseurClick(note.connoisseur.id);
    }
  };

  const handleProductClick = () => {
    if (onProductClick) {
      onProductClick();
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
          <span className="text-sm font-medium text-stone-900">品鉴手记</span>
          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Cover & Title */}
      <div className="pt-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={note.cover}
            alt={note.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-[10px] px-2 py-0.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full flex items-center space-x-1">
                <Award size={10} />
                <span>品鉴手记</span>
              </span>
              <span className="text-[10px] text-stone-300">{note.date}</span>
            </div>
            <h1 className="text-xl font-serif font-medium leading-snug mb-2">{note.title}</h1>
          </div>
        </div>

        {/* Score Card Overlay */}
        <div className="mx-6 -mt-10 relative z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg shadow-stone-900/10">
            <div
              className="flex items-center space-x-3 mb-3">
              <div
                onClick={handleConnoisseurClick}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                <img src={note.connoisseur.avatar} className="w-full h-full object-cover" alt={note.connoisseur.name} />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  onClick={handleConnoisseurClick}
                  className="flex items-center space-x-1.5 cursor-pointer hover:opacity-80 transition-opacity w-fit">
                  <span className="text-sm font-medium text-stone-900">{note.connoisseur.name}</span>
                  {note.connoisseur.verified && <Sparkles size={12} className="text-amber-500 fill-amber-500" />}
                  <ChevronRight size={12} className="text-stone-300" />
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">{note.connoisseur.title} · {note.connoisseur.level}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-serif font-bold text-stone-900">{note.overallScore}</span>
                <span className="text-xs text-stone-400">/ 10</span>
                <span className="text-[10px] text-stone-400">综合评分</span>
              </div>
              <button
                onClick={handleUseful}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${useful ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-stone-100 text-stone-500 border border-stone-200'}`}
              >
                <ThumbsUp size={12} fill={useful ? 'currentColor' : 'none'} />
                <span>有用 {usefulCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Card */}
      <div
        onClick={handleProductClick}
        className="mx-6 mt-6 mb-8 bg-white rounded-xl p-4 border border-stone-100 shadow-sm flex items-center cursor-pointer hover:shadow-md transition-shadow group">
        <div className="w-16 h-16 rounded-xl bg-stone-100 overflow-hidden flex-shrink-0">
          <img src={note.product.image} className="w-full h-full object-cover" alt={note.product.name} />
        </div>
        <div className="ml-3 flex-1 min-w-0">
          <p className="text-[10px] text-stone-400 mb-1">品鉴好物</p>
          <h3 className="text-sm font-medium text-stone-900 line-clamp-1">{note.product.name}</h3>
          <p className="text-[11px] text-stone-500 mt-0.5">{note.product.brand}</p>
        </div>
        <div className="text-right">
          <p className="text-base font-semibold text-stone-900">¥{note.product.price}</p>
          <ChevronRight size={16} className="text-stone-300 group-hover:text-stone-500 transition-colors ml-auto mt-1" />
        </div>
      </div>

      {/* Dimension Scores */}
      <div className="px-6 mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-1 h-4 bg-amber-500 rounded-full" />
          <h3 className="text-sm font-serif font-medium text-stone-900">多维度品鉴</h3>
        </div>
        <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm space-y-4">
          {note.dimensions.map((dim, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-stone-600">{dim.name}</span>
              <span className="text-xs font-medium text-stone-900">{dim.score}分</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${dim.score * 10}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                className="bg-gradient-to-r from-amber-400 to-amber-500 h-1.5 rounded-full"
              />
              </div>
              <p className="text-[10px] text-stone-400 mt-1">{dim.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="px-6 mb-8 grid grid-cols-2 gap-3">
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
          <div className="flex items-center space-x-1.5 mb-3">
            <ThumbsUp size={14} className="text-emerald-600" />
            <h4 className="text-xs font-medium text-emerald-800">值得入手</h4>
          </div>
          <ul className="space-y-2">
            {note.pros.map((pro, i) => (
              <li key={i} className="text-[11px] text-emerald-700 leading-relaxed flex items-start space-x-1.5">
                <span className="text-emerald-500 mt-0.5">·</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-rose-50 rounded-xl p-4 border border-rose-100">
          <div className="flex items-center space-x-1.5 mb-3">
            <MessageCircle size={14} className="text-rose-600" />
            <h4 className="text-xs font-medium text-rose-800">谨慎考虑</h4>
          </div>
          <ul className="space-y-2">
            {note.cons.map((con, i) => (
              <li key={i} className="text-[11px] text-rose-700 leading-relaxed flex items-start space-x-1.5">
                <span className="text-rose-500 mt-0.5">·</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="px-6 mb-8">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-1 h-4 bg-amber-500 rounded-full" />
          <h3 className="text-sm font-serif font-medium text-stone-900">品鉴结语</h3>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-xl p-5 border border-amber-100">
          <p className="text-sm text-stone-700 leading-relaxed font-light">
            {note.conclusion}
          </p>
        </div>
      </div>

      {/* Full Content */}
      <div className="px-6 mb-8">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-1 h-4 bg-amber-500 rounded-full" />
          <h3 className="text-sm font-serif font-medium text-stone-900">完整品鉴</h3>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed font-light">
          {note.content}
        </p>
      </div>

      {/* Comments */}
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
                  <div className="flex items-center space-x-2 text-[10px] text-stone-400">
                    <button className="flex items-center space-x-0.5 hover:text-amber-600 transition-colors">
                      <ThumbsUp size={10} />
                      <span>{comment.likes}</span>
                    </button>
                    <span>{comment.time}</span>
                  </div>
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
              placeholder="说说你的看法…"
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
