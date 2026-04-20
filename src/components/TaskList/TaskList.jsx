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
      {data.tasks.map((elem, i) => {
        if (elem.active) return <AcceptTask key={i} data={elem} />
        if (elem.newTask) return <NewTask key={i} data={elem} />
        if (elem.completed) return <CompleteTask key={i} data={elem} />
        if (elem.failed) return <FailedTask key={i} data={elem} />
      })}
    </div>
  );
};

export default TaskList;
