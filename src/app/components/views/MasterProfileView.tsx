import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, MapPin, Calendar, Heart, Share2, ChevronRight, Grid3X3, BookOpen, Store, MessageCircle, X, Send, User, ThumbsUp, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface MasterProfile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  cover: string;
  bio: string;
  storeName: string;
  storeId: string;
  location: string;
  specialties: string[];
  notesCount: number;
  followersCount: number;
  isFollowed: boolean;
}

interface MasterNote {
  id: number;
  title: string;
  cover: string;
  excerpt: string;
  likes: number;
  comments: number;
  date: string;
}

interface MasterProfileViewProps {
  master: MasterProfile;
  notes: MasterNote[];
  onBack: () => void;
  onNoteClick?: (noteId: number) => void;
  onStoreClick?: (storeId: string) => void;
}

export function MasterProfileView({ master, notes, onBack, onNoteClick, onStoreClick }: MasterProfileViewProps) {
  const [isFollowed, setIsFollowed] = useState(master.isFollowed);
  const [activeTab, setActiveTab] = useState<'notes' | 'qa' | 'about'>('notes');
  const [showAskModal, setShowAskModal] = useState(false);
  const [questionText, setQuestionText] = useState('');

  const [qaList, setQaList] = useState([
    {
      id: 1,
      question: '新手入门茶器，第一把壶应该选什么材质的？',
      answer: '如果是刚开始喝茶，我建议从紫砂或者青瓷入手。紫砂透气性好，适合泡乌龙茶和普洱茶；青瓷温润，适合绿茶和红茶。关键是先找到自己喜欢的茶，再配对应的器。不要一开始就追求名家壶，先买一把自己用着顺手的，用上半年，你就知道自己想要什么了。',
      questioner: { name: '茶小白', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60' },
      time: '3天前',
      sameQuestionCount: 28,
      sameQuestion: false
    },
    {
      id: 2,
      question: '开窑的茶器需要养多久才会有包浆？',
      answer: '这个问题没有标准答案，跟你使用频率、泡什么茶、怎么养都有关系。一般来说，天天用的话，三到六个月能看出明显变化。我的建议是：不要为了包浆而养壶，那样就本末倒置了。好好喝茶，时间到了，包浆自然就出来了。那种时间沉淀出来的温润感，是做不出来的。',
      questioner: { name: '慢生活', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60' },
      time: '1周前',
      sameQuestionCount: 15,
      sameQuestion: false
    },
    {
      id: 3,
      question: '店里可以体验茶器制作吗？',
      answer: '可以的，我们每个月最后一个周末有手工体验课，从揉泥到拉坯到修坯，全程自己动手。做出来的器我们帮你烧好，大概两周可以取。不过名额有限，需要提前预约。体验课不是为了让你学会做壶，而是让你体验一下泥料在手里的感觉，这样你拿到一把壶的时候，会更懂它的好。',
      questioner: { name: '手作爱好者', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60' },
      time: '2周前',
      sameQuestionCount: 42,
      sameQuestion: true
    }
  ]);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
    toast.success(isFollowed ? '已取消品味认同' : '已表达品味认同');
  };

  const handleStoreClick = () => {
    if (onStoreClick) {
      onStoreClick(master.storeId);
    } else {
      toast.info('即将跳转到店铺页面');
    }
  };

  const handleNoteClick = (noteId: number) => {
    if (onNoteClick) {
      onNoteClick(noteId);
    }
  };

  const handleSubmitQuestion = () => {
    if (!questionText.trim()) return;
    const newQa = {
      id: qaList.length + 1,
      question: questionText,
      answer: '',
      questioner: { name: '我', avatar: '' },
      time: '刚刚',
      sameQuestionCount: 0,
      sameQuestion: false
    };
    setQaList([newQa, ...qaList]);
    setQuestionText('');
    setShowAskModal(false);
    toast.success(
      <div className="flex flex-col">
        <span className="font-serif font-medium">问题已提交</span>
        <span className="text-xs text-stone-500">主理人看到后会尽快回复</span>
      </div>
    );
  };

  const handleSameQuestion = (qaId: number) => {
    setQaList(qaList.map(qa => 
      qa.id === qaId 
        ? { ...qa, sameQuestion: !qa.sameQuestion, sameQuestionCount: qa.sameQuestion ? qa.sameQuestionCount - 1 : qa.sameQuestionCount + 1 }
        : qa
    ));
    const qa = qaList.find(q => q.id === qaId);
    if (qa && !qa.sameQuestion) {
      toast.success('已记录同款提问');
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
          <span className="text-sm font-medium text-stone-900">主理人主页</span>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="pt-14">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={master.cover}
            alt={master.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/20 to-transparent" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 -mt-12 relative z-10">
        <div className="flex items-end">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-stone-50 shadow-lg flex-shrink-0">
            <img src={master.avatar} className="w-full h-full object-cover" alt={master.name} />
          </div>
          <div className="ml-4 mb-2 flex-1">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-serif font-medium text-stone-900">{master.name}</h1>
              <Star size={16} className="text-amber-500 fill-amber-500" />
            </div>
            <p className="text-xs text-stone-500 mt-0.5">{master.title}</p>
          </div>
          <button
            onClick={handleFollow}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-all mb-1 ${
              isFollowed
                ? 'bg-stone-100 text-stone-600 border border-stone-200'
                : 'bg-stone-900 text-amber-50 hover:bg-stone-800'
            }`}
          >
            {isFollowed ? '已认同' : '品味认同'}
          </button>
        </div>

        {/* Bio */}
        <p className="text-sm text-stone-600 leading-relaxed mt-4 font-light">
          {master.bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {master.specialties.map((tag, index) => (
            <span
              key={index}
              className="text-[11px] px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full border border-amber-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-around mt-6 py-4 border-y border-stone-100">
          <div className="text-center">
            <div className="text-lg font-serif font-medium text-stone-900">{master.notesCount}</div>
            <div className="text-[10px] text-stone-400 mt-0.5">手记</div>
          </div>
          <div className="w-px h-8 bg-stone-100" />
          <div className="text-center">
            <div className="text-lg font-serif font-medium text-stone-900">{master.followersCount}</div>
            <div className="text-[10px] text-stone-400 mt-0.5">品味认同</div>
          </div>
          <div className="w-px h-8 bg-stone-100" />
          <div className="text-center">
            <div className="text-lg font-serif font-medium text-stone-900">
              <MessageCircle size={18} className="inline-block -mt-1" />
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">想问TA</div>
          </div>
        </div>

        {/* Store Card */}
        <div
          onClick={handleStoreClick}
          className="mt-4 bg-white rounded-xl p-4 border border-stone-100 shadow-sm flex items-center cursor-pointer hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-stone-100 flex items-center justify-center flex-shrink-0">
            <Store size={20} className="text-amber-700" />
          </div>
          <div className="ml-3 flex-1 min-w-0">
            <div className="flex items-center space-x-1.5">
              <h3 className="text-sm font-medium text-stone-900">{master.storeName}</h3>
              <Star size={12} className="text-amber-500 fill-amber-500" />
            </div>
            <div className="flex items-center text-[10px] text-stone-400 mt-1">
              <MapPin size={10} className="mr-1" />
              <span>{master.location}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              会员特权
            </span>
            <ChevronRight size={16} className="text-stone-300 group-hover:text-stone-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mt-6 sticky top-14 z-40 bg-stone-50/95 backdrop-blur-sm py-3 -mx-0">
        <div className="flex border-b border-stone-100">
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 pb-3 text-xs font-medium relative ${
              activeTab === 'notes' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            <div className="flex items-center justify-center space-x-1">
              <BookOpen size={14} />
              <span>TA的手记</span>
            </div>
            {activeTab === 'notes' && (
              <motion.div
                layoutId="master-tab-indicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-stone-900 rounded-full"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`flex-1 pb-3 text-xs font-medium relative ${
              activeTab === 'qa' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            <div className="flex items-center justify-center space-x-1">
              <MessageCircle size={14} />
              <span>品味对话</span>
            </div>
            {activeTab === 'qa' && (
              <motion.div
                layoutId="master-tab-indicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-stone-900 rounded-full"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 pb-3 text-xs font-medium relative ${
              activeTab === 'about' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            <div className="flex items-center justify-center space-x-1">
              <Grid3X3 size={14} />
              <span>关于</span>
            </div>
            {activeTab === 'about' && (
              <motion.div
                layoutId="master-tab-indicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-stone-900 rounded-full"
              />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 mt-2">
        {activeTab === 'notes' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {notes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => handleNoteClick(note.id)}
                className="bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={note.cover}
                    alt={note.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-sm font-serif font-medium text-white leading-snug">
                      {note.title}
                    </h3>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-[11px] text-stone-500 line-clamp-2 mb-2 leading-relaxed">
                    {note.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-stone-400">{note.date}</span>
                    <div className="flex items-center space-x-3 text-[10px] text-stone-400">
                      <div className="flex items-center space-x-1">
                        <Heart size={11} />
                        <span>{note.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={11} />
                        <span>{note.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'qa' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {/* Ask Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setShowAskModal(true)}
              className="w-full bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-xl p-4 flex items-center justify-between shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-2">
                <MessageCircle size={18} className="text-amber-400" />
                <span className="text-sm font-medium">想问{master.name}什么？</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-amber-300">
                <span>提问</span>
                <ChevronRight size={14} />
              </div>
            </motion.button>

            {/* QA List */}
            {qaList.map((qa, index) => (
              <motion.div
                key={qa.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl p-4 border border-stone-100 shadow-sm"
              >
                {/* Question */}
                <div className="flex space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-100 flex-shrink-0">
                    {qa.questioner.avatar ? (
                      <img src={qa.questioner.avatar} className="w-full h-full object-cover" alt="" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400">
                        <User size={14} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-900">{qa.questioner.name}</span>
                      <div className="flex items-center space-x-2 text-[10px] text-stone-400">
                        <Clock size={10} />
                        <span>{qa.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-stone-800 leading-relaxed font-medium">
                      {qa.question}
                    </p>
                  </div>
                </div>

                {/* Answer */}
                {qa.answer ? (
                  <div className="ml-11 pl-3 border-l-2 border-amber-200 bg-amber-50/50 rounded-r-lg -mr-4 pr-4 py-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-amber-200">
                        <img src={master.avatar} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs font-medium text-stone-900">{master.name}</span>
                        <Star size={10} className="text-amber-500 fill-amber-500" />
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {qa.answer}
                    </p>

                    {/* Same Question Button */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-amber-100/50">
                      <button
                        onClick={() => handleSameQuestion(qa.id)}
                        className={`flex items-center space-x-1 text-xs font-medium transition-colors ${qa.sameQuestion ? 'text-amber-600' : 'text-stone-400 hover:text-amber-600'}`}
                      >
                        <ThumbsUp size={12} fill={qa.sameQuestion ? 'currentColor' : 'none'} />
                        <span>同款提问 {qa.sameQuestionCount > 0 && qa.sameQuestionCount}</span>
                      </button>
                      <button className="text-[10px] text-stone-400 hover:text-stone-600 transition-colors">
                        分享
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="ml-11 pl-3 border-l-2 border-dashed border-stone-200 -mr-4 pr-4 py-2">
                    <p className="text-xs text-stone-400 flex items-center space-x-1">
                      <Clock size={10} />
                      <span>等待主理人回复…</span>
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'about' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
              <h3 className="text-sm font-medium text-stone-900 mb-3 flex items-center space-x-2">
                <Calendar size={14} className="text-amber-600" />
                <span>开店时间</span>
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                2019年创立至今，坚持用心做好每一件小事。
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
              <h3 className="text-sm font-medium text-stone-900 mb-3 flex items-center space-x-2">
                <Star size={14} className="text-amber-600" />
                <span>主理人说</span>
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                我始终相信，好的东西是有温度的。它不是流水线上的标准件，而是带着制作者的心意，来到你身边。希望通过品货官，能认识更多同频的朋友，分享我们对生活的理解。
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
              <h3 className="text-sm font-medium text-stone-900 mb-3 flex items-center space-x-2">
                <MapPin size={14} className="text-amber-600" />
                <span>店铺地址</span>
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {master.location}
              </p>
              <button
                onClick={handleStoreClick}
                className="w-full mt-4 py-2.5 bg-stone-50 text-stone-700 text-xs font-medium rounded-lg border border-stone-100 hover:bg-stone-100 transition-colors flex items-center justify-center space-x-1"
              >
                <span>查看店铺详情</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Ask Question Modal */}
      <AnimatePresence>
        {showAskModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAskModal(false)}
              className="fixed inset-0 bg-stone-900/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl max-w-md mx-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-100">
                      <img src={master.avatar} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-900">向 {master.name} 提问</p>
                      <p className="text-[10px] text-stone-400">{master.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAskModal(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:bg-stone-100 hover:text-stone-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="mb-4">
                  <textarea
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="说出你的疑问，好问题值得被认真回答…"
                    rows={4}
                    className="w-full p-4 bg-stone-50 rounded-xl text-sm text-stone-900 placeholder-stone-400 border border-stone-100 focus:outline-none focus:border-amber-300 transition-colors resize-none"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] text-stone-400">
                      好问题参考：关于产品、工艺、体验、搭配建议
                    </p>
                    <p className="text-[10px] text-stone-400">{questionText.length}/200</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] text-stone-400">大家都在问：</p>
                  <div className="flex flex-wrap gap-2">
                    {['新手入门推荐什么？', '店里可以体验吗？', '怎么挑选适合自己的？'].map((q, i) => (
                      <button
                        key={i}
                        onClick={() => setQuestionText(q)}
                        className="text-[11px] px-3 py-1.5 bg-stone-50 text-stone-600 rounded-full border border-stone-100 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-100 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSubmitQuestion}
                  disabled={!questionText.trim()}
                  className={`w-full mt-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                    questionText.trim()
                      ? 'bg-stone-900 text-amber-50 hover:bg-stone-800'
                      : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  提交问题
                </button>
                <div className="h-safe" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
