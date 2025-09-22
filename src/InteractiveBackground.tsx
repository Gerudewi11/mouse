import React, { useState, useCallback } from 'react';

interface FloatingElement {
  id: number;
  type: 'heart' | 'bubble';
  x: number;
  y: number;
  size: number;
  isDragging: boolean;
}

interface ComplimentPopup {
  id: number;
  text: string;
  x: number;
  y: number;
}

const InteractiveBackground: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? 'heart' : 'bubble',
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20,
      isDragging: false,
    }))
  );

  const [compliments, setCompliments] = useState<ComplimentPopup[]>([]);
  const [dragState, setDragState] = useState<{ elementId: number | null; offset: { x: number; y: number } }>({
    elementId: null,
    offset: { x: 0, y: 0 },
  });

  const complimentTexts = [
    "You're beautiful ✨",
    "You're my sunshine ☀️",
    "I love you always 💕",
    "You make me smile 😊",
    "You're amazing 🌟",
    "You're perfect 💖",
    "You're my everything 🥰",
    "You light up my world 🌈",
    "You're incredible 💫",
    "You're my heart 💗",
  ];

  const handleBackgroundClick = useCallback((e: React.MouseEvent) => {
    if (dragState.elementId !== null) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomCompliment = complimentTexts[Math.floor(Math.random() * complimentTexts.length)];
    const newCompliment: ComplimentPopup = {
      id: Date.now(),
      text: randomCompliment,
      x,
      y,
    };

    setCompliments(prev => [...prev, newCompliment]);

    setTimeout(() => {
      setCompliments(prev => prev.filter(c => c.id !== newCompliment.id));
    }, 3000);
  }, [dragState.elementId]);

  const handleMouseDown = useCallback((e: React.MouseEvent, elementId: number) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const element = elements.find(el => el.id === elementId);
    if (!element) return;

    setDragState({
      elementId,
      offset: {
        x: e.clientX - element.x,
        y: e.clientY - element.y,
      },
    });

    setElements(prev => prev.map(el => 
      el.id === elementId ? { ...el, isDragging: true } : el
    ));
  }, [elements]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragState.elementId === null) return;

    const newX = e.clientX - dragState.offset.x;
    const newY = e.clientY - dragState.offset.y;

    setElements(prev => prev.map(el => 
      el.id === dragState.elementId ? { ...el, x: newX, y: newY } : el
    ));
  }, [dragState]);

  const handleMouseUp = useCallback(() => {
    if (dragState.elementId === null) return;

    setElements(prev => prev.map(el => 
      el.id === dragState.elementId ? { ...el, isDragging: false } : el
    ));

    setDragState({ elementId: null, offset: { x: 0, y: 0 } });
  }, [dragState.elementId]);

  return (
    <div 
      className="fixed inset-0 pointer-events-auto z-0"
      onClick={handleBackgroundClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Floating Elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute cursor-grab active:cursor-grabbing transition-transform duration-200 ${
            element.isDragging ? 'scale-110 z-50' : 'hover:scale-105'
          }`}
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
          }}
          onMouseDown={(e) => handleMouseDown(e, element.id)}
        >
          {element.type === 'heart' ? (
            <div className="relative w-full h-full flex items-center justify-center opacity-80">
              <span style={{ fontSize: `${element.size * 0.8}px` }}>💖</span>
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200/40 to-rose-300/50 backdrop-blur-sm border border-pink-300/30" />
          )}
        </div>
      ))}

      {/* Compliment Popups */}
      {compliments.map((compliment) => (
        <div
          key={compliment.id}
          className="absolute pointer-events-none z-50 animate-bounce"
          style={{
            left: compliment.x,
            top: compliment.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium animate-fadeInUp">
            {compliment.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveBackground;
