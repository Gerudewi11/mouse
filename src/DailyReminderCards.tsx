import React, { useState } from 'react';

interface ReminderCard {
  id: number;
  title: string;
  message: string;
  emoji: string;
}

const DailyReminderCards: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const reminders: ReminderCard[] = [
    {
      id: 1,
      title: "You Are Loved",
      message: "Every morning when I wake up, my first thought is how grateful I am to have you in my life. Your love fills my heart with endless joy.",
      emoji: "💖"
    },
    {
      id: 2,
      title: "You Are Beautiful",
      message: "Your beauty shines from within and radiates outward. Your smile can light up the darkest room and your eyes hold all the stars in the universe.",
      emoji: "✨"
    },
    {
      id: 3,
      title: "You Are Strong",
      message: "You have overcome so much and continue to face each day with courage. Your strength inspires me and everyone around you.",
      emoji: "💪"
    },
    {
      id: 4,
      title: "You Are Special",
      message: "There is no one else like you in this world. Your unique spirit, your laugh, your way of seeing things - everything about you is wonderfully special.",
      emoji: "🌟"
    },
    {
      id: 5,
      title: "You Are Enough",
      message: "You don't need to change anything about yourself. You are perfect exactly as you are, and you are more than enough for me and for this world.",
      emoji: "🦋"
    },
    {
      id: 6,
      title: "You Are My Joy",
      message: "Your happiness is my happiness. Seeing you smile is the highlight of my day. You bring so much joy and laughter into my life.",
      emoji: "😊"
    }
  ];

  const toggleCard = (cardId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {reminders.map((reminder) => (
        <div
          key={reminder.id}
          className="relative h-48 cursor-pointer group perspective-1000"
          onClick={() => toggleCard(reminder.id)}
        >
          <div
            className={`relative w-full h-full transition-all duration-[800ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) transform-style-preserve-3d ${
              flippedCards.has(reminder.id) ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl p-6 shadow-lg border border-pink-200/50 flex flex-col items-center justify-center text-center card-hover transition-all duration-[600ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) hover-glow bloom">
                <div className="text-4xl mb-4 bloom animate-gentle-pulse">{reminder.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 bloom">{reminder.title}</h3>
                <p className="text-sm text-pink-600 font-medium bloom">Tap to read message</p>
              </div>
            </div>

            {/* Back of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
              <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-200 rounded-2xl p-6 shadow-lg border border-rose-200/50 flex flex-col justify-center text-center transition-all duration-[600ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) bloom">
                <div className="text-2xl mb-3 bloom animate-gentle-pulse">{reminder.emoji}</div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 bloom">{reminder.message}</p>
                <p className="text-xs text-pink-600 font-medium bloom">Tap to close</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyReminderCards;
