import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, MapPin, Clock, Phone, Heart, MessageCircle,
  Calendar, Star, ChevronRight, ChevronDown, ChevronUp,
  Sparkles, Gift, User, Camera, Coffee, ShoppingBag,
  Zap, Award, Send, X, ThumbsUp, Navigation,
  Layers, Eye, Play, Share2
} from 'lucide-react';
import { toast } from 'sonner';

interface StoreProfileViewProps {
  store: any;
  onBack: () => void;
  onMasterClick?: (master: any) => void;
  onNoteClick?: (note: any) => void;
}

const masterNotes = [
  {
    id: 1,
    title: "为什么我坚持用古法柴烧",
    excerpt: "很多人问我，现代电窑效率高、成品率高，为什么还要坚持用古法柴烧？今天想跟大家聊聊背后的原因…",
    cover: "https://images.unsplash.com/photo-1680210963123-cc25aafa7a47?q=80&w=800&auto=format&fit=crop",
    date: "3天前",
    likes: 128
  },
  {
    id: 2,
    title: "一把好壶的自我修养",
    excerpt: "养壶如养人，需要时间和耐心。这把壶陪了我五年，从最初的土褐色，慢慢养出了温润的光泽…",
    cover: "https://images.unsplash.com/photo-1584428885051-d80a38d86b39?q=80&w=800&auto=format&fit=crop",
    date: "1周前",
    likes: 89
  },
  {
    id: 3,
    title: "关于茶席的一点心得",
    excerpt: "茶席不需要多么华丽，重要的是让喝茶的人感到舒服。分享几个我布置茶席的小原则…",
    cover: "https://images.unsplash.com/photo-1752862793633-43933bf06825?q=80&w=800&auto=format&fit=crop",
    date: "2周前",
    likes: 256
  }
];

const qaList = [
  {
    id: 1,
    question: "新手入门，应该选什么样的紫砂壶？",
    answer: "建议从紫泥或段泥的经典器型开始，比如西施壶、石瓢壶。泥料正、器型正，比什么都重要。价位不用太高，先建立对壶的基本认知，用一段时间后自然会知道自己喜欢什么。",
    questioner: "清茶一杯",
    questionerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    time: "5天前",
    sameQuestionCount: 23,
    isAnswered: true
  },
  {
    id: 2,
    question: "柴烧壶和电窑壶泡出来的茶真的不一样吗？",
    answer: "是的，差别还挺明显的。柴烧因为胎体有自然落灰，孔隙率更高，透气性更好，泡出来的茶汤会更绵柔、层次更丰富。尤其是泡老茶、岩茶，柴烧壶的表现确实更胜一筹。",
    questioner: "茶里乾坤",
    questionerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    time: "1周前",
    sameQuestionCount: 45,
    isAnswered: true
  },
  {
    id: 3,
    question: "店里可以体验开壶吗？",
    answer: "可以的！到店体验的朋友，我可以亲自帮您开壶，也可以自己动手，我在旁边指导。开壶是跟一把壶建立连接的开始，很有仪式感。",
    questioner: "慢生活",
    questionerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    time: "2周前",
    sameQuestionCount: 12,
    isAnswered: true
  },
  {
    id: 4,
    question: "养壶需要每天都养吗？",
    answer: null,
    questioner: "云中鹤",
    questionerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    time: "3天前",
    sameQuestionCount: 5,
    isAnswered: false
  }
];

const packages = [
  {
    id: 1,
    name: "双人茶席体验",
    originalPrice: "¥298",
    memberPrice: "¥198",
    description: "主理人亲自布席，两款茶品鉴，配茶点两份",
    image: "https://images.unsplash.com/photo-1752862793633-43933bf06825?q=80&w=800&auto=format&fit=crop",
    duration: "约90分钟",
    tag: "会员专享"
  },
  {
    id: 2,
    name: "柴烧入门 · 手作体验课",
    originalPrice: "¥680",
    memberPrice: "¥480",
    description: "拉胚体验 + 柴烧知识讲解 + 作品可烧制寄出",
    image: "https://images.unsplash.com/photo-1626994542321-a83f102c17c8?q=80&w=800&auto=format&fit=crop",
    duration: "约3小时",
    tag: "热门"
  },
  {
    id: 3,
    name: "VIP茶空间包场",
    originalPrice: "¥1,280",
    memberPrice: "¥880",
    description: "私密茶空间4小时，主理人陪泡，6人以内",
    image: "https://images.unsplash.com/photo-1559484379-68a6d9c90c73?q=80&w=800&auto=format&fit=crop",
    duration: "4小时",
    tag: "尊享"
  }
];

