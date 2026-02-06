import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-2 sm:pt-4 px-2 sm:px-6 pointer-events-none">
        <nav className={`w-full max-w-7xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto opacity-0 animate-slide-down ${
          scrolled || mobileMenuOpen 
            ? 'bg-white/90 backdrop-blur-2xl py-2 sm:py-3 px-3 sm:px-8 rounded-xl sm:rounded-full border border-gray-200/50 shadow-xl' 
            : 'bg-white/10 backdrop-blur-lg py-3 sm:py-4 px-3 sm:px-10 rounded-xl sm:rounded-full border border-white/20 shadow-sm'
        }`}>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo Section */}
            <div className="flex items-center gap-6 lg:gap-10 flex-shrink-0">
              <div className="text-lg sm:text-2xl font-black tracking-tighter uppercase italic relative cursor-pointer group pl-2 sm:pl-0">
                <span className="text-white group-hover:text-yellow-400 transition-colors">POD</span>
                <span className="text-white group-hover:text-yellow-400 transition-colors drop-shadow-sm">HUB</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></div>
              </div>
              
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                <a href="#" className="hover:text-yellow-400 transition-all hover:tracking-[0.3em]">About</a>
                <a href="#" className="hover:text-yellow-400 transition-all hover:tracking-[0.3em]">Shows</a>
                <a href="#" className="hover:text-yellow-400 transition-all hover:tracking-[0.3em]">Contact</a>
              </div>
            </div>

            {/* Search and Actions Section */}
            <div className="flex items-center gap-2 md:gap-6 flex-1 justify-end">

              {/* Right Side Buttons */}
              <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <button className="bg-[#FACC15] text-black px-3 py-2 sm:px-5 md:px-7 sm:py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:bg-white hover:text-black hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 sm:gap-2">
                  <span className="hidden sm:inline">Subscribe now</span>
                  <span className="sm:hidden">Subscribe</span>
                  <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                  className="lg:hidden text-white focus:outline-none p-1.5 sm:p-2 bg-white/20 rounded-full border border-white/40 hover:bg-white/40 transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <div className="w-4 h-3 sm:w-5 sm:h-4 relative flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1 sm:translate-y-1.5' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Glassmorphism Mobile Overlay */}
      <div className={`fixed inset-0 bg-[#FACC15]/95 backdrop-blur-[60px] z-[45] transition-all duration-700 md:hidden flex flex-col justify-center items-center gap-6 sm:gap-8 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="w-full px-8 mb-4 sm:mb-8 max-w-sm">
           <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white border border-black/10 rounded-2xl py-3 px-5 text-base sm:text-lg font-medium text-black focus:outline-none focus:border-black transition-colors shadow-lg"
            />
        </div>
        <a href="#" className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-black hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Creators</a>
        <a href="#" className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-black hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Shows</a>
        <a href="#" className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-black hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Studio</a>
        
        <div className="h-px w-32 bg-black/20 my-2 sm:my-4"></div>
        
        <button className="bg-black text-white px-10 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl" onClick={() => setMobileMenuOpen(false)}>
          Join Now
        </button>
      </div>
    </>
  );
};

export default Navbar;