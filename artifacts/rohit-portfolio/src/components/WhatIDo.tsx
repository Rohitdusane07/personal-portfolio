import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, BarChart3, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const WhatIDo: React.FC = () => {
  const { isDark } = useTheme();

  const services = [
    {
      num: '01',
      title: 'AI & Machine Learning',
      description: 'Building intelligent applications that transform data into useful experiences.',
      icon: Brain,
      skills: ['Machine Learning', 'Computer Vision (OpenCV)', 'LLM Integration', 'Predictive Modeling'],
    },
    {
      num: '02',
      title: 'Full-Stack Development',
      description: 'Designing modern interfaces and reliable backend systems.',
      icon: Layers,
      skills: ['React & TypeScript', 'Node.js & Express', 'Tailwind CSS', 'MySQL & Supabase'],
    },
    {
      num: '03',
      title: 'Data & Analytics',
      description: 'Finding patterns in data and turning them into meaningful insights.',
      icon: BarChart3,
      skills: ['Data Visualization', 'SQL Queries', 'Statistical Analysis', 'Python Data Processing'],
    },
  ];

  return (
    <section id="services" className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-[#0B0F19]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            What I do
          </h2>
          <p className={`text-base mt-2 font-medium ${
            isDark ? 'text-slate-400' : 'text-zinc-500'
          }`}>
            Combining technical engineering rigor with user-centered design thinking.
          </p>
        </div>

        {/* Content Row: LEFT Avatar, RIGHT Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Black Shirt Avatar (Swapped from More Than Code) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:col-span-4 flex justify-center items-start lg:sticky lg:top-28 mb-8 lg:mb-0"
          >
            <img
              src="/avatars/experience-blackshirt.png"
              alt="Rohit Vijay Dusane - What I Do"
              className={`w-64 sm:w-80 lg:w-[350px] max-h-[640px] object-contain object-bottom select-none transition-all ${
                isDark
                  ? 'drop-shadow-[0_0_40px_rgba(6,182,212,0.45)]'
                  : 'drop-shadow-[0_15px_35px_rgba(220,38,38,0.22)]'
              }`}
            />
          </motion.div>

          {/* RIGHT: 3 Capability Cards */}
          <div className="order-2 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                key={service.num}
                className={`glass-card-hover group p-8 rounded-3xl border relative flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/80 border-cyan-500/30'
                    : 'bg-[#FAF9F7] border-rose-100'
                }`}
              >
                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className={`text-4xl font-extrabold font-mono transition-colors ${
                      isDark ? 'text-cyan-500/40 group-hover:text-cyan-400' : 'text-rose-300 group-hover:text-rose-600'
                    }`}>
                      {service.num}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${
                      isDark ? 'bg-slate-800 border-cyan-500/40 text-cyan-400' : 'bg-white border-rose-100 text-rose-600'
                    }`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl font-extrabold mb-3 transition-colors ${
                    isDark ? 'text-slate-100 group-hover:text-cyan-400' : 'text-zinc-900 group-hover:text-rose-600'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${
                    isDark ? 'text-slate-300' : 'text-zinc-600'
                  }`}>
                    "{service.description}"
                  </p>

                  {/* Key Competencies */}
                  <div className="space-y-2 mb-8">
                    {service.skills.map((skill) => (
                      <div key={skill} className={`flex items-center gap-2 text-xs font-bold ${
                        isDark ? 'text-slate-300' : 'text-zinc-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-rose-500'}`} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between text-xs font-bold group-hover:translate-x-1 transition-transform ${
                  isDark ? 'border-cyan-500/20 text-cyan-400' : 'border-rose-200/60 text-rose-600'
                }`}>
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
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
