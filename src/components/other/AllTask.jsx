import React from "react";

const AllTask = () => {
  return (
    <div className="bg-[#1C1C1C] p-6 rounded-2xl mt-5 shadow-lg">
      {/* Header */}
      <div className="flex justify-between text-gray-400 text-sm mb-4 px-2">
        <h4>Employee</h4>
        <h4>Task</h4>
        <h4>Status</h4>
      </div>

      {/* Task Item */}
      <div className="bg-white/5 hover:bg-white/10 transition-all mb-3 py-3 px-4 flex items-center justify-between rounded-xl border border-white/10">
        <h2 className="text-white font-medium">Sandesh</h2>
        <h3 className="text-gray-300">Make UI Design</h3>
        <span className="bg-red-500/20 text-red-400 text-sm px-3 py-1 rounded-full">
          Pending
        </span>
      </div>

      {/* Task Item */}
      <div className="bg-white/5 hover:bg-white/10 transition-all mb-3 py-3 px-4 flex items-center justify-between rounded-xl border border-white/10">
        <h2 className="text-white font-medium">Sandesh</h2>
        <h3 className="text-gray-300">Make UI Design</h3>
        <span className="bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full">
          In Progress
        </span>
      </div>

      {/* Task Item */}
      <div className="bg-white/5 hover:bg-white/10 transition-all py-3 px-4 flex items-center justify-between rounded-xl border border-white/10">
        <h2 className="text-white font-medium">Sandesh</h2>
        <h3 className="text-gray-300">Make UI Design</h3>
        <span className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full">
          Completed
        </span>
      </div>
    </div>
  );
};

export default AllTask;
