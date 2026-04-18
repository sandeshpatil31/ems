import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 w-[320px] p-5 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-lg hover:scale-[1.03] transition-all duration-300">
      {/* Top */}
      <div className="flex justify-between items-center">
        <span className="bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full">
          High
        </span>
        <span className="text-xs text-gray-200">15 April 2026</span>
      </div>
       {/* Title */}
        <h2 className="mt-4 text-xl font-semibold text-white">
          Make a YouTube Video
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-200 mt-2 leading-relaxed">
          React Hooks let you use state and lifecycle features without writing a
          class.
        </p>
        <div className="flex justify-between mt-4">
            <button className="bg-green-500 px-2 text-sm ">Mark as Completed</button>
            <button className="bg-red-500 px-2 text-sm ">Mark as Failed</button>
        </div>
    </div>
  );
};

export default AcceptTask;