const activities = [
  {
    id: 1,
    title: "谷雨茶会 · 春茶品鉴",
    date: "6月28日 14:00",
    spots: "仅剩3席",
    image: "https://images.unsplash.com/photo-1559484379-68a6d9c90c73?q=80&w=800&auto=format&fit=crop",
    price: "会员 ¥168"
  },
  {
    id: 2,
    title: "柴烧窑开窑体验",
    date: "7月5日 10:00",
    spots: "仅剩5席",
    image: "https://images.unsplash.com/photo-1680210963123-cc25aafa7a47?q=80&w=800&auto=format&fit=crop",
    price: "会员 ¥288"
  }
];

const checkins = [
  {
    id: 1,
    user: "茶里乾坤",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    content: "终于来李老师的店了！环境超有感觉，听李老师聊了一上午柴烧的故事，受益匪浅。那把西施壶手感真的太好了…",
    images: [
      "https://images.unsplash.com/photo-1584428885051-d80a38d86b39?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626994542321-a83f102c17c8?q=80&w=400&auto=format&fit=crop"
    ],
    date: "2天前",
    likes: 32,
    tags: ["环境雅致", "主理人专业", "值得再来"]
  },
  {
    id: 2,
    user: "慢生活",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    content: "周末来参加了茶席体验课，李老师人超级好，教了很多茶席布置的小技巧。茶室的光影太美了，随手拍都是大片。",
    images: [
      "https://images.unsplash.com/photo-1752862793633-43933bf06825?q=80&w=400&auto=format&fit=crop"
    ],
    date: "5天前",
    likes: 18,
    tags: ["体验很棒", "拍照好看", "学到很多"]
  }
];

const reviewNotes = [
  {
    id: 1,
    title: "探店 | 藏在巷子里的柴烧工作室",
    reviewer: "清源",
    reviewerTitle: "资深品鉴官",
    reviewerAvatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=100&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1680210963123-cc25aafa7a47?q=80&w=800&auto=format&fit=crop",
    excerpt: "在杭州的老巷子里，藏着这样一家柴烧工作室。主理人李修远做壶三十年，每一把壶都是孤品…",
    rating: 4.8
  }
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1559484379-68a6d9c90c73?q=80&w=800&auto=format&fit=crop", caption: "茶室一角" },
  { url: "https://images.unsplash.com/photo-1626994542321-a83f102c17c8?q=80&w=800&auto=format&fit=crop", caption: "工作区" },
  { url: "https://images.unsplash.com/photo-1584428885051-d80a38d86b39?q=80&w=800&auto=format&fit=crop", caption: "展品区" },
  { url: "https://images.unsplash.com/photo-1752862793633-43933bf06825?q=80&w=800&auto=format&fit=crop", caption: "茶席" },
  { url: "https://images.unsplash.com/photo-1680210963123-cc25aafa7a47?q=80&w=800&auto=format&fit=crop", caption: "柴窑" },
  { url: "https://images.unsplash.com/photo-1618414600699-7ca0562877a3?q=80&w=800&auto=format&fit=crop", caption: "细节" }
];

const quickQuestions = [
  "新手适合买什么壶？",
  "店里可以打卡喝茶吗？",
  "柴烧壶怎么养？",
  "可以定制壶吗？"
];

