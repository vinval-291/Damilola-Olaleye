/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun,
  Moon,
  ArrowRight, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  Search, 
  BookOpen, 
  Layers, 
  PenTool,
  Youtube,
  FileText,
  Activity,
  Globe
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const SCRIPTS = [
  {
    title: "Documentary Script Sample",
    description: "A research-driven narrative exploring the dynamics of a company or industry through structured storytelling.",
    link: "https://docs.google.com/document/d/130hs2za16FeCkv5Qz6b147r4rk3vdzRsaHClEDz20RU",
    type: "Documentary"
  },
  {
    title: "Industry Breakdown Script",
    description: "An analytical script explaining the mechanics behind major industries and market events.",
    link: "https://docs.google.com/document/d/1-pOaJvpLa5h8NE620jYL9EXf2wXVwpGguLhPx0T28F4",
    type: "Industry Analysis"
  },
  {
    title: "Business Storytelling Script",
    description: "A narrative-focused script exploring the rise, strategy, or challenges of companies.",
    link: "https://docs.google.com/document/d/11IYjW--fKNMwEPwcL8vbaojzw5wHRfSgfW6e-9NvH_k",
    type: "Business"
  },
  {
    title: "Research-Based Commentary Script",
    description: "A commentary-style YouTube script combining research, insight, and storytelling.",
    link: "https://docs.google.com/document/d/128r-BfG794NZT_kUJiTAEevQuh-X2F0uVj1wNu1e-sA",
    type: "Commentary"
  }
];

const EXPERTISE = [
  {
    title: "Systems Analysis",
    description: "Understanding how different components interact within complex systems and translating those relationships into clear narratives.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Deep Research",
    description: "Gathering, analyzing, and synthesizing information from multiple sources to build credible and insightful scripts.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Knowledge Translation",
    description: "Turning technical knowledge into accessible stories for broad audiences.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Narrative Storytelling",
    description: "Designing scripts that maintain viewer curiosity, engagement, and retention.",
    icon: <PenTool className="w-6 h-6" />
  }
];

const SERVICES = [
  {
    title: "YouTube Script Writing",
    description: "Long-form scripts designed for documentary, educational, and business analysis channels."
  },
  {
    title: "Research & Content Development",
    description: "Comprehensive research and information synthesis to support high-quality storytelling."
  },
  {
    title: "Documentary Scriptwriting",
    description: "Narrative scripts designed for storytelling-driven YouTube content."
  },
  {
    title: "Industry & Business Analysis Scripts",
    description: "Breakdowns of companies, industries, and economic trends."
  }
];

