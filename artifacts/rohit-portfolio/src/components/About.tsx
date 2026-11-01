import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0B0F19]' : 'bg-white/60'
    }`}>
      {/* Background Decor */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-cyan-900/20' : 'bg-rose-100/40'
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            About me
          </h2>
          <p className={`font-script text-2xl sm:text-3xl mt-1 font-bold ${
            isDark ? 'text-cyan-400 neon-text-cyan' : 'text-rose-600'
          }`}>
            turning curiosity into scalable code
          </p>
        </div>

        {/* Two-Column Layout: LEFT Avatar, RIGHT Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Burgundy Blazer Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:col-span-5 flex justify-center items-center mb-8 lg:mb-0"
          >
            <img
              src="/avatars/about-burgundy.png"
              alt="Rohit Vijay Dusane"
              className={`w-64 sm:w-80 lg:w-[380px] max-h-[650px] object-contain object-bottom select-none transition-all ${
                isDark
                  ? 'drop-shadow-[0_0_40px_rgba(6,182,212,0.45)]'
                  : 'drop-shadow-[0_15px_35px_rgba(220,38,38,0.22)]'
              }`}
            />
          </motion.div>

          {/* Right Column: Personal Story & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:col-span-7 flex flex-col space-y-6"
          >
            <div className={`glass-card p-8 rounded-3xl border shadow-xl relative transition-all ${
              isDark
                ? 'bg-slate-900/80 border-cyan-500/30 shadow-cyan-900/20'
                : 'bg-white border-rose-100 shadow-rose-900/5'
            }`}>
              <div className={`absolute -top-3 left-8 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm text-white ${
                isDark ? 'bg-cyan-600' : 'bg-rose-600'
              }`}>
                Google Gemini Ambassador & Developer
              </div>
              
              <p className={`text-lg sm:text-xl font-medium leading-relaxed pt-2 ${
                isDark ? 'text-slate-200' : 'text-zinc-800'
              }`}>
                "I am a <strong className={isDark ? 'text-cyan-400 font-bold' : 'text-rose-600 font-bold'}>Computer Science Engineering student</strong> with hands-on industry experience across full-stack development, Artificial Intelligence, and Machine Learning through multiple internships and real-world production projects."
              </p>

              <div className={`my-6 border-t ${isDark ? 'border-cyan-500/20' : 'border-rose-100/80'}`} />

              <p className={`text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-zinc-600'
              }`}>
                "Having interned at Cognifyz Technologies, Decodelabs, Future Interns, and Softanic Solutions, I specialize in building practical, scalable applications across the healthcare and education sectors with modern React, Node, and AI models."
              </p>

              {/* Education & Location Specs Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`flex items-start gap-3 p-3.5 rounded-2xl border ${
                  isDark ? 'bg-cyan-950/40 border-cyan-500/30' : 'bg-rose-50/60 border-rose-100'
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm text-white mt-0.5 ${
                    isDark ? 'bg-cyan-500' : 'bg-rose-500'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-cyan-400' : 'text-rose-600'}`}>B.E. Computer Science • 8.5 CGPA</div>
                    <div className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-zinc-800'}`}>Sathyabama Institute</div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-zinc-500'}`}>Chennai (2025 - 2028)</div>
                  </div>
                </div>

                <div className={`flex items-start gap-3 p-3.5 rounded-2xl border ${
                  isDark ? 'bg-purple-950/40 border-purple-500/30' : 'bg-pink-50/60 border-pink-100'
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm text-white mt-0.5 ${
                    isDark ? 'bg-purple-600' : 'bg-pink-500'
                  }`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-purple-400' : 'text-pink-600'}`}>Diploma in Computer Engg • 86%</div>
                    <div className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-zinc-800'}`}>SGDO College of Engg</div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-zinc-500'}`}>Jalgaon (2022 - 2025)</div>
                  </div>
                </div>

                <div className={`flex items-center gap-3 p-3.5 rounded-2xl border sm:col-span-2 ${
                  isDark ? 'bg-slate-900/90 border-cyan-500/20' : 'bg-white border-zinc-200'
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm text-white ${
                    isDark ? 'bg-emerald-600' : 'bg-emerald-500'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-zinc-400'}`}>Location & Status</div>
                    <div className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-zinc-800'}`}>Chennai, Tamil Nadu, India 🇮🇳 • Open to Software Opportunities</div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