export function StoreProfileView({ store, onBack, onMasterClick, onNoteClick }: StoreProfileViewProps) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isCollected, setIsCollected] = useState(false);
  const [activeTab, setActiveTab] = useState<'story' | 'notes' | 'qa' | 'packages' | 'activities' | 'checkins'>('story');
  const [showAskModal, setShowAskModal] = useState(false);
  const [askText, setAskText] = useState('');
  const [qaItems, setQaItems] = useState(qaList);
  const [expandedGallery, setExpandedGallery] = useState(false);

  const displayedGallery = expandedGallery ? galleryImages : galleryImages.slice(0, 5);

  const handleSameQuestion = (id: number) => {
    setQaItems(items => items.map(item =>
      item.id === id ? { ...item, sameQuestionCount: item.sameQuestionCount + 1 } : item
    ));
    toast.success("已表达同款疑问");
  };

  const handleSubmitQuestion = () => {
    if (!askText.trim()) {
      toast.error("请输入问题");
      return;
    }
    toast.success("问题已提交，主理人看到后会回复");
    setShowAskModal(false);
    setAskText('');
  };

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
    toast.success(isFollowed ? '已取消品味认同' : '已表达品味认同');
  };

  const handleShare = () => {
    toast.success(
      <div className="flex flex-col">
        <span className="font-serif font-medium">分享链接已复制</span>
        <span className="text-xs text-stone-500">可分享给同频的朋友</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* 顶部导航栏 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-md mx-auto flex items-center justify-between px-4 h-14">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-sm font-medium text-stone-900">门店</span>
          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* 封面图 */}
      <div className="pt-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-[10px] px-2 py-0.5 bg-amber-500/20 backdrop-blur-sm text-amber-200 rounded-full border border-amber-400/30">
                品货官合作店
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/20">
                {store.type}
              </span>
            </div>
            <h1 className="text-xl font-serif font-medium leading-snug mb-1">{store.name}</h1>
            <p className="text-xs text-stone-200 flex items-center">
              <MapPin size={12} className="mr-1" />
              {store.location}
            </p>
          </div>
        </div>
      </div>

      {/* 店铺数据 */}
      <div className="px-6 -mt-5 relative z-10">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
          <div className="flex items-center justify-around text-center">
            <div>
              <p className="text-lg font-serif font-medium text-stone-900">4.9</p>
              <p className="text-[11px] text-stone-500 mt-0.5 flex items-center justify-center">
                <Star size={10} className="text-amber-500 fill-amber-500 mr-0.5" />
                评分
              </p>
            </div>
            <div className="w-px h-8 bg-stone-100" />
            <div>
              <p className="text-lg font-serif font-medium text-stone-900">128</p>
              <p className="text-[11px] text-stone-500 mt-0.5">品味认同</p>
            </div>
            <div className="w-px h-8 bg-stone-100" />
            <div>
              <p className="text-lg font-serif font-medium text-stone-900">36</p>
              <p className="text-[11px] text-stone-500 mt-0.5">篇手记</p>
            </div>
            <div className="w-px h-8 bg-stone-100" />
            <div>
              <p className="text-lg font-serif font-medium text-stone-900">56</p>
              <p className="text-[11px] text-stone-500 mt-0.5">条打卡</p>
            </div>
          </div>
        </div>
      </div>

      {/* 主理人卡片 */}
      <div className="px-4 mt-4">
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => onMasterClick && onMasterClick({ id: 'master-1' })}
          className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 flex items-center space-x-3 cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
            alt="主理人"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-100"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1.5">
              <span className="text-sm font-medium text-stone-900">李修远</span>
              <Star size={12} className="text-amber-500 fill-amber-500" />
            </div>
            <p className="text-xs text-stone-500 mt-0.5">柴烧匠人 · 做壶三十年</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFollow();
            }}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
              isFollowed
                ? 'bg-stone-100 text-stone-600'
                : 'bg-stone-900 text-amber-50 hover:bg-stone-800'
            }`}
          >
            {isFollowed ? '已认同' : '品味认同'}
          </button>
        </motion.div>
      </div>

      {/* 会员权益专区 */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                <Award size={16} className="text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-stone-900">会员权益</h3>
                <p className="text-[11px] text-stone-500">品货官会员到店专享</p>
              </div>
            </div>
            <button className="text-xs text-stone-400 flex items-center">
              全部 <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-2.5">
            {/* 生日特权 - 重点突出 */}
            <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-100/50">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift size={18} className="text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-stone-900">生日月专属特权</span>
                    <span className="bg-amber-500 text-white text-[9px] px-1.5 py-0.5 rounded">生日</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    生日月到店，赠主理人手作茶杯一只 + 全场茶器 8 折
                  </p>
                  <p className="text-[11px] text-amber-600 mt-1.5">
                    您的生日还有 23 天，提前解锁生日特权
                  </p>
                </div>
              </div>
            </div>

            {/* 折扣权益 */}
            <div className="flex items-center space-x-3 p-3">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-stone-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-stone-900">全场茶器 8.5 折</p>
                <p className="text-[11px] text-stone-500 mt-0.5">会员专享价，最高可省 ¥500</p>
              </div>
              <span className="text-amber-600 text-sm font-medium">8.5折</span>
            </div>

            {/* 茶席体验 */}
            <div className="flex items-center space-x-3 p-3">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Coffee size={18} className="text-stone-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-stone-900">每月 2 次免费茶席</p>
                <p className="text-[11px] text-stone-500 mt-0.5">价值 ¥198/次，主理人亲自布席</p>
              </div>
              <span className="text-amber-600 text-xs font-medium">免费</span>
            </div>

            {/* 优先体验 */}
            <div className="flex items-center space-x-3 p-3">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap size={18} className="text-stone-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-stone-900">新品优先体验权</p>
                <p className="text-[11px] text-stone-500 mt-0.5">柴烧新品开窑，会员优先选购</p>
              </div>
              <span className="text-stone-500 text-xs font-medium">优先</span>
            </div>
          </div>

          {/* 开通会员按钮 */}
          <button className="w-full mt-4 py-3 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-colors">
            开通会员，解锁全部权益
          </button>
        </div>
      </div>

      {/* Tab 切换 */}
      <div className="sticky top-14 z-30 bg-stone-50/95 backdrop-blur-md border-b border-stone-100 mt-6">
        <div className="flex px-4 space-x-5 overflow-x-auto pb-0.5 scrollbar-hide">
          {[
            { key: 'story', label: '门店' },
            { key: 'notes', label: '主理人手记' },
            { key: 'qa', label: '品味对话' },
            { key: 'packages', label: '体验套餐' },
            { key: 'activities', label: '活动' },
            { key: 'checkins', label: '打卡' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`whitespace-nowrap py-3 text-sm transition-colors relative ${
                activeTab === tab.key ? 'text-stone-900 font-medium' : 'text-stone-400'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="storeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 内容 */}
      <div className="p-4">
        {/* 门店 - 物料展示 */}
        {activeTab === 'story' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* 品牌故事 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-1 h-4 bg-amber-500 rounded-full" />
                <h3 className="text-sm font-serif font-medium text-stone-900">品牌故事</h3>
              </div>
              <div className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1680210963123-cc25aafa7a47?q=80&w=800&auto=format&fit=crop"
                  alt="品牌故事"
                  className="w-full aspect-video rounded-xl object-cover"
                />
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  修远茶事，藏在杭州老巷子里的柴烧工作室。
                </p>
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  主理人李修远做壶三十年，坚持古法柴烧工艺。一窑柴烧，需要守窑三天三夜，投柴数百次。
                  火焰与泥土的对话，每一件都是孤品。
                </p>
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  我们相信，好的器物是有温度的。它不只是一个工具，更是一个陪伴你度过日常的朋友。
                  用得越久，越有感情。
                </p>
              </div>
            </div>

            {/* 门店相册 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-4 bg-amber-500 rounded-full" />
                  <h3 className="text-sm font-serif font-medium text-stone-900">门店环境</h3>
                </div>
                <span className="text-xs text-stone-400">{galleryImages.length} 张照片</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {displayedGallery.map((img, i) => (
                  <motion.div
                    key={i}
                    whileTap={{ scale: 0.97 }}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => toast.success("查看大图功能开发中")}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                    />
                    {i === 4 && !expandedGallery && galleryImages.length > 5 && (
                      <div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedGallery(true);
                        }}
                      >
                        <span className="text-white text-sm">+{galleryImages.length - 5}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              {expandedGallery && (
                <button
                  onClick={() => setExpandedGallery(false)}
                  className="w-full mt-3 py-2 text-xs text-stone-500 flex items-center justify-center"
                >
                  收起 <ChevronUp size={14} className="ml-1" />
                </button>
              )}
            </div>

            {/* VR 探店 */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => toast.success("VR 探店功能即将上线")}
              className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-100 cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1559484379-68a6d9c90c73?q=80&w=800&auto=format&fit=crop"
                alt="VR探店"
                className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-5 text-white">
                <div className="flex items-center space-x-2 mb-1">
                  <Eye size={14} className="text-amber-300" />
                  <span className="text-xs text-amber-200">VR 探店</span>
                </div>
                <p className="text-sm font-medium">720° 全景逛店</p>
              </div>
            </motion.div>

            {/* 主理人日常 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-4 bg-amber-500 rounded-full" />
                  <h3 className="text-sm font-serif font-medium text-stone-900">主理人日常</h3>
                </div>
                <button className="text-xs text-stone-400 flex items-center">
                  全部 <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex space-x-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                {[
                  { img: "https://images.unsplash.com/photo-1626994542321-a83f102c17c8?q=80&w=400&auto=format&fit=crop", text: "今天的拉胚" },
                  { img: "https://images.unsplash.com/photo-1680210963123-cc25aafa7a47?q=80&w=400&auto=format&fit=crop", text: "准备装窑" },
                  { img: "https://images.unsplash.com/photo-1584428885051-d80a38d86b39?q=80&w=400&auto=format&fit=crop", text: "新壶出窑" },
                  { img: "https://images.unsplash.com/photo-1752862793633-43933bf06825?q=80&w=400&auto=format&fit=crop", text: "今日茶席" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 w-24"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
                      <img src={item.img} alt={item.text} className="w-full h-full object-cover" />
                      <div className="absolute bottom-1 right-1 w-6 h-6 bg-black/40 rounded-full flex items-center justify-center">
                        <Play size={10} className="text-white" />
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 line-clamp-1">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 基础信息 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-1 h-4 bg-amber-500 rounded-full" />
                <h3 className="text-sm font-serif font-medium text-stone-900">门店信息</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-stone-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-stone-900">{store.location}</p>
                    <p className="text-xs text-stone-500 mt-0.5">距您 1.2km · 步行约 15 分钟</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-stone-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-stone-900">10:00 - 20:00</p>
                    <p className="text-xs text-stone-500 mt-0.5">周一店休</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-stone-400 flex-shrink-0" />
                  <p className="text-sm text-stone-900">138-xxxx-xxxx</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-100 flex space-x-3">
                <button
                  onClick={() => toast.success("正在打开地图...")}
                  className="flex-1 py-2.5 bg-stone-100 text-stone-700 text-sm rounded-xl hover:bg-stone-200 transition-colors"
                >
                  导航到店
                </button>
                <button
                  onClick={() => toast.success("正在拨打电话...")}
                  className="flex-1 py-2.5 bg-stone-900 text-white text-sm rounded-xl hover:bg-stone-800 transition-colors"
                >
                  联系商家
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* 主理人手记 */}
        {activeTab === 'notes' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {masterNotes.map((note, i) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNoteClick && onNoteClick(note)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={note.cover}
                    alt={note.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-serif font-medium text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {note.title}
                  </h4>
                  <p className="text-sm text-stone-500 line-clamp-2 mb-3 leading-relaxed">
                    {note.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>{note.date}</span>
                    <span className="flex items-center">
                      <Heart size={12} className="mr-1" />
                      {note.likes}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 品味对话 */}
        {activeTab === 'qa' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <button
              onClick={() => setShowAskModal(true)}
              className="w-full py-4 bg-white rounded-2xl border border-dashed border-stone-200 text-stone-500 text-sm flex items-center justify-center hover:border-amber-300 hover:text-amber-600 transition-colors"
            >
              <MessageCircle size={16} className="mr-2" />
              向主理人提问
            </button>

            {qaItems.map((qa, i) => (
              <motion.div
                key={qa.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <img
                    src={qa.questionerAvatar}
                    alt={qa.questioner}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-stone-500">{qa.questioner}</span>
                      <span className="text-[10px] text-stone-400">{qa.time}</span>
                    </div>
                    <p className="text-sm text-stone-800 leading-relaxed">{qa.question}</p>
                  </div>
                </div>

                {qa.isAnswered && qa.answer && (
                  <div className="ml-11 pl-3 border-l-2 border-amber-400/30 bg-amber-50/30 rounded-r-xl p-3 -mr-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                        alt="主理人"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs font-medium text-amber-700">李修远 · 主理人</span>
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed">{qa.answer}</p>
                  </div>
                )}

                {!qa.isAnswered && (
                  <div className="ml-11 flex items-center text-xs text-stone-400">
                    <Clock size={12} className="mr-1.5" />
                    等待主理人回复…
                  </div>
                )}

                <div className="flex items-center justify-end mt-3">
                  <button
                    onClick={() => handleSameQuestion(qa.id)}
                    className="flex items-center space-x-1 text-xs text-stone-400 hover:text-amber-600 transition-colors"
                  >
                    <MessageCircle size={12} />
                    <span>同款提问</span>
                    <span className="text-amber-600 font-medium">{qa.sameQuestionCount}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 体验套餐 */}
        {activeTab === 'packages' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.success("套餐详情页开发中")}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 cursor-pointer group"
              >
                <div className="flex">
                  <div className="w-28 h-28 flex-shrink-0 relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`text-[9px] px-1.5 py-0.5 rounded text-white ${
                        pkg.tag === '会员专享' ? 'bg-amber-500' :
                        pkg.tag === '热门' ? 'bg-stone-900' : 'bg-stone-600'
                      }`}>
                        {pkg.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-3 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-stone-900 mb-1 group-hover:text-amber-800 transition-colors">
                        {pkg.name}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-2">
                        {pkg.description}
                      </p>
                      <div className="flex items-center text-[10px] text-stone-400">
                        <Clock size={10} className="mr-1" />
                        {pkg.duration}
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs text-stone-400 line-through">{pkg.originalPrice}</span>
                        <div className="flex items-baseline">
                          <span className="text-xs text-amber-600">会员价</span>
                          <span className="text-lg font-medium text-amber-600 ml-1">{pkg.memberPrice}</span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toast.success("已加入预约清单");
                        }}
                        className="px-3 py-1.5 bg-stone-900 text-white text-xs rounded-full"
                      >
                        预约
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 活动 */}
        {activeTab === 'activities' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {activities.map((activity, i) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.success("活动详情页开发中")}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 cursor-pointer group"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-stone-900 text-white text-[10px] px-2 py-1 rounded-full">
                    {activity.spots}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white text-base font-serif font-medium mb-1">{activity.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-300 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {activity.date}
                      </span>
                      <span className="text-amber-300 text-sm font-medium">{activity.price}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toast.success("报名成功！");
                    }}
                    className="px-5 py-2 bg-stone-900 text-white text-xs rounded-full"
                  >
                    立即报名
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 打卡 */}
        {activeTab === 'checkins' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* 品鉴官探店 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-amber-500" />
                  <h3 className="text-sm font-medium text-stone-900">品鉴官探店</h3>
                </div>
                <button className="text-xs text-stone-400 flex items-center">
                  全部 <ChevronRight size={14} />
                </button>
              </div>
              {reviewNotes.map((note) => (
                <motion.div
                  key={note.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toast.success("品鉴手记详情开发中")}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={note.cover} alt={note.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <img
                        src={note.reviewerAvatar}
                        alt={note.reviewer}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-stone-700 font-medium">{note.reviewer}</span>
                      <span className="text-[10px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded">
                        {note.reviewerTitle}
                      </span>
                      <div className="flex items-center ml-auto text-amber-500">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs ml-0.5 font-medium">{note.rating}</span>
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-stone-900 mb-1.5">{note.title}</h4>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">{note.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 会员打卡 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Camera size={16} className="text-stone-500" />
                  <h3 className="text-sm font-medium text-stone-900">会员打卡</h3>
                  <span className="text-xs text-stone-400">128 条</span>
                </div>
                <button className="text-xs text-stone-400 flex items-center">
                  全部 <ChevronRight size={14} />
                </button>
              </div>
              {checkins.map((checkin, i) => (
                <motion.div
                  key={checkin.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 mb-4 last:mb-0"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={checkin.avatar}
                      alt={checkin.user}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-stone-900">{checkin.user}</span>
                      <p className="text-[11px] text-stone-400">{checkin.date}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-3">{checkin.content}</p>
                  {checkin.images.length > 0 && (
                    <div className="flex space-x-2 mb-3">
                      {checkin.images.map((img, ii) => (
                        <div key={ii} className="w-20 h-20 rounded-lg overflow-hidden">
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {checkin.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                    <button className="flex items-center space-x-1 text-xs text-stone-400">
                      <Heart size={14} />
                      <span>{checkin.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-xs text-stone-400">
                      <MessageCircle size={14} />
                      <span>回复</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 我的足迹 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
              <div className="flex items-center space-x-2 mb-3">
                <Layers size={16} className="text-stone-500" />
                <h3 className="text-sm font-medium text-stone-900">我的足迹</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xl font-serif font-medium text-stone-900">3</p>
                  <p className="text-xs text-stone-500 mt-0.5">到店次数</p>
                </div>
                <div>
                  <p className="text-xl font-serif font-medium text-stone-900">2</p>
                  <p className="text-xs text-stone-500 mt-0.5">打卡手记</p>
                </div>
                <div>
                  <p className="text-xl font-serif font-medium text-amber-600">常客</p>
                  <p className="text-xs text-stone-500 mt-0.5">会员等级</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 px-4 py-3 pb-6">
        <div className="max-w-md mx-auto flex items-center space-x-3">
          <button
            onClick={handleFollow}
            className={`flex flex-col items-center justify-center w-12 ${isFollowed ? 'text-amber-500' : 'text-stone-400'}`}
          >
            <Star size={20} className={isFollowed ? 'fill-current' : ''} />
            <span className="text-[10px] mt-0.5">{isFollowed ? '已认同' : '认同'}</span>
          </button>
          <button
            onClick={() => setShowAskModal(true)}
            className="flex flex-col items-center justify-center w-12 text-stone-400"
          >
            <MessageCircle size={20} />
            <span className="text-[10px] mt-0.5">咨询</span>
          </button>
          <button
            onClick={() => toast.success("正在打开地图...")}
            className="flex-1 py-3 bg-stone-100 text-stone-700 text-sm rounded-full font-medium hover:bg-stone-200 transition-colors flex items-center justify-center"
          >
            <Navigation size={16} className="mr-2" />
            导航到店
          </button>
          <button
            onClick={() => toast.success("预约功能即将开放")}
            className="flex-1 py-3 bg-stone-900 text-white text-sm rounded-full font-medium hover:bg-stone-800 transition-colors"
          >
            预约体验
          </button>
        </div>
      </div>

      {/* 提问弹窗 */}
      <AnimatePresence>
        {showAskModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowAskModal(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 p-5 pb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-stone-900">向主理人提问</h3>
                <button
                  onClick={() => setShowAskModal(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100"
                >
                  <X size={18} className="text-stone-400" />
                </button>
              </div>

              <div className="flex items-center space-x-3 mb-4 p-3 bg-stone-50 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                  alt="主理人"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-stone-900">李修远</p>
                  <p className="text-xs text-stone-500">修远茶事 · 主理人</p>
                </div>
              </div>

              <textarea
                value={askText}
                onChange={(e) => setAskText(e.target.value)}
                placeholder="说说你想问的问题…"
                className="w-full h-28 p-3 bg-stone-50 border border-stone-100 rounded-xl text-sm text-stone-800 placeholder:text-stone-400 resize-none focus:outline-none focus:ring-1 focus:ring-amber-200"
                maxLength={200}
              />
              <div className="flex justify-end mb-4">
                <span className="text-[11px] text-stone-400">{askText.length}/200</span>
              </div>

              <p className="text-xs text-stone-500 mb-2">大家都在问：</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setAskText(q)}
                    className="text-xs px-3 py-1.5 bg-stone-50 text-stone-600 rounded-full hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <button
                onClick={handleSubmitQuestion}
                className="w-full py-3 bg-stone-900 text-white text-sm rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center justify-center"
              >
                <Send size={16} className="mr-2" />
                提交问题
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