const INTERESTS = [
  { name: "Healthcare systems analysis", icon: <Activity className="w-5 h-5" /> },
  { name: "Documentary storytelling about companies and industries", icon: <Youtube className="w-5 h-5" /> },
  { name: "Industry breakdowns and business storytelling", icon: <FileText className="w-5 h-5" /> },
  { name: "Scientific communication and narrative translation", icon: <Globe className="w-5 h-5" /> }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const themeClasses = {
    bg: isDarkMode ? 'bg-zinc-950' : 'bg-white',
    bgAlt: isDarkMode ? 'bg-zinc-900' : 'bg-zinc-50',
    text: isDarkMode ? 'text-zinc-100' : 'text-zinc-900',
    textMuted: isDarkMode ? 'text-zinc-400' : 'text-zinc-600',
    border: isDarkMode ? 'border-zinc-800' : 'border-zinc-200',
    card: isDarkMode ? 'bg-zinc-900' : 'bg-white',
    input: isDarkMode ? 'bg-zinc-950' : 'bg-white',
    nav: isDarkMode ? 'bg-zinc-950/90' : 'bg-white/90',
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? `${themeClasses.nav} backdrop-blur-md py-4 shadow-sm border-b ${themeClasses.border}` : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className={`text-xl font-display font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
            OLALEYE <span className="text-yt-red">DAMILOLA</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} hover:text-yt-red transition-colors uppercase tracking-widest`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-800 text-yellow-400' : 'bg-zinc-100 text-zinc-600'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className={isDarkMode ? 'text-white' : 'text-zinc-900'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 ${themeClasses.bg} pt-24 px-6 md:hidden`}
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-display font-medium border-b ${themeClasses.border} pb-4 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className={`relative min-h-screen flex items-center pt-20 overflow-hidden ${themeClasses.bg}`}>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-yt-red/10 -skew-x-12 transform translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 bg-yt-red text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  YouTube Scriptwriter & Pharmacologist
                </span>
                <h1 className={`text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                  Turning Complex Ideas Into <span className="italic text-zinc-500">Engaging</span> Stories
                </h1>
                <p className={`text-xl md:text-2xl ${themeClasses.textMuted} max-w-2xl mb-10 font-light leading-relaxed`}>
                  Research-driven YouTube scripts that break down companies, industries, and complex systems into compelling stories audiences want to watch.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#portfolio" className={`px-8 py-4 ${isDarkMode ? 'bg-white text-zinc-950' : 'bg-zinc-900 text-white'} font-bold uppercase tracking-widest flex items-center group hover:bg-yt-red hover:text-white transition-all`}>
                    View My Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#contact" className={`px-8 py-4 border ${isDarkMode ? 'border-zinc-700 text-white hover:bg-zinc-800' : 'border-zinc-300 text-zinc-900 hover:bg-zinc-100'} font-bold uppercase tracking-widest transition-all`}>
                    Hire Me
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-4 hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className={`aspect-[3/4] ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'} rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700`}>
                  <img 
                    src="https://picsum.photos/seed/writer/800/1200" 
                    alt="Olaleye Damilola" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={`absolute -bottom-6 -left-6 ${themeClasses.card} p-6 shadow-xl max-w-[240px] border ${themeClasses.border}`}>
                  <p className={`text-sm font-medium italic ${themeClasses.textMuted}`}>
                    "I specialize in translating complex technical ideas into clear, engaging narratives."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-24 ${themeClasses.bg}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yt-red mb-8">About Me</h2>
                <h3 className={`text-4xl md:text-5xl font-display font-bold mb-8 leading-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                  Pharmacologist by training, storyteller by choice.
                </h3>
                <div className={`space-y-6 text-lg ${themeClasses.textMuted} leading-relaxed font-light`}>
                  <p>
                    I’m a <strong className={`${isDarkMode ? 'text-white' : 'text-zinc-900'} font-medium`}>pharmacologist, copywriter, and YouTube scriptwriter</strong> driven by one core interest: understanding how complex systems work.
                  </p>
                  <p>
                    From <strong className={`${isDarkMode ? 'text-white' : 'text-zinc-900'} font-medium`}>drug mechanisms and molecular interactions</strong> to healthcare infrastructures, companies, and industry ecosystems, my work explores the structures that shape outcomes in the real world.
                  </p>
                  <p>
                    My expertise lies at the intersection of science, research, communication, and storytelling. I specialize in translating complex technical ideas into clear, engaging narratives that inform, educate, and keep audiences watching.
                  </p>
                </div>
              </div>
              <div className={`${themeClasses.bgAlt} p-12 rounded-3xl border ${themeClasses.border}`}>
                <p className={`text-xl ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed italic mb-8`}>
                  "As a YouTube scriptwriter, I create research-driven scripts for channels that analyze companies, industries, and major business events. My process blends deep research, information synthesis, and narrative design."
                </p>
                <div className={`h-px ${themeClasses.border} w-full mb-8`} />
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted} mb-2`}>Focus</h4>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Business Analysis</p>
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted} mb-2`}>Specialty</h4>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Complex Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className={`py-24 ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'} transition-colors duration-500`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yt-red mb-4">Core Strengths</h2>
              <h3 className={`text-4xl md:text-5xl font-display font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>What I bring to the table</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {EXPERTISE.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 ${isDarkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'} border hover:border-yt-red transition-all group`}
                >
                  <div className="mb-6 text-yt-red group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h4>
                  <p className={`${themeClasses.textMuted} text-sm leading-relaxed`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className={`py-24 ${themeClasses.bg}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yt-red mb-4">Featured Scripts</h2>
                <h3 className={`text-4xl md:text-5xl font-display font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Selected Work</h3>
              </div>
              <p className={`${themeClasses.textMuted} max-w-md`}>
                Explore a selection of my YouTube scripts focused on business analysis, industry breakdowns, and documentary storytelling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {SCRIPTS.map((script, index) => (
                <motion.div 
                  key={script.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`aspect-video ${themeClasses.bgAlt} mb-6 overflow-hidden relative border ${themeClasses.border}`}>
                    <img 
                      src={`https://picsum.photos/seed/${script.title.replace(/\s/g, '')}/800/450`} 
                      alt={script.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${isDarkMode ? 'bg-zinc-950/90' : 'bg-white/90'} backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-zinc-900'} border ${themeClasses.border}`}>
                        {script.type}
                      </span>
                    </div>
                  </div>
                  <h4 className={`text-2xl font-display font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-zinc-900'} group-hover:text-yt-red transition-colors`}>
                    {script.title}
                  </h4>
                  <p className={`${themeClasses.textMuted} mb-6 line-clamp-2 font-light`}>
                    {script.description}
                  </p>
                  <a 
                    href={script.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-bold uppercase tracking-widest border-b-2 ${isDarkMode ? 'border-white text-white' : 'border-zinc-900 text-zinc-900'} pb-1 hover:text-yt-red hover:border-yt-red transition-all`}
                  >
                    Read Script <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={`py-24 ${themeClasses.bgAlt}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yt-red mb-4">Services</h2>
                <h3 className={`text-4xl font-display font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>How I can help your channel</h3>
                <p className={`${themeClasses.textMuted} mb-8 leading-relaxed`}>
                  I provide end-to-end scriptwriting solutions for high-quality YouTube content that demands deep research and narrative precision.
                </p>
                <div className={`p-6 ${themeClasses.bg} shadow-sm border ${themeClasses.border} rounded-2xl`}>
                  <h4 className={`font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    <Mail className="w-4 h-4 mr-2 text-yt-red" /> Ready to start?
                  </h4>
                  <p className={`text-sm ${themeClasses.textMuted} mb-4`}>Let's discuss your project and how we can bring your ideas to life.</p>
                  <a href="#contact" className="text-sm font-bold text-yt-red hover:underline">Get a quote &rarr;</a>
                </div>
              </div>
              
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                {SERVICES.map((service, index) => (
                  <div key={service.title} className={`p-8 ${themeClasses.bg} border ${themeClasses.border} rounded-2xl hover:shadow-xl hover:border-zinc-700 transition-all duration-500`}>
                    <div className="w-10 h-10 bg-yt-red/10 text-yt-red rounded-lg flex items-center justify-center mb-6">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                    <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{service.title}</h4>
                    <p className={`${themeClasses.textMuted} text-sm leading-relaxed`}>
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={`py-24 ${themeClasses.bg} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className={`absolute -top-24 -right-24 text-[20rem] font-display font-bold ${isDarkMode ? 'text-zinc-900' : 'text-zinc-50'} select-none -z-10`}>
              "
            </div>
            <div className="max-w-3xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yt-red mb-8">Philosophy</h2>
              <blockquote className={`text-4xl md:text-6xl font-display font-bold leading-tight mb-12 italic ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                "Every system has mechanisms. Every outcome has a structure."
              </blockquote>
              <div className={`space-y-6 text-xl ${themeClasses.textMuted} font-light leading-relaxed`}>
                <p>
                  Understanding those structures — and explaining them well — is the key to making complexity accessible.
                </p>
                <p>
                  My work focuses on uncovering those mechanisms and transforming them into stories audiences can understand and enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects & Interests */}
        <section className={`py-24 ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'} transition-colors duration-500`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yt-red mb-4">Exploration</h2>
              <h3 className={`text-4xl font-display font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Current Areas of Interest</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INTERESTS.map((interest, index) => (
                <div key={interest.name} className={`p-8 ${themeClasses.bg} rounded-2xl border ${themeClasses.border} hover:bg-yt-red/5 transition-all text-center`}>
                  <div className="w-12 h-12 bg-yt-red/20 text-yt-red rounded-full flex items-center justify-center mx-auto mb-6">
                    {interest.icon}
                  </div>
                  <p className={`font-medium text-sm leading-relaxed ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {interest.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-yt-red text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-8">Let's Work Together</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tighter">
              Turn complex ideas into <br className="hidden md:block" /> engaging content.
            </h3>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto font-light">
              Looking for well-researched YouTube scripts that combine storytelling with deep analysis?
            </p>
            <a href="#contact" className={`inline-flex items-center px-10 py-5 ${isDarkMode ? 'bg-white text-yt-red' : 'bg-zinc-900 text-white'} font-bold uppercase tracking-widest hover:bg-zinc-800 hover:text-white transition-all`}>
              Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-24 ${themeClasses.bg}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yt-red mb-4">Contact</h2>
                <h3 className={`text-4xl font-display font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Get in touch</h3>
                <p className={`${themeClasses.textMuted} mb-12 text-lg font-light leading-relaxed`}>
                  For collaborations, writing projects, or inquiries, feel free to reach out. I'm always open to discussing new ideas and storytelling opportunities.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 ${themeClasses.bgAlt} rounded-full flex items-center justify-center mr-4 shrink-0 border ${themeClasses.border}`}>
                      <Mail className="w-5 h-5 text-yt-red" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted} mb-1`}>Email</h4>
                      <p className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>hello@olaleyedamilola.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${themeClasses.bgAlt} p-10 rounded-3xl border ${themeClasses.border}`}>
                <form 
                  action="https://formspree.io/f/mjgayndn" 
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted}`}>Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className={`w-full px-4 py-3 ${themeClasses.bg} border ${themeClasses.border} focus:border-yt-red outline-none transition-all ${isDarkMode ? 'text-white' : 'text-zinc-900'}`} 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted}`}>Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className={`w-full px-4 py-3 ${themeClasses.bg} border ${themeClasses.border} focus:border-yt-red outline-none transition-all ${isDarkMode ? 'text-white' : 'text-zinc-900'}`} 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted}`}>Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      className={`w-full px-4 py-3 ${themeClasses.bg} border ${themeClasses.border} focus:border-yt-red outline-none transition-all ${isDarkMode ? 'text-white' : 'text-zinc-900'}`} 
                      placeholder="Project Inquiry" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted}`}>Message</label>
                    <textarea 
                      rows={5} 
                      name="message"
                      required
                      className={`w-full px-4 py-3 ${themeClasses.bg} border ${themeClasses.border} focus:border-yt-red outline-none transition-all resize-none ${isDarkMode ? 'text-white' : 'text-zinc-900'}`} 
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className={`w-full py-4 ${isDarkMode ? 'bg-white text-zinc-950' : 'bg-zinc-900 text-white'} font-bold uppercase tracking-widest hover:bg-yt-red hover:text-white transition-all`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-12 ${themeClasses.bg} border-t ${themeClasses.border}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className={`text-lg font-display font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
            OLALEYE <span className="text-yt-red">DAMILOLA</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs font-bold uppercase tracking-widest ${themeClasses.textMuted} hover:text-yt-red transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <p className={`text-xs ${themeClasses.textMuted} uppercase tracking-widest`}>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
