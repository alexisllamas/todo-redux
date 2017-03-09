import React from 'react';

const Task = ({task, completed, toggleComplete}) => (
  <li onClick={toggleComplete} className={completed ? 'completed' : ''}>
    {task}
  </li>
);

export default Task;
