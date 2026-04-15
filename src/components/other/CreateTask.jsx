import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <form className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Create New Task 🚀
        </h2>

        <div className="flex gap-8">
          {/* LEFT SIDE */}
          <div className="w-1/2 space-y-5">
            <div>
              <label className="text-gray-300 text-sm">Task Title</label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Date</label>
              <input
                type="date"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Assign to</label>
              <input
                type="text"
                placeholder="employee name"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Category</label>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <label className="text-gray-300 text-sm">Description</label>
              <textarea
                rows="8"
                placeholder="Enter task description..."
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all text-white font-semibold py-3 rounded-lg shadow-lg mt-5">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
