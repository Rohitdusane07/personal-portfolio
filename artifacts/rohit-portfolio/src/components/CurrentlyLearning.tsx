import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Code2, Database, Cpu, BarChart } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const CurrentlyLearning: React.FC = () => {
  const { isDark } = useTheme();

  const topics = [
    {
      name: 'Artificial Intelligence',
      status: 'Exploring',
      icon: Brain,
      lightColor: 'bg-rose-500 text-white',
      darkColor: 'bg-cyan-500 text-slate-950',
      lightBadgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      darkBadgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
      description: 'Generative AI models, neural networks and agentic workflows.',
    },
    {
      name: 'Full-Stack Development',
      status: 'Building',
      icon: Code2,
      lightColor: 'bg-red-600 text-white',
      darkColor: 'bg-purple-600 text-white',
      lightBadgeBg: 'bg-red-50 text-red-700 border-red-200',
      darkBadgeBg: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
      description: 'Scalable React & Node architectures with robust API contracts.',
    },
    {
      name: 'Data Structures & Algorithms',
      status: 'Practicing',
      icon: Cpu,
      lightColor: 'bg-pink-500 text-white',
      darkColor: 'bg-pink-500 text-white',
      lightBadgeBg: 'bg-pink-50 text-pink-700 border-pink-200',
      darkBadgeBg: 'bg-pink-950/80 text-pink-300 border-pink-500/40',
      description: 'Problem solving efficiency, graph algorithms and dynamic programming.',
    },
    {
      name: 'System Design',
      status: 'Learning',
      icon: Database,
      lightColor: 'bg-purple-600 text-white',
      darkColor: 'bg-blue-600 text-white',
      lightBadgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      darkBadgeBg: 'bg-blue-950/80 text-blue-300 border-blue-500/40',
      description: 'Microservices, database indexing, caching and load distribution.',
    },
    {
      name: 'Data Analytics',
      status: 'Building',
      icon: BarChart,
      lightColor: 'bg-amber-600 text-white',
      darkColor: 'bg-emerald-500 text-slate-950',
      lightBadgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      darkBadgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
      description: 'Exploratory data analysis, statistical insights and dashboarding.',
    },
  ];

  return (
    <section className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-[#070A12]' : 'bg-[#FAF9F7]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>CONTINUOUS GROWTH</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            Currently Leveling Up
          </h2>
          <p className={`text-base mt-2 font-medium ${
            isDark ? 'text-slate-400' : 'text-zinc-500'
          }`}>
            Active focus areas and tech domains I am actively practicing and deepening every day.
          </p>
        </div>

        {/* Content Row: LEFT Progress Cards, RIGHT Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Progress Cards */}
          <div className="order-2 lg:order-1 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={topic.name}
                className={`glass-card p-6 rounded-3xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/80 border-cyan-500/30 shadow-black/40'
                    : 'bg-white border-rose-100 shadow-rose-900/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ${
                      isDark ? topic.darkColor : topic.lightColor
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      isDark ? topic.darkBadgeBg : topic.lightBadgeBg
                    }`}>
                      {topic.status}
                    </span>
                  </div>

                  <h3 className={`text-lg font-extrabold mb-2 ${
                    isDark ? 'text-slate-100' : 'text-zinc-900'
                  }`}>
                    {topic.name}
                  </h3>
                  <p className={`text-xs leading-relaxed font-medium ${
                    isDark ? 'text-slate-400' : 'text-zinc-500'
                  }`}>
                    {topic.description}
                  </p>
                </div>

                {/* Status Bar */}
                <div className={`mt-6 pt-4 border-t flex items-center gap-2 ${
                  isDark ? 'border-cyan-500/20' : 'border-rose-100'
                }`}>
                  <div className={`flex-1 h-2 rounded-full overflow-hidden relative ${
                    isDark ? 'bg-slate-800' : 'bg-rose-100'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.15 }}
                      className={`h-full rounded-full ${
                        isDark
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                          : 'bg-gradient-to-r from-rose-500 to-red-600'
                      }`}
                    />
                  </div>
                  <Rocket className={`w-4 h-4 animate-bounce ${isDark ? 'text-cyan-400' : 'text-rose-500'}`} />
                </div>
              </motion.div>
            );
          })}
            </div>
          </div>

          {/* RIGHT: Polo Tshirt Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-start lg:sticky lg:top-28 mb-8 lg:mb-0"
          >
            <img
              src="/avatars/learning-polotshirt.png"
              alt="Rohit Vijay Dusane - Leveling Up"
              className={`w-64 sm:w-80 lg:w-[350px] max-h-[640px] object-contain object-bottom select-none transition-all ${
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
