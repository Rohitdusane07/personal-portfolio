import { lazy, Suspense, useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Award, Braces, Check, Code2, Download, ExternalLink, Github, GraduationCap, Linkedin, Mail, Menu, Moon, Send, Sun, X } from 'lucide-react';

const HeroScene = lazy(() => import('./components/HeroScene'));
const BrainScene = lazy(() => import('./components/BrainScene'));

type Project = {
  name: string;
  category: string;
  description: string;
  detail: string;
  tags: string[];
  art: string;
};

const navItems = [
  ['About', 'about'], ['Skills', 'skills'], ['AI / ML', 'ai-ml'], ['Projects', 'projects'],
  ['Experience', 'experience'], ['Education', 'education'], ['Certifications', 'certifications'],
  ['Resume', 'resume'], ['Contact', 'contact'],
];

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    const attributes: WebGLContextAttributes = {
      alpha: true,
      failIfMajorPerformanceCaveat: true,
      powerPreference: 'low-power',
    };
    const context =
      canvas.getContext('webgl2', attributes) ??
      canvas.getContext('webgl', attributes);
    if (!context) return false;
    context.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

const projects: Project[] = [
  {
    name: 'DinoVerse',
    category: 'CREATIVE 3D · INTERACTIVE',
    description: 'A playful world at the edge of code and imagination, built to invite exploration.',
    detail: 'An editable concept for an immersive 3D experience. Expand this with the real problem, interaction model, implementation notes, and measured outcome before publishing.',
    tags: ['Three.js', 'React', 'Blender'],
    art: 'dino',
  },
  {
    name: 'Signal / ML',
    category: 'AI / MACHINE LEARNING',
    description: 'A machine-learning concept focused on turning noisy inputs into useful signals.',
    detail: 'An editable AI/ML project entry. Add the actual dataset, model approach, evaluation method, and results here. No performance figures have been assumed.',
    tags: ['Python', 'scikit-learn', 'Jupyter'],
    art: 'ml',
  },
  {
    name: 'Full-stack Studio',
    category: 'SOFTWARE · FULL-STACK',
    description: 'A considered web product concept connecting a clean interface to reliable services.',
    detail: 'A full-stack project placeholder. Replace this summary with the shipped product scope, architecture decisions, accessibility work, and repository/demo URLs.',
    tags: ['TypeScript', 'React', 'Node.js'],
    art: 'stack',
  },
  {
    name: 'Data, in Motion',
    category: 'DATA · VISUALIZATION',
    description: 'A visual exploration of complex data, designed to make patterns easier to see.',
    detail: 'A data visualization concept. Add the source, transformations, charting decisions, and the insight a viewer should leave with.',
    tags: ['Python', 'SQL', 'D3.js'],
    art: 'data',
  },
];

