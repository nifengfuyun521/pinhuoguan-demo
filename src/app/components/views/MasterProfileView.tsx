import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, MapPin, Calendar, Heart, Share2, ChevronRight, Grid3X3, BookOpen, Store, MessageCircle } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'notes' | 'about'>('notes');

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
    </motion.div>
  );
}
