import React, { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';

const Closing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-t from-pink-200 via-rose-100 to-pink-50 min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-2000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
        }`}>
          <div className="relative mb-8">
            <Heart 
              className="w-20 h-20 text-pink-400 mx-auto animate-glow" 
              fill="currentColor"
            />
            {/* Pulsing rings around the heart */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-pink-300/30 rounded-full animate-ping"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-pink-200/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-dancing text-pink-500 mb-8 leading-tight">
            Forever Yours
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200/30 mb-8">
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-light mb-6">
              This website is just a small token of the infinite love I have for you.
              Every day with you is a gift, every moment a treasure.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
              Thank you for being my wife, my best friend, my everything.
              I love you more than words could ever express. 💖
            </p>
          </div>
          
          <div className="text-xl md:text-2xl font-dancing text-pink-400 animate-bounce">
            Always and Forever, Your Loving Husband
          </div>
        </div>
      </div>
      
      {/* Final floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300/30 animate-float-slow"
            fill="currentColor"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + i * 0.3}s`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Closing;