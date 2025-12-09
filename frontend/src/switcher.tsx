import React, { useState } from 'react';

const Switcher = () => {
  const [isUkr, setIsUkr] = useState(true);

  const toggleLanguage = () => {
    setIsUkr(!isUkr);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-20 h-8 bg-violet-600 rounded-full flex items-center p-1 cursor-pointer shadow-xl hover:bg-purple-700 transition-colors group"
      aria-label="Switch Language"
    >
      <span className={`absolute left-3 text-xs font-bold text-white/60 transition-opacity duration-300 ${isUkr ? 'opacity-0' : 'opacity-100'}`}>
        UA
      </span>
      <span className={`absolute right-3 text-xs font-bold text-white/60 transition-opacity duration-300 ${!isUkr ? 'opacity-0' : 'opacity-100'}`}>
        EN
      </span>

      <div
        className={`
          h-6 w-7 bg-white rounded-full shadow-md flex items-center justify-center 
          text-violet-600 font-bold text-sm transform transition-transform duration-300
          ${isUkr ? 'translate-x-0' : 'translate-x-11'}
        `}
      >
        {isUkr ? 'UA' : 'EN'}
      </div>
    </button>
  );
};

export default Switcher;
//w-24 h-12