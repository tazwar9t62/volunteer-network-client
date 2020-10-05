import React, { useEffect, useState } from "react";
import TaskDetails from "./TaskDetails";

const Tasks = () => {
  let [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://young-bayou-15947.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div>
      {tasks.map((task) => (
        <TaskDetails key={task._id} task={task}></TaskDetails>
      ))}
    </div>
  );
};

export default Tasks;
