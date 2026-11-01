import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle2, Sparkles, Heart, Loader2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSending(true);
    setErrorMsg('');
    try {
      const res = await fetch('https://formsubmit.co/ajax/7c9f19a6e48d5b9f401c9b36fbc7a016', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name || formData.email}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && (data.success === 'true' || data.success === true || res.status === 200)) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMsg('Could not reach server. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#070A12]' : 'bg-[#FAF9F7]'
    }`}>
      {/* Background Decor */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-t-full blur-3xl pointer-events-none transition-all ${
        isDark
          ? 'bg-gradient-to-t from-cyan-950/40 via-purple-950/30 to-transparent'
          : 'bg-gradient-to-t from-rose-200/40 via-pink-100/30 to-transparent'
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading (Centered) */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
            isDark ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' : 'bg-rose-50 text-rose-600 border-rose-200/60'
          }`}>
            <span>START A CONVERSATION</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 ${
            isDark ? 'text-slate-100' : 'text-zinc-900'
          }`}>
            Have an idea? <br />
            <span className={`font-script text-5xl sm:text-6xl md:text-7xl font-bold ${
              isDark ? 'text-cyan-400 neon-text-cyan' : 'text-rose-600'
            }`}>
              Let's build it.
            </span>
          </h2>

          <p className={`text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 font-medium ${
            isDark ? 'text-slate-300' : 'text-zinc-600'
          }`}>
            Whether it's a project, collaboration or just a conversation about technology — my inbox is open.
          </p>

          {/* Quick Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:rohitdusane.engineer@gmail.com"
              className={`px-7 py-3.5 rounded-full text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-cyan-500/25 text-slate-950'
                  : 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-rose-600/25'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Say Hello</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rohitdusane07"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-7 py-3.5 rounded-full text-sm font-bold border transition-all hover:-translate-y-1 flex items-center gap-2 ${
                isDark
                  ? 'bg-slate-900 text-slate-200 border-cyan-500/30 hover:bg-cyan-950/40'
                  : 'bg-white text-zinc-800 border-zinc-200 hover:bg-rose-50 shadow-sm'
              }`}
            >
              <Linkedin className="w-4 h-4 text-blue-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/rohitdusane07"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-7 py-3.5 rounded-full text-sm font-bold border transition-all hover:-translate-y-1 flex items-center gap-2 ${
                isDark
                  ? 'bg-slate-900 text-slate-200 border-cyan-500/30 hover:bg-cyan-950/40'
                  : 'bg-white text-zinc-800 border-zinc-200 hover:bg-rose-50 shadow-sm'
              }`}
            >
              <Github className="w-4 h-4 text-slate-200" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Content Row: LEFT Form, RIGHT Green Jacket Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">

          {/* LEFT: Interactive Form Card */}
          <div className="order-2 lg:order-1 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`glass-card p-8 sm:p-10 rounded-3xl border shadow-2xl text-left max-w-2xl mx-auto ${
                isDark
                  ? 'bg-slate-900/90 border-cyan-500/30 shadow-black/40'
                  : 'bg-white border-rose-100 shadow-rose-900/5'
              }`}
            >
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  isDark ? 'bg-cyan-950 text-cyan-400' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-zinc-900'}`}>Message Sent!</h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-zinc-500'}`}>Thank you for reaching out, Rohit will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      isDark ? 'text-slate-400' : 'text-zinc-500'
                    }`}>Your Name</label>
                    <input
                      type="text"
                      required
                      name="name" placeholder="Rohit Dusane"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none transition-colors border ${
                        isDark
                          ? 'bg-slate-950 border-cyan-500/30 text-slate-100 focus:border-cyan-400'
                          : 'bg-[#FAF9F7] border-rose-100 text-zinc-900 focus:border-rose-500'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      isDark ? 'text-slate-400' : 'text-zinc-500'
                    }`}>Email Address</label>
                    <input
                      type="email"
                      required
                      name="email" placeholder="hello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none transition-colors border ${
                        isDark
                          ? 'bg-slate-950 border-cyan-500/30 text-slate-100 focus:border-cyan-400'
                          : 'bg-[#FAF9F7] border-rose-100 text-zinc-900 focus:border-rose-500'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDark ? 'text-slate-400' : 'text-zinc-500'
                  }`}>Your Message</label>
                  <textarea
                    required
                    rows={4}
                    name="message" placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none transition-colors border resize-none ${
                      isDark
                        ? 'bg-slate-950 border-cyan-500/30 text-slate-100 focus:border-cyan-400'
                        : 'bg-[#FAF9F7] border-rose-100 text-zinc-900 focus:border-rose-500'
                    }`}
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-500 text-center font-medium bg-rose-500/10 py-2 px-3 rounded-xl border border-rose-500/20">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full py-4 rounded-2xl text-sm font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                    sending ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
                  } ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black shadow-cyan-500/20'
                      : 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-rose-600/20'
                  }`}
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* RIGHT: Green Jacket Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center mb-8 lg:mb-0"
        >
          <img
            src="/avatars/contact-greenjacket.png"
            alt="Rohit Vijay Dusane - Contact"
            className={`w-64 sm:w-80 lg:w-[360px] max-h-[640px] object-contain object-bottom select-none transition-all ${
              isDark
                ? 'drop-shadow-[0_0_40px_rgba(6,182,212,0.45)]'
                : 'drop-shadow-[0_15px_35px_rgba(220,38,38,0.22)]'
            }`}
          />
        </motion.div>
      </div>

      {/* Full-Width Centered Footer / Social & Handwritten Closing */}
      <div className="max-w-4xl mx-auto text-center mt-4">
        {/* Social Links List */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a href="mailto:rohitdusane.engineer@gmail.com" className={`font-medium text-xs flex items-center gap-1.5 transition-colors ${
            isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-zinc-500 hover:text-rose-600'
          }`}>
            <Mail className="w-4 h-4" /> rohitdusane.engineer@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/rohitdusane07" target="_blank" rel="noopener noreferrer" className={`font-medium text-xs flex items-center gap-1.5 transition-colors ${
            isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-zinc-500 hover:text-rose-600'
          }`}>
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://github.com/rohitdusane07" target="_blank" rel="noopener noreferrer" className={`font-medium text-xs flex items-center gap-1.5 transition-colors ${
            isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-zinc-500 hover:text-rose-600'
          }`}>
            <Github className="w-4 h-4" /> GitHub
          </a>
          
        </div>

        {/* Handwritten Closing */}
        <p className={`font-script text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide ${
          isDark ? 'text-cyan-400 neon-text-cyan' : 'text-rose-600'
        }`}>
          "See you on the other side of the screen. ♡"
        </p>
      </div>
      </div>
    </section>
  );
};
