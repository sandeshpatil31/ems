import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>

      <div className="">
        {userData.map(function (task, idx) {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-lg">
              <h2 className="text-lg font-medium w-1/5 ">
              {task.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {task.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-600">
                {task.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white">
                {task.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {task.taskCounts.completed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
