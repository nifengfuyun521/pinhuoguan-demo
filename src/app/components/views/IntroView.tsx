import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Aperture, Settings, Store, Network, ChevronRight } from 'lucide-react';
import logoMark from '../../../imports/logo-mark-black.jpg';

interface IntroViewProps {
  onComplete: () => void;
}

export function IntroView({ onComplete }: IntroViewProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Five roles gather into a refined brand seal.
    // Phase 1: Logo reveal.
    // Phase 2: Features List with Flywheel
    const t1 = setTimeout(() => setPhase(1), 3800);
    const t2 = setTimeout(() => setPhase(2), 5200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const RADIUS = 126;

  // 五个角色，以五边形（五行阵）排列
  const phase0Icons = [
    { Icon: User, label: '消费者', desc: '真实需求', angle: -90 },
    { Icon: Aperture, label: '品鉴官', desc: '专业判断', angle: -18 },
    { Icon: Network, label: '生态消费商', desc: '信任扩散', angle: 54 },
    { Icon: Store, label: '异业商家', desc: '本地权益', angle: 126 },
    { Icon: Settings, label: '源头工厂', desc: '源头供给', angle: 198 },
  ];

  const features = [
    { title: '品质与价格', subtitle: '严选好物' },
    { title: '附近权益', subtitle: '异业联动' },
    { title: '圈层信任', subtitle: '自然传递' },
    { title: '消费共建', subtitle: '交易回馈' },
    { title: '品鉴内容', subtitle: '真实测评' },
    { title: '反向孵化', subtitle: '源头共创' },
  ];

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#f4efe6] px-6 text-stone-800 font-sans">
      {/* Silk paper background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(251,191,36,0.28),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(120,113,108,0.20),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(146,64,14,0.15),transparent_32%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.7)_36%,transparent_64%),repeating-linear-gradient(90deg,rgba(68,64,60,0.05)_0,rgba(68,64,60,0.05)_1px,transparent_1px,transparent_14px)] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full border border-amber-200/40" />
      <div className="absolute bottom-[-220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-stone-900/5 blur-3xl" />

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute right-5 top-6 z-50 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-[11px] tracking-[0.28em] text-stone-500 shadow-sm backdrop-blur-xl transition-colors hover:text-stone-900"
      >
        跳过
      </button>

      {/* Phase 0: Five Elements Spinning & Converging */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div
            key="phase0"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.96, transition: { duration: 0.45 } }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0.72, 1, 1, 0.18],
                opacity: [0, 1, 1, 0],
                rotate: [0, 18, 72, 180]
              }}
              transition={{
                duration: 3.8,
                times: [0, 0.18, 0.76, 1],
                ease: "easeInOut"
              }}
            >
              <div className="absolute h-[330px] w-[330px] rounded-full border border-white/60 shadow-[inset_0_0_60px_rgba(255,255,255,0.55)]" />
              <div className="absolute h-[254px] w-[254px] rounded-full border border-amber-300/40 border-dashed" />
              <div className="absolute h-[176px] w-[176px] rounded-full border border-stone-300/40" />
              
              {/* Center logo stays visually upright while the surrounding ecosystem gathers. */}
              <motion.div
                className="absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/30 bg-stone-950 p-1 shadow-[0_18px_58px_rgba(28,25,23,0.2)] ring-1 ring-white/50"
                animate={{ rotate: [0, -18, -72, -180] }}
                transition={{
                  duration: 3.8,
                  times: [0, 0.18, 0.76, 1],
                  ease: 'easeInOut'
                }}
              >
                <div className="absolute -inset-4 rounded-[1.75rem] bg-amber-300/20 blur-xl" />
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-inner shadow-white/10">
                  <img src={logoMark} alt="品货官 Logo" className="h-full w-full object-cover" />
                </div>
              </motion.div>

              {phase0Icons.map((item, i) => {
                const rad = item.angle * (Math.PI / 180);
                const x = RADIUS * Math.cos(rad);
                const y = RADIUS * Math.sin(rad);

                return (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{ x, y }}
                    animate={{ rotate: [0, -18, -72, -180] }}
                    transition={{
                      duration: 3.8,
                      times: [0, 0.18, 0.76, 1],
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative flex h-15 w-15 items-center justify-center rounded-2xl border border-white/80 bg-white/75 shadow-[0_18px_45px_rgba(87,83,78,0.12)] backdrop-blur-xl">
                      {/* Ripple tail effect */}
                      <motion.div
                        className="absolute h-full w-full rounded-2xl border border-amber-300/40"
                        animate={{ scale: [1, 1.55], opacity: [0.7, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.18 }}
                      />
                      <item.Icon className="relative z-10 h-6 w-6 text-amber-600" />
                    </div>
                    <div className="mt-3 w-max rounded-full border border-white/60 bg-white/45 px-3 py-1 text-center text-[12px] font-semibold tracking-[0.18em] text-stone-800 shadow-sm backdrop-blur-md">
                      {item.label}
                    </div>
                    <div className="mt-1 text-[9px] tracking-[0.24em] text-stone-400">{item.desc}</div>
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
            scale: phase === 2 ? 0.74 : 1,
            opacity: 1,
            filter: 'blur(0px)',
            y: phase === 2 ? -276 : 0,
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute flex flex-col items-center justify-center z-20 w-full"
        >
          <div className="relative flex flex-col items-center">
            {phase === 1 && (
              <motion.div
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 5, opacity: 0 }}
                transition={{ duration: 1.25, ease: 'easeOut' }}
                className="absolute inset-0 -z-10 rounded-full bg-amber-300 blur-3xl"
              />
            )}

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.86 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-[1.8rem] border border-amber-200/30 bg-stone-950 p-1.5 shadow-[0_26px_76px_rgba(28,25,23,0.22)] ring-1 ring-white/60"
            >
              <img src={logoMark} alt="品货官 Logo" className="h-full w-full rounded-[1.35rem] object-cover" />
            </motion.div>

            <div className="relative flex flex-col items-center">
              <motion.div 
                className="ml-3 text-5xl font-serif font-bold tracking-[0.26em] text-stone-950 drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                品货官
              </motion.div>
              
              {/* Refined Orbiting stars */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-10 pointer-events-none"
              >
                <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.7)]" />
                <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-stone-400/70" />
                <div className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-stone-400/70" />
                <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.7)]" />
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.28em' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-xs font-medium text-amber-700/90"
            >
              品你所想，爱你所爱
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-5 h-px w-28 origin-center bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
            />
          </div>
        </motion.div>
      )}

      {/* Phase 2: Core Ecological Features */}
      {phase === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="z-10 mt-24 flex w-full flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="mb-3 flex items-center space-x-3">
              <div className="h-px w-8 bg-amber-400/50" />
              <div className="h-1.5 w-1.5 rotate-45 bg-amber-500" />
              <div className="h-px w-8 bg-amber-400/50" />
            </div>
            <div className="font-serif text-xs font-medium uppercase tracking-[0.3em] text-stone-800">
              品货官消费生态商城
            </div>
            <p className="mt-2 text-[10px] tracking-[0.2em] text-stone-500">让消费回到信任、品质与真实体验</p>
          </motion.div>

          <div className="relative w-full max-w-sm rounded-[2rem] border border-white/70 bg-white/35 p-4 shadow-[0_28px_80px_rgba(87,83,78,0.14)] backdrop-blur-xl">
            {/* Elegant Flywheel Rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { delay: 1.5, duration: 1.5 },
                scale: { delay: 1.5, duration: 1.5 },
                rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
              }}
              className="pointer-events-none absolute -inset-8 rounded-full border border-amber-200/45"
            >
              <div className="absolute left-1/2 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
              <div className="absolute bottom-0 left-1/2 -mb-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-amber-300" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{
                opacity: { delay: 1.8, duration: 1.5 },
                rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              }}
              className="pointer-events-none absolute -inset-12 rounded-full border-[0.5px] border-dashed border-stone-300/70"
            />

            <div className="relative z-10 grid grid-cols-2 gap-3">
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
                  className="group relative flex min-h-[82px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/75 p-4 text-center shadow-[0_8px_26px_rgba(87,83,78,0.07)] backdrop-blur-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Flashing spot on appearance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
                    className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                  />
                  <span className="relative z-10 font-serif text-[14px] font-semibold tracking-[0.14em] text-stone-800">
                    {f.title}
                  </span>
                  <span className="relative z-10 mt-1 text-[10px] tracking-[0.18em] text-stone-400">{f.subtitle}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            onClick={onComplete}
            className="group mt-14 flex w-full max-w-[252px] items-center justify-center rounded-full bg-stone-950 py-4 text-sm font-medium tracking-[0.2em] text-amber-50 shadow-xl shadow-stone-900/15 transition-colors hover:bg-stone-800"
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
