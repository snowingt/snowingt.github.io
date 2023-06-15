import React from 'react';

const Labs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Oops, Labs Not Available Yet!</h1>
      <p className="text-xl mb-8">Please check back later.</p>
      
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold transition-colors duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Labs;
