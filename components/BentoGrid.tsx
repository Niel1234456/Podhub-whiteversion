import React, { useState, useRef, useEffect } from 'react';

const BentoGrid: React.FC = () => {
  const [scrollDir, setScrollDir] = useState<'auto' | 'up' | 'down'>('auto');
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  // Apply animation control
  useEffect(() => {
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;
    if (!col1 || !col2) return;

    // Helper to force animation state
    const updateAnimation = (el: HTMLDivElement, direction: string, forceRunning: boolean) => {
      el.style.animationDirection = direction;
      if (forceRunning) {
        // Use !important to override hover pause
        el.style.setProperty('animation-play-state', 'running', 'important');
      } else {
        el.style.removeProperty('animation-play-state');
      }
    };

    if (scrollDir === 'auto') {
      // Reset to CSS defaults
      col1.style.animationDirection = 'normal';
      col2.style.animationDirection = 'normal';
      col1.style.removeProperty('animation-play-state');
      col2.style.removeProperty('animation-play-state');
    } else if (scrollDir === 'up') {
      updateAnimation(col1, 'reverse', true);
      updateAnimation(col2, 'normal', true);
    } else if (scrollDir === 'down') {
      updateAnimation(col1, 'normal', true);
      updateAnimation(col2, 'reverse', true);
    }
  }, [scrollDir]);

  const toggleDir = (dir: 'up' | 'down') => {
    setScrollDir(prev => prev === dir ? 'auto' : dir);
  };

  // Left Column Content (To be duplicated for seamless looping)
  const LeftColumnItems = () => (
    <>
      {/* Live Performance Box */}
      <div className="h-[80px] sm:h-[100px] w-full rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl glass-edge px-3 sm:px-5 py-2 sm:py-3 bento-card flex items-center justify-between shimmer-effect group cursor-pointer relative overflow-hidden mb-3 sm:mb-6">
        <div className="relative z-10 w-full flex items-center justify-between">
          <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(239,68,68,1)]"></div>
            <div className="flex flex-col">
              <span className="text-[6px] sm:text-[8px] font-bold uppercase tracking-widest text-white/40 group-hover:text-red-400 transition-colors duration-500">Answer FAQ's</span>
              <span className="text-sm sm:text-lg font-bold text-white leading-none group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] transition-all duration-500">SUPPORT</span>
            </div>
          </div>
          <div className="text-[6px] sm:text-[8px] text-white/40 font-medium text-right uppercase tracking-tighter transition-all duration-500 group-hover:text-white/90 group-hover:tracking-normal">
            Simple<br/>ChatBot
          </div>
        </div>

        {/* Background Icon */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/6819/6819661.png" 
          alt="Chat Icon"
          className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 object-contain opacity-30 transition-all duration-700 ease-out group-hover:rotate-[15deg] group-hover:scale-110 group-hover:opacity-50 pointer-events-none"
        />
      </div>

      {/* Portrait (Orange) with Parallax */}
      <div className="h-[180px] sm:h-[280px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bento-card glass-edge relative group cursor-pointer mb-3 sm:mb-6">
        <img 
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop" 
          alt="Podcaster" 
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-125 group-hover:translate-y-4 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-yellow-600/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700"></div>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/80 translate-y-2 group-hover:translate-y-0 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.6)] transition-all duration-500">
          Studio Session
        </div>
      </div>

      {/* Avg Watch Time (Yellow Gradient) */}
      <div className="h-[140px] sm:h-[200px] w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FACC15] to-[#CA8A04] p-4 sm:p-8 bento-card glass-edge flex flex-col justify-end overflow-hidden group cursor-pointer relative mb-3 sm:mb-6">
        <div className="text-black relative z-10 transition-transform duration-700 group-hover:translate-y-[-4px]">
          <div className="text-2xl sm:text-4xl font-black leading-none tracking-tighter transition-transform duration-500 group-hover:scale-110 origin-left">Show Page</div>
          <div className="text-lg sm:text-xl font-bold mb-1 italic transition-all duration-500 group-hover:translate-x-1">Watch</div>
          <div className="text-[8px] sm:text-[10px] font-black opacity-70 uppercase tracking-widest transition-all duration-500 group-hover:tracking-[0.2em] group-hover:opacity-100">our latest Episode</div>
        </div>
        
        {/* Background Icon with Tilt Effect */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/10257/10257610.png" 
          alt="Play Icon"
          className="absolute -bottom-6 -right-6 w-32 h-32 sm:-bottom-8 sm:-right-8 sm:w-48 sm:h-48 object-contain opacity-30 transition-all duration-700 ease-out group-hover:rotate-[15deg] group-hover:scale-110 group-hover:opacity-50 pointer-events-none"
        />
      </div>
    </>
  );

  // Right Column Content (To be duplicated for seamless looping)
  const RightColumnItems = () => (
    <>
      {/* Large Image Portrait with Parallax */}
      <div className="h-[180px] sm:h-[280px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bento-card glass-edge relative group cursor-pointer mb-3 sm:mb-6">
        <img 
          src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop" 
          alt="Microphone" 
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-125 group-hover:translate-y-4 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-700"></div>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-1 group-hover:text-white group-hover:tracking-[0.15em] transition-all duration-500">Top Rated</div>
          <div className="text-xs sm:text-sm font-black leading-tight text-white uppercase tracking-tighter group-hover:text-yellow-400 transition-colors duration-500">Pro Audio Setup</div>
        </div>
      </div>

      {/* About Us (Formerly Growth) */}
      <div className="h-[140px] sm:h-[200px] w-full rounded-2xl sm:rounded-3xl bg-[#ffffff08] backdrop-blur-xl p-4 sm:p-8 bento-card glass-edge flex flex-col justify-center relative overflow-hidden group cursor-pointer mb-3 sm:mb-6">
        <div className="text-white relative z-10">
          <div className="text-[10px] sm:text-xs font-bold mb-1 tracking-widest uppercase text-white/40 group-hover:text-yellow-400/60 transition-colors duration-500"></div>
          <div className="text-2xl sm:text-4xl font-black leading-none mb-2 tracking-tighter text-yellow-400 group-hover:text-white group-hover:scale-110 origin-left group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500">ABOUT US</div>
          <div className="text-xs sm:text-sm font-bold leading-tight opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">Mission and Goal</div>
        </div>
        
        {/* Background Icon */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/17879/17879271.png" 
          alt="About Icon"
          className="absolute -bottom-6 -right-6 w-32 h-32 sm:-bottom-8 sm:-right-8 sm:w-48 sm:h-48 object-contain opacity-30 transition-all duration-700 ease-out group-hover:rotate-[15deg] group-hover:scale-110 group-hover:opacity-50 pointer-events-none"
        />
      </div>

      {/* Episode Card (Now Contact Us) */}
      <div className="h-[80px] sm:h-[120px] w-full rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-2xl glass-edge p-3 sm:p-5 bento-card flex items-center gap-3 sm:gap-4 shimmer-effect group cursor-pointer relative overflow-hidden mb-3 sm:mb-6">
        <div className="flex items-center justify-between w-full relative z-10">
          <div className="flex-1 min-w-0 transition-transform duration-500 group-hover:translate-x-2">
            <div className="text-black text-sm sm:text-lg font-black leading-tight truncate uppercase tracking-tight group-hover:text-yellow-600 transition-colors duration-500">CONTACT US</div>
            <div className="text-black text-[8px] sm:text-[10px] font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-500">Let's collaborate</div>
          </div>
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black flex items-center justify-center transition-all duration-500 group-hover:bg-yellow-500 group-hover:scale-110 group-hover:-rotate-45 flex-shrink-0">
             <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </div>
        </div>

        {/* Background Icon */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/6901/6901119.png" 
          alt="Icon"
          className="absolute -bottom-4 -right-4 w-20 h-20 sm:-bottom-6 sm:-right-6 sm:w-32 sm:h-32 object-contain opacity-30 transition-all duration-700 ease-out group-hover:rotate-[15deg] group-hover:scale-110 group-hover:opacity-50 pointer-events-none"
        />
      </div>
    </>
  );

  return (
    <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto group/controls px-2 sm:px-0">
      {/* Responsive Height: Shorter on mobile (420px) vs desktop (650px) */}
      <div className="marquee-container grid grid-cols-2 gap-3 sm:gap-6 h-[420px] sm:h-[650px] w-full overflow-hidden rounded-[30px] sm:rounded-[40px] relative mask-fade-edges px-3 sm:px-10 py-4">
        
        {/* COLUMN 1: Wrapper for Entrance (RushUp) -> Inner for Loop (MarqueeUp) */}
        <div className="relative w-full h-full">
          <div className="flex flex-col h-full opacity-0" style={{ animation: 'rushUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
            <div 
              ref={col1Ref}
              className="flex flex-col hover:[animation-play-state:paused]"
              style={{ animation: 'marqueeUp 90s linear infinite', animationDelay: '1.5s' }}
            >
              <LeftColumnItems />
              <LeftColumnItems />
              <LeftColumnItems />
              <LeftColumnItems />
            </div>
          </div>
        </div>

        {/* COLUMN 2: Wrapper for Entrance (RushDown) -> Inner for Loop (MarqueeDown) */}
        <div className="relative w-full h-full">
          <div className="flex flex-col h-full opacity-0" style={{ animation: 'rushDown 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
            <div 
              ref={col2Ref}
              className="flex flex-col hover:[animation-play-state:paused]"
              style={{ animation: 'marqueeDown 90s linear infinite', animationDelay: '1.5s' }}
            >
              <RightColumnItems />
              <RightColumnItems />
              <RightColumnItems />
              <RightColumnItems />
            </div>
          </div>
        </div>
      </div>

      {/* Manual Controls - Bottom Center, Always Visible */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-row gap-4 z-50 transition-opacity duration-300">
        <button 
          onClick={() => toggleDir('up')}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md flex items-center justify-center border transition-all duration-300 shadow-lg ${scrollDir === 'up' ? 'bg-yellow-400 text-black border-yellow-400 scale-110' : 'bg-black/60 text-white border-white/10 hover:bg-white/10 hover:border-white/40'}`}
          aria-label="Scroll Up"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"/></svg>
        </button>
        <button 
          onClick={() => toggleDir('down')}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md flex items-center justify-center border transition-all duration-300 shadow-lg ${scrollDir === 'down' ? 'bg-yellow-400 text-black border-yellow-400 scale-110' : 'bg-black/60 text-white border-white/10 hover:bg-white/10 hover:border-white/40'}`}
          aria-label="Scroll Down"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </div>
    </div>
  );
};

export default BentoGrid;