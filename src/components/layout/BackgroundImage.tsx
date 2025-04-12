
import React from 'react';

const BackgroundImage = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-10"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3')" 
      }}
      aria-hidden="true"
    />
  );
};

export default BackgroundImage;
