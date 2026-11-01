import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code2, Sparkles, CheckCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const Experience: React.FC = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      role: 'Google Gemini Student Ambassador',
      organization: 'Google Student Ambassador Program X MCE',
      period: 'May 2026 – Present',
      icon: Sparkles,
      bullets: [
        'Selected as Google Gemini Student Ambassador 2026 to promote AI innovation on campus',
        'Leading workshops, hackathons, and creative initiatives on Gemini AI & emerging technologies',
        'Fostering a campus community of student developers building with multimodal AI',
      ],
    },
    {
      role: 'Full Stack Development Intern',
      organization: 'Cognifyz Technologies',
      period: 'Mar 2026 – Apr 2026',
      icon: Code2,
      bullets: [
        'Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB',
        'Developed responsive UI components and enhanced user experience across platforms',
        'Designed and integrated REST APIs for efficient data handling and performance optimization',
      ],
    },
    {
      role: 'Artificial Intelligence Intern',
      organization: 'Decodelabs',
      period: 'Apr 2026 – May 2026',
      icon: Sparkles,
      bullets: [
        'Gained hands-on experience in Artificial Intelligence & Machine Learning through project-based learning',
        'Enhanced technical skills in AI applications, data analysis, and analytical problem-solving',
        'Participated in collaborative team development and continuous innovation sprints',
      ],
    },
    {
      role: 'Machine Learning Intern',
      organization: 'Future Interns',
      period: 'Mar 2026 – Apr 2026',
      icon: Award,
      bullets: [
        'Completed intensive internship focused on Machine Learning concepts and practical implementation',
        'Worked on real-world ML workflows: data preprocessing, model building, and evaluation',
        'Strengthened analytical thinking and model tuning for real-world datasets',
      ],
    },
    {
      role: 'Web & App Development Member',
      organization: 'Microsoft Club - Sathyabama',
      period: 'Aug 2026 – Present',
      icon: Users,
      bullets: [
        'Selected for competitive Web & App Development track at Sathyabama University',
        'Collaborating on practical web development, UI design, and API integrations',
        'Participating in club hackathons, peer code reviews, and developer workshops',
      ],
    },
    {
      role: 'Web Development Intern',
      organization: 'Softanic Solutions Pvt. Ltd., Jalgaon',
      period: 'Jun 2024 – Aug 2024',
      icon: Code2,
      bullets: [
        'Developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap',
        'Implemented dynamic backend features with PHP and relational database handling',
        'Gained exposure to real-world software development workflows and agile collaboration',
      ],
    },
  ];

  return (
    <section id="experience" className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-[#070A12]' : 'bg-[#FAF9F7]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>JOURNEY & ROLES</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            More than just code
          </h2>
          <p className={`text-base mt-2 font-medium ${
            isDark ? 'text-slate-400' : 'text-zinc-500'
          }`}>
            Leadership, community involvement and key milestones during my engineering journey.
          </p>
        </div>

        {/* Experience Timeline Grid with RIGHT Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Experience Cards */}
          <div className="order-2 lg:order-1 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                key={exp.role}
                className={`glass-card p-8 rounded-3xl border shadow-lg relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all ${
                  isDark
                    ? 'bg-slate-900/80 border-cyan-500/30 shadow-black/40'
                    : 'bg-white border-rose-100/90 shadow-rose-900/5'
                }`}
              >
                <div>
                  {/* Icon & Period Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${
                      isDark ? 'bg-slate-800 border-cyan-500/40 text-cyan-400' : 'bg-rose-50 border-rose-100 text-rose-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-700 border-rose-200/60'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <h3 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-slate-100' : 'text-zinc-900'}`}>
                    {exp.role}
                  </h3>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-6 ${isDark ? 'text-cyan-400' : 'text-rose-600'}`}>
                    {exp.organization}
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3">
                    {exp.bullets.map((b, i) => (
                      <div key={i} className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-zinc-600'
                      }`}>
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-cyan-400' : 'text-rose-500'}`} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-8 pt-4 border-t flex items-center justify-between text-[11px] font-bold uppercase tracking-widest ${
                  isDark ? 'border-cyan-500/20 text-slate-500' : 'border-rose-100 text-zinc-400'
                }`}>
                  <span>Milestone 0{index + 1}</span>
                  <span className={`font-script text-base ${isDark ? 'text-cyan-400' : 'text-rose-500'}`}>Impact</span>
                </div>
              </motion.div>
            );
          })}
            </div>
          </div>

          {/* RIGHT: Sweat Shirt Avatar (Swapped from What I Do) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-start lg:sticky lg:top-28 mb-8 lg:mb-0"
          >
            <img
              src="/avatars/whatido-sweatshirt.png"
              alt="Rohit Vijay Dusane - More Than Just Code"
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
