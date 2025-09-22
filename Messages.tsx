import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Messages: React.FC = () => {
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

  const messages = [
    {
      text: "Every morning I wake up grateful to have you in my life. Your smile is the sunshine that brightens my darkest days.",
      delay: 0,
      author: "Your Loving Husband"
    },
    {
      text: "You are stronger than you know, more beautiful than you believe, and more loved than you could ever imagine.",
      delay: 300,
      author: "From My Heart"
    },
    {
      text: "In a world full of temporary things, you are my forever. My heart belongs to you, always and completely.",
      delay: 600,
      author: "Forever Yours"
    },
    {
      text: "Your laugh is my favorite sound, your smile my favorite sight, and your happiness my greatest mission in life.",
      delay: 900,
      author: "With All My Love"
    },
    {
      text: "Even on your hardest days, remember that you are my hero, my inspiration, and the most amazing person I know.",
      delay: 1200,
      author: "Your Biggest Fan"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-r from-pink-50 to-rose-100">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-dancing text-pink-500 text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Love Letters to You
        </h2>
        
        <div className="space-y-12">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : `${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'} opacity-0`
              }`}
              style={{ transitionDelay: `${message.delay}ms` }}
            >
              <div className={`flex items-start gap-4 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <MessageCircle className="w-8 h-8 text-pink-400 mt-2 flex-shrink-0 animate-pulse" />
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-pink-200/30 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    "{message.text}"
                  </p>
                  <div className="text-right">
                    <span className="text-sm text-pink-500 font-medium">
                      — {message.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;