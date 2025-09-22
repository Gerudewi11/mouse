import React from 'react';

interface TimelineItem {
  title: string;
  description: string;
  date?: string;
}

interface TimelineProps {
  items?: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items = [] }) => {
  const defaultItems: TimelineItem[] = [
    {
      title: "First Meeting",
      description: "The moment our eyes met, I knew you were special. Your smile lit up the entire room.",
      date: "The Beginning"
    },
    {
      title: "First Date",
      description: "Coffee turned into hours of conversation. Time seemed to stop when I was with you.",
      date: "A Beautiful Start"
    },
    {
      title: "Falling in Love",
      description: "Every day with you brought new joy. You became my sunshine on cloudy days.",
      date: "Pure Magic"
    },
    {
      title: "Forever Together",
      description: "Now and always, you are my heart, my home, my everything. I love you endlessly.",
      date: "Always & Forever"
    }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-rose-400 to-pink-500 rounded-full" />
      
      {displayItems.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center mb-16 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          <div
            className={`w-full md:w-5/12 ${
              index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-200/50 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="text-sm font-medium text-pink-500 mb-2">{item.date}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full border-4 border-white shadow-lg z-10" />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
