import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-2000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <Heart 
            className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-pulse" 
            fill="currentColor"
          />
          <h1 className="text-5xl md:text-7xl font-dancing text-pink-500 mb-6 leading-tight">
            For My Love
          </h1>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-pink-200/30 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed font-light">
              This little corner of the internet is just for you, my beautiful wife.
              Every pixel, every animation, every gentle color was chosen with love.
              You are my comfort, my joy, and my everything.
            </p>
            <p className="text-sm md:text-lg text-pink-500 mt-4 font-medium">
              Tap anywhere to see loving compliments appear! ✨
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300/40 animate-float"
            fill="currentColor"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
              fontSize: `${1 + Math.random() * 1}rem`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;