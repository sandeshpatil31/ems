import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[270px] overflow-x-auto flex flex-wrap gap-6 w-full py-5 mt-10 px-2 scroll-smooth">
      <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/>
    </div>
  );
};

export default TaskList;
