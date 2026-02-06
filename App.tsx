import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// SoundWave Component - Canvas based particle wave
const SoundWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    const startTime = performance.now(); 

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight * 0.45; // Increased height coverage

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.02; 
      const now = performance.now();
      const elapsed = (now - startTime) / 2500;
      const progress = Math.min(1, elapsed);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const width = parseFloat(canvas.style.width);
      const height = parseFloat(canvas.style.height);
      ctx.clearRect(0, 0, width, height);

      const rows = 45; 
      const stepX = 6; 
      const centerY = height * 0.6;

      // Swap to Column-Major loop to optimize gradient rendering (Left -> Right)
      for (let x = 0; x < width; x += stepX) {
        const progressX = x / width;
        
        // Gradient: White (Left) -> Neon Yellow (Right)
        // White: 255, 255, 255
        // Neon Yellow Target: 255, 220, 0
        
        const rVal = 255;
        const gVal = Math.floor(255 - (35 * progressX)); // 255 -> 220
        const bVal = Math.floor(255 - (255 * progressX)); // 255 -> 0

        ctx.fillStyle = `rgb(${rVal}, ${gVal}, ${bVal})`;

        for (let r = 0; r < rows; r++) {
          const normR = r / rows; 
          const rowOffset = r * 0.1;
          
          // Alpha based on row to create the "tube" fade effect
          const alpha = 0.85 * Math.sin(normR * Math.PI) * easeOut;
          
          if (alpha < 0.01) continue; // Skip invisible particles

          ctx.globalAlpha = alpha;

          const y1 = Math.sin(x * 0.003 + time + rowOffset) * (height * 0.25) * easeOut;
          const y2 = Math.sin(x * 0.008 - time * 0.8 + rowOffset * 1.5) * (height * 0.1) * easeOut;
          const spread = (r - rows / 2) * 3 * easeOut; 
          const y = centerY + y1 + y2 + spread;
          const size = 1.8; 
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Reset global alpha for next frame/other draws
      ctx.globalAlpha = 1.0;
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed bottom-0 left-0 w-full h-[45vh] pointer-events-none z-[-5]"
    />
  );
};

const App: React.FC = () => {
  const bgImage = "https://images.unsplash.com/photo-1590602846581-7d3eec520d07?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative min-h-screen bg-transparent selection:bg-black selection:text-white overflow-x-hidden flex flex-col">
      
      {/* Background Image Layer */}
      <div className="fixed inset-0 w-full h-full -z-30 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        
        {/* Left-side Yellow Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FACC15]/80 via-[#FACC15]/30 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FACC15]/60 via-transparent to-transparent" />
      </div>

      {/* Abstract Gradients - Reduced opacity to keep image visible */}
      <div className="gradient-wrapper opacity-20">
        {/* Primary Blob - White */}
        <div className="gradient-blob bg-white top-0 left-0" style={{ animation: 'float-slow 22s infinite linear' }} />
        {/* Accent Blob - Orange */}
        <div className="gradient-blob bg-orange-400/30 bottom-0 right-0" style={{ animation: 'float-medium 28s infinite linear' }} />
      </div>
      
      <Navbar />
      <SoundWave />
      
      <main className="container mx-auto px-6 lg:px-12 relative z-0 flex-grow flex flex-col justify-center">
        <Hero />
      </main>
    </div>
  );
};

export default App;