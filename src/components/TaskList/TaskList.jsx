import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex flex-wrap gap-6 w-full py-5 mt-10 px-2" >
      {data.tasks.map((task, i) => {
        if (task.active) return <AcceptTask key={i} task={task} />
        if (task.newTask) return <NewTask key={i} task={task} />
        if (task.completed) return <CompleteTask key={i} task={task} />
        if (task.failed) return <FailedTask key={i} task={task} />
      })}
    </div>
  );
};

export default TaskList;
