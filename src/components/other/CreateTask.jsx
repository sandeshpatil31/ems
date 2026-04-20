import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);


  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data = userData
    console.log(data)
    

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        //  elem.taskCounts = elem.taskCounts.newTask+1
      }
    })
    setUserData(data)
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  }
  

  return (
    <div className="mt-10 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Create New Task 🚀
        </h2>

        <div className="flex gap-8">
          {/* LEFT SIDE */}
          <div className="w-1/2 space-y-5">
            <div>
              <label className="text-gray-300 text-sm">Task Title</label>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                type="text"
                placeholder="Make a UI design"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Date</label>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                type="date"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Assign to</label>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                type="text"
                placeholder="employee name"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Category</label>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
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
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
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
