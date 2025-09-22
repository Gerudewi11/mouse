import React, { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  isDragging: boolean;
  type: 'bubble' | 'heart';
  size: number;
}

interface Compliment {
  id: number;
  text: string;
  x: number;
  y: number;
  opacity: number;
}

const FloatingBubbles: React.FC = () => {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [compliments, setCompliments] = useState<Compliment[]>([]);
  const [draggedElement, setDraggedElement] = useState<number | null>(null);

  const complimentTexts = [
    "You're absolutely beautiful! 💕",
    "You light up my world! ✨",
    "You're my everything! 💖",
    "You make me so happy! 😊",
    "You're perfect just as you are! 🌟",
    "I love your smile! 😍",
    "You're incredibly strong! 💪",
    "You're my best friend! 👫",
    "You inspire me daily! 🌈",
    "You're absolutely amazing! 🦋",
    "You're my sunshine! ☀️",
    "You're so precious to me! 💎"
  ];

  useEffect(() => {
    // Initialize floating elements
    const elements: FloatingElement[] = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        isDragging: false,
        type: Math.random() > 0.7 ? 'heart' : 'bubble',
        size: 20 + Math.random() * 40
      });
    }
    setFloatingElements(elements);
  }, []);

  const handleMouseDown = (e: React.MouseEvent, elementId: number) => {
    e.preventDefault();
    setDraggedElement(elementId);
  };

  const handleTouchStart = (e: React.TouchEvent, elementId: number) => {
    e.preventDefault();
    setDraggedElement(elementId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedElement !== null) {
      setFloatingElements(prev => prev.map(el => 
        el.id === draggedElement 
          ? { ...el, x: e.clientX - el.size/2, y: e.clientY - el.size/2, isDragging: true }
          : el
      ));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (draggedElement !== null && e.touches[0]) {
      const touch = e.touches[0];
      setFloatingElements(prev => prev.map(el => 
        el.id === draggedElement 
          ? { ...el, x: touch.clientX - el.size/2, y: touch.clientY - el.size/2, isDragging: true }
          : el
      ));
    }
  };

  const handleMouseUp = () => {
    setDraggedElement(null);
    setFloatingElements(prev => prev.map(el => ({ ...el, isDragging: false })));
  };

  const handlePageClick = (e: React.MouseEvent) => {
    if (draggedElement === null) {
      const randomCompliment = complimentTexts[Math.floor(Math.random() * complimentTexts.length)];
      const newCompliment: Compliment = {
        id: Date.now(),
        text: randomCompliment,
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      };
      
      setCompliments(prev => [...prev, newCompliment]);
      
      // Remove compliment after animation
      setTimeout(() => {
        setCompliments(prev => prev.filter(c => c.id !== newCompliment.id));
      }, 3000);
    }
  };

  const handlePageTouch = (e: React.TouchEvent) => {
    if (draggedElement === null && e.touches[0]) {
      const touch = e.touches[0];
      const randomCompliment = complimentTexts[Math.floor(Math.random() * complimentTexts.length)];
      const newCompliment: Compliment = {
        id: Date.now(),
        text: randomCompliment,
        x: touch.clientX,
        y: touch.clientY,
        opacity: 1
      };
      
      setCompliments(prev => [...prev, newCompliment]);
      
      setTimeout(() => {
        setCompliments(prev => prev.filter(c => c.id !== newCompliment.id));
      }, 3000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onClick={handlePageClick}
      onTouchStart={handlePageTouch}
    >
      {/* Draggable floating elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute cursor-grab active:cursor-grabbing transition-all duration-300 ${
            element.isDragging ? 'scale-110 z-50' : 'z-10'
          } ${
            element.type === 'heart' 
              ? 'text-pink-400' 
              : 'bg-gradient-to-tr from-pink-200/30 to-rose-300/40 backdrop-blur-sm rounded-full border border-pink-200/20'
          }`}
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          onMouseDown={(e) => handleMouseDown(e, element.id)}
          onTouchStart={(e) => handleTouchStart(e, element.id)}
        >
          {element.type === 'heart' && (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full animate-pulse"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          )}
        </div>
      ))}
      
      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-pink-300 rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Floating compliments */}
      {compliments.map((compliment) => (
        <div
          key={compliment.id}
          className="absolute pointer-events-none z-50 animate-float-up"
          style={{
            left: `${compliment.x - 50}px`,
            top: `${compliment.y}px`,
          }}
        >
          <div className="bg-pink-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
            {compliment.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;