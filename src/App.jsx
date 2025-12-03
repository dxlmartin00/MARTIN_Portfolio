import React, { useState, useEffect } from 'react';
import profPic from './assets/prof_pic.jpg';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database,
  Layout,
  Send,
  Menu,
  X,
  Crosshair,
  Shield,
  Zap,
  Target,
  Trophy
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('lobby');

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Lobby', id: 'lobby' },
    { name: 'Loadout', id: 'loadout' },
    { name: 'Missions', id: 'missions' },
    { name: 'Comms', id: 'comms' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1923] text-white font-sans selection:bg-[#ff4654] selection:text-white overflow-x-hidden">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#ff4654 1px, transparent 1px), linear-gradient(90deg, #ff4654 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Top Navigation Bar / HUD */}
      <nav className="fixed w-full z-50 border-b-2 border-[#ff4654]/20 bg-[#0f1923]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Area */}
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => scrollToSection('lobby')}>
              <div className="relative">
                <span className="text-3xl font-black tracking-tighter italic uppercase transform -skew-x-12 inline-block border-l-4 border-[#ff4654] pl-3">
                  DEV<span className="text-[#ff4654]">FOLIO</span>
                </span>
                <span className="absolute -bottom-1 -right-2 text-[10px] text-[#ff4654] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  VER 2.0
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-6 py-2 text-sm font-bold uppercase tracking-wider transform -skew-x-12 transition-all duration-200 border border-transparent
                      ${activeSection === link.id 
                        ? 'bg-[#ff4654] text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]' 
                        : 'text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5'
                      }`}
                  >
                    <span className="transform skew-x-12 inline-block">{link.name}</span>
                  </button>
                ))}
                <button className="ml-8 bg-white text-[#0f1923] px-6 py-2 text-sm font-bold uppercase tracking-wider transform -skew-x-12 hover:bg-[#ff4654] hover:text-white transition-all shadow-[4px_4px_0px_0px_#ff4654]">
                  <span className="transform skew-x-12 inline-block">Resume_DL</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ff4654] focus:outline-none"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0f1923] border-b-2 border-[#ff4654]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-[#ff4654] hover:bg-white/5 block px-3 py-4 rounded-md text-xl font-bold uppercase tracking-widest w-full text-left border-l-4 border-transparent hover:border-[#ff4654]"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (Lobby) */}
      <section id="lobby" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Player Card / Image */}
            <div className="relative group w-full max-w-md mx-auto md:mx-0 order-2 md:order-1">
              {/* Decorative HUD corners */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#ff4654] z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#ff4654] z-20"></div>
              
              <div className="relative bg-[#1f2937] p-2 transform -skew-x-6 border border-gray-700">
                <div className="relative overflow-hidden bg-black aspect-square">
                   <img 
                    src={profPic} 
                    alt="Player Avatar" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform skew-x-6 scale-110 group-hover:scale-100"
                  />
                  {/* Overlay Scanlines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none skew-x-6"></div>
                </div>
                
                {/* Stats Bar */}
                <div className="mt-4 flex justify-between items-center text-xs font-mono text-gray-400 px-2 skew-x-6">
                  <div className="flex flex-col">
                    <span className="text-[#ff4654] font-bold">CLASS</span>
                    <span>FULL_STACK</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[#ff4654] font-bold">LEVEL</span>
                    <span>STUDENT_DEV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="flex-1 text-center md:text-left order-1 md:order-2">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic mb-6 leading-none">
                Luigie<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Martin</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-medium mb-8 max-w-2xl border-l-4 border-[#ff4654] pl-6 ml-4 md:ml-0">
                Product‑focused engineer who builds scalable backends and polished frontends. From Python OCR pipelines to Flutter mobile apps and Supabase integrations. I design reliable solutions that capture data accurately and ship to production.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('missions')}
                  className="px-8 py-4 bg-[#ff4654] text-white font-bold uppercase tracking-widest transform -skew-x-12 hover:bg-[#ff0015] transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="transform skew-x-12 flex items-center gap-2">
                    Start Mission <Target size={20} className="group-hover:rotate-180 transition-transform"/>
                  </span>
                </button>
                <button 
                  onClick={() => scrollToSection('comms')}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest transform -skew-x-12 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <span className="transform skew-x-12">Init Comms</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#ff4654] to-transparent"></div>
        </div>
      </section>

      {/* Skills Section (Loadout) */}
      <section id="loadout" className="py-24 relative bg-[#0f1923] border-t border-[#ff4654]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Loadout</h2>
            <div className="h-1 flex-1 bg-gray-800 relative">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-[#ff4654]"></div>
            </div>
            <span className="font-mono text-[#ff4654]">02 // SKILLS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Layout size={32} />, name: 'Frontend', desc: 'React, Tailwind, Next.js, Bootstrap, Laravel', stat: '90%' },
              { icon: <Database size={32} />, name: 'Backend', desc: 'Node, Python, SQL, Flask', stat: '80%' },
              { icon: <Shield size={32} />, name: 'Security', desc: 'Auth, Encryption, OWASP', stat: '70%' },
              { icon: <Zap size={32} />, name: 'Performance', desc: 'Optimization, AWS, Docker, Git', stat: '90%' },
            ].map((skill, index) => (
              <div key={index} className="group bg-[#1a2332] p-6 border-l-4 border-transparent hover:border-[#ff4654] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl font-black">{index + 1}</span>
                </div>
                
                <div className="mb-6 text-[#ff4654] group-hover:scale-110 transition-transform origin-left">
                  {skill.icon}
                </div>
                
                <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-[#ff4654] transition-colors">{skill.name}</h3>
                <p className="text-gray-400 font-mono text-sm mb-4">{skill.desc}</p>
                
                {/* Stat Bar */}
                <div className="w-full bg-gray-800 h-2 mt-4">
                  <div 
                    className="h-full bg-[#ff4654] transition-all duration-1000 group-hover:w-full w-0"
                    style={{width: skill.stat}}
                  ></div>
                </div>
                <div className="text-right text-xs font-mono text-[#ff4654] mt-1">
                  MASTERY: {skill.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (Missions) */}
      <section id="missions" className="py-24 relative bg-[#0a0f16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16 justify-end text-right">
             <span className="font-mono text-[#ff4654]">03 // PROJECTS</span>
             <div className="h-1 flex-1 bg-gray-800 relative">
               <div className="absolute top-0 right-0 h-full w-1/3 bg-[#ff4654]"></div>
             </div>
             <h2 className="text-5xl font-black uppercase italic tracking-tighter">Mission Log</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LIGER",
                type: "OCR // GEO-TAGGING",
                desc: "Advanced OCR-based application that extracts GPS coordinates from images containing text and embeds them directly into image metadata.",
                tech: "Python",
                status: "COMPLETED",
                repoUrl: "https://github.com/dxlmartin00/OCR-App.git",
              },
              {
                title: "SNAPCITE",
                type: "PRODUCTIVITY",
                desc: "Mobile app that captures and organizes citations from book snapshots using OCR technology.",
                tech: "Dart // Flutter",
                status: "COMPLETED",
                repoUrl: "https://github.com/dxlmartin00/SnapCite.git"
              },
              {
                title: "SMARTQUEUE",
                type: "MOBILE APP",
                desc: "Smart queuing mobile app for NEMSU-Lianga Campus Registrar.",
                tech: "Dart // Supabase",
                status: "IN PROGRESS",
                repoUrl: "https://github.com/dxlmartin00/SmartQueue.git"
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-[#1f2937] border-2 border-gray-800 hover:border-[#ff4654] transition-all duration-300">
                {/* Header with skew */}
                <div className="h-48 bg-[#0f1923] relative overflow-hidden border-b-2 border-gray-800 group-hover:border-[#ff4654] transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                     <Code2 size={64} className="text-[#ff4654]" />
                  </div>
                  <div className="absolute top-2 right-2 bg-[#ff4654] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider transform">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="text-xs font-mono text-[#ff4654] mb-1">{project.type}</div>
                  <h3 className="text-2xl font-black uppercase mb-3 italic">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
                  
                  <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
                    <span className="font-mono text-xs text-gray-500">{project.tech}</span>
                    <div className="flex gap-3">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff4654] transition-colors">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Hover Corner Effect */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-[#ff4654] border-r-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Comms) */}
      <section id="comms" className="py-24 relative overflow-hidden bg-[#0f1923] border-t border-[#ff4654]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#1f2937] p-1 border-2 border-gray-700 transform -skew-x-3">
            <div className="bg-[#0a0f16] p-8 md:p-12 transform skew-x-3 relative overflow-hidden">
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Crosshair size={200} />
              </div>

              <div className="text-center mb-10">
                <h2 className="text-4xl font-black uppercase italic mb-2">Establish Comms</h2>
                <p className="text-gray-400 font-mono text-sm">
                  CHANNEL OPEN // ENCRYPTED // READY FOR TRANSMISSION
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-xs font-bold text-[#ff4654] uppercase mb-2 tracking-widest">Agent ID (Name)</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#1f2937] border-l-4 border-gray-700 text-white p-4 focus:outline-none focus:border-[#ff4654] transition-all font-mono text-sm"
                      placeholder="ENTER NAME..."
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-bold text-[#ff4654] uppercase mb-2 tracking-widest">Frequency (Email)</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#1f2937] border-l-4 border-gray-700 text-white p-4 focus:outline-none focus:border-[#ff4654] transition-all font-mono text-sm"
                      placeholder="ENTER EMAIL..."
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="block text-xs font-bold text-[#ff4654] uppercase mb-2 tracking-widest">Transmission Data</label>
                  <textarea 
                    rows="4" 
                    className="w-full bg-[#1f2937] border-l-4 border-gray-700 text-white p-4 focus:outline-none focus:border-[#ff4654] transition-all font-mono text-sm"
                    placeholder="ENTER MESSAGE PARAMETERS..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-[#ff4654] hover:bg-[#ff0015] text-white font-bold uppercase tracking-widest py-5 transform -skew-x-6 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group">
                  <span className="transform skew-x-6 flex items-center gap-2">
                    Send Transmission <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0f16] border-t border-gray-800 text-center relative overflow-hidden">
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff4654] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <div className="flex gap-6 mb-4 text-gray-500">
            <a href="#" className="hover:text-[#ff4654] transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-[#ff4654] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-[#ff4654] transition-colors"><Trophy size={20} /></a>
          </div>
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
            © 2024 DEVFOLIO // SYSTEM ACTIVE // GLHF
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;