import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'What I Do', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#070A12]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
            : 'bg-[#FAF9F7]/85 backdrop-blur-md border-b border-rose-100/80 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className={`w-9 h-9 rounded-full p-0.5 shadow-md transition-transform group-hover:scale-105 overflow-hidden ${
            isDark
              ? 'bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-cyan-500/20'
              : 'bg-gradient-to-tr from-rose-500 to-red-600 shadow-rose-500/20'
          }`}>
            <img
              src="/rohit-photo.jpg"
              alt="Rohit Vijay Dusane"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <span className={`font-sans ${isDark ? 'text-slate-100' : 'text-zinc-900'}`}>
            Rohit<span className={isDark ? 'text-cyan-400 font-bold' : 'text-rose-600 font-bold'}>.</span>
          </span>
          <span className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${
            isDark
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
              : 'bg-rose-50 text-rose-700 border-rose-200/60'
          }`}>
            {isDark ? 'CSE Neon' : 'CS & AI'}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center gap-1 backdrop-blur-md px-4 py-1.5 rounded-full border shadow-sm ${
          isDark
            ? 'bg-slate-900/80 border-cyan-500/20 shadow-black/30'
            : 'bg-white/80 border-rose-100/80 shadow-rose-900/5'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isDark
                  ? 'text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/40'
                  : 'text-zinc-600 hover:text-rose-600 hover:bg-rose-50/70'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center gap-3">
          
          {/* Light/Dark Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-bold transition-all shadow-sm ${
              isDark
                ? 'bg-slate-900 text-cyan-400 border-cyan-500/40 hover:bg-cyan-950/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'bg-white text-zinc-700 border-rose-200 hover:bg-rose-50 hover:text-rose-600'
            }`}
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span className="hidden sm:inline font-mono text-[11px]">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-rose-600" />
                <span className="hidden sm:inline font-mono text-[11px]">Neon Mode</span>
              </>
            )}
          </button>

          {/* Let's Connect CTA */}
          <a
            href="#contact"
            className={`hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white transition-all hover:-translate-y-0.5 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/20'
                : 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-md shadow-rose-600/20'
            }`}
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors shadow-sm ${
              isDark
                ? 'bg-slate-900 border-cyan-500/30 text-slate-200 hover:text-cyan-400'
                : 'bg-white border-rose-100 text-zinc-700 hover:text-rose-600'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden backdrop-blur-xl border-b px-6 py-6 shadow-xl ${
              isDark
                ? 'bg-[#070A12]/95 border-cyan-500/20'
                : 'bg-[#FAF9F7]/95 border-rose-100'
            }`}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isDark
                      ? 'text-slate-200 hover:bg-cyan-950/40 hover:text-cyan-400'
                      : 'text-zinc-700 hover:bg-rose-50 hover:text-rose-600'
                  }`}
                >
                  <span>{link.name}</span>
                  <Sparkles className={`w-3.5 h-3.5 opacity-60 ${isDark ? 'text-cyan-400' : 'text-rose-400'}`} />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full py-3 rounded-2xl text-xs font-bold border flex items-center justify-center gap-2 ${
                    isDark
                      ? 'bg-slate-900 text-cyan-400 border-cyan-500/40'
                      : 'bg-white text-zinc-800 border-rose-200'
                  }`}
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-rose-600" />}
                  <span>Switch to {isDark ? 'Light GenEmoji' : 'Neon CSE Dark'} Mode</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold text-white shadow-md ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
                      : 'bg-gradient-to-r from-rose-600 to-red-600'
                  }`}
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
