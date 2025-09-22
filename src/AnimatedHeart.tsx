import React from 'react';

const BubbleGallery: React.FC = () => {
  // Replace these image URLs with your own images
  // Simply change the URLs below to add your personal photos
  const images = [
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=300&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop&crop=center',
    // Add more image URLs here as needed
    // 'path/to/your/image5.jpg',
    // 'path/to/your/image6.jpg',
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative aspect-square"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 p-1 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
              <img
                src={image}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
};

export default BubbleGallery;
