import React from 'react';
import BentoGrid from './BentoGrid';

const Hero: React.FC = () => {
  const socialIcons = [
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: "https://cdn-icons-png.flaticon.com/512/13051/13051733.png",
      color: 'hover:bg-[#1877F2]',
      delay: '1800ms'
    },
    {
      id: 'spotify',
      name: 'Spotify',
      url: 'https://www.spotify.com',
      icon: "https://cdn-icons-png.flaticon.com/512/2504/2504940.png",
      color: 'hover:bg-[#1DB954]',
      delay: '1950ms'
    },
    {
      id: 'apple',
      name: 'Apple Podcast',
      url: 'https://podcasts.apple.com',
      icon: "https://cdn-icons-png.flaticon.com/512/831/831299.png",
      color: 'hover:bg-[#BD49D9]',
      delay: '2100ms'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: 'https://www.youtube.com',
      icon: "https://cdn-icons-png.flaticon.com/512/3938/3938026.png",
      color: 'hover:bg-[#FF0000]',
      delay: '2250ms'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-24 pb-12 lg:py-0">
      {/* Text Column */}
      <div className="space-y-8 lg:space-y-10 lg:pl-16 xl:pl-24 order-2 lg:order-1 text-center lg:text-left lg:mt-32">
        <div className="space-y-6">
          <div className="relative inline-block">
            {/* AESTHETIC POP-UP GRAPHICS */}
            
            {/* LIVE Badge popping top right */}
            <div 
              className="absolute -top-4 -right-12 sm:-right-16 bg-white/90 backdrop-blur-md border border-white/50 px-3 py-1 rounded-full flex items-center gap-2 opacity-0 animate-zoom-in z-20 shadow-xl"
              style={{ animationDelay: '2000ms' }}
            >
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
              <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-black">Recording</span>
            </div>

            


            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-[0.9] lg:leading-[0.85] tracking-tighter drop-shadow-sm flex items-center justify-center lg:justify-start">
              <span className="relative inline-flex items-center text-white py-4 lg:py-10 -my-4 lg:-my-10">
                <span className="animate-scale-p opacity-0 relative z-10 logo-letter text-white">P</span>
                <span className="inline-flex">
                  <span className="inline-block animate-slide-rest opacity-0 delay-800 whitespace-nowrap">
                    {['O', 'D', 'H', 'U', 'B'].map((letter, i) => (
                      <span 
                        key={i} 
                        className="logo-letter text-white"
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </span>
                <div className="absolute bottom-2 lg:bottom-6 left-0 w-full bg-gradient-to-r from-yellow-400 via-white to-transparent opacity-0 animate-scan-underline delay-[1800ms] pointer-events-none"></div>
              </span>
            </h1>
          </div>
          
          <div className="space-y-6 lg:space-y-8 px-2 sm:px-0">
            {/* HEADLINE: White to Yellow Gradient with Black Shadow */}
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight max-w-[800px] mx-auto lg:mx-0 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-yellow-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] opacity-0 animate-zoom-in" style={{ animationDelay: '1000ms' }}>
              Podcasting story experience,<br className="hidden sm:block" /> made for today's Filipino.
            </p>
          </div>
        </div>

        {/* Action and Social Section */}
        <div className="space-y-8">
          {/* BUTTON */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 opacity-0 animate-zoom-in" style={{ animationDelay: '1500ms' }}>
            <button className="relative overflow-hidden hover-shine-effect bg-[#FACC15] text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-black text-base sm:text-lg hover:bg-white hover:text-black transition-all flex items-center gap-3 group shadow-xl">
              <span className="shine-streak streak-1"></span>
              <span className="shine-streak streak-2"></span>
              <span className="shine-streak streak-3"></span>
              
              <span className="relative z-10">Explore more</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* SOCIAL ICONS: Updated to match white/yellow theme */}
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 pt-4 flex-wrap">
            {socialIcons.map((social) => (
              <a 
                key={social.id}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ animationDelay: social.delay }}
                className="group flex items-center bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FACC15] rounded-full h-12 w-12 sm:h-16 sm:w-16 hover:w-48 sm:hover:w-64 overflow-hidden transition-all duration-500 ease-out shadow-lg hover:shadow-xl opacity-0 animate-zoom-in"
                title={social.name}
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg] bg-white group-hover:bg-transparent rounded-full">
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="w-6 h-6 sm:w-9 sm:h-9 object-contain filter" 
                  />
                </div>
                <span className="text-white font-bold text-sm sm:text-base whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-out pr-4 sm:pr-8">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center order-1 lg:order-2 w-full max-w-md lg:max-w-none mx-auto">
        <div className="absolute inset-0 bg-yellow-400/20 blur-[60px] lg:blur-[100px] rounded-full scale-75 opacity-40"></div>
        <BentoGrid />
      </div>
    </div>
  );
};

export default Hero;