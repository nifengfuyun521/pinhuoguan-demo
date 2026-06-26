import React from 'react';
import { Home, ShoppingBag, Aperture, User, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BottomNavProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export function BottomNav({ currentView, onChangeView }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'store', label: '品库', icon: ShoppingBag },
    { id: 'experience', label: '体验', icon: Sparkles },
    { id: 'community', label: '圈层', icon: Aperture },
    { id: 'profile', label: '我的', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-50 backdrop-blur-md border-t border-stone-200 pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-300",
                isActive ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
              )}
            >
              <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              <span className={cn("text-[10px] font-medium tracking-widest", isActive ? "opacity-100" : "opacity-70")}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
