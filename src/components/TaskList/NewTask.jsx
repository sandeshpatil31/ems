import React from "react";

const NewTask = () => {
  return (
    <div className="flex-shrink-0 w-[320px] p-5 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl shadow-lg hover:scale-[1.03] transition-all duration-300">
      <div className="flex justify-between">
        <span className="bg-yellow-500/20 text-yellow-300 text-xs px-3 py-1 rounded-full">
          Medium
        </span>
        <span className="text-xs text-gray-200">15 April 2026</span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white">Work on Dashboard</h2>
      <p className="text-sm text-gray-200 mt-2">
        Improve Dashboard UI to User friendly
      </p>

      <div className="mt-4">
        <button className="bg-yellow-500 px-2 text-sm ">NewTask</button>
      </div>
    </div>
  );
};

export default NewTask;
