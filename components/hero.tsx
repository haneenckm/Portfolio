'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building beautiful, functional web applications with modern technologies";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Interactive Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, var(--accent) 0%, transparent 25%)`,
          filter: 'blur(80px)',
          transition: 'background 0.15s ease-out'
        }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10 transition-all duration-700 delay-100 translate-y-0 opacity-100">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-primary leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Full Stack <br />
            <span className="text-accent underline decoration-primary/10 decoration-8 underline-offset-8">Developer</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto h-16 sm:h-auto font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Get In Touch
            <span className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
          </button>
          <button
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View Resume
          </button>
        </div>

        <div className="pt-20 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
            <div className="w-1 h-2 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll-inner" />
          </div>
        </div>
      </div>
    </section>
  );
}
