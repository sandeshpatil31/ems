import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header  changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
