import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Sun, Heart } from 'lucide-react';

const Encouragement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
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

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const dailyReminders = [
    {
      icon: Sun,
      frontText: "Tap for sunshine ☀️",
      backText: "You light up every room you enter with your beautiful smile and warm heart. Your presence brings joy to everyone around you.",
      color: "from-yellow-200 to-orange-300"
    },
    {
      icon: Heart,
      frontText: "Tap for love 💕",
      backText: "You are deeply loved and cherished beyond measure. Every day I fall in love with you all over again.",
      color: "from-pink-200 to-rose-300"
    },
    {
      icon: Sparkles,
      frontText: "Tap for strength ✨",
      backText: "Your inner strength and resilience inspire everyone around you. You handle challenges with such grace and courage.",
      color: "from-purple-200 to-pink-300"
    },
    {
      icon: Sun,
      frontText: "Tap for happiness 🌈",
      backText: "You deserve all the happiness, love, and beautiful moments this world has to offer. You are worthy of every good thing.",
      color: "from-blue-200 to-purple-300"
    },
    {
      icon: Heart,
      frontText: "Tap for beauty 🌸",
      backText: "You make the world a more beautiful place simply by being in it. Your kindness and love touch so many lives.",
      color: "from-green-200 to-blue-300"
    },
    {
      icon: Sparkles,
      frontText: "Tap for perfection 💖",
      backText: "You are perfect exactly as you are. Don't let anyone make you feel like you need to change - you are absolutely wonderful.",
      color: "from-pink-200 to-purple-300"
    },
    {
      icon: Sun,
      frontText: "Tap for confidence 🌟",
      backText: "You are capable of amazing things. Trust in yourself and your abilities - you have everything you need within you.",
      color: "from-yellow-200 to-pink-300"
    },
    {
      icon: Heart,
      frontText: "Tap for comfort 🤗",
      backText: "Whenever you need comfort, remember that you are safe, loved, and supported. You never have to face anything alone.",
      color: "from-rose-200 to-pink-300"
    },
    {
      icon: Sparkles,
      frontText: "Tap for magic ✨",
      backText: "You bring magic into ordinary moments. Your laughter, your hugs, your presence - they all make life extraordinary.",
      color: "from-purple-200 to-rose-300"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-dancing text-pink-500 text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Daily Reminders for You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dailyReminders.map((reminder, index) => {
            const isFlipped = flippedCards.has(index);
            return (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className={`relative h-48 md:h-52 cursor-pointer group`}
                onClick={() => handleCardClick(index)}
              >
                {/* Card container with flip effect */}
                <div className={`relative w-full h-full transition-transform duration-700 transform-gpu preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}>
                  {/* Front of card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br ${reminder.color} rounded-3xl p-6 shadow-lg border border-white/30 backdrop-blur-sm group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center`}>
                    <reminder.icon className="w-12 h-12 text-white mb-4 animate-pulse group-hover:animate-bounce" />
                    <p className="text-gray-700 font-medium text-lg leading-relaxed">
                      {reminder.frontText}
                    </p>
                    <div className="mt-4 text-xs text-gray-600 opacity-70">
                      Click to reveal message
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br ${reminder.color} rounded-3xl p-6 shadow-lg border border-white/30 backdrop-blur-sm flex flex-col items-center justify-center text-center`}>
                    <Heart className="w-8 h-8 text-white mb-4 animate-pulse" fill="currentColor" />
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">
                      {reminder.backText}
                    </p>
                    <div className="mt-4 text-xs text-gray-600 opacity-70">
                      Click to close
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
        
        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1s' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-200/30 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed font-light italic">
              "Whenever you're feeling down, remember that you are loved beyond measure. 
              You are my strength, my joy, and my reason to smile every single day. 
              Never forget how amazing you are." 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Encouragement;