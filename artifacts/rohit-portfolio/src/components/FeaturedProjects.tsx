import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ShieldAlert, Activity, ShoppingBag, X, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon: React.ElementType;
  lightGradient: string;
  darkGradient: string;
  highlights: string[];
}

export const FeaturedProjects: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'sist-campuseye',
      title: 'SIST CampusEye',
      category: 'AI • Security • Full Stack',
      description: 'Full-stack AI-powered campus security platform with real-time face recognition, live CCTV monitoring, and a security analytics dashboard.',
      longDescription: 'Developed SIST CampusEye, a full-stack AI-powered campus security platform that enhances identity verification and campus monitoring using real-time face recognition. The system enables student face enrollment, live recognition through webcam/CCTV feeds, multi-face detection, unknown person identification, incident reporting, and security analytics through an interactive dashboard.',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Django', 'Django REST Framework', 'Python', 'MySQL', 'OpenCV', 'face_recognition (dlib)', 'Axios', 'Recharts'],
      liveUrl: 'https://github.com/rohitdusane07',
      githubUrl: 'https://github.com/rohitdusane07',
      icon: ShieldAlert,
      lightGradient: 'from-purple-500/20 via-rose-400/10 to-pink-500/5',
      darkGradient: 'from-cyan-400/20 via-blue-500/10 to-slate-900',
      highlights: [
        'Real-time face recognition via OpenCV & dlib with in-memory encoding cache',
        'Multi-face detection, unknown person alerts & incident reporting',
        'Secure role-based access for admins & staff with analytics dashboard',
      ],
    },
    {
      id: 'ai-study-companion',
      title: 'AI-Powered Study Companion',
      category: 'AI • EdTech • Intelligent Systems',
      description: 'An AI-assisted platform for personalized learning, exam preparation, and contextual academic guidance.',
      longDescription: 'Built an AI-assisted platform empowering students with personalized learning roadmaps, real-time query resolution, and intelligent context-aware response generation for exam preparation.',
      tech: ['Python', 'Machine Learning', 'React.js', 'Node.js', 'REST APIs'],
      liveUrl: 'https://github.com/rohitdusane07',
      githubUrl: 'https://github.com/rohitdusane07',
      icon: Sparkles,
      lightGradient: 'from-amber-500/20 via-rose-400/10 to-pink-400/5',
      darkGradient: 'from-amber-500/20 via-cyan-500/10 to-slate-900',
      highlights: [
        'Intelligent Context-Aware Academic Response Engine',
        'Personalized Learning Paths & Exam Readiness Scoring',
        'Fast Full-Stack React & Node Integration with ML Services',
      ],
    },
    {
      id: 'healthline',
      title: 'HealthLine – Hospital & Patient Assistance',
      category: 'Healthcare • Full Stack • Spatial Data',
      description: 'A healthcare platform connecting patients with hospitals and doctors using spatial medical facility discovery.',
      longDescription: 'HealthLine streamlines critical emergency searches during high-stress medical situations by connecting users to nearby verified medical centers, specialists, and immediate guidance protocols.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS', 'Overpass API'],
      liveUrl: 'https://github.com/rohitdusane07/healthline',
      githubUrl: 'https://github.com/rohitdusane07/healthline',
      icon: Activity,
      lightGradient: 'from-pink-500/20 via-rose-400/10 to-red-400/5',
      darkGradient: 'from-purple-500/20 via-pink-500/10 to-slate-900',
      highlights: [
        'Overpass OpenStreetMap Spatial Geo-Queries',
        'Emergency Specialist Search & Real-Time Availability',
        'Optimized Relational Database Architecture in MySQL',
      ],
    },
    {
      id: 'guardian360',
      title: 'Guardian360 – Smart Personal Safety',
      category: 'AI • Safety • Full Stack',
      description: 'A smart personal safety platform featuring live location tracking, route deviation detection, and SOS dispatch.',
      longDescription: 'Guardian360 uses real-time spatial analysis and heuristics to monitor route consistency, trigger automated emergency signals, and empower individuals with instant SOS dispatch.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Maps API', 'MySQL'],
      liveUrl: 'https://github.com/rohitdusane07',
      githubUrl: 'https://github.com/rohitdusane07',
      icon: ShieldAlert,
      lightGradient: 'from-red-500/20 via-rose-500/10 to-pink-500/5',
      darkGradient: 'from-cyan-500/20 via-purple-500/10 to-slate-900',
      highlights: [
        'Live GPS Tracking & Route Deviation AI Heuristics',
        'One-Tap SOS Emergency Broadcast & Contact Alerting',
        'Centralized Admin Real-Time Monitoring Dashboard',
      ],
    },
  ];

  return (
    <section id="projects" className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-[#0B0F19]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            Featured projects
          </h2>
          <p className={`font-script text-2xl sm:text-3xl mt-1 font-bold ${
            isDark ? 'text-cyan-400 neon-text-cyan' : 'text-rose-600'
          }`}>
            real problems, real builds.
          </p>
        </div>

        {/* Content Row: LEFT Avatar, RIGHT Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Black Hoodie Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:col-span-4 flex justify-center items-start lg:sticky lg:top-28 mb-8 lg:mb-0"
          >
            <img
              src="/avatars/project-blackhoodie.png"
              alt="Rohit Vijay Dusane - Projects"
              className={`w-64 sm:w-80 lg:w-[360px] max-h-[640px] object-contain object-bottom select-none transition-all ${
                isDark
                  ? 'drop-shadow-[0_0_40px_rgba(6,182,212,0.45)]'
                  : 'drop-shadow-[0_15px_35px_rgba(220,38,38,0.22)]'
              }`}
            />
          </motion.div>

          {/* RIGHT: Projects Grid */}
          <div className="order-2 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={project.id}
                className={`glass-card-hover group rounded-3xl border p-8 flex flex-col justify-between relative overflow-hidden transition-all ${
                  isDark
                    ? 'bg-slate-900/80 border-cyan-500/30 shadow-lg shadow-black/40'
                    : 'bg-white border-rose-100 shadow-lg shadow-rose-900/5'
                }`}
              >
                {/* Visual Background Accent */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${
                  isDark ? project.darkGradient : project.lightGradient
                } rounded-bl-full pointer-events-none transition-all group-hover:scale-110`} />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border ${
                      isDark
                        ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                        : 'bg-rose-50 text-rose-700 border-rose-200/60'
                    }`}>
                      {project.category}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${
                      isDark
                        ? 'bg-slate-800 border-cyan-500/40 text-cyan-400'
                        : 'bg-rose-50 border-rose-100 text-rose-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl font-extrabold mb-3 transition-colors ${
                    isDark ? 'text-slate-100 group-hover:text-cyan-400' : 'text-zinc-900 group-hover:text-rose-600'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-300' : 'text-zinc-600'
                  }`}>
                    "{project.description}"
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${
                          isDark
                            ? 'bg-slate-800/80 text-slate-200 border-cyan-500/30'
                            : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
                  isDark ? 'border-cyan-500/20' : 'border-rose-100'
                }`}>
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white transition-colors shadow-md ${
                          isDark
                            ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
                            : 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20'
                        }`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                          isDark
                            ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`text-xs font-bold transition-colors underline underline-offset-4 ${
                      isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-rose-600 hover:text-rose-800'
                    }`}
                  >
                    Details &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border ${
                isDark
                  ? 'bg-slate-900 border-cyan-500/40 text-slate-100 shadow-cyan-900/30'
                  : 'bg-white border-rose-100 text-zinc-900 shadow-rose-900/20'
              }`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-zinc-100 text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
                isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
              }`}>
                <span>{selectedProject.category}</span>
              </div>

              <h3 className="text-3xl font-extrabold mb-3">
                {selectedProject.title}
              </h3>

              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-zinc-700'}`}>
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-cyan-400' : 'text-rose-700'}`}>
                  Key Technical Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className={`flex items-center gap-2 text-sm font-semibold p-2.5 rounded-xl border ${
                      isDark ? 'bg-cyan-950/30 border-cyan-500/30 text-slate-200' : 'bg-rose-50/60 border-rose-100 text-zinc-800'
                    }`}>
                      <Sparkles className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-cyan-400' : 'text-rose-500'}`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-cyan-400' : 'text-rose-700'}`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      isDark ? 'bg-slate-800 text-cyan-300 border-cyan-500/30' : 'bg-zinc-100 text-zinc-800 border-zinc-200'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`flex items-center gap-4 pt-4 border-t ${isDark ? 'border-cyan-500/20' : 'border-rose-100'}`}>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-full text-xs font-bold text-white shadow-md ${
                      isDark ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20' : 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20'
                    }`}
                  >
                    Visit Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-full text-xs font-bold ${
                      isDark ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
