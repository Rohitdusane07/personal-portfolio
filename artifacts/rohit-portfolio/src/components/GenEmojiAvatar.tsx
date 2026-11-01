import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Cpu, Brain, Terminal } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface GenEmojiAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  showBadges?: boolean;
}

export const GenEmojiAvatar: React.FC<GenEmojiAvatarProps> = ({ size = 'lg', showBadges = true }) => {
  const { isDark } = useTheme();

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-44 h-44',
    lg: 'w-72 h-72 lg:w-88 lg:h-88',
  };

  return (
    <div className="relative flex items-center justify-center p-4 sm:p-8">
      {/* Background Soft Glow Aura */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute inset-0 rounded-full blur-3xl pointer-events-none ${
          isDark
            ? 'bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-rose-500/20'
            : 'bg-gradient-to-tr from-rose-400/30 via-pink-300/40 to-red-400/20'
        }`}
      />

      {/* Outer Decorative Ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-dashed ${
          isDark ? 'border-cyan-400/60' : 'border-rose-200/70'
        } animate-[spin_40s_linear_infinite] pointer-events-none`}
      />

      {/* Avatar Container with User's Uploaded Photo */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className={`relative ${sizeClasses[size]} rounded-full p-2 border-4 backdrop-blur-md flex items-center justify-center overflow-hidden transition-all shadow-2xl ${
          isDark
            ? 'bg-gradient-to-b from-slate-900 via-cyan-950/60 to-purple-950/80 shadow-[0_0_45px_rgba(6,182,212,0.35)] border-cyan-400/80'
            : 'bg-gradient-to-b from-rose-50 via-pink-100/50 to-red-100/80 shadow-rose-900/15 border-white'
        }`}
      >
        {/* User's Photo */}
        <div className="w-full h-full rounded-full overflow-hidden relative group">
          <img
            src="/rohit-photo.jpg"
            alt="Rohit Vijay Dusane"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle Cyber Gradient Overlay in Dark Mode */}
          {isDark && (
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-transparent to-purple-900/10 pointer-events-none" />
          )}
        </div>
      </motion.div>

      {/* Floating Badges */}
      {showBadges && (
        <>
          {/* Badge 1: AI Builder (Top Left - frames above shoulder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: [-4, 4, -4] }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className={`absolute -left-2 top-0 sm:-left-8 sm:top-2 glass-card px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full shadow-lg flex items-center gap-2 z-20 ${
              isDark ? 'border-cyan-400/50 shadow-cyan-500/20' : 'border-rose-200/80 shadow-rose-500/10'
            }`}
          >
            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white ${isDark ? 'bg-cyan-500' : 'bg-rose-500'}`}>
              <Brain className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <span className={`text-[11px] sm:text-xs font-semibold whitespace-nowrap ${isDark ? 'text-slate-100' : 'text-zinc-800'}`}>AI Builder</span>
          </motion.div>

          {/* Badge 2: Full-Stack Developer (Top Right - high above head/ear, NO face overlap!) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: [4, -4, 4] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.15 },
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
            }}
            className={`absolute -right-2 -top-2 sm:-right-8 sm:top-2 glass-card px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full shadow-lg flex items-center gap-2 z-20 ${
              isDark ? 'border-purple-400/50 shadow-purple-500/20' : 'border-rose-200/80 shadow-rose-500/10'
            }`}
          >
            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white ${isDark ? 'bg-purple-600' : 'bg-rose-600'}`}>
              <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <span className={`text-[11px] sm:text-xs font-semibold whitespace-nowrap ${isDark ? 'text-slate-100' : 'text-zinc-800'}`}>Full-Stack Developer</span>
          </motion.div>

          {/* Badge 3: Problem Solver (Bottom Left - well below chin) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [-3, 5, -3] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
            }}
            className={`absolute -left-2 -bottom-2 sm:-left-6 sm:bottom-2 glass-card px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full shadow-lg flex items-center gap-2 z-20 ${
              isDark ? 'border-pink-400/50 shadow-pink-500/20' : 'border-pink-200/80 shadow-rose-500/10'
            }`}
          >
            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white ${isDark ? 'bg-pink-500' : 'bg-pink-500'}`}>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <span className={`text-[11px] sm:text-xs font-semibold whitespace-nowrap ${isDark ? 'text-slate-100' : 'text-zinc-800'}`}>Problem Solver</span>
          </motion.div>

          {/* Badge 4: Open Source (Bottom Right - well below chin) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [5, -3, 5] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.45 },
              y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
            }}
            className={`absolute -right-2 -bottom-2 sm:-right-6 sm:bottom-2 glass-card px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full shadow-lg flex items-center gap-2 z-20 ${
              isDark ? 'border-emerald-400/50 shadow-emerald-500/20' : 'border-red-200/80 shadow-rose-500/10'
            }`}
          >
            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white ${isDark ? 'bg-emerald-500' : 'bg-red-700'}`}>
              <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <span className={`text-[11px] sm:text-xs font-semibold whitespace-nowrap ${isDark ? 'text-slate-100' : 'text-zinc-800'}`}>Open Source</span>
          </motion.div>
        </>
      )}
    </div>
  );
};
