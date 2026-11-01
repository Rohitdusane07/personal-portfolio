import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Brain, Database, Wrench, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const TechStack: React.FC = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Sparkles },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'frontend', name: 'Frontend', icon: Layout },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'ai', name: 'AI & Data', icon: Brain },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'tools', name: 'Tools', icon: Wrench },
  ];

  const techItems = [
    // Languages
    { name: 'Java', category: 'languages', lightBg: 'bg-red-500/10 text-red-700 border-red-200', darkBg: 'bg-red-500/15 text-red-300 border-red-500/40' },
    { name: 'Python', category: 'languages', lightBg: 'bg-amber-500/10 text-amber-800 border-amber-200', darkBg: 'bg-amber-500/15 text-amber-300 border-amber-500/40' },
    { name: 'C++', category: 'languages', lightBg: 'bg-rose-500/10 text-rose-700 border-rose-200', darkBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40' },
    { name: 'C', category: 'languages', lightBg: 'bg-slate-500/10 text-slate-700 border-slate-300', darkBg: 'bg-slate-500/20 text-slate-300 border-slate-400/40' },
    { name: 'JavaScript', category: 'languages', lightBg: 'bg-yellow-500/10 text-yellow-800 border-yellow-200', darkBg: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/40' },
    { name: 'TypeScript', category: 'languages', lightBg: 'bg-blue-500/10 text-blue-700 border-blue-200', darkBg: 'bg-blue-500/15 text-blue-300 border-blue-500/40' },
    { name: 'SQL', category: 'languages', lightBg: 'bg-cyan-500/10 text-cyan-800 border-cyan-200', darkBg: 'bg-teal-500/15 text-teal-300 border-teal-500/40' },

    // Frontend
    { name: 'React.js', category: 'frontend', lightBg: 'bg-sky-500/10 text-sky-700 border-sky-200', darkBg: 'bg-sky-500/15 text-sky-300 border-sky-500/40' },
    { name: 'Tailwind CSS', category: 'frontend', lightBg: 'bg-teal-500/10 text-teal-700 border-teal-200', darkBg: 'bg-teal-500/15 text-teal-300 border-teal-500/40' },
    { name: 'Bootstrap', category: 'frontend', lightBg: 'bg-purple-500/10 text-purple-700 border-purple-200', darkBg: 'bg-purple-500/15 text-purple-300 border-purple-500/40' },
    { name: 'HTML5', category: 'frontend', lightBg: 'bg-orange-500/10 text-orange-700 border-orange-200', darkBg: 'bg-orange-500/15 text-orange-300 border-orange-500/40' },
    { name: 'CSS3', category: 'frontend', lightBg: 'bg-blue-500/10 text-blue-700 border-blue-200', darkBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40' },
    { name: 'Vite', category: 'frontend', lightBg: 'bg-purple-500/10 text-purple-700 border-purple-200', darkBg: 'bg-purple-500/15 text-purple-300 border-purple-500/40' },

    // Backend
    { name: 'Node.js', category: 'backend', lightBg: 'bg-emerald-500/10 text-emerald-800 border-emerald-200', darkBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40' },
    { name: 'Express.js', category: 'backend', lightBg: 'bg-zinc-500/10 text-zinc-800 border-zinc-200', darkBg: 'bg-slate-700/30 text-slate-200 border-slate-600/40' },
    { name: 'REST APIs', category: 'backend', lightBg: 'bg-rose-500/10 text-rose-800 border-rose-200', darkBg: 'bg-rose-500/15 text-rose-300 border-rose-500/40' },
    { name: 'PHP', category: 'backend', lightBg: 'bg-indigo-500/10 text-indigo-700 border-indigo-200', darkBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40' },

    // Database
    { name: 'MongoDB', category: 'database', lightBg: 'bg-green-600/10 text-green-800 border-green-200', darkBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { name: 'MySQL', category: 'database', lightBg: 'bg-blue-600/10 text-blue-800 border-blue-200', darkBg: 'bg-blue-600/15 text-blue-300 border-blue-500/40' },
    { name: 'Supabase', category: 'database', lightBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-200', darkBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40' },

    // AI / Data
    { name: 'Google Gemini AI', category: 'ai', lightBg: 'bg-cyan-500/10 text-cyan-800 border-cyan-200', darkBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50' },
    { name: 'Machine Learning', category: 'ai', lightBg: 'bg-rose-500/10 text-rose-700 border-rose-300', darkBg: 'bg-rose-500/20 text-rose-300 border-rose-400/50' },
    { name: 'Prompt Engineering', category: 'ai', lightBg: 'bg-purple-500/10 text-purple-700 border-purple-300', darkBg: 'bg-purple-500/20 text-purple-300 border-purple-400/50' },
    { name: 'Data Analytics', category: 'ai', lightBg: 'bg-amber-500/10 text-amber-800 border-amber-300', darkBg: 'bg-amber-500/20 text-amber-300 border-amber-400/50' },
    { name: 'OpenCV', category: 'ai', lightBg: 'bg-blue-500/10 text-blue-700 border-blue-300', darkBg: 'bg-blue-500/20 text-blue-300 border-blue-400/50' },

    // Tools
    { name: 'Git', category: 'tools', lightBg: 'bg-orange-600/10 text-orange-800 border-orange-200', darkBg: 'bg-orange-600/15 text-orange-300 border-orange-500/40' },
    { name: 'GitHub', category: 'tools', lightBg: 'bg-zinc-800/10 text-zinc-900 border-zinc-300', darkBg: 'bg-slate-800/60 text-slate-100 border-slate-600/50' },
    { name: 'GitHub Copilot', category: 'tools', lightBg: 'bg-purple-600/10 text-purple-800 border-purple-200', darkBg: 'bg-purple-600/20 text-purple-300 border-purple-500/40' },
    { name: 'VS Code', category: 'tools', lightBg: 'bg-sky-600/10 text-sky-800 border-sky-200', darkBg: 'bg-sky-600/15 text-sky-300 border-sky-500/40' },
    { name: 'Vercel', category: 'tools', lightBg: 'bg-zinc-900/10 text-zinc-900 border-zinc-300', darkBg: 'bg-slate-900/80 text-white border-slate-700' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-[#070A12]' : 'bg-[#FAF9F7]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>MY TOOLKIT</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            Things I build with
          </h2>
          <p className={`text-base mt-3 font-medium ${
            isDark ? 'text-slate-400' : 'text-zinc-500'
          }`}>
            Languages, frameworks, database systems & tools I use to bring ideas to life.
          </p>
        </div>

        {/* Content + RIGHT Avatar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Category Tabs & Pill Tags */}
          <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col items-center">
            {/* Category Selector Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-10 w-full">
              {categories.map((cat) => {
                const IconComp = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? isDark
                          ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                          : 'bg-rose-600 text-white shadow-lg shadow-rose-600/20 scale-105'
                        : isDark
                          ? 'bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/40 border border-cyan-500/20'
                          : 'bg-white text-zinc-600 hover:text-rose-600 hover:bg-rose-50 border border-zinc-200'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Pill Tags Display */}
            <motion.div
              layout
              className="flex flex-wrap items-center justify-center gap-3.5 w-full"
            >
              {filteredItems.map((tech) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ duration: 0.2 }}
                  key={tech.name}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold border shadow-sm transition-all cursor-default ${
                    isDark ? tech.darkBg : tech.lightBg
                  }`}
                >
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: White Shirt Avatar (Seated on Box) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center mb-8 lg:mb-0"
          >
            <img
              src="/avatars/tech-whiteshirt.png"
              alt="Rohit Vijay Dusane - Tech Skills"
              className={`w-64 sm:w-72 lg:w-[350px] max-h-[620px] object-contain object-bottom select-none transition-all ${
                isDark
                  ? 'drop-shadow-[0_0_40px_rgba(6,182,212,0.45)]'
                  : 'drop-shadow-[0_15px_35px_rgba(220,38,38,0.22)]'
              }`}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
