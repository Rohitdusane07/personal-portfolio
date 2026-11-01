import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Lightbulb, Bot, Rocket, Palette, BookOpen } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const PersonalitySection: React.FC = () => {
  const { isDark } = useTheme();

  const traits = [
    {
      title: 'Coffee + Code',
      icon: Coffee,
      emoji: '☕',
      desc: 'Fueling late-night debugging and algorithm sessions.',
      lightBg: 'from-amber-500/10 via-rose-500/5 to-transparent',
      darkBg: 'from-amber-500/20 via-cyan-500/10 to-transparent',
    },
    {
      title: 'Building ideas',
      icon: Lightbulb,
      emoji: '💡',
      desc: 'Turning raw concepts into tangible, deployable software.',
      lightBg: 'from-yellow-500/10 via-rose-500/5 to-transparent',
      darkBg: 'from-yellow-500/20 via-purple-500/10 to-transparent',
    },
    {
      title: 'AI enthusiast',
      icon: Bot,
      emoji: '🤖',
      desc: 'Fascinated by neural networks, agentic AI, and smart systems.',
      lightBg: 'from-rose-500/10 via-pink-500/5 to-transparent',
      darkBg: 'from-cyan-500/20 via-purple-500/10 to-transparent',
    },
    {
      title: 'Always experimenting',
      icon: Rocket,
      emoji: '🚀',
      desc: 'Testing new web tools, frameworks, and side projects.',
      lightBg: 'from-red-500/10 via-rose-500/5 to-transparent',
      darkBg: 'from-purple-500/20 via-cyan-500/10 to-transparent',
    },
    {
      title: 'UI lover',
      icon: Palette,
      emoji: '🎨',
      desc: 'Obsessed with fluid micro-interactions and clean typography.',
      lightBg: 'from-pink-500/10 via-rose-500/5 to-transparent',
      darkBg: 'from-pink-500/20 via-cyan-500/10 to-transparent',
    },
    {
      title: 'Constant learner',
      icon: BookOpen,
      emoji: '📚',
      desc: 'Driven by curiosity and a commitment to lifelong growth.',
      lightBg: 'from-purple-500/10 via-rose-500/5 to-transparent',
      darkBg: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
    },
  ];

  return (
    <section className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-[#0B0F19]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>PERSONAL VIBE</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            Behind the code
          </h2>
          <p className={`font-script text-2xl sm:text-3xl mt-1 font-bold ${
            isDark ? 'text-cyan-400 neon-text-cyan' : 'text-rose-600'
          }`}>
            what keeps the engine running
          </p>
        </div>

        {/* Content Row: LEFT Avatar, RIGHT Personality Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Maroon Shirt Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:col-span-4 flex justify-center items-start lg:sticky lg:top-28 mb-8 lg:mb-0"
          >
            <img
              src="/avatars/behind-maroonshirt.png"
              alt="Rohit Vijay Dusane - Personal Vibe"
              className={`w-64 sm:w-80 lg:w-[350px] max-h-[640px] object-contain object-bottom select-none transition-all ${
                isDark
                  ? 'drop-shadow-[0_0_40px_rgba(6,182,212,0.45)]'
                  : 'drop-shadow-[0_15px_35px_rgba(220,38,38,0.22)]'
              }`}
            />
          </motion.div>

          {/* RIGHT: Personality Cards Grid */}
          <div className="order-2 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {traits.map((trait, index) => {
            const IconComponent = trait.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                key={trait.title}
                className={`glass-card p-6 rounded-3xl border bg-gradient-to-br shadow-sm hover:shadow-xl transition-all flex flex-col justify-between ${
                  isDark
                    ? `${trait.darkBg} bg-slate-900/80 border-cyan-500/30 hover:border-cyan-400 shadow-black/40`
                    : `${trait.lightBg} border-rose-100 hover:border-rose-300`
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-3xl">{trait.emoji}</span>
                  <div className={`w-10 h-10 rounded-2xl shadow-sm border flex items-center justify-center ${
                    isDark ? 'bg-slate-800 border-cyan-500/40 text-cyan-400' : 'bg-white border-rose-100 text-rose-600'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className={`text-lg font-extrabold mb-1 ${isDark ? 'text-slate-100' : 'text-zinc-900'}`}>
                    {trait.title}
                  </h3>
                  <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-zinc-600'}`}>
                    {trait.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
