import { forwardRef } from 'react';

const Preloader = forwardRef(({ progressBarRef }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 animate-pulse">
        AYOUB GHOUZALI
      </div>
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
        <div
          ref={progressBarRef}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-red-600 w-0"
        />
      </div>
      <div className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
        Initializing Core Systems...
      </div>
    </div>
  );
});

Preloader.displayName = 'Preloader';

export default Preloader;
