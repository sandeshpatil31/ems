import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[270px] overflow-x-auto flex gap-6 w-full py-5 mt-10 px-2 scroll-smooth"
    >
      {/* CARD */}
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

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-300">Assigned to Sandesh</span>
          <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition">
            View
          </button>
        </div>
      </div>

      {/* Duplicate cards */}
      <div className="flex-shrink-0 w-[320px] p-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg hover:scale-[1.03] transition-all duration-300">
        <div className="flex justify-between">
          <span className="bg-yellow-500/20 text-yellow-300 text-xs px-3 py-1 rounded-full">
            Medium
          </span>
          <span className="text-xs text-gray-200">15 April 2026</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-white">Fix UI Bugs</h2>
        <p className="text-sm text-gray-200 mt-2">
          Improve responsiveness and layout issues.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-300">Assigned to Rahul</span>
          <button className="text-xs bg-white/20 px-3 py-1 rounded-full">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
