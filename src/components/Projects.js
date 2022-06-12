import React from 'react';

export const Projects = () => {
  return (
    <div className="w-full h-[600px]">
      {/* Top */}
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full bg-slate-400">
          <div></div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-1/2 h-full bg-yellow-400">
          <div className="bg-yellow-400"></div>
          <div className="bg-purple-800"></div>
          <div className="bg-gray-300"></div>
          <div className="bg-black"></div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full bg-pink-800">
          <div></div>
        </div>
        <div className="w-1/2 h-full bg-slate-800">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
