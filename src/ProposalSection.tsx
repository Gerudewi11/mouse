import React from 'react';

const ProposalSection: React.FC = () => {
  return (
    <section className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          {/* Ring Emoji */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="text-8xl animate-pulse">💍</div>
            
            {/* Sparkles around the ring emoji */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle" />
            <div className="absolute -top-3 right-2 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-2 -right-3 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle" style={{ animationDelay: '0.6s' }} />
            <div className="absolute bottom-1 -left-3 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.9s' }} />
            <div className="absolute -bottom-2 right-1 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle" style={{ animationDelay: '1.2s' }} />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-cursive gradient-text mb-8 leading-tight">
          Will You Marry Me?
        </h2>
        
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/80 to-rose-100/80 backdrop-blur-lg relative overflow-hidden">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-rose-300/10 to-pink-400/10 animate-pulse" />
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-6">
              My dearest love, you have filled my life with more joy, laughter, and happiness than I ever thought possible. 
              Every day with you feels like a beautiful dream that I never want to wake up from.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-6">
              You are my best friend, my greatest love, and my perfect partner. I want to spend the rest of my life 
              making you smile, holding your hand, and creating countless more beautiful memories together.
            </p>
            <p className="text-xl md:text-2xl font-cursive gradient-text font-semibold">
              Will you do me the incredible honor of becoming my wife? 💍
            </p>
          </div>
          
          {/* Heart emojis inside the card */}
          <div className="absolute top-4 left-4 text-lg animate-bounce" style={{ animationDelay: '0s' }}>💕</div>
          <div className="absolute top-8 right-6 text-base animate-bounce" style={{ animationDelay: '0.5s' }}>💖</div>
          <div className="absolute bottom-6 left-8 text-base animate-bounce" style={{ animationDelay: '1s' }}>💗</div>
          <div className="absolute bottom-4 right-4 text-lg animate-bounce" style={{ animationDelay: '1.5s' }}>💝</div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;
