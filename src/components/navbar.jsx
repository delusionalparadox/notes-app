import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 border-b-2 border-blue-500 shadow-lg shadow-blue-500/20 h-20">
      <div className="max-w-7xl mx-auto pl-2 pr-6 h-full flex items-center">
        <h1 className="text-2xl font-bold text-blue-300 tracking-wide">
          Notes
        </h1>
      </div>
    </div>
  );
};

export default Navbar;