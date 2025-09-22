import React, { useEffect, useRef, useState } from 'react';

const BubbleGallery: React.FC = () => {
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

  const bubbles = [
    { size: 'w-32 h-32', delay: 0 },
    { size: 'w-40 h-40', delay: 200 },
    { size: 'w-36 h-36', delay: 400 },
    { size: 'w-44 h-44', delay: 600 },
    { size: 'w-32 h-32', delay: 800 },
    { size: 'w-38 h-38', delay: 1000 },
    { size: 'w-42 h-42', delay: 1200 },
    { size: 'w-36 h-36', delay: 1400 },
    { size: 'w-40 h-40', delay: 1600 },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-dancing text-pink-500 text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Our Beautiful Moments
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {bubbles.map((bubble, index) => (
            <div
              key={index}
              className={`${bubble.size} rounded-full bg-gradient-to-br from-pink-200 to-rose-300 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-3 flex items-center justify-center border-4 border-white/50 backdrop-blur-sm cursor-pointer group ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{ transitionDelay: `${bubble.delay}ms` }}
            >
              {/* Placeholder for images - you can replace these divs with img tags */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center text-pink-400 text-sm font-medium group-hover:text-pink-500 transition-colors duration-300 relative overflow-hidden">
                {/* Replace with: <img src="your-image.jpg" alt="" className="w-full h-full object-cover rounded-full" /> */}
                Photo {index + 1}
                <div className="absolute inset-0 bg-pink-300/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BubbleGallery;