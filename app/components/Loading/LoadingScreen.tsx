import React from 'react';

const LoadingScreen = () => {
  
  return (
    <div className="flex justify-center min-h-screen pt-60">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-primary h-16 w-16 pt-50 md:h-24 md:w-24">
      </div>
    </div>
  );
};

export default LoadingScreen;
