
import React from 'react';

interface LoaderProps {
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullScreen = true }) => {
  return (
    <div className={`
      ${fullScreen ? 'fixed inset-0 z-[100] bg-bg-beige flex-col' : 'relative py-20 flex-col'} 
      flex items-center justify-center transition-opacity duration-500
    `}>
      <div className="relative">
        {/* Breathing Ring */}
        <div className="absolute inset-0 scale-150 bg-primary/10 rounded-full animate-ping opacity-20"></div>
        
        {/* Branded Icon */}
        <div className="size-24 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary/20 relative z-10 animate-pulse">
          <span className="material-symbols-outlined text-5xl">eco</span>
        </div>
      </div>

      <div className="mt-12 text-center space-y-4">
        <h2 className="text-primary font-extrabold tracking-[0.3em] uppercase text-xs animate-pulse">
          Jaini Food
        </h2>
        <p className="text-neutral-grey text-sm font-medium italic">
          Gathering the harvest...
        </p>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-primary rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
