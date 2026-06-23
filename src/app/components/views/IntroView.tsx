import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Aperture, Settings, Store, Network, ChevronRight } from 'lucide-react';

interface IntroViewProps {
  onComplete: () => void;
}

export function IntroView({ onComplete }: IntroViewProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Five Elements converging (Slower, 4.5s for text readability)
    // Phase 1: Text Logo Reveal (1.5s)
    // Phase 2: Features List with Flywheel
    const t1 = setTimeout(() => setPhase(1), 4500);
    const t2 = setTimeout(() => setPhase(2), 6000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const RADIUS = 140;

  // 五个角色，以五边形（五行阵）排列
  const phase0Icons = [
    { Icon: User, label: '消费者', angle: -90 },
    { Icon: Aperture, label: '品鉴官', angle: -18 },
    { Icon: Network, label: '生态消费商', angle: 54 },
    { Icon: Store, label: '异业商家', angle: 126 },
    { Icon: Settings, label: '源头工厂', angle: 198 },
  ];

  const features = [
    { title: '兼顾品质与低价' },
    { title: '线上线下异业联动' },
    { title: '生态共治\n多方共建' },
    { title: '信任通过圈层\n自然传递' },
    { title: '消费即共建\n交易即回馈' },
    { title: '数据驱动\n反向孵化' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center relative overflow-hidden px-6 text-stone-800 font-sans">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/60 via-stone-50 to-stone-50 pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 z-50 text-stone-400 text-xs tracking-widest hover:text-stone-700 transition-colors bg-white/50 px-3 py-1.5 rounded-full border border-stone-200/50 backdrop-blur"
      >
        跳过
      </button>

      {/* Phase 0: Five Elements Spinning & Converging */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div
            key="phase0"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.3 } }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                // 修改为：入场 -> 缓慢旋转（留出充足阅读时间） -> 快速收缩爆发
                rotate: [0, 45, 180, 540]
              }}
              transition={{
                duration: 4.5,
                times: [0, 0.15, 0.8, 1], // 15%~80% 为平缓旋转期
                ease: "easeInOut"
              }}
            >
              {/* Connecting Pentagon Ring */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-amber-200/50 border-dashed" />
              
              {/* Center Energy Core */}
              <motion.div 
                className="absolute w-12 h-12 bg-amber-400/20 rounded-full blur-xl"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {phase0Icons.map((item, i) => {
                const rad = item.angle * (Math.PI / 180);
                const x = RADIUS * Math.cos(rad);
                const y = RADIUS * Math.sin(rad);

                return (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{ x, y }}
                    // 反向旋转以保持图标和文字始终正立（摩天轮效果）
                    animate={{ rotate: [0, -45, -180, -540] }}
                    transition={{
                      duration: 4.5,
                      times: [0, 0.15, 0.8, 1],
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_30px_rgb(245,158,11,0.15)] border border-amber-100/80 relative">
                      {/* Ripple tail effect */}
                      <motion.div
                        className="absolute w-full h-full rounded-full border border-amber-300/40"
                        animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <item.Icon className="text-amber-500 w-6 h-6 z-10 relative" />
                    </div>
                    {/* 加粗并稍微加大字号，提升阅读清晰度 */}
                    <div className="mt-3 text-[13px] text-stone-800 tracking-widest font-semibold w-max text-center drop-shadow-sm">
                      {item.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 1 & 2: Bold Text Logo and Subtitle */}
      {phase >= 1 && (
        <motion.div
          key="logo-text"
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{
            scale: phase === 2 ? 0.85 : 1,
            opacity: 1,
            filter: 'blur(0px)',
            y: phase === 2 ? -240 : 0,
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute flex flex-col items-center justify-center z-20 w-full"
        >
          <div className="relative flex flex-col items-center">
            {/* Burst effect on appearance (Birth of the logo from 5 elements) */}
            {phase === 1 && (
              <motion.div
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute inset-0 bg-amber-400 rounded-full blur-3xl -z-10"
              />
            )}

            {/* Bold Text Replacement for Logo */}
            <div className="relative">
              <motion.div 
                className="text-5xl font-serif font-bold text-stone-900 tracking-[0.25em] ml-3 mb-2 drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                品货官
              </motion.div>
              
              {/* Refined Orbiting stars */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)] -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)] -translate-x-1/2" />
                <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)] -translate-y-1/2" />
                <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)] -translate-y-1/2" />
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-xs text-amber-600/90 font-light"
            >
              品你所想，爱你所爱
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Phase 2: Core Ecological Features */}
      {phase === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center mt-28 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center space-x-3 mb-10"
          >
            <div className="w-8 h-[1px] bg-amber-300/50"></div>
            <div className="text-stone-800 text-xs tracking-[0.3em] uppercase font-serif font-medium">
              品货官消费生态商城
            </div>
            <div className="w-8 h-[1px] bg-amber-300/50"></div>
          </motion.div>

          <div className="relative w-full max-w-sm">
            {/* Elegant Flywheel Rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { delay: 1.5, duration: 1.5 },
                scale: { delay: 1.5, duration: 1.5 },
                rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute -inset-10 border border-amber-200/50 rounded-full pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -ml-[3px] -mb-[3px] bg-amber-300 rounded-full" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{
                opacity: { delay: 1.8, duration: 1.5 },
                rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute -inset-14 border-[0.5px] border-stone-200 rounded-full pointer-events-none border-dashed"
            />

            <div className="grid grid-cols-2 gap-x-4 gap-y-5 relative z-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.6 + i * 0.15, 
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="relative bg-white/80 backdrop-blur-md rounded-2xl p-5 text-center flex items-center justify-center min-h-[84px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white/60 group overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Flashing spot on appearance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
                    className="absolute top-2 right-2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                  />
                  <span className="relative z-10 text-stone-700 text-[13px] tracking-wider leading-loose whitespace-pre-line font-medium">
                    {f.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            onClick={onComplete}
            className="mt-20 w-full max-w-[240px] bg-stone-900 text-white py-4 rounded-full text-sm font-medium tracking-[0.2em] hover:bg-stone-800 transition-colors flex items-center justify-center shadow-xl shadow-stone-900/10 group"
          >
            进入品货官 
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronRight size={16} className="ml-2 text-amber-400" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
