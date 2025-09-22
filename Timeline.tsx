import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';

const Timeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    {
      icon: Star,
      title: "The Day We Met",
      description: "From that very first moment, I knew you were someone special. Your laugh, your smile - everything about you captured my heart instantly.",
      date: "Our Beginning"
    },
    {
      icon: Calendar,
      title: "Our First Date",
      description: "Nervous butterflies, endless conversations, and the realization that I wanted to spend every day getting to know you better.",
      date: "Chapter 1"
    },
    {
      icon: MapPin,
      title: "Adventures Together",
      description: "Every journey with you is an adventure. From quiet moments at home to exploring new places - you make everything magical.",
      date: "Our Story"
    },
    {
      icon: Star,
      title: "Forever and Always",
      description: "Here we are today, and my love for you grows stronger with each passing moment. You are my today and all my tomorrows.",
      date: "Our Future"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-dancing text-pink-500 text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Our Love Story
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-rose-400 rounded-full opacity-30"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease-out ${index * 0.2}s`
                }}
              >
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <event.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-lg border border-pink-200/30 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="text-sm text-pink-500 font-medium mb-2">{event.date}</div>
                    <h3 className="text-xl md:text-2xl font-dancing text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">{event.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;