const skills = [
  { name: 'Software engineering', count: '01', mark: '</>', description: 'Building clear, maintainable systems from interface to implementation.', values: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Git', 'REST APIs'] },
  { name: 'AI & machine learning', count: '02', mark: '∿', description: 'Exploring how data and models can turn complex inputs into useful tools.', values: ['Python', 'NumPy', 'pandas', 'scikit-learn', 'PyTorch', 'TensorFlow', 'Jupyter', 'Model evaluation'] },
  { name: 'Data & analytics', count: '03', mark: '▥', description: 'Finding structure, asking better questions, and communicating patterns.', values: ['SQL', 'Data cleaning', 'Exploratory analysis', 'Matplotlib', 'Seaborn', 'Power BI', 'D3.js'] },
  { name: 'Creative 3D development', count: '04', mark: '◇', description: 'Giving ideas dimension through realtime graphics and thoughtful interaction.', values: ['Three.js', 'React Three Fiber', 'Blender', 'WebGL', 'GLSL', 'CSS'] },
];

const certificationSlots = [
  { title: '[Add verified certification name]', issuer: '[Issuer] · [Issue date] · [Credential link]' },
  { title: '[Optional credential / badge]', issuer: '[Issuer] · [Issue date] · [Credential link]' },
  { title: '[Optional academic distinction]', issuer: '[Institution / issuer] · [Date] · [Evidence link]' },
];

function downloadResume() {
  const text = `ROHIT
Computer Science Engineering Student

Replace this starter with Rohit's verified resume before sharing.

PROFILE
Computer Science Engineering student exploring software, AI/ML, data, and creative 3D development.

EDUCATION
[Institution name] · [Degree / program] · [Dates]

SELECTED PROJECTS
DinoVerse — [Add verified project summary, technologies, and outcomes]
AI/ML Project — [Add verified project summary, technologies, and outcomes]
Full-stack Project — [Add verified project summary, technologies, and outcomes]
Data Visualization — [Add verified project summary, technologies, and outcomes]

SKILLS
Python · TypeScript · React · SQL · Machine Learning · Three.js

EXPERIENCE & CERTIFICATIONS
[Add verified experience and credentials only]

CONTACT
[Add verified email and profile URLs]
`;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'rohit-resume-starter.txt';
  link.click();
  URL.revokeObjectURL(url);
}

function ProjectArtwork({ art, category }: { art: string; category: string }) {
  return (
    <div className={`project-art ${art}`} aria-hidden="true">
      <span className="art-label">{category}</span>
      {art === 'dino' ? <div className="art-graphic"><div className="art-orb" /><div className="art-orb" style={{ width: 34, height: 34, marginLeft: -26, marginTop: 45 }} /></div> :
        art === 'data' ? <div className="art-graphic art-bars">{[31, 53, 40, 68, 48, 78, 57, 70].map((h, i) => <i key={i} style={{ '--h': `${h}px` } as React.CSSProperties} />)}</div> :
          <div className="art-graphic"><div className="art-terminal"><b>const</b> model = await train(data);<br />model.evaluate(testSet);<br /><b>return</b> insights.map(signal);</div></div>}
    </div>
  );
}

function App() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [formError, setFormError] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [repoNotice, setRepoNotice] = useState<false | 'github' | 'demo'>(false);
  const dialogCloseButton = useRef<HTMLButtonElement>(null);
  const workstationRef = useRef<HTMLDivElement>(null);
  const [allow3D, setAllow3D] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [compactHeader, setCompactHeader] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [certificateIndex, setCertificateIndex] = useState(0);
  const [socialNotice, setSocialNotice] = useState(false);
  const [brainVisible, setBrainVisible] = useState(false);
  const certCarouselRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
  }, [light]);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroVisible(false), 320);
    const canRender3D = supportsWebGL();
    const media = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    let sceneTimer = 0;
    const updateMotion = () => {
      window.clearTimeout(sceneTimer);
      if (media.matches && canRender3D) sceneTimer = window.setTimeout(() => setAllow3D(media.matches && canRender3D), 420);
      else setAllow3D(false);
    };
    updateMotion();
    media.addEventListener('change', updateMotion);
    const onScroll = () => setCompactHeader(window.scrollY > 42);
    const onGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onGlobalKeyDown);
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-25% 0px -62% 0px', threshold: 0 });
    [...navItems.map(([, id]) => id), 'home'].forEach(id => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
    const brainElement = document.getElementById('ai-ml');
    const brainObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setBrainVisible(true);
        brainObserver.disconnect();
      }
    }, { rootMargin: '220px' });
    if (brainElement) brainObserver.observe(brainElement);
    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(sceneTimer);
      media.removeEventListener('change', updateMotion);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onGlobalKeyDown);
      sectionObserver.disconnect();
      brainObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!activeProject && !resumeOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogCloseButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
        setResumeOpen(false);
      }
      if (event.key === 'Tab') {
        const items = document.querySelectorAll<HTMLElement>('.dialog button');
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [activeProject, resumeOpen]);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError('');
    setFormSent(false);
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (name.length < 2) return setFormError('Please enter your name (at least 2 characters).');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setFormError('Please enter a valid email address.');
    if (message.length < 12) return setFormError('Add a little more detail (at least 12 characters).');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nReply to: ${email}\n\n${message}`);
    window.location.href = `mailto:rohit@example.com?subject=${subject}&body=${body}`;
    setFormSent(true);
    form.reset();
  }

  function stepCertificate(direction: number) {
    setCertificateIndex(index => (index + direction + certificationSlots.length) % certificationSlots.length);
  }

  return (
    <MotionConfig reducedMotion="user">
    <main className="site-shell">
      <AnimatePresence>
        {introVisible && <motion.div className="intro-film" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }}><span>ROHIT</span><i /><small>Portfolio / loading scene</small></motion.div>}
      </AnimatePresence>
      <header className={`topbar ${compactHeader ? 'compact' : ''}`}>
        <div className="topbar-inner">
          <a href="#home" className="brand" aria-label="Rohit, home"><span className="brand-mark">R.</span> rohit<span style={{ color: 'hsl(var(--primary))' }}>.</span></a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} className={activeSection === id ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button" aria-label={light ? 'Switch to dark appearance' : 'Switch to light appearance'} onClick={() => setLight(!light)}>{light ? <Moon size={16} /> : <Sun size={16} />}</button>
            <a className="button button-primary" href="#contact">Let’s talk <ArrowUpRight size={14} /></a>
            <button className="icon-button menu-button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container-wide hero-grid">
          <div>
            <div className="eyebrow reveal">Computer Science · Building at the edge</div>
            <h1 className="reveal delay-1">Ideas into<br /><span className="accent">intelligent</span><br /><span className="outline">experiences.</span></h1>
            <p className="hero-copy reveal delay-2">I’m Rohit — a Computer Science Engineering student exploring the space between software, machine intelligence, data, and 3D worlds.</p>
            <div className="hero-ctas reveal delay-2">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={15} /></a>
              <a className="button button-quiet" href="#about">A little about me</a>
            </div>
            <div className="hero-meta"><span><i className="status-dot" /> Drawn to meaningful problems</span><span><Code2 size={13} /> Learning by building</span></div>
          </div>
          <div className={`workstation ${allow3D ? 'has-three' : ''}`} ref={workstationRef} role="group" aria-label="Interactive developer workstation. Use the arrow keys to tilt the scene." tabIndex={0}
            onPointerMove={event => {
              if (event.pointerType === 'touch') return;
              const bounds = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - bounds.left) / bounds.width - 0.5;
              const y = (event.clientY - bounds.top) / bounds.height - 0.5;
              event.currentTarget.style.setProperty('--tilt-x', `${-y * 4}deg`);
              event.currentTarget.style.setProperty('--tilt-y', `${x * 5}deg`);
            }}
            onPointerLeave={event => {
              event.currentTarget.style.setProperty('--tilt-x', '0deg');
              event.currentTarget.style.setProperty('--tilt-y', '0deg');
            }}
            onKeyDown={event => {
              const el = workstationRef.current;
              if (!el || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
              event.preventDefault();
              const x = Number.parseFloat(el.style.getPropertyValue('--tilt-x')) || 0;
              const y = Number.parseFloat(el.style.getPropertyValue('--tilt-y')) || 0;
              el.style.setProperty('--tilt-x', `${Math.max(-6, Math.min(6, x + (event.key === 'ArrowUp' ? 1 : event.key === 'ArrowDown' ? -1 : 0)))}deg`);
              el.style.setProperty('--tilt-y', `${Math.max(-7, Math.min(7, y + (event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0)))}deg`);
            }}
            onBlur={event => {
              event.currentTarget.style.setProperty('--tilt-x', '0deg');
              event.currentTarget.style.setProperty('--tilt-y', '0deg');
            }}>
            {allow3D ? <Suspense fallback={<div className="workstation-glow" />}><HeroScene /></Suspense> : <>
            <div className="workstation-glow" /><div className="orbit one" /><div className="orbit two" />
            <div className="float-card float-a"><b>function</b> imagine() {'{'}<br />&nbsp; return <b>build</b>(ideas);<br />{'}'}</div>
            <div className="float-card float-b"><b>AI / ML</b> &nbsp; ● online<br /><span style={{ color: '#7f8ca8' }}>signals → meaning</span></div>
            <div className="screen-frame"><div className="screen"><div className="screen-top"><div className="window-dots"><i /><i /><i /></div><span>rohit / workspace</span><span>⌘ 01</span></div><div className="code-lines"><div><span className="line-num">01</span><b>const</b> curiosity = <em>∞</em>;</div><div><span className="line-num">02</span><b>while</b> (curiosity) {'{'}</div><div><span className="line-num">03</span>&nbsp;&nbsp;<strong>learn</strong>(somethingNew);</div><div><span className="line-num">04</span>&nbsp;&nbsp;<strong>build</strong>(somethingUseful);</div><div><span className="line-num">05</span>&nbsp;&nbsp;<em>connect</em>(theUnexpected);</div><div><span className="line-num">06</span>{'}'}</div></div></div></div>
            <div className="monitor-stand" /><div className="monitor-base" /><div className="laptop-base" />
            <div className="float-card float-c">01 — 04 &nbsp; <b>making things</b></div>
            <div className="neural"><i /><i /><i /><i /></div>
            </>}
          </div>
        </div>
        <div className="scroll-cue">Scroll to explore</div>
      </section>

      <section className="section section-alt" id="about">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">01 / The person behind the pixels</div><h2>Curious by nature.<br />Engineer by practice.</h2></div><p className="section-intro">A broad technical curiosity, grounded in a simple instinct: make things that are useful, thoughtful, and a little unexpected.</p></div>
          <div className="about-grid">
            <div className="about-copy"><p>I’m a <strong>Computer Science Engineering student</strong> drawn to problems that live between disciplines. I like understanding the system beneath the interface — and the human reason it should exist in the first place.</p><p>My work moves between <strong>software, AI/ML, data, and creative 3D</strong>. Each field offers a different lens; bringing them together is where the interesting questions begin.</p><p>This portfolio is a living record of that practice: experiments, projects, and the process of becoming a better builder. The details here are intentionally editable where my personal specifics belong.</p></div>
            <div className="about-aside">
              <div className="about-console" tabIndex={0} role="group" aria-label="Interactive build log visual. Move a pointer over it or focus to explore.">
                <div className="console-chrome"><span><i /><i /><i /></span><b>FIELD NOTES / 01</b><span>LIVE</span></div>
                <div className="console-code"><span>01</span><code>observe(problem);</code><span>02</span><code>trace(the_system);</code><span>03</span><code>prototype(a_better_way);</code><span>04</span><code className="console-accent">repeat(with_curiosity);</code></div>
                <div className="console-footer"><span>BUILD / LEARN / SHARE</span><span className="console-signal">● SIGNAL ACTIVE</span></div>
              </div>
              <div className="stats-grid"><div className="stat-card"><div className="stat-number">04</div><div className="stat-caption">CONNECTED DOMAINS</div></div><div className="stat-card"><div className="stat-number">∞</div><div className="stat-caption">QUESTIONS TO EXPLORE</div></div><div className="stat-card"><div className="stat-number">Build</div><div className="stat-caption">THE WAY I LEARN</div></div><div className="stat-card"><div className="stat-number">Curious</div><div className="stat-caption">THE DEFAULT SETTING</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">02 / Tools of the trade</div><h2>A toolkit in progress.</h2></div><p className="section-intro">An ecosystem of software, data, intelligence, and realtime graphics. Tool names below are editable examples: keep only technologies Rohit can verify.</p></div>
          <div className="skill-ecosystem">{skills.map(group => <article className="skill-card" key={group.name} onPointerMove={event => {
            if (event.pointerType === 'touch') return;
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty('--glow-x', `${event.clientX - bounds.left}px`);
            event.currentTarget.style.setProperty('--glow-y', `${event.clientY - bounds.top}px`);
            event.currentTarget.style.setProperty('--card-tilt', `${((event.clientX - bounds.left) / bounds.width - .5) * 3}deg`);
          }} onPointerLeave={event => event.currentTarget.style.setProperty('--card-tilt', '0deg')}>
            <div className="skill-card-top"><span className="skill-glyph">{group.mark}</span><span>{group.count} / 04</span></div><h3>{group.name}</h3><p>{group.description}</p><div className="skill-pills">{group.values.map(value => <span className="tag" key={value}>{value}</span>)}</div>
          </article>)}</div>
          <div className="skills-footnote"><span className="status-dot" /> Tools serve the question. Keep this list aligned with verified experience.</div>
        </div>
      </section>

      <section className="section section-alt" id="ai-ml">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">03 / Intelligence, applied</div><h2>AI is a lens, not a label.</h2></div><p className="section-intro">Interested in the full arc — from a messy real-world question through data, models, evaluation, and a useful interface.</p></div>
          <div className="ai-layout"><div className={`ai-orb ${allow3D && brainVisible ? 'has-three' : ''}`} aria-label="Interactive neural network visualization. Use arrow keys or a pointer to explore." role="group" tabIndex={0} onKeyDown={event => {
            if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
            event.preventDefault();
            const el = event.currentTarget;
            const x = Number.parseFloat(el.style.getPropertyValue('--brain-tilt-x')) || 0;
            const y = Number.parseFloat(el.style.getPropertyValue('--brain-tilt-y')) || 0;
            el.style.setProperty('--brain-tilt-x', `${Math.max(-6, Math.min(6, x + (event.key === 'ArrowUp' ? 1 : event.key === 'ArrowDown' ? -1 : 0)))}deg`);
            el.style.setProperty('--brain-tilt-y', `${Math.max(-7, Math.min(7, y + (event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0)))}deg`);
          }} onBlur={event => {
            event.currentTarget.style.setProperty('--brain-tilt-x', '0deg');
            event.currentTarget.style.setProperty('--brain-tilt-y', '0deg');
          }}>{allow3D && brainVisible ? <Suspense fallback={null}><BrainScene /></Suspense> : <><div className="orb-ring" /><div className="orb-ring second" /><div className="orb-dot" /><div className="orb-core">DATA → SIGNAL</div></>}</div><div className="ai-list"><div className="ai-row"><span className="ai-index">01</span><div><h3>Learning from data</h3><p>Exploring supervised and unsupervised approaches, feature choices, and the assumptions behind a dataset.</p></div></div><div className="ai-row"><span className="ai-index">02</span><div><h3>Building with care</h3><p>Prototyping in Python; treating baselines, evaluation, and reproducibility as part of the product.</p></div></div><div className="ai-row"><span className="ai-index">03</span><div><h3>Keeping humans in view</h3><p>Making model outputs legible and useful — without pretending a clever model is the whole solution.</p></div></div></div></div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">04 / Selected explorations</div><h2>Work with a point of view.</h2></div><p className="section-intro">Four directions across software and creative technology. Open a project for details; replace sample notes and links with verified work before publishing.</p></div>
          <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.name}><ProjectArtwork art={project.art} category={project.category} /><div className="project-info"><div className="project-top"><h3>{project.name}</h3><ArrowUpRight className="project-arrow" size={18} /></div><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-actions"><button onClick={() => { setActiveProject(project); setRepoNotice('github'); }}><Github size={13} /> GitHub <span>not linked</span></button><button onClick={() => { setActiveProject(project); setRepoNotice('demo'); }}><ExternalLink size={13} /> Live demo <span>not linked</span></button><button className="details-action" onClick={() => { setActiveProject(project); setRepoNotice(false); }}>View details <ArrowUpRight size={13} /></button></div></div></article>)}</div>
        </div>
      </section>

      <section className="section section-alt" id="experience">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">05 / Experience</div><h2>Experience, in progress.</h2></div><p className="section-intro">No career history was supplied. These illuminated milestones are editable placeholders, not claims about Rohit.</p></div>
          <div className="timeline"><article className="timeline-item"><div className="timeline-date">[DATES — EDIT]</div><h3>[Role or project title]</h3><div className="org">[Organization / team — edit]</div><p>Replace this sample with a concise description of the work, your contribution, and any outcomes you can substantiate.</p><span className="edit-note">EDITABLE SAMPLE — NOT A CLAIM</span></article><article className="timeline-item"><div className="timeline-date">[DATES — EDIT]</div><h3>[Research, community, or independent work]</h3><div className="org">[Organization / context — edit]</div><p>Use this space for meaningful experience beyond formal employment. Remove the entry if it does not apply.</p><span className="edit-note">EDITABLE SAMPLE — NOT A CLAIM</span></article></div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">06 / Education</div><h2>Learning the foundations.</h2></div><p className="section-intro">Computer Science Engineering is part of the brief. Institution and dates remain unset until confirmed.</p></div>
          <div className="education-timeline"><article className="education-stop"><div className="education-date">[DATES — EDIT]</div><div className="education-detail"><span className="section-kicker">DEGREE / PROGRAM</span><h3>Computer Science Engineering</h3><p>[Institution name] · [Degree details / expected graduation — editable and unverified]</p><span className="edit-note">PERSONAL DETAILS UNVERIFIED</span></div></article><article className="education-stop"><div className="education-date">[OPTIONAL]</div><div className="education-detail"><span className="section-kicker">FOCUS / COURSEWORK</span><h3>[Add verified focus area]</h3><p>Replace with specific coursework, research, or academic focus only if accurate.</p><span className="edit-note">EDITABLE SAMPLE — NOT A CLAIM</span></div></article></div>
        </div>
      </section>

      <section className="section section-alt" id="certifications">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">07 / Certifications</div><h2>Proof, not padding.</h2></div><p className="section-intro">Only real credentials belong here. Add exact credential names and issuer links when available.</p></div>
          <div className="cert-carousel" ref={certCarouselRef} tabIndex={0} aria-label="Certification placeholders. Use left and right arrow keys to navigate." onKeyDown={event => { if (event.key === 'ArrowLeft') { event.preventDefault(); stepCertificate(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); stepCertificate(1); } }} onTouchStart={event => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={event => {
            const end = event.changedTouches[0]?.clientX;
            if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 42) stepCertificate(end < touchStart.current ? 1 : -1);
            touchStart.current = null;
          }}>
            <div className="cert-carousel-main" aria-live="polite"><div className="cert-icon"><Award size={17} /></div><div><span className="section-kicker">EDITABLE SLOT {String(certificateIndex + 1).padStart(2, '0')} / {String(certificationSlots.length).padStart(2, '0')}</span><h3>{certificationSlots[certificateIndex].title}</h3><p>{certificationSlots[certificateIndex].issuer}</p><span className="edit-note">PLACEHOLDER — NO CREDENTIAL CLAIMED</span></div></div>
            <div className="cert-controls"><span>{String(certificateIndex + 1).padStart(2, '0')} <i /> {String(certificationSlots.length).padStart(2, '0')}</span><button className="icon-button" onClick={() => stepCertificate(-1)} aria-label="Previous certification placeholder"><ArrowLeft size={15} /></button><button className="icon-button" onClick={() => stepCertificate(1)} aria-label="Next certification placeholder"><ArrowRight size={15} /></button></div>
          </div>
        </div>
      </section>

      <section className="section" id="resume">
        <div className="container-wide"><div className="resume-band"><div><div className="section-kicker">08 / Resume</div><h3>A starter, not a stand-in.</h3><p>Review the on-page outline or download an editable text starter. Neither is a verified career document yet.</p></div><div className="resume-actions"><button className="button button-quiet" onClick={() => setResumeOpen(true)}><ExternalLink size={15} /> View resume</button><button className="button button-primary" onClick={downloadResume}><Download size={15} /> Download starter</button></div></div></div>
      </section>

      <section className="section section-alt" id="contact">
        <div className="container-wide">
          <div className="section-heading"><div><div className="section-kicker">09 / Contact</div><h2>Let’s find the next question.</h2></div><p className="section-intro">Interested in thoughtful engineering, ambitious experiments, or a conversation about what comes next? I’d like to hear from you.</p></div>
          <div className="contact-grid"><div className="contact-details"><h3>Good work starts<br />with a conversation.</h3><p>This frontend has no backend. The form validates locally and opens your email app with a prefilled message. Replace the clearly marked sample recipient before publishing.</p><div className="contact-line"><Mail size={15} /><span>rohit@example.com · EDIT THIS SAMPLE</span></div><div className="contact-line"><Braces size={15} /><span>Software · AI/ML · data · 3D</span></div><div className="social-actions"><button onClick={() => setSocialNotice(true)}><Github size={15} /> GitHub <span>URL unset</span></button><button onClick={() => setSocialNotice(true)}><Linkedin size={15} /> LinkedIn <span>URL unset</span></button><button onClick={() => setSocialNotice(true)}><Mail size={15} /> Email <span>verify address</span></button></div>{socialNotice && <p className="placeholder-notice" role="status">Social and direct email URLs are intentionally unset until Rohit provides verified details. Use the validated form to prepare an email draft.</p>}</div>
            <form className="contact-form" onSubmit={submitContact} noValidate><div className="field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Name" required /></div><div className="field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@domain.com" required /></div><div className="field full"><label htmlFor="contact-message">A little context</label><textarea id="contact-message" name="message" placeholder="What are you thinking about?" required /></div>{formError && <div className="form-error" role="alert">{formError}</div>}{formSent && <div className="form-success" role="status">Your email app should open with the message ready. If it didn’t, check that a mail app is configured.</div>}<button className="button button-primary form-submit" type="submit">Compose email <Send size={14} /></button></form>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container-wide footer-inner"><a className="brand" href="#home"><span className="brand-mark">R.</span> rohit<span style={{ color: 'hsl(var(--primary))' }}>.</span></a><span>Designed to grow with the work. © {new Date().getFullYear()} Rohit</span><a href="#home">Back to top ↑</a></div></footer>

      {activeProject && <div className="dialog-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setActiveProject(null); }}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title"><div className="dialog-head"><div><div className="section-kicker">{activeProject.category} / PROJECT NOTES</div><h3 id="project-dialog-title">{activeProject.name}</h3></div><button ref={dialogCloseButton} className="dialog-close" aria-label="Close project details" onClick={() => setActiveProject(null)}><X size={17} /></button></div><p>{activeProject.detail}</p><div className="dialog-facts"><div><span>01 / PROBLEM</span><p>[Add the real problem this work set out to solve.]</p></div><div><span>02 / APPROACH</span><p>[Describe Rohit’s actual contribution, decisions, and process.]</p></div><div><span>03 / OUTCOME</span><p>[Add only verified outcomes, learnings, or measured impact.]</p></div></div><div className="project-tags">{activeProject.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="dialog-links"><button className="button button-quiet" onClick={() => setRepoNotice('github')}><Github size={15} /> GitHub <span className="pending-label">not linked</span></button><button className="button button-quiet" onClick={() => setRepoNotice('demo')}><ExternalLink size={15} /> Live demo <span className="pending-label">not linked</span></button></div>{repoNotice && <p className="placeholder-notice" role="status">{repoNotice === 'github' ? 'GitHub repository' : 'Live demo'} URL is intentionally unset. Add a verified destination; no generic or false link is used.</p>}</section></div>}
      {resumeOpen && <div className="dialog-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setResumeOpen(false); }}><section className="dialog resume-dialog" role="dialog" aria-modal="true" aria-labelledby="resume-dialog-title"><div className="dialog-head"><div><div className="section-kicker">RESUME / ON-PAGE STARTER</div><h3 id="resume-dialog-title">Rohit</h3></div><button ref={dialogCloseButton} className="dialog-close" aria-label="Close resume view" onClick={() => setResumeOpen(false)}><X size={17} /></button></div><p className="resume-role">Computer Science Engineering Student</p><div className="resume-preview"><section><h4>Profile</h4><p>Exploring software engineering, AI/ML, data, and creative 3D development.</p></section><section><h4>Education</h4><p>[Institution, degree details, and dates — verify and edit]</p></section><section><h4>Selected projects</h4>{projects.map(project => <p key={project.name}><strong>{project.name}</strong> — [Add verified summary and outcome]</p>)}</section><section><h4>Skills</h4><p>{skills.map(group => group.name).join(' · ')}</p><p>[Remove technologies that do not reflect verified experience]</p></section><section><h4>Experience / Certifications</h4><p>[Add verified entries only. No career or credential claims are supplied.]</p></section><section><h4>Contact</h4><p>[Replace rohit@example.com and add verified social URLs]</p></section></div><div className="dialog-links"><button className="button button-primary" onClick={downloadResume}><Download size={15} /> Download editable starter</button></div></section></div>}
    </main>
    </MotionConfig>
  );
}

export default App;