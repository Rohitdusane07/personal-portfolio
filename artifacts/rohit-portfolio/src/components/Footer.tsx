import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 text-xs font-medium border-t transition-colors duration-300 ${
      isDark ? 'bg-[#070A12] border-cyan-500/20 text-slate-400' : 'bg-white border-rose-100 text-zinc-500'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 <strong className={isDark ? 'text-slate-100 font-bold' : 'text-zinc-800 font-bold'}>Rohit Vijay Dusane</strong>. All rights reserved.
        </div>

        <div className="flex items-center gap-1.5">
          <span>Designed & built by Rohit Vijay Dusane</span>
          <Heart className={`w-3.5 h-3.5 inline-block animate-pulse ${
            isDark ? 'fill-cyan-400 text-cyan-400' : 'fill-rose-500 text-rose-500'
          }`} />
        </div>
      </div>
    </footer>
  );
};
