import React from 'react'
import Header from '../other/Header'
import TaskListCount from '../other/TaskListCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ changeUser, data }) => {
  if (!data) return null;

  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen'>
      <Header changeUser={changeUser} data={data} />
      <TaskListCount data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard