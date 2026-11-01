import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowDown, Sparkles, Terminal, Code2 } from 'lucide-react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { useTheme } from '@/context/ThemeContext';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/rohitdusane07', label: 'GitHub Profile' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rohitdusane07', label: 'LinkedIn Profile' },
    
    { name: 'Email', icon: Mail, href: 'mailto:rohitdusane.engineer@gmail.com', label: 'Email Me' },
  ];

  return (
    <section className="relative min-h-[92vh] pt-20 sm:pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden flex items-center justify-center bg-dot-pattern transition-colors duration-300">
      {/* Background Soft Glow Radial Aura */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
          isDark
            ? 'bg-gradient-to-tr from-cyan-900/40 via-purple-900/30 to-transparent'
            : 'bg-gradient-to-tr from-rose-200/30 via-pink-100/40 to-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Eyebrow Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-6 w-fit shadow-sm border transition-colors ${
                isDark
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40 shadow-cyan-500/10'
                  : 'bg-rose-50 text-rose-700 border-rose-200/80'
              }`}
            >
              <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-cyan-400' : 'bg-rose-500'}`} />
              <span>GOOGLE GEMINI AMBASSADOR • FULL-STACK & AI DEVELOPER</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 transition-colors ${
              isDark ? 'text-slate-100' : 'text-zinc-900'
            }`}>
              Turning ideas <br />
              into{' '}
              <span
                className={`font-script font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block transform -rotate-1 relative transition-colors ${
                  isDark ? 'text-cyan-400 neon-text-cyan' : 'text-rose-600'
                }`}
              >
                intelligent code.
                <svg
                  className={`absolute -bottom-2 left-0 w-full h-3 opacity-80 ${
                    isDark ? 'text-cyan-400' : 'text-rose-300'
                  }`}
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Mobile Only Avatar: Placed right after Heading */}
            <div className="flex lg:hidden justify-center my-8">
              <GenEmojiAvatar size="lg" showBadges={true} />
            </div>

            {/* Supporting Text */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-medium transition-colors ${
              isDark ? 'text-slate-300' : 'text-zinc-600'
            }`}>
              I'm <strong className={isDark ? 'text-white font-semibold' : 'text-zinc-900 font-semibold'}>Rohit Vijay Dusane</strong> — a Google Gemini Student Ambassador, AI Engineer, and Full Stack Developer skilled in React.js, Node.js, MongoDB, REST APIs, and scalable AI solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className={`px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-1 flex items-center gap-2 ${
                  isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/25'
                    : 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-xl shadow-rose-600/25'
                }`}
              >
                <span>View My Work</span>
                <Sparkles className="w-4 h-4 text-pink-200" />
              </a>

              <a
                href="#contact"
                className={`px-7 py-3.5 rounded-full text-sm font-bold border transition-all hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900 text-slate-200 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/40'
                    : 'bg-white text-zinc-800 border-zinc-200 hover:bg-rose-50/80 hover:border-rose-300 shadow-md shadow-zinc-900/5'
                }`}
              >
                Let's Connect
              </a>
            </div>

            {/* Social Icons & Status */}
            <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 transition-colors ${
              isDark ? 'border-cyan-500/20' : 'border-rose-100'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold uppercase tracking-wider mr-1 ${
                  isDark ? 'text-slate-400' : 'text-zinc-400'
                }`}>Find me:</span>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm ${
                        isDark
                          ? 'bg-slate-900 border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-950/60'
                          : 'bg-white border-rose-100/80 text-zinc-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50/50'
                      }`}
                    >
                      <IconComponent className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
                isDark
                  ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                  : 'bg-emerald-50 border-emerald-200/60 text-emerald-700'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Open for Collaborations</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: GenEmoji Avatar (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end py-6"
          >
            <GenEmojiAvatar size="lg" showBadges={true} />
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#about"
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs font-semibold transition-colors ${
          isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-zinc-400 hover:text-rose-600'
        }`}
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className={`w-8 h-8 rounded-full border flex items-center justify-center shadow-sm ${
            isDark
              ? 'border-cyan-500/40 bg-slate-900 text-cyan-400'
              : 'border-rose-200 bg-white text-rose-500'
          }`}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </a>
    </section>
  );
};
