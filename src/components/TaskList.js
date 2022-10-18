import React from "react";
import App from "./App";

function TaskList({ TASKS }) {

  const taskListNew = TASKS.map((task, index) => {
    return(
      <li key={index}>
      {task}
    </li>
    ) 
    
  })

  return (
    <div className="tasks">
      {taskListNew}
    </div>
  );
}

export default TaskList;